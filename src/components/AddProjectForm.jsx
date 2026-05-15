import React, { useState } from "react";

function AddProjectForm({ setProjects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    setProjects((prev) => [newProject, ...prev]);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProjectForm;