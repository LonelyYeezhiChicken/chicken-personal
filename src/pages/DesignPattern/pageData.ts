import { PageData, LinkMap } from "../../models";

export const pageList: PageData[] = [
    {
        id: 1,
        text: "1-1. 設計模式概述(一)",
        goPath: LinkMap.DPOverview1,
    },
    {
        id: 2,
        text: "1-2. 設計模式概述(二)",
        goPath: LinkMap.DPOverview2,
    },
    {
        id: 3,
        text: "1-3. 設計模式概述(三)",
        goPath: LinkMap.DPOverview3,
    },
    {
        id: 4,
        text: "1-4. 物件導向設計原則概述",
        goPath: LinkMap.DPOopOverview,
    },
    {
        id: 5,
        text: "2-1. 單一責任原則(SRP)",
        goPath: LinkMap.SRP,
    }
];