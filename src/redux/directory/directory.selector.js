import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

console.log(selectDirectory)

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
