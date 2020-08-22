import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRegion, loadRestaurants } from "./action";

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));
  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button type="button" onClick={() => handleClick(region.id)}>
            {region.name}
            {selectedRegion && region.id === selectedRegion.id ? "V" : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
