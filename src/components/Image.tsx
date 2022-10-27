import React, { FunctionComponent, HTMLAttributes } from 'react';
import myImage from './image.png';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  alt?: string;
}

export const Image: FunctionComponent<ImageProps> = ({ alt, ...props }) => (
  <img src={myImage} alt={alt} width="600px" {...props} />
);
