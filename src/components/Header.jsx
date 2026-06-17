export default function Header({ setToggleViews }) {
  return (
    <>
      <header>
        <h1 onClick={setToggleViews}>ProductCatalogue</h1>
        <button onClick={setToggleViews}>Favourites</button>
      </header>
    </>
  );
}
