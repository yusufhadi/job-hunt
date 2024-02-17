"use client";

import { Form } from "@/components/ui/form";
import { filterOptionType } from "@/types";
import { FC } from "react";
import CheckboxForms from "./CheckboxForms";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void> | undefined;
  filterForms: filterOptionType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  filterForms,
  formFilter,
  onSubmitFilter,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        {filterForms.map((item: filterOptionType, i: number) => (
          <CheckboxForms
            key={i}
            formFilter={formFilter}
            items={item.items}
            label={item.label}
            name={item.name}
          />
        ))}

        <Button className="mt-5 w-full">Apply Filter</Button>
        <Button variant="outline" className="mt-3 w-full">
          Reset Filter
        </Button>
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
