import { Item } from "./App";

export const getFilteredData = (value:string,data:Item[])=>{
    if(!value){
        return []
    }
    const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  return filteredData

}