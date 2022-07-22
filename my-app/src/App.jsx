import { ColorMessage } from "./components/ColorMessage";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { useState } from "react"
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";
// import "./index.css"

export const App = () => {
  console.log("レンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    alert();
    // setNum(num + 1);
    // setNum(num + 1); // 1しか加算されない
    // setNum((prev) => prev + 1);
    setNum((prev) => prev + 1); // 更新直前のStateの値が渡される
  }

  return (
    <>
      <h1 style={{color: "red"}}>こんにちは！</h1>
      <ColorMessage color="blue">お元気ですか？</ColorMessage>
      <ColorMessage color="pink">元気です！</ColorMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      {/* <TailwindCss /> */}
    </>
  );
}