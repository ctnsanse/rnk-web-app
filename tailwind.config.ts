import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
      colors: {

        white: "#ffffff",
  
        primary: {
          200: "#efeffc",
          300: "#cfd0f6",
          400: "#7f81e8",
          DEFAULT: "#5F62E2",
          600: "#5658CB",
  
        },
        secondary: {
          200: "#eaf8f4",
          300: "#bfe9de",
          400: "#56c4a7",
          DEFAULT: "#2AB691",
          600: "#26a482",
        },
        gray: {
          300: "#fafafa",
          400: "#f2f2f2",
          500: "#e5e5e5",
          600: "#b2b2b2",
          700: "#808080",
          800: "#333333",
          DEFAULT: "#1D1D1D",
        },
        alert: {
          danger: "#FF4E4E",
          success: "#00DD16",
          warning: "#FEB72F",
        },
        blue: {
          100: "#dbeafe",
          200: "#a5f3fc",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
        },
  
      },
  
      fontSize: {
  
        '8xl': ['120px', {
  
          lineHeight: '120px',
          letterSpacing: '-6px',
          fontWeight: '500',
  
        }],
  
        '7xl': ['72px', {
  
          lineHeight: '80px',
          letterSpacing: '-4.5px',
          fontWeight: '600',
  
        }],
  
        '6xl': ['55px', {
  
          lineHeight: '60px',
          letterSpacing: '-2.5px',
          fontWeight: '500',
  
        }],
  
        '5xl': ['48px', {
  
          lineHeight: '54px',
          letterSpacing: '-1.600000023841858px',
          fontWeight: '500',
  
        }],
  
        '4xl': ['36px', {
  
          lineHeight: '44px',
          letterSpacing: '-1.2000000476837159px',
          fontWeight: '500',
  
        }],
  
        '3xl': ['28px', {
  
          lineHeight: '34px',
          letterSpacing: '-0.800000011920929px',
          fontWeight: '500',
  
        }],
  
        '2xl': ['24px', {
  
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
  
        }],
  
        xl: ['24px', {
  
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
  
        }],
  
        lg: ['21px', {
  
          lineHeight: '30px',
          letterSpacing: '-0.800000011920929px',
          fontWeight: '400',
  
        }],
  
        base: ['17px', {
  
          lineHeight: '25px',
          letterSpacing: '-0.699999988079071px',
          fontWeight: '400',
  
        }],
  
        sm: ['15px', {
  
          lineHeight: '23px',
          letterSpacing: '-0.6000000238418579px',
          fontWeight: '400',
  
        }],
  
        caption1: ['20px', {
  
          lineHeight: '24px',
          letterSpacing: '-0.6000000238418579px',
          fontWeight: '400',
  
        }],
  
        caption2: ['18px', {
  
          lineHeight: '20px',
          letterSpacing: '-0.30000001192092896px',
          fontWeight: '400',
  
        }],
  
        caption3: ['16px', {
  
          lineHeight: '18px',
          letterSpacing: '-0.5px',
          fontWeight: '400',
  
        }],
  
        caption4: ['13px', {
  
          lineHeight: '15px',
          letterSpacing: '-0.2000000029802322px',
          fontWeight: '400',
  
        }],
      },
  
      borderRadius: {
        DEFAULT: '10px',
      },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
