"use client";

import React, { useEffect, useState } from "react";

const Project = ({ params }: { params: any }) => {
  const [param, setParam] = useState();
  useEffect(() => {
    setParam(params.project);
  }, [params]);

  return (
    <div className="h-full w-screen min-h-screen px-container pt-12 flex flex-col items-center gap-4">
      
    </div>
  );
};

export default Project;


