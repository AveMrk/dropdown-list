import DropdownList from "./dropdownList";
import { useState } from "react";
export default function Dropdown() {
  const [showList, setShow] = useState(false);

  return (
    <div class='dropdown-section'>
      <button
        onClick={() => {
          setShow(!showList);
        }}
      >
        Account settings
      </button>
      {showList === true && <DropdownList />}
    </div>
  );
}