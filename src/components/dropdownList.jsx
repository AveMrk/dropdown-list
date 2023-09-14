import { useState } from "react";
export default function DropdownList() {
  const [activeItem, setState] = useState("Profile Info");
  const list = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log out"
  ];
  return (
    <div class='list'>
    <ul>
      <li class='polygon'>Пустой тег</li>
      {list.map((item) => (
        <li 
          onClick={() => {
            setState(item);
          }}
          className={activeItem === item ? 'active-item' : 'item'}
        >
          {item}
        </li>
      ))}
    </ul>
    </div>
  );
}