"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { Icon } from "@/src/shared/ui/icons";

import styles from "./header.module.scss";

import { CreatePostBtn } from "@/src/features/create-post";
import { UiButton } from "@/src/shared/ui";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();

  const [isMobNavOpen, setMobNavOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={clsx(styles.header__row, "container")}>
        <Link href="/" className={styles.logo}>
          <Icon icon="logo" width={92} height={25} />
        </Link>
        <NavMenu pathname={pathname} />
        <div className={styles.actionBtn}>
          <CreatePostBtn />
        </div>
        <button onClick={() => setMobNavOpen(true)} className={styles.burger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {isMobNavOpen && (
        <MobNavMenu pathname={pathname} onClose={() => setMobNavOpen(false)} />
      )}
    </div>
  );
}

const NavMenu = ({ pathname }: { pathname: string }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={clsx(pathname == "/" && styles.active)}>
          <Link href="/">Home</Link>
        </li>
        <li className={clsx(pathname == "/blog" && styles.active)}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={clsx(pathname == "/isr-page" && styles.active)}>
          <Link href="/isr-page">ISR-Page</Link>
        </li>
        <li className={clsx(pathname == "/csr-page" && styles.active)}>
          <Link href="/csr-page">CSR-Page</Link>
        </li>
      </ul>
    </nav>
  );
};

const MobNavMenu = ({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) => {
  return (
    <div className={clsx(styles.mobileNav, styles.mobileNav_open)}>
      <nav>
        <ul className={styles.mobileNav__list}>
          <li className={clsx(pathname == "/" && styles.active)}>
            <Link href="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li className={clsx(pathname == "/blog" && styles.active)}>
            <Link href="/blog" onClick={onClose}>
              Blog
            </Link>
          </li>
          <li className={clsx(pathname == "/isr-page" && styles.active)}>
            <Link href="/isr-page" onClick={onClose}>
              ISR-Page
            </Link>
          </li>
          <li className={clsx(pathname == "/csr-page" && styles.active)}>
            <Link href="/csr-page" onClick={onClose}>
              CSR-Page
            </Link>
          </li>
        </ul>
      </nav>
      <CreatePostBtn />
      <UiButton className={styles.mobileNav__closebtn} onClick={onClose}>
        <Icon icon="close" width={56} height={56} />
      </UiButton>
    </div>
  );
};
