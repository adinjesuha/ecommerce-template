import React, { useState, createContext } from 'react';

const MenuContext = createContext(false);
export default MenuContext;

export function MenuContextProvider({ children }) {
  const [menuShowed, setMenuShowed] = useState(false);

  return <MenuContext.Provider value={[menuShowed, setMenuShowed]}>{children}</MenuContext.Provider>;
}