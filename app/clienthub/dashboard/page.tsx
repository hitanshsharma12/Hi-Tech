"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirect to the main client hub page
export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/clienthub");
  }, [router]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Redirecting to Client Hub...</p>
      </div>
    </div>
  );
}
