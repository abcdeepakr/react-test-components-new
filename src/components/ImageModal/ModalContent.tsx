import Image from "next/image";
import React,{ReactNode} from "react";
import styles from "@/styles/Home.module.css";

export interface ModalContentProps{
    imgSrc: string;
}
const ModalContent = (props: ModalContentProps) => {

  return (
    <>
    <div className={styles["modal-content"]}>
            <Image
            alt="image"
            src={props.imgSrc}
            height="250"
            width="250"/>
        </div>
    </>
  );
};

export default ModalContent;

