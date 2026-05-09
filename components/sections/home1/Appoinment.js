'use client'
import { useState } from 'react'
import Link from "next/link"

export default function Appoinment() {
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
        {/* Start Appoinment One*/} 
        <section className="appoinment-one">
            <div className="appoinment-one__pattern"
                style={{ backgroundImage: ' url(assets/images/pattern/appoinment-v1-pattern.png)' }}></div>
            <div className="shape1"></div>
            <div className="appoinment-one__bg"
                style={{ backgroundImage: ' url(assets/images/backgrounds/appoinment-v1-bg.jpg)' }}>
            </div>
            <div className="container">
                <div className="row">
                    {/* Start Appoinment One Left*/} 
                    <div className="col-xl-6 col-lg-6">
                        <div className="appoinment-one__contact">
                            <div className="appoinment-one__contact-list">
                                <ul>
                                    <li className="wow animated fadeInLeft" data-wow-delay="0.1s">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-placeholder"></span>
                                            </div>
                                            <div className="content-box">
                                                <h2>Location</h2>
                                                <p>4 Fouriesburg Road,</p>
                                                <p>Centurion</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow animated fadeInLeft" data-wow-delay="0.2s">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-conversation"></span>
                                            </div>
                                            <div className="content-box">
                                                <h2>Email us</h2>
                                                <p><Link href="mailto:info@shemnoc.co.za">info@shemnoc.co.za</Link></p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow animated fadeInLeft" data-wow-delay="0.3s">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                            <div className="content-box">
                                                <h2>Call us</h2>
                                                <p><Link href="tel:+27649857455">+27 64 985 7455</Link></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Appoinment One Left*/} 

                    {/* Start Appoinment One Form*/} 
                    <div className="col-xl-6 col-lg-6">
                        <div className="appoinment-one__form wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="title-box">
                                <h2>Request a Quote</h2>
                                <p>24/7 Support</p>
                            </div>

                            <form
                                name="quote-request"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="form-name" value="quote-request" />
                                <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>
                                <div className="form-group">
                                    <input type="text" name="username" placeholder="Your Name" required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email Address" name="email"
                                        required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" placeholder="Phone Number" required=""/>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" placeholder="Write Your Message"></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="button-box">
                                            <button className="thm-btn" type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending...' : 'Submit Now'}
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
                                <div style={{marginTop: '20px', padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '5px'}}>
                                    <p>Thank you! Your quote request has been received. We'll be in touch shortly.</p>
                                </div>
                            )}
                            {formStatus === 'error' && (
                                <div style={{marginTop: '20px', padding: '15px', background: '#f8d7da', color: '#721c24', borderRadius: '5px'}}>
                                    <p>Oops! Something went wrong. Please try again or call us at +27 64 985 7455.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* End Appoinment One Form*/} 
                </div>
            </div>
        </section>
        {/* End Appoinment One*/} 
        </>
    )
}
