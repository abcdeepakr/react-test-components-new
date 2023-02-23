import React,{ReactNode} from "react";
import styles from "@/styles/Home.module.css";

export interface ModalProps{
    show: boolean;
    children: ReactNode;
    onClose: any; // TODO change this from any to the actual data type
}
const Modal = (props: ModalProps) => {

  return (
    <>
    <div onClick={props.onClose} id="myModal" className={`${styles.modal} ${props.show ? styles['show-image-modal']: styles["hide-image-modal"]}`}>
      <span className={styles.close}>&times;</span>
      {props.children}
    </div>
    </>
  );

};

export default Modal;