import React, { memo } from "react";

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[url('/pattern-bg.png')] bg-cover bg-center -z-50"></div>
  );
};

export default memo(Background);
