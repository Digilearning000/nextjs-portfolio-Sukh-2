import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={cn(`container mt-24 mx-auto px-12 py-4 ${className}`)}>
      {children}
    </div>
  );
};

export default Container;
