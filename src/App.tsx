import './index.css';
import { BannerSale } from './components/BannerSale';
import { Top } from './components/Top';
import { FirstPicture } from './components/FirstPicture';

function App() {
  return (
    <>
      {/* Banner superior en flujo normal: entra y sale poco a poco según el scroll */}
      <BannerSale />

      {/* Barra de navegación sticky que se queda fija al llegar arriba */}
      <div className="sticky top-0 left-0 w-full z-40 bg-white shadow-md">
        <Top />
      </div>

      {/* Imagen principal en flujo normal, sin padding artificial */}
      <div className="relative w-full">
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
