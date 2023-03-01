const getUserAccountname = () => {
  const userAccountname =
    typeof window !== "undefined" ? localStorage.getItem("accountname") : null;
  return userAccountname;
};

export default getUserAccountname;
