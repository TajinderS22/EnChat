"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Button = ({ text, buttonType, buttonClick }) => {
    if (buttonType === 'primary') {
        return (<button className={`bg-teal-500 w-36 text-black p-2 border border-white rounded-lg`} onClick={() => buttonClick && buttonClick()}>
      {text}
    </button>);
    }
    return (<button className={` bg-gray-400 w-36 text-black  p-2 border-1 border-white rounded-lg`} onClick={() => buttonClick && buttonClick()}>
      {text}
    </button>);
};
exports.Button = Button;
