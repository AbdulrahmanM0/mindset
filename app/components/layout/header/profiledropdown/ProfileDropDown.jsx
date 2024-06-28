import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Avatar,
  } from "@material-tailwind/react";
   
  export default function ProfileDropDown() {
    return (
      <>
        <div className="mb-3 flex gap-3">
          <Menu placement="bottom-end" className="box_theme">
            <MenuHandler>
                <Avatar
                    size="sm"
                    alt="avatar"
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    className="border border-Neutral-500 shadow-xl  border_theme"
                    />
            </MenuHandler>
            <MenuList className="box_theme">
              <MenuItem className="text_theme">Profile</MenuItem>
              <MenuItem className="text_theme">Sign Out</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </>
    );
  }