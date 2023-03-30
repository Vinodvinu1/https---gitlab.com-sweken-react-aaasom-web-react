import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Booking Services",
    href: "/Booking_Services",
    icon: "bi bi-bell",
  },
  {
    title: "Partners",
    href: "/Partner",
    icon: "bi bi-patch-check",
  },
  {
    title: "Services Provider",
    href: "/Service_Provider",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Staff",
    href: "/ui/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Customers",
    href: "/ui/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Information",
    href: "/ui/tables",
    icon: "bi bi-layout-split",
  },
  {
    title: "Offers&Deals",
    href: "/ui/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Bookings",
    href: "/ui/breadcrumbs",
    icon: "bi bi-link",
  },
  {
    title: "Available Regions",
    href: "/about",
    icon: "bi bi-people",
  },
  {
    title: "Mail / SMS",
    href: "/about",
    icon: "bi bi-people",
  },
  {
    title: "SearchByPincode",
    href: "/about",
    icon: "bi bi-people",
  },
  {
    title: "Push Notification",
    href: "/about",
    icon: "bi bi-people",
  },
  {
    title: "ShortURL",
    href: "/about",
    icon: "bi bi-people",
  },
  {
    title: "Menu",
    href: "/about",
    icon: "bi bi-people",
  },
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav ">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href} legacyBehavior>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          {/* <Button
            color="secondary"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-next-js-free-admin-template/"
          >
            Download Free
          </Button> */}
          {/* <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
