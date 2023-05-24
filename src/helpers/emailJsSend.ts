import { send } from '@emailjs/browser';

export interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  moveDate: Date | null;
  movingSizes: string;
  originAddress: string;
  destinationAddress: string;
}

export const sendEmail = async (formValues: FormValues): Promise<void> => {
  const {
    fullName,
    email,
    phoneNumber,
    moveDate,
    movingSizes,
    originAddress,
    destinationAddress,
  } = formValues;

  const templateParams = {
    fullName,
    email,
    phoneNumber,
    moveDate: moveDate?.toDateString(),
    movingSizes,
    originAddress,
    destinationAddress,
  };

  await send(
    import.meta.env.VITE_APP_SERVICE_ID,
    import.meta.env.VITE_APP_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_APP_PUBLIC_KEY,
  );
};
