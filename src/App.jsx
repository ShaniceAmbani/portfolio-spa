import { useState } from "react";
import initialProjects from "./data/initialProjects";

import SearchBar from "./components/SearchBar";
import AddProjectForm from "./components/AddProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Portfolio Platform</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <AddProjectForm setProjects={setProjects} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;