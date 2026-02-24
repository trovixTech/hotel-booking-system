import { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

interface ImageItem {
  img: string;
  title: string;
  author: string;
}

export default function TitlebarBelowMasonryImageList() {
  const [selected, setSelected] = useState<ImageItem | null>(null);

  return (
    <>
      <style>{`
        .gallery-item {
          cursor: pointer;
          overflow: hidden;
          border-radius: 6px;
          position: relative;
        }

        .gallery-item img {
          transition: transform 0.4s ease, filter 0.4s ease;
          display: block;
          width: 100%;
        }

        .gallery-item:hover img {
          transform: scale(1.06);
          filter: brightness(0.75);
        }

        .gallery-item .overlay-label {
          position: absolute;
          bottom: 28px;
          left: 0;
          right: 0;
          text-align: center;
          color: white;
          font-family: Georgia, serif;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
          text-shadow: 0 1px 4px rgba(0,0,0,0.6);
        }

        .gallery-item:hover .overlay-label {
          opacity: 1;
          transform: translateY(-10px);
        }

        /* Modal image zoom in */
        @keyframes modalImgIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }

        .modal-img {
          animation: modalImgIn 0.35s ease-out forwards;
        }

        /* Close button pulse */
        .close-btn:hover {
          background: rgba(255,255,255,0.2) !important;
          transform: rotate(90deg);
          transition: transform 0.25s ease, background 0.2s ease;
        }
      `}</style>

      {/* ── Gallery ── */}
      <Box sx={{ width: '90%', height: 450, overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              className="gallery-item overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <span className="overlay-label">View</span>
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* ── Lightbox Modal ── */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        closeAfterTransition
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '90vw',
            maxHeight: '90vh',
          }}
        >
          {selected && (
            <>
              {/* Close button */}
              <IconButton
                className="close-btn"
                onClick={() => setSelected(null)}
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  color: '#fff',
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  zIndex: 10,
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Image */}
              <Box
                sx={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <img
                  className="modal-img"
                  src={`${selected.img}?w=800&fit=crop&auto=format`}
                  alt={selected.title}
                  style={{
                    display: 'block',
                    maxWidth: '80vw',
                    maxHeight: '75vh',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Caption */}
              <Box
                sx={{
                  mt: 2,
                  textAlign: 'center',
                  color: '#fff',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                  }}
                >
                  {selected.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.55)',
                    mt: 0.5,
                    letterSpacing: '0.06em',
                  }}
                >
                  by {selected.author}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}

const itemData = [
  { img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110', title: 'Bed', author: 'swabdesign' },
  { img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31', title: 'Books', author: 'Pavel Nekoranec' },
  { img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6', title: 'Sink', author: 'Charles Deluvio' },
  { img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3', title: 'Kitchen', author: 'Christian Mackie' },
  { img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3', title: 'Blinds', author: 'Darren Richardson' },
  { img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622', title: 'Chairs', author: 'Taylor Simpson' },
  { img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77', title: 'Laptop', author: 'Ben Kolde' },
  { img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61', title: 'Doors', author: 'Philipp Berndt' },
  { img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7', title: 'Coffee', author: 'Jen P.' },
  { img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee', title: 'Storage', author: 'Douglas Sheppard' },
  { img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62', title: 'Candle', author: 'Fi Bell' },
  { img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4', title: 'Coffee table', author: 'Hutomo Abrianto' },
];