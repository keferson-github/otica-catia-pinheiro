import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: 'class',
  content: ["./index.html", "./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          dark: "hsl(var(--secondary-dark))",
        },
        "accent-beige": {
          DEFAULT: "hsl(var(--accent-beige))",
          dark: "hsl(var(--accent-beige-dark))",
          light: "hsl(var(--accent-beige-light))",
        },
        "accent-silver": {
          DEFAULT: "hsl(var(--accent-silver))",
          dark: "hsl(var(--accent-silver-dark))",
          light: "hsl(var(--accent-silver-light))",
        },
        "client-satisfied": "#d0a37c",
        "hero-bg": "hsl(var(--hero-bg))",
        "hero-overlay": "hsl(var(--hero-overlay))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'elegant': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "whatsapp-float": {
          "0%": {
            transform: "translateY(0px) scale(1)",
            boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)"
          },
          "50%": {
            transform: "translateY(-6px) scale(1.05)",
            boxShadow: "0 15px 35px rgba(37, 211, 102, 0.4)"
          },
          "100%": {
            transform: "translateY(0px) scale(1)",
            boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)"
          }
        },
        "whatsapp-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(37, 211, 102, 0.6), 0 0 40px rgba(37, 211, 102, 0.3)"
          },
          "50%": {
            boxShadow: "0 0 30px rgba(37, 211, 102, 0.8), 0 0 60px rgba(37, 211, 102, 0.4)"
          }
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "whatsapp-float": "whatsapp-float 3s ease-in-out infinite",
        "whatsapp-glow": "whatsapp-glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin-slow 8s linear infinite",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
