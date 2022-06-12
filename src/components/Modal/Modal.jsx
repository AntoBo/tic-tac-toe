import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const Modal = ({ close, text }) => {
  const handleEsc = ({ code }) => {
    if (code === "Escape") {
      close();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });
  return createPortal(
    <div className={s.overlay}>
      <div className={s.modal}>
        <p>{text}</p>
        <button onClick={close} type="button">
          OK
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
