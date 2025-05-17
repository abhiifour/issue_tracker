import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"



export default function RepositoriesTable(){
    return (
        <div>
            <Table>
            <TableCaption>Thats all 🎉</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[6px]"></TableHead>
                <TableHead className="text-left">Name</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Last issue id</TableHead>
                <TableHead className="text-right">Last updated at</TableHead>
                <TableHead className="text-right"></TableHead>
                
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="">*</TableCell>
                <TableCell className="font-medium text-left">Formbricks</TableCell>
                <TableCell>FormbricksHQ</TableCell>
                <TableCell className="">947545</TableCell>
                <TableCell className="text-right">12 May 2025</TableCell>
                
                <DropdownMenu>
                <TableCell className="text-right cursor-pointer"><DropdownMenuTrigger><EllipsisVertical size={12}/></DropdownMenuTrigger></TableCell>       
                <DropdownMenuContent>
                    <DropdownMenuItem>Subscribe</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                <TableCell className="">*</TableCell>
                <TableCell className="font-medium text-left">Keyshade</TableCell>
                <TableCell>Keyshade.xyz</TableCell>
                <TableCell>04850435</TableCell>
                <TableCell className="text-right">19 May 2025</TableCell>
                <DropdownMenu>
                <TableCell className="text-right cursor-pointer"><DropdownMenuTrigger><EllipsisVertical size={12}/></DropdownMenuTrigger></TableCell>       
                <DropdownMenuContent>
                    <DropdownMenuItem>Subscribe</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                <TableCell className="">*</TableCell>
                <TableCell className="font-medium text-left">Openstatus</TableCell>
                <TableCell>OpenstatusHq</TableCell>
                <TableCell>131243</TableCell>
                <TableCell className="text-right">14 May 2025</TableCell>
                <DropdownMenu>
                <TableCell className="text-right cursor-pointer"><DropdownMenuTrigger><EllipsisVertical size={12}/></DropdownMenuTrigger></TableCell>       
                <DropdownMenuContent>
                    <DropdownMenuItem>Subscribe</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
                </TableRow>
            </TableBody>
            </Table>

        </div>
    )
}