import React, { FC } from "react";
import {
  Box,
  Typography,
  ListItem,
  ListItemButton as ListItemBtn,
  Skeleton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
interface Props {
  title: string;
  children: React.ReactNode;
  date: string;
  isLoading?: boolean;
}
const ListEpisodeButton: FC<Props> = ({ title, children, date, isLoading }) => {
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
          {!isLoading ? (
            <Typography
              variant="h6"
              component="div"
              color="#081F32"
              fontWeight={"bold"}
            >
              {title}
            </Typography>
          ) : (
            <Skeleton height={35} width={80}></Skeleton>
          )}

          {!isLoading ? (
            <Typography variant="body1" component="div" color="GrayText">
              {children}
            </Typography>
          ) : (
            <Skeleton height={25} width={180}></Skeleton>
          )}

          {!isLoading ? (
            <Typography
              variant="overline"
              component="div"
              color="GrayText"
              gutterBottom
            >
              {date}
            </Typography>
          ) : (
            <Skeleton height={20} width={150}></Skeleton>
          )}
        </Box>
      </ListItemBtn>
    </ListItem>
  );
};

export default ListEpisodeButton;
