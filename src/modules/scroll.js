const scroll = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".smooth-scroll");
    const smoothScrollImages = document.querySelectorAll(".smooth-scroll");

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);

    window.addEventListener("scroll", scrollFunction);

    smoothScrollImages.forEach(function (image) {
      image.addEventListener("click", function () {
        scrollToTop();
      });
    });
  });
};
