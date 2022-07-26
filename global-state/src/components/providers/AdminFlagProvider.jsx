import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;

  // const sampleObj = { sampleValue: "テスト"};

  const [isAdmin, setIsAdmin] = useState(false);

  // Contextオブジェクトへオブジェクトの省略記法を使って設定。
  return (
    <AdminFlagContext.Provider value={{isAdmin, setIsAdmin}}>
      {children}
    </AdminFlagContext.Provider>
  )
}