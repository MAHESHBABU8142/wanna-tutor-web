"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import MuiTheme from "@/theme/mui-theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>
    </SessionProvider>
  );
}
