import { Box, Container, Typography } from "@mui/material"
import TitlebarBelowMasonryImageList from "../../components/imageList/TitlebarBelowMasonryImageList"

const FacilityPage = () => {
    return (
        <Container sx={{ marginTop: { xs: "1rem", sm: "3rem", md: "5rem" } }}>
            <Box>
                <Typography variant="h2" className="text-center mt-10 mb-5 text-black/90" sx={{fontFamily: "DM Serif Text", fontSize: "2.5rem"}}>Awesome Facilities</Typography>
                <span className="text-center block text-[#c9a96e]" style={{fontFamily: 'Georgia'}} >Enjoy in resort and facilities</span>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginY: 4,
            }}>
                <TitlebarBelowMasonryImageList />
            </Box>
        </Container>
    )
}

export default FacilityPage