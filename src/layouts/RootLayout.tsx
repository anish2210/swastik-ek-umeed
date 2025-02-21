import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
