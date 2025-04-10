import { ReactElement } from "react";

export function SidebarItem({text , icon}:{
    text:string;
    icon:ReactElement;
}
){
  
    return <div className="flex text-gray-700 cursor-pointer hover:bg-gray-300 rounded max-w-48 pr-6">
            <div className="p-2 pl-10">
            {icon}
            </div>

            <div className="p-2">
             {text}
             </div>
    </div>
}