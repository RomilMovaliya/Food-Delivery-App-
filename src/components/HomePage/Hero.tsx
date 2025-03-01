import { AppBar, Badge, Box, Icon, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Home from './Home';
import Categories from '../categoriesPage/Categories';
import { useState } from 'react';
import HomePage from './HomePage';
const Hero = () => {
    const cartItemCount = 5; // You can replace this with dynamic cart item count if needed

    const [showCategories, setShowCategories] = useState(false);  // State to track whether to show Categories or not

    const onClickHandler = () => {
        setShowCategories(true); // Set to true when clicked to show Categories
    }

    return (
        <>
            <AppBar position="absolute"
                sx={{
                    zIndex: 2,
                    top: 0,
                    width: '100%',
                    backgroundColor: 'transparent'

                }}>

                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingLeft: '10px',
                        alignItems: 'center'
                    }}>

                    <Typography
                        variant="h6"
                        sx={{
                            color: '#FFC300',
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: '20px',
                            ml: 5,
                            lineHeight: '30px'
                        }}>
                        Noodletown
                    </Typography>


                    <Box className="navbar">
                        <ul style={{ display: 'flex', marginRight: '50px', alignItems: 'center' }}>
                            <li style={{ color: 'white', fontFamily: `'Times New Roman', Times, serif`, margin: '15px', listStyle: 'none' }} onClick={onClickHandler}>
                                Menu

                            </li>
                            <li style={{ margin: '15px', listStyle: 'none' }}>
                                <IconButton>
                                    <Badge
                                        badgeContent={cartItemCount}
                                        color='error' // 'error' is still required for the logic, but we will customize the badge itself
                                        sx={{
                                            '.MuiBadge-dot': {
                                                backgroundColor: '#FFC300', // Set the badge color to yellow
                                            },
                                            '.MuiBadge-standard': {
                                                backgroundColor: '#FFC300', // Make sure the content badge is yellow too
                                            },
                                        }}
                                    >
                                        <ShoppingCartIcon sx={{ color: 'white' }} />
                                    </Badge>
                                </IconButton>
                            </li>
                        </ul>
                    </Box>





                </Toolbar>
            </AppBar>

            {/* Conditionally render Categories component */}
            {showCategories && <Categories />}






        </>


    )
}

export default Hero
