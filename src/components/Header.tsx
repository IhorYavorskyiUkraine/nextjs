import Link from "next/link";

export const Header: React.FC = () => {
   return (
      <header>
         <nav>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
         </nav>
      </header>
   );
};
