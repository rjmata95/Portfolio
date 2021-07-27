import NavBar from "./NavBar";
import { Avatar, Typography } from "@material-ui/core";
import Link from "../../styles/Global/Link";
import { avatar as avatarRay } from "../../constants/constants";
import usePageTitle from "../../hooks/usePageTitle";
import { WorkOutline, MailOutline, PersonOutline } from "@material-ui/icons";

const Header = () => {
  const title = usePageTitle("RAYNULFO MATA");

  return (
    <>
      <NavBar
        logo={
          <Link to="/">
            <Avatar alt={"Avatar Ray"} src={avatarRay} />
          </Link>
        }
        title={<Typography>{title}</Typography>}
        menuItems={[
          <Link to="/projects" icon={<WorkOutline />}>
            Projects
          </Link>,
          <Link to="/about" icon={<PersonOutline />}>
            About me
          </Link>,
          <Link to="/contact" icon={<MailOutline />}>
            Contact
          </Link>,
        ]}
      />
    </>
  );
};

export default Header;
