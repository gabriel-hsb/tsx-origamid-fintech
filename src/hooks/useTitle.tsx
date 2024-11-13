import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useTitle = () => {
  const [title, setTitle] = useState("Summary");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setTitle("Summary");
        document.title = "Fintech | Summary";
        break;

      case "/sales":
        setTitle("Sales");
        document.title = "Fintech | Sales";
        break;
    }
  }, [pathname]);

  return title;
};

export default useTitle;
