import React from 'react'

export default function WhatsAppButton() {
    return (
        <>
            <a
                href="https://wa.me/27649857455"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                title="Chat with us on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
            <style dangerouslySetInnerHTML={{
                __html: `
                .whatsapp-float {
                    position: fixed;
                    width: 60px;
                    height: 60px;
                    bottom: 40px;
                    right: 40px;
                    background-color: #25d366;
                    color: #FFF;
                    border-radius: 50px;
                    text-align: center;
                    font-size: 34px;
                    box-shadow: 2px 2px 3px #999;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .whatsapp-float:hover {
                    background-color: #128c7e;
                    color: #fff;
                    transform: scale(1.1);
                }
                @media screen and (max-width: 767px) {
                    .whatsapp-float {
                        width: 50px;
                        height: 50px;
                        bottom: 20px;
                        right: 20px;
                        font-size: 28px;
                    }
                }
            `}} />
        </>
    )
}
