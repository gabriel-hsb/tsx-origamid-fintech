import { NavLink } from "react-router-dom";

import {
  ArrowUpDown,
  BadgeDollarSign,
  House,
  LogOut,
  Mail,
  Settings,
} from "lucide-react";

import FintechLogo from "@/assets/FintechLogo";

const SideNav = () => {
  return (
    <aside className="bg-cream-main box">
      <nav className="sticky top-6">
        <NavLink to="/">
          <button className="group">
            <FintechLogo className="mb-5 group-hover:brightness-[150%]" />
          </button>
        </NavLink>
        <ul className="grid grid-cols-2 md:block">
          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary ">
              <House />
            </span>
            <NavLink
              to="/"
              className="flex-1 px-6 py-2 text-lg md:text-xl text-brown-main"
            >
              Summary
            </NavLink>
          </li>

          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary ">
              <BadgeDollarSign />
            </span>
            <NavLink
              to="/sales"
              className="flex-1 px-6 py-2 text-lg md:text-xl text-brown-main"
            >
              Sales
            </NavLink>
          </li>

          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary ">
              <ArrowUpDown />
            </span>
            <a
              className="flex-1 px-6 py-2 text-lg md:text-xl text-brown-main"
              href="http://"
            >
              Webhooks
            </a>
          </li>

          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary ">
              <Settings />
            </span>
            <NavLink
              className="flex-1 px-6 py-2 text-lg md:text-xl text-brown-main"
              to="/settings"
            >
              Settings
            </NavLink>
          </li>

          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary ">
              <Mail />
            </span>
            <a
              className="flex-1 px-6 py-2 text-lg md:text-xl text-brown-main"
              href="http://"
            >
              Mail
            </a>
          </li>

          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary">
              <LogOut />
            </span>
            <a
              className="flex-1 px-6 py-2 text-lg md:text-xl text-brown-main"
              href="http://"
            >
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
