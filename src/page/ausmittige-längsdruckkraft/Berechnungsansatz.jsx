import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

// using styled components for image control
const ImageComp = styled.img`
  max-width: 40%;
  height: auto;
  padding: 2rem;
`;

/**
 * Renders the Berechnungsansatz component.
 * @returns {JSX.Element} The Berechnungsansatz component.
 */

function Berechnungsansatz() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">Berechnungsansatz</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ padding: "1rem" }}>
            Quelle: Deutscher Ausschuß für Stahlbeton e.V., 2019, Heft 631 -
            Hilfsmittel zur Schnittgrößenermittlung und zu besonderen
            Detailnachweisen bei Stahlbetontragwerken, S. 89
          </Typography>
          <ImageComp src="images/ausmittige-last.png" alt="Grafik"></ImageComp>
        </Box>
        <Typography>
          Bei schrägem Kraftangriff wird empfohlen, die gesamte Randzugkraft aus
          der Horizontalkomponente der schrägen Kraft und der Randzugkraft aus
          exzentrischer Lasteinleitung durch Bewehrung abzudecken (siehe auch
          Schlaich/Schäfer (2001), Kapitel 4.5).
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Berechnungsansatz;
