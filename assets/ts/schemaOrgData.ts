// import { TeammateType } from "types";

/*
 * Main template for seo 9 schema.org
 */

const schemaOrgData: Object = {
  "@context": "http://schema.org",
  "@id": "https://www.rocketrx.com/",
  "@type": ["Pharmacy", "Organization"],
  legalName: "Rocket RX Inc.",
  duns: "098038647",
  description:
    "Online doctor, providing prescription medicines from a registered US internet pharmacy.",
  url: "https://www.rocketrx.com/",
  email: "help@rocketrx.com",
  telephone: "(888) 634-1354",
  currenciesAccepted: "USD",
  name: "RocketRX",
  priceRange: "$",
  alternateName: ["RocketRX Pharmacy"],
  additionalType: [
    "https://www.wikidata.org/wiki/Q7094080",
    "https://www.wikidata.org/wiki/Q3081320",
  ],
  contactPoint: [
    {
      "@id": "#CustomerSupport",
      "@type": "ContactPoint",
      telephone: "(888) 634-1354",
      contactType: "customer support",
    },
  ],
  address: {
    "@id": "#PostalAddress",
    "@type": "PostalAddress",
    streetAddress: "16192 Coastal Highway",
    addressLocality: "Lewes",
    addressRegion: "DE",
    postalCode: "19958",
    addressCountry: "US",
  },
};

export { schemaOrgData };
