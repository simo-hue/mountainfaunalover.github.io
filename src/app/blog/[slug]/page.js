import ReadingProgress from "@/components/ReadingProgress";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import styles from "./page.module.css";

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

function calculateReadTime(content) {
    const wordsPerMinute = 200;
    // Strip HTML tags for word count
    const text = content.replace(/<[^>]*>?/gm, '');
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

export default async function BlogPost({ params }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(post.slug, post.category);
    const readTime = calculateReadTime(post.contentHtml);
    const shareUrl = `https://mountainfaunalover.com/blog/${post.slug}`;
    const shareText = encodeURIComponent(post.title);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": `https://mountainfaunalover.com${post.image}`,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Person",
            "name": "Simone Mattioli",
            "url": "https://mountainfaunalover.com/founder"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Mountain & Fauna Lover",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mountainfaunalover.com/images/branding/logo.jpg"
            }
        },
        "description": post.excerpt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": shareUrl
        }
    };

    return (
        <article className={styles.container}>
            <ReadingProgress />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <Link href="/blog" className={styles.backLink}>
                <ArrowLeft size={20} /> Torna al Blog
            </Link>

            <header className={styles.header}>
                <div className={styles.meta}>
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('it-IT', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                    <span className={styles.separator}>•</span>
                    <span>{readTime} min di lettura</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.category}>{post.category}</span>
                </div>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.author}>
                    <span>Di <strong>Simone Mattioli</strong></span>
                </div>
            </header>

            <div className={styles.imageContainer}>
                <Image
                    src={post.image}
                    alt={`${post.title} - Mountain & Fauna Lover`}
                    fill
                    className={styles.image}
                    priority
                />
            </div>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <ShareButtons title={post.title} slug={post.slug} />
            <RelatedPosts posts={relatedPosts} />
        </article>
    );
}
