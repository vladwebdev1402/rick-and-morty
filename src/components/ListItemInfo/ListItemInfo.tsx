import React, { FC } from "react";
import { Box, Typography, ListItem } from "@mui/material";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ListItemInfo: FC<Props> = ({ title, children }) => {
  return (
    <ListItem divider>
      <Box>
        <Typography
          variant="h6"
          component="div"
          color="#081F32"
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          color="GrayText"
          gutterBottom
        >
          {children}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default ListItemInfo;
