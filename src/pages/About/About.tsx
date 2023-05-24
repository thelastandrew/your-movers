import { FC } from 'react';

import { Container, Text, Title, Space, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    ...theme.fn.fontStyles(),
    fontWeight: 400,
  },

  content: {
    padding: '0.4rem 0.4rem 0.4rem 0',
    borderRadius: '0.4rem',
    fontSize: '1.2rem',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'justify',
    maxWidth: '50%',
    margin: '0 auto',

    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%',
      backgroundColor: '#ffffffb3',
    },
  },
}));

export const About: FC = () => {
  const { classes } = useStyles();

  return (
    <Container p={0}>
      <Title className={classes.title} order={3} size="h1" align="center">
        About us
      </Title>
      <Space h="md" />
      <Title className={classes.title} order={4} size="h2" align="center">
        A Dedicated Team of Friendly Professionals
      </Title>
      <Text className={classes.content}>
        At Your Movers, we take pride in being a dedicated team of passionate
        professionals committed to assisting our valued customers in their moving needs.
        Our ultimate objective is to ensure a seamless and stress-free moving experience
        for you, your family, and your business. We are available round-the-clock, 365
        days a year, ready to deliver timely and cost-effective moves tailored to your
        specific needs.
      </Text>
    </Container>
  );
};
