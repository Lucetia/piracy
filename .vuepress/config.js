module.exports = {
    title: "Piracy",
    description: "A curated list of aarrrr!",
    dest: "dist",
    plugins: ["@vuepress/back-to-top"],
    themeConfig: {
        head: [["link", { rel: "icon", href: "/favicon.ico" }]],
        logo: "/logo.svg",
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about/" },
            { text: "DMCA", link: "/dmca/" }
        ],
        sidebar: "auto",
        searchPlaceholder: "Search",
        lastUpdated: true,
        repo: "maximousblk/piracy",
        repoLabel: "GitHub",
        editLinks: true,
        editLinkText: "Help us improve this page!",
        smoothScroll: true,
    },
};
