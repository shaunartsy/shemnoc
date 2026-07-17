'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    const [formStatus, setFormStatus] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.target
        const formData = new FormData(form)

        try {
            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            })

            if (response.ok) {
                setFormStatus('success')
                form.reset()
            } else {
                setFormStatus('error')
            }
        } catch (error) {
            setFormStatus('error')
        }

        setIsSubmitting(false)
    }

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contact">
        {/* Start Contact Page*/} 
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    {/* Start Contact Page Contact Info*/} 
                    <div className="col-xl-6">
                        <div className="contact-page__contact-info">
                            <div className="title-box">
                                <h2>Contact Information</h2>
                            </div>

                            <div className="contact-page__contact-info-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-telephone-call"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Phone Number :</h3>
                                                <p><Link href="tel:+27649857455">+27 64 985 7455</Link></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-email-1"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Email Address</h3>
                                                <p><Link href="mailto:info@shemnoc.co.za">info@shemnoc.co.za</Link></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-maps-and-flags"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Our Address</h3>
                                                <p>4 Fouriesburg Road <br/> Centurion</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-time"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Working Time</h3>
                                                <p>Monday to Friday : <br/>
                                                    08:00 AM - 05:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-page__contact-info-bottom">
                                <div className="text-box">
                                    <h2>Follow The Social Media:</h2>
                                    <p>Connect with us on our social platforms to stay updated on our latest projects and industry insights.
                                    </p>
                                </div>

                                <div className="social-links">
                                    <ul>
                                        <li><Link href="https://facebook.com/shemnoc"><span className="icon-facebook"></span></Link></li>
                                        <li><Link href="https://x.com/shemnoc_pm"><span className="icon-twitter1"></span></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/shemnocprojectmanagement"><span className="icon-linkedin-big-logo"></span></Link></li>
                                        <li><Link href="https://instagram.com/shemnoc_pm"><span className="icon-instagram"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Contact Page Contact Info*/} 

                    {/* Start Contact Page Form*/} 
                    <div className="col-xl-6">
                        <div className="contact-page__form">
                            <div className="title-box">
                                <h2>Get In Touch</h2>
                            </div>
                            <form
                                name="contact"
                                method="POST"
                                onSubmit={handleSubmit}
                                className="contact-form-validated contact-page__form-box"
                            >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="name" placeholder="Name" required=""/>
                                            <div className="icon"><span className="icon-user"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="email" name="email" placeholder="Email" required=""/>
                                            <div className="icon"><span className="icon-email"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="phone" placeholder="Phone" required=""/>
                                            <div className="icon"><span className="icon-telephone-call"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide" name="subject">
                                                    <option>Subject</option>
                                                    <option>Construction Inquiry</option>
                                                    <option>Construction Supervision</option>
                                                    <option>Quantity Surveying</option>
                                                    <option>Registration &amp; Compliance</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-12">
                                        <div className="input-box">
                                            <textarea name="message" placeholder="Message"></textarea>
                                            <div className="icon style2"><span className="fa fa-pencil"></span></div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="contact-page__form-btn">
                                            <button type="submit" className="thm-btn" disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending...' : 'Submit Now'}
                                                <i className="icon-next"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            {formStatus === 'success' && (
                                <div className="result" style={{marginTop: '20px', padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '5px'}}>
                                    <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                                </div>
                            )}
                            {formStatus === 'error' && (
                                <div className="result" style={{marginTop: '20px', padding: '15px', background: '#f8d7da', color: '#721c24', borderRadius: '5px'}}>
                                    <p>Oops! Something went wrong. Please try again or email us directly at info@shemnoc.co.za.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* End Contact Page Form*/} 

                </div>
            </div>
        </section>
        {/* End Contact Page*/} 

        {/* Start Google Map One*/} 
        <section className="google-map-one">
            <iframe
                src="https://maps.google.com/maps?q=4%20Fouriesburg%20Road,%20Centurion&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="google-map-one__map">
            </iframe>
        </section>
        {/* End Google Map One*/} 

        </Layout>
        </>
    )
}