export type JobType = {
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  desc: string;
  categories: string[];
  needs: number;
  applicants: number;
};

export type optionType = {
  id: string;
  label: string;
};

export type filterOptionType = {
  label: string;
  name: string;
  items: optionType[];
};

export type companyType = {
  image: string;
  totalJobs: number;
  name: string;
  description: string;
  categories: string;
};
