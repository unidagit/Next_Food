import React, { useState, useCallback, ChangeEvent } from "react";

type UseInput = [string, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput = (initialValue: string): UseInput => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

export default useInput;
