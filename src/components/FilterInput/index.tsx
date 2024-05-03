import React, { useState, ChangeEvent } from "react";
import { Input, FormControl, FormLabel, Box, Flex } from "@chakra-ui/react";

interface FilterInputProps {
  placeholder?: string;
  onChange: (filterValue: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({
  placeholder = "Search...",
  onChange,
}) => {
  const [filterValue, setFilterValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl>
      <Flex flexDir={"column"}>
        <FormLabel htmlFor="filter-input">Filter</FormLabel>
        <Box>
          <Input
            id="filter-input"
            value={filterValue}
            onChange={handleInputChange}
            placeholder={placeholder}
          />
        </Box>
      </Flex>
    </FormControl>
  );
};

export default FilterInput;
