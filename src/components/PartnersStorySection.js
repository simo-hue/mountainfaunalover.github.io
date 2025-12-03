"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import styles from "./PartnersStorySection.module.css";

export default function PartnersStorySection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Handshake size={40} className={styles.icon} />

                    <h2 className={styles.title}>Fiducia e Valori Condivisi</h2>

                    <div className={styles.content}>
                        <p>
                            Non accetto collaborazioni a caso. Per me, un partner non è solo un logo da mettere sul sito,
                            ma un compagno di viaggio fidato.
                        </p>
                        <p>
                            Scelgo di lavorare solo con aziende che condividono la mia stessa <span className={styles.highlight}>serietà e valori</span>. Un esempio concreto è OLLIN: sono stato loro cliente ben prima di diventarne partner. Dopo aver acquistato e testato personalmente svariati prodotti, sono rimasto colpito dalla loro qualità e ho deciso di avviare questa collaborazione. I numerosi messaggi di apprezzamento che ricevo da voi mi confermano che è stata la scelta giusta.
                        </p>
                        <p>
                            Quando vi consiglio un binocolo o un'attrezzatura, lo faccio perché so che farà la differenza
                            nella vostra esperienza, proprio come l'ha fatta nella mia. Non aspettatevi mai la classica "marchetta" commerciale: vi consiglierò sempre e solo ciò in cui credo veramente. Questa è una promessa che non tradirò mai.
                        </p>
                    </div>

                    <div className={styles.signature}>
                        - Simone
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
