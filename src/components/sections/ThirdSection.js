"use client"

import { useState } from 'react'
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

  import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

  import { Button } from "@/components/ui/button"
  import { Plus, Trash2Icon } from "lucide-react"
  import { Textarea } from "@/components/ui/textarea"

  export const ThirdSection = () => {
    const [date, setDate] = useState(null);

    return (
        <div className="flex flex-col w-webkit-fill gap-5">
        <Card className="mt-3">
          <CardHeader>
            <CardTitle className="font-bold text-lg">Additional Information</CardTitle>
            <CardContent className="p-0">
                <span className="text-sm">Part Numbers</span>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <Input />
                        <Button size="icon" variant="destructive">
                            <Trash2Icon size={15} />
                        </Button>
                    </div>
                    <Button>
                        <Plus size={15} />
                        <span className="text-xs">Add Part Number</span>
                    </Button>
                </div>
                <span className="text-sm">Notes</span>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <Textarea placeholder="Type your message here." />
                        <Button size="icon" variant="destructive">
                            <Trash2Icon size={15} />
                        </Button>
                    </div>
                    <Button>
                        <Plus size={15} />
                        <span className="text-xs">Add Note</span>
                    </Button>
                </div>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-lg">Storages</CardTitle>
            <CardContent className="p-0 flex flex-col gap-2">
                <div className="flex items-center flex-wrap gap-2">
                    <div className="min-w-[215px]">
                        <span className="text-sm">Storage</span>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue />
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
                    <div className="min-w-[215px]">
                        <span className="text-sm">Quantity</span>
                        <Input type="number" />
                    </div>
                    <div className="min-w-[215px]">
                        <span className="text-sm">Price</span>
                        <Input type="number" />
                    </div>
                    <div className="min-w-[215px]">
                        <span className="text-sm">Currency</span>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue />
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
                </div>
                <Button variant="destructive" className="w-[215px]">
                    <Trash2Icon size={15} />
                </Button>
                <Button className="w-full">
                    <Plus size={15} />
                    <span className="text-xs">Add Storage</span>
                </Button>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-lg">Invoices</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
                <div className="flex items-center flex-wrap gap-2">
                <   div className="min-w-[215px]">
                        <span className="text-sm">Invoice Number</span>
                        <Input placeholder="Invoice Number" />
                    </div>
                    <div className="min-w-[215px]">
                        <span className="text-sm">Quantity</span>
                        <Input type="number" />
                    </div>
                    <div className="min-w-[215px]">
                        <span className="text-sm">Price</span>
                        <Input type="number" />
                    </div>
                    <div className="min-w-[215px]">
                        <span className="text-sm">Currency</span>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue />
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
                    <div className="min-w-[215px]">
                        <span className="text-sm">Retailer</span>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue />
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
                    <div className="m-w-[215px] flex flex-col">
                        <span className="text-sm">Date</span>
                        <Popover>
                            <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[215px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                                >
                                {date ? format(date, "PPP") : <span>mm/dd/yyyy</span>}
                                <CalendarIcon className="ml-8 h-4 w-4" />
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <Button variant="destructive" className="w-[215px]">
                    <Trash2Icon size={15} />
                </Button>
                <Button className="w-full">
                    <Plus size={15} />
                    <span className="text-xs">Add Invoice</span>
                </Button>
            </CardContent>
        </Card>
      </div>  
    )
  }