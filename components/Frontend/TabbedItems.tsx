"use client"
import { Tabs } from "flowbite-react";
import { Activity, ListOrdered, Microscope, Stethoscope, Syringe } from "lucide-react";
import ServiceList from "./Services/ServiceList";
import ListCard from "./Doctor/LinkCard";

export default function TabbedItems() {

  const services = [
    {
      title: "Telehealth",
      image: "/Something.jpg",
      slug:"telehealth",
    },
  {
      title: "Virtual care",
      image: "/Something.jpg",
      slug:"telehealth",
    },
    {
      title: "UTI consult",
      image: "/Something.jpg",
      slug:"telehealth",
    },
    {
      title: "Mental health",
      image: "/Something.jpg",
      slug:"telehealth",
    },
    {
      title: "Dermatology",
      image: "/Something.jpg",
      slug:"telehealth", 
    },
    {
      title: "ED consult",
      image: "/Something.jpg",
      slug:"telehealth",
    },
    {
      title: "Urgent care",
      image: "/Something.jpg",
      slug:"telehealth",
    },
  ]

  const tabs = [
    {
      component: <ServiceList services={services} />,
      title: "Popular Services",
      icon: Stethoscope,
      content: []
    },
    {
      component: <ListCard className="bg-blue-900 " />,
      title: "Doctors",
      icon:Microscope, 
      content: []
    },
    {
      component: <ListCard className="bg-red-900 " />,
      title: "Specialities",
      icon: Activity, // Replace "" with the appropriate React icon component
      content: []
    },
    {
      component: <ListCard className="bg-pink-900 " />,
      title: "Symptoms",
      icon: Syringe, // Replace "" with the appropriate React icon component
      content: []
    },
    {
      component: <ListCard className="bg-purple-900 " />,
      title: "Orders",
      icon: ListOrdered, // Replace "" with the appropriate React icon component
      content: []
    },
  ];

  return (
    <Tabs aria-label="Tabs with icons" variant="underline">
      {
        tabs.map((tab, index) => {
          return (
            <Tabs.Item
              key={index}
              title={tab.title}
              icon={tab.icon}
              className="h-28">
              {tab.component}
            </Tabs.Item>
          )
        })
      }
    </Tabs>
  );
}