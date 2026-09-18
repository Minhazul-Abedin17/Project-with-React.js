
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaTrophy,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
                <FaTrophy className="text-xl" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-white">
                  BPL Auction
                </h2>

                <p className="text-xs text-slate-400">
                  Build Your Dream XI
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Build your ultimate cricket team by selecting your favorite
              players, managing your coins, and creating your dream BPL XI.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-1 hover:bg-primary hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-1 hover:bg-primary hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-1 hover:bg-primary hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-1 hover:bg-primary hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Available Players
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Selected Players
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  My Dream XI
                </a>
              </li>
            </ul>
          </div>

          {/* Auction */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Auction
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Player Prices
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Team Building
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Auction Rules
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-primary" />
                <span>support@bplauction.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone className="mt-1 text-primary" />
                <span>+880 1973028006</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <span>Chattogram, Bangladesh</span>
              </div>

            </div>

            {/* Small CTA */}
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm font-semibold text-white">
                Ready to build your team?
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Pick your players and create your Dream XI.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-slate-500 md:flex-row md:text-left lg:px-8">

          <p>
            © 2026 BPL Auction. All rights reserved.
          </p>

          <p>
            🏏 Built with passion for cricket lovers.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
