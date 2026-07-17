import Layout from "@/components/layout/Layout"

export default function SettingsPrivacyPage() {
    return (
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Settings & Privacy">
            <section className="about-two" style={{paddingTop: '120px', paddingBottom: '120px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sec-title">
                                <h2>Privacy Policy</h2>
                            </div>
                            <div className="about-two__middle-text">
                                <p>At SHEMNOC, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us.</p>
                                <br/>
                                <h4 style={{fontSize: '24px', marginBottom: '10px'}}>1. Information Collection</h4>
                                <p>We collect information you provide directly to us when you request a quote, fill out a contact form, or communicate with us. This may include your name, email address, phone number, and project details.</p>
                                <br/>
                                <h4 style={{fontSize: '24px', marginBottom: '10px'}}>2. Use of Information</h4>
                                <p>The information we collect is used to provide, maintain, and improve our services, respond to your inquiries, send you project updates, and communicate with you about your construction and infrastructure development needs.</p>
                                <br/>
                                <h4 style={{fontSize: '24px', marginBottom: '10px'}}>3. Information Sharing</h4>
                                <p>We do not share your personal information with third parties except as necessary to provide our services (such as coordinating with contractors or suppliers for your project), comply with legal obligations, or protect our rights.</p>
                                <br/>
                                <h4 style={{fontSize: '24px', marginBottom: '10px'}}>4. Data Security</h4>
                                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
                                <br/>
                                <h4 style={{fontSize: '24px', marginBottom: '10px'}}>5. Contact Us</h4>
                                <p>If you have any questions about our privacy practices or wish to update your settings, please contact us at info@shemnoc.co.za.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
