"use client";

import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainers from "@/containers/ExploreDataContainers";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { filterOptionType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FindCompaniesProps {}

const FILTER_FORMS: filterOptionType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

const FindCompanies: FC<FindCompaniesProps> = ({}) => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) => {
    console.log(val);
  };

  return (
    <ExploreDataContainers
      formFilter={formFilter}
      onSubmitFilter={onSubmit}
      filterForms={FILTER_FORMS}
      title="dream companies"
      subtitle="Find the dream companies you dream work for"
      loading={false}
      type="company"
      data={[]}
    />
  );
};

export default FindCompanies;
