"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Bbreadcrumb paths
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment).replace(/-/g, " ");
    return { href, label };
  });

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumb-list">
        <li>
          <Link href="/" className="breadcrumb-link">
            HOME{" "}
            <span className="breadcrumbsNestedPage">
              {breadcrumbs.length === 0 ? " | SHOP" : ""}
            </span>
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={index}>
            <Link
              href={crumb.href}
              className="breadcrumb-link breadcrumbsNestedPage"
            >
              {(
                crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)
              ).toUpperCase()}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
