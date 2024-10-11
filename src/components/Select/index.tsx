import {
  MenuItem,
  Select as MaterialSelect,
  SelectChangeEvent,
} from "@mui/material";
import { useCallback, useState } from "react";
import { theme } from "../../style/theme";
import styled from "styled-components";

type Props = {
  onChange: (props: any) => void;
  options: { value: string; label: string }[];
  className?: string;
};

const StyledSelect = styled(MaterialSelect)({
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
    color: theme.colors.white, // White arrow
  },
});

export const Select = ({ onChange, options }: Props) => {
  const [value, setValue] = useState(options[0].value);

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setValue(event.target.value as string);
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <StyledSelect
      label="Language"
      defaultValue={options[0].value}
      value={value}
      //@ts-ignore
      onChange={handleChange}
    >
      {options.map((opt) => (
        <MenuItem value={opt.value} key={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};
