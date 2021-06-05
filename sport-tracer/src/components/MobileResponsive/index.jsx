import { useEffect, useState } from "react";

function getIsMobile(width) {
  return width < 650;
}

export function MobileResponsive(Component) {
  return function WithIsMobile(props) {
    const [isMobile, setIsMobile] = useState(getIsMobile(window.innerWidth));

    function resizeHandler(e) {
      const width = e.currentTarget.innerWidth;
      const newIsMobile = getIsMobile(width);
      setIsMobile(newIsMobile);
    }

    useEffect(() => {
      window.addEventListener("resize", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);

    return <Component isMobile={isMobile} {...props} />;
  };
}
