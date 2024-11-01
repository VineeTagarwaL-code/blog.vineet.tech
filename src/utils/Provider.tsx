"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
export default function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
