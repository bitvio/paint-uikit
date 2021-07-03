import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  const isZCore =
    href?.startsWith("https://exchange.zcore.network") ||
    href?.startsWith("https://app.zcore.network") ||
    href?.startsWith("https://zefi.zcore.network") ||
    href?.startsWith("/") ||
    href?.startsWith("https://swap.zcore.network");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  if (isZCore) {
    return <Tag {...props} {...otherProps} />;
  } else {
    return <Tag target="_blank" {...props} {...otherProps} />;
  }
};

export default MenuLink;
