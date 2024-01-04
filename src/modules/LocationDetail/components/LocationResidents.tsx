import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import CardsContainer from "@/components/UI/CardsContainer";
import Resident from "./Resident";
interface Props {
  residents: string[];
  isLoading: boolean;
}
const LocationResidents: FC<Props> = ({ residents, isLoading }) => {
  return (
    <Box sx={{ marginTop: "60px" }}>
      <Typography variant="h6" color="GrayText" component="div">
        Residents
      </Typography>
      <CardsContainer
        isLoading={isLoading}
        margin={false}
        notFound={residents.length === 0}
        notFoundMessage="Residents on this locations not found"
      >
        {residents.map((resident) => (
          <Resident resident={resident} key={resident} />
        ))}
      </CardsContainer>
    </Box>
  );
};

export default LocationResidents;