import React, { createContext, useCallback, useContext, useState } from "react";

const ModalOverlayContext = createContext({});

const ModalOverlayProvider = ({ children }) => {
  const [closedModalEdit, setClosedModalEdit] = useState(true);
  const [closedModalAlert, setClosedModalAlert] = useState(true);
  const [closedModalOverlay, setClosedModalOverlay] = useState(true);

  const [newList, setNewList] = useState(false);

  return (
    <ModalOverlayContext.Provider
      value={{
        closedModalEdit,
        closedModalAlert,
        closedModalOverlay,
        setClosedModalEdit,
        setClosedModalAlert,
        setClosedModalOverlay,
        newList,
        setNewList,
      }}
    >
      {children}
    </ModalOverlayContext.Provider>
  );
};

function useModalOverlay() {
  const context = useContext(ModalOverlayContext);

  if (!context) throw new Error("Missing ModalOverlayProvider");

  return context;
}

export { ModalOverlayProvider, useModalOverlay };
