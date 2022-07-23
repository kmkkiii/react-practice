import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

// 関数名をHTMLのようにタグで囲むことでコンポーネントとして扱う
const root = createRoot(document.getElementById("root"));
root.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>
);

