
import cv from "../data/cv";

export const formationsTriees = [...cv.formations].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));
export const experiencesTriees = [...cv.experiences].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));