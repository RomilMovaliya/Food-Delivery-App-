import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import leftsideimg from '../../assets/Images/left-side.png'
import rightsideimg from '../../assets/Images/right-side.png'
import pizo2 from '../../assets/Images/pizo2.png'
const PopularRecipes = () => {

    const [value, setvalue] = React.useState(0);


    const handleTabChange = (e: React.SyntheticEvent, newValue: number) => {
        setvalue(newValue);
    };

    return (
        <div>
            <Box id="recipes" sx={{
                marginTop: '40px'
            }}>
                {/* <Box className="content">
                    <Typography fontSize={38} fontWeight={700} sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4rem',
                        position: 'relative'
                    }}>Popular Recipes</Typography>

                    <nav id="tabs">
                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            gap: '2rem'
                        }}>
                            <li style={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: '#ECEEF6'
                            }} className="current">

                                <a style={{
                                    color: 'black',
                                    textDecoration: 'none'
                                }} href="" id="pizza" className="text-white">Pizza</a></li>

                            <li style={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: '#ECEEF6'
                            }} className="current">

                                <a style={{
                                    color: 'black',
                                    textDecoration: 'none'
                                }} href="" id="pizza" className="text-white">Sides</a></li>

                            <li style={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: '#ECEEF6'
                            }} className="current">

                                <a style={{
                                    color: 'black',
                                    textDecoration: 'none'
                                }} href="" id="pizza" className="text-white">Chicken</a></li>

                            <li style={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: '#ECEEF6'
                            }} className="current">

                                <a style={{
                                    color: 'black',
                                    textDecoration: 'none'
                                }} href="" id="pizza" className="text-white">Dessert</a></li>

                            <li style={{
                                padding: '1rem 3rem',
                                borderRadius: '2rem',
                                backgroundColor: '#ECEEF6',
                            }} className="current">

                                <a style={{
                                    color: 'black',
                                    textDecoration: 'none'
                                }} href="" id="pizza" className="text-white">Drinks</a></li>

                        </ul>
                    </nav>
                </Box> */}



                {/* Tabs */}
                <Box className="content">
                    <Typography fontSize={38} fontWeight={700} sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4rem',
                        position: 'relative'
                    }}>Popular Recipes</Typography>
                    <Box id="tabs" sx={{ display: 'flex', justifyContent: 'center' }}>

                        <Tabs value={value} onChange={handleTabChange} textColor="inherit" indicatorColor="primary">
                            <Tab
                                label="Pizza"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 0 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 0 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',
                                }}
                            />
                            <Tab
                                label="Sides"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 1 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 1 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',
                                }}
                            />
                            <Tab
                                label="Chicken"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 2 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 2 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',
                                }}
                            />
                            <Tab
                                label="Dessert"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 3 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 3 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',
                                }}
                            />
                            <Tab
                                label="Drinks"
                                sx={{
                                    padding: '1rem 3rem',
                                    borderRadius: '2rem',
                                    backgroundColor: value === 4 ? '#FFC300' : '#ECEEF6', // Compare with value for this tab
                                    color: value === 4 ? 'white' : 'black',
                                    '&:hover': { backgroundColor: '#FFC300' },
                                    transition: 'background-color 0.3s ease',
                                }}
                            />
                        </Tabs>
                    </Box>

                    <Box className="carousal py-2" sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },

                    }} >
                        <Box className="card1" sx={{
                            marginLeft: '2rem',
                            flex: '1 0 18%',
                            padding: '2rem 1rem',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: '2px solid #ECEEF6',
                            borderRadius: '1rem',

                            '&:last-child': {
                                marginRight: '2rem',
                            },
                        }}>
                            <Box component='img' className="item-image" src={pizo2} alt="" sx={{
                                height: '8rem',
                                width: '8rem',
                                marginBottom: '2rem',
                                objectFit: 'cover'
                            }} />
                            <Box className="title-and-time" sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h3 className="item">Eatalian pizza</h3>
                                <p className="light-text">32mins</p>
                            </Box>
                            <Typography className="description light-text" sx={{
                                alignSelf: 'flex-start',
                                marginBottom: '2rem'
                            }}>Dough, Mozzarella, Cheddar, Blue, Parmesan</Typography>
                            <Typography className="price" fontSize={24} fontWeight={400} >5000NGN</Typography>

                            <Box className="triangle" sx={{
                                position: 'absolute',
                                bottom: '-1.5rem',
                                left: '40%',
                                transform: 'rotate(45deg)',
                                height: '3rem',
                                width: '3rem',
                                backgroundColor: 'white',
                                borderRight: '2px solid #ECEEF6',
                                borderBottom: '2px solid #ECEEF6',
                                borderRadius: '0.5rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Box className="circle" sx={{
                                    transform: 'rotate(-45deg)',
                                    backgroundColor: 'white',
                                    border: '2px solid #ECEEF6',
                                    padding: '0.rem 0.5rem',
                                    borderRadius: '50%',

                                    '&:hover': {
                                        backgroundColor: '#FFC300',
                                    },
                                }}>
                                    <Box component='img' className="shopping-bag" src="./images/shopping-bag.png" alt="" />
                                </Box>
                            </Box>
                        </Box>



                        <Box className="card1" sx={{
                            marginLeft: '2rem',
                            flex: '1 0 18%',
                            padding: '2rem 1rem',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: '2px solid #ECEEF6',
                            borderRadius: '1rem',

                            '&:last-child': {
                                marginRight: '2rem',
                            },
                        }}>
                            <Box component='img' className="item-image" src={pizo2} alt="" sx={{
                                height: '8rem',
                                width: '8rem',
                                marginBottom: '2rem',
                                objectFit: 'cover'
                            }} />
                            <Box className="title-and-time" sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h3 className="item">Eatalian pizza</h3>
                                <p className="light-text">32mins</p>
                            </Box>
                            <Typography className="description light-text" sx={{
                                alignSelf: 'flex-start',
                                marginBottom: '2rem'
                            }}>Dough, Mozzarella, Cheddar, Blue, Parmesan</Typography>
                            <Typography className="price" fontSize={24} fontWeight={400} >5000NGN</Typography>

                            <Box className="triangle" sx={{
                                position: 'absolute',
                                bottom: '-1.5rem',
                                left: '40%',
                                transform: 'rotate(45deg)',
                                height: '3rem',
                                width: '3rem',
                                backgroundColor: 'white',
                                borderRight: '2px solid #ECEEF6',
                                borderBottom: '2px solid #ECEEF6',
                                borderRadius: '0.5rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Box className="circle" sx={{
                                    transform: 'rotate(-45deg)',
                                    backgroundColor: 'white',
                                    border: '2px solid #ECEEF6',
                                    padding: '0.rem 0.5rem',
                                    borderRadius: '50%',

                                    '&:hover': {
                                        backgroundColor: '#FFC300',
                                    },
                                }}>
                                    <Box component='img' className="shopping-bag" src="./images/shopping-bag.png" alt="" />
                                </Box>
                            </Box>
                        </Box>


                        <Box className="card1" sx={{
                            marginLeft: '2rem',
                            flex: '1 0 18%',
                            padding: '2rem 1rem',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: '2px solid #ECEEF6',
                            borderRadius: '1rem',

                            '&:last-child': {
                                marginRight: '2rem',
                            },
                        }}>
                            <Box component='img' className="item-image" src={pizo2} alt="" sx={{
                                height: '8rem',
                                width: '8rem',
                                marginBottom: '2rem',
                                objectFit: 'cover'
                            }} />
                            <Box className="title-and-time" sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h3 className="item">Eatalian pizza</h3>
                                <p className="light-text">32mins</p>
                            </Box>
                            <Typography className="description light-text" sx={{
                                alignSelf: 'flex-start',
                                marginBottom: '2rem'
                            }}>Dough, Mozzarella, Cheddar, Blue, Parmesan</Typography>
                            <Typography className="price" fontSize={24} fontWeight={400} >5000NGN</Typography>

                            <Box className="triangle" sx={{
                                position: 'absolute',
                                bottom: '-1.5rem',
                                left: '40%',
                                transform: 'rotate(45deg)',
                                height: '3rem',
                                width: '3rem',
                                backgroundColor: 'white',
                                borderRight: '2px solid #ECEEF6',
                                borderBottom: '2px solid #ECEEF6',
                                borderRadius: '0.5rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Box className="circle" sx={{
                                    transform: 'rotate(-45deg)',
                                    backgroundColor: 'white',
                                    border: '2px solid #ECEEF6',
                                    padding: '0.rem 0.5rem',
                                    borderRadius: '50%',

                                    '&:hover': {
                                        backgroundColor: '#FFC300',
                                    },
                                }}>
                                    <Box component='img' className="shopping-bag" src="./images/shopping-bag.png" alt="" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="card1" sx={{
                        marginLeft: '2rem',
                        flex: '1 0 18%',
                        padding: '2rem 1rem',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '2px solid #ECEEF6',
                        borderRadius: '1rem',

                        '&:last-child': {
                            marginRight: '2rem',
                        },
                    }}>
                        <Box component='img' className="item-image" src={pizo2} alt="" sx={{
                            height: '8rem',
                            width: '8rem',
                            marginBottom: '2rem',
                            objectFit: 'cover'
                        }} />
                        <Box className="title-and-time" sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <h3 className="item">Eatalian pizza</h3>
                            <p className="light-text">32mins</p>
                        </Box>
                        <Typography className="description light-text" sx={{
                            alignSelf: 'flex-start',
                            marginBottom: '2rem'
                        }}>Dough, Mozzarella, Cheddar, Blue, Parmesan</Typography>
                        <Typography className="price" fontSize={24} fontWeight={400} >5000NGN</Typography>

                        <Box className="triangle" sx={{
                            position: 'absolute',
                            bottom: '-1.5rem',
                            left: '40%',
                            transform: 'rotate(45deg)',
                            height: '3rem',
                            width: '3rem',
                            backgroundColor: 'white',
                            borderRight: '2px solid #ECEEF6',
                            borderBottom: '2px solid #ECEEF6',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box className="circle" sx={{
                                transform: 'rotate(-45deg)',
                                backgroundColor: 'white',
                                border: '2px solid #ECEEF6',
                                padding: '0.rem 0.5rem',
                                borderRadius: '50%',

                                '&:hover': {
                                    backgroundColor: '#FFC300',
                                },
                            }}>
                                <Box component='img' className="shopping-bag" src="./images/shopping-bag.png" alt="" />
                            </Box>
                        </Box>
                    </Box>


                    <Box className="card1" sx={{
                        marginLeft: '2rem',
                        flex: '1 0 18%',
                        padding: '2rem 1rem',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '2px solid #ECEEF6',
                        borderRadius: '1rem',

                        '&:last-child': {
                            marginRight: '2rem',
                        },
                    }}>
                        <Box component='img' className="item-image" src={pizo2} alt="" sx={{
                            height: '8rem',
                            width: '8rem',
                            marginBottom: '2rem',
                            objectFit: 'cover'
                        }} />
                        <Box className="title-and-time" sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <h3 className="item">Eatalian pizza</h3>
                            <p className="light-text">32mins</p>
                        </Box>
                        <Typography className="description light-text" sx={{
                            alignSelf: 'flex-start',
                            marginBottom: '2rem'
                        }}>Dough, Mozzarella, Cheddar, Blue, Parmesan</Typography>
                        <Typography className="price" fontSize={24} fontWeight={400} >5000NGN</Typography>

                        <Box className="triangle" sx={{
                            position: 'absolute',
                            bottom: '-1.5rem',
                            left: '40%',
                            transform: 'rotate(45deg)',
                            height: '3rem',
                            width: '3rem',
                            backgroundColor: 'white',
                            borderRight: '2px solid #ECEEF6',
                            borderBottom: '2px solid #ECEEF6',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box className="circle" sx={{
                                transform: 'rotate(-45deg)',
                                backgroundColor: 'white',
                                border: '2px solid #ECEEF6',
                                padding: '0.rem 0.5rem',
                                borderRadius: '50%',

                                '&:hover': {
                                    backgroundColor: '#FFC300',
                                },
                            }}>
                                <Box component='img' className="shopping-bag" src="./images/shopping-bag.png" alt="" />
                            </Box>
                        </Box>
                    </Box>


                    <Box className="card1" sx={{
                        marginLeft: '2rem',
                        flex: '1 0 18%',
                        padding: '2rem 1rem',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '2px solid #ECEEF6',
                        borderRadius: '1rem',

                        '&:last-child': {
                            marginRight: '2rem',
                        },
                    }}>
                        <Box component='img' className="item-image" src={pizo2} alt="" sx={{
                            height: '8rem',
                            width: '8rem',
                            marginBottom: '2rem',
                            objectFit: 'cover'
                        }} />
                        <Box className="title-and-time" sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <h3 className="item">Eatalian pizza</h3>
                            <p className="light-text">32mins</p>
                        </Box>
                        <Typography className="description light-text" sx={{
                            alignSelf: 'flex-start',
                            marginBottom: '2rem'
                        }}>Dough, Mozzarella, Cheddar, Blue, Parmesan</Typography>
                        <Typography className="price" fontSize={24} fontWeight={400} >5000NGN</Typography>

                        <Box className="triangle" sx={{
                            position: 'absolute',
                            bottom: '-1.5rem',
                            left: '40%',
                            transform: 'rotate(45deg)',
                            height: '3rem',
                            width: '3rem',
                            backgroundColor: 'white',
                            borderRight: '2px solid #ECEEF6',
                            borderBottom: '2px solid #ECEEF6',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box className="circle" sx={{
                                transform: 'rotate(-45deg)',
                                backgroundColor: 'white',
                                border: '2px solid #ECEEF6',
                                padding: '0.rem 0.5rem',
                                borderRadius: '50%',

                                '&:hover': {
                                    backgroundColor: '#FFC300',
                                },
                            }}>
                                <Box component='img' className="shopping-bag" src="./images/shopping-bag.png" alt="" />
                            </Box>
                        </Box>
                    </Box>


                    <Box className="card1" sx={{
                        marginLeft: '2rem',
                        flex: '1 0 18%',
                        padding: '2rem 1rem',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '2px solid #ECEEF6',
                        borderRadius: '1rem',

                        '&:last-child': {
                            marginRight: '2rem',
                        },
                    }}>
                        <Box component='img' className="item-image" src={pizo2} alt="" sx={{
                            height: '8rem',
                            width: '8rem',
                            marginBottom: '2rem',
                            objectFit: 'cover'
                        }} />
                        <Box className="title-and-time" sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <h3 className="item">Eatalian pizza</h3>
                            <p className="light-text">32mins</p>
                        </Box>
                        <Typography className="description light-text" sx={{
                            alignSelf: 'flex-start',
                            marginBottom: '2rem'
                        }}>Dough, Mozzarella, Cheddar, Blue, Parmesan</Typography>
                        <Typography className="price" fontSize={24} fontWeight={400} >5000NGN</Typography>

                        <Box className="triangle" sx={{
                            position: 'absolute',
                            bottom: '-1.5rem',
                            left: '40%',
                            transform: 'rotate(45deg)',
                            height: '3rem',
                            width: '3rem',
                            backgroundColor: 'white',
                            borderRight: '2px solid #ECEEF6',
                            borderBottom: '2px solid #ECEEF6',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box className="circle" sx={{
                                transform: 'rotate(-45deg)',
                                backgroundColor: 'white',
                                border: '2px solid #ECEEF6',
                                padding: '0.rem 0.5rem',
                                borderRadius: '50%',

                                '&:hover': {
                                    backgroundColor: '#FFC300',
                                },
                            }}>
                                <Box component='img' className="shopping-bag" src="./images/shopping-bag.png" alt="" />
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </div>
    )
}

export default PopularRecipes






