import { useState } from "react";
import ItemList from "./components/ItemList";
import { Button, Flex } from "@chakra-ui/react";
import "./App.css";
import FilterInput from "./components/FilterInput";
import { getFilteredData } from "./utils";

export interface Item {
  name: string;
  price: number;
}

export const mockData: Item[] = [
  { name: "Item A", price: 125 },
  { name: "Item B", price: 230 },
  { name: "Item C", price: 295 },
  { name: "Item D", price: 245 },
  { name: "Item E", price: 900 },
  { name: "Item F", price: 875 },
  { name: "Item G", price: 235 },
  { name: "Item H", price: 400 },
];

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState(mockData);
  const displayedData = isExpanded ? data : data.slice(0, 5);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
  const handleFilterChange = (filterValue: string) => {
    const filteredData = getFilteredData(filterValue, displayedData);
    filterValue ? setData(filteredData) : setData(mockData);
  };
  return (
    <Flex className="main">
      <Flex className="main_header">
        <h2 className="title">Product List</h2>
        <FilterInput onChange={handleFilterChange} />
      </Flex>
      <ItemList data={displayedData} />
      <Button className="button" onClick={handleExpandClick}>
        {isExpanded ? "Show Less" : "Show All"}
      </Button>
    </Flex>
  );
}

export default App;
