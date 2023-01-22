banner = document.getElementById("banner");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  if (scrollPosition > 150) {
    banner.style.backgroundSize = "150%";
  } else {
    banner.style.backgroundSize = "180%";
  }
};

document.addEventListener("scroll", onScroll);
