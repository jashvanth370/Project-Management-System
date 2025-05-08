import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogClose, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { DialogContent, DialogHeader } from "@/components/ui/dialog"
import InviteUserForm from "./InviteUserForm"

function ProjectDetails() {
  const handlePprojectInvitation = () => {

  }

  return (
    <>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-5">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <div className="font-semibold text-lg pb-5">
                Create E-commerce Project
              </div>

              <div className="space-y-5 pb-10">
                <p className="w-full md:max-w-lg lg:max-w-xl text-gray-300">
                  loerom ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                </p>
                <div className="flex">
                  <p className="w-36">Project lead:</p>
                  <p>John Doe</p>
                </div>

                <div className="flex">
                  <p className="w-36">Member</p>
                  <div className="flex gap-2 items-center">

                    {[1,1,1,1].map((item) => <Avatar key={item} className="cursor-pointer">
                        <AvatarFallback>
                          saju
                        </AvatarFallback>
                    </Avatar>)}
                  </div>

                  <div className="ml-2" size="sm" variant="outline"
                  onClick={handlePprojectInvitation}>
                    <Dialog>
                      <DialogTrigger>
                        <DialogClose >
                          <Button className="" style={{padding: 0}}>
                            <span>
                              invite
                            </span>
                            <PlusIcon className="w-3 h-1"/>
                          </Button>
                        </DialogClose>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          invite user
                        </DialogHeader>
                        <InviteUserForm/>
                      </DialogContent>
                    </Dialog>
                  </div>

                </div>
                <div className="flex">
                  <p className="w-36">Category :</p>
                  <p>Full stack</p>
                </div>

                <div className="flex">
                  <p className="w-36">Project lead:</p>
                  <Badge>John Doe</Badge>
                </div>
              </div>
            </div>
          </ScrollArea> 
        </div>
      </div>
    </>
  )
}

export default ProjectDetails
