import React from 'react';
import Image from 'next/image';

const MyImage = ({ src, alt, width, height }) => <Image src={src} alt={alt} width={width} height={height} />;

export default MyImage;
