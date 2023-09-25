import { Image } from "@chakra-ui/react";

interface Props {
  src: string;
}

const Img = ({ src }: Props) => {
  return <Image src={src} width="100%" height="100%" />;
};

export default Img;
