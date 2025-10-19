"use client";

import Toast from "@/app/_components/ui/Toast";
import { createContext, useContext, useState } from "react";
const globalContext = createContext();

function GlobalContextProvider({ children }) {
  //set up for using MUI toast(even though handling toasts are way easier with other libraries!)
  const [toast, setToast] = useState({ open: false });
  function resetToast() {
    setToast((toast) => ({ ...toast, open: false }));
  }
  function openToast(params) {
    setToast({ open: true, ...params });
  }

  const [modal, setModal] = useState({ open: false });
  function openModal(params) {
    setModal({ open: true, ...params });
  }
  function closeModal() {
    setModal((modal) => ({
      ...modal,
      open: false,
    }));
  }

  const value = { toast, openToast, modal, openModal, closeModal };

  return (
    <globalContext.Provider value={value}>
      {children}
      <Toast
        text={toast?.text}
        onClose={resetToast}
        isOpen={toast?.open}
        severity={toast?.severity}
        duration={toast?.duration}
      />
    </globalContext.Provider>
  );
}

export function useGlobalContext() {
  const state = useContext(globalContext);
  return state;
}

export default GlobalContextProvider;
