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
  isLoading?: boolean;
  onClick: () => void;
}

const ListItemButton: FC<Props> = ({
  title,
  children,
  isLoading = false,
  onClick,
}) => {
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <ArrowForwardIosIcon color="secondary" fontSize="small" />
      }
      divider
    >
      <ListItemBtn onClick={onClick}>
        <Box>
          <Typography
            variant="h6"
            component="div"
            color="#081F32"
            fontWeight={"bold"}
          >
            {title}
          </Typography>
          {!isLoading ? (
            <Typography
              variant="body1"
              component="div"
              color="GrayText"
              gutterBottom
            >
              {children}
            </Typography>
          ) : (
            <Skeleton height={25} width={200}></Skeleton>
          )}
        </Box>
      </ListItemBtn>
    </ListItem>
  );
};

export default ListItemButton;
