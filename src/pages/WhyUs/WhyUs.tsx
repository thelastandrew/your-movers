import { FC } from 'react';

import {
  Container,
  Title,
  Text,
  List,
  Anchor,
  UnstyledButton,
  createStyles,
} from '@mantine/core';

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
    color: '#1c7ed6',

    ...theme.fn.hover({
      textDecoration: 'underline',
    }),
  },
}));

type Props = {
  open: () => void;
};

export const WhyUs: FC<Props> = ({ open }) => {
  const { classes } = useStyles();

  return (
    <Container p={0}>
      <Title className={classes.title} order={3} size="h1" align="center">
        Why Us?
      </Title>

      <List className={classes.list}>
        <List.Item>Why Choose Us? Here&apos;s Why!</List.Item>
        <Text className={classes.description}>
          Your movers understand that a stress-free move is what you deserve. That&apos;s
          why we offer transparent pricing with no hidden fees or surprises along the way!
        </Text>

        <List.Item>Trained Professionals at Your Service</List.Item>
        <Text className={classes.description}>
          Our team of movers is not only trained but also dedicated to providing you with
          a pleasant moving experience. With their &quot;can do&quot; approach, they bring
          speed, efficiency, and expertise to every move and do not hesitate to take an
          extra step to make you a happy customer.
        </Text>

        <List.Item>Licensed and Insured for Peace of Mind</List.Item>
        <Text className={classes.description}>
          Rest assured, Your Movers is a licensed company registered with the state of
          California (Cal-T) and the US Department of Transportation (USDOT#). We
          prioritize your safety by carrying comprehensive liability insurance and cargo
          insurance.
        </Text>

        <List.Item>Flexible to Fit Your Schedule</List.Item>
        <Text className={classes.description}>
          We understand the importance of accommodating your unique schedule. Our team
          will go above and beyond to find the best time for your move. Give us a{' '}
          <Anchor className={classes.link} href="tel:+13236452645">
            call now
          </Anchor>
          , and let&apos;s discuss your next step!
        </Text>

        <List.Item>Quality Materials for Item Protection</List.Item>
        <Text className={classes.description}>
          Your belongings are precious, and we treat them as such. That&apos;s why we use
          only high-quality packing supplies to ensure the utmost safety and protection
          during transit.
        </Text>

        <List.Item>Prompt and Responsive</List.Item>
        <Text className={classes.description}>
          When you reach out to us, expect a prompt response and exceptional customer
          service.{' '}
          <Anchor className={classes.link} href="tel:+13236452645">
            Call us today
          </Anchor>{' '}
          to schedule your next move, or simply fill out{' '}
          <UnstyledButton onClick={open} className={classes.link}>
            our form
          </UnstyledButton>{' '}
          for a free moving quote. We&apos;re here to help!
        </Text>
      </List>
    </Container>
  );
};
