import React from "react";

import { ModalOverlayProvider } from "./ModalOverlay";

const AppProvider = ({ children }) => {
  return <ModalOverlayProvider>{children}</ModalOverlayProvider>;
};

export default AppProvider;
