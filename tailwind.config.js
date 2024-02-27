// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */

const spacing = {
  xs: "var(--space-xs)",
  sm: "var(--space-sm)",
  md: "var(--space-md)",
  lg: "var(--space-lg)",
};
const borderWidth = {
  md: "var(--border-md)",
};

const borderRadius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  cap: "var(--radius-cap)",
};

const textColor = {
  black: "var(--text-black)",
  grey: "var(--text-grey)",
  white: "var(--white)",
  label: "var(--label-color)",
  placeholder: "var(--placeholder-color)",
  "table-click": "var(--table-click)",
  tableheaditem: "var(--table-head-item)",
};

const backgroundColor = {
  white: "var(--white)",
  gray: "var(--bg-gray)",
  grey: "var(--bg-grey)",
  critical: "var(--badge-critical-bg)",
  complete: "var(--badge-complete-bg)",
  warning: "var(--badge-warning-bg)",
  cancelled: "var(--badge-cancelled-bg)",
  pending: "var(--badge-pending-bg)",
  active: "var(--badge-active-bg)",
  tablehead: "var(--zenbor-tablehead)",
  tableheaditemhover: "var(--table-head-item-bg-hover)",
  layout: "var(--layout-grey)",
};

const borderColor = {
  grey: "var(--border-grey)",
  black: "var(--border-black)",
  button: "var(--border-button)",
  input: "var(--border-input)",
  main: "var(--zenbor-main)",
  child: "var(--zenbor-child)",
  parent: "var(--zenbor-parent)",
};

const clipPath = {
  progressbar: "polygon(75% 0%, 100% 50%, 75% 100%, 65% 100%, 90% 52%, 65% 0);",
};

const colors = {
  primary: "var(--primary-color)",
  "primary-hover": "var(--primary-hover-color)",

  secondary: "var(--secondary-color)",
  "secondary-hover": "var(--secondary-hover-color)",

  hover: "var(--hover-grey)",
  "table-click": "var(--table-click)",
  critical: "var(--badge-critical)",

  complete: "var(--badge-complete)",

  warning: "var(--badge-warning)",

  cancelled: "var(--badge-cancelled)",

  pending: "var(--badge-pending)",
  active: "var(--badge-active)",
  // badgeColordefault : "var(--badge-default-color)"
};

const fontSize = {
  sm: "var(--font-sm)",
  sm1: "var(--font-sm-1)",
  md: "var(--font-md)",
  lg: "var(--font-lg)",
  xl: "var(--font-xl)",
};

const boxShadow = {
  small: "0px 1px 1px 0px rgba(0, 0, 0, 0.12)",
  popup: "0px 5px 12px 0px rgba(9, 30, 66, 0.22)",
  card: "box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.09)",
  row: "inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);",
  collapse:
    "0px 1px 0px 0px rgba(0, 0, 0, 0.09), 3px 0px 0px 0px #0C66E4 inset;",
  wrapper:
    "0px 0px 1px 0px rgba(0, 0, 0, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.12);",
};
const dropShadow = {
  popup: ["0 1px 2px rgba(0, 0, 0, 0.02)", "0 12px 8px rgba(0, 0, 0, 0.08)"],
  // 'drop':  ["0 1px 2px rgba(0, 0, 0, 0.02)", "0 12px 8px rgba(0, 0, 0, 0.08)"],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      padding: spacing,
      margin: spacing,
      spacing: spacing,
      borderWidth,
      borderRadius,
      fontSize,
      colors,
      clipPath,
      textColor,
      backgroundColor,
      borderColor,
      backgroundImage: {
        checklg: "url('/assets/check-big.svg')",
        lostbg: "url('/assets/lossbg.png')",
        profitbg: "url('/assets/profitbg.png')",
        underconstruction: "url('/assets/constructionbg.png')",
      },
      boxShadow,
      dropShadow,

      height: {
        dynamic: "var(--dynamic-val)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};