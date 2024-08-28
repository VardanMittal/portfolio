import React from "react";

const MagicDownloadButton = ({
  text,
  icon,
  href,
}: {
  text: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      download
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-background"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#252422_0%,#eb5e28_50%,#252422_100%)]" />
      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-components py-2 px-4 text-sm font-semibold text-text backdrop-blur-lg">
        {text}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </a>
  );
};

export default MagicDownloadButton;
