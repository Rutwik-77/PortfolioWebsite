/** @format */

import { ActionIcon, Modal, ScrollArea } from "@mantine/core";
import {IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

const ResumeViewer = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
  desc?: string;
}) => {
  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size='auto'
      className='!font-mono'
      opened={opened}
      onClose={close}
    >
      <Modal.Overlay />
      <Modal.Content className='!rounded-3xl'>
        <Modal.Header className='!bg-bgColor'>
          <Modal.Title className='!text-3xl text-textcolor font-bold !text-center '>
            Resume{" "}
            <ActionIcon component="a" href="\Rutwik_CV_Main.pdf" download={Info.name} variant='outline' aria-label='Settings'>
              <IconArrowBigDownLineFilled
                style={{ width: "70%", height: "70%" }}
              />
            </ActionIcon>
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body className='bg-bgColor text-textcolor !text-sm'>
          {" "}
          <Document file='\Rutwik_CV_Main.pdf'>
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ResumeViewer;
