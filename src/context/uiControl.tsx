"use client";
import { createContext, useReducer } from "react";

interface UiContext {
  isSideMenuShow: boolean;
  displaySideMenu: () => void;
  hideSideMenu: () => void;
}

export const uiContext = createContext<UiContext>({
  isSideMenuShow: false,
  displaySideMenu: () => {},
  hideSideMenu: () => {},
});

interface State {
  isSideMenuShow: boolean;
}

interface Action {
  type: "display-menu" | "hide-menu";
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "display-menu":
      return { isSideMenuShow: true };
    case "hide-menu":
      return { isSideMenuShow: false };
    default:
      return state;
  }
}

const initialState = {
  isSideMenuShow: false,
};

interface Props {
  children: React.ReactNode;
}

export default function UIContextProvier({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function displayMenuHandler() {
    dispatch({ type: "display-menu" });
  }

  function hideMenuHandler() {
    dispatch({ type: "hide-menu" });
  }

  const value = {
    isSideMenuShow: state.isSideMenuShow,
    displaySideMenu: displayMenuHandler,
    hideSideMenu: hideMenuHandler,
  };

  return <uiContext.Provider value={value}>{children}</uiContext.Provider>;
}
