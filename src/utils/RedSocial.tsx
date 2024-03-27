import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const RedSocial = () => {
    return (
        <div className="flex items-center h-full">
            <span>
                <FaFacebook className=" dark:fill-white mx-2 h-14" />
            </span>
            <span>
                <FaInstagram className=" dark:fill-white mx-2 h-14" />
            </span>
            <span>
                <FaTiktok className=" dark:fill-white mx-2 h-14" />
            </span>
            <span>
                <FaLinkedin className=" dark:fill-white mx-2 h-14" />
            </span>
        </div>
    )
}

export default RedSocial