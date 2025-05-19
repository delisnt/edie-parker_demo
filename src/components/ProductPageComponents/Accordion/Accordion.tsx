import { CollapseProps, Collapse, ConfigProvider } from "antd";
import { AccordionProps } from "@/app/lib/types";
import { PiPlus } from "react-icons/pi";

function Accordion({ details }: AccordionProps) {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "DETAILS",
      children: (
        <ul style={{ paddingInline: 0 }}>
          {details ? (
            details.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <div>Nothing here to see...</div>
          )}
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
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            borderlessContentBg: "#ffffff",
            headerBg: "#ffffff",
            fontSize: "1rem",
            colorBorder: "black",
            padding: 0,
          },
        },
      }}
    >
      <div style={{ borderBottom: "1px solid black" }}>
        <Collapse
          items={items}
          bordered={false}
          expandIconPosition="end"
          expandIcon={({ isActive }) =>
            isActive ? (
              <PiPlus size="1rem" style={{ transform: "rotate(135deg)" }} />
            ) : (
              <PiPlus size="1rem" style={{ transform: "rotate(90deg)" }} />
            )
          }
        />
      </div>
    </ConfigProvider>
  );
}

export default Accordion;
