import React, {useState, useLayoutEffect} from 'react';
import {Modal} from '@mui/material';
import {GalleryButton, GalleryImage, ModalContent} from './styles';
import ArrowSelectUp from '@/modules/core/components/icons/ArrowSelectUp';
import CloseIcon from '@/modules/core/components/icons/CloseIcon';
import Spinner from '@/modules/core/components/Spinner';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  images: string[];
  currentImageIndex: number;
  setCurrentImage: (index: number) => void;
};

const ModalGallery: React.FC<Props> = ({
  isOpen,
  onClose,
  images,
  currentImageIndex,
  setCurrentImage,
}) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useLayoutEffect(() => {
    setImageLoading(true);

    const img = new Image();
    img.src = images[currentImageIndex];
    img.onload = () => {
      const imgAspectRatio = img.width / img.height;
      setAspectRatio(imgAspectRatio);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && currentImageIndex > 0) {
        turnCurrentImage(currentImageIndex - 1);
      } else if (
        event.key === 'ArrowRight' &&
        currentImageIndex < images.length - 1
      ) {
        turnCurrentImage(currentImageIndex + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex, images]);

  const turnCurrentImage = (index: number) => {
    setCurrentImage(index);
  };

  const onCloseButtonClickHandler = () => {
    onClose();
    setCurrentImage(0);
  };

  return (
    <Modal disableEnforceFocus disableAutoFocus open={isOpen}>
      <ModalContent
        isHorizontalImage={(aspectRatio && aspectRatio < 1) || false}>
        <GalleryImage
          onLoad={() => setImageLoading(false)}
          src={images[currentImageIndex]}
          alt="tertiary-image"
          fill={true}
          objectFit="cover"
          priority={true}
        />
        {imageLoading && <Spinner showSpinner={imageLoading} />}
        <GalleryButton
          display={currentImageIndex > 0}
          rotate={'90deg'}
          position={'bottom-left'}
          disabled={currentImageIndex <= 0}
          onClick={() => turnCurrentImage(currentImageIndex - 1)}>
          <ArrowSelectUp stroke="#1D7ABD" />
        </GalleryButton>
        <GalleryButton
          display={currentImageIndex !== images.length - 1}
          rotate={'-90deg'}
          position={'bottom-right'}
          disabled={currentImageIndex === images.length - 1}
          onClick={() => turnCurrentImage(currentImageIndex + 1)}>
          <ArrowSelectUp stroke="#1D7ABD" />
        </GalleryButton>
        <GalleryButton
          position={'top-right'}
          onClick={onCloseButtonClickHandler}>
          <CloseIcon stroke="#1D7ABD" />
        </GalleryButton>
      </ModalContent>
    </Modal>
  );
};

export default ModalGallery;
