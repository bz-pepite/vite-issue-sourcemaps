import React from "react";

export type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  const onClick = () => {
    alert(`text value : ${text}`);
  };
  return (
    <button type="button" onClick={() => onClick()}>
      click here
    </button>
  );
};
