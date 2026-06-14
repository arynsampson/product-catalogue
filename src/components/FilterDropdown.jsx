export default function FilterDropdown() {
  return (
    <>
      <select name="cars" id="cars" required>
        <option value="" disabled selected>
          Category filter
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
}
