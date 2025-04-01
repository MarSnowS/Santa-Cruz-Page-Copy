import '../index.css';
import mobileImage from '../assets/santa-cruz-skateboards-browse-decks_mobile_1730152057.jpg';

export function FirstPicture() {
    return (
        <div className="w-full h-full">
            <picture>
                <source media="(max-width: 991px)" srcSet={mobileImage} />
                <img src={mobileImage} alt="Santa Cruz Skateboards" className="w-full h-full object-cover" />
            </picture>
        </div>
    );
}