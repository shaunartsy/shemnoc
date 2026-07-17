'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Services">
        {/* Start Services One*/} 
        <section className="services-one services-one--services">
            <div className="container">
                <div className="row">
                    {/* Service 1 */} 
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-4">
                        <div className="services-one__single" style={{ height: '100%' }}>
                            <div className="icon-box">
                                <span className="icon-building"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3>Building Construction</h3>
                                    <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li>Site establishment and earthworks</li>
                                        <li>Foundations and reinforced concrete structures</li>
                                        <li>Superstructure construction and masonry works</li>
                                        <li>Roofing, plastering, and painting</li>
                                        <li>Interior fit-outs and renovations</li>
                                        <li>Building maintenance for all facilities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Service 2 */} 
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-4">
                        <div className="services-one__single" style={{ height: '100%' }}>
                            <div className="icon-box">
                                <span className="icon-helmet"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3>Road Construction</h3>
                                    <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li>New road construction and rehabilitation</li>
                                        <li>Road maintenance and asphalt works</li>
                                        <li>Pavement construction and road surfacing</li>
                                        <li>Kerbing and sidewalk construction</li>
                                        <li>Stormwater infrastructure installation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Service 3 */} 
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-4">
                        <div className="services-one__single" style={{ height: '100%' }}>
                            <div className="icon-box">
                                <span className="icon-home"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3>Land Development</h3>
                                    <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li>Bulk earthworks and site preparation</li>
                                        <li>Sewer and water reticulation</li>
                                        <li>Stormwater drainage systems</li>
                                        <li>Internal road infrastructure</li>
                                        <li>Municipal services installation and upgrades</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Service 4 */} 
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-4">
                        <div className="services-one__single" style={{ height: '100%' }}>
                            <div className="icon-box">
                                <span className="icon-architect"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3>Project Management</h3>
                                    <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li>Construction project planning and scheduling</li>
                                        <li>Cost and procurement management</li>
                                        <li>Contract administration and quality assurance</li>
                                        <li>Risk management and site supervision</li>
                                        <li>Commissioning and close-out</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Services One*/} 
        </Layout>
        </>
    )
}