import * as St from './style';

import { MdAdd, MdImageNotSupported, MdModeEdit } from 'react-icons/md';

import React, { useMemo } from 'react';
import THEMES from 'styles/theme';
import { FieldError, useFormContext } from 'react-hook-form';
import { convertBase64 } from 'utils/base64';

type ImageInputProps = {
  name: string;
  title?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ImageInput: React.FC<ImageInputProps> = ({
  name,
  title,
  error,
  required,
}) => {
  const { register, setValue, setError, clearErrors, watch } = useFormContext();
  const hiddenFileInput = React.useRef({} as HTMLInputElement);
  const acceptTypes = 'image/png, image/jpeg, image/jpg';
  const value = watch(name);

  const hasImage = useMemo(() => {
    return value && value?.length > 0;
  }, [value]);

  const handleClick = () => {
    if (hiddenFileInput) {
      hiddenFileInput.current.click();
    }
  };

  const onFileChange = async (event?: React.ChangeEvent<HTMLInputElement>) => {
    const acceptedFileType = acceptTypes.split(', ');
    if (event) {
      const fileChosen = event?.target?.files;
      if (fileChosen) {
        const data = await convertBase64(fileChosen[0]);
        if (acceptedFileType.includes(fileChosen[0].type)) {
          clearErrors(name);
          return setValue(name, data);
        } else {
          setError(name, { message: 'Invalid file.' });
        }
      }
    }
  };

  const dropHandler = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const acceptedFileType = acceptTypes.split(', ');
    const filesUploaded = event.dataTransfer.items;
    const filesArray: File[] = [];

    if (event.dataTransfer.items) {
      for (let i = 0; i < filesUploaded?.length; i++) {
        if (acceptedFileType.includes(filesUploaded[i].type)) {
          const file = filesUploaded[i].getAsFile();
          if (file) {
            filesArray.push(file);
          }
        } else {
          setError(name, { message: 'Invalid file.' });
        }
      }
    }
  };
  return (
    <St.Container onDrop={dropHandler}>
      <St.Content>
        {title && <St.Label>{title}</St.Label>}
        <input
          type="file"
          {...register(name, { required })}
          style={{ display: 'none' }}
          ref={hiddenFileInput}
          accept={acceptTypes}
          onChange={onFileChange}
        />

        {error?.message && <St.Error>{error.message}</St.Error>}

        <St.Button type="button" onClick={handleClick}>
          {!hasImage ? (
            <MdAdd size={24} color={THEMES.colors.backgroundLight} />
          ) : (
            <MdModeEdit size={24} color={THEMES.colors.backgroundLight} />
          )}
        </St.Button>
      </St.Content>
      {hasImage ? (
        <img src={value} alt={name} />
      ) : (
        <MdImageNotSupported size={38} color={THEMES.colors.secondary} />
      )}
    </St.Container>
  );
};

export default ImageInput;
