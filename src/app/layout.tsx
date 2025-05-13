import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default layout;
