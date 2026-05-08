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
                    {/* Phase 1 */} 
                    <div className="col-xl-4 col-lg-6 col-md-12 mb-4">
                        <div className="services-one__single" style={{ height: '100%' }}>
                            <div className="icon-box">
                                <span className="icon-building"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3>Phase 1 — Project Planning & Consulting</h3>
                                    <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li>Face-to-face consultations on project initiation and execution</li>
                                        <li>Project cost estimates and BOQs</li>
                                        <li>Wayleave applications and approvals</li>
                                        <li>Budget estimates and cost planning</li>
                                        <li>Request for Quotations (RFQs) to sub-contractors (for client approval)</li>
                                        <li>Supplier comparisons and recommendations</li>
                                        <li>Final Bill of Materials (BOM) customized for your project</li>
                                        <li>Detailed project plan with timelines, resources, and cost breakdowns</li>
                                        <li>Comprehensive final report — ready for project execution</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Phase 2 */} 
                    <div className="col-xl-4 col-lg-6 col-md-12 mb-4">
                        <div className="services-one__single" style={{ height: '100%' }}>
                            <div className="icon-box">
                                <span className="icon-helmet"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3>Phase 2 — Project Implementation</h3>
                                    <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li>NHBRC registration</li>
                                        <li>Council registration and compliance</li>
                                        <li>Wayleave applications and rezoning (where applicable)</li>
                                        <li>On-site supervision of suppliers, contractors, and subcontractors</li>
                                        <li>Procurement and sourcing of materials and equipment</li>
                                        <li>Quality assurance and timeline control at every stage</li>
                                        <li>Communication management — one point of contact</li>
                                        <li>Regular reporting, site visits, and progress updates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Phase 3 */} 
                    <div className="col-xl-4 col-lg-6 col-md-12 mb-4">
                        <div className="services-one__single" style={{ height: '100%' }}>
                            <div className="icon-box">
                                <span className="icon-home"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3>Phase 3 — Project Closeout</h3>
                                    <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li>Handover of completed works</li>
                                        <li>Final sign-offs from engineers, boards, and council</li>
                                        <li>Comprehensive project documentation and filing</li>
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