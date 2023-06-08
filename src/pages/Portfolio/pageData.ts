import phaserImg from "../../assets/phaser.jpg";
import iron13 from "../../assets/iron13.png";
import p5Img from "../../assets/p5.png";
import csharpImg from "../../assets/csharp.png";
import oauth2Img from "../../assets/oauth2.png";
import nunitImg from "../../assets/nunit.png";
import designPatternImg from "../../assets/designPattern.jpg";
import mlImg from "../../assets/ml.png";
import daylilyImg from "../../assets/daylily.jpg";
import threeJsImg from "../../assets/threejs.png";
import dotNetWebAPI from "../../assets/dotNetWebAPI.jfif";

type HCard = {
  id: number;
  title: string;
  content: string;
  imgPath: string;
};

export const p5Js: HCard = {
  id: 1,
  title: "P5 Js",
  content: "主要為美術用途的JS",
  imgPath: p5Img,
};

export const phaserJs: HCard = {
  id: 2,
  title: "phaser Js",
  content: "基於Js的遊戲引擎",
  imgPath: phaserImg,
};

export const ironMan13: HCard = {
  id: 3,
  title: "第十三屆鐵人賽",
  content: "C# 雞礎觀念",
  imgPath: iron13,
};

export const CsharpEvent: HCard = {
  id: 4,
  title: "C# 委派與事件",
  content: "C# 委派與事件，基礎範例",
  imgPath: csharpImg,
};

export const OAuthNote: HCard = {
  id: 5,
  title: "OAuth 筆記",
  content: "<OAuth2實戰> 閱讀筆記",
  imgPath: oauth2Img,
};

export const NunitTest: HCard = {
  id: 6,
  title: "單元測試 筆記",
  content: "<單元測試的藝術> 閱讀筆記",
  imgPath: nunitImg,
};

export const DesignPattern: HCard = {
  id: 7,
  title: "設計模式 筆記",
  content: "設計模式 閱讀筆記",
  imgPath: designPatternImg,
};

export const Ml: HCard = {
  id: 8,
  title: "機器學習 筆記",
  content: "機器學習 閱讀筆記",
  imgPath: mlImg,
};

export const Daylily: HCard = {
  id: 9,
  title: "開發雜記",
  content: "日常開發雜記",
  imgPath: daylilyImg,
};

export const Webapi4Net: HCard = {
  id: 10,
  title: "dotNet Web API",
  content: "dot net Web API 閱讀筆記",
  imgPath: dotNetWebAPI,
};

export const ThreeJs: HCard = {
  id: 11,
  title: "Three JS",
  content: "Three JS 研究筆記",
  imgPath: threeJsImg,
};
