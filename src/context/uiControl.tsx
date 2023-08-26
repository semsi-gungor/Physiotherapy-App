"use client";
import { FC, createContext, useReducer } from "react";

interface UiContext {
  isSideMenuShow: boolean;
  isInputModalShow: boolean;
  displaySideMenu: () => void;
  hideSideMenu: () => void;
  displayInputModal: () => void;
  hideInputModal: () => void;
}

export const uiContext = createContext<UiContext>({
  isSideMenuShow: false,
  isInputModalShow: false,
  displaySideMenu: () => {},
  hideSideMenu: () => {},
  displayInputModal: () => {},
  hideInputModal: () => {},
});

interface State {
  isSideMenuShow: boolean;
  isInputModalShow: boolean;
}

interface Action {
  type:
    | "display-menu"
    | "hide-menu"
    | "display-input-modal"
    | "hide-input-modal";
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "display-menu":
      return { ...state, isSideMenuShow: true };
    case "hide-menu":
      return { ...state, isSideMenuShow: false };
    case "display-input-modal":
      return { ...state, isInputModalShow: true };
    case "hide-input-modal":
      return { ...state, isInputModalShow: false };
    default:
      return state;
  }
}

const initialState = {
  isSideMenuShow: false,
  isInputModalShow: false,
};

interface Props {
  children: React.ReactNode;
}

const UIContextProvier: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function displayMenuHandler() {
    dispatch({ type: "display-menu" });
  }

  function hideMenuHandler() {
    dispatch({ type: "hide-menu" });
  }

  function displayInputModalHandler() {
    dispatch({ type: "display-input-modal" });
  }

  function hideInputModalHandler() {
    dispatch({ type: "hide-input-modal" });
  }

  const value = {
    isSideMenuShow: state.isSideMenuShow,
    isInputModalShow: state.isInputModalShow,
    displaySideMenu: displayMenuHandler,
    hideSideMenu: hideMenuHandler,
    displayInputModal: displayInputModalHandler,
    hideInputModal: hideInputModalHandler,
  };

  return <uiContext.Provider value={value}>{children}</uiContext.Provider>;
};

export default UIContextProvier;
