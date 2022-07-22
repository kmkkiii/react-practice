import { createRoot } from "react-dom/client";
import { App } from "./App";

// 関数名をHTMLのようにタグで囲むことでコンポーネントとして扱う
const root = createRoot(document.getElementById("root"));
root.render(<App />);

