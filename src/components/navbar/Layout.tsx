
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const Layout = ({ children }) => {
//   const pathname = usePathname();

  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
