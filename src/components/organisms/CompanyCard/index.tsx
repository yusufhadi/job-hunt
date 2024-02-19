import { Badge } from "@/components/ui/badge";
import { companyType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface CompanyCardProps extends companyType {}

const CompanyCard: FC<CompanyCardProps> = ({
  categories,
  description,
  image,
  name,
  totalJobs,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/detail/company/1")}
      className="border border-border p-6 cursor-pointer"
    >
      <div className="flex flex-row items-start justify-between">
        <Image src={image} alt={image} height={66} width={66} />
        <Badge>{totalJobs} Jobs</Badge>
      </div>
      <div className="my-4">
        <div className="text-lg font-semibold mb-2">{name}</div>
        <div className="line-clamp-3 text-sm text-muted-foreground">
          {description}
        </div>
      </div>
      <div className="space-x-2">
        <Badge variant="outline">{categories}</Badge>
      </div>
    </div>
  );
};

export default CompanyCard;
