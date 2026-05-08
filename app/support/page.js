import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function SupportPage() {
    return (
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Support">
            <section className="about-two" style={{paddingTop: '120px', paddingBottom: '120px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sec-title center text-center">
                                <h2>How can we help you?</h2>
                                <p className="mt-3">If you have any questions or need assistance with your project, our support team is ready to help.</p>
                                <div className="mt-5">
                                    <Link href="/contact" className="thm-btn">Contact Support <span className="hover-btn hover-bx"></span><span className="hover-btn hover-bx2"></span><span className="hover-btn hover-bx3"></span><span className="hover-btn hover-bx4"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
