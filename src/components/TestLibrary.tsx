import { useState } from "react";
import {
  Separator,
  Timeline,
  TimelineItem,
  TimelineItemBody,
  TimelineItemContent,
  TimelineItemDate,
  TimelineItemTitle,
  Modal,
} from "@deepakr-28/boring-component-library";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
export default function TestLibrary() {
  const [show, setShow] = useState(false);
  function modalHandler() {
    setShow(!show);
  }
  return (
    <>
      {/* <TimelineItem>
        <TimelineItemDate>22 Jan, 2023</TimelineItemDate>
        <Separator />
        <TimelineItemContent>
          <TimelineItemTitle>Title</TimelineItemTitle>
          <TimelineItemBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem vel nostrum, voluptas quo aspernatur sed! Nesciunt
            ipsa, et, culpa excepturi aliquid vero sunt, asperiores eveniet
            saepe omnis quaerat dolorem tempore?
          </TimelineItemBody>
        </TimelineItemContent>
      </TimelineItem> */}
      <h1>Click on the image to open modal</h1>
      <Image
        alt="image"
        src={`https://images.pexels.com/photos/14130951/pexels-photo-14130951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
        height="250"
        width="250"
        onClick={() => modalHandler()}
      />
      <Modal show={show} onClose={modalHandler}>
        <div className={styles["modal-content"]}>
          <Image
            alt="image"
            src={`https://images.pexels.com/photos/14130951/pexels-photo-14130951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            height="700"
            width="700"
            onClick={() => modalHandler()}
          />
        </div>
      </Modal>
    </>
  );
}
