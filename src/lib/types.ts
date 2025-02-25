export interface Section {
    type: "paragraph" | "subheader" | "bulletList" | "image" | "space" | "header";
    content?: string[];
}

export interface Post {
    id: string;
    title: string;
    type: string;
    thumbnail: string;
    author: string | null;
    createdAt: number;
    editedAt: number | null;
    sections: Section[];
}

export interface ProductInfo {
    ceiling?: string;
    frontWall?: string;
    sideWall?: string;
    backWall?: string;
    handrail?: string;
    cabinDoor?: string;
    lobby?: string;
    floors?: string;
    gfnf?: string;
    cabinFloor?: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    refImages: string[];
    info: ProductInfo;
    subCategory: string;
}

export interface Pattern {
    id: string;
    lable: string;
    image: string;
    catalogImage?: string
  }
  
  export interface PatternItem {
    id: string;
    name: string;
    patternId: string;
    image: string;
    sections?: Section [];
    info?: Info;
    subId?: string
  }

  export interface Info {
    ceiling?: string;
    frontWall?: string;
    sideWall?: string;
    backWall?: string;
    handrail?: string;
    cabinDoor?: string;
    lobby?: string;
    floors?: string;
    gfnf?: string;
    cabinFloor?: string;
    cabinDoorType?: string;
    floorDoor?: string;
    protectionRail?: string;
    bollard?: string
  }
