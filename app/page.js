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
    description: 'Construction project management company providing end-to-end solutions for residential, commercial, and civil projects across South Africa.',
    url: 'https://www.shemnoc.co.za',
    telephone: '+27649857455',
    email: 'info@shemnoc.co.za',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Katherine Street',
        addressLocality: 'Sandton',
        addressRegion: 'Gauteng',
        postalCode: '2196',
        addressCountry: 'ZA',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: -26.1076,
        longitude: 28.0567,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
    },
    sameAs: [
        'https://facebook.com/shemnoc',
        'https://linkedin.com/company/shemnoc',
        'https://instagram.com/shemnoc_pm',
        'https://x.com/shemnoc_pm',
    ],
    priceRange: '4%–9% of project cost',
    areaServed: {
        '@type': 'Country',
        name: 'South Africa',
    },
    serviceType: [
        'Construction Project Management',
        'Quantity Surveying',
        'Construction Supervision',
        'NHBRC Registration',
        'Project Planning & Consulting',
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