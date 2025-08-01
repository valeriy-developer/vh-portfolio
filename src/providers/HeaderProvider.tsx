"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface HeaderContextType {
  isVisible: boolean;
}

const HeaderContext = createContext<HeaderContextType>({
  isVisible: true,
});

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    const controlMouse = (e: MouseEvent) => {
      if (e.clientY <= 25) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    window.addEventListener("mousemove", controlMouse);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("mousemove", controlMouse);
    };
  }, []);

  return (
    <HeaderContext.Provider value={{ isVisible }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }

  return context;
};
