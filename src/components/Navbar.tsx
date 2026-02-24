import { Box, Icon, Button, useMediaQuery } from "@mui/material";
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const Navbar = () => {
    const time = new Date().toLocaleTimeString();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <nav className="navbar shadow-lg z-10">
    <Box sx={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'end',
        paddingRight: '1rem',
        paddingY: '0.5rem',
        backgroundColor: 'rgba(190,190,255,0.1)',
        flexWrap: 'wrap',
        
    }}>
        
        <Icon className="hover:text-yellow-300 transition-colors duration-200" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' }, cursor: 'pointer' }} component={SettingsPhoneIcon} />
        <span className="text-xs md:text-[0.6rem] font-medium hidden md:inline">+1 234 567 890</span>
        <span className="text-xs md:text-[0.6rem] font-medium hidden md:inline">{time}</span>
    </Box>
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '0.7rem 1rem', md: '0.7rem 2rem' },
        backgroundColor: 'transparent',
    }}>
      <div className="navbar__logo text-black text-xl md:text-2xl font-bold tracking-wide">LOGO</div>
      
      {isMobile ? (
        <Button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          sx={{ color: 'black', minWidth: 'auto', padding: 0 }}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
      ) : (
        <ul className="navbar__links flex">
          <li><Button variant="text" sx={{ color: 'black', fontWeight: 'bold', fontSize: '0.7rem', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', color: 'yellow' } }}>Home</Button></li>
          <li><Button variant="text" sx={{ color: 'black', fontWeight: 'bold', fontSize: '0.7rem', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', color: 'yellow' } }}>About</Button></li>
          <li><Button variant="text" sx={{ color: 'black', fontWeight: 'bold', fontSize: '0.7rem', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', color: 'yellow' } }}>Contact</Button></li>
        </ul>
      )}
    </Box>

    {isMobile && mobileMenuOpen && (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderTop: '1px solid rgba(0,0,0,0.1)',
      }}>
        <Button fullWidth variant="text" sx={{ color: 'black', fontWeight: 'bold', justifyContent: 'flex-start', paddingX: 2, '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', color: 'yellow' } }}>Home</Button>
        <Button fullWidth variant="text" sx={{ color: 'black', fontWeight: 'bold', justifyContent: 'flex-start', paddingX: 2, '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', color: 'yellow' } }}>About</Button>
        <Button fullWidth variant="text" sx={{ color: 'black', fontWeight: 'bold', justifyContent: 'flex-start', paddingX: 2, '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', color: 'yellow' } }}>Contact</Button>
      </Box>
    )}
    </nav>
  );
};

export default Navbar;