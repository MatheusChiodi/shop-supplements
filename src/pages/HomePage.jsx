import { useState, useEffect } from 'react';

import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Categories from '../components/Categories';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SlideWallpaper from '../components/SlideWallpaper';

function HomePage() {
  const [visibleLoading, setVisibleLoading] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);
  const [visibleFooter, setVisibleFooter] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastVisit || now - parseInt(lastVisit, 10) > oneHour) {
      setVisibleLoading(true);
      localStorage.setItem('lastVisit', now);

      setTimeout(() => {
        setVisibleLoading(false);
        setVisibleContent(true);
      }, 1300);
    } else {
      setVisibleContent(true);
    }

    setTimeout(() => setVisibleFooter(true), 5000);
  }, []);

  return (
    <>
      {visibleLoading && <Loading />}

      <NavBar />
      <Categories />
      <SlideWallpaper />

      <ScrollToTopButton />
    </>
  );
}

export default HomePage;
