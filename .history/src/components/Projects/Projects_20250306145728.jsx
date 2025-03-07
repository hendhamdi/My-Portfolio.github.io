import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>

      {/* Développement */}
      <h3 className={styles.subTitle}>Development</h3>
      <div className={styles.projects}>
        {projects.devProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      {/* Design */}
      <h3 className={styles.subTitle}>Design</h3>
      <div className={styles.projects}>
        {projects.designProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
