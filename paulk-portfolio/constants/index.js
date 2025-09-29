//home slider images
import Halima from "../src/assets/Halima.webp";
import Lauracia from "../src/assets/Lauracia.webp";
import Juzman from "../src/assets/Juzman.webp";
import Yuvala from "../src/assets/Yuvala.webp";
import smartminds from "../src/assets/smartProfile.jpeg";
export const homeSliderImages = [Halima, Juzman, Lauracia, smartminds, Yuvala];

//Basic plan list
export const basicPlan = [
  { plan: "Simple  responsive website" },
  { plan: "Basic SEO setup" },
  { plan: "1 Google Ads campaign setup" },
  { plan: "1-hour consultation on digital strategy" },
  { plan: "Email support (48h response time)" },
];

//Pro Plan List
export const proPlan = [
  { plan: "Professional website" },
  { plan: "Advanced SEO (on-page optimization)" },
  { plan: "Up to 3 Google Ads campaigns" },
  { plan: "Basic remarketing setup" },
  { plan: "Social media integration" },
  { plan: "Priority email + chat support (24h response time)" },
];

//Enterprise Plan list
export const enterprisePlan = [
  { plan: "Full-stack custom web app" },
  { plan: "Advanced SEO + Content strategy" },
  { plan: "unlimited Google campaigns + conversion tracking" },
  { plan: "Dedicated account manager" },
  { plan: "Multi-channel ads (YouTube, Display, Search Ads)" },
  { plan: "Premium 24/7 support" },
];

//-------------------A list of Case studies-------------------
export const case_studies = [
  {
    title: "Boosting Online Sales for TrendyWear",
    description:
      "Revamped their e-commerce website with a mobile-first design and integrated Google Ads campaigns. Result: 45% sales growth in 2 months.",
    image: "https://via.placeholder.com/600x400",
    link: "trendywear",
  },
  {
    title: "Helping Café Aroma Reach New Customers",
    description:
      "We ran a local ads campaign targeting coffee lovers within 10km. Their daily foot traffic doubled within 6 weeks.",
    image: "https://via.placeholder.com/600x400",
    link: "cafe-aroma",
  },
  {
    title: "A New Digital Face for Majani Insurance",
    description:
      "Designed and built a professional, SEO-friendly site. Improved client inquiries by 60% and boosted trust with a modern design.",
    image: "https://via.placeholder.com/600x400",
    link: "majani-insurance",
  },
  {
    title: "Music Artist Promo – 100K Views in 1 Month",
    description:
      "Launched a targeted YouTube ad campaign for an emerging artist. Generated over 100K views and 4K new subscribers.",
    image: "https://via.placeholder.com/600x400",
    link: "music-promo",
  },
];

//------------------------Additional details about each case study---------------------------
export const projectData = {
  trendywear: {
    title: "Boosting Online Sales for TrendyWear",
    description:
      "A full e-commerce redesign that grew sales by 45% in 2 months.",
    image: "https://via.placeholder.com/1200x600",
    client: "TrendyWear, an online clothing brand",
    problem:
      "They had low sales despite of good traffic. Their website was outdated and ads were underperforming.",
    solution:
      "We redesigned their store, optimized checkout, and ran smarter Google Ads campaigns.",
    results: [
      "45% increase in sales",
      " 70% better ad ROI",
      " 60% higher mobile engagement",
      " Checkout abandonment down 35%",
    ],
    testimonial:
      "Working with this team was a game-changer. Our sales skyrocketed and customers love the new site.",
    author: "Sarah M., CEO of TrendyWear",
  },
  "cafe-aroma": {
    title: "Helping Café Aroma Reach New Customers",
    description: "Local ad campaign doubled daily foot traffic in 6 weeks.",
    image: "https://via.placeholder.com/1200x600",
    client: "Café Aroma, a local coffee shop",
    problem:
      "They struggled to attract new walk-in customers despite being in a busy neighborhood.",
    solution:
      "We launched a Google Ads campaign targeting coffee lovers within 10km radius.",
    results: [
      " Daily foot traffic doubled",
      " Better local visibility",
      " Stronger repeat customers",
    ],
    testimonial:
      "We started seeing new faces every day! The campaign worked wonders.",
    author: "James K., Owner of Café Aroma",
  },
  // You can add Majani Insurance and Music Promo similarly
};
