import { useState } from "react";
import Button from "react-bootstrap/Button";

interface UIButtonProps {
  label: string;
  variant?: string;
  isDisabled?: boolean;
  onClick: () => void;
}

const UIButton: React.FC<UIButtonProps> = ({ label, variant = "primary", isDisabled, onClick }) => {
  return (
    <Button 
      variant={variant} 
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </Button>
  );
}


export default UIButton;