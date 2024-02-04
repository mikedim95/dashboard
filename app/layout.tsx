"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { auth } from "@/utils/serverActions/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthProvider from "./context/AuthProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const test = async () => {
    await signInWithEmailAndPassword(auth, "email", "password");
  };
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider theme={baselightTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
