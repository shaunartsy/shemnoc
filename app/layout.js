import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/bildins.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { publicSans, exo } from '@/lib/font'
export const metadata = {
    title: 'SHEMNOC | Construction Project Management',
    description: 'SHEMNOC is a construction project management company that provides end-to-end solutions for clients who wish to bring their building and infrastructure projects to life — efficiently, effectively, and within budget.'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${publicSans.variable} ${exo.variable}`}>
            <body>{children}</body>
        </html>
    )
}
