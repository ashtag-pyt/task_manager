"use client";
import Link from 'next/link';
import LinkText from './LinkText'; // Import the LinkText component

interface Props {
  children: React.ReactNode;
  name: string;
  href: string;
  isOpen: boolean;
}

const SideBarLink: React.FC<Props> = ({ children, name, href, isOpen }) => {
  return (
    <Link href={href} className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100">
      <LinkText name={name} isOpen={isOpen}>
        {children} {/* Pass children to LinkText */}
      </LinkText>
    </Link>
  );
};

export default SideBarLink;


  