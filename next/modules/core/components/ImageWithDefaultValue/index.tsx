import React, {FC, useState} from 'react';
import Image from 'next/image';

interface ImageWithDefaultValueProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  width: number;
  height: number;
}

const ImageWithDefaultValue: FC<ImageWithDefaultValueProps> = ({
  src,
  alt,
  width,
  fallbackSrc,
  height,
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      width={width}
      height={height}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithDefaultValue;
