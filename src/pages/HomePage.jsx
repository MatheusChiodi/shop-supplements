import { useState, useEffect } from 'react';

import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Categories from '../components/Categories';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SlideWallpaper from '../components/SlideWallpaper';
import Benefits from '../components/Benefits';
import Wheys from '../components/Wheys';
import Creatine from '../components/Creatine';
import Footer from '../components/Footer';
import Accessories from '../components/Accessories';

function HomePage() {
  const [visibleLoading, setVisibleLoading] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastVisit || now - parseInt(lastVisit, 10) > oneHour) {
      setVisibleLoading(true);
      localStorage.setItem('lastVisit', now);

      setTimeout(() => {
        setVisibleLoading(false);
       
      }, 1300);
    } 
  }, []);

  return (
    <div className='mx-auto max-w-[1920px]'>
      {visibleLoading && <Loading />}
      <NavBar />
      <Categories />
      <SlideWallpaper />
      <Benefits />
      <Wheys />
      <Creatine />
      <Accessories />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default HomePage;
