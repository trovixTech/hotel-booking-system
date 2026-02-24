import { Box, Typography, Icon } from "@mui/material";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

const Banner = () => {
  const facilities = [
    { facility: "Swimming Pool" },
    { facility: "Spa and Wellness Center" },
    { facility: "Fitness Center" },
    { facility: "Restaurant and Bar" },
  ];

  // Duplicate items to create seamless infinite loop
  const loopedFacilities = [...facilities, ...facilities, ...facilities];

  return (
    <>
      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          background-color: #e5e7eb;
          margin-top: 1.5rem;
          position: relative;
        }

        /* subtle fade edges */
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #e5e7eb, transparent);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #e5e7eb, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          border-right: 1px solid #d1d5db;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .marquee-star {
          color: #c9a96e;
          font-size: 1.5rem !important;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .marquee-item:hover .marquee-star {
          transform: rotate(20deg) scale(1.25);
          color: #a07840 !important;
        }
      `}</style>

      <Box className="marquee-wrapper">
        <Box className="marquee-track">
          {loopedFacilities.map((item, index) => (
            <Box key={index} className="marquee-item">
              <Icon
                className="marquee-star"
                component={StarBorderPurple500Icon}
              />
              <Typography
                sx={{
                  fontFamily: "Georgia",
                  fontSize: "0.8rem",
                  color: "#4b5563",
                  fontWeight: 600,
                }}
              >
                {item.facility}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Banner;