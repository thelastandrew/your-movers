import { FC, FunctionComponent, SVGProps } from 'react';

import { createStyles, Container, Group, Text, Stack, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

import { ReactComponent as LocationIcon } from 'assets/svg/location.svg';
import { ReactComponent as MailIcon } from 'assets/svg/mail.svg';
import { ReactComponent as PhoneIcon } from 'assets/svg/phone.svg';
import { navLinks } from 'constants/navLinks';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    width: '100%',

    [theme.fn.smallerThan('xs')]: {
      alignItems: 'end',
    },
  },

  links: {
    ...theme.fn.fontStyles(),
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    textDecoration: 'none',

    ...theme.fn.hover({
      textDecoration: 'underline',
    }),
  },

  icon: {
    width: '1rem',
  },
}));

interface IContact {
  id: number;
  image: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
  value: string;
  href: string;
  targetBlank?: boolean;
}

const contacts: IContact[] = [
  {
    id: 1,
    image: LocationIcon,
    value: '16710 Ventura blvd, Suite 401, Encino, CA, USA',
    href: 'https://goo.gl/maps/uStWUKzay33sEMDj7',
    targetBlank: true,
  },
  {
    id: 2,
    image: PhoneIcon,
    value: '(323) 645-2645',
    href: 'tel:+13236452645',
  },
  {
    id: 3,
    image: MailIcon,
    value: 'help@yourmovers.us',
    href: 'mailto:help@yourmovers.us',
  },
];

export const Footer: FC = () => {
  const { classes } = useStyles();

  const contactsItems = contacts.map((contact) => (
    <Group key={contact.id} spacing="xs">
      <contact.image className={classes.icon} />
      <Anchor
        size="md"
        href={contact.href}
        className={classes.link}
        target={contact.targetBlank ? '_blank' : '_self'}
      >
        {contact.value}
      </Anchor>
    </Group>
  ));

  const links = navLinks.map((link) => (
    <Link key={link.name} to={link.path} className={classes.link}>
      {link.name}
    </Link>
  ));

  return (
    <Container className={classes.inner}>
      <Stack spacing="0.1rem">
        <Text size="2rem">Your Movers</Text>
        {contactsItems}
      </Stack>
      <Group className={classes.links}>{links}</Group>
    </Container>
  );
};
