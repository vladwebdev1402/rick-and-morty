import React, { FC } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface Props {
  label: string;
  items: string[];
  visible: boolean;
}
const DropDown: FC<Props> = ({ label, items, visible }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: visible ? "block" : "none",
      }}
    >
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select label={label}>
          {items.map((item, idx) => (
            <MenuItem key={idx} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default DropDown;
