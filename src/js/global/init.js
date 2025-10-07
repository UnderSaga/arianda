/* Прописываются все инициализации и первичные параметры для скриптов */

import LazyLoad from "vanilla-lazyload";
import HystModal from "../libs/hystmodal";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

/* Ленивая загрузка */

export const lazyImageController = new LazyLoad({
  elements_selector: ".lazy__item:not([data-custom-lazy])",

  callback_loaded: (trigger) => {
    const container = trigger.closest(".lazy");
    container.classList.remove("lazy--preloader");
  },
});

// Ленивая загрузка без прелоадера и обёртки
export const lazyBackgroundController = new LazyLoad({
  elements_selector: ".lazy-simple",
});

/* --------- */

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

/* Модальные окна */

export const modalManager = new HystModal({
  linkAttributeName: "data-modal",
  waitTransitions: true,
  backscroll: false,
});

window.modalManager = modalManager;
window.lazyload = lazyImageController;

/* --------- */
