import React, {ChangeEvent, MouseEvent} from 'react';

export enum Shape {
  CIRCLE = 'CIRCLE',
  RECTANGLE = 'RECTANGLE',
}

export enum Color {
  PRIMARY = 'PRIMARY',
  WHITE = 'WHITE',
}

export interface ImageInputProps {
  icon: React.ReactNode;
  imageText: string;
  shape: Shape;
  color: Color;
  handleImageRemove: (event: MouseEvent<HTMLButtonElement>, id: string) => void;
  handleImageUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  disabledIcon?: React.ReactNode;
  imageList: ImageItemWithUrl[];
  multipleImages?: boolean;
  mainImage?: boolean;
  acceptedExtensions?: string;
  isFullHeight?: boolean;
}

export type ImageItem = {
  id: string;
};

export type ImageItemWithUrl = {
  url: string;
} & ImageItem;

export type ImageItemWithFile = {
  file: File;
  url: string;
} & ImageItem;

export type ImageFileOnly = {
  url: string;
  file: File;
};
