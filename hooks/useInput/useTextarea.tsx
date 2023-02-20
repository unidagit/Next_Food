import React, { useState, useCallback, ChangeEvent } from "react";

type UseInput = [string, (e: ChangeEvent<HTMLTextAreaElement>) => void];

const useTextarea = (initialValue: string): UseInput => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    // e.preventDefault();
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

export default useTextarea;
