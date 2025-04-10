import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { Logo } from "../icons/Logo";


export function Sidebar(){

    return <div className="h-screen bg-white border-gray-100 border-r w-72 fixed left-0 top-0 color-gray">
        <div className="flex text-2xl pl-14 pt-8 items-center">
            <div className="pr-4 text-purple-600">
            <Logo />
            </div>
            Brain-Ref
        </div>

   <div className="pt-4 pl-5">
    <SidebarItem text="Twitter" icon={<TwitterIcon />} />
    <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
   </div>
    </div>
}