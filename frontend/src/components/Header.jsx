import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Typography variant="h6" fontWeight="bold">
          Expend Bus
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;