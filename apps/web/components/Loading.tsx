import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-24 h-24 border-b-2 border-l-2 rounded-full border-amber-200 animate-spin"></div>
    </div>
  );
};

export default Loading;
