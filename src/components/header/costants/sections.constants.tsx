import React from "react";
import { Section } from "../../../models/models";

export const sections: Section[] = [
  new Section("profile", React.createRef()),
  new Section("workExperience", React.createRef()),
];
