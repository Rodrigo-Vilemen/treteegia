import React, { useEffect, useState } from 'react';
import Placeholder from '../Assets/Icone_Sem_Imagem.svg';

type props = {
  src: string;
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const ImageOrPlaceholder: React.FC<props> = ({ src: img, ...props }) => {
  const [src, setSrc] = useState(Placeholder);

  useEffect(() => {
    setSrc(Placeholder);

    const imagem = new Image();
    imagem.src = img;

    imagem.onload = () => {
      setSrc(img);
    };
  }, [img]);

  return <img {...props} src={src} />;
};

export default ImageOrPlaceholder;
