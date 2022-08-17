import Link from "next/link";

export default function A({ text, href }) {
  return (
    <nav>
      <Link href={href}>
        <a className="m-2 hover:text-gray-400">{text}</a>
      </Link>
    </nav>
  );
}
