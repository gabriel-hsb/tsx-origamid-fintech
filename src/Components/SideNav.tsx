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
          <button>
            <FintechLogo className="mb-5" />
          </button>
        </NavLink>
        <ul>
          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary ">
              <House />
            </span>
            <NavLink
              to="/"
              className="flex-1 px-6 py-2 text-xl text-brown-main"
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
              className="flex-1 px-6 py-2 text-xl text-brown-main"
            >
              Sales
            </NavLink>
          </li>

          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary ">
              <ArrowUpDown />
            </span>
            <a
              className="flex-1 px-6 py-2 text-xl text-brown-main"
              href="http://"
            >
              Webhooks
            </a>
          </li>

          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary ">
              <Settings />
            </span>
            <a
              className="flex-1 px-6 py-2 text-xl text-brown-main"
              href="http://"
            >
              Settings
            </a>
          </li>

          <li className="flex items-center gap-2 group">
            <span className="flex items-center justify-center rounded-full group-hover:bg-cream-main size-8 bg-cream-secondary ">
              <Mail />
            </span>
            <a
              className="flex-1 px-6 py-2 text-xl text-brown-main"
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
              className="flex-1 px-6 py-2 text-xl text-brown-main"
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
