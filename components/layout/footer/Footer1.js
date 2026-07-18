'use client'
import { useForm } from '@formspree/react'
import Link from "next/link"

export default function Footer1() {
    const [state, handleSubscribe] = useForm('mvzeagln')

    return (
        <>
           
        {/* Start Site Footer*/} 
        <footer className="site-footer">
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/footer-v1-shape1.png" alt=""/></div>
            <div className="shape2 float-bob-y"><span className="icon-pattern"></span></div>
            {/* Start Site Footer Top*/} 
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="site-footer__logo">
                            <Link href="/"><img src="assets/images/resources/logo-2-v2.png" alt=""/></Link>
                        </div>

                        <div className="site-footer__subscribe-form">
                            <form
                                className="subscribe-form"
                                name="newsletter"
                                method="POST"
                                onSubmit={handleSubscribe}
                            >
                                <input type="email" name="email" placeholder="Enter Your Email" required/>
                                <button type="submit" className="thm-btn" disabled={state.submitting}>{state.succeeded ? '✓ Subscribed' : 'Sign up'}
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </button>
                            </form>
                        </div>

                        <div className="site-footer__social-links">
                            <Link href="https://facebook.com/shemnoc"><span className="icon-facebook-app-symbol"></span></Link>
                            <Link href="https://x.com/shemnoc_pm"><span className="icon-twitter1"></span></Link>
                            <Link href="https://www.linkedin.com/company/shemnocprojectmanagement"><span className="icon-linkedin-big-logo"></span></Link>
                            <Link href="https://www.instagram.com/shemnoc/"><span className="icon-instagram"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Site Footer Top*/} 

            {/* Start Site Footer Middle*/} 
            <div className="site-footer__middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__single footer-widget__services">
                                <div className="title-box">
                                    <h2>Our Services</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__list">
                                    <li><Link href="/services"><span className="icon-chevron"></span> Building Construction</Link></li>
                                    <li><Link href="/services"><span className="icon-chevron"></span> Road Construction</Link></li>
                                    <li><Link href="/services"><span className="icon-chevron"></span> Land Development</Link></li>
                                    <li><Link href="/services"><span className="icon-chevron"></span> Project Management</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__single footer-widget__useful-links">
                                <div className="title-box">
                                    <h2>Useful Links</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__list">
                                    <li><Link href="/"><span className="icon-chevron"></span> Home</Link></li>
                                    <li><Link href="/about"><span className="icon-chevron"></span> About Us</Link></li>
                                    <li><Link href="/services"><span className="icon-chevron"></span> Services</Link></li>
                                    <li><Link href="/projects"><span className="icon-chevron"></span> Projects</Link></li>
                                    <li><Link href="/contact"><span className="icon-chevron"></span> Contact us</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__single footer-widget__contact">
                                <div className="title-box">
                                    <h2>Contact Us</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__contact-list">
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-maps-and-flags"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>4 Fouriesburg Road <br/> Centurion</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-telephone-call"></span>
                                        </div>

                                        <div className="text-box">
                                            <p><Link href="tel:+27649857455">+27 64 985 7455</Link></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-email"></span>
                                        </div>

                                        <div className="text-box">
                                            <p><Link href="mailto:info@shemnoc.co.za">info@shemnoc.co.za</Link></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__single footer-widget__gallery">
                                <div className="title-box">
                                    <h2>Gallery</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__gallery-list">
                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/footer-v1-img1.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="#">
                                                    <span className="icon-plus-1"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/footer-v1-img2.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="#">
                                                    <span className="icon-plus-1"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/footer-v1-img3.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="#">
                                                    <span className="icon-plus-1"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/footer-v1-img4.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="#">
                                                    <span className="icon-plus-1"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/footer-v1-img5.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="#">
                                                    <span className="icon-plus-1"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/footer-v1-img6.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="#">
                                                    <span className="icon-plus-1"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Site Footer Middle*/} 

            {/* Start Site Footer Bottom*/} 
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <div className="site-footer__copyright">
                                    <p>Copyright@ 2026 <Link href="/">SHEMNOC</Link>. All Rights Reserved.</p>
                                </div>

                                <ul className="site-footer__bottom-menu">
                                    <li><Link href="/settings-privacy">Setting & Privacy </Link></li>
                                    <li><Link href="/faq">FAQ</Link></li>
                                    <li><Link href="/support">Support</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Site Footer Bottom*/} 
        </footer>
        {/* End Site Footer*/} 

        
        </>
    )
}
