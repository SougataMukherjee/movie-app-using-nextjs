import Link from "next/link";

export default function MenuItem({
  title,
  address,
  Icon,
}: {
  title: any;
  address: any;
  Icon: any;
}) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}