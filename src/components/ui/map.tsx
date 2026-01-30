
"use client"

import * as React from "react"
import { MapContainer, TileLayer, Marker as LeafletMarker, Popup as LeafletPopup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { cn } from "@/lib/utils"
import { LatLngExpression } from "leaflet"

const Map = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { children: React.ReactNode }
>(({ className, children, ...props }, ref) => {
  const center: LatLngExpression = [19.12, 72.848]

  const [isClient, setIsClient] = React.useState(false)
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div
        className={cn("w-full h-full bg-muted flex items-center justify-center", className)}
      >
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    )
  }

  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={false}
      className={cn("w-full h-full z-0", className)}
      {...props}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  )
})
Map.displayName = "Map"

const Marker = LeafletMarker;
const Popup = LeafletPopup;

// Re-exporting controls that are not used in this app but might be part of the library's common usage
const NavigationControl = () => null;
const FullscreenControl = () => null;
const ScaleControl = () => null;
const GeolocateControl = () => null;

export {
  Map,
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
}
