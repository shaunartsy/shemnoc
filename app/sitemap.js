export const dynamic = 'force-static'

export default function sitemap() {
    const baseUrl = 'https://www.shemnoc.co.za'

    const routes = [
        { path: '/', priority: 1.0, changeFrequency: 'weekly' },
        { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
        { path: '/support', priority: 0.5, changeFrequency: 'yearly' },
        { path: '/settings-privacy', priority: 0.3, changeFrequency: 'yearly' },
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: '2024-01-01',
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}
