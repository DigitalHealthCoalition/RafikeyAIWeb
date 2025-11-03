let googleMapsPromise: Promise<typeof google.maps> | null = null

export function useGoogleMaps() {
  if (!googleMapsPromise) {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    googleMapsPromise = new Promise((resolve, reject) => {
      // if already loaded just return immediately
      if (window.google && window.google.maps) {
        resolve(window.google.maps)
        return
      }
      // if not, create the script tag to load it
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => resolve(window.google.maps)
      script.onerror = (err) => reject(err)
      document.head.appendChild(script)
    })
  }

  return googleMapsPromise
}
