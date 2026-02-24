import { Box } from "@mui/material"
import Navbar from "../../components/Navbar"
import Home from "../homePage/Home"
import AboutResort from "../aboutPage/About"
import GridLayout from "../../components/GridLayout"
import Banner from "../../components/banners/FacilitiesBanner"
import FacilityPage from "../facilityPage/FacilityPage"


const Layout = () => {
    return (
        <Box>
            <Navbar />
            <Box>
                <div>
                    <Home />
                </div>
                <div>
                    <AboutResort />
                </div>
                <div>
                    <Banner />
                </div>
                <div className="mt-6">
                    <FacilityPage />
                </div>
            </Box>
        </Box>
    )
}

export default Layout