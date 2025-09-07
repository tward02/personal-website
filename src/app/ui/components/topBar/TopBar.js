'use client';

import {
    AppBar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from "react";
import classes from "./topBar.module.css";

const pages = [
    {title: 'Home', link: '/'},
    {title: 'CV', link: '/cv'},
    {title: 'Contact Me', link: '/contact'}
];

const TopBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <header>
            <AppBar position="static">
                <div className={classes.container}>
                    <Toolbar disableGutters sx={{width: '100%', display: 'flex', alignItems: 'center'}}>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            style={{
                                marginRight: '2rem',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Tyler Ward
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, justifyContent: 'flex-end'}}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                                keepMounted
                                transformOrigin={{vertical: 'top', horizontal: 'left'}}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: {xs: 'none', md: 'flex'},
                                justifyContent: 'flex-start',
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    component="a"
                                    href={page.link}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        textAlign: 'center'
                                    }}
                                >
                                    {page.title}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </div>
            </AppBar>
        </header>
    );
};

export default TopBar;
