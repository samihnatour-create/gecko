import Image from "next/image";
import { site } from "@/lib/content";
export function GeckoLogo() {
  return (
    <a className="brand" href="#top" aria-label={`${site.brand.name} home`}>
      <Image src={site.brand.logo} width={48} height={48} alt="" priority />
      <span>{site.brand.name}</span>
    </a>
  );
}
