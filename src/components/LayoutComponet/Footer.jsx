import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";

export default function Footer() {
    return(
        <>
            <footer className="footer footer-horizontal footer-center text-white rounded p-5">
                <aside>
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebook className="text-blue-700 text-2xl"/>
                        <FaInstagram className="text-pink-400 text-2xl"/>
                        <FaLinkedin className="text-blue-800 text-2xl"/>
                        <FaYoutube className="text-red-600 text-2xl"/>
                        <FaTiktok className="text-black text-2xl"/>
                        <FaDiscord className="text-indigo-500 text-2xl"/>
                    </div>
                </aside>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer>
        </>
    )
}