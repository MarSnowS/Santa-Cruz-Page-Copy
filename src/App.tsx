import { useState, useEffect } from 'react';
import './index.css';
import { BannerSale } from './components/BannerSale';
import { Top } from './components/Top';
import { FirstPicture } from './components/FirstPicture';

function App() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el banner solo si el usuario está en la parte superior de la página
      setShowBanner(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mostrar el BannerSale solo si el usuario está en la parte superior */}
      {showBanner && (
        <div className="fixed top-0 left-0 w-full z-50 bg-black text-white">
          <BannerSale />
        </div>
      )}

      {/* Barra de navegación fija */}
      <div
        className={`fixed ${
          showBanner ? 'top-[40px]' : 'top-0'
        } left-0 w-full z-40 bg-white shadow-md transition-all duration-300`}
      >
        <Top />
      </div>

      {/* Imagen principal con padding superior */}
      <div className="relative w-full pt-[170px]">
        <FirstPicture />
        {/* Botón centrado sobre la imagen */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 border border-black font-bold cursor-pointer hover:bg-gray-100">
          <a href="#">BROWSE DECKS</a>
        </div>
      </div>
    </>
  );
}

export default App;
