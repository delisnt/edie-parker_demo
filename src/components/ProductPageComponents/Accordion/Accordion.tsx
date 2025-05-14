import React from "react";
import { CollapseProps, Collapse } from "antd";
import { AccordionProps } from "@/types";

function Accordion( {details}: AccordionProps ) {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "DETAILS",
      children: (
        <ul>
            {details.map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      ),
    },
    {
      key: "2",
      label: "INTERNATIONAL SHIPPING",
      children: (
        <p>
          Please email customerservice@edie-parker.com to arrange international
          shipping.
        </p>
      ),
    },
  ];

  return (
    <div>
      <Collapse items={items}></Collapse>
    </div>
  );
}

export default Accordion;
