import { CircleArrowOutUpRight } from "lucide-react";

export default function NotificationsBox(){
    return (
        <div className="w-[98%] mx-auto border rounded-lg  py-4 mt-8">
            <div className="flex border-b py-3 px-4 justify-between items-start">
                <div>
                <p className="text-sm">Bug: user unable to signup</p>
                <p className="text-xs">Formbricks</p>
                </div>
                <CircleArrowOutUpRight size={14} className="cursor-pointer"/>
            </div>
            <div className="flex border-b py-3 px-4 justify-between items-start ">
                <div>
                <p className="text-sm">Bug: user unable to signup</p>
                <p className="text-xs">Formbricks</p>
                </div>
                <CircleArrowOutUpRight size={14} className="cursor-pointer"/>
            </div>
            <div className="flex py-3 px-4 justify-between items-start">
                <div>
                <p className="text-sm">Bug: user unable to signup</p>
                <p className="text-xs">Formbricks</p>
                </div>
                <CircleArrowOutUpRight size={14} className="cursor-pointer"/>
            </div>
        </div>
    )
}