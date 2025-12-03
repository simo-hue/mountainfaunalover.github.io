export const dynamic = 'force-static';

export default function manifest() {
    return {
        name: 'Mountain & Fauna Lover',
        short_name: 'MountainFauna',
        description: 'Avvistamenti Cervi e Fauna in Trentino | Val di Rabbi e Val di Sole',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#0f172a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
