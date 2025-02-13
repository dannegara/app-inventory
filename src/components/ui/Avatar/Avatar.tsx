import { styled } from "styled-components";
import MaterialAvatar from "@mui/material/Avatar";

type Props = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

const Img = styled.img`
  border-radius: 50%;
`;

const Avatar = ({ src, alt, width = 40, height = width }: Props) => {
  if (!src) {
    return <MaterialAvatar src={src} alt={alt} sx={{ width, height }} />;
  }
  return <Img src={src} alt={alt} width={width} height={height} />;
};

export default Avatar;
