"use client"

import { useSession } from "next-auth/react"
import { redirect, usePathname, useRouter } from "next/navigation"

export default function SpacePage(){
    const { data: session, status } = useSession()
    const username = session?.user?.name
   
    const router = useRouter()
    const path = usePathname()
    
    
    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "unauthenticated") {
        redirect("/login");
        return null;
    }

    if(session){
        router.push(`${path}/${username}/repositories`)
    }
}