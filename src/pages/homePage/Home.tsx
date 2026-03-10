import React, { useState } from "react";
import { Box, Button, Typography, Popover, IconButton } from "@mui/material";
import bg from "../../assets/background/sasha-kaunas-TAgGZWz6Qg8-unsplash.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Home = () => {
  const [checkIn, setCheckIn] = useState("2026-03-10");
  const [checkOut, setCheckOut] = useState("2026-03-11");
  const [guests, setGuests] = useState({ rooms: 1, adults: 2, children: 0 });
  const [promoCode, setPromoCode] = useState("");
  
  const [anchorEl, setAnchorEl] = useState(null);
  const handleGuestClick = (event) => setAnchorEl(event.currentTarget);
  const handleGuestClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const handleSearch = () => {
    alert(`Searching for ${guests.adults} adults...`);
  };

  return (
    <Box className="w-full h-screen relative flex flex-col items-center overflow-hidden">
      {/* Background Image Layer */}
      <Box 
        className="absolute inset-0 z-0" 
        sx={{ 
          backgroundImage: `url(${bg})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          filter: "brightness(0.6)" 
        }} 
      />

      {/* --- Middle Section: Hero Text --- */}
      <Box className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4">
        <Typography variant="h6" className="text-white" sx={{ fontFamily: 'Story Script, cursive', mb: 1, fontSize: "1.2rem" }}>
          Luxury space that you can afford
        </Typography>
        <Typography variant="h1" className="font-bold text-white mb-6" sx={{ fontFamily: "DM Serif Text", fontSize: { xs: "4rem", md: "8rem" } }}>
          DADDY
        </Typography>
        <Button variant="contained" sx={{ bgcolor: "#333", borderRadius: "4px", px: 4, py: 1.5, "&:hover": { bgcolor: "#111" } }}>
          Book Now <ArrowForwardIcon sx={{ ml: 1, fontSize: "1.2rem" }} />
        </Button>
      </Box>

      {/* --- Bottom Section: Search Bar & Footer Text --- */}
      <Box className="relative z-10 w-full max-w-7xl px-4 pb-25 flex flex-col items-center">
        
        {/* View Offers Link */}
        <Box className="w-full flex justify-end mb-2">
          <Typography className="text-white flex items-center cursor-pointer hover:underline text-sm font-medium">
            View Offers <ChevronRightIcon fontSize="small" />
          </Typography>
        </Box>

        {/* The Bar */}
        <Box className="bg-white/95 backdrop-blur-sm w-full flex flex-col md:flex-row items-stretch shadow-2xl" sx={{ borderRadius: '2px' }}>
          
          {/* 1. Date Picker */}
          <Box className="flex-[1.5] flex items-center border-r border-gray-200 px-4 py-3 gap-2">
            <CalendarTodayIcon className="text-gray-500" fontSize="small" />
            <div className="flex flex-col">
              <label className="text-[10px] text-gray-400 uppercase font-bold">Check-in</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="text-sm font-semibold outline-none border-none bg-transparent" />
            </div>
            <div className="mx-2 h-8 w-[1px] bg-gray-200" />
            <div className="flex flex-col">
              <label className="text-[10px] text-gray-400 uppercase font-bold">Check-out</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="text-sm font-semibold outline-none border-none bg-transparent" />
            </div>
          </Box>

          {/* 2. Guest Selection */}
          <Box className="flex-1 flex items-center border-r border-gray-200 px-4 py-3 gap-3 cursor-pointer hover:bg-gray-50 transition" onClick={handleGuestClick}>
            <PersonOutlineIcon className="text-gray-500" />
            <div>
              <Typography className="text-[10px] text-gray-400 uppercase font-bold">Guests & Rooms</Typography>
              <Typography className="text-sm font-semibold truncate">
                {guests.rooms} Room, {guests.adults} Adults
              </Typography>
            </div>
          </Box>

          {/* 3. Special Code */}
          <Box className="flex-1 flex items-center px-4 py-3 gap-3">
            <LocalOfferIcon className="text-gray-500" fontSize="small" />
            <div className="w-full">
              <Typography className="text-[10px] text-gray-400 uppercase font-bold">Special Code</Typography>
              <input type="text" placeholder="Enter Code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} className="text-sm font-semibold outline-none border-none w-full bg-transparent" />
            </div>
          </Box>

          {/* 4. Search Button */}
          <Button onClick={handleSearch} variant="contained" className="px-12 py-5 md:py-0" sx={{ bgcolor: "#856424", borderRadius: 0, fontWeight: "bold", fontSize: "1rem", "&:hover": { bgcolor: "#634a1b" } }}>
            SEARCH
          </Button>
        </Box>

        {/* Footer Text */}
        <Typography variant="h6" className="text-yellow-300 mt-6" sx={{ fontSize: "0.8rem", letterSpacing: "0.2em", fontFamily: 'Story Script, cursive' }}>
          Perfect place for your vacation
        </Typography>
      </Box>

      {/* Guest Selector Popover (Logic remains the same) */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleGuestClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        PaperProps={{ sx: { p: 3, width: 280, mb: 1 } }}
      >
        {['rooms', 'adults', 'children'].map((type) => (
          <Box key={type} className="flex justify-between items-center mb-3 last:mb-0">
            <Typography className="capitalize font-medium">{type}</Typography>
            <Box className="flex items-center gap-3">
              <IconButton size="small" onClick={() => setGuests({...guests, [type]: Math.max(0, guests[type] - 1)})} disabled={type !== 'children' && guests[type] <= 1}>
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography>{guests[type]}</Typography>
              <IconButton size="small" onClick={() => setGuests({...guests, [type]: guests[type] + 1})}>
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Popover>
    </Box>
  );
};

export default Home;