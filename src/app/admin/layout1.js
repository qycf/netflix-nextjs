import { AntdRegistry } from '@ant-design/nextjs-registry';
import './style.css'


const RootLayout = ({ children }) => (

  <AntdRegistry>{children}</AntdRegistry>

);

export default RootLayout;