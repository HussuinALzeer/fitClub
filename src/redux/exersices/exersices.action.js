import { ExercisActionType } from "./exersices.type"

export const setCurrentExercis = exercis => ({
    type:ExercisActionType.SET_CURRENT_EXERCIS,
    payload:exercis
})
 