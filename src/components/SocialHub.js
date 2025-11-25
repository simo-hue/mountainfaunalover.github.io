"use client";

import Image from "next/image";
import { Youtube, Instagram, Video } from "lucide-react";
import styles from "./SocialHub.module.css";

const SOCIAL_CONTENT = [
    {
        id: 1,
        platform: "youtube",
        title: "Il BRAMITO potente del cervo maschio",
        image: "https://img.youtube.com/vi/yH9cArzx4n8/maxresdefault.jpg",
        views: "15k visualizzazioni",
        link: "https://youtu.be/yH9cArzx4n8"
    },
    {
        id: 2,
        platform: "youtube",
        title: "Defender 90: Offroad al Limite",
        image: "https://img.youtube.com/vi/wQrx2422wD8/maxresdefault.jpg",
        views: "Nuovo Video",
        link: "https://youtu.be/wQrx2422wD8"
    },
    {
        id: 3,
        platform: "tiktok",
        title: "Incontri ravvicinati nel bosco",
        image: "/hero-bg.png",
        views: "50k views",
        link: "https://tiktok.com"
    }
];

export default function SocialHub() {
    const getIcon = (platform) => {
        switch (platform) {
            case "youtube": return <Youtube size={20} />;
            case "instagram": return <Instagram size={20} />;
            case "tiktok": return <Video size={20} />;
            default: return null;
        }
    };

    return (
        <section id="social-hub" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Le Mie Avventure</h2>
                    <p className={styles.subtitle}>Segui le mie esplorazioni su tutti i canali social</p>
                </div>

                <div className={styles.grid}>
                    {SOCIAL_CONTENT.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            <div className={styles.platformIcon}>
                                {getIcon(item.platform)}
                            </div>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className={styles.cardImage}
                            />
                            <div className={styles.cardOverlay}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <span className={styles.cardMeta}>{item.views}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
