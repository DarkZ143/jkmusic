"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function BrandLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const firstVisit = useRef(true);

  useEffect(() => {
    setLoading(true);
    const delay = firstVisit.current ? 1100 : 520;
    firstVisit.current = false;
    const timer = window.setTimeout(() => setLoading(false), delay);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`brand-loader${loading ? "" : " brand-loader-hidden"}`}
      role="status"
      aria-live="polite"
      aria-label="Loading JK Music Club"
      aria-hidden={!loading}
    >
      <div className="loader-content">
        <div className="loader-emblem">
          <span className="loader-orbit loader-orbit-outer" />
          <span className="loader-orbit loader-orbit-inner" />
          <Image src="/logo.png" alt="" width={128} height={128} fetchPriority="high" />
        </div>
        <p className="loader-name">JK Music Club</p>
        <p className="loader-caption">Sur <span>•</span> Laya <span>•</span> Parampara</p>
        <div className="loader-wave" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i /><i /><i />
        </div>
      </div>
    </div>
  );
}
