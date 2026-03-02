import { Box } from "@mui/material"
import Navbar from "../../components/Navbar"
import Home from "../homePage/Home"
import AboutResort from "../aboutPage/About"
import GridLayout from "../../components/GridLayout"
import Banner from "../../components/banners/FacilitiesBanner"
import FacilityPage from "../facilityPage/FacilityPage"
import TextLineBanner from "../../components/banners/textLineBanner"
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
                <div className="relative">
                    <HotelRooms />
                    <div className="absolute bottom-[-50px] left-0 right-0">
                        <TextLineBanner />
                    </div>
                </div>

                <div>
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