import { useContext } from "react";
import { OrderableContext } from "../context/OrderableContext";

export const useOrderable = () => {
  const value = useContext(OrderableContext);
  return value;
};
