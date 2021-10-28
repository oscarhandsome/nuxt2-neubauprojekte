import Vue from "vue";
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

import "swiper/swiper-bundle.min.css";

SwiperClass.use([Pagination, Mousewheel, Navigation]);
Vue.use(getAwesomeSwiper(SwiperClass));
