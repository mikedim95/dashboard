"use client";
import { Grid, Stack, Paper } from "@mui/material";
import BaseCard from "@/app/(DashboardLayout)/components/shared/BaseCard";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useSession, signOut, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { auth } from "@/utils/serverActions/firebase";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function ClientItem() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signIn?callbackUrl=/ui-components/myTestItem");
    },
  });
  console.log(session?.accessToken);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <BaseCard title={auth.currentUser?.email!.toString()}>
          <Stack spacing={5}>
            {session ? (
              <button className="w-10" onClick={() => signOut()}>
                Logout
              </button>
            ) : (
              <p>there is no session</p>
            )}
            <button className="w-10" onClick={() => signIn()}>
              Login
            </button>
          </Stack>
        </BaseCard>
      </Grid>
    </Grid>
  );
}
