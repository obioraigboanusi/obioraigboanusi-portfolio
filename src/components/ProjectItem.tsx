const ProjectItem = ({
  bannerUrl,
  title,
  description,
  url,
  odd,
}: {
  bannerUrl: string;
  title: string;
  description: string;
  url?: string;
  odd?: boolean;
}) => {
  console.log({ odd });
  return (
    <div className="group relative min-h-[300px] shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 hover:bg-[#1A1A1A]">
      <div className={[odd ? 'order-1' : 'order-2'].join(' ')}>
        <img src={bannerUrl} alt={title} className="object-cover lg:h-full" />
      </div>
      <div
        className={[
          'p-2 md:p-4 md:h-full flex flex-col justify-center space-y-2 !pl-0',
          odd ? 'order-2 ' : 'order-1 ',
        ].join(' ')}
      >
        <h3 className="text-lg md:text-2xl font-semibold mb-1">{title}</h3>
        <p className="text-[#C7C7C7] md:text-lg">{description}</p>
        <ul className="">
          <li className="py-1 border-b">Year: 2024</li>
          <li className="py-1 border-b">Role: Frontend Developer</li>
          <li className="py-1 border-b">Top tools: React, TypeScript, Redux</li>
        </ul>
        <div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold my-1  px-2 py-1.5 inline-block"
          >
            View Live
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold my-1  px-2 py-1.5 inline-block"
          >
            See on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
