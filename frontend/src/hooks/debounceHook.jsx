import { useState, useEffect } from 'react';

export function useDebounce(value, timeout, callback) {
  const [timer, setTimer] = useState(null);

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    clearTimer();

    if (value && callback) {
      const newTimer = setTimeout(callback, timeout);
      setTimer(newTimer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
}
