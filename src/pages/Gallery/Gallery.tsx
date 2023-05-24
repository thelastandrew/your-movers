import { FC, useState } from 'react';

import { Flex, UnstyledButton, Image, createStyles } from '@mantine/core';

import { FullImgModal } from 'components';
import { images } from 'data/galleryImages';

const useStyles = createStyles((theme) => ({
  preview: {
    transition: '0.3s',
    ...theme.fn.hover({
      boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.3)',
    }),
  },
}));

export const Gallery: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const { classes } = useStyles();

  const handleOnClick = (slideIndex: number): void => {
    setSelectedId(slideIndex);
    setOpened(true);
  };

  const previews = images.map((image) => (
    <UnstyledButton
      key={image.id}
      className={classes.preview}
      onClick={() => handleOnClick(image.id)}
    >
      <Image
        sx={{ height: '100%', width: 'auto' }}
        src={image.preview}
        alt="movers-preview"
        withPlaceholder
      />
    </UnstyledButton>
  ));

  return (
    <>
      <FullImgModal opened={opened} setOpened={setOpened} selectedId={selectedId} />
      <Flex direction="row" justify="center" align="center" gap="sm" wrap="wrap" py="sm">
        {previews}
      </Flex>
    </>
  );
};
