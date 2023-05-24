import { FC, useState, useRef } from 'react';

import { EmailJSResponseStatus } from '@emailjs/browser';
import {
  MantineProvider,
  Modal,
  Button,
  Space,
  Select,
  TextInput,
  LoadingOverlay,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

import { movingSizes } from 'constants/movingSizes';
import { sendEmail, successNotification, errorNotification } from 'helpers';

type Props = {
  opened: boolean;
  onClose: () => void;
};

export const GetQuoteModal: FC<Props> = ({ opened, onClose }: Props) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const { values, onSubmit, getInputProps, reset } = useForm({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      moveDate: null,
      movingSizes: '',
      originAddress: '',
      destinationAddress: '',
    },
  });

  const handleSubmit = async (): Promise<void> => {
    setIsFetching(true);

    try {
      await sendEmail(values);
      successNotification();
    } catch (error) {
      errorNotification((error as EmailJSResponseStatus).text);
    } finally {
      setIsFetching(false);
      reset();
      onClose();
    }
  };

  return (
    <MantineProvider
      theme={{ fontFamily: 'Montserrat, sans-serif' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Modal opened={opened} onClose={onClose} title="Get a Moving Quote">
        <LoadingOverlay visible={isFetching} overlayBlur={0.5} />
        <form onSubmit={onSubmit(handleSubmit)} ref={form}>
          <TextInput
            required
            label="Full Name"
            placeholder="Full Name"
            mb="xs"
            {...getInputProps('fullName')}
          />

          <TextInput
            required
            label="Email"
            type="email"
            placeholder="Email"
            mb="xs"
            {...getInputProps('email')}
          />

          <TextInput
            required
            label="Phone Number"
            placeholder="Phone Number"
            type="number"
            inputMode="numeric"
            mb="xs"
            {...getInputProps('phoneNumber')}
          />

          <DateInput
            required
            label="Move date"
            placeholder="Pick a date"
            minDate={new Date()}
            mb="xs"
            {...getInputProps('moveDate')}
          />

          <Select
            required
            label="Moving sizes"
            placeholder="Select"
            data={movingSizes}
            mb="xs"
            {...getInputProps('movingSizes')}
          />

          <TextInput
            required
            label="Origin Address / Postal Code"
            placeholder="Origin"
            mb="xs"
            {...getInputProps('originAddress')}
          />

          <TextInput
            required
            label="Destination Address / Postal Code"
            placeholder="Destination"
            mb="xs"
            {...getInputProps('destinationAddress')}
          />

          <Space h="lg" />

          <Button type="submit">Get Estimate Now</Button>
        </form>
      </Modal>
    </MantineProvider>
  );
};
