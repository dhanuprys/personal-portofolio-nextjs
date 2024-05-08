import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

type SocialItemProps = {
    icon: JSX.Element;
    title: string;
    target: string;
};

function SocialItem({ icon, title, target }: SocialItemProps) {
    return (
        <div>
            <Link href={target} title={title} className="[&>svg]:w-6 [&>svg]:h-6 block p-2 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                {icon}
            </Link>
        </div>
    );
}

function Socials() {
    return (
        <div className="flex gap-4">
            <SocialItem title="Github" icon={<FaGithub />} target="https://github.com/dhanuprys" />
            <SocialItem title="Instagram" icon={<FaInstagram />} target="https://instagram.com/dhanuprys" />
            <SocialItem title="LinkedIn" icon={<FaLinkedin />} target="https://www.linkedin.com/in/dhanuprys/" />
            <SocialItem title="Facebook" icon={<FaFacebook />} target="https://facebook.com/dhanuprys" />
        </div>
    );
}

export default Socials;