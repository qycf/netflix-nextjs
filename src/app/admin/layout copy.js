import { AntdRegistry } from '@ant-design/nextjs-registry';
import './style.css'


const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;