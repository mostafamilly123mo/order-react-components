import React from "react";

export const OrderableContext = React.createContext<OrderableContextValue>({
  changeOrder: (id, direction) => undefined,
  canMoveDown: (_) => false,
  canMoveUp: (_) => false,
  getCurrnetIndex: (_) => -1,
});

export type OrderableContextValue = {
  /** Change order callback */
  changeOrder: (id: string, direction: "UP" | "DOWN") => void;
  /** Check if we can move component down */
  canMoveDown: (id: string) => boolean;
  /** Check if we can move component up */
  canMoveUp: (id: string) => boolean;
  /** Get current component index */
  getCurrnetIndex: (id: string) => number;
};
