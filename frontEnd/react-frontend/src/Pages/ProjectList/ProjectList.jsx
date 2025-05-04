import React, { useState } from 'react'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button, buttonVariants } from '@/components/ui/button';
// import { ScrollArea } from '@radix-ui/react-scroll-area';
// import { Label } from '@radix-ui/react-label';
// import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import ProjectCard from '@/Pages/Project/ProjectCard';

export const tags = [
  "all", "react", "vue", "angular", "svelte", "nextjs", "nuxtjs", "expressjs", "django", "flask", "laravel", "springboot"
];

const Project = () => {
  const [keyword, setKeyword] = useState("");
  const handleFilterChange = (section, value) => {
    console.log("value", value, section)
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value)
    // console.log("keyword", e.target.value)
  }


  return (
    <>
      <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5 h-screen items-center border-gray-200 border-none'>
        <section className='filterSection'>
          <Card className='p-5 sticky top-10 w-[20rem]'>
            <div className='flex justify-between pl-5'>
              <p className='text-xl -tracking-wider'>Filter</p>
              <Button size="icon" variant="ghost">
                <MixerHorizontalIcon />
              </Button>
            </div>
            <CardContent className="mt-5">
              <ScrollArea className="space-y-7 h-[75vh]">
                <div>
                  <div className='pb-3 border-b text-gray-400 flex text-xl '>
                    category
                  </div>
                  <div className='pt-5'>
                    <RadioGroup className='space-y-3 pt-5' defaultValue='all' onValueChange={(value) => handleFilterChange("category", value)}>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value='all' id='r1' />
                        <Label htmlFor='r1'>all</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value='fullstack' id='r2' />
                        <Label htmlFor='r2'>fullstack</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value='frontend' id='r3' />
                        <Label htmlFor='r3'>frontend</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value='backend' id='r4' />
                        <Label htmlFor='r4'>backend</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className='pt-9'>
                  <div className='pb-3 border-b text-gray-400 flex text-xl'>
                    tags
                  </div>
                  <div className='pt-5'>
                    <RadioGroup className='space-y-3 pt-5' defaultValue='all' onValueChange={(value) => handleFilterChange("tag", value)}>
                      {tags.map((item) => <div key={item} className="flex items-center gap-2">
                        <RadioGroupItem value={item} id={`r1-${item}`} />
                        <Label htmlFor={`r1-${item}`}>{item}</Label>
                      </div>)}
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
        <section className="projectListSection w-full lg:w-[48rem]">
          <div className="flex gap-2 items-center pb-5 justify-between mt-25">
            <div className='relative p-0 w-full'>
              <Input
                className="40% px-9"
                placeholder="Search Projects"
                onChange={handleSearchChange}
              />
              <MagnifyingGlassIcon className='absolute top-3 left-4' />
            </div>
          </div>
          <div>
            <div className="space-y-3 min-h-[75vh] h-screen ml-5">
              {
                keyword ? [1, 1, 1].map((item, index) => <ProjectCard key={item} />) :
                  [1, 1, 1, 1, 1].map((item) => (<ProjectCard key={item} />))
              }
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Project
