import { useOrderable } from "../hooks/useOrderable";

export const OrderableItem = ({
  content,
  id,
  disableOrder,
}: OrderableItemProps) => {
  const { canMoveDown, canMoveUp, changeOrder, getCurrnetIndex } =
    useOrderable();
  return (
    <div className="flex-item" style={{ order: getCurrnetIndex(id) }}>
      {content}
      <div className="flex-item">
        <button
          disabled={disableOrder || !canMoveUp(id)}
          onClick={() => {
            changeOrder(id, "UP");
          }}
        >
          Up
        </button>
        <button
          disabled={disableOrder || !canMoveDown(id)}
          onClick={() => {
            changeOrder(id, "DOWN");
          }}
        >
          Down
        </button>
      </div>
    </div>
  );
};

type OrderableItemProps = {
  id: string;
  content: string;
  disableOrder?: boolean;
};
