import { FC } from 'react';

import {
  createStyles,
  Header,
  Group,
  Text,
  Flex,
  Divider,
  Container,
  Burger,
  Drawer,
  ScrollArea,
  Title,
  Stack,
  Anchor,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';

import { navLinks } from 'constants/navLinks';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: '4rem',
    lineHeight: '3.5rem',

    [theme.fn.smallerThan('xs')]: {
      fontSize: '3.5rem',
    },
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: '1.8rem',

    ...theme.fn.hover({
      textDecoration: 'underline',
    }),
  },

  active: {
    textDecoration: 'underline',
  },

  hiddenMobile: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'end',
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    ...theme.fn.fontStyles(),
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  anchorTel: {
    textDecoration: 'none',
    color: 'inherit',

    ...theme.fn.hover({
      textDecoration: 'none',
    }),
  },

  header: {
    paddingTop: '50px',
    [theme.fn.smallerThan('xs')]: {
      paddingTop: '20px',
    },
  },
}));

export const HeaderMenu: FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = navLinks.map((link) => (
    <NavLink
      key={link.name}
      to={link.path}
      className={({ isActive }) =>
        isActive ? `${classes.link} ${classes.active}` : classes.link
      }
      onClick={closeDrawer}
    >
      {link.name}
    </NavLink>
  ));

  return (
    <Container p={0} w="100%">
      <Header height="100%" className={classes.header}>
        <Group position="apart" align="start" sx={{ height: '100%' }}>
          <Stack spacing={10}>
            <Title order={1} weight={400}>
              <Text className={classes.title}>Your</Text>
              <Text className={classes.title}>Movers.us</Text>
            </Title>
            <Text size="1.5rem">
              <Anchor className={classes.anchorTel} href="tel:+13236452645">
                Call us: (323) 645-2645
              </Anchor>
            </Text>
          </Stack>

          <Flex className={classes.hiddenMobile}>{links}</Flex>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Your Movers"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea>
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
          {links}
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
        </ScrollArea>
      </Drawer>
    </Container>
  );
};
