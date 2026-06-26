import { Store } from 'lucide-react';

export default function Header({ favouritesLength }) {
  return (
    <>
      <header>
        <div>
          <Store color="#2563eb" />
          <h1>Product Catalogue</h1>
        </div>
        <div>
          <p>Favourites</p>
          <span>{favouritesLength}</span>
        </div>
      </header>
    </>
  );
}
