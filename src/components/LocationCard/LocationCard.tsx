import React, { FC } from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { ILocation } from "./type";
interface Props {
  location: ILocation;
}
const LocationCard: FC<Props> = ({ location }) => {
  return (
    <Card>
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "12px 0px",
        }}
      >
        <CardContent>
          <Typography variant="h6" textAlign={"center"}>
            {location.name}
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            {location.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LocationCard;
