import NotificationsBox from "@/components/NotificationBox";

export default function NotificationsPage(){
    return (
        <div className="border rounded-lg px-2 py-4  mt-6" >
          <div className="w-[98%] m-auto">
            <h1 className="text-2xl  font-semibold">
            Notifications
            </h1>
            <p>Overview of all your notifications.</p>
          </div>

          <NotificationsBox/>
        </div>
    )
}