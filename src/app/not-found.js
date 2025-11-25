import Link from "next/link";
import Image from "next/image";
import { Home, Search } from "lucide-react";
import styles from "./not-found.module.css";

export const metadata = {
    title: "404 - Cervo Non Trovato | Mountain & Fauna Lover",
    description: "Ops! Sembra che il cervo sia scappato. Pagina non trovata.",
};

export default function NotFound() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/branding/deer-silhouette.png"
                        alt="Silhouette di un cervo maschio maestoso"
                        width={400}
                        height={400}
                        className={styles.deerImage}
                        priority
                    />
                </div>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Ops! Il Cervo è Scappato...</h2>
                <p className={styles.description}>
                    Sembra che tu abbia perso il sentiero (o forse il cervo si è nascosto troppo bene!).
                    <br />
                    Non preoccuparti, anche i migliori esploratori si perdono ogni tanto.
                </p>

                <div className={styles.actions}>
                    <Link href="/" className={styles.button}>
                        <Home size={20} />
                        Torna al Campo Base
                    </Link>
                    <Link href="/blog" className={styles.button}>
                        <Search size={20} />
                        Cerca Altre Tracce
                    </Link>
                </div>
            </div>
        </main>
    );
}
