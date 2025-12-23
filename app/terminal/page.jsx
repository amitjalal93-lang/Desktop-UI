import React from "react";

const page = () => {
  return (
    <div className="font-space-mono  px-4 py-4">
      <h1>Windows PowerShell</h1>
      <h1>Copyright (C) Microsoft Corporation. All rights reserved.</h1>
      <h1>Install the latest PowerShell for new features and improvements!</h1>

      <div>
        {/* text area */}

        <textarea className="real-dark-scroll w-full h-[55vh] outline-none resize-none overflow-y-auto font-space-mono font-normal bg-transparent"></textarea>
      </div>
    </div>
  );
};

export default page;
