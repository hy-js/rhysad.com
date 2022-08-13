import { useEffect, useState } from "react"

const Theme = () => {
  const [reload, setReload] = useState(false)
  const [color, setColor] = useState("")
  const [color2, setColor2] = useState("")

  useEffect(() => {
    function generateHslColors() {
      let hue = Math.floor(Math.random() * (315 - 60 + 1) + 60)
      let saturation = 50
      let lightness = 87.5

      setColor(`hsl(${hue},${saturation}%,${lightness}%)`)
      setColor2(`hsl(${hue - 60},${saturation}%,${lightness}%)`)
    }
    generateHslColors()
  }, [reload])
  return { color, color2, reload, setReload }
}
export default Theme
