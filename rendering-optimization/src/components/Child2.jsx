import { memo } from "react";

const style = {
  height: "50px",
  backgroundColor: "lightgray",
  padding: "8px"
}

export const Child2 = memo(() => {
  console.log("Child2レンダリング");

  return (
    <div style={style}>
      <p>Child2</p>
    </div>
  )
});