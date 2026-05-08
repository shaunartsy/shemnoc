import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handleMobileMenu, handlePopup }) {
    return (
        <>




        {/* Start Main Header One*/} 
        <header className="main-header-one">
            {/* Start Main Header One Top*/} 
            <div className="main-header-one__top">
                <div className="container">
                    <div className="main-header-one__top-inner">
                        <ul className="header-style1__contact">
                            <li>
                                <div className="icon">
                                    <i className="icon-clock"></i>
                                </div>
                                <div className="text">
                                    <p>Mon - Fri: 08:00 - 17:00</p>
                                </div>
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="icon-phone-call"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="tel:+27649857455">+27 64 985 7455</Link></p>
                                </div>
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="icon-placeholder"></i>
                                </div>
                                <div className="text">
                                    <p>Katherine Street, Sandton</p>
                                </div>
                            </li>
                        </ul>

                        <div className="main-header-one__top-right">
                            <div className="header-style1__social-links">
                                <Link href="https://facebook.com/shemnoc"><i className="icon-facebook-app-symbol"></i></Link>
                                <Link href="https://x.com/shemnoc_pm"><i className="icon-twitter1"></i></Link>
                                <Link href="https://linkedin.com/company/shemnoc"><i className="icon-linkedin-big-logo"></i></Link>
                                <Link href="https://instagram.com/shemnoc_pm"><i className="icon-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Main Header One Top*/} 

            {/* Start Main Header One Bottom*/} 
            <div className="main-header-one__bottom">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-header-one__bottom-left">
                                    <div className="logo-one">
                                        <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-middle">
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>   <i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-right">


                                    <div className="main-header__btn">
                                        <Link className="thm-btn" href="/contact">Get a Quote
                                            <i className="icon-next"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* End Main Header One Bottom*/} 
        </header>
        {/* End Main Header One*/} 

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
            <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-header-one__bottom-left">
                                    <div className="logo-one">
                                        <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-middle">
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>   <i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-right">


                                    <div className="main-header__btn">
                                        <Link className="thm-btn" href="/contact">Get a Quote
                                            <i className="icon-next"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>{/* /.stricky-header */}


        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
