"use client";

import { Mountain, Camera, Tent, Car } from "lucide-react";
import styles from "./PartnersSection.module.css";

const PARTNERS = [
    { id: 1, name: "Attrezzatura Da Montagna", icon: <Mountain size={32} /> },
    { id: 2, name: "Attrezzatura Tech", icon: <Camera size={32} /> },
    { id: 3, name: "Esperienze", icon: <Tent size={32} /> },
    { id: 4, name: "Test Mezzi Off-Road", icon: <Car size={32} /> },
];

export default function PartnersSection() {
    return (
        <section id="partners" className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.title}>Collaborazioni & Partner</h3>
                <div className={styles.grid}>
                    {PARTNERS.map((partner) => (
                        <div key={partner.id} className={styles.partner} title={partner.name}>
                            {partner.icon}
                            <span>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
