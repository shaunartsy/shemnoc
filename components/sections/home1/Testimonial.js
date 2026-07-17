'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 1,
            
        },
        1199: {
            slidesPerView: 1,
            
        },
        1350: {
            slidesPerView: 1,
            
        },
    }



}
export default function Testimonial() {
    return (
        <>

        {/* Start Testimonial One*/} 
        <section className="testimonial-one clearfix">
            <div className="container">
                <div className="row">
                    {/* Start Testimonial One Left*/} 
                    <div className="col-xl-4">
                        <div className="testimonial-one__left">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Testimonial</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">What Our Clients <br/> Say About Us</h2>
                            </div>
                            <div className="testimonial-one__left-bottom">
                                <div className="testimonial-one__left-img">
                                    <ul>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v3-img4.jpg" alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v3-img5.jpg" alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v3-img6.jpg" alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box style2">
                                                <img src="assets/images/testimonial/testimonial-v3-img1.jpg" alt=""/>
                                                <div className="icon-box">
                                                    <Link href="#"><span className="icon-plus-1"></span></Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="testimonial-one__left-bottom-text count-box">
                                    <h3>We have <span className="count-text">100</span>+
                                        Satisfied <br/>
                                        Clients</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Testimonial One Left*/} 

                    {/* Start Testimonial One Right*/} 
                    <div className="col-xl-8">
                        <div className="testimonial-one__right">
                            <Swiper {...swiperOptions} className="testimonial-one__carousel ">
                                <SwiperSlide>
                                {/* Start Testimonial One Single*/} 
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__single-text">
                                        <p>"SHEMNOC took the stress out of our office park build completely. Having one point of contact meant we could focus on our business while they handled everything on site. The project was delivered on time and within budget — exactly as promised."</p>
                                    </div>

                                    <div className="testimonial-one__single-author">
                                        <div className="img-box">
                                            <div className="inner">
                                                <img src="assets/images/testimonial/testimonial-v3-img3.jpg" alt="Thabo Mabaso"/>
                                            </div>
                                            <div className="icon">
                                                <span className="icon-right-quotation-mark"></span>
                                            </div>
                                        </div>

                                        <div className="content-box">
                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                            </div>
                                            <h2>Thabo Mabaso</h2>
                                            <p>Property Developer, Johannesburg</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Testimonial One Single*/} 
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Testimonial One Single*/} 
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__single-text">
                                        <p>"What impressed us most was the transparency. Every rand was accounted for, every decision was communicated clearly, and the quality of the finished build exceeded our expectations. We wouldn't hesitate to recommend SHEMNOC."</p>
                                    </div>

                                    <div className="testimonial-one__single-author">
                                        <div className="img-box">
                                            <div className="inner">
                                                <img src="assets/images/testimonial/testimonial-v3-img2.jpg" alt="Naledi Khumalo"/>
                                            </div>
                                            <div className="icon">
                                                <span className="icon-right-quotation-mark"></span>
                                            </div>
                                        </div>

                                        <div className="content-box">
                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                            </div>
                                            <h2>Naledi Khumalo</h2>
                                            <p>Homeowner, Pretoria</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Testimonial One Single*/} 
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Testimonial One Single*/} 
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__single-text">
                                        <p>"From the initial consultation through to the final handover, SHEMNOC's professionalism was outstanding. Their team managed our commercial renovation with military precision — the kind of construction partner you want on your side."</p>
                                    </div>

                                    <div className="testimonial-one__single-author">
                                        <div className="img-box">
                                            <div className="inner">
                                                <img src="assets/images/testimonial/testimonial-v3-img1.jpg" alt="Sipho Ndlovu"/>
                                            </div>
                                            <div className="icon">
                                                <span className="icon-right-quotation-mark"></span>
                                            </div>
                                        </div>

                                        <div className="content-box">
                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                            </div>
                                            <h2>Sipho Ndlovu</h2>
                                            <p>Operations Director, Cape Town</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Testimonial One Single*/} 
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    {/* End Testimonial One Right*/} 
                </div>
            </div>
        </section>
        {/* End Testimonial One*/} 
            
        </>
    )
}
