'use client'
import { useState } from 'react'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
        {/* Start Faq One*/} 
        <section className="faq-one">
            <div className="shape1"><img src="assets/images/shapes/faq-v1-shape1.png" alt=""/></div>
            <div className="shape2"><img src="assets/images/shapes/faq-v1-shape2.png" alt=""/></div>
            <div className="shape3"><img src="assets/images/shapes/faq-v1-shape3.png" alt=""/></div>
            <div className="shape4 float-bob-x"><img src="assets/images/shapes/faq-v1-shape4.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start Faq One Faq*/} 
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__faq">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>FAQ</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Frequently asked <br/> Question </h2>
                            </div>

                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What does a construction project manager do?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>A project manager oversees your entire build — from planning and budgeting to contractor coordination and final handover. SHEMNOC acts as your single point of contact so you don't have to manage multiple parties.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>How much does SHEMNOC charge?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Our management fee ranges from 4–9% of total project cost, depending on scope, complexity, location, and risk. We provide a detailed fee proposal after the initial consultation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>How does the payment structure work?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>50% deposit upon commencement, 25% upon reaching 70% project completion, and the final 25% upon completion and sign-off. A formal SLA is signed before project start.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>Do you handle the money?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>No. All payments to suppliers and contractors flow directly from you. We manage the project — we don't hold your funds. Full financial transparency is a core principle.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                    <div className="accrodion-title">
                                        <h4>What types of projects do you manage?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>We manage residential builds, commercial developments, renovations, extensions, and civil infrastructure projects across South Africa.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                    <div className="accrodion-title">
                                        <h4>What software tools do you use?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>We use industry-leading tools including MS Projects, Build Smart, CCS Candy, Primavera, ZOHO, and Smartsheet for planning, tracking, and reporting.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Faq One Faq*/} 

                    {/* Start Faq One Img*/} 
                    <div className="col-xl-7 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__img">

                            <ul className="faq-one__img-list1">
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/faq-v1-img1.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/faq-v1-img2.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>

                            <ul className="faq-one__img-list2">
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/faq-v1-img3.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/faq-v1-img4.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Faq One Img*/} 
                </div>
            </div>
        </section>
        {/* End Faq One*/} 
        
            
        </>
    )
}
