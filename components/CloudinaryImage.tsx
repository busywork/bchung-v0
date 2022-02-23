import React from 'react';
import Image from 'next/image';

type CloudinaryImageProps = {
  publicId: string;
  height: string | number;
  width: string | number;
  className?: string;
  alt?: string;
} & React.ComponentPropsWithoutRef<'figure'>;

const CloudinaryImage = ({ publicId, height, width, className, alt }: CloudinaryImageProps) => {
  const hostUrl = `https://res.cloudinary.com/busywork/image/upload`;

  return (
    <figure>
      <Image
        className={className}
        src={`${hostUrl}/${publicId}`}
        height={+height}
        width={+width}
        alt={alt}
      />
    </figure>
  );
};

export default CloudinaryImage;
