import { createSelector } from "reselect";

const selectExersice = state => state.exersic 

export const currentexersice = createSelector(
    [selectExersice],
    (exersic) => exersic.current_exersice
)

export const selectExersiceItem =createSelector (
    [currentexersice],
    (item) => item
)