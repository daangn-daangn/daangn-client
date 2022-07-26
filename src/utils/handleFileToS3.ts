export const uploadFileToS3 = async (presignedUrl: string, file: File | any) => {
  const response = await fetch(
    new Request(presignedUrl, {
      method: 'PUT',
      body: file,
      // headers: new Headers({
      //   'Content-Type': file.type,
      // }),
    }),
  );
  console.log(response);
};

export const convertURLtoImageFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split('.').pop();
  const filename = url.split('/').pop();
  const metadata = { type: `image/${ext}` };
  return new File([data], filename!, metadata);
};
