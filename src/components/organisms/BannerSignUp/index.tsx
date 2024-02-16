import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";

interface BannerSignUpProps {}

const BannerSignUp: FC<BannerSignUpProps> = ({}) => {
  return (
    <div className="mt-32 mb-10 bg-primary text-primary-foreground px-16 pt-16  flex flex-row items-start justify-between">
      <div>
        <div className="text-5xl font-semibold">
          Start posting <br /> jobs today
        </div>
        <div className="my-6">Start posting job for only $10</div>
        <Button
          size="lg"
          variant="secondary"
          className="text-primary hover:text-primary"
        >
          Sign Up for free
        </Button>
      </div>
      <div>
        <Image
          src="/images/dashboard.png"
          alt="/images/dashboard.png"
          height={300}
          width={500}
        />
      </div>
    </div>
  );
};

export default BannerSignUp;
