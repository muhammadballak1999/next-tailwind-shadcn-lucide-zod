"use client"

import { useState, forwardRef } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Barcode } from "lucide-react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { z } from "zod";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Image from 'next/image'
import barcodePic from '../../../public/barcode.png'

const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
    }
]  


export const FirstSection = forwardRef(function FirstSection(props, ref) {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    const [errors, setErrors] = useState([]);

    const [name, setName] = useState('')
    const [barcode, setBarcode] = useState('')
    const [code, setCode] = useState('')
    const [category, setCategory] = useState('')
    const [manufacturer, setManufacturer] = useState('')

    const submit = async () => {
    
        try {
          const mySchema = z.object({
            barcode: z.string().min(5),
            name: z.string().min(5),
            code: z.string().min(5),
            category: z.string().min(1),
            manufacturer: z.string().min(1),
          });
    
          const response = mySchema.safeParse({
            name,
            barcode,
            category,
            manufacturer,
            code,
          });
    
          if (!response.success) {
            let errArr = [];
            const { errors: err } = response.error;
            for (var i = 0; i < err.length; i++) {
              errArr.push({ for: err[i].path[0], message: err[i].message });
            }
            setErrors(errArr);
            throw err;
          }

          setErrors([])
          props?.onSubmit();
    
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className="flex flex-col w-webkit-fill gap-5">
        <Card className="mt-3">
          <CardHeader>
            <CardTitle className="font-bold text-lg">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="flex-col">
            <div className="my-2">
              <span className="text-sm">Barcode</span>
              <div className="flex items-center gap-2">
                <Input placeholder="Barcode" className="my-1" onChange={(e) => setBarcode(e.target.value)} />
                <Button>
                  <Barcode />
                </Button>
              </div>
              <div className="mt-1 text-xs text-red-500">
                {errors.find((error) => error.for === "barcode")?.message}
              </div>
              <Image src={barcodePic} width={200} alt="barcode" />
            </div>
            <div className="my-2">
              <span className="text-sm">Name</span>
              <Input placeholder="Name" className="my-1" onChange={(e) => setName(e.target.value)} />
              <div className="mt-1 text-xs text-red-500">
                {errors.find((error) => error.for === "name")?.message}
              </div>
            </div>
            <div className="my-2">
              <span className="text-sm">Code</span>
              <Input placeholder="Code" className="my-1" onChange={(e) => setCode(e.target.value)} />
              <div className="mt-1 text-xs text-red-500">
                {errors.find((error) => error.for === "code")?.message}
              </div>
            </div>
            <div className="my-2">
              <span className="text-sm">Category</span>
              <div className="my-1">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between font-normal"
                        >
                        {value
                            ? frameworks.find((framework) => framework.value === value)?.label
                            : "Select Category"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                        <CommandInput placeholder="Search Category" onChange={(e) => setCategory(e.target.value)} />
                        <CommandList>
                            <CommandEmpty>No Category found.</CommandEmpty>
                            <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    setCategory(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                <Check
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {framework.label}
                                </CommandItem>
                            ))}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
              </div>
              <div className="mt-1 text-xs text-red-500">
                {errors.find((error) => error.for === "category")?.message}
              </div>
            </div>
            <div className="flex flex-col my-2">
                <span className="text-sm">Manufacturer</span>
                <div className="my-1">
                    <Select onValueChange={(value) => setManufacturer(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Manufacturer" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup >
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-1 text-xs text-red-500">
                   {errors.find((error) => error.for === "manufacturer")?.message}
                </div>
            </div>
          </CardContent>
        </Card>
        <button ref={ref} className='invisible' onClick={submit}></button>

        <Card className="h-24">
          <CardHeader>
            <CardTitle className="font-bold text-lg">Pricing</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
});