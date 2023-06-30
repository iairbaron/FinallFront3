import React, { useContext } from "react";
import { ThemeContext } from "./utils/ThemeContext";

const Layout = ({ children }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const layoutStyles = {
    backgroundColor: theme.background,
    color: theme.font,
    margin: '20px' 
  };

  return (
    <div className="layout" style={layoutStyles}>
      <button onClick={changeTheme}>Change theme</button>
      {children}
    </div>
  );
};

export default Layout;
