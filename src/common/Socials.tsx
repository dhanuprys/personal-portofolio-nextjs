import React from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

type SocialItemProps = {
    icon: JSX.Element;
    title: string;
};

function SocialItem({ icon, title }: SocialItemProps) {
    return (
        <div>
            <div title={title} className="[&>svg]:w-8 [&>svg]:h-8 p-2 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                {icon}
            </div>
        </div>
    );
}

function Socials() {
    return (
        <div className="flex gap-4">
            <SocialItem title="Instagram" icon={<FaInstagram />} />
            <SocialItem title="LinkedIn" icon={<FaLinkedin />} />
            <SocialItem title="Facebook" icon={<FaFacebook />} />
        </div>
    );
}

export default Socials;