const getUserToken = () => {
  const userToken =
    typeof window !== "undefined" ? localStorage.getItem("token_") : null;
  return userToken || "";
};

export default getUserToken;
