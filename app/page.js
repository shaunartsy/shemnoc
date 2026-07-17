import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Service from "@/components/sections/home1/Service"
import Testimonial from "@/components/sections/home1/Testimonial"
import Team from "@/components/sections/home1/Team"
import Appoinment from "@/components/sections/home1/Appoinment"
import Working from "@/components/sections/home1/Working"
import Faq from "@/components/sections/home1/Faq"

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SHEMNOC (Pty) Ltd',
    alternateName: 'SHEMNOC',
    description: 'SHEMNOC is a fully fledged construction and infrastructure development company delivering innovative, high-quality, and sustainable engineering solutions.',
    url: 'https://www.shemnoc.co.za',
    telephone: '+27649857455',
    email: 'info@shemnoc.co.za',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '4 Fouriesburg Road',
        addressLocality: 'Centurion',
        addressRegion: 'Gauteng',
        postalCode: '0157',
        addressCountry: 'ZA',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: -25.8640,
        longitude: 28.1658,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
    },
    sameAs: [
        'https://facebook.com/shemnoc',
        'https://www.linkedin.com/company/shemnocprojectmanagement',
        'https://instagram.com/shemnoc_pm',
        'https://x.com/shemnoc_pm',
    ],
    areaServed: {
        '@type': 'Country',
        name: 'South Africa',
    },
    serviceType: [
        'Building Construction',
        'Road Construction',
        'Land Development',
        'Project Management',
        'Valuation Services',
    ],
}

export default function Home() {

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                <Service />
                <Team />
                <Testimonial />
                <Appoinment />
                <Working />
                <Faq />
            </Layout>

        </>
    )
}