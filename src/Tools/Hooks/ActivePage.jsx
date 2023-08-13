import { useEffect, useState } from 'react';

function ActivePage() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathnameChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathnameChange);

    return () => {
      window.removeEventListener('popstate', handlePathnameChange);
    };
  }, []);

  return pathname;
}

export default ActivePage;