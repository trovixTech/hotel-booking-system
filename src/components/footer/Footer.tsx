import { Box, Container, Grid, Typography, Link, IconButton, Divider, Stack } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn, LocationOn, Phone, Email } from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: "#f9f7f3", // Resort Theme Ivory Background
        color: "#232323", 
        pt: 10, 
        pb: 4, 
        borderTop: "1px solid #e5e2dc" 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: "'Playfair Display', serif", // Theme Serif Font
                fontWeight: 700, 
                letterSpacing: "1px", 
                mb: 3, 
                color: "#232323" 
              }}
            >
              DADDY<span style={{ color: "#c5a059" }}>.</span>
            </Typography>
            <Typography variant="body2" sx={{ color: "#666666", lineHeight: 2, mb: 4, maxWidth: "300px" }}>
              Redefining the art of stay. Experience a world where every detail is crafted for your comfort and elegance.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[Facebook, Instagram, Twitter, LinkedIn].map((Icon, index) => (
                <IconButton 
                  key={index} 
                  sx={{ 
                    color: "#232323", 
                    bgcolor: "transparent",
                    border: "1px solid #e5e2dc", // Thin structured border
                    "&:hover": { bgcolor: "#c5a059", color: "white", borderColor: "#c5a059" },
                    transition: "all 0.4s ease"
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 3, textTransform: "uppercase", letterSpacing: "1px" }}>
              Explore
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["Our Rooms", "Grand Suites", "The Spa", "Fine Dining", "Gallery"].map((item) => (
                <Link key={item} href="#" underline="none" sx={{ color: "#666666", fontSize: "0.9rem", "&:hover": { color: "#c5a059" } }}>
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 3, textTransform: "uppercase", letterSpacing: "1px" }}>
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["Reservations", "Events", "Gift Cards", "Privacy", "Terms"].map((item) => (
                <Link key={item} href="#" underline="none" sx={{ color: "#666666", fontSize: "0.9rem", "&:hover": { color: "#c5a059" } }}>
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 3, textTransform: "uppercase", letterSpacing: "1px" }}>
              Location
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <LocationOn sx={{ color: "#c5a059", fontSize: "1.2rem" }} />
                <Typography variant="body2" sx={{ color: "#666666" }}>
                  123 Luxury Lane, Colombo 07, Sri Lanka
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Phone sx={{ color: "#c5a059", fontSize: "1.2rem" }} />
                <Typography variant="body2" sx={{ color: "#666666" }}>
                  +94 11 999 8888
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Email sx={{ color: "#c5a059", fontSize: "1.2rem" }} />
                <Typography variant="body2" sx={{ color: "#666666" }}>
                  hello@trovixhotel.com
                </Typography>
              </Box>
            </Box>
          </Grid>

        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: "#e5e2dc" }} />

        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" }, 
          justifyContent: "space-between", 
          alignItems: "center", 
          gap: 2 
        }}>
          <Typography variant="caption" sx={{ color: "#999999", textTransform: "uppercase", letterSpacing: "1px" }}>
            &copy; {currentYear} Trovix Luxury Hotel. Part of DevForge Collection.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" underline="none" sx={{ color: "#999999", fontSize: "0.75rem", "&:hover": { color: "#c5a059" } }}>Privacy Policy</Link>
            <Link href="#" underline="none" sx={{ color: "#999999", fontSize: "0.75rem", "&:hover": { color: "#c5a059" } }}>Cookie Policy</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;