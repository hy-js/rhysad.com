import { useEffect, useState } from 'react';

const Accent = () => {
  const [reload, setReload] = useState(false);
  const [color, setColor] = useState('');

  useEffect(() => {
    function generateHslColors() {
      return setColor(`hsla(${~~(360 * Math.random())},50%,70%,0.8)`)
    }
    generateHslColors();
  }, [reload]);
  return { color, reload, setReload };
};
export default Accent;

