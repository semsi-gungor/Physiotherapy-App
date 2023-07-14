import { FC } from "react";
import SideNavbar from "@/components/admin-page/SideNavbar/SideNavbar";

interface Props {
  children: React.ReactNode;
}

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <SideNavbar />
      {children}
    </div>
  );
};

export default AdminLayout;
