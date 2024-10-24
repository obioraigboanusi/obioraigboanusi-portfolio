import { useState, useEffect } from 'react';
import { projects } from '../utils';
import ProjectItem from './ProjectItem';

function Portfolio() {
  const [filteredProjects, setFilteredProjects] = useState<
    {
      bannerUrl: string;
      title: string;
      description: string;
      url?: string;
    }[]
  >(projects);
  const [activeCategory, setActiveCategory] = useState('All');

  const projectCategories = projects.reduce<string[]>(
    (previousValue: string[], curr) => {
      return [...previousValue, ...curr.categories];
    },
    [],
  );

  const categories = ['All', ...new Set(projectCategories)];

  useEffect(() => {
    if (activeCategory !== 'All') {
      const filtered = projects.filter(project =>
        project.categories.includes(activeCategory),
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  }, [activeCategory]);

  return (
    <section>
      <div className="container">
        <div className="flex flex-col justify-between ">
          <header className="mb-8">
            <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
            <p className="">
              Discover a selection of my recent projects, demonstrating my
              skills, experience, and key contributions to various teams and
              initiatives.
            </p>
          </header>
          <ul className="flex gap-3 mb-6 justify-end">
            {categories.map((name: string) => (
              <li key={name}>
                <button onClick={() => setActiveCategory(name)}>{name}</button>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:gap-20">
          {filteredProjects
            .slice(0, 3)
            .map(({ title, description, bannerUrl, url }, i) => (
              <li key={title + i}>
                <ProjectItem
                  {...{ title, description, bannerUrl, url }}
                  odd={(i + 1) % 2 !== 0}
                />
              </li>
            ))}
        </ul>
        <div className="text-center mt-10">
          <button className="btn btn-primary">See more</button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
