import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/bildins.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { publicSans, exo } from '@/lib/font'

const SITE_URL = 'https://www.shemnoc.co.za'

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'SHEMNOC | Construction and Infrastructure Development in South Africa',
        template: '%s | SHEMNOC',
    },
    description: 'SHEMNOC is a proudly South African construction and infrastructure development company delivering innovative, high-quality, and sustainable engineering solutions.',
    keywords: [
        'construction and infrastructure development',
        'construction company South Africa',
        'construction management Johannesburg',
        'quantity surveying',
        'building project manager',
        'NHBRC registration',
        'construction supervision',
        'BOQ cost estimates',
        'Sandton construction',
        'Gauteng project management',
        'SHEMNOC',
    ],
    authors: [{ name: 'SHEMNOC (Pty) Ltd' }],
    creator: 'SHEMNOC (Pty) Ltd',
    publisher: 'SHEMNOC (Pty) Ltd',
    icons: {
        icon: '/favicon.ico',
        apple: '/assets/images/favicons/apple-touch-icon.png',
        other: [
            { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/assets/images/favicons/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/assets/images/favicons/favicon-16x16.png' },
        ],
    },
    manifest: '/assets/images/favicons/site.webmanifest',
    openGraph: {
        type: 'website',
        locale: 'en_ZA',
        url: SITE_URL,
        siteName: 'SHEMNOC',
        title: 'SHEMNOC | Construction and Infrastructure Development in South Africa',
        description: 'SHEMNOC is a proudly South African construction and infrastructure development company delivering innovative, high-quality, and sustainable engineering solutions.',
        images: [
            {
                url: '/assets/images/resources/logo-1-v2.png',
                width: 300,
                height: 100,
                alt: 'SHEMNOC Construction and Infrastructure Development',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SHEMNOC | Construction and Infrastructure Development',
        description: 'SHEMNOC is a proudly South African construction and infrastructure development company delivering innovative, high-quality, and sustainable engineering solutions.',
        images: ['/assets/images/resources/logo-1-v2.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: SITE_URL,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${publicSans.variable} ${exo.variable}`}>
            <body suppressHydrationWarning>{children}</body>
        </html>
    )
}
