// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://demo.once-ui.com";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark",
  neutral: "slate",
  brand: "blue", //Pure blue instead of cyan
  accent: "blue", // Indigo accent for depth
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "50"
};

const dataStyle = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 10,
    y: 10,
    radius: 0, // Larger radius for better visibility
  },
  gradient: {
    display: false, // Disable to avoid conflicts
    x: 50,
    y: 50,
    width: 400,
    height: 400,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
    opacity: 20,
  },
  dots: {
    display: true,
    size: "1",
    color: "brand-on-background-weak",
    opacity: 15, // More subtle
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "ZenturioTech",
    description:
      "An open-source design system and component library for Next.js that emphasizes easy styling and accessibility in UI development.",
    image: "/images/og/home.jpg",
    canonical: "https://once-ui.com",
    robots: "index,follow",
    alternates: [{ href: "https://once-ui.com", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Once UI",
  description: meta.home.description,
  email: "lorant@once-ui.com",
};

// social links
const social = {
  twitter: "https://www.twitter.com/_onceui",
  linkedin: "https://www.linkedin.com/company/once-ui/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

export { baseURL, fonts, style, meta, schema, social, effects, dataStyle };