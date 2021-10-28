import { SeoHead } from "types";

/*
 * Titles and descriptions for common pages without Product pages
 */

// @TODO Rewrite to common object or class

const homePage: SeoHead = {
  title: "Rocket Rx - US Online Doctor",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Rocket Rx is a US Online Doctor offering express treatment online for a range of health conditions. Safe, Convenient, Fast and Affordable.",
    },
  ],
};

const howItWorksPage: SeoHead = {
  title: "How It Works - Rocket Rx",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "How our online consultation process works.",
    },
  ],
};

const faqPage: SeoHead = {
  title: "Frequently Asked Questions - Rocket Rx",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Frequently Asked Questions about Rocket Rx.",
    },
  ],
};

export { homePage, howItWorksPage, faqPage };
