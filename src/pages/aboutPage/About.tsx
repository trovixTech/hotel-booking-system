import { Box, Container, Typography, Button } from "@mui/material";
import { Phone } from "@mui/icons-material";
import pic from "../../assets/about/nicholas-ng-cHB4nr-vPC8-unsplash.jpg";

const AboutResort = () => {
  return (
    <>
      <style>{`
        /* ── Grid line animation ── */
        .grid-bg {
          position: relative;
          overflow: hidden;
        }

        .grid-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(180, 160, 100, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(180, 160, 100, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridReveal 1.6s ease-out forwards;
          opacity: 0;
          pointer-events: none;
          z-index: 0;
        }

        .grid-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(251, 191, 36, 0.6),
            transparent
          );
          animation: sweepDown 1.8s ease-in-out forwards;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes gridReveal {
          0% { opacity: 0; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes sweepDown {
          0% { top: 0%; opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .v-sweep {
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(251, 191, 36, 0.5),
            transparent
          );
          animation: sweepRight 2s ease-in-out forwards;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes sweepRight {
          0% { left: 0%; opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        .grid-content {
          position: relative;
          z-index: 2;
        }

        /* ── Images ── */
        .img-top {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease-in-out;
        }

        .img-bottom {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease-in-out;
        }

        .img-top:hover,
        .img-bottom:hover {
          transform: scale(1.04);
        }

        /* ── Collage responsive sizing ── */
        .collage-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
        }

        .collage-img-top {
          position: absolute;
          top: 0;
          right: 0;
          width: 62%;
          height: 220px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          z-index: 1;
        }

        .collage-stat {
          position: absolute;
          top: 30px;
          left: 0;
          z-index: 2;
        }

        .collage-img-bottom {
          position: absolute;
          bottom: 0;
          left: 10%;
          width: 50%;
          height: 230px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          z-index: 3;
        }

        /* Tablet: md and below */
        @media (max-width: 900px) {
          .collage-wrapper {
            height: 300px;
          }

          .collage-img-top {
            width: 58%;
            height: 180px;
          }

          .collage-img-bottom {
            width: 48%;
            height: 185px;
          }
        }

        /* Mobile: sm and below */
        @media (max-width: 600px) {
          .collage-wrapper {
            height: 260px;
            margin-top: 1rem;
          }

          .collage-img-top {
            width: 60%;
            height: 155px;
          }

          .collage-img-bottom {
            width: 50%;
            height: 160px;
            left: 5%;
          }

          .collage-stat {
            top: 170px;
            left: 62%;
          }
        }
      `}</style>

      <Container data-aos="fade-up" maxWidth="lg">
        <Box
          sx={{
            marginTop: { xs: "4rem", sm: "6rem", md: "10rem" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "stretch", md: "center" },
            gap: { xs: "2rem", md: "4rem" },
            px: { xs: "1.5rem", sm: "2rem", md: "4rem" },
          }}
        >
          {/* LEFT — Text content */}
          <Box
            className="grid-bg rounded-lg"
            sx={{
              flex: 1,
              minWidth: 0,
              p: { xs: 3, sm: 4, md: 4 },
            }}
          >
            <span className="v-sweep" aria-hidden="true" />
            <div className="grid-content">
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "DM Serif Text",
                  color: "#c9a96e",
                  letterSpacing: "0.08em",
                  mb: 1,
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                }}
              >
                About resorts
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                  mb: 2,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
                }}
              >
                Relax at the luxury resorts around the entire world.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#6b7280",
                  lineHeight: 1.8,
                  mb: { xs: 3, md: 4 },
                  maxWidth: { xs: "100%", md: 340 },
                  fontSize: { xs: "0.8rem", sm: "0.875rem" },
                }}
              >
                A design-led approach guides the team, implementing practices,
                products and services that are thoughtful and environmentally
                sound. Family of professionals that creates intelligent designs
                that help the face of hospitality.
              </Typography>

              {/* CTA Row */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: { xs: 2, sm: 3 },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#1a1a1a",
                    color: "#fff",
                    borderRadius: "4px",
                    textTransform: "none",
                    px: { xs: 2.5, sm: 3 },
                    py: { xs: 1, sm: 1.2 },
                    fontFamily: "DM Serif Text",
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  About resort
                </Button>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#4b5563",
                  }}
                >
                  <Phone sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  <Typography
                    variant="body2"
                    sx={{
                      letterSpacing: "0.05em",
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    }}
                  >
                    1 800 222 000
                  </Typography>
                </Box>
              </Box>
            </div>
          </Box>

          {/* RIGHT — Overlapping image collage */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <div className="collage-wrapper">
              {/* Top-right image */}
              <div className="collage-img-top">
                <img src={pic} alt="Resort nature" className="img-top" />
              </div>

              {/* "Started in" stat */}
              <div className="collage-stat">
                <Typography
                  variant="caption"
                  sx={{
                    color: "#9ca3af",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontSize: { xs: "0.55rem", sm: "0.65rem" },
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  Started in
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4.5rem" },
                    fontWeight: 700,
                    color: "#1a1a1a",
                    lineHeight: 1,
                    
                  }}
                >
                  1995
                </Typography>
              </div>

              {/* Bottom-left image */}
              <div className="collage-img-bottom">
                <img src={pic} alt="Resort guest" className="img-bottom" />
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AboutResort;
