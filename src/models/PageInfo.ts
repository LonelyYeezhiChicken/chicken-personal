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
};


export type PageBodyData = {
    title: string;
    text: string;
};