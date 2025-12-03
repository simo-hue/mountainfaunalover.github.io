import { Youtube, Instagram, Video, Eye } from "lucide-react";
import { getSocialStats } from "@/lib/social-stats";
import SocialStorySection from "@/components/SocialStorySection";
import styles from "./page.module.css";

export const metadata = {
    title: "Social Media Hub | Mountain & Fauna Lover",
    description: "Segui le mie avventure su YouTube, Instagram e TikTok. Video esclusivi, foto e dietro le quinte.",
};

export default async function SocialPage() {
    const stats = await getSocialStats();

    const SOCIAL_STATS = [
        { label: "YouTube Subscribers", value: stats.youtube.subscribers, icon: <Youtube size={24} /> },
        { label: "YouTube Views", value: stats.youtube.views, icon: <Eye size={24} /> },
        { label: "Instagram Followers", value: stats.instagram.followers, icon: <Instagram size={24} /> },
        { label: "TikTok Followers", value: stats.tiktok.followers, icon: <Video size={24} /> },
    ];

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Social Media Hub</h1>
                <p className={styles.subtitle}>
                    Unisciti alla community! Qui trovi tutti i miei contenuti più recenti, dai video lunghi su YouTube agli short adrenalinici.
                </p>

                <div className={styles.stats}>
                    {SOCIAL_STATS.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>
                                {stat.icon} {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </header>

            <SocialStorySection />

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Seguimi sui Social</h2>
                <div className={styles.grid}>
                    <a href="https://www.youtube.com/@mountainfaunalover" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <Youtube size={32} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>YouTube</h3>
                        <p className={styles.cardText}>
                            Documentari, test attrezzatura e avventure lunghe. Iscriviti per non perdere i nuovi video!
                        </p>
                    </a>
                    <a href="https://instagram.com/mountainfaunalover" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <Instagram size={32} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Instagram</h3>
                        <p className={styles.cardText}>
                            Foto spettacolari, storie giornaliere e dietro le quinte delle mie uscite.
                        </p>
                    </a>
                    <a href="https://www.tiktok.com/@mountainfaunalover" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <Video size={32} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>TikTok</h3>
                        <p className={styles.cardText}>
                            Video brevi, curiosità e i momenti più emozionanti in formato verticale.
                        </p>
                    </a>
                </div>
            </section>
        </main>
    );
}
