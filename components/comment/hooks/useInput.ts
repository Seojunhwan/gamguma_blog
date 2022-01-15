import React, { useState } from 'react';

export const useInput = (initialValue: string, validator?: (value: string) => boolean) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  return { value, onChange, setValue };
};
