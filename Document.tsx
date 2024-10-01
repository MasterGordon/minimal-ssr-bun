import type { PropsWithChildren } from "react";

const Document: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <head>
        <title>Hello, world!</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <script type="module" src="/client.js"></script>
      </body>
    </html>
  );
};

export default Document;
