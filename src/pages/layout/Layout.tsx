import { Box } from "@mui/material"
import Navbar from "../../components/Navbar"
import Home from "../homePage/Home"
import AboutResort from "../aboutPage/About"
import Banner from "../../components/banners/FacilitiesBanner"
import FacilityPage from "../facilityPage/FacilityPage"
import TextLineBanner from "../../components/banners/textLineBanner"
import HotelRooms from "../roomsPackagesPage/roomsPackagesPage"

import ExclusiveOffers from "../exclusive packages/exclusivePage"
import ExclusiveRatings from "../exclusiveRatings/ratingPage"
import OffersPage from "../specialOffers/OffersPage"
import Footer from "../../components/footer/Footer"


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
                <div className="relative p-16">
                    <div className="absolute -bottom-17.5 left-0 right-0">
                        <TextLineBanner />
                    </div>
                </div>

                <div className="pt-8">
                    <ExclusiveOffers />
                </div>
                <div>
                    <HotelRooms />
                </div>
                <div>
                    <ExclusiveRatings />
                </div>
                <div>
                    <OffersPage />

                </div>
                <div className="mt-16">
                    <Footer />
                </div>
            </Box>
        </Box>
    )
}

export default Layout