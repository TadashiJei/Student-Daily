import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Events",
  description: "Manage your events",
}

export default function EventsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Add New Event</CardTitle>
          <CardDescription>Enter the details for your new event.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="event">Event Name</Label>
            <Input id="event" placeholder="Enter event name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Enter event description" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Add Event</Button>
        </CardFooter>
      </Card>
      {/* Event list would go here */}
    </div>
  )
}

