const h1 = document.getElementById("h1");
banner = document.getElementById("banner");
button = document.getElementById("button");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  if (scrollPosition > 150) {
    banner.style.backgroundSize = "150%";
    h1.style.opacity = 0;
    h1.style.translate = "0 -50px";
    h1.style.scale = ".9";
    button.style.opacity = 0;
    button.style.translate = "0 -40px";
    button.style.opacity = ".8";
  } else {
    banner.style.backgroundSize = "180%";
    h1.style.opacity = 1;
    h1.style.translate = 0;
    h1.style.scale = 1;
    button.style.opacity = 1;
    button.style.translate = 0;
    button.style.opacity = 1;
  }
};

document.addEventListener("scroll", onScroll);
