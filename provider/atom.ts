import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

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
