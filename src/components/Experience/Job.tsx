import Skills from "./Skills";

interface Props {
  role: string;
  company: string;
  description: string;
  additionalDescription: Array<string> | undefined;
  dateRange: string;
  skills: Array<string>;
}

function Job({
  role,
  description,
  additionalDescription,
  dateRange,
  skills,
  company,
}: Props) {
  return (
    <div className="flex flex-row mb-10 opacity-0 animate-fade-in">
      <div className="mr-5 mt-1">
        <p className="text-md text-text-muted text-nowrap">{dateRange}</p>
      </div>
      <div>
        <p className="text-2xl font-medium">{role}</p>
        <p className="text-xl mb-3">{company}</p>
        <div className="mb-3 -m-2 p-2">
          <p className="text-md text-text-muted mb-2">{description}</p>
          <div>
            {additionalDescription &&
              additionalDescription.map((desc, index) => (
                <div key={index} className="flex">
                  <p className="mr-1">•</p>
                  <p className="text-md text-text-muted mb-1">{desc}</p>
                </div>
              ))}
          </div>
        </div>
        <Skills skills={skills} />
      </div>
    </div>
  );
}

export default Job;
