import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
// import { FormItem } from '.../components/ui/form/form-item'
import { Input } from '@/components/ui/input'
import { DialogClose } from '@/components/ui/dialog';
import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { tags } from '@/Pages/ProjectList/ProjectList';


const CreateProjectForm = () => {
    const form = useForm({
        defaultValues: {
            name: '',
            description: '',
            category: '',
            tags: ["javaScript", "react"]
        }
    })

    const onSubmit = (data) => {
        console.log("create new project", data)
    }

    return (
        <div>
            <Form {...form}>
                <form style={{}} className='space-y-5 ' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="name"
                        render={({ field }) =>
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Project Name" {...field}
                                        type="text"
                                        className="border w-full px-5 py-5 border-gray-700"
                                    // placeholder="Project Name..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }
                    />

                    <FormField control={form.control}
                        name="description"
                        render={({ field }) =>
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Project Description" {...field}
                                        type="text"
                                        className="border w-full px-5 py-5 border-gray-700"
                                    // placeholder="Project Name..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }
                    />

                    <FormField control={form.control}
                        name="category"
                        render={({ field }) =>
                            <FormItem>
                                <FormControl>
                                    <Select
                                        defaultValue="fullstack"
                                        value={field.value}
                                        onValueChange={(value) => {
                                            field.onChange(value)
                                        }}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="category" />
                                        </SelectTrigger>

                                        <SelectContent className="bg-gray-800" >
                                            <SelectItem value="fullstack">Fullstack</SelectItem>
                                            <SelectItem value="frontend">Frontend</SelectItem>
                                            <SelectItem value="backend">Backend</SelectItem>
                                        </SelectContent>

                                    </Select>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        }
                    />
                    <FormField control={form.control}
                        name="tags"
                        render={({ field }) =>
                            <FormItem>
                                <FormControl>
                                    <Select
                                        
                                        value={field.value}
                                        onValueChange={(value) => {
                                            field.onChange(value)
                                        }}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="tags" />
                                        </SelectTrigger>

                                        <SelectContent className="bg-gray-800" >
                                            {tags.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                                        </SelectContent>

                                    </Select>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        }
                    />
                    <DialogClose>
                        {false ? (
                            <div className='space-y-5'>
                                <p>
                                    you can only create 3 project for free, please upgrade to pro
                                </p>
                            </div>)
                            : (
                                <Button className="w-full" type="submit">
                                    Create Project
                                </Button>
                            )}
                    </DialogClose>
                </form>
            </Form>
        </div>
    )
}

export default CreateProjectForm
