import React from "react";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "../../menuItem";
import {FaCalendar, FaDashcube, FaFileAlt, FaProjectDiagram, FaUniversity, FaUser} from "react-icons/fa";
import {FaFileShield} from "react-icons/fa6";
// chakra imports

export const SidebarLinks = (props: { routes: RoutesType[]}): JSX.Element => {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes: RoutesType[]) => {
    return <div>
      <nav className="hs-accordion-group p-4 w-full flex flex-col flex-wrap">
        <ul className="space-y-1.5">
          <MenuItem
              icon={<FaDashcube/>}
              title="Dashboard"
          />

          {/* Users */}
          <MenuItem
              title="Users"
              icon={<FaUser/>}
              isAccordion
          >
            {/* Sub Menu 1 */}
            <MenuItem
                title="Sub Menu 1"
                isAccordion
            >
              <MenuItem title="Link 1" />
              <MenuItem title="Link 2" />
              <MenuItem title="Link 3" />
            </MenuItem>

            {/* Sub Menu 2 */}
            <MenuItem
                title="Sub Menu 2"
                isAccordion
            >
              <MenuItem title="Link 1" />
              <MenuItem title="Link 2" />
              <MenuItem title="Link 3" />
            </MenuItem>
          </MenuItem>

          {/* Account */}
          <MenuItem
              title="Account"
              icon={ <FaUniversity/>}
              isAccordion
          >
            <MenuItem title="Link 1" />
            <MenuItem title="Link 2" />
            <MenuItem title="Link 3" />
          </MenuItem>

          {/* Projects */}
          <MenuItem
              title="Projects"
              icon={ <FaProjectDiagram/>}
              isAccordion
          >
            <MenuItem title="Link 1" />
            <MenuItem title="Link 2" />
            <MenuItem title="Link 3" />
          </MenuItem>

          {/* Calendar */}
          <MenuItem
              title="Calendar"
              icon={<FaCalendar/>}
          />

          {/* Documentation */}
          <MenuItem
              title="Documentation"
              icon={<FaFileAlt/>}
          />
        </ul>
      </nav>
    </div>
  };
  // BRAND
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
