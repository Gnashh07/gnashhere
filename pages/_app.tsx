import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const { basePath } = useRouter(); // ✅ Gets correct basePath

  return (
    <nav>
      <Link href={`${basePath}/blog`}>Blog</Link>
      <Link href={`${basePath}/projects`}>Projects</Link>
    </nav>
  );
}
