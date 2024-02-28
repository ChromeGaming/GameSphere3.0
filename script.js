//contributors list

//on scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedBox = document.getElementById("main-div");
  function isInViewport(element) {
    
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  //scroll events
  function handleScroll() {
    if (isInViewport(animatedBox)) {
      animatedBox.classList.add("show");
    }
  }
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
