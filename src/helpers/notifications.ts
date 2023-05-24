import { notifications } from '@mantine/notifications';

const commonNotification = (
  mode: 'success' | 'error',
  title: string,
  message: string,
): void => {
  notifications.show({
    title,
    message,
    color: mode === 'success' ? 'teal' : 'red',
    styles: () => ({
      title: {
        fontFamily: 'Montserrat, sans-serif',
      },
      description: {
        fontFamily: 'Montserrat, sans-serif',
      },
    }),
  });
};

export const successNotification = (): void => {
  const title = 'Thank you';
  const message = 'We have received you order and will contact you soon!';

  commonNotification('success', title, message);
};

export const errorNotification = (message: string): void => {
  const title = 'Oops...';

  commonNotification('error', title, message);
};
