import {FC, ChangeEvent, MouseEvent} from 'react';
import {ImageUploadProps} from '@/modules/core/components/ImageUpload/types';
import {ImageInput} from '@/modules/core/components/ImageInput';
import {useFileMutation} from '@/modules/core/api/apiSlice';
import {
  ImageFileOnly,
  ImageItemWithFile,
  ImageItemWithUrl,
} from '@/modules/core/components/ImageInput/types';
import Spinner from '@/modules/core/components/Spinner';
import {useNotification} from '@/modules/core/hooks/useNotification';
import {createBase64String} from '@/modules/core/helpers/base64Image';

export const ImageUpload: FC<ImageUploadProps> = ({
  onImageUpload,
  multipleImages = false,
  imageList,
  ...props
}) => {
  const toast = useNotification();

  const [file, {isLoading}] = useFileMutation();

  const handleUploadFiles = async (
    imageItemList: ImageFileOnly[],
    isSingle: boolean,
  ) => {
    const fileUploadResponseList = await Promise.all(
      imageItemList.map(async imageItem => {
        try {
          const res = await file(imageItem.file).unwrap();
          return {...res, url: imageItem.url};
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          const status = e?.status;
          if (status && (status === 413 || status === 422)) {
            toast(
              status === 422
                ? 'Файл должен быть одного из типов: image/png или image/jpg или image/jpeg'
                : 'Превышен максимальный размер загрузки - 10мб',
              'error',
            );
          }
          console.error(e);
          return null;
        }
      }),
    );

    const fileKeyList = fileUploadResponseList
      .filter(
        (response): response is NonNullable<typeof response> =>
          response !== null,
      )
      .map(response => ({id: response.data, url: response.url}));

    if (isSingle) {
      onImageUpload(fileKeyList);
    } else {
      onImageUpload([...imageList, ...fileKeyList]);
    }
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files as FileList);
    const allowedExtensions = ['jpg', 'jpeg', 'png'];

    let errorType = null;

    Array.from(files).filter(file => {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      const fileSize = file.size;
      errorType =
        !fileExtension || !allowedExtensions.includes(fileExtension)
          ? 'format'
          : !fileSize || fileSize > 10000000
          ? 'size'
          : null;
    });

    if (errorType) {
      toast(
        errorType === 'format'
          ? 'Файл должен быть одного из типов: image/png или image/jpg или image/jpeg'
          : 'Превышен максимальный размер загрузки - 10мб',
        'error',
      );
      event.target.value = '';
      return;
    }
    const imageItemWithFileList: ImageFileOnly[] = [];
    let isSingle = false;

    if (!multipleImages && files.length === 1) {
      const url = await fileToBase64(files[0]);
      if (url) {
        isSingle = true;
        imageItemWithFileList.push({file: files[0], url});
      }
    } else {
      const images = (
        await Promise.all(
          files.map(async file => ({
            url: await fileToBase64(file),
            file: file,
          })),
        )
      ).filter(({url}) => url !== undefined) as (ImageItemWithFile &
        ImageItemWithUrl)[];

      imageItemWithFileList.push(
        ...images.map(({id, file, url}) => ({id, file, url})),
      );
    }

    event.target.value = '';
    return handleUploadFiles(imageItemWithFileList, isSingle);
  };

  const fileToBase64 = async (file: File) => {
    try {
      return await createBase64String(file);
    } catch (error) {
      toast('Не удалось загрузить картинку. Попробуйте заново', 'error');
    }
  };

  const handleImageRemove = (
    event: MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (!multipleImages) {
      onImageUpload([]);
    } else {
      const newList = imageList.filter(({id: imageId}) => imageId !== id);
      onImageUpload(newList);
    }
  };

  return (
    <>
      <Spinner showSpinner={isLoading} />
      <ImageInput
        {...{
          handleImageRemove,
          handleImageUpload,
          multipleImages,
        }}
        imageList={imageList}
        {...props}
      />
    </>
  );
};
