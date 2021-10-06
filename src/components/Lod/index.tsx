import { render } from 'react-dom'
import React from 'react'
import Box from "@mui/material/Box";
import Menu, { MenuProps } from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import DownloadIcon from "@mui/icons-material/Download";
import MenuItem from "@mui/material/MenuItem";
import Demo2 from './LodControl'
import TextField from "@mui/material/TextField";
import {RangeStepInput} from 'react-range-step-input';
import { styled, alpha } from "@mui/material/styles";

import './style.scss'

const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

export default function LodControl() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Box className="lod-wrap">
        <Button
        id="download-button"
        
        aria-controls="lod-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
          
        <Avatar className="expand-lod">
          <DownloadIcon />
        </Avatar>
        </Button>
        <StyledMenu
        id="lod-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
      
        
        <MenuItem className="nav-item">
        <h4>LOD Control</h4>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <Demo2 />
        <MenuItem className="btn">
            <Button type="submit" id="apply-btn" onClick={LodControl}>
                Apply
            </Button >

            <Button id="cancel-btn" onClick={handleClose} >
                Cancel
            </Button>
        </MenuItem>
        </StyledMenu>
      </Box>
    );
    
  }
  
