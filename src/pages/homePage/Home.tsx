import { Box, Button, Icon, Typography } from "@mui/material";
import bg from "../../assets/background/sasha-kaunas-TAgGZWz6Qg8-unsplash.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ActionAreaCard from "../../components/card/Card";

const home = () => {
 
  return (
    <Box
      className="w-full h-100 flex items-center justify-center bg-black/90 relative"
      data-aos="fade-up"
    >
      <Box
        className="flex items-center justify-center flex-col backdrop-blur-2xl"
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          filter: "brightness(0.7)",
        }}
      ></Box>
      <Box className="absolute w-full h-80 flex items-center justify-center flex-col">
        <Typography
          variant="h6"
          className="font-bold text-center text-white"
          sx={{
            fontSize: "1rem",
            letterSpacing: "0.05em",
            fontFamily:
              'Story Script, SF Mono, SF Mono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
          }}
        >
          Luxury space that you can afford
        </Typography>
        <Typography
          variant="h1"
          className="font-bold text-center text-white"
          sx={{
            fontSize: "6rem",
            fontWeight: "bold",
            fontFamily: "DM Serif Text",
          }}
        >
          DADDY
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "4px",
            textTransform: "none",
            px: { xs: 2.5, sm: 3 },
            py: { xs: 1, sm: 1.2 },
            fontFamily: "DM Serif Text",
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            "&:hover": { backgroundColor: "#1a1a1a" },
          }}
        >
          Book Now
          <Icon
            className="ml-2"
            sx={{ fontSize: "1.2rem" }}
            component={ArrowForwardIcon}
          />
        </Button>
        <Typography
          variant="h6"
          className="font-bold text-center text-yellow-300 "
          sx={{
            fontSize: "0.5rem",
            letterSpacing: "0.05em",
            marginTop: "2rem",
            fontFamily:
              'Story Script, SF Mono, SF Mono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
          }}
        >
          Perfect place for your vacation
        </Typography>
      </Box>
      <Box className="absolute flex w-full top-[90%] sm:top-[80%] md:top-[85%] lg:top-[90%] flex-col md:flex-row p-2 items-center justify-center gap-4">
        {[1, 2, 3].map((num) => (
          <ActionAreaCard key={num} />
        ))}
      </Box>
    </Box>
  );
};

export default home;
