export const convertBase64 = async (file: Blob): Promise<unknown> => {
  const getBase64 = await new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });

  return getBase64;
};
