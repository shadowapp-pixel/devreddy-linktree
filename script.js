const ICONS = {
  spotify:
    '<svg viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.68-6.3-2.04-10.44-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.4-.6 11.58 1.32.42.18.48.66.24 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.42C15.24 8.4 8.88 8.16 5.22 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.32 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.62.24z"/></svg>',
  apple:
    '<svg viewBox="0 0 24 24"><path d="M16.365 1.43c0 1.14-.468 2.226-1.222 3.032-.827.89-2.13 1.583-3.235 1.494-.135-1.1.42-2.256 1.192-3.033C13.938.87 15.32.09 16.365 1.43zM20.5 17.34c-.53 1.22-.78 1.77-1.46 2.85-.95 1.5-2.29 3.37-3.95 3.39-1.47.02-1.85-.96-3.84-.95-1.99.01-2.41.97-3.88.95-1.66-.02-2.92-1.7-3.87-3.2C.9 17.44.32 13.6 1.83 10.9c.9-1.6 2.53-2.62 4.29-2.65 1.53-.03 2.98 1.03 3.92 1.03.94 0 2.7-1.27 4.56-1.09.78.03 2.97.31 4.38 2.36-.11.07-2.62 1.53-2.59 4.56.03 3.62 3.17 4.82 3.21 4.83-.03.09-.5 1.72-1.11 2.4z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24"><path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C17 2.5 12 2.5 12 2.5h-.01s-5 0-8.19.34c-.46.05-1.46.06-2.36 1-.71.72-.94 2.36-.94 2.36S0 8.13 0 10.06v1.72c0 1.93.24 3.86.24 3.86s.23 1.64.94 2.36c.9.94 2.08.91 2.6 1.01 1.89.18 8.05.34 8.22.34.01 0 5.01 0 8.2-.34.46-.05 1.46-.07 2.36-1.01.71-.72.94-2.36.94-2.36s.24-1.93.24-3.86v-1.72c0-1.93-.24-3.86-.24-3.86zM9.55 14.6V7.7l6.27 3.46-6.27 3.44z"/></svg>',
  soundcloud:
    '<svg viewBox="0 0 24 24"><path d="M8.5 17h11.36c1.5 0 2.64-1.19 2.64-2.6 0-1.42-1.15-2.6-2.55-2.63-.13-2.5-2.2-4.5-4.75-4.5-1.5 0-2.83.68-3.71 1.75-.28-.09-.58-.15-.9-.15-1.5 0-2.7 1.13-2.79 2.58-1.4.2-2.5 1.4-2.5 2.86 0 1.6 1.3 2.69 2.9 2.69H8.5zM.5 12.5c.28 0 .5.28.5.63v3.24c0 .34-.22.63-.5.63S0 16.7 0 16.36v-3.24c0-.35.22-.62.5-.62zm2.4-1c.3 0 .5.28.5.63v4.5c0 .35-.2.63-.5.63s-.5-.28-.5-.63v-4.5c0-.35.2-.63.5-.63z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24"><path d="M16.6 5.82c-1.02-.88-1.66-2.16-1.66-3.6h-3.14v14.06c0 1.5-1.22 2.72-2.72 2.72s-2.72-1.22-2.72-2.72 1.22-2.72 2.72-2.72c.3 0 .58.05.85.13V10.5c-.27-.04-.55-.06-.85-.06-3.26 0-5.9 2.64-5.9 5.9s2.64 5.9 5.9 5.9 5.9-2.64 5.9-5.9V9.01c1.24.9 2.76 1.42 4.4 1.42V7.29c-1.11 0-2.13-.36-2.78-.86z"/></svg>',
  link:
    '<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>',
};

function renderProfile() {
  document.querySelector(".name").textContent = PROFILE.name;
  document.querySelector(".bio").textContent = PROFILE.bio;
  const avatar = document.querySelector(".avatar");
  avatar.src = PROFILE.avatar;
  avatar.alt = PROFILE.name;
  document.title = `${PROFILE.name} — Listen & Follow`;
  document.getElementById("footer-name").textContent = PROFILE.name;
}

function renderLinks() {
  const container = document.getElementById("links");
  container.innerHTML = "";
  LINKS.forEach((link) => {
    const a = document.createElement("a");
    a.className = "link-btn";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <span class="link-icon">${ICONS[link.icon] || ICONS.link}</span>
      <span class="link-label">${link.label}</span>
    `;
    container.appendChild(a);
  });
}

function setupShare() {
  const btn = document.getElementById("share-btn");
  const label = btn.querySelector(".share-label");
  const defaultLabel = label.textContent;

  btn.addEventListener("click", async () => {
    const shareData = {
      title: PROFILE.name,
      text: PROFILE.bio,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Share failed:", err);
        }
      }
      return;
    }

    const showTemporaryLabel = (text) => {
      label.textContent = text;
      btn.classList.add("copied");
      setTimeout(() => {
        label.textContent = defaultLabel;
        btn.classList.remove("copied");
      }, 2000);
    };

    try {
      await navigator.clipboard.writeText(shareData.url);
      showTemporaryLabel("Link copied!");
      return;
    } catch (err) {
      console.error("Clipboard API copy failed:", err);
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = shareData.url;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (!copied) throw new Error("execCommand copy returned false");
      showTemporaryLabel("Link copied!");
    } catch (err) {
      console.error("Fallback copy failed:", err);
      showTemporaryLabel("Couldn't copy — long-press to copy");
    }
  });
}

renderProfile();
renderLinks();
setupShare();
document.getElementById("year").textContent = new Date().getFullYear();
