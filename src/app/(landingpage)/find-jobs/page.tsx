"use client";

import ExploreDataContainers from "@/containers/ExploreDataContainers";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobType, filterOptionType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";

const FILTER_FORMS: filterOptionType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES_OPTIONS,
  },
];

const dummyData: JobType[] = [
  {
    applicants: 5,
    categories: ["Marketing", "Design"],
    desc: "lorem",
    image: "/images/company2.png",
    jobType: "Full Time",
    location: "Paris France",
    name: "Social Media Assistant",
    needs: 10,
    type: "Agency",
  },
  {
    applicants: 2,
    categories: ["Javascript", "NextJs"],
    desc: "lorem",
    image: "/images/company.png",
    jobType: "Full Time",
    location: "Paris France",
    name: "Frontend Developer",
    needs: 10,
    type: "Agency",
  },
];

export default function FindJobspage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) =>
    console.log(val);

  return (
    <ExploreDataContainers
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
      title="Dream job"
      subtitle="Find your next career at companies like HubSpot, Nike, and Dropbox"
      loading={false}
      type="job"
      data={dummyData}
    />
  );
}
