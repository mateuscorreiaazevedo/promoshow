import { FaDiscord, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Footer } from "./Style";

export default function FooterPage() {

    return (
        <Footer>
            <FaDiscord className="icon" />
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
        </Footer>
    )
}