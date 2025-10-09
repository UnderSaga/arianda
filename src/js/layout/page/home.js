import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

new Swiper("#cp-home-hero .swiper", {
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
    nextEl: "#cp-home-hero .swiper-button-next",
    prevEl: "#cp-home-hero .swiper-button-prev",
  },

  pagination: {
    el: "#cp-home-hero .swiper-pagination",
    clickable: true,
  },
});

new Swiper("#cp-home-news .swiper", {
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
    nextEl: "#cp-home-news .swiper-button-next",
    prevEl: "#cp-home-news .swiper-button-prev",
  },

  pagination: {
    el: "#cp-home-news .swiper-pagination",
    clickable: true,
  },
});