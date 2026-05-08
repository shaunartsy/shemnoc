
'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (

        <>
        {/* Start Main Slider One*/} 
        <section className="main-slider-one">
            <Swiper {...swiperOptions} className="main-slider__carousel owl-carousel owl-theme">
                <SwiperSlide>
                {/* Start Main Slider One Single*/} 
                <div className="main-slider-one__single">
                    <div className="main-slider-one__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-v1-img1.jpg)' }}></div>
                    <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" alt=""/></div>
                    <div className="shape2"><img src="assets/images/shapes/slider-v1-shape2.png" alt=""/></div>
                    <div className="main-slider-one__img2"><img src="assets/images/slider/slider-v1-img2.png" alt=""/></div>
                    <div className="container">
                        <div className="main-slider-one__content">
                            <div className="tagline">
                                <span>Construction Project Management</span>
                            </div>
                            <div className="title-box">
                                <h2>Managing Projects <br/> With Excellence</h2>
                            </div>

                            <div className="text-box">
                                <p>End-to-end project management for residential, commercial,<br/> and civil construction across South Africa.</p>
                            </div>

                            <div className="main-slider-one__single-btn">
                                <div className="btn-one">
                                    <Link className="thm-btn" href="/contact">Request a Consultation
                                        <i className="icon-next"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>

                                <div className="main-slider-one__single-video">
                                    <div className="text" style={{ marginLeft: "30px" }}>
                                        <Link href="/services" className="thm-btn" style={{ backgroundColor: "transparent", color: "var(--billdins-white)", border: "2px solid var(--billdins-white)" }}>View Our Services
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider One Single*/} 
                </SwiperSlide>
                <SwiperSlide>
                {/* Start Main Slider One Single*/} 
                <div className="main-slider-one__single">
                    <div className="main-slider-one__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-v1-img2.jpg)' }}></div>
                    <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" alt=""/></div>
                    <div className="shape2"><img src="assets/images/shapes/slider-v1-shape2.png" alt=""/></div>
                    <div className="main-slider-one__img2"><img src="assets/images/slider/slider-v1-img3.png" alt=""/></div>
                    <div className="container">
                        <div className="main-slider-one__content">
                            <div className="tagline">
                                <span>Construction Project Management</span>
                            </div>
                            <div className="title-box">
                                <h2>Managing Projects <br/> With Excellence</h2>
                            </div>

                            <div className="text-box">
                                <p>End-to-end project management for residential, commercial,<br/> and civil construction across South Africa.</p>
                            </div>

                            <div className="main-slider-one__single-btn">
                                <div className="btn-one">
                                    <Link className="thm-btn" href="/contact">Request a Consultation
                                        <i className="icon-next"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>

                                <div className="main-slider-one__single-video">
                                    <div className="text" style={{ marginLeft: "30px" }}>
                                        <Link href="/services" className="thm-btn" style={{ backgroundColor: "transparent", color: "var(--billdins-white)", border: "2px solid var(--billdins-white)" }}>View Our Services
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider One Single*/} 
                </SwiperSlide>
                <SwiperSlide>
                {/* Start Main Slider One Single*/} 
                <div className="main-slider-one__single">
                    <div className="main-slider-one__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-v1-img1.jpg)' }}></div>
                    <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" alt=""/></div>
                    <div className="shape2"><img src="assets/images/shapes/slider-v1-shape2.png" alt=""/></div>
                    <div className="main-slider-one__img2"><img src="assets/images/slider/slider-v1-img2.png" alt=""/></div>
                    <div className="container">
                        <div className="main-slider-one__content">
                            <div className="tagline">
                                <span>Construction Project Management</span>
                            </div>
                            <div className="title-box">
                                <h2>Managing Projects <br/> With Excellence</h2>
                            </div>

                            <div className="text-box">
                                <p>End-to-end project management for residential, commercial,<br/> and civil construction across South Africa.</p>
                            </div>

                            <div className="main-slider-one__single-btn">
                                <div className="btn-one">
                                    <Link className="thm-btn" href="/contact">Request a Consultation
                                        <i className="icon-next"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>

                                <div className="main-slider-one__single-video">
                                    <div className="text" style={{ marginLeft: "30px" }}>
                                        <Link href="/services" className="thm-btn" style={{ backgroundColor: "transparent", color: "var(--billdins-white)", border: "2px solid var(--billdins-white)" }}>View Our Services
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider One Single*/} 
                </SwiperSlide>
            </Swiper>
        </section>
        {/* End Main Slider One*/} 
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
