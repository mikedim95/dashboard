"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DailyActivity from "@/app/(DashboardLayout)/components/dashboard/DailyActivity";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import BlogCard from "@/app/(DashboardLayout)/components/dashboard/Blog";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  /*  const { fetchCurrentUser, user, setUser } = useUserStore();
  useEffect(() => {
    const checkStatus = async () => {
      while (status === "loading") {
        console.log("Loading...");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
      }

      console.log("Session Status:", status);

      const apiClient = new vendorApiClient(session?.accessToken);
      const user = await apiClient.clientInstance.userCurrentUser();
      if (user.isSuccessful == true) {
        fetchCurrentUser(apiClient);
        console.log("user");
        console.log(user);
      } else {
        signOut();
      }
    };

    const intervalId = setInterval(() => {
      checkStatus().then(() => {
        if (status !== "loading") {
          clearInterval(intervalId); // Stop the interval once status is no longer loading
        }
      });
    }, 1000); // Check every 1 second

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [status]); */

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
