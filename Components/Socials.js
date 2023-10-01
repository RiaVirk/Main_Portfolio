import Link from "next/link";

import {RiGithubLine, RiXingLine, RiLinkedinLine, RiYoutubeLine, RiFacebookLine,RiTwitterXLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiTwitterLine} from "react-icons/ri"

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-lg">
            <Link href={'https://github.com/RiaVirk'} className=" hover:text-space transition-all duration-300">
            <RiGithubLine />
            </Link>
            <Link href={'https://www.xing.com/profile/Maria_Virk'} className=" hover:text-space transition-all duration-300">
            <RiXingLine />
            </Link>
            <Link href={'https://www.linkedin.com/in/maria-virk'} className=" hover:text-space transition-all duration-300">
            <RiLinkedinLine />
            </Link>
            <Link href={'https://www.youtube.com/channel/UCmetTl7zsZxADEgfTipAEwQ'} className=" hover:text-space transition-all duration-300">
            <RiYoutubeLine />
            </Link>
            <Link href={'https://www.facebook.com/people/Maria-Virk/pfbid0KZVhkR9HLgD61BG9hCYG7RvxipNHpD6Bq1u4LeB8i6xEpPxA15evzcPEKWqaiecrl/'} className=" hover:text-space transition-all duration-300">
            <RiFacebookLine />
            </Link>
            <Link href={'https://twitter.com/RiaVirk'} className=" hover:text-space transition-all duration-300">
            <RiTwitterXLine />
            </Link>
        </div>
    );
}

export default Socials;