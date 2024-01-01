import { ICharacter } from "@/components/CharacterCard";

export interface IResponse {
    info: {
        count: number;
        next: string;
        pages: number;
        prev: null
    },
    results: ICharacter[]
}