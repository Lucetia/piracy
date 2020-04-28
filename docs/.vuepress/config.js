module.exports = {
    title: "Piracy",
    description: "A curated list of arrrrr!",
    dest: "dist",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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
