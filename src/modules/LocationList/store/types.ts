import { ILocation } from "@/components/LocationCard";

export interface IResponse {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string | null; 
    };
    results: ILocation[]
}