"use client";
import { createContext, useReducer } from "react";

interface AdminContext {
  isInputModalShow: boolean;
  displayInputModal: () => void;
  hideInputModal: () => void;
}

export const adminContext = createContext<AdminContext>({
  isInputModalShow: false,
  displayInputModal: () => {},
  hideInputModal: () => {},
});

interface State {
  isInputModalShow: boolean;
}

interface Action {
  type: "display-input-modal" | "hide-input-modal";
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "display-input-modal":
      return { ...state, isInputModalShow: true };
    case "hide-input-modal":
      return { ...state, isInputModalShow: false };
    default:
      return state;
  }
}

const initialState = {
  isInputModalShow: false,
};

interface Props {
  children: React.ReactNode;
}

export default function AdminContextProvier({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function displayInputModalHandler() {
    dispatch({ type: "display-input-modal" });
  }

  function hideInputModalHandler() {
    dispatch({ type: "hide-input-modal" });
  }

  const value = {
    isInputModalShow: state.isInputModalShow,
    displayInputModal: displayInputModalHandler,
    hideInputModal: hideInputModalHandler,
  };

  return (
    <adminContext.Provider value={value}>{children}</adminContext.Provider>
  );
}
