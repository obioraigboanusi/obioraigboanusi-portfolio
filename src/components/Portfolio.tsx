import { useState, useEffect } from 'react';
import { projects } from '../utils';

function Portfolio() {
  const [filteredProjects, setFilteredProjects] = useState<
    {
      bannerUrl: string;
      title: string;
      description: string;
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
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <ul className="flex gap-3">
            {categories.map((name: string) => (
              <li key={name}>
                <button onClick={() => setActiveCategory(name)}>{name}</button>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(({ title, description, bannerUrl }, i) => (
            <li key={title + i}>
              <ProjectItem {...{ title, description, bannerUrl }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const ProjectItem = ({
  bannerUrl,
  title,
  description,
}: {
  bannerUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={'group relative overflow-hidden min-h-[300px]'}>
      <img
        src={bannerUrl}
        alt={title}
        className="absolute object-cover h-full hover:scale-110 transition-all duration-500"
      />
      <div className="absolute bottom-[-100%] group-hover:bottom-0 transition-all duration-500 bg-[#fff] w-full p-2 ">
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <p className="text-sm text-slate-700">{description}</p>
        <button className="font-semibold my-1 text-sm">Order Now</button>
      </div>
    </div>
  );
};
export default Portfolio;
