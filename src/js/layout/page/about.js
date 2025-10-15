import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

new Swiper("#cp-about-timeline .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  // loop: true,
  modules: [Navigation, Autoplay, Pagination],

  autoplay: {
    delay: 4900,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: "#cp-about-timeline .swiper-button-next",
    prevEl: "#cp-about-timeline .swiper-button-prev",
  },

  pagination: {
    el: "#cp-about-timeline .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const slideDate = this.slides[index].dataset;
      return `<span class="${className}">${slideDate.year}</span>`;
    },
  },
});