"use client";

interface ButtonProps {
  text: string;
  buttonType: "primary" | "secondary";
  buttonClick?: () => void;
}


export const Button = ({ text, buttonType, buttonClick }: ButtonProps) => {
  if(buttonType==='primary'){
    return (
    <button
      className={`bg-teal-500 text-white p-2 border border-white rounded-lg`}
      onClick={() => buttonClick && buttonClick()}
    >
      {text}
    </button>
  );
  }
  return (
    <button
      className={` bg-gray-400 text-white p-2 border-1 border-white rounded-lg`}
      onClick={() => buttonClick && buttonClick()}
    >
      {text}
    </button>
  ); 
};
