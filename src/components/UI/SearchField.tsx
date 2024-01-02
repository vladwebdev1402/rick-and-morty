import React, { FC } from "react";
import { TextField, IconButton, SxProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  sx?: SxProps;
  fullWidth?: boolean;
}

const SearchField: FC<Props> = ({
  value,
  onChange,
  placeholder,
  sx,
  fullWidth = false,
}) => {
  return (
    <TextField
      fullWidth={fullWidth}
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={sx}
      InputProps={{
        startAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
};

export default SearchField;
