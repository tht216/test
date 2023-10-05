import cn from "classnames";

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className = "" }) => {
  return (
    <footer className={cn(className, "bg-zinc-900 py-[3.75rem]")}>
      <p className="text-center">
        <span className="text-neutral-200 text-sm font-normal">
          Copyright © 2023{" "}
        </span>
        <span className="text-neutral-200 text-sm font-bold">Wifosell</span>
        <span className="text-neutral-200 text-sm font-normal">
          {" "}
          | Powered by{" "}
        </span>
        <span className="text-neutral-200 text-sm font-bold">Wifosoft</span>
      </p>
    </footer>
  );
};

export default Footer;
