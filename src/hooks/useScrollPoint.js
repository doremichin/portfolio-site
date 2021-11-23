import { useEffect, useState } from 'react';

export const useScrollPoint = (point) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      setActive(scrollTop > point)
    }
    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return isActive;
}
