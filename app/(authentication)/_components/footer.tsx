import Link from "next/link";
import { buttonVariants } from "../../../components/ui/button";

type Footer = {
  text: string;
  link: string;
  title: string;
};

export const Footer = ({ text, title, link }: Footer) => {
  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-muted-foreground">
        {text}{" "}
        <Link
          href={link}
          className={buttonVariants({
            variant: "link",
            className: "!px-0 ",
          })}
        >
          {title}
        </Link>
      </p>
    </div>
  );
};
