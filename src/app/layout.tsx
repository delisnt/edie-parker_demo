import { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar/Navbar";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <body>
        <Navbar/>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default layout;
