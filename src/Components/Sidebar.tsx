
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import { navlinks } from './Header';
const Sidebar = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
  return (
       <>
      <Drawer.Root className='!-z-10' opened={opened} onClose={close} position='right' size="50vw">
        <Drawer.Overlay className='!z-10' />
        <Drawer.Content className='!-z-5' bg="#06264e">
          <Drawer.Body className='mt-24 flex flex-col  gap-6 text-xl'>
            {
                navlinks()

            }
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className='md:hidden !z-10' color='#5bf960' opened={opened} onClick={toggle} aria-label="Toggle navigation" />

    </>
  )
}

export default Sidebar

