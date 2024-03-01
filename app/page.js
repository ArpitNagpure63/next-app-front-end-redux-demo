import Link from "next/link";
import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";

export default function Home() {
  return (
    <main className="container">
      <AddUsers />
      <DisplayUsers />
      <Link href="/users">Go To Users</Link>
    </main>
  );
}
