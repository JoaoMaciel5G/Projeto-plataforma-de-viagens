import {
  Phone,
  MapPin,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export function ContainerHeader({ children }: Props) {
  return <div className="flex items-center justify-center">{children}</div>;
}

export function Paragraph({ children }: Props) {
  return (
    <p className="font-extralight text-xl font-sans cursor-pointer text-zinc-50 hover:text-amber-500">
      {children}
    </p>
  );
}

export default function Header() {
  return (
    <header className="bg-zinc-950 hidden justify-between py-5 lg:flex">
      <div className="flex">
        <ContainerHeader>
          <Phone className="text-amber-500 mx-3" />
          <Paragraph>1-800-1234-567</Paragraph>
        </ContainerHeader>
        <ContainerHeader>
          <MapPin className="text-amber-500 mx-3" />
          <Paragraph>
            2130 Fulton Street, San Diego, CA 94117-1080 USA
          </Paragraph>
        </ContainerHeader>
        <ContainerHeader>
          <Mail className="text-amber-500 mx-3" />
          <Paragraph>mail@demolink.org</Paragraph>
        </ContainerHeader>
      </div>
      <div className="flex mx-4 gap-3 items-center justify-center">
        <Facebook className="text-zinc-50 cursor-pointer"/>
        <Instagram className="text-zinc-50 cursor-pointer"/>
        <Twitter className="text-zinc-50 cursor-pointer"/>
        <Linkedin className="text-zinc-50 cursor-pointer"/>
      </div>
    </header>
  );
}
