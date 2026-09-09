export const SERVICE_AREAS = [
  { name: "Buda", region: "TX" },
  { name: "Kyle", region: "TX" },
  { name: "Austin", region: "TX" },
  { name: "San Marcos", region: "TX" },
] as const;

export const LOCAL_SERVICE_PAGE = "/central-texas-functional-nutrition";

export const SERVICE_PAGE_PATHS = [
  "/functional-nutrition-consultations",
  "/gut-health-nutrition",
  "/perimenopause-nutrition-support",
  "/functional-lab-testing",
] as const;

export const SITE = {
  name: "Empowered Wellness with Inna",
  origin: "https://www.empoweredwithinna.com",
  description:
    "Virtual functional nutrition and personalized support for women in Buda, Kyle, Austin, San Marcos, and throughout Central Texas.",
  locale: "en_US",
  language: "en-US",
  practitioner: {
    name: "Inna Benyukhis",
    title: "Certified Nutritional Therapy Practitioner",
    path: "/about-inna-benyukhis",
  },
  phone: "+13124044675",
  email: "healthy@empoweredwithinna.com",
  bookingUrl:
    "https://calendly.com/inna-ntp/free-15-minute-wellness-clarity-call-via-phone",
} as const;
