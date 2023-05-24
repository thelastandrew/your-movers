import { FC } from 'react';

import { createStyles, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { Routes, Route } from 'react-router-dom';

import { HeaderMenu, Footer, GetQuoteModal } from 'components';
import { Paths } from 'constants/paths';
import { Home, About, Services, WhyUs, Gallery } from 'pages';

const useStyles = createStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    minHeight: '100vh',
  },
}));

const App: FC = () => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container className={classes.wrapper}>
      <Notifications autoClose={5000} position="top-center" />
      <GetQuoteModal opened={opened} onClose={close} />
      <HeaderMenu />
      <Routes>
        <Route path={Paths.Home} element={<Home open={open} />} />
        <Route path={Paths.About} element={<About />} />
        <Route path={Paths.Services} element={<Services />} />
        <Route path={Paths.WhyUs} element={<WhyUs open={open} />} />
        <Route path={Paths.Gallery} element={<Gallery />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
