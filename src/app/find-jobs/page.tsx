"use client";

import ExploreDataContainers from "@/containers/ExploreDataContainers";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterOptionType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";

const FILTER_FORMS: filterOptionType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES_OPTIONS,
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
    />
  );
}
