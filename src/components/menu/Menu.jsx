"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";

export default function Menu({ navData }) {
  const pathname = usePathname();
  const normalNavs = navData?.filter((item) => !item.isButton) || [];
  const buttonNav = navData?.find((item) => item.isButton);

  return (
    <nav className="main-menu">
      <ul className="nav-list">
        {normalNavs.map((menu, i) => (
          <React.Fragment key={`nav-${i}`}>
            {menu.hasChildren ? (
              <li>
                <span className="angle-icon">
                  {menu.name} <FaAngleDown />
                </span>

                <ul className="dp-menu">
                  {menu.children?.length > 0 &&
                    menu.children.map((child, j) => (
                      <li key={`child-${j}`}>
                        <Link
                          className={
                            pathname === `${child.path}/` ||
                            pathname === child.path
                              ? "active-nav"
                              : ""
                          }
                          href={child.path}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ) : (
              <li>
                <Link
                  className={
                    pathname === `${menu.path}/` || pathname === menu.path
                      ? "active-nav"
                      : ""
                  }
                  href={menu.path}
                >
                  {menu.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
        {buttonNav && (
          <li className="menu-btn">
            <Link href={buttonNav.path} className="btn-hover-mask p-3">
              {buttonNav.name}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
