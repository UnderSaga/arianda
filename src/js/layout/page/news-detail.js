import { Swiper } from "swiper";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const news = new Swiper("#sp-news-other .swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  // loop: true,
  modules: [Navigation, Autoplay, Pagination],

  autoplay: {
    delay: 4900,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sp-news-other .swiper-button-next",
    prevEl: "#sp-news-other .swiper-button-prev",
  },

  pagination: {
    el: "#sp-news-other .swiper-pagination",
    clickable: true,
  },
});