import { fetchRegions, fetchCategories } from "./sevices/api";

export function setRegions(regions) {
  return {
    type: "setRegions",
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: "setCategories",
    payload: { categories },
  };
}

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function selectRegion(regionId) {
  return {
    type: "selectRegion",
    payload: { regionId },
  };
}
