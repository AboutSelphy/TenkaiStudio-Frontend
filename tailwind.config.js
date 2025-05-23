import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
  "themes": {
    "light": {
      "colors": {
        "default": {
          "50": "#f8f8f8",
          "100": "#efefef",
          "200": "#e5e5e5",
          "300": "#dcdcdc",
          "400": "#d2d2d2",
          "500": "#c9c9c9",
          "600": "#a6a6a6",
          "700": "#838383",
          "800": "#5f5f5f",
          "900": "#3c3c3c",
          "foreground": "#000",
          "DEFAULT": "#c9c9c9"
        },
        "primary": {
          "50": "#dfecff",
          "100": "#b3d2ff",
          "200": "#86b8ff",
          "300": "#599eff",
          "400": "#2d83ff",
          "500": "#0069ff",
          "600": "#0057d2",
          "700": "#0044a6",
          "800": "#003279",
          "900": "#00204d",
          "foreground": "#fff",
          "DEFAULT": "#0069ff"
        },
        "secondary": {
          "50": "#e7e5f9",
          "100": "#c5bff1",
          "200": "#a49ae9",
          "300": "#8275e0",
          "400": "#6150d8",
          "500": "#3f2bd0",
          "600": "#3423ac",
          "700": "#291c87",
          "800": "#1e1463",
          "900": "#130d3e",
          "foreground": "#fff",
          "DEFAULT": "#3f2bd0"
        },
        "success": {
          "50": "#e8fcef",
          "100": "#c7f8da",
          "200": "#a7f3c4",
          "300": "#86efae",
          "400": "#66ea98",
          "500": "#45e682",
          "600": "#39be6b",
          "700": "#2d9655",
          "800": "#216d3e",
          "900": "#154527",
          "foreground": "#000",
          "DEFAULT": "#45e682"
        },
        "warning": {
          "50": "#fff3e8",
          "100": "#ffe3c7",
          "200": "#ffd3a7",
          "300": "#ffc386",
          "400": "#ffb266",
          "500": "#ffa245",
          "600": "#d28639",
          "700": "#a6692d",
          "800": "#794d21",
          "900": "#4d3115",
          "foreground": "#000",
          "DEFAULT": "#ffa245"
        },
        "danger": {
          "50": "#fee6e6",
          "100": "#fbc2c2",
          "200": "#f99e9e",
          "300": "#f77a7a",
          "400": "#f55757",
          "500": "#f33333",
          "600": "#c82a2a",
          "700": "#9e2121",
          "800": "#731818",
          "900": "#490f0f",
          "foreground": "#000",
          "DEFAULT": "#f33333"
        },
        "background": "#fafaff",
        "foreground": {
          "50": "#e0dfe1",
          "100": "#b4b3b8",
          "200": "#88868e",
          "300": "#5c5a64",
          "400": "#302d3b",
          "500": "#040111",
          "600": "#03010e",
          "700": "#03010b",
          "800": "#020008",
          "900": "#010005",
          "foreground": "#fff",
          "DEFAULT": "#040111"
        },
        "content1": {
          "DEFAULT": "#f2f8ff",
          "foreground": "#000"
        },
        "content2": {
          "DEFAULT": "#d9e9ff",
          "foreground": "#000"
        },
        "content3": {
          "DEFAULT": "#bfdaff",
          "foreground": "#000"
        },
        "content4": {
          "DEFAULT": "#a6cbff",
          "foreground": "#000"
        },
        "focus": "#00ffe5",
        "overlay": "#000000",
        "divider": "#111111"
      }
    },
    "dark": {
      "colors": {
        "default": {
          "50": "#05080d",
          "100": "#080d14",
          "200": "#0b121b",
          "300": "#0e1723",
          "400": "#111c2a",
          "500": "#3b444f",
          "600": "#646b75",
          "700": "#8e939a",
          "800": "#b8bbbf",
          "900": "#e1e3e4",
          "foreground": "#fff",
          "DEFAULT": "#111c2a"
        },
        "primary": {
          "50": "#00204d",
          "100": "#003279",
          "200": "#0044a6",
          "300": "#0057d2",
          "400": "#0069ff",
          "500": "#2d83ff",
          "600": "#599eff",
          "700": "#86b8ff",
          "800": "#b3d2ff",
          "900": "#dfecff",
          "foreground": "#fff",
          "DEFAULT": "#0069ff"
        },
        "secondary": {
          "50": "#130d3e",
          "100": "#1e1463",
          "200": "#291c87",
          "300": "#3423ac",
          "400": "#3f2bd0",
          "500": "#6150d8",
          "600": "#8275e0",
          "700": "#a49ae9",
          "800": "#c5bff1",
          "900": "#e7e5f9",
          "foreground": "#fff",
          "DEFAULT": "#3f2bd0"
        },
        "success": {
          "50": "#154527",
          "100": "#216d3e",
          "200": "#2d9655",
          "300": "#39be6b",
          "400": "#45e682",
          "500": "#66ea98",
          "600": "#86efae",
          "700": "#a7f3c4",
          "800": "#c7f8da",
          "900": "#e8fcef",
          "foreground": "#000",
          "DEFAULT": "#45e682"
        },
        "warning": {
          "50": "#4d3115",
          "100": "#794d21",
          "200": "#a6692d",
          "300": "#d28639",
          "400": "#ffa245",
          "500": "#ffb266",
          "600": "#ffc386",
          "700": "#ffd3a7",
          "800": "#ffe3c7",
          "900": "#fff3e8",
          "foreground": "#000",
          "DEFAULT": "#ffa245"
        },
        "danger": {
          "50": "#490f0f",
          "100": "#731818",
          "200": "#9e2121",
          "300": "#c82a2a",
          "400": "#f33333",
          "500": "#f55757",
          "600": "#f77a7a",
          "700": "#f99e9e",
          "800": "#fbc2c2",
          "900": "#fee6e6",
          "foreground": "#000",
          "DEFAULT": "#f33333"
        },
        "background": "#020305",
        "foreground": {
          "50": "#46464d",
          "100": "#6e6e79",
          "200": "#9797a6",
          "300": "#bfbfd2",
          "400": "#e8e8ff",
          "500": "#ececff",
          "600": "#f0f0ff",
          "700": "#f4f4ff",
          "800": "#f8f8ff",
          "900": "#fcfcff",
          "foreground": "#000",
          "DEFAULT": "#e8e8ff"
        },
        "content1": {
          "DEFAULT": "#001026",
          "foreground": "#fff"
        },
        "content2": {
          "DEFAULT": "#001533",
          "foreground": "#fff"
        },
        "content3": {
          "DEFAULT": "#001a40",
          "foreground": "#fff"
        },
        "content4": {
          "DEFAULT": "#00204d",
          "foreground": "#fff"
        },
        "focus": "#00ffe5",
        "overlay": "#00ffe5",
        "divider": "#ffffff"
      }
    }
  },
  "layout": {
    "fontSize": {
      "tiny": "0.75rem",
      "small": "0.875rem",
      "medium": "1rem",
      "large": "1.125rem"
    },
    "lineHeight": {
      "tiny": "1rem",
      "small": "1.25rem",
      "medium": "1.5rem",
      "large": "1.75rem"
    },
    "radius": {
      "small": "0.5rem",
      "medium": "0.75rem",
      "large": "0.875rem"
    },
    "borderWidth": {
      "small": "1px",
      "medium": "2px",
      "large": "3px"
    },
    "disabledOpacity": "0.5",
    "dividerWeight": "1",
    "hoverOpacity": "0.9"
  }
    }),
  ],
}

module.exports = config;

