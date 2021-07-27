import { makeStyles } from "@material-ui/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
          <ListItem button component={Link} key={index} to={item.props.to}>
            <ListItemIcon className={classes.icons}>
              {item.props.icon}
            </ListItemIcon>
            <ListItemText primary={item.props.children} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default DrawerList;
