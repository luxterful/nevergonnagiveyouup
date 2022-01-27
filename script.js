const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/1/13/Ia-never-gonna-give-you-up-rick-astley-trionfale-remaster-4k-v3-500421.jpg"
);
img.style.maxWidth = "100%";
document.getElementsByTagName("body")[0].replaceWith(img);
