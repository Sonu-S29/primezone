
"use client"

import * as React from "react"
import Map, {
  Marker as MapMarker,
  Popup as MapPopup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  type MarkerProps,
  type PopupProps,
} from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import { cn } from "@/lib/utils"

const MapGL = React.forwardRef<
  React.ElementRef<typeof Map>,
  React.ComponentProps<typeof Map>
>(({ className, ...props }, ref) => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  if (!mapboxToken) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <p className="text-muted-foreground text-center p-4">
          Mapbox token is not configured. Please add it to your .env file.
        </p>
      </div>
    )
  }

  return (
    <Map
      mapboxAccessToken={mapboxToken}
      initialViewState={{
        longitude: 72.848,
        latitude: 19.12,
        zoom: 12,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      className={cn("w-full h-full", className)}
      {...props}
      ref={ref}
    />
  )
})
MapGL.displayName = "Map"

const Marker = React.forwardRef<
  React.ElementRef<typeof MapMarker>,
  MarkerProps
>(({ className, ...props }, ref) => {
  return <MapMarker className={cn("", className)} {...props} ref={ref} />
})
Marker.displayName = "Marker"

const Popup = React.forwardRef<React.ElementRef<typeof MapPopup>, PopupProps>(
  ({ className, ...props }, ref) => {
    return <MapPopup className={cn("", className)} {...props} ref={ref} />
  }
)
Popup.displayName = "Popup"

export {
  MapGL as Map,
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
}
