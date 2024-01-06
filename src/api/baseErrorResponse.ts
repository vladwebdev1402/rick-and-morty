import { IError } from "@/types/IError";

export const baseErrorResponse = (error: IError) => error.data ? error.data.error : "There is no internet connection"