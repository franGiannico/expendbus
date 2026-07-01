import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f6f8" }}>
      <Header />

      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default MainLayout;