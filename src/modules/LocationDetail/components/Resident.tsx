import BaseApi from "@/api/api";
import {
  CharacterCard,
  ICharacter,
  characterInitValue,
} from "@/components/CharacterCard";
import { Skeleton } from "@mui/material";
import { useFetch } from "@/hooks/useFetch";
import React, { FC, useEffect } from "react";

interface Props {
  resident: string;
}

const Resident: FC<Props> = ({ resident }) => {
  const { data, error, isLoading, fetching } = useFetch<ICharacter>(
    characterInitValue,
    async () => {
      const response = await BaseApi.get<ICharacter>(resident);
      return response.data;
    }
  );

  useEffect(() => {
    fetching();
  }, [resident]);

  return isLoading ? (
    <Skeleton height={300} />
  ) : (
    <CharacterCard character={data} />
  );
};

export default Resident;
