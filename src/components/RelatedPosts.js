import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./RelatedPosts.module.css";

export default function RelatedPosts({ posts }) {
    if (!posts || posts.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Potrebbe interessarti anche...</h3>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.date}>{post.date}</span>
                            <h4 className={styles.cardTitle}>{post.title}</h4>
                            <span className={styles.readMore}>
                                Leggi <ArrowRight size={14} />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
