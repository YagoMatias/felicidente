export default function backToTop() {
  const bntUp = document.querySelector(".btnUp");

  console.log(bntUp.scrollY);

  function toTop() {
    window.scrollTo(0, 0);
  }

  bntUp.addEventListener("click", toTop);

  function hideBtn() {
    if (window.scrollY > 10) {
      bntUp.style.display = "flex";
    } else {
      bntUp.style.display = "none";
    }
  }

  document.addEventListener("scroll", hideBtn);
  hideBtn();
  console.log(bntUp);
}
