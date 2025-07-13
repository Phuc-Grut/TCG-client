import React, { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 200) {
          setIsScrolled(true);
        } else if (currentScrollY < 50) {
          setIsScrolled(false);
        }
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <header
      className={`relative w-full overflow-hidden sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "shadow-2xl backdrop-blur-xl" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-orange-400/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-400/15 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 left-1/3 w-8 h-8 bg-blue-300/10 rounded-full blur-md animate-ping"></div>
          <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-purple-300/10 rounded-full blur-lg animate-pulse"></div>
        </div>
      </div>

      <div
        className={`relative z-10 backdrop-blur-md bg-white/10 border-b border-white/20 transition-all duration-500 overflow-hidden ${
          isScrolled
            ? "max-h-0 py-0 opacity-0 -translate-y-full"
            : "max-h-96 py-4 opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto">
              <div className="group flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-amber-400/50 transition-all duration-500 group-hover:rotate-12">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white group-hover:scale-110 transition-transform duration-300"
                    >
                      <path
                        d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-green-400/50 rounded-full animate-pulse"></div>
                </div>

                <div className="flex flex-col relative z-10">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider group-hover:text-amber-200 transition-colors duration-300">
                    HOTLINE HỖ TRỢ
                  </span>
                  <span className="text-lg font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    0935 772 929
                  </span>
                </div>

                <div
                  className="absolute top-2 right-2 w-2 h-2 bg-amber-300/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Email with wave effect */}
              <div className="group flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
                {/* Wave background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>

                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-400/50 transition-all duration-500 group-hover:rotate-12 relative z-10">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Email notification badge */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce opacity-80"></div>
                </div>

                <div className="flex flex-col relative z-10">
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-300">
                    EMAIL LIÊN HỆ
                  </span>
                  <span className="text-lg font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    contact@gttjsc.vn
                  </span>
                </div>

                {/* Floating dots */}
                <div className="absolute bottom-2 right-4 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-2 w-1 h-1 bg-cyan-300/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Address with location pin effect */}
              <div className="group flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
                {/* Gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-400/50 transition-all duration-500 group-hover:rotate-12 relative z-10">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Location pulse rings */}
                  <div className="absolute inset-0 border-2 border-purple-300/50 rounded-2xl animate-ping"></div>
                  <div className="absolute inset-0 border border-pink-300/30 rounded-2xl animate-pulse"></div>
                </div>

                <div className="flex flex-col relative z-10">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider group-hover:text-purple-200 transition-colors duration-300">
                    VĂN PHÒNG
                  </span>
                  <span className="text-lg font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    Hà Nội, Việt Nam
                  </span>
                  <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Hưng Phúc, Yên Sở
                  </span>
                </div>

                {/* Map pin animation */}
                <div
                  className="absolute top-1 right-1 w-2 h-2 bg-purple-300/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>

            {/* Status indicator */}
            <div className="hidden lg:flex items-center gap-2 bg-green-500/20 backdrop-blur-md rounded-full px-4 py-2 border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-300 font-semibold">
                ONLINE 24/7
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with enhanced curved bottom */}
      <div className="relative z-10 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 overflow-hidden">
        {/* Enhanced curved background pattern */}
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 w-full h-20"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L1440 120L1440 0C1200 40 960 60 720 40C480 20 240 40 0 0V120Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
          <svg
            className="absolute bottom-0 w-full h-16"
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80L1440 80L1440 20C1200 0 960 40 720 20C480 0 240 20 0 40V80Z"
              fill="white"
              fillOpacity="0.05"
            />
          </svg>
          {/* Additional decorative waves */}
          <svg
            className="absolute bottom-0 w-full h-8"
            viewBox="0 0 1440 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40L1440 40L1440 10C1200 20 960 0 720 10C480 20 240 0 0 20V40Z"
              fill="white"
              fillOpacity="0.03"
            />
          </svg>
        </div>

        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-500 ${
            isScrolled ? "py-4" : "py-6"
          }`}
        >
          <div className="flex items-center justify-between gap-6">
            {/* Logo with enhanced modern design */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                {/* Main logo container */}
                <div className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-white/50 transition-all duration-500 group-hover:scale-110 border border-white/30 p-2">
                  <img
                    src="/logo_.png"
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Enhanced floating notification dot */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Multiple rotating rings */}
                <div
                  className="absolute inset-0 w-16 h-16 border-2 border-white/30 rounded-3xl animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute inset-0 w-16 h-16 border border-white/20 rounded-3xl animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                ></div>
              </div>

              <div className="text-white flex flex-col justify-center">
                <h1 className="text-sm md:text-base font-black tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                    Toàn Cầu
                  </span>
                </h1>
                <span className="text-xs text-white font-semibold tracking-wide mt-0.5">
                  Technology & Trading
                </span>
              </div>
            </div>

            {/* Navigation with compact design */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md rounded-full px-2 py-2 border border-white/30">
                {[
                  { name: "TRANG CHỦ", href: "#home", active: true },
                  { name: "GIẢI PHÁP", href: "#linh-vuc-hoat-dong" },
                  { name: "SẢN PHẨM", href: "#san-pham" },
                  { name: "DỊCH VỤ", href: "#services" },
                  { name: "VỀ CHÚNG TÔI", href: "#about" },
                  { name: "LIÊN HỆ", href: "#contact" },
                ].map((item) => {
                  const isScrollItem = item.href.startsWith("#");

                  return isScrollItem ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        const el = document.querySelector(item.href);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`px-4 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wide transition-all duration-300 relative overflow-hidden group ${
                        item.active
                          ? "bg-white text-amber-600 shadow-lg"
                          : "text-white hover:bg-white/20"
                      }`}
                    >
                      {!item.active && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </button>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wide transition-all duration-300 relative overflow-hidden group ${
                        item.active
                          ? "bg-white text-amber-600 shadow-lg"
                          : "text-white hover:bg-white/20"
                      }`}
                    >
                      {!item.active && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              {/* <div className="hidden md:flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-2xl p-1 border border-white/30">
                <button className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300">
                  <span className="text-lg">🇻🇳</span>
                </button>
                <button className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                  <span className="text-lg">🇺🇸</span>
                </button>
              </div> */}

              {/* Enhanced CTA Button with more effects */}
              <button className="hidden md:flex items-center gap-3 bg-white text-amber-600 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-400/10 to-orange-400/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 relative z-10">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M13 10V3L4 14H11V21L20 10H13Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="relative z-10">TƯ VẤN NGAY</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="lg:hidden flex flex-col gap-1.5 p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <span
                  className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden relative z-20 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-b from-amber-600/95 to-orange-600/95 backdrop-blur-md border-t border-white/20">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6">
              <ul className="py-6 space-y-2">
                {[
                  { name: "TRANG CHỦ", href: "#home", active: true },
                  { name: "GIẢI PHÁP", href: "#solutions" },
                  { name: "SẢN PHẨM", href: "#products" },
                  { name: "DỊCH VỤ", href: "#services" },
                  { name: "VỀ CHÚNG TÔI", href: "#about" },
                  { name: "LIÊN HỆ", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`block px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                        item.active
                          ? "bg-white text-amber-600 shadow-lg"
                          : "text-white hover:bg-white/20"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Actions */}
              <div className="flex flex-col gap-4 pb-16 border-t border-white/20 pt-6">
                <div className="flex justify-center gap-3">
                  <button className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="text-xl">🇻🇳</span>
                  </button>
                  <button className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <span className="text-xl">🇺🇸</span>
                  </button>
                </div>
                <button className="bg-white text-amber-600 px-6 py-4 rounded-2xl font-bold text-sm hover:bg-yellow-50 transition-all duration-300 shadow-lg mx-4 relative z-10">
                  TƯ VẤN MIỄN PHÍ
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Enhanced bottom curved border with depth */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          {/* Main curved shadow for depth */}
          <svg
            className="relative block w-full h-12 drop-shadow-lg"
            viewBox="0 0 1440 48"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48L1440 48L1440 24C1200 8 960 32 720 24C480 16 240 24 0 36V48Z"
              fill="rgba(255, 255, 255, 0.95)"
              stroke="rgba(251, 191, 36, 0.2)"
              strokeWidth="1"
            />
          </svg>

          {/* Secondary curved layer for smoother transition */}
          <svg
            className="absolute bottom-0 w-full h-8 opacity-60"
            viewBox="0 0 1440 32"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 32L1440 32L1440 16C1200 6 960 22 720 16C480 10 240 16 0 24V32Z"
              fill="rgba(254, 243, 199, 0.4)"
            />
          </svg>

          {/* Subtle glow effect */}
          <div className="absolute bottom-0 w-full h-6 bg-gradient-to-b from-amber-200/10 to-transparent blur-sm"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
