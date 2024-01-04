import { ICharacter } from "@/components/CharacterCard";

export interface IResponse {
    info: {
        count: number;
        page: number;
        next: string | null;
        prev: string | null;
    };
    results: ICharacter[]
}