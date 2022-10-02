import phaserImg from "../../assets/phaser.jpg";
import iron13 from "../../assets/iron13.png";
import p5Img from "../../assets/p5.png";
import csharpImg from "../../assets/csharp.png";

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