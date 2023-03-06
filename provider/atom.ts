import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const recoilLocalStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: recoilLocalStorage,
});

export const isUserAtom = atom({
  key: "userToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
