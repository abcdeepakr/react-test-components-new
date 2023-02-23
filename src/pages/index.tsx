import styles from "@/styles/Home.module.css";
import TestLibrary from "@/components/TestLibrary";
import Timeline from "@/components/Timeline";
import Modal from "@/components/ImageModal/Modal";
import ModalContent from "@/components/ImageModal/ModalContent";
import Image from "next/image";
import { useState } from "react";
import TodoComponent from "../components/TodoComponent/Todo";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  function renderModal() {
    setShowModal(!showModal);
    return showModal;
  }
  return (
    <>
      <TodoComponent />



      {/* <div className={styles.center}>
        <TestLibrary />
      </div> */}
      {/* <div style={{'border':'2px solid red', 'margin':"10px", 'padding':'10px'}}>
    
    </div> */}
      {/* <Image
        alt="image"
        src={`https://images.pexels.com/photos/14130951/pexels-photo-14130951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
        height="250"
        width="250"
        onClick={() => renderModal()}
      /> */}
      {/* <Modal show={showModal} onClose={renderModal}>
        
        <ModalContent imgSrc="https://images.pexels.com/photos/14130951/pexels-photo-14130951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Modal> */}
    </>
  );
}
