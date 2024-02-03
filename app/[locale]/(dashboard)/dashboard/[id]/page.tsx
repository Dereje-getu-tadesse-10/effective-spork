import { auth } from "@/lib/auth/auth";
const Dashboard = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <section>
      <h1>{id}</h1>
    </section>
  );
};

export default Dashboard;
