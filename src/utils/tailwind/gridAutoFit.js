// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require("tailwindcss/plugin");

export const gridAutoFit = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "grid-auto-fit": (value) => ({
          gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
        }),
      },
      { values: theme("gridAutoFit") },
    );
  },
  {
    theme: {
      gridAutoFit: {
        DEFAULT: "16rem",
        mobile: "6rem",
        "2xs": "8rem",
        xs: "10rem",
        sm: "14rem",
        md: "16rem",
        lg: "18rem",
        xl: "20rem",
      },
    },
  },
);
