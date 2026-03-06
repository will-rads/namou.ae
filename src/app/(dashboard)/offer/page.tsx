"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/* Redirect to new Next Steps page — keeps old bookmarks/links working */
export default function OfferRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/next-steps");
  }, [router]);

  return (
    <div className="flex items-center justify-center py-20">
      <p className="text-sm text-muted">Redirecting...</p>
    </div>
  );
}
