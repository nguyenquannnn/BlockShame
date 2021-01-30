const pxToRem = (px: number, oneRemPx = 17) => `${px / oneRemPx}rem`;

export default (theme: any) => {
  const borderWidth = 2;
  const width = pxToRem(56);
  const height = pxToRem(34);
  const size = pxToRem(22);
  const gap = (34 - 22) / 2;
  return {
    root: {
      width,
      height,
      padding: 0,
      margin: theme.spacing(1),
      overflow: "unset",
    },
    switchBase: {
      padding: pxToRem(gap),
      "&$checked": {
        color: "#fff",
        transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
        "& + $track": {
          backgroundColor: "#192861",
          opacity: 1,
          border: "none",
        },
        "& $thumb": {
          backgroundColor: "#D9AA33",
        },
      },
    },
    track: {
      borderRadius: 40,
      border: `solid ${theme.palette.grey[400]}`,
      borderWidth,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
      boxSizing: "border-box",
    },
    thumb: {
      boxShadow: "none",
      backgroundColor: theme.palette.grey[400],
      width: size,
      height: size,
    },
    checked: {},
  };
};