import { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
//   background-color: #4caf50;
//   color: white;
//   padding: 12px;
  font-size: 16px;
  background: none;
  color: #19013b;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
//   background-color: #f1f1f1;
//   min-width: 160px;
  z-index: 1;
`;

const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const Dropdown = ({ options, currency }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>English</DropdownButton>
      <DropdownContent open={isOpen}>
        {options.map((option) => (
          <DropdownLink key={option.value} onClick={toggleDropdown}>
            {option.label}
          </DropdownLink>
        ))}
      </DropdownContent>
    </DropdownContainer>

    // for currency
    // <DropdownContainer>
    //   <DropdownButton onClick={toggleDropdown}>English</DropdownButton>
    //   <DropdownContent open={isOpen}>
    //     {currency.map((money) => (
    //       <DropdownLink key={money.value} onClick={toggleDropdown}>
    //         {money.label}
    //       </DropdownLink>
    //     ))}
    //   </DropdownContent>
    // </DropdownContainer>
  );
};

export default Dropdown;
