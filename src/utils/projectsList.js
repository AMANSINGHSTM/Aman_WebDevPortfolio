import podcaster from "../img/podcaster.png";
import Jobseeker from "../img/JobSeeking.png";
import foodDelivery from "../img/fooddelivery.png";

const projects = [
  {
    title: "JobSeeking",
    subTitle: " Career Potential",
    description:
      "Career Catalyst is a dynamic job-seeking platform designed to support individuals at all career stages. Our mission is to streamline your job search with personalized job matching,",
    image: Jobseeker,
    technologies: [
      "Html",
      "css",
      "ReactJS",
      "NodeJS",
      "Express",
      "MongoDB",
      "FontAwesome",
    ],
    github: "https://github.com/AMANSINGHSTM/Job-Seeking",
    live: "https://job-seeking-frontend-vyuf.onrender.com",
  },
  {
    title: "Podcast SaaS",
    subTitle: " create-podcast",
    description:
      "A SaaS platform that enables users to create, manage and publish podcasts. The application is designed to give users the ability to create, edit and publish podcast episodes, manage their podcast's metadata, and much more.",
    image: podcaster,
    technologies: [
      "Nextjs",
      "Shadcn/UI",
      "Convex",
      "Clerk",
      "OpenAI",
      "TypeScript",
    ],
    github: "https://github.com/AMANSINGHSTM/podcast",
    live: "https://podcast-gamma-liart.vercel.app",
  },
  {
    title: "Food Delivery",
    subTitle: "E-Commerce",
    description:
      "Experience the convenience of having your favorite meals delivered directly to your home with our top-notch food delivery service. Whether you're craving a quick snack, a hearty meal, or a gourmet experience, we bring a variety of delicious options right to your doorstep.",
    image: foodDelivery,
    technologies: [
      "React.js",
      "use-context",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Stripe API",
    ],
    github: "https://github.com/AMANSINGHSTM/TomatoFoodDelivery ",
    live: "https://tomatofooddelivery-frontend.onrender.com/",
  },
];

export default projects;
