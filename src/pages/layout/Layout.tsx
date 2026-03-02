import { Box } from "@mui/material"
import Navbar from "../../components/Navbar"
import Home from "../homePage/Home"
import AboutResort from "../aboutPage/About"
import GridLayout from "../../components/GridLayout"
import Banner from "../../components/banners/FacilitiesBanner"
import FacilityPage from "../facilityPage/FacilityPage"

import HotelRooms from "../roomsPackagesPage/roomsPackagesPage"

import ExclusiveOffers from "../exclusive packages/exclusivePage"
import ExclusiveRatings from "../exclusiveRatings/ratingPage"
import OffersPage from "../specialOffers/OffersPage"


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
                <div>

                    <HotelRooms />

                    <ExclusiveOffers />
                </div>
                <div>
                    <ExclusiveRatings />
                </div>
                <div>
                    <OffersPage />

                </div>
            </Box>
        </Box>
    )
}

export default Layout