
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Map, Pin, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const branches = [
  { name: "Jogeshwari Branch", lat: 19.1354, lng: 72.8524 },
  { name: "Vile Parle Branch", lat: 19.1009, lng: 72.8441 },
]

// Haversine formula to calculate distance between two points
const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371 // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return d
}


export default function MapRoute() {
  const [location, setLocation] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const findNearestBranch = async () => {
    if (!location.trim()) {
      toast({
        title: "Location Required",
        description: "Please enter your location.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    // In a real app, you would use a geocoding API here.
    // For this prototype, we'll simulate it.
    setTimeout(() => {
        // This is a mock geocoding result.
        // Let's pretend the user is at "Andheri Station".
        const userLocation = { lat: 19.1197, lng: 72.8464 }

        let nearestBranch = branches[0]
        let minDistance = getDistance(
            userLocation.lat,
            userLocation.lng,
            branches[0].lat,
            branches[0].lng
        )

        branches.slice(1).forEach((branch) => {
            const distance = getDistance(
                userLocation.lat,
                userLocation.lng,
                branch.lat,
                branch.lng
            )
            if (distance < minDistance) {
                minDistance = distance
                nearestBranch = branch
            }
        })
        
        toast({
            title: "Nearest Branch Found!",
            description: `Based on your location, the ${nearestBranch.name} is closest.`,
        })

        setLoading(false)
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Find Your Nearest Branch</CardTitle>
        <CardDescription>
          Enter your location to find the closest Primezone center to you.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Pin className="h-5 w-5 text-muted-foreground" />
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Andheri Station, Mumbai"
            disabled={loading}
          />
        </div>
        <Button onClick={findNearestBranch} className="w-full" disabled={loading}>
          {loading ? (
            <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Searching...
            </>
          ) : (
            <>
                <Map className="mr-2 h-4 w-4" />
                Find Nearest
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
