import { IEpisode } from "@/components/EpisodeCard";


export interface IResponse {
    info: {
        page: number;
        count: number;
        next: string | null;
        prev: string | null;
    },
    results: IEpisode[]
}