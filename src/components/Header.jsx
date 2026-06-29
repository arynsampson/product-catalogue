import { Store } from 'lucide-react';

export default function Header({ favouritesLength, showFavorites, setShowFavorites }) {
  return (
    <>
      <header>
        <div>
          <Store color="#2563eb" />
          <h1>Product Catalogue</h1>
        </div>
        <div>
          <button className={showFavorites ? 'active' : ''} onClick={() => setShowFavorites()}>
            Favourites
          </button>
          <span>{favouritesLength}</span>
        </div>
      </header>
    </>
  );
}
