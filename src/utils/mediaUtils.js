const YOUTUBE_HOSTS = new Set(["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"]);

export function getYouTubeVideoId(urlString) {
  if (!urlString) return null;
  try {
    const url = new URL(urlString);
    if (!YOUTUBE_HOSTS.has(url.hostname)) return null;

    // youtu.be/<id>
    if (url.hostname === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }

    // youtube.com/watch?v=<id>
    if (url.pathname === "/watch") {
      return url.searchParams.get("v");
    }

    // youtube.com/shorts/<id>
    const parts = url.pathname.split("/").filter(Boolean);
    const shortsIndex = parts.indexOf("shorts");
    if (shortsIndex >= 0 && parts[shortsIndex + 1]) return parts[shortsIndex + 1];

    // youtube.com/embed/<id>
    const embedIndex = parts.indexOf("embed");
    if (embedIndex >= 0 && parts[embedIndex + 1]) return parts[embedIndex + 1];

    return null;
  } catch {
    return null;
  }
}

export function getYouTubeEmbedUrl(urlString) {
  const id = getYouTubeVideoId(urlString);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}`;
}

export function isSoundCloudUrl(urlString) {
  if (!urlString) return false;
  try {
    const url = new URL(urlString);
    return url.hostname.endsWith("soundcloud.com");
  } catch {
    return false;
  }
}

export function getSoundCloudEmbedUrl(trackUrl) {
  if (!trackUrl) return null;
  // SoundCloud recommends their oEmbed endpoint for full widget HTML. For a simple embed,
  // the widget URL with encoded track URL is enough.
  try {
    // Validate URL
    // eslint-disable-next-line no-new
    new URL(trackUrl);
  } catch {
    return null;
  }
  const encoded = encodeURIComponent(trackUrl);
  return `https://w.soundcloud.com/player/?url=${encoded}&color=%232292a4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;
}

export function guessMediaTypeFromUrl(urlString) {
  const yt = getYouTubeVideoId(urlString);
  if (yt) return "YouTube";
  if (isSoundCloudUrl(urlString)) return "SoundCloud";
  if (!urlString) return "Other";
  return "External Link";
}

