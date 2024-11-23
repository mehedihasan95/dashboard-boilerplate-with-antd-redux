import { useEffect, useState } from "react";
import { auth_slider } from "../../../utilities/image.collection";

const useAuthCarousel = () => {
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % auth_slider.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { active, setActive };
};

export default useAuthCarousel;
