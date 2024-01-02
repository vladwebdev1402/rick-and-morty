import {useState} from "react"

export const useFetch = <T>(initValue: T, callback: () => Promise<T>) => {
    const [data, setData] = useState<T>(initValue);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetching = async () => {
        setIsLoading(true);
        try {
            const response = await callback();
            setError("")
            setData(response);
        }
        catch (err) {
            if (err instanceof Error) setError("Произошла ошибка: " + err.message);
            else if (typeof err === "string") setError("Произошла ошибка: " + err);
            else setError("Произошла ошибка");
        } finally {
            setIsLoading(false);
        }
    }

    return {fetching, data, error, isLoading};
}