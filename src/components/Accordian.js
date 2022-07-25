import React from "react";
import "../index.css";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Accordian = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="text-white px-5 xs:px-0 xxs:px-0 py-12">
      <h2 className="text-7xl sm:text-4xl xxs:text-4xl font-semibold text-center py-12 xxs:py-0 mt-12">
        Frequently Asked Questions
      </h2>
      <div className="mx-24 lg:mx-0 md:mx-0 sm:mx-0 xs:mx-4 xxs:mx-3 py-5">
        <Accordion
          open={open === 1}
          onClick={() => handleOpen(1)}
          className="_Accordion px-5 xxs:px-2 text-lg"
          icon
        >
          <div className="flex">
            <AccordionHeader className="border-none font-light text-left text-2xl">
              {open === 1 ? (
                <h2 className="text-white">What is Gamernation?</h2>
              ) : (
                <h2 className="text-dullwhite">What is Gamernation?</h2>
              )}
            </AccordionHeader>
            <span className="pt-4">
              {open === 1 ? (
                <i className="fa fa-minus-circle text-3xl"></i>
              ) : (
                <i className="fa fa-plus-circle text-slickcolor text-3xl"></i>
              )}
            </span>
          </div>
          <AccordionBody className="py-5">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          onClick={() => handleOpen(2)}
          className="_Accordion px-5 xxs:px-2 text-lg"
          icon
        >
          <div className="flex">
            <AccordionHeader className="border-none font-light text-left text-2xl xs:tracking-tighter">
              {open === 2 ? (
                <h2 className="text-white">Why choose Gamernation?</h2>
              ) : (
                <h2 className="text-dullwhite">Why choose Gamernation?</h2>
              )}
            </AccordionHeader>
            <span className="pt-4">
              {open === 2 ? (
                <i className="fa fa-minus-circle text-3xl"></i>
              ) : (
                <i className="fa fa-plus-circle text-slickcolor text-3xl"></i>
              )}
            </span>
          </div>
          <AccordionBody className="py-5 ">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          onClick={() => handleOpen(3)}
          className="_Accordion px-5 xxs:px-2 text-lg"
          icon
        >
          <div className="flex">
            <AccordionHeader className="border-none text-left font-light text-2xl">
              {open === 3 ? (
                <h2 className="text-white">
                  How to earn money from Gamernation?
                </h2>
              ) : (
                <h2 className="text-dullwhite">
                  How to earn money from Gamernation?
                </h2>
              )}
            </AccordionHeader>
            <span className="pt-4">
              {open === 3 ? (
                <i className="fa fa-minus-circle text-3xl"></i>
              ) : (
                <i className="fa fa-plus-circle text-slickcolor text-3xl"></i>
              )}
            </span>
          </div>
          <AccordionBody className="py-5">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          onClick={() => handleOpen(4)}
          className="_Accordion px-5 xxs:px-2 text-lg"
          icon
        >
          <div className="flex">
            <AccordionHeader className="border-none text-left font-light text-2xl">
              {open === 4 ? (
                <h2 className="text-white">Is Gamernation safe?</h2>
              ) : (
                <h2 className="text-dullwhite">Is Gamernation safe?</h2>
              )}
            </AccordionHeader>
            <span className="pt-4">
              {open === 4 ? (
                <i className="fa fa-minus-circle text-3xl"></i>
              ) : (
                <i className="fa fa-plus-circle text-slickcolor text-3xl"></i>
              )}
            </span>
          </div>
          <AccordionBody className="py-5 text-2xl">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;
