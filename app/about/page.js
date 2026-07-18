'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About SHEMNOC">
    
        {/* Start About Two*/} 
        <section className="about-two">
            <div className="container">
                <div className="row">
                    {/* Start About Two Left*/} 
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="0ms">
                        <div className="about-two__left">
                            <div className="about-two__left-img">
                                <img src="assets/images/about/about-v2-img1.jpg" alt="About SHEMNOC"/>
                            </div>
                        </div>
                    </div>
                    {/* End About Two Left*/} 

                    {/* Start About Two Middle*/} 
                    <div className="col-xl-8 col-lg-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="about-two__middle">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>About us</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Construction & <br/> Infrastructure Development</h2>
                            </div>

                            <div className="about-two__middle-text">
                                <p>SHEMNOC (Pty) Ltd is a proudly South African construction and infrastructure development company committed to delivering innovative, high-quality, and sustainable engineering solutions. With a strong focus on excellence, professionalism, and customer satisfaction, we have established ourselves as a reliable partner in the construction industry.</p>
                                <br/>
                                <p>Our business is driven by experienced engineers, qualified project managers, and skilled construction professionals who are passionate about delivering projects safely, on time, within budget, and to the highest quality standards.</p>
                                <br/>
                                <p>Whether undertaking residential developments, commercial infrastructure, civil engineering projects, or project management assignments, SHEMNOC combines technical expertise with practical experience to deliver outstanding results while building long-term relationships with clients.</p>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <div className="about-two__middle-text2">
                                        <ul>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-verified"></span>
                                                </div>
                                                <div className="title-box">
                                                    <h3>Mission</h3>
                                                    <p style={{marginTop: '10px'}}>Our mission is to provide quality construction and engineering services that exceed client expectations through professional project execution, skilled workmanship, innovative solutions, and uncompromising safety and quality standards.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-two__middle-text2">
                                        <ul>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-view"></span>
                                                </div>
                                                <div className="title-box">
                                                    <h3>Vision</h3>
                                                    <p style={{marginTop: '10px'}}>To become one of South Africa's leading construction and infrastructure development companies, recognised for excellence, innovation, integrity, and sustainable project delivery.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-5">
                                <h4>Our Software & Tools</h4>
                                <p className="mt-2"><b>AutoCAD | Civil 3D | Revit | CCS Candy | Primavera | MS Projects</b></p>
                            </div>
                        </div>
                    </div>
                    {/* End About Two Middle*/} 
                </div>
            </div>
        </section>
        {/* End About Two*/} 
        </Layout>
        </>
    )
}


