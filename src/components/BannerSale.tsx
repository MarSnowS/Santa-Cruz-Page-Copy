import '../index.css'

export function BannerSale() {
    return (
        <div className="banner-sale flex items-center justify-center bg-black text-white text-xs py-2.5 px-4">
            <a className="font-bold tracking-wider" href="#">
                FREE SHIPPING ON ORDERS OVER $50 & 75-DAY RETURNS
            </a>
        </div>
    );
}