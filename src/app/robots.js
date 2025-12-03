export const dynamic = 'force-static';

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: "/private/",
            },
            {
                userAgent: ["GPTBot", "Google-Extended", "CCBot"],
                allow: "/",
            }
        ],
        sitemap: "https://mountainfaunalover.github.io/sitemap.xml",
    };
}
