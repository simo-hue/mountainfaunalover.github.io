import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { posts } from "@/data/posts";
import styles from "./page.module.css";

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

function calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
}

export default function BlogPost({ params }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    const readTime = calculateReadTime(post.content);
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

            <div className={styles.content}>
                <p>{post.content}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className={styles.shareSection}>
                <h3 className={styles.shareTitle}>Condividi questo articolo</h3>
                <div className={styles.shareButtons}>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.shareButton}
                        aria-label="Condividi su Facebook"
                    >
                        <Facebook size={20} />
                        <span>Facebook</span>
                    </a>
                    <a
                        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.shareButton}
                        aria-label="Condividi su Twitter"
                    >
                        <Twitter size={20} />
                        <span>Twitter</span>
                    </a>
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.shareButton}
                        aria-label="Condividi su LinkedIn"
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(shareUrl);
                            alert('Link copiato!');
                        }}
                        className={styles.shareButton}
                        aria-label="Copia link"
                    >
                        <LinkIcon size={20} />
                        <span>Copia Link</span>
                    </button>
                </div>
            </div>
        </article>
    );
}
