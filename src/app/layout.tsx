import { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar/Navbar";
import StoreProvider from "./StoreProvider";
import "./globals.css"

const layout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <StoreProvider>
      <body>
        <Navbar/>
        <div>
          {children}
        </div>
      </body>
      </StoreProvider>
    </html>
  );
};

export default layout;
