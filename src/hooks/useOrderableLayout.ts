import { useLocalStorage } from "./useLocalStorage";

export const useOrderableLayout = (ids: string[], key: string = "KEY") => {
  const [state, setState] = useLocalStorage(key, ids);

  const changeOrder = (id: string, direction: "UP" | "DOWN") => {
    const index = state.indexOf(id);
    const newIndex = direction === "UP" ? index - 1 : index + 1;
    const newState = [...state];
    newState.splice(index, 1);
    newState.splice(newIndex, 0, id);
    setState(newState);
  };

  const canMoveUp = (id: string) => {
    return state.indexOf(id) !== 0;
  };

  const canMoveDown = (id: string) => {
    return state[state.length - 1] !== id;
  };

  const getCurrnetIndex = (id: string) => {
    return state.indexOf(id);
  };

  return {
    changeOrder,
    canMoveDown,
    canMoveUp,
    getCurrnetIndex,
  };
};
