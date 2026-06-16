export default function FilterDropdown({ brands }) {
  return (
    <>
      <select name="cars" id="cars" required>
        <option defaultValue="" disabled selected>
          Category filter
        </option>
        {/* <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option> */}
      </select>
    </>
  );
}
