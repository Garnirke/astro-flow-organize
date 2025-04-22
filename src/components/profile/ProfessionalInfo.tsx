
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function ProfessionalInfo() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <h3 className="text-lg font-semibold">Professional Info</h3>
        <p className="text-sm text-muted-foreground">Share your professional background</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Department</Label>
            <div className="flex items-center gap-2 p-3 border rounded-md">
              <span className="text-sm">UI/UX Design</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Team</Label>
            <div className="flex items-center gap-2 p-3 border rounded-md">
              <span className="text-sm">Product hunt</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <div className="flex items-center gap-2 p-3 border rounded-md">
              <span className="text-sm">UI/UX Designer</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Start Date</Label>
            <div className="flex items-center gap-2 p-3 border rounded-md">
              <span className="text-sm">Aug 15, 2018</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
