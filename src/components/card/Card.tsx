import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Icon } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.2s ease-in-out' }, cursor: 'pointer' }}>
      <CardActionArea>
        <Icon className="ml-2" sx={{ fontSize: '1.2rem' }} component={ArrowForwardIcon} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
