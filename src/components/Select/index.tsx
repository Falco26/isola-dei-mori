import {
  MenuItem,
  Select as MaterialSelect,
  SelectChangeEvent,
} from "@mui/material";
import { useCallback, useState } from "react";
import { theme } from "../../style/theme";
import styled from "styled-components";
import "./style.css";

type Props = {
  onChange: (props: any) => void;
  options: { value: string; label: string }[];
  className?: string;
  variant?: "white" | "black";
  valueR?: any;
};

const StyledSelectWhite = styled(MaterialSelect)({
  width: 100,
  backgroundColor: "transparent",
  borderRadius: "0px !important", // Squared corners (no border radius)
  color: theme.colors.white,
  fontWeight: "bold",
  transition: "border 0.1s ease-in-out, box-shadow 0.1s ease-in-out",

  "& .MuiSelect-select": {
    padding: "10px",
    color: theme.colors.white,
    fontWeight: "bold",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.colors.white} !important`,
    borderWidth: "1px",
    transition: "border-width 0.1s ease-in-out",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.colors.white} !important`,
    borderWidth: "2px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.colors.white} !important`,
    borderWidth: "2px",
    boxShadow: "none",
  },
  "& .Mui-focused": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  "&.MuiSelect-select:focus": {
    backgroundColor: "transparent",
  },
  "& .MuiSelect-icon": {
    color: theme.colors.white, // Change arrow color to white
  },
});

// Styled Select component for the black variant
const StyledSelectBlack = styled(MaterialSelect)({
  width: 100,
  backgroundColor: "transparent",
  borderRadius: "0px !important", // Squared corners (no border radius)
  color: theme.colors.black,
  fontWeight: "bold",
  transition: "border 0.1s ease-in-out, box-shadow 0.1s ease-in-out",

  "& .MuiSelect-select": {
    padding: "10px",
    color: theme.colors.black,
    fontWeight: "bold",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.colors.black} !important`,
    borderWidth: "1px",
    transition: "border-width 0.1s ease-in-out",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.colors.black} !important`,
    borderWidth: "2px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.colors.black} !important`,
    borderWidth: "2px",
    boxShadow: "none",
  },
  "& .Mui-focused": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  "&.MuiSelect-select:focus": {
    backgroundColor: "transparent",
  },
  "& .MuiSelect-icon": {
    color: theme.colors.black, // Change arrow color to black
  },
});

export const Select = ({ valueR, onChange, options, variant }: Props) => {
  const [value, setValue] = useState(options[0].value);

  // const handleChange = useCallback(
  //   (event: SelectChangeEvent) => {
  //     setValue(event.target.value as string);
  //     onChange(event.target.value);
  //   },
  //   [onChange]
  // );

  const StyledSelect =
    variant === "black" ? StyledSelectBlack : StyledSelectWhite;

  return (
    <StyledSelect
      label="Language"
      defaultValue={options[0].value}
      value={valueR}
      //@ts-ignore
      onChange={onChange}
    >
      {options?.map((opt) => (
        <MenuItem value={opt.value} key={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};
