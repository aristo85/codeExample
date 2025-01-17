import React from 'react';
import {
  EditExistedPicture,
  ImageInputBlock,
  InputButtonContainer,
  InputButtonWrapper,
  ImagePreview,
  ImageRectanglePreviewWrapper,
  ImageRectanglePreview,
  ImagePreviewButton,
  ImageRectanglePreviewMainImage,
  ImageRectanglePreviewRemove,
  ImageCirclePreviewRemove,
} from '@/modules/core/components/ImageInput/styles';
import {
  ImageInputProps,
  Shape,
} from '@/modules/core/components/ImageInput/types';
import CloseIconSmall from '@/modules/core/components/icons/CloseIconSmall';
import StarIcon from '@/modules/core/components/icons/StarIcon';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';

export const ImageInput: React.FC<ImageInputProps> = ({
  shape,
  color,
  multipleImages = false,
  icon,
  disabledIcon,
  imageText,
  acceptedExtensions = '.jpg, .jpeg, .png, image/jpeg, image/png',
  mainImage,
  imageList,
  handleImageRemove,
  handleImageUpload,
  isFullHeight,
}) => {
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);

  const isAvaImage = imageList?.length > 0 && shape === Shape.CIRCLE;
  const isMainSingleImage = imageList?.length > 0 && !multipleImages;
  const isEmpty = !multipleImages && imageList?.length > 0;

  if (isAvaImage) {
    return (
      <ImageInputBlock>
        {isScreenXs && (
          <ImageCirclePreviewRemove>
            <ImagePreviewButton
              small
              onClick={e => handleImageRemove(e, imageList[0].id)}>
              <CloseIconSmall />
            </ImagePreviewButton>
          </ImageCirclePreviewRemove>
        )}
        <ImagePreview
          src={imageList[0].url}
          alt={`Uploaded Single Image`}
          width={182}
          height={182}
        />
        {!isScreenXs && (
          <EditExistedPicture>
            Редактировать
            <input
              type="file"
              accept={acceptedExtensions}
              onChange={handleImageUpload}
            />
          </EditExistedPicture>
        )}
      </ImageInputBlock>
    );
  }

  const singleImagePreviewElement = isMainSingleImage ? (
    <ImageRectanglePreviewWrapper
      $isScreenXs={isScreenXs}
      isFullHeight={!!isFullHeight}>
      {mainImage && (
        <ImageRectanglePreviewMainImage>
          <StarIcon />
        </ImageRectanglePreviewMainImage>
      )}
      <ImageRectanglePreviewRemove>
        <ImagePreviewButton
          onClick={e => handleImageRemove(e, imageList[0].id)}>
          <CloseIconSmall />
        </ImagePreviewButton>
      </ImageRectanglePreviewRemove>
      <ImageRectanglePreview
        $isScreenXs={isScreenXs}
        src={imageList[0].url}
        alt={`Uploaded Image`}
        fill={true}
      />
    </ImageRectanglePreviewWrapper>
  ) : null;

  return (
    <InputButtonWrapper isScreenXs={isScreenXs} isFullHeight={!!isFullHeight}>
      {multipleImages &&
        imageList?.map(image => (
          <ImageRectanglePreviewWrapper key={image.id} $isScreenXs={isScreenXs}>
            <ImageRectanglePreviewRemove>
              <ImagePreviewButton
                onClick={e => handleImageRemove(e, image?.id)}>
                <CloseIconSmall />
              </ImagePreviewButton>
            </ImageRectanglePreviewRemove>
            <ImageRectanglePreview
              $isScreenXs={isScreenXs}
              src={image.url}
              alt={`Uploaded Image`}
              fill={true}
            />
          </ImageRectanglePreviewWrapper>
        ))}
      {singleImagePreviewElement}
      {!isScreenXs && isEmpty ? null : (
        <InputButtonContainer
          shape={shape}
          color={color}
          isScreenXs={isScreenXs}
          isFullHeight={!!isFullHeight}
          disabled={isEmpty}>
          <input
            type="file"
            disabled={isEmpty}
            accept={acceptedExtensions}
            onChange={handleImageUpload}
            multiple={multipleImages}
          />
          {imageList && imageList.length > 0
            ? disabledIcon
              ? disabledIcon
              : icon
            : icon}
          {imageText}
        </InputButtonContainer>
      )}
    </InputButtonWrapper>
  );
};
