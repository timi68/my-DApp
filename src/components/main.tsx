import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";

export default function Main() {
  return (
    <Container sx={{ py: 2 }}>
      <main className="main-content">
        <Typography
          component="h1"
          variant="h6"
          color="grey"
          fontWeight={600}
          mb={3}
        >
          Creating a smart contract
        </Typography>

        <Box sx={{ maxWidth: 400, mx: "auto" }}>
          <Paper
            elevation={4}
            variant="elevation"
            sx={{ px: 3, py: 3, borderRadius: 5 }}
          >
            <Typography
              component="h3"
              variant="subtitle1"
              fontWeight={600}
              textAlign="center"
            >
              Transfer Form
            </Typography>
            <TextField
              label="Receiver Address"
              margin="dense"
              name="receiver"
              fullWidth
            />
            <TextField label="Amount" margin="dense" name="amount" fullWidth />
            <TextField
              label="Keyword (Gif)"
              name="keyword"
              margin="dense"
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              margin="dense"
              fullWidth
            />
            <Button variant="contained" size="large" fullWidth sx={{ my: 2 }}>
              {" "}
              Send Coin
            </Button>
          </Paper>
        </Box>
      </main>
    </Container>
  );
}
