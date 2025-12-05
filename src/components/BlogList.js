"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./BlogList.module.css";

const CATEGORIES = ["Tutti", "Avvistamenti", "Trekking", "E-Bike", "Attrezzatura", "Off-Road"];

export default function BlogList({ initialPosts }) {
    const [activeCategory, setActiveCategory] = useState("Tutti");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = initialPosts.filter(post => {
        const matchesCategory = activeCategory === "Tutti" || post.category === activeCategory;
        // Check if content exists before calling toLowerCase, fallback to empty string
        const content = post.content || "";
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            content.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Il Diario dell'Esploratore</h1>
                <p className={styles.subtitle}>Racconti, guide e momenti indimenticabili dalla natura selvaggia.</p>
            </header>

            <div className={styles.searchContainer}>
                <Search className={styles.searchIcon} size={20} />
                <input
                    type="text"
                    placeholder="Cerca nel diario..."
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className={styles.filterBar}>
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${activeCategory === category ? styles.active : ""}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className={styles.grid}
            >
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post) => (
                        <motion.div
                            layout
                            key={post.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            {post.comingSoon ? (
                                <div className={`${styles.card} ${styles.comingSoonCard}`}>
                                    <div className={styles.imageContainer}>
                                        <div className={styles.comingSoonOverlay}>
                                            <span className={styles.comingSoonBadge}>Coming Soon</span>
                                        </div>
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span className={styles.date}>{post.date}</span>
                                            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>{post.category}</span>
                                        </div>
                                        <h2 className={styles.cardTitle}>{post.title}</h2>
                                        <p className={styles.excerpt}>{post.excerpt}</p>
                                        <span className={styles.readMore} style={{ opacity: 0.5 }}>
                                            In Scrittura...
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <Link href={`/blog/${post.slug}`} className={styles.card}>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span className={styles.date}>{post.date}</span>
                                            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>{post.category}</span>
                                        </div>
                                        <h2 className={styles.cardTitle}>{post.title}</h2>
                                        <p className={styles.excerpt}>{post.excerpt}</p>
                                        <span className={styles.readMore}>
                                            Leggi l'articolo <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
