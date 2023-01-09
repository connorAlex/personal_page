const openLink = (e) => {
  if (e.target.tagName === "A") {
    console.log("link clicked");
    e.stopPropagation();
    return;
  }
  const link = e.currentTarget.dataset.link;
  window.open(link);
};

const nodes = document.querySelectorAll("section");
nodes.forEach((item) => {
  item.addEventListener("click", openLink);
});
