import empdata_json from "./data/employeedata.json";

function empdata(state = empdata_json, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default empdata;
