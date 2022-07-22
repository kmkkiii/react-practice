import { memo } from "react";

const style = {
  height: "50px",
  backgroundColor: "lightgray",
  padding: "8px"
}

export const Child3 = memo(() => {
  console.log("Child3レンダリング");

  return (
    <div style={style}>
      <p>Child3</p>
    </div>
  )
});