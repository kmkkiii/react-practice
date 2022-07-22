export const ColorMessage = (props) => {
  // console.log(props);

  // 分割代入してprops.～を書かなくてもよくするテクニック
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};