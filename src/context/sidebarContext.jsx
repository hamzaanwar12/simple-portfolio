import { createContext, useState } from "react";

// Create Context
export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  // Toggle Theme Function
  const handleSidebar = () => {
    setSidebar((val) => (!val ));
  };

  const hideSidebar = () => {
    setTimeout(() => setSidebar(false), 600);
  }

  return (
    <SideBarContext.Provider value={{ sidebar, handleSidebar, hideSidebar }}>
      {children} {/* All children can now access this context */}
    </SideBarContext.Provider>
  );
};
