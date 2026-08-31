import craft from "@/assets/craft.jpg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero-roof.jpg";
import roofBefore from "@/assets/ba-roof-before.jpg";
import roofAfter from "@/assets/ba-roof-after.jpg";
import brickBefore from "@/assets/ba-brick-before.jpg";
import brickAfter from "@/assets/ba-brick-after.jpg";


export const company = {
  name: "SK Quality Construction Ltd",
  phone: "+44 7946 345554",
  phoneHref: "tel:+447946345554",
  instagram: { handle: "@qualityconstruction", url: "https://www.instagram.com/qualityconstruction" },
  tiktok: {
    handle: "@skqualityconstructionLtd",
    url: "https://www.tiktok.com/@skqualityconstructionltd",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Recent Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Roofing",
    description:
      "Professional roofing solutions for maintenance, repairs and improvement work.",
  },
  {
    title: "Roof Pointing",
    description:
      "Expert pointing work to improve the condition, appearance and protection of masonry.",
  },
  {
    title: "DOFF Cleaning",
    description:
      "Specialist DOFF cleaning for removing dirt, staining and unwanted surface build-up.",
  },
  {
    title: "ThermaTech Paint Removal",
    description:
      "Specialist paint removal using professional equipment and controlled techniques.",
  },
  {
    title: "Roof Repairs",
    description:
      "Reliable repair work designed to address roofing issues before they become bigger problems.",
  },
  {
    title: "Exterior Restoration",
    description: "Careful cleaning, restoration and improvement of exterior surfaces.",
  },
];

/** Drop an .mp4 path (or /public URL) into `video` to replace the placeholder. */
export const projects = [
  { title: "Project 01", description: "Add a short project description here.", video: "" },
  { title: "Project 02", description: "Add a short project description here.", video: "" },
  { title: "Project 03", description: "Add a short project description here.", video: "" },
];

/** Replace `before` / `after` with your own image imports or /public paths. */
export const beforeAfter = [
  {
    label: "Project 01 — Roof Restoration",
    caption: "Weathered tiled roof, cleaned and re-ridged.",
    before: roofBefore,
    after: roofAfter,
  },
  {
    label: "Project 02 — Masonry Repointing",
    caption: "Soiled brickwork cleaned and repointed.",
    before: brickBefore,
    after: brickAfter,
  },
];


/** Replace `src` with real project photos — the layout adapts automatically. */
export const gallery = [
  { src: hero, alt: "Slate roof re-covering in progress on a UK property", tall: true },
  { src: craft, alt: "Close-up of repointing work to brickwork" },
  { src: about, alt: "Stone property exterior after cleaning" },
  { src: craft, alt: "Mortar detail during pointing work", tall: true },
  { src: about, alt: "Restored stone facade" },
  { src: hero, alt: "Roofer working from scaffolding" },
  { src: about, alt: "Completed exterior restoration" },
  { src: craft, alt: "Craftsman applying mortar to brick joints" },
  { src: hero, alt: "Roof and chimney detail" },
];

export const images = { hero, craft, about };
