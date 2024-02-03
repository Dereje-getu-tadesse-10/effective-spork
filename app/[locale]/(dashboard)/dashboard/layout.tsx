import { Sidebar } from "@/app/[locale]/(dashboard)/dashboard/_components/sidebar/sidebar";
import { Menu } from "./_components/sidebar/menu";
import { MobileNav } from "./_components/sidebar/mobile-nav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full w-full">
      <Sidebar>
        <Menu />
      </Sidebar>
      <section className="flex flex-col w-full h-full md:ml-80 ">
        <MobileNav>
          <Menu />
        </MobileNav>
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
