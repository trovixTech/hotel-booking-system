import { Box } from "@mui/material"

const GridLayout = () => {
    return (
        <Box className="absolute top-0 z-0 h-screen w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            <div className="border-x-2 border-x-gray-300">.</div>
            <div className="border-r-2 border-r-gray-300"></div>
            <div className="border-r-2 border-r-gray-300"></div>
            <div className="border-r-2 border-r-gray-300"></div>
            <div className="border-r-2 border-r-gray-300"></div>
        </Box>
    )
}

export default GridLayout