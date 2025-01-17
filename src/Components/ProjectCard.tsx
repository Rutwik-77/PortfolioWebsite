/* eslint-disable @typescript-eslint/no-explicit-any */


 
/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModel from "./FullProjectModel";

const ProjectCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Card
  data-aos="fade-up"
  data-aos-duration="800"
  onClick={open}
  className="!bg-bgColor hover:!scale-95 !shadow-[0_0_10px_1px_#185bc6] !cursor-pointer !sm:min-w-[360px]"
  shadow="lg"
  w="full"
  padding="sm"
  radius="lg"
  withBorder
  style={{ maxWidth: '360px', width: '100%' }} // Ensures responsiveness with fallback
>
  <Card.Section className="p-3">
    <Image src={props.image} alt={props.title} className="!rounded-lg" />
  </Card.Section>

  <Group justify="space-between" mt="md" mb="xs">
    <Text className="!text-2xl !text-textcolor !font-semibold !my-2">
      {props.title}
    </Text>
    {props.live === true && (
      <Badge
        className="flex gap-2"
        color="pink"
        variant="outline"
        rightSection={<Indicator size={7} processing></Indicator>}
      >
        Live{" "}
      </Badge>
    )}
  </Group>

  <Group className="" mb="xs">
    {props.technologies.map((tech: string, index: number) => (
      <Badge key={index} variant="outline" color="blue" size="sm">
        {tech}
      </Badge>
    ))}
  </Group>

  <Text className="" lineClamp={5} size="sm" c="dimmed">
    {props.desc}
  </Text>

  <Button onClick={open} color="blue" fullWidth mt="md" radius="md">
    Show More
  </Button>
</Card>

      <FullProjectModel
        opened={opened}
        close={close}
        title={props.title}
        desc={props.desc}
        image={props.image}
        live={props.live}
        github={props.github}
        technologies={props.technologies}
        link={props.link}
      />
    </>
  );
};

export default ProjectCard;
