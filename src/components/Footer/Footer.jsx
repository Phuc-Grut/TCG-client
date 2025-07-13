function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-white/20 p-2">
                    <img
                      src="/logo_.png"
                      alt="Company Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white leading-tight">
                    Toàn Cầu
                  </h3>
                  <span className="text-amber-300 text-sm font-semibold">
                    Global Technology And Trading
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
                <strong className="text-white">
                  Công ty cổ phần công nghệ và thương mại Toàn Cầu
                </strong>{" "}
                - Đối tác tin cậy trong hành trình chuyển đổi số. Chúng tôi mang
                đến những giải pháp công nghệ tiên tiến và dịch vụ thương mại
                chuyên nghiệp cho doanh nghiệp Toàn Cầu.
              </p>

              {/* Newsletter Signup */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M3 8L10.89 13.26A2 2 0 0013.11 13.26L21 8M5 19H19A2 2 0 0021 17V7A2 2 0 0019 5H5A2 2 0 003 7V17A2 2 0 005 19Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  Nhận tin tức công nghệ
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Đăng ký để nhận những thông tin mới nhất về công nghệ và giải
                  pháp số
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
                  />
                  <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg">
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
                Liên kết nhanh
              </h4>
              <ul className="space-y-4">
                {[
                  "Trang chủ",
                  "Giải pháp",
                  "Sản phẩm",
                  "Dịch vụ",
                  "Về chúng tôi",
                  "Liên hệ",
                  "Blog",
                  "Tuyển dụng",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        className="text-amber-500 group-hover:scale-125 transition-transform duration-300"
                      >
                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                      </svg>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                Thông tin liên hệ
              </h4>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Văn phòng chính
                    </div>
                    <div className="text-gray-300 text-sm">
                      Số 77, phố Hưng Phúc, tổ 16, Phường Yên Sở
                    </div>
                    <div className="text-gray-300 text-sm">
                      Hà Nội, Việt Nam
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">0935 772 929</div>
                    <div className="text-gray-300 text-sm">Hotline 24/7</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      contact@gttjsc.vn
                    </div>
                    <div className="text-gray-300 text-sm">Email hỗ trợ</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="text-white font-semibold mb-4">
                  Theo dõi chúng tôi
                </h5>
                <div className="flex gap-3">
                  {[
                    {
                      name: "Facebook",
                      icon: "📘",
                      color: "from-blue-600 to-blue-700",
                    },
                    {
                      name: "LinkedIn",
                      icon: "💼",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      name: "YouTube",
                      icon: "📺",
                      color: "from-red-500 to-red-600",
                    },
                    {
                      name: "Zalo",
                      icon: "💬",
                      color: "from-blue-400 to-blue-500",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Toàn Cầu - Global Technology And Trading Joint Stock
              Company. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                Chính sách bảo mật
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                Điều khoản sử dụng
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
              title="Về đầu trang"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <path
                  d="M7 14L12 9L17 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
