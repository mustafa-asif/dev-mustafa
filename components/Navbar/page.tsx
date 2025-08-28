
import Link from "next/link";



export function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-white shadow">
      <Link href="/" className="text-xl font-bold text-blue-600">Mustafa</Link>
      <div className="flex gap-6 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}