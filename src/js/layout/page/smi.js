import { Swiper } from "swiper";
import { Navigation, Pagination, Grid } from "swiper/modules";

const videos = new Swiper("#ap-smi-hero .swiper", {
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
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },

  navigation: {
    nextEl: "#ap-smi-hero .swiper-button-next",
    prevEl: "#ap-smi-hero .swiper-button-prev",
  },

  pagination: {
    el: "#ap-smi-hero .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
    },
  },
});