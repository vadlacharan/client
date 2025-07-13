
import React from "react";
import { Button } from "@/components/ui/button";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const Hero7 = ({
  heading = "Record, Visualize, and Track Your Finances — All in One Place.",
  description = "Stay on top of your finances with our all-in-one Expense Tracker. Seamlessly record your income and expenses, visualize your spending patterns through intuitive charts, and track your financial progress over time.",
  button = {
    text: "Get Started",
    url: "/register",
  },
}: Hero7Props) => {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">{heading}</h1>
          <p className="text-muted-foreground text-balance lg:text-lg">
            {description}
          </p>
        </div>
        <Button asChild size="lg" className="mt-10">
          <a href={button.url}>{button.text}</a>
        </Button>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
        </div>
      </div>
    </section>
  );
};

export { Hero7 };
