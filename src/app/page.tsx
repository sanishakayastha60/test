import ThemeToggle from "@/components/ThemeToggle";
import Login from "@/components/Login";
// import Discover from "@/components/Discover";
export default function Home() {
  return (
    // <div className="w-full min-h-screen bg-[#E5E5E5] flex justify-center items-center">
    //   <Discover />
    // </div>
    <div className="w-full min-h-screen bg-[var(--background-light)] text-[var(--text-light)] dark:bg-[var(--background-dark)] dark:text-[var(--text-dark)] flex justify-center items-center">
      <Login />
      <ThemeToggle />
    </div>
  );
}
