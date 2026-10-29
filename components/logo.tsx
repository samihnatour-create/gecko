import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
export function GeckoLogo() {
  return (
    <Link className="brand" href="/" aria-label={`${site.brand.name} home`}>
      <Image src={site.brand.logo} width={44} height={44} alt="" priority />
      <span>{site.brand.name}</span>
    </Link>
  );
}
