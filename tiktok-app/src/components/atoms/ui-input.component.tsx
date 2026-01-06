import React, { useState } from "react";
import Form from "react-bootstrap/Form";

interface InputProps extends Omit<React.ComponentPropsWithoutRef<"input">, 'size' | 'value' >{
  label: string;
  error?: string;
  name: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  size?: 'sm' | 'lg';
  value?: string | number;
}

const UIInput: React.FC<InputProps> = ({ label, error, name, isInvalid, isDisabled, ...props }) => {
    return (
        <Form.Group className="mb-3" controlId={name}>
            {label && <Form.Label>{label}</Form.Label>}

            <Form.Control
                name={name}
                isInvalid={isInvalid}
                disabled={isDisabled}
                {...props}
            />

            {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
        </Form.Group>
    );
}

export default UIInput;