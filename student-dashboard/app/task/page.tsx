import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Tasks",
  description: "Manage your tasks",
}

export default function TasksPage() {
  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Task</CardTitle>
              <CardDescription>Enter the details for your new task.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="task">Task Name</Label>
                <Input id="task" placeholder="Enter task name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Enter task description" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Add Task</Button>
            </CardFooter>
          </Card>
          {/* Task list would go here */}
        </TabsContent>
        <TabsContent value="active">
          {/* Active tasks list */}
        </TabsContent>
        <TabsContent value="completed">
          {/* Completed tasks list */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

