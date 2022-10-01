import { Header, PageSide } from "../../components";
import { PageData, LinkMap } from "../../models";
import { useTitle } from "../../utils/PageTitle";

const pageList: PageData[] = [
  { id: 1, text: "[Day1]C# 雞礎觀念- C#簡介", goPath: LinkMap.D1no13 },
  {
    id: 2,
    text: "[Day2]C# 雞礎觀念- 與C#開發千里來相見",
    goPath: LinkMap.D2no13,
  },
  {
    id: 3,
    text: "[Day3]C# 雞礎觀念- 核心的數據成員~變數(一)",
    goPath: LinkMap.D3no13,
  },
  {
    id: 4,
    text: "[Day4]C# 雞礎觀念- 核心的數據成員~變數(二)",
    goPath: LinkMap.D4no13,
  },
  {
    id: 5,
    text: "[Day5]C# 雞礎觀念- 讓變數學會七十二變的高手~運算子",
    goPath: LinkMap.D5no13,
  },
  {
    id: 6,
    text: "[Day6]C# 雞礎觀念- 程式碼擁有判斷真假的能力~邏輯運算子",
    goPath: LinkMap.D6no13,
  },
  {
    id: 7,
    text: "[Day7]C# 雞礎觀念- 你有選擇障礙嗎? 交給if陳述式解決吧!",
    goPath: LinkMap.D7no13,
  },
  {
    id: 8,
    text: "[Day8]C# 雞礎觀念- 如果沒有如果，只有太多的如果switch陳述式",
    goPath: LinkMap.D8no13,
  },
  {
    id: 9,
    text: "[Day9]C# 雞礎觀念- 省去重複程式碼的好幫手~for迴圈",
    goPath: LinkMap.D9no13,
  },
  {
    id: 10,
    text: "[Day10]C# 雞礎觀念- 重播與停止 while迴圈與break",
    goPath: LinkMap.D10no13,
  },
  {
    id: 11,
    text: "[Day11]C# 雞礎觀念- 把複雜的事情與關係簡單化~列舉與結構",
    goPath: LinkMap.D11no13,
  },
  {
    id: 12,
    text: "[Day12]C# 雞礎觀念- 當我們同在一起~陣列(Array)",
    goPath: LinkMap.D12no13,
  },
  {
    id: 13,
    text: "[Day13]C# 雞礎觀念- 來個輪迴吧~foreach迴圈",
    goPath: LinkMap.D13no13,
  },
  {
    id: 14,
    text: "[Day14]C# 雞礎觀念- 不同層次的陣列~二維陣列",
    goPath: LinkMap.D14no13,
  },
  {
    id: 15,
    text: "[Day15]C# 雞礎觀念- 多筆資料的好朋友~List",
    goPath: LinkMap.D15no13,
  },
  {
    id: 16,
    text: "[Day16]C# 雞礎觀念- 虛擬代工廠~方法(function)",
    goPath: LinkMap.D16no13,
  },
  // {
  //   id: 17,
  //   text: "[Day17]C# 雞礎觀念- 像個郵差一樣~值與址的傳遞",
  //   goPath: LinkMap.D17no13,
  // },
  // {
  //   id: 18,
  //   text: "[Day18]C# 雞礎觀念- 回頭吧!孩子~ref 與 out 參數修飾詞",
  //   goPath: LinkMap.D18no13,
  // },
  // {
  //   id: 19,
  //   text: "[Day19]C# 雞礎觀念- 讓時間倒轉吧~遞迴",
  //   goPath: LinkMap.D19no13,
  // },
  // {
  //   id: 20,
  //   text: "[Day20]C# 雞礎觀念- 物件導向(oop)基本觀念",
  //   goPath: LinkMap.D20no13,
  // },
  // {
  //   id: 21,
  //   text: "[Day21]C# 雞礎觀念- 物件導向(oop)~類別(class)",
  //   goPath: LinkMap.D21no13,
  // },
  // {
  //   id: 22,
  //   text: "[Day22]C# 雞礎觀念- 物件導向(oop)~物件(Object)",
  //   goPath: LinkMap.D22no13,
  // },
  // {
  //   id: 23,
  //   text: "[Day23]C# 雞礎觀念- 物件導向(oop)~屬性(Property)",
  //   goPath: LinkMap.D23no13,
  // },
  // {
  //   id: 24,
  //   text: "[Day24]C# 雞礎觀念- 物件導向(oop)~建構方法(Constructor)",
  //   goPath: LinkMap.D24no13,
  // },
  // {
  //   id: 25,
  //   text: "[Day25]C# 雞礎觀念- 共產主義者~靜態成員",
  //   goPath: LinkMap.D25no13,
  // },
  // {
  //   id: 26,
  //   text: "[Day26]C# 雞礎觀念- 物件導向(oop)~ 多載(Overload)",
  //   goPath: LinkMap.D26no13,
  // },
  // {
  //   id: 27,
  //   text: "[Day27]C# 雞礎觀念- 做錯事該怎麼辦呢?~錯誤處理",
  //   goPath: LinkMap.D27no13,
  // },
  // {
  //   id: 28,
  //   text: "[Day28]C# 雞礎觀念- 物件導向(oop)~ 繼承",
  //   goPath: LinkMap.D28no13,
  // },
  // {
  //   id: 29,
  //   text: "[Day29]C# 雞礎觀念- 物件導向(oop)~介面(Interface)",
  //   goPath: LinkMap.D29no13,
  // },
  // {
  //   id: 30,
  //   text: "[Day30]C# 不雞礎觀念- Install Tailwind Css with ASP.NET MVC5",
  //   goPath: LinkMap.D30no13,
  // },
  // { id: 31, text: "[Day31]C# 雞礎觀念- 結語", goPath: LinkMap.D31no13 },
];

function IronMan13() {
  useTitle("Chicken Say Hi | 鐵人 13");
  return (
    <>
      <Header />
      <PageSide list={pageList} />
    </>
  );
}

export default IronMan13;
