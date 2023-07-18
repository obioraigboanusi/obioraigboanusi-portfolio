
const ProjectItem = ({
  bannerUrl,
  title,
  description,
  url,
}: {
  bannerUrl: string;
  title: string;
  description: string;
  url?: string;
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
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold my-1 text-xs"
        >
          View Live
        </a>
      </div>
    </div>
  );
};

export default ProjectItem