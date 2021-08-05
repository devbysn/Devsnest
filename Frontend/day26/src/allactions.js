export function addNewEmp(payload) {
  const action = {
    type: "ADD_NEW_EMP",
    payload,
  };
  return action;
}
