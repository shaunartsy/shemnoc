'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function About() {
    return (
        <>
        {/* Start About One*/} 
        <section className="about-one">
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/about-v1-shape1.png" alt=""/></div>
            <div className="shape2"><img src="assets/images/shapes/about-v1-shape2.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start About One Counter*/} 
                    <div className="col-xl-3 col-lg-4 col-md-4 wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="about-one__counter">
                            <ul className="about-one__counter-box">
                                <li>
                                    <div className="count-box">
                                        <h2>4–9</h2>
                                        <span className="k">%</span>
                                    </div>
                                    <div className="text">
                                        <p>Service Fee</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                        <h2>360</h2>
                                        <span>°</span>
                                    </div>
                                    <div className="text">
                                        <p>Project Management</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                        <h2>1</h2>
                                        <span>×</span>
                                    </div>
                                    <div className="text">
                                        <p>Point of Contact</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                        <h2>100</h2>
                                        <span className="k">%</span>
                                    </div>
                                    <div className="text">
                                        <p>Transparency</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End About One Counter*/} 

                    {/* Start About One Img*/} 
                    <div className="col-xl-4 col-lg-8 col-md-8 wow fadeInRight" data-wow-delay="100ms"
                        data-wow-duration="1500ms">
                        <div className="about-one__img">
                            <div className="about-one__img1">
                                <img src="assets/images/about/about-v1-img1.jpg" alt=""/>
                            </div>

                            <div className="about-one__img2">
                                <img src="assets/images/about/about-v1-img2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* End About One Img*/} 

                    {/* Start About One Content*/} 
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-one__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>About Us</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Your Project, Our <br/> Responsibility
                                </h2>
                            </div>

                            <div className="about-one__content-text">
                                <p>SHEMNOC is a construction project management company that provides end-to-end solutions for clients who wish to bring their building and infrastructure projects to life — efficiently, effectively, and within budget. Our team consists of seasoned Project Managers, Quantity Surveyors, and Construction Experts with vast industry experience.</p>
                            </div>

                            <div className="about-one__content-text2">
                                <ul className="about-one__content-list">
                                    <li>
                                        <p>Registered QS & PM Professionals</p>
                                    </li>
                                    <li>
                                        <p>Full Financial Transparency</p>
                                    </li>
                                    <li>
                                        <p>Single Point of Contact</p>
                                    </li>
                                </ul>

                            </div>

                            <div className="about-one__content-btn" style={{marginTop: "30px"}}>
                                <Link className="thm-btn" href="/about">Read More
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>

                        </div>
                    </div>
                    {/* End About One Content*/} 
                </div>
            </div>
        </section>
        {/* End About One*/} 
        
        </>
    )
}
