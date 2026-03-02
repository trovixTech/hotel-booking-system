import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
  Rating,
} from "@mui/material";

const reviews = [
  {
    name: "Herman Miller",
    company: "ThemeZaa",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "We are happy to offer our guests truly fabulous experience of relaxing, balanced, and memorable vacation.",
  },
  {
    name: "Matthew Taylor",
    company: "ThemeZaa",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "What a great experience! I have visited one of the resorts with my friends and we had a great time! Highly recommended.",
  },
];

const ExclusiveRatings = () => {
  return (
    <Box
      sx={{
        background: "#f7f7f7",
        py: 12,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Vertical Lines */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(to right, transparent, transparent 200px, rgba(0,0,0,0.03) 201px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        {/* Section Title */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Georgia, serif",
              mb: 1,
              animation: "fadeDown 1s ease forwards",
            }}
          >
            Exclusive ratings
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              animation: "fadeUp 1.2s ease forwards",
            }}
          >
            Enjoy in resorts and awesome ratings.
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {reviews.map((review, index) => (
            <Card
              key={index}
              sx={{
                p: 4,
                borderRadius: 4,
                boxShadow: 2,
                backgroundColor: "#fff",
                display: "flex",
                gap: 3,
                alignItems: "flex-start",
                transition: "all 0.4s ease",
                opacity: 0,
                transform: "translateY(40px)",
                animation: `cardFade 1s ease forwards ${index * 0.3}s`,
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Avatar
                src={review.image}
                sx={{ width: 70, height: 70 }}
              />

              <Box>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "#6b7280" }}
                >
                  {review.text}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600 }}
                >
                  {review.name}, {review.company}
                </Typography>

                <Rating
                  value={5}
                  readOnly
                  sx={{
                    mt: 1,
                    "& .MuiRating-iconFilled": {
                      color: "#f59e0b",
                      animation: "starGlow 2s infinite alternate",
                    },
                  }}
                />
              </Box>
            </Card>
          ))}
        </Box>

        {/* Bottom Link */}
        <Box textAlign="center" mt={6}>
          <Typography variant="body2">
            Check all <strong>3,583</strong> exclusive visitor reviews on{" "}
            <strong style={{ color: "#34a853" }}>Tripadvisor</strong>
          </Typography>
        </Box>
      </Container>

      {/* Animations */}
      <style>
        {`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes starGlow {
          from { filter: drop-shadow(0 0 2px rgba(255,165,0,0.4)); }
          to { filter: drop-shadow(0 0 6px rgba(255,165,0,0.9)); }
        }
      `}
      </style>
    </Box>
  );
};

export default ExclusiveRatings;