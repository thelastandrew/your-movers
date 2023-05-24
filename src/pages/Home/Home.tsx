import { FC } from 'react';

import { Button, BackgroundImage, createStyles } from '@mantine/core';

import movers from 'assets/png/movers.png';

const useStyles = createStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundPositionX: 'right',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    padding: '2rem 0',
  },

  button: {
    position: 'absolute',
    left: 0,
    bottom: '2rem',
    border: 'none',
    color: 'black',
    padding: '5px 5px 5px 0',
    borderRadius: '5px',
    fontSize: '4rem',
    fontWeight: 400,
    height: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    transition: '0.3s',

    ...theme.fn.hover({
      backgroundColor: '#fff',
      textDecoration: 'underline',
    }),

    [theme.fn.smallerThan('xs')]: {
      fontSize: '2.5rem',
      left: 0,
    },
  },
}));

type Props = {
  open: () => void;
};

export const Home: FC<Props> = ({ open }) => {
  const { classes } = useStyles();

  return (
    <BackgroundImage className={classes.content} src={movers} pos="relative">
      <Button variant="subtle" className={classes.button} onClick={open}>
        Get a Moving Quote
      </Button>
    </BackgroundImage>
  );
};
