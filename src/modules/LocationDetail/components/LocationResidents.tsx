import React, { FC } from "react";
import { ResidentsContainer } from "@/components/ResidentsContainer";
interface Props {
  residents: string[];
  isLoading: boolean;
}
const LocationResidents: FC<Props> = ({ residents, isLoading }) => {

  return (
   <ResidentsContainer 
    isLoading={isLoading}
    residents={residents}
    title={"Residents"}
    />
  );
};

export default LocationResidents;
