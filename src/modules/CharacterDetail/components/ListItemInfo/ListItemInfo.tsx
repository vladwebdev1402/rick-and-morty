import React, { FC } from "react";
import { Box, Typography, ListItem, Skeleton } from "@mui/material";

interface Props {
  title: string;
  children: React.ReactNode;
  isLoading?: boolean;
}

const ListItemInfo: FC<Props> = ({ title, children, isLoading = false }) => {
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
    </ListItem>
  );
};

export default ListItemInfo;
