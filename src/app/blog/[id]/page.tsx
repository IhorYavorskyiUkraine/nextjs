import { Metadata } from "next";

type Props = {
   params: {
      id: string;
   };
};

async function getData(id: string) {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
         revalidate: 60,
      },
   });
   return res.json();
}

export async function generateMetadata({
   params: { id },
}: Props): Promise<Metadata> {
   const post = await getData(id);

   return {
      title: post.title,
   };
}

export default async function Post({ params: { id } }: Props) {
   const post = await getData(id);

   return (
      <>
         <h1>{post.title}</h1>
         <div>{post.body}</div>
      </>
   );
}
