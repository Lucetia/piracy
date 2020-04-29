module.exports = {
    title: "Piracy",
    description: "It's illegal cuz they can't tax you!",
    dest: "dist",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { property: "theme-color", content: "#3eaf7c" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:url", content: "https://piracy.now.sh/" }],
        ["meta", { property: "og:title", content: "Piracy" }],
        [
            "meta",
            {
                property: "og:description",
                content: "It's illegal cuz they can't tax you!",
            },
        ],
        ["meta", { property: "og:image", content: "/banner.png" }],
        ["meta", { property: "twitter:card", content: "summary_large_image" }],
        [
            "meta",
            { property: "twitter:url", content: "https://piracy.now.sh/" },
        ],
        ["meta", { property: "twitter:title", content: "Piracy" }],
        [
            "meta",
            {
                property: "twitter:description",
                content: "It's illegal cuz they can't tax you!",
            },
        ],
        ["meta", { property: "twitter:image", content: "/banner.png" }],
        [
            "meta",
            {
                name: "google-site-verification",
                content: "M4wcsX_DZ9CkpAzZ5rNmUbk1JWl3aLqgxIfB4YG-ozI",
            },
        ],
    ],
    themeConfig: {
        logo: "/logo.svg",
        nav: [
            { text: "Home", link: "/" },
            { text: "Security", link: "/security/" },
            { text: "Laws", link: "/laws/" },
            { text: "About", link: "/about/" },
        ],
        sidebar: "auto",
        lastUpdated: true,
        repo: "maximousblk/piracy",
        repoLabel: "GitHub",
        editLinks: true,
        editLinkText: "Help improve this page!",
    },
};
