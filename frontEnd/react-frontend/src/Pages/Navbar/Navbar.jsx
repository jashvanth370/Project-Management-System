import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import CreateProjectForm from '../Project/CreateProjectForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'


function Navbar() {
    return (
        <div className='border-none py-4 px-5 flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <p className='cursor-pointer'> Project Management</p>

                <Dialog>
                    {/* <DailogTrigger asChild>
                        <button variant='ghost'>New Project</button>
                    </DailogTrigger> */}

                    <DialogTrigger style={{ padding: 0, borderWidth: 0 }}>
                        <Button variant="ghost" className="border-none " style={{ padding: 0, borderWidth: 0 }}> new project</Button>
                    </DialogTrigger>



                    <DialogContent className="bg-gray-600/100 pl-5 pr-5">
                        <DialogHeader className="" variant="ghost">

                            <p className='pl-5 pr-5'>Create a new project</p>

                        </DialogHeader>
                        <CreateProjectForm />
                    </DialogContent>
                </Dialog>
                <Button variant="ghost">Upgrate </Button>
            </div>
            <div className='flex items-center gap-3'>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className="rounded-full border-2 border-gray-500 border-none" style={{ borderWidth: 0, padding: 0 }}>
                            <PersonIcon />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            LogOut
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>jash</p>
            </div>
        </div>
    )
}

export default Navbar
