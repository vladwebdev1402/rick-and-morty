import React, { FC } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  label: string;
  items: string[];
  visible: boolean;
  setFilter: (value: string) => void;
  current: string;
}
const DropDown: FC<Props> = ({ label, items, visible, current, setFilter }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

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
        <Select label={label} value={current} onChange={handleChange}>
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
