import React from 'react';
import { Box, Typography } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';

const TextLineBanner: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          width: { xs: '95%', md: '80%' },
          maxWidth: 1024,
          boxShadow: '0 18px 45px rgba(0,0,0,0.08)',
          borderRadius: '0 999px 999px 0',
          overflow: 'hidden',
          bgcolor: '#ffffff',
        }}
      >
        {/* Left vertical label */}
        <Box
          sx={{
            px: 3,
            minWidth: 80,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#b48a4a',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontSize: 11,
          }}
        >
          <Typography
            component="span"
            sx={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Testimonial
          </Typography>
        </Box>

        {/* Main content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            px: { xs: 3, md: 5 },
            py: { xs: 3, md: 4 },
            gap: { xs: 2, md: 4 },
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              mr: { xs: 1, md: 2 },
              color: '#b48a4a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HotelIcon sx={{ fontSize: 32 }} />
          </Box>

          {/* Quote */}
          <Typography
            variant="body1"
            sx={{
              flex: 1,
              color: '#333',
              fontSize: { xs: 14, md: 16 },
            }}
          >
            Life is shaped by a series of interconnected experiences{' '}
            <Box component="span" sx={{ fontWeight: 600 }}>
              our environments.
            </Box>
          </Typography>

          {/* Signature */}
          <Typography
            variant="h6"
            sx={{
              ml: { xs: 1, md: 3 },
              fontFamily: '"Pacifico", "Segoe Script", cursive',
              fontSize: { xs: 16, md: 22 },
              whiteSpace: 'nowrap',
              color: '#000',
            }}
          >
            Herman miller
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TextLineBanner;

