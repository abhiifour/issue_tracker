"use client"

import AddRepositories from "@/components/AddRepositories";
import RepositoriesTable from "@/components/RepositoriesTable";
import { useGetRepos } from "@/hooks/useRepositories";
import { usePathname } from "next/navigation";

export default function RepositoriesPage(){
    const path = usePathname()
    const segment = path ? path.split('/') : []
    const username = segment[2] || '';


    const {data} = useGetRepos(username)
    console.log(data)

    return (
        <div  className="border rounded-lg  py-4 mt-6">
         
           <div className="flex justify-between mb-10 w-[96%] mx-auto ">
            <div>
            <h1 className="text-2xl font-semibold">
            Repositories
            </h1>
            <p>Overview of all your repositories.</p>
            </div>
            <AddRepositories/>
           </div>

            <div className="w-[96%] mx-auto">
                <RepositoriesTable/>
            </div>

        </div>
    )
}