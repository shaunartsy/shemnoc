import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/01-bootstrap.min.css"
import "../public/assets/css/02-animate.min.css"
import "../public/assets/css/03-custom-animate.css"
import "../public/assets/css/04-flaticon.css"
import "../public/assets/css/05-nice-select.css"
import "../public/assets/css/fontawesome/css/all.min.css"
import "../public/assets/css/module-css/01-slider.css"
import "../public/assets/css/module-css/02-about.css"
import "../public/assets/css/module-css/03-services.css"
import "../public/assets/css/module-css/04-testimonial.css"
import "../public/assets/css/module-css/05-team.css"
import "../public/assets/css/module-css/06-blog.css"
import "../public/assets/css/module-css/07-contact.css"
import "../public/assets/css/module-css/08-counter.css"
import "../public/assets/css/module-css/09-error.css"
import "../public/assets/css/module-css/10-faq.css"
import "../public/assets/css/module-css/11-footer.css"
import "../public/assets/css/module-css/12-page-header.css"
import "../public/assets/css/module-css/13-shop.css"
import "../public/assets/css/module-css/14-video.css"
import "../public/assets/css/module-css/appoinment.css"
import "../public/assets/css/module-css/brand.css"
import "../public/assets/css/module-css/coming-soon.css"
import "../public/assets/css/module-css/cta.css"
import "../public/assets/css/module-css/feature.css"
import "../public/assets/css/module-css/pricing.css"
import "../public/assets/css/module-css/project.css"
import "../public/assets/css/module-css/subscribe.css"
import "../public/assets/css/module-css/why-choose.css"
import "../public/assets/css/module-css/working-process.css"
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
    description: 'SHEMNOC is a proudly South African construction and infrastructure development company in Centurion, Gauteng, delivering innovative, high-quality, and sustainable engineering solutions.',
    keywords: [
        'construction and infrastructure development',
        'construction company South Africa',
        'construction management Centurion',
        'quantity surveying',
        'building project manager',
        'NHBRC registration',
        'construction supervision',
        'BOQ cost estimates',
        'Centurion construction',
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
        description: 'SHEMNOC is a proudly South African construction and infrastructure development company in Centurion, Gauteng, delivering innovative, high-quality, and sustainable engineering solutions.',
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
        description: 'SHEMNOC is a proudly South African construction and infrastructure development company in Centurion, Gauteng, delivering innovative, high-quality, and sustainable engineering solutions.',
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
            <head>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18363921174"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18363921174');
                        `,
                    }}
                />
                {/* Event snippet for Website lead conversion page */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-18363921174/-jrqCM69m9ocEJbmzLRE',
        'event_callback': callback
    });
    return false;
  }
                        `,
                    }}
                />
            </head>
            <body suppressHydrationWarning>{children}</body>
        </html>
    )
}
