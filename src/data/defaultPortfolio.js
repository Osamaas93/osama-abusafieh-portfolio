export const PORTFOLIO_CATEGORIES = [
  "Front-End Development",
  "Music Production",
  "Audio Production",
  "AV Projects",
  "Video",
  "Events",
  "Technical Work",
  "Other",
];

export const PORTFOLIO_RELATED = [
  "Front-End Development",
  "Music Production",
  "General",
];

export const MEDIA_TYPES = ["YouTube", "SoundCloud", "External Link", "Image", "Other"];

// Note: These are starter items shown only when localStorage is empty.
// Manage your real content from the /admin page.
export const defaultPortfolioItems = [
  {
    id: "p-frontend-landing",
    title: "Responsive Portfolio Landing (React)",
    category: "Front-End Development",
    related: "Front-End Development",
    description:
      "A clean, responsive landing page with modern UI patterns (MUI + styled-components).",
    mediaType: "External Link",
    mediaUrl: "https://github.com/",
    thumbnailUrl: "",
    featured: true,
    createdAt: "2026-05-09T00:00:00.000Z",
    updatedAt: "2026-05-09T00:00:00.000Z",
  },
  {
    id: "p-music-track",
    title: "Original Track (SoundCloud)",
    category: "Music Production",
    related: "Music Production",
    description:
      "A sample SoundCloud embed. Replace this with your real track links in /admin.",
    mediaType: "SoundCloud",
    mediaUrl: "https://soundcloud.com/",
    thumbnailUrl: "",
    featured: true,
    createdAt: "2026-05-09T00:00:00.000Z",
    updatedAt: "2026-05-09T00:00:00.000Z",
  },
  {
    id: "p-video-showreel",
    title: "Showreel (YouTube)",
    category: "Video",
    related: "General",
    description:
      "A sample YouTube embed. Supports watch, youtu.be, and shorts URLs.",
    mediaType: "YouTube",
    mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "",
    featured: false,
    createdAt: "2026-05-09T00:00:00.000Z",
    updatedAt: "2026-05-09T00:00:00.000Z",
  },
];

