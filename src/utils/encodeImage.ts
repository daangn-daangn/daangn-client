export const encodeFileToBase64 = (image: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (event: any) => resolve(event.target.result);
    reader.onerror = (error) => reject(error);
  });
};
