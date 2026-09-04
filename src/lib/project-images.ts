import imgSaas from "@/assets/projects/project-saas.jpg";
import imgEcommerce from "@/assets/projects/project-ecommerce.jpg";
import imgAutomation from "@/assets/projects/project-automation.jpg";
import imgBrand from "@/assets/projects/project-brand.jpg";
import imgVideo from "@/assets/projects/project-video.jpg";
import imgTrading from "@/assets/projects/project-trading.jpg";
import imgMobile from "@/assets/projects/project-mobile.jpg";
import imgGame from "@/assets/projects/project-game.jpg";
import imgPatMyBack from "@/assets/projects/project-pat-my-back.png";
import type { Project } from "@/data/portfolio";

export const projectImages: Record<Project["image"], string> = {
  saas: imgSaas,
  ecommerce: imgEcommerce,
  automation: imgAutomation,
  brand: imgBrand,
  video: imgVideo,
  trading: imgTrading,
  mobile: imgMobile,
  game: imgGame,
  patmyback: imgPatMyBack,
};
