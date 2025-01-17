/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from '@mantine/core';

const FullProjectModel = (props:any) => {

  return (
    <Modal.Root className='!font-mono'  opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className='!rounded-3xl'>
          <Modal.Header className='!bg-bgColor'>
            <Modal.Title className='!text-3xl text-textcolor font-bold !text-center '>{props.title}</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body className='bg-bgColor text-textcolor !text-sm'>{props.desc}</Modal.Body>
        </Modal.Content>
      </Modal.Root>
  )
}

export default FullProjectModel