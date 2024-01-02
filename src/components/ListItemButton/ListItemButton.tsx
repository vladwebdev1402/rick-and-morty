import React, { FC } from "react";
import {
  Box,
  Typography,
  ListItem,
  ListItemButton as ListItemBtn,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
interface Props {
  title: string;
  children: React.ReactNode;
  date?: string;
}

const ListItemButton: FC<Props> = ({ title, date = "", children }) => {
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <ArrowForwardIosIcon color="secondary" fontSize="small" />
      }
      divider
    >
      <ListItemBtn>
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
            gutterBottom={!date}
          >
            {children}
          </Typography>
          {date && (
            <Typography
              variant="overline"
              component="div"
              color="GrayText"
              gutterBottom
            >
              {date}
            </Typography>
          )}
        </Box>
      </ListItemBtn>
    </ListItem>
  );
};

export default ListItemButton;
