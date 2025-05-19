import { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar/Navbar";
import StoreProvider from "./StoreProvider";
import "./globals.css"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Edie Parker Demo',
  description: 'Edie parker clone demo ',
}

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
