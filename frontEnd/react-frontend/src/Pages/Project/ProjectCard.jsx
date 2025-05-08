import { Card } from '@/components/ui/card'
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom'

function ProjectCard() {
    const navigate=useNavigate()
    return (
        <Card className="p-5 w-full lg:max-w-2xl mt-1">
            <div className='space-y-1'>
                <div className='space-y-1'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-6'>
                            <div  onClick={()=>navigate("/project/3")} className="cursor-pointer font-bold text-sm">
                                Create E-commerce Project
                            </div>
                            <DotFilledIcon />
                            <p className='text-sm text-gray-400'> Fullstack</p>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="rounded-full" variant="ghost" size="icon">
                                        <DotsVerticalIcon />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        update
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    <p className='text-sm text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    {[1, 1, 1, 1].map((item, index) => <Badge key={index} variant="outline"> {"jash"}</Badge>)}
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard
