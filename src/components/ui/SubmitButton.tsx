"use client";

import React from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";
import "./SubmitButton.css";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const SubmitButton = ({ children, className }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button className={`${className}`} disabled={pending} type="submit">
      {pending && (
        <svg viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      )}

      {children}
    </Button>
  );
};

export default SubmitButton;
