import Layout from "@/components/layout/Layout"
import Faq from "@/components/sections/home1/Faq"

export default function FAQPage() {
    return (
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Frequently Asked Questions">
            <Faq />
        </Layout>
    )
}
