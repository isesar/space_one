import React from "react";
import "./style.css";
import { Item } from "../../App";
import { Flex, List, ListItem } from "@chakra-ui/react";

interface ItemListProps {
  data: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ data }: ItemListProps) => {
  return (
    <Flex className={`item-list`}>
      <List>
        {data.map((item) => (
          <ListItem key={item.name} className="item">
            <Flex className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-price">Price: ${item.price}</span>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default ItemList;
