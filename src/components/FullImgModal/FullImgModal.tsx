import { FC, Dispatch, SetStateAction } from 'react';

import { Modal, Image } from '@mantine/core';

import { images } from 'data/galleryImages';

type Props = {
  opened: boolean;
  selectedId: number;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

export const FullImgModal: FC<Props> = ({ opened, selectedId, setOpened }) => {
  const foundImg = images.find((image) => image.id === selectedId);

  return (
    <Modal
      opened={opened}
      onClose={() => {
        setOpened(false);
      }}
      withCloseButton={false}
      centered
      size="lg"
    >
      <Image withPlaceholder src={foundImg?.full} alt="movers image" />
    </Modal>
  );
};
