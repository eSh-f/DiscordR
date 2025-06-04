import gif from "../assets/putinvszel.gif";
import ilon from "../assets/ilonlada.png";
import { ILandingSectionProps } from "@/modules/LandingSection/model/types";

export const landingSections: ILandingSectionProps[] = [
  {
    title: "Завершение легендарного конфликта 01.08.2025",
    text: "Путин и Зеленский решили уладить конфликт в чемпионате по Dota 2. Эксклюзивно только в Ruscord!",
    image: gif,
    variant: "thematic",
  },
  {
    title: "Выход новой игры от компании Tesla!",
    text: "Илон Маск, выкупил компанию LADA и создал онлайн симулятор езды на Lada Vesta. Подробнее читайте у нас в Ruscord!",
    image: ilon,
    variant: "default",
  },
];
