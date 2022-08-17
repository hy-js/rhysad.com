import { useEffect, useState } from 'react';

const Accent = () => {
  const [reload, setReload] = useState(false);
  const [color, setColor] = useState('');
  const [color2, setColor2] = useState('');

  useEffect(() => {
    function generateHslColors() {
      let hue = Math.floor(Math.random() * (315 - 60 + 1) + 60);
      let saturation = 50;
      let lightness = 77.5;

      setColor(`hsl(${hue},${saturation - 15}%,${lightness}%)`);
      setColor2(`hsl(${hue},${saturation}%,${lightness}%)`);
    }
    generateHslColors();
  }, [reload]);
  return { color, color2, reload, setReload };
};
export default Accent;

