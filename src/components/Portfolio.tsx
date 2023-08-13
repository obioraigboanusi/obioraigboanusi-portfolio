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
        <div className="flex flex-col justify-between items-center">
          <header className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
            <p className="text-slate-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              reiciendis aperiam.
            </p>
          </header>
          <ul className="flex gap-3 mb-6">
            {categories.map((name: string) => (
              <li key={name}>
                <button onClick={() => setActiveCategory(name)}>{name}</button>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .slice(0)
            .map(({ title, description, bannerUrl, url }, i) => (
              <li key={title + i}>
                <ProjectItem {...{ title, description, bannerUrl, url }} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
