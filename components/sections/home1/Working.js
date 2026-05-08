'use client'
import { useState } from "react"
export default function Working() {
    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }
    return (
        <>
        {/* Start Working Process One*/} 
        <section className="working-process-one">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>How We Work</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Standard Working Process</h2>
                </div>

                <div className="working-process-one__inner">

                    <div className="shape1 animation-infinite1"
                        style={{ backgroundImage: ' url(assets/images/shapes/working-process-v1-shape1.png)' }}></div>

                    <div className="working-process-one__tab-box tabs-box">
                        <ul className="tab-buttons clearfix list-unstyled">
                            <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                <h2>01</h2>
                            </li>
                            <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                <h2>02</h2>
                            </li>
                            <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                <h2>03</h2>
                            </li>
                            <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                <h2>04</h2>
                            </li>
                        </ul>

                        <div className="tabs-content">
                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="working-process-one__single-tab">
                                    <div className="working-process-one__single-tab-inner">
                                        <div className="content-box">
                                            <h2>Consultation & Feasibility</h2>
                                            <p>Face-to-face consultations on project initiation. We assess your scope, site conditions, and budget to create a clear roadmap for execution.</p>
                                        </div>

                                        <div className="img-box">
                                            <img src="assets/images/resources/working-process-v1-img1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="working-process-one__single-tab">
                                    <div className="working-process-one__single-tab-inner">
                                        <div className="content-box">
                                            <h2>Planning & Documentation</h2>
                                            <p>BOQs, wayleave applications, NHBRC and council registration, RFQs to sub-contractors, supplier comparisons, and a detailed project plan with timelines and cost breakdowns.</p>
                                        </div>

                                        <div className="img-box">
                                            <img src="assets/images/resources/working-process-v1-img2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="working-process-one__single-tab">
                                    <div className="working-process-one__single-tab-inner">
                                        <div className="content-box">
                                            <h2>Implementation & Oversight</h2>
                                            <p>On-site supervision, procurement management, quality assurance, timeline control, and regular reporting — with one dedicated point of contact for the client.</p>
                                        </div>

                                        <div className="img-box">
                                            <img src="assets/images/resources/working-process-v1-img3.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 4 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="working-process-one__single-tab">
                                    <div className="working-process-one__single-tab-inner">
                                        <div className="content-box">
                                            <h2>Handover & Closeout</h2>
                                            <p>Completion of works, final sign-offs from engineers, boards, and council. A comprehensive final report and clean handover to you.</p>
                                        </div>

                                        <div className="img-box">
                                            <img src="assets/images/resources/working-process-v1-img4.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Working Process One*/}
        
            
        </>
    )
}
