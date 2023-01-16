import { OrderableItem } from "./components/OrderableItem";
import { OrderableLayout } from "./components/OrderableLayout";

function App() {
  return (
    <OrderableLayout>
      <OrderableItem id="ITEM_1" content="This is item one" />
      <OrderableItem id="ITEM_2" content="This is item two" />
      <OrderableItem id="ITEM_3" content="This is item three" />
    </OrderableLayout>
  );
}

export default App;
