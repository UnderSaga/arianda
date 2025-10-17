import { Swiper } from "swiper";
import "swiper/css/grid";
import { Navigation, Pagination, Grid } from "swiper/modules";

const news = new Swiper("#ap-news-hero .swiper", {
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
      slidesPerView: 3,
      slidesPerGroup: 9,
      grid: {
        rows: 3,
        fill: "row",
      },
    },
  },

  navigation: {
    nextEl: "#ap-news-hero .swiper-button-next",
    prevEl: "#ap-news-hero .swiper-button-prev",
  },

  pagination: {
    el: "#ap-news-hero .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
    },
  },
});