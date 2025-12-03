import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Video, Mountain } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <div className={styles.logoContainer}>
                            <Image
                                src="/images/branding/logo.jpg"
                                alt="Mountain & Fauna Lover Logo"
                                width={60}
                                height={60}
                                className={styles.logoImage}
                            />
                        </div>
                        <span className={styles.brandName}>Mountain & Fauna Lover</span>
                        <p className={styles.tagline}>Esplorando la natura selvaggia, un passo alla volta.</p>
                    </div>


                </div>

                <div className={styles.socials}>
                    <a href="https://www.youtube.com/@mountainfaunalover" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                        <Youtube size={20} />
                    </a>
                    <a href="https://instagram.com/mountainfaunalover" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.tiktok.com/@mountainfaunalover" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
                        <Video size={20} />
                    </a>
                </div>
            </div>

            <div className={styles.container}>
                <p className={styles.copyright}>
                    &copy; {currentYear} Mountain & Fauna Lover. Tutti i diritti riservati.
                </p>
            </div>
        </footer>
    );
}
