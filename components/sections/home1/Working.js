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
                                            <h2>Site Establishment & Preparation</h2>
                                            <p>We initiate projects with comprehensive site preparation, bulk earthworks, and foundation setup, ensuring a solid base and safe working environment before main construction begins.</p>
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
                                            <h2>Structural & Civil Engineering</h2>
                                            <p>Our expert teams handle the core building phase, executing reinforced concrete structures, masonry works, road paving, and critical infrastructure with precision and industry compliance.</p>
                                        </div>

                                        <div className="img-box">
                                            <img src="assets/images/resources/work-process-v2-img2.jpg" alt=""/>
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
                                            <h2>Superstructure & Finishes</h2>
                                            <p>We meticulously construct superstructures, handle roofing, and complete interior fit-outs, focusing on exceptional craftsmanship, plastering, painting, and functional aesthetics.</p>
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
                                            <h2>Quality Assurance & Handover</h2>
                                            <p>Every project undergoes rigorous inspection against South African construction standards before commissioning, ensuring seamless delivery, compliance, and client satisfaction.</p>
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
