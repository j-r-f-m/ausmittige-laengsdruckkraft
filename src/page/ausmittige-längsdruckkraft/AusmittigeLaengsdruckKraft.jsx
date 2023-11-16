import { CssBaseline, Box, Typography, Container } from "@mui/material";

function AusmittigeLaengsdruckKraft() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {" "}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography
            sx={{ paddingBottom: "1.5rem" }}
            component="h3"
            variant="h3"
          >
            Ausmittige Längsdruckkraft
          </Typography>{" "}
          <div></div>
        </Box>
      </Container>{" "}
    </>
  );
}

export default AusmittigeLaengsdruckKraft;
