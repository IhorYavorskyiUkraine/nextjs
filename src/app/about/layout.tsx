import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "About PAge",
};

export default function AboutLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div>
         <h1>About Page</h1>
         <ul>
            <li>
               <Link href="/about/contacts">About</Link>
            </li>
            <li>
               <Link href="/about/team">Team</Link>
            </li>
         </ul>
         {children}
      </div>
   );
}
