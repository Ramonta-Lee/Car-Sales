// export const ADD_FEATURE = "ADD_FEATURE";
export const buyItem = feature => {
  return { type: "ADD_FEATURE", payload: feature };
};

// export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = id => {
  return {
    type: "REMOVE_FEATURE",
    payload: id
  };
};
