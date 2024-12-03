import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsMasonry from "@components/ProjectsMasonry";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

const Projects = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Últimos<br>  <span className=\"mil-thin\">Proyectos</span>"} breadTitle={"Portfolio"} anchorLabel={"Nuestro Trabajo"} anchorLink={"#portfolio"} />

      <ProjectsMasonry projects={props.projects} />
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Projects;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}