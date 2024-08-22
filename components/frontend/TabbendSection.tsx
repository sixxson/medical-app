import React from "react";
import TabbedItems from "./TabbedItems";

const TabbendSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:py-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don`t look even slightly believable.
              </p>
            </div>
          </div>
        </div>
        {/* TABS HERE */}
        <TabbedItems />
      </div>
    </section>
  );
};

export default TabbendSection;