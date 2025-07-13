import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import HomeTab from "./home-tab"
import AddTab from "./add-tab"
import ViewTab from "./view-tab"

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="tab-1" className="items-center m-3  ">
      <TabsList className=" w-full " >
        <TabsTrigger value="tab-1">Dashboard</TabsTrigger>
        <TabsTrigger value="tab-2">Add</TabsTrigger>
        <TabsTrigger value="tab-3">View</TabsTrigger>
        <TabsTrigger value="tab-4">Analyse</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1" className=" w-screen h-screen " >
        <HomeTab />
      </TabsContent>
      <TabsContent value="tab-2" className=" w-screen h-screen ">
        <AddTab />
      </TabsContent>
      <TabsContent value="tab-3"  className=" w-screen h-screen ">
        <ViewTab />
      </TabsContent>
      <TabsContent value="tab-4">
        <p className="text-muted-foreground p-4 text-center text-xs">
          Content for Tab 3
        </p>
      </TabsContent>
    </Tabs>
  )
}
