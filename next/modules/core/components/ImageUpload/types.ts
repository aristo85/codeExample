import React from 'react';
import {
  Color,
  ImageItemWithUrl,
  Shape,
} from '@/modules/core/components/ImageInput/types';

export interface ImageUploadProps {
  onImageUpload: (imageKeyList: ImageItemWithUrl[]) => void;
  icon: React.ReactNode;
  disabledIcon?: React.ReactNode;
  imageText: string;
  shape: Shape;
  color: Color;
  imageList: ImageItemWithUrl[];
  multipleImages?: boolean;
  mainImage?: boolean;
  acceptedExtensions?: string;
  isFullHeight?: boolean;
}
