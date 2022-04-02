import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useMoralis } from "react-moralis";

export default function Header() {
  const { isAuthenticated, authenticate, Moralis } = useMoralis();

  const handleClick = async () => {
    let user = Moralis.User.current();
    if (!user) {
      const currentUser = await authenticate();
      console.log({ currentUser });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="subtitle1" component="h1" flexGrow={1}>
          TJ DApp
        </Typography>
        {!isAuthenticated && (
          <Button variant="contained" size="small" onClick={handleClick}>
            Connect wallet
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
