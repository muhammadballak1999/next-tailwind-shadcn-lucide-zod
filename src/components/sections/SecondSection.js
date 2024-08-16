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
  import { Plus } from "lucide-react"

  export const SecondSection = () => {
    return (
      <div className="flex flex-col w-webkit-fill gap-5">
        <Card className="mt-3">
          <CardHeader>
            <CardTitle className="font-bold text-lg">Images</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-sm">Main Image</span>
            <div className="flex flex-col gap-4">
                <div className="h-48 rounded-md w-full bg-orange-600">
                </div>
                <div className="flex gap-4 w-3/4">
                    <div className="h-24 rounded-md w-full bg-orange-600">
                    </div>
                    <div className="h-24 rounded-md w-full bg-orange-600">
                    </div>
                </div>
                <Button>
                    <Plus size={15} />
                    <span className="text-xs">Add Image</span>
                </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-lg">Inventory</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <div className="my-2">
              <span className="text-sm">Threshold</span>
              <Input placeholder="Threshold" className="my-1" type="number" />
            </div>
            <div className="my-2">
              <span className="text-sm">Size</span>
              <Input placeholder="Size" className="my-1" type="number" />
            </div>
            <div className="my-2">
              <span className="text-sm">Weight</span>
              <Input placeholder="Weight" className="my-1" type="number" />
            </div>
          </CardContent>
        </Card>
      </div>   
    )
  }