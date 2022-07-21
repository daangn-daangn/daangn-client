export const uploadFileToS3 = async (presignedUrl: string, file: File | any) => {
  const response = await fetch(
    new Request(presignedUrl, {
      method: 'PUT',
      body: file,
      headers: new Headers({
        'Content-Type': file.type,
      }),
    }),
  );
  console.log(response);
};
