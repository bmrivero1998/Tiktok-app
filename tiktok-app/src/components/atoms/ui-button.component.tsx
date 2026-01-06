import { useState } from "react";
import Button from "react-bootstrap/Button";

interface UIButtonProps {
  label: string;
  variant?: string;
  onClick: () => void;
}

const UIButton: React.FC<UIButtonProps> = ({ label, variant = "primary", onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
}


export default UIButton;