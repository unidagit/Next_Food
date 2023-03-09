// "use client";
// import { useEffect, useState } from "react";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// const recoilLocalstorage = () => {
//   const [isLocal, setIsLocal] = useState<Storage>();
//   useEffect(() => {
//     setIsLocal(window.localStorage);
//   }, []);

//   if (!isLocal) {
//     return null
//   }
//   return isLocal;
// };

const recoilLocalStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: recoilLocalStorage,
});

export const isUserTokenAtom = atom({
  key: "userToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const isUserAccountAtom = atom({
  key: "userAccount",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
