import { FC } from 'react';

import { Container, Title, Text, List, Anchor, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    ...theme.fn.fontStyles(),
    fontWeight: 400,
  },

  list: {
    padding: '0.4rem 0.4rem 0.4rem 0',
    borderRadius: '0.4rem',
    fontSize: '1.1rem',
    fontFamily: 'Montserrat, sans-serif',
    maxWidth: '50%',
    margin: '0 auto',

    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%',
      backgroundColor: '#ffffffb3',
    },

    '& li': {
      fontWeight: 800,
    },
  },

  description: {
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: '2rem',
  },

  link: {
    fontFamily: 'Montserrat, sans-serif',
  },
}));

export const Services: FC = () => {
  const { classes } = useStyles();

  return (
    <Container p={0}>
      <Title className={classes.title} order={3} size="h1" align="center">
        Services
      </Title>

      <List className={classes.list}>
        <List.Item>Comprehensive Moving Solutions</List.Item>
        <Text className={classes.description}>
          At Your Movers, we provide a wide range of moving services to cater to your
          specific needs. Whether you&apos;re relocating your home or office, we&apos;ve
          got you covered. Our team is equipped to handle every aspect of your move,
          ensuring a seamless transition to your new destination.
        </Text>

        <List.Item>Residential Moving</List.Item>
        <Text className={classes.description}>
          Moving to a new home? Our residential moving services are designed to make your
          move efficient and stress-free. From packing and loading to transportation and
          unloading, our dedicated team will take care of every detail, ensuring the safe
          and timely delivery of your belongings.
        </Text>

        <List.Item>Commercial Moving</List.Item>
        <Text className={classes.description}>
          Relocating your business? Our commercial moving services are tailored to meet
          the unique requirements of your company. Our experienced movers will handle the
          logistics, allowing you to focus on your business operations.
        </Text>

        <List.Item>Packing and Unpacking</List.Item>
        <Text className={classes.description}>
          Don&apos;t have the time or energy to pack? Let us take care of it for you. Our
          packing and unpacking services ensure that your items are packed securely and
          efficiently. We use high-quality packing materials to protect your belongings
          during transit, and our skilled team will handle the unpacking process at your
          new location.
        </Text>

        <List.Item>Specialty Moves</List.Item>
        <Text className={classes.description}>
          Have unique items that require special handling? Our team has experience in
          handling specialty moves, including fragile items, valuable artwork, plants, and
          more. We employ the necessary techniques and equipment to ensure the utmost care
          and protection of your possessions. No matter the size or complexity of your
          move, Your Movers are here to provide you with reliable and professional moving
          services.{' '}
          <Anchor className={classes.link} href="tel:+13236452645">
            Contact us
          </Anchor>{' '}
          today to discuss your next move!
        </Text>
      </List>
    </Container>
  );
};
