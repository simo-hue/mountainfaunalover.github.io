import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

function getFilesRecursively(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFilesRecursively(filePath));
        } else {
            if (filePath.endsWith('.md') && !file.startsWith('_')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

export function getAllPosts() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const filePaths = getFilesRecursively(postsDirectory);
    const allPostsData = filePaths.map((filePath) => {
        const fileName = path.basename(filePath);
        const slug = fileName.replace(/\.md$/, '');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            slug,
            ...matterResult.data,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    const filePaths = getFilesRecursively(postsDirectory);
    return filePaths.map((filePath) => {
        const fileName = path.basename(filePath);
        return {
            params: {
                slug: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostBySlug(slug) {
    if (!fs.existsSync(postsDirectory)) {
        return null;
    }

    const filePaths = getFilesRecursively(postsDirectory);
    const filePath = filePaths.find(path => path.endsWith(`${slug}.md`));

    if (!filePath) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    };
}

export function getRelatedPosts(currentSlug, category, limit = 3) {
    const allPosts = getAllPosts();

    return allPosts
        .filter(post => post.category === category && post.slug !== currentSlug)
        .slice(0, limit);
}
