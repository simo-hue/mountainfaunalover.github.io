import { posts } from "@/data/posts";

export const dynamic = 'force-static';

export default function sitemap() {
    const baseUrl = "https://mountainfaunalover.github.io"; // Replace with actual domain when live

    // Static routes
    const routes = [
        "",
        "/founder",
        "/social",
        "/partners",
        "/blog",
        "/faq",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic blog posts
    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...routes, ...blogPosts];
}
