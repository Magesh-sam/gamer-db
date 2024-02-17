'use client'
import { ArrowUpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

function BackToTop() {
  const [isScreenGT30, setIsScreenGT30] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScreenGT30(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsScreenGT30(false);
  };

  return isScreenGT30 && (
    <button
      aria-label='Back to top'
      className='fixed bottom-5 right-5 z-50 bg-primary p-1 rounded-md hover:bg-primary/90'
      onClick={handleScroll}
    >
      <ArrowUpCircle className='text-black' />
    </button>
  );
}

export default BackToTop;
