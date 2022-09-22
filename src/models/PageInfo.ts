import { LinkMap } from "./LinkInfo"
export interface PortfolioData {
    side: Array<PageData>,
    body: PageBodyData
}


export interface PageDataList {
    list: Array<PageData>
}

export type PageData = {
    id: number;
    text: string;
    goPath: LinkMap;
};


export type PageBodyData = {
    backPath: LinkMap;
    title: string;
    text: string;
};