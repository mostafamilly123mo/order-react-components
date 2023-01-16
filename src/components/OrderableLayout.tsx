import { OrderableContext } from "../context/OrderableContext";
import { useOrderableLayout } from "../hooks/useOrderableLayout";

export const OrderableLayout = <
  T extends { id: string; disableOrder?: boolean }
>({
  children,
  localStorageKey,
}: OrderableLayoutProps<T>) => {
  const componentsIds = children
    .filter((child) => Boolean(child.props.disableOrder) === false)
    .map((child) => child.props.id);

  const value = useOrderableLayout(componentsIds, localStorageKey);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <OrderableContext.Provider value={value}>
        {children}
      </OrderableContext.Provider>
    </div>
  );
};

type OrderableLayoutProps<T> = {
  localStorageKey?: string;
  children: React.ReactElement<T>[];
};
