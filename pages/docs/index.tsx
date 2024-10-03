import Link from "next/link";

export default function DocsHome() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Documentation Home</h1>
      <p>Welcome to the documentation! Select a topic from the sidebar.</p>
      {/* Optionally, link to specific content */}
      <Link href="/docs/57">
        <span style={{ fontSize: "1.2rem", color: "blue" }}>
          Go to Example Content
        </span>
      </Link>
    </div>
  );
}

// import { serialize } from "next-mdx-remote/serialize";

// export const getStaticProps = async () => {
//   const res = await fetch('https://www.trustguid.com/api/contents/57?type=Document');
//   const repo = await res.json();
//   const content = await serialize(repo.content.Content, {
//     mdxOptions: {
//       reclamator: {
//         voidElements: []
//       }
//     }
//   });

//   return {
//     props: {
//       ssg: {
//         stars: content
//       }
//     },
//     revalidate: 60
//   }
// }
