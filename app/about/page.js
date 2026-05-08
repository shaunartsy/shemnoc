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
                                <h2 className="sec-title__title tg-element-title">End-To-End <br/> Project Management</h2>
                            </div>

                            <div className="about-two__middle-text">
                                <p>SHEMNOC is a construction project management company that provides end-to-end solutions for clients who wish to bring their building and infrastructure projects to life — efficiently, effectively, and within budget.</p>
                                <br/>
                                <p>Whether you are embarking on a residential, commercial, or civil construction project, SHEMNOC offers a complete suite of project management and consulting services, ensuring your project is delivered to the highest standards of quality, cost-efficiency, and time management.</p>
                                <br/>
                                <p>Our team consists of seasoned Project Managers, Quantity Surveyors, and Construction Experts with vast industry experience in planning, construction monitoring, and closeout of projects of various sizes and complexities. At SHEMNOC, we understand that managing a construction project can be stressful and time-consuming. That's why we offer our clients a single point of contact — so you can focus on your life or business while we handle all the details, communication, and coordination with contractors, suppliers, and consultants.</p>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <div className="about-two__middle-text2">
                                        <ul>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-target"></span>
                                                </div>
                                                <div className="title-box">
                                                    <h3>Mission</h3>
                                                    <p style={{marginTop: '10px'}}>To provide reliable, professional, and transparent project management services that transform our clients' ideas into high-quality, cost-effective, and timely completed projects.</p>
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
                                                    <span className="icon-vision"></span>
                                                </div>
                                                <div className="title-box">
                                                    <h3>Vision</h3>
                                                    <p style={{marginTop: '10px'}}>To become one of South Africa's most trusted and preferred project management companies — recognized for delivering excellence, maintaining quality, and achieving client satisfaction in every project we undertake.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-5">
                                <h4>Our Software & Tools</h4>
                                <p className="mt-2"><b>MS Projects | Build Smart | CCS Candy | Primavera | ZOHO | Smartsheet</b></p>
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


