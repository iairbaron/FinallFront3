import React, {  useContext } from "react";
import { ThemeContext } from "./utils/ThemeContext";

const Layout = ({ children }) => {
  
 const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <div className="layout" style={{ backgroundColor: theme.background, color: theme.font }}>
      <button onClick={changeTheme}>Change theme</button>
      {children}
    </div>
  );
};

export default Layout;