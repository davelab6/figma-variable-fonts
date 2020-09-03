export interface FontData {
    fontId: number;
    data: any;
    loading: boolean;
}

export interface FontDataList {
    [key: string]: FontData;
}

export interface FontFamily {}

export interface AxisData {
    name: number;
    data: any;
    loading: boolean;
}

export interface FontAxis {
    tag: string;
    name: string;
    min: number;
    defaultValue: number;
    max: number;
}
