
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PersonalInfo() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <h3 className="text-lg font-semibold">Personal Info</h3>
        <p className="text-sm text-muted-foreground">Update your personal information here</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input id="fullName" placeholder="Enter your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Contact number</Label>
            <div className="flex gap-2">
              <Select defaultValue="+1">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+91">+91</SelectItem>
                </SelectContent>
              </Select>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="altPhone">Alternative contact</Label>
            <Input id="altPhone" placeholder="Enter alternative contact" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
