
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

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
                                                <p>Katherine Street, Sandton <br/> Johannesburg, 2196</p>
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
                                        <li><Link href="https://linkedin.com/company/shemnoc"><span className="icon-linkedin-big-logo"></span></Link></li>
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
                            <form className="contact-form-validated contact-page__form-box"
                                action="assets/inc/sendemail.php" method="post" >
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
                                            <input type="text" name="Phone" placeholder="Phone" required=""/>
                                            <div className="icon"><span className="icon-telephone-call"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide">
                                                    <option>Subject</option>
                                                    <option>Project Management Inquiry</option>
                                                    <option>Construction Supervision</option>
                                                    <option>Quantity Surveying</option>
                                                    <option>Registration & Compliance</option>
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
                                            <button type="submit" className="thm-btn">
                                                Submit Now
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
                            <div className="result"></div>
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
                src="https://maps.google.com/maps?q=Katherine%20Street,%20Sandton,%20Johannesburg,%202196&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="google-map-one__map">
            </iframe>
        </section>
        {/* End Google Map One*/} 

        </Layout>
        </>
    )
}