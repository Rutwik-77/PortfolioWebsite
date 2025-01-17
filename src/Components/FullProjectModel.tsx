// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Badge, Group, Modal } from '@mantine/core';

// const FullProjectModel = (props:any) => {

//   return (
//     <Modal.Root className='!font-mono'  opened={props.opened} onClose={props.close}>
//         <Modal.Overlay />
//         <Modal.Content className='!rounded-3xl'>
//           <Modal.Header className='!bg-bgColor'>
//             <Modal.Title className='!text-3xl text-textcolor font-bold !text-center '>{props.title}</Modal.Title>
//             <Modal.CloseButton />
//           </Modal.Header>
//           <Modal.Body className='bg-bgColor text-textcolor !text-sm'>{props.desc}</Modal.Body>
//           <Modal.Body className='bg-bgColor text-textcolor !text-sm'><Group className="" mb="xs">
//               {props.technologies.map((tech: string, index: number) => (
//                 <Badge key={index} variant="outline" color="blue" size="sm">
//                   {tech}
//                 </Badge>
//               ))}
//             </Group></Modal.Body>
//           <Modal.Body className='bg-bgColor text-textcolor !text-sm'>{props.link}</Modal.Body>
//           <Modal.Body className='bg-bgColor text-textcolor !text-sm'>{props.github}</Modal.Body>

//         </Modal.Content>
//       </Modal.Root>
//   )
// }

// export default FullProjectModel


/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge, Group, Modal } from '@mantine/core';

const FullProjectModel = (props: any) => {
  return (
    <Modal.Root className='!font-mono' opened={props.opened} onClose={props.close}>
      <Modal.Overlay />
      <Modal.Content className='!rounded-3xl'>
        <Modal.Header className='!bg-bgColor'>
          <Modal.Title className='!text-3xl text-textcolor font-bold !text-center '>
            {props.title}
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body className='bg-bgColor text-textcolor !text-sm'>{props.desc}</Modal.Body>
        <Modal.Body className='bg-bgColor text-textcolor !text-sm'>
          <Group className="" mb="xs">
            {props.technologies.map((tech: string, index: number) => (
              <Badge key={index} variant="outline" color="blue" size="sm">
                {tech}
              </Badge>
            ))}
          </Group>
        </Modal.Body>
        <Modal.Body className='bg-bgColor text-textcolor !text-sm'>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-greencolor  hover:underline"
          >
            {props.link}
          </a>
        </Modal.Body>
        <Modal.Body className='bg-bgColor text-textcolor !text-sm'>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-greencolor hover:underline"
          >
            {props.github}
          </a>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FullProjectModel;
