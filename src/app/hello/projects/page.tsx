"use client"

import CustomBreadcrumb from '@/app/comps/breadCrumb';
import ProjectCard from '@/app/comps/projectCard';
import React, { useEffect, useState } from 'react'


export default function Page() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/assets/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  return (
    <div className='container p-4'>
      <div className='pl-10 opacity-70 font-mono'>
        <CustomBreadcrumb pageNames={[{ name: "Home", href: "/" }, { name: "Projects", href: "/hello/projects" }]} />
      </div>
      <div className='pt-5 pl-5'>
        <h1 className='text-[40px] font-bold'>Projects Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 pl-4 pr-4">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}
