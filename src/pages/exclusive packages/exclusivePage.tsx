import React from "react";

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const offers = [
  {
    title: "Honeymoon package",
    tag: "EXCLUSIVE",
    discount: "GET 40% OFF",
    img: "https://images.unsplash.com/photo-1529636798458-92182e662485",
  },
  {
    title: "Cocktail package",
    tag: "UNBUNDLED",
    discount: "GET 30% OFF",
    img: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d",
  },
  {
    title: "Massage package",
    tag: "WELLNESS",
    discount: "GET 20% OFF",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
  },
];

const ExclusiveOffers = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", py: 10 }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Georgia, serif", mb: 1 }}
          >
            Exclusive offers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enjoy in resorts and awesome facilities.
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 4,
          }}
        >
          {offers.map((offer, index) => (
            <Card
              key={index}
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={offer.img}
                height="380"
                sx={{ filter: "brightness(70%)" }}
              />

              <CardContent
                sx={{
                  position: "absolute",
                  inset: 0,
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ letterSpacing: 2, mb: 1 }}
                >
                  {offer.tag}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Georgia, serif",
                    mb: 2,
                  }}
                >
                  {offer.title}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "0.75rem",
                    px: 3,
                    "&:hover": {
                      backgroundColor: "#ddd",
                    },
                  }}
                >
                  {offer.discount}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Logos Section */}
        <Box
          sx={{
            mt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            flexWrap: "wrap",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Tripadvisor_logo.svg"
            alt="Tripadvisor"
            height="28"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/MakeMyTrip_Logo.png"
            alt="MakeMyTrip"
            height="28"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Expedia_Logo_2022.svg"
            alt="Expedia"
            height="28"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Cleartrip_logo.png"
            alt="Cleartrip"
            height="28"
          />
        </Box>

        {/* Bottom Note */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            <strong style={{ background: "#000", color: "#fff", padding: "2px 6px", marginRight: 8 }}>
              AWESOME
            </strong>
            Get 20% discount on hotels booking with above websites.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ExclusiveOffers;