import { useEffect } from 'react';
import { 
  Box, Typography, TextField, Button, Grid, Link 
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import AOS from 'aos';
import 'aos/dist/aos.css';
import coconutLogo from "../../../public/offerPageLogo/coconut-white-beach-sand-near-ocean-sunny-summer-day_158538-13548.avif";

const NewsletterSection = () => {
  // AOS සක්‍රීය කිරීම
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const galleryImages = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  ];

  return (
    <Box sx={{ backgroundColor: '#fdfaf5', pt: 10, pb: 0, textAlign: 'center', overflow: 'hidden' }}>
      
      {/* 1. පොල් ගෙඩිය සහ මාතෘකාව (Fade Down Animation) */}
      <Box data-aos="fade-down" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{ mb: 2, width: '70px', height: '70px', overflow: 'hidden', borderRadius: '100%' }}>
          <img 
            src={coconutLogo}
            alt="Icon" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            className='animate-bounce '
          />
        </Box>
        <Typography 
          variant="h3" 
          sx={{ 
            fontFamily: '"DM Serif Text", serif', 
            mb: 4,
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            color: '#232323'
          }}
        >
          Get the amazing offers <br /> into your inbox!
        </Typography>
      </Box>

      {/* 2. Email Box (Zoom In Animation) */}
      <Box 
        data-aos="zoom-in" 
        data-aos-delay="200"
        sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            backgroundColor: '#fff', 
            borderRadius: '50px', 
            padding: '8px 15px',
            boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
            width: { xs: '90%', sm: '550px' },
            alignItems: 'center',
            border: '1px solid #eee'
          }}
        >
          <TextField
            variant="standard"
            placeholder="Enter your email address"
            InputProps={{
              disableUnderline: true,
              sx: { ml: 2, flex: 1, fontSize: '1rem' }
            }}
            fullWidth
          />
          <Button
            variant="text"
            startIcon={<MailOutlineIcon />}
            sx={{ 
              color: '#000', 
              fontWeight: 'bold', 
              px: 3,
              '&:hover': { backgroundColor: 'transparent', opacity: 0.7 }
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      <Typography 
        variant="caption" 
        data-aos="fade-up" 
        data-aos-delay="400"
        sx={{ color: '#888', display: 'block', mb: 10 }}
      >
        We are committed to protecting your <Link href="#" color="inherit" sx={{ fontWeight: '600' }}>privacy policy</Link>
      </Typography>

      {/* 3. Instagram Gallery (Staggered Animation) */}
      <Grid container spacing={0} className="flex items-center justify-center">
      {galleryImages.map((img, index) => (
          <Grid 
            key={index}
            size={{ xs: 12, sm: 6, md: 2 }}
            data-aos="fade-up"
            data-aos-delay={index * 150} // එකින් එක මතු වීමට (stagger effect)
          >
            <Box 
              sx={{ 
                height: '350px', 
                position: 'relative',
                overflow: 'hidden',
                '&:hover img': { transform: 'scale(1.1)' },
                '&:hover .overlay': { opacity: 1 }
              }}
            >
              <img 
                src={img} 
                alt="Gallery" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease' 
                }} 
              />
              
              {/* Hover කරන විට පෙනෙන Overlay එක */}
              <Box 
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  opacity: 0, transition: '0.3s ease'
                }}
              >
                {index === 2 && (
                  <Button 
                    variant="contained" 
                    startIcon={<InstagramIcon />}
                    sx={{ 
                      backgroundColor: '#fff', color: '#000', borderRadius: '50px',
                      textTransform: 'none', fontWeight: '600', px: 3,
                      '&:hover': { backgroundColor: '#f0f0f0' }
                    }}
                  >
                    Follow crafto
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsletterSection;