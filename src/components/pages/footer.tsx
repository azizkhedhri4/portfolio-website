import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="flex flex-col gap-2  md:flex-row py-2 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground order-last md:order-first">
           Developed and designed by Fedi Abidi.
        </p>
        <nav className="md:ml-auto flex gap-4 md:gap-6">
          
            <Link 
                href="https://www.linkedin.com/in/fedi-abidi-727726308"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                className="invert-0 dark:invert transition-all duration-300"
                width={20}
                height={20}

                />
            </Link>
            <Link 
                href="https://www.instagram.com/abidi_fedyy"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Instagram profile"
            >
              <Instagram width={20} height={20} />
            </Link>
        </nav>
      </footer>
  );
}