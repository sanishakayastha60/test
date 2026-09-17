import ThemeToggle from "@/components/ThemeToggle";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[var(--background-light)] text-[var(--text-light)] dark:bg-[var(--background-dark)] dark:text-[var(--text-dark)]">
      <ThemeToggle />
    </div>
  );
}
