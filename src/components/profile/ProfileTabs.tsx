
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tabs = [
  { value: "account", label: "Account setting" },
  { value: "information", label: "Information" },
  { value: "subscription", label: "Subscription & Payments" },
  { value: "notifications", label: "Notifications" },
  { value: "security", label: "Account security" },
  { value: "close", label: "Close account" },
];

export function ProfileTabs({ children }: { children: React.ReactNode }) {
  return (
    <Tabs defaultValue="information" className="w-full">
      <TabsList className="flex flex-wrap h-auto gap-2 bg-dark-card/30 backdrop-blur-sm">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-[state=active]:bg-primary data-[state=active]:text-white 
            hover:bg-primary/10 transition-colors"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}
