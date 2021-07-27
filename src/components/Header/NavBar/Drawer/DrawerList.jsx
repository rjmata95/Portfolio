import React from "react";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, ListItemIcon, Divider } from "@material-ui/core";
import { WorkOutline, MailOutline, PersonOutline } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    height: "100%",
    backgroundColor: theme.palette.background.secondary,
  },
  fullList: {
    width: "auto",
  },
  icons: {
    color: theme.palette.secondary.main,
  },
}));

const icons = [<WorkOutline />, <PersonOutline />, <MailOutline />];
const DrawerList = ({ toggleDrawer, menuItems }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon className={classes.icons}>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {icons[index]}
            </ListItemIcon>
            {item}
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default DrawerList;
