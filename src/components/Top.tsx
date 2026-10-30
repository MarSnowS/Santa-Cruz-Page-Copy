import '../index.css';
import logo from '../assets/logo/santa-cruz-skateboards.png';
import { useState } from 'react';

export function Top() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMenuClick = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu); // Toggle the menu
    };

    return (
        <header className='py-4 px-8 flex w-full items-center bg-white'>
            <div className='flex items-center w-full'>
                <img src={logo} alt="Logo de santa cruz" className='h-24 w-24' />
                <nav className='flex items-center gap-6 ml-4'>
                    {/* SKATE */}
                    <div className='relative'>
                        <button
                            className='bg-white cursor-pointer'
                            onClick={() => handleMenuClick('skate')}
                        >
                            SKATE
                        </button>
                        {openMenu === 'skate' && (
                            <div className='absolute top-full left-0 bg-white shadow-lg py-2 min-w-[150px]'>
                                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>BOARDS</div>
                                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>WHEELS</div>
                                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>TRUCKS</div>
                            </div>
                        )}
                    </div>

                    {/* APPAREL */}
                    <div className='relative'>
                        <button
                            className='bg-white cursor-pointer'
                            onClick={() => handleMenuClick('apparel')}
                        >
                            APPAREL
                        </button>
                        {openMenu === 'apparel' && (
                            <div className='absolute top-full left-0 bg-white shadow-lg py-2 min-w-[150px]'>
                                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>MENS</div>
                                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>WOMENS</div>
                                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>KIDS & BABIES</div>
                                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>ACCESSORIES</div>
                            </div>
                        )}
                    </div>

                    {/* COLLECTIONS */}
                    <div className='relative'>
                        <button
                            className='bg-white cursor-pointer'
                            onClick={() => handleMenuClick('collections')}
                        >
                            COLLECTIONS
                        </button>
                        {openMenu === 'collections' && (
                            <div className='absolute top-full left-0 bg-white shadow-lg py-2 min-w-[150px]'>
                                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>NEW ARRIVALS</div>
                                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>LIMITED EDITION</div>
                            </div>
                        )}
                    </div>

                    {/* Static Links */}
                    <ul className='flex gap-6'>
                        <li className='cursor-pointer'>SHOP</li>
                        <li className='cursor-pointer'>DEALERS</li>
                        <li className='cursor-pointer'>TEAM</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}