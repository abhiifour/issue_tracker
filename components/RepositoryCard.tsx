import { Button } from "./ui/button";


interface RepositoryCardProps {
    name:string,
    owner:string
}

export default function RepositoryCard({name,owner}:RepositoryCardProps){
    return (
        <div className="border rounded-lg border-black/15 px-2 py-3 flex justify-between items-center">
            <h1>{owner}/{name}</h1>
            <Button className="cursor-pointer">Add</Button>
        </div>
    )
}