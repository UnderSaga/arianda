import { Swiper } from "swiper";
import "swiper/css/grid";
import { Navigation, Pagination, Grid } from "swiper/modules";

const news = new Swiper("#cp-certificats-hero .swiper", {
  modules: [Navigation, Pagination, Grid],

  slidesPerView: 1,
  // slidesPerGroup: 6,
  spaceBetween: 20,

  breakpoints: {
    540: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    1000: {
      slidesPerView: 5,
      slidesPerGroup: 15,
      grid: {
        rows: 3,
        fill: "row",
      },
    },
  },

  navigation: {
    nextEl: "#cp-certificats-hero .swiper-button-next",
    prevEl: "#cp-certificats-hero .swiper-button-prev",
  },

  pagination: {
    el: "#cp-certificats-hero .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
    },
  },
});