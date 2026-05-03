import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "../components/ProjectCard";

test("renders project title", () => {
  const project = {
    title: "Demo Project",
    description: "Test description",
  };

  render(<ProjectCard project={project} />);

  expect(screen.getByText("Demo Project")).toBeInTheDocument();
});