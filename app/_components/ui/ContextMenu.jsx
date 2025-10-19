"use client";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function ContextMenu({ items = [] }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MoreVertIcon
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={`hover:text-primary-500 transition-all duration-300 ${
          open ? "text-primary-500" : ""
        }`}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "var(--shadow-custom)",
            border: "1px solid var(--color-gray-300)",
            padding: 0,
          },
          "& .MuiList-root": {
            padding: 0,
          },
        }}
      >
        {items?.map((item, index) => (
          <MenuItem
            key={index}
            onClick={item?.handler}
            sx={{
              fontSize: "14px",
              gap: "0.5rem",
              transition: "all 0.3s",
              "&:hover": {
                color: "var(--color-primary-500)",
              },
            }}
          >
            <item.icon className="!text-lg" />
            {item?.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default ContextMenu;
