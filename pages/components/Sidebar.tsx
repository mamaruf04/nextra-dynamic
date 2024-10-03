// components/Sidebar.tsx
// import Link from "next/link";
// import { ContentItem } from "../types/content";

// interface Props {
//   items: ContentItem[];
// }

// function renderItems(items: ContentItem[]) {
//   return items.map((item) => (
//     <li key={item.ContentID}>
//       <Link href={`/${item.ContentID}`}>
//         <a>{item.Title}</a>
//       </Link>
//       {item.children && item.children.length > 0 && (
//         <ul>{renderItems(item.children)}</ul>
//       )}
//     </li>
//   ));
// }

// export default function Sidebar({ items }: Props) {
//   return (
//     <nav>
//       <ul>{renderItems(items)}</ul>
//     </nav>
//   );

// components/Sidebar.tsx
import Link from "next/link";
import { ContentItem } from "../types/content";

interface Props {
  items: ContentItem[];
}

function renderItems(items: ContentItem[]) {
  return items.map((item) => (
    <li className="nx-flex nx-flex-col nx-gap-1" key={item.ContentID}>
      <Link href={`/${item.ContentID}`}>{item.Title}</Link>
      {item.children && item.children?.length > 0 && (
        <ul>{renderItems(item.children)}</ul>
      )}
    </li>
  ));
}

export default function Sidebar({ items }: Props) {
  return (
    // <nav>
    <ul>{renderItems(items)}</ul>
    // </nav>
  );
}
