import React from "react";
import TabbedItems from "./TabbedItems";

const TabbendSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:py-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white
              sm:text-4xl md:text-[40px] scroll-m-20 border-b pb-2 tracking-tight first:mt-0">
                Our Services
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-base text-body-color dark:text-dark-6">
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