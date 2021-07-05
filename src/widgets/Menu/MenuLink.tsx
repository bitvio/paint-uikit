import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  const isBitvio =
    href?.startsWith("https://exchange.bitvio.id") ||
    href?.startsWith("https://apps.bitvio.id") ||
    href?.startsWith("https://finance.bitvio.id") ||
    href?.startsWith("/") ||
    href?.startsWith("https://swap.bitvio.id");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  if (isBitvio) {
    return <Tag {...props} {...otherProps} />;
  } else {
    return <Tag target="_blank" {...props} {...otherProps} />;
  }
};

export default MenuLink;
