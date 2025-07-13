import React, { JSX, useEffect, useState } from "react";
import Lenis, { LenisOptions } from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import StepModal from "../../components/StepModal";
import ContactModal from "../../components/ContactModal";

type Step = {
  step: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  detail: JSX.Element;
};

interface CustomLenisOptions extends LenisOptions {
  direction?: string;
  gestureDirection?: string;
}

function Home() {
  const [selectedStep, setSelectedStep] = useState<
    (typeof steps)[number] | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    } as CustomLenisOptions);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 100,
    });

    // gES Product Slider functionality
    let currentSlide = 0;
    const totalSlides = 5;
    const slider = document.getElementById("productSlider");
    const indicators = document.querySelectorAll("#slideIndicators button");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");

    // Products Slider functionality
    let currentSlide2 = 0;
    const totalSlides2 = 4;
    const slider2 = document.getElementById("productSlider2");
    const indicators2 = document.querySelectorAll("#slideIndicators2 button");
    const prevBtn2 = document.getElementById("prevSlide2");
    const nextBtn2 = document.getElementById("nextSlide2");

    function updateSlider() {
      if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
          if (index === currentSlide) {
            indicator.classList.remove("bg-white/30");
            indicator.classList.add("bg-blue-400");
          } else {
            indicator.classList.remove("bg-blue-400");
            indicator.classList.add("bg-white/30");
          }
        });
      }
    }

    function updateSlider2() {
      if (slider2) {
        slider2.style.transform = `translateX(-${currentSlide2 * 100}%)`;

        // Update indicators
        indicators2.forEach((indicator, index) => {
          if (index === currentSlide2) {
            indicator.classList.remove("bg-white/30");
            indicator.classList.add("bg-blue-400");
          } else {
            indicator.classList.remove("bg-blue-400");
            indicator.classList.add("bg-white/30");
          }
        });
      }
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    function nextSlide2() {
      currentSlide2 = (currentSlide2 + 1) % totalSlides2;
      updateSlider2();
    }

    function prevSlide2() {
      currentSlide2 = (currentSlide2 - 1 + totalSlides2) % totalSlides2;
      updateSlider2();
    }

    function goToSlide(index) {
      currentSlide = index;
      updateSlider();
    }

    function goToSlide2(index) {
      currentSlide2 = index;
      updateSlider2();
    }

    // Event listeners for gES slider
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => goToSlide(index));
    });

    // Event listeners for Products slider
    if (nextBtn2) nextBtn2.addEventListener("click", nextSlide2);
    if (prevBtn2) prevBtn2.addEventListener("click", prevSlide2);

    indicators2.forEach((indicator, index) => {
      indicator.addEventListener("click", () => goToSlide2(index));
    });

    // Auto-play sliders
    const autoPlay = setInterval(nextSlide, 8000);
    const autoPlay2 = setInterval(nextSlide2, 10000);

    return () => {
      lenis.destroy();
      AOS.refresh();
      clearInterval(autoPlay);
      clearInterval(autoPlay2);

      // Cleanup gES slider
      if (nextBtn) nextBtn.removeEventListener("click", nextSlide);
      if (prevBtn) prevBtn.removeEventListener("click", prevSlide);
      indicators.forEach((indicator, index) => {
        indicator.removeEventListener("click", () => goToSlide(index));
      });

      // Cleanup Products slider
      if (nextBtn2) nextBtn2.removeEventListener("click", nextSlide2);
      if (prevBtn2) prevBtn2.removeEventListener("click", prevSlide2);
      indicators2.forEach((indicator, index) => {
        indicator.removeEventListener("click", () => goToSlide2(index));
      });
    };
  }, []);

  const steps = [
    {
      step: "01",
      title: "Khảo sát & Lập kế hoạch",
      description: "Xác định mục tiêu và chiến lược phát triển tối ưu",
      color: "emerald",
      icon: "🧭",
      detail: (
        <>
          <p>
            <strong>🔍 Hiểu đúng nhu cầu:</strong> Tiếp cận khách hàng, lắng
            nghe và phân tích kỳ vọng để đảm bảo mọi yêu cầu đều được làm rõ
            ngay từ đầu.
          </p>
          <p>
            <strong>📌 Xác định phạm vi & mục tiêu dự án:</strong> Đưa ra lộ
            trình cụ thể, tránh phát sinh ngoài dự kiến và tối ưu nguồn lực.
          </p>
          <p>
            <strong>📅 Xây dựng kế hoạch triển khai:</strong> Lên kế hoạch chi
            tiết về thời gian, nhân sự, chi phí và công nghệ sử dụng.
          </p>
          <p>
            <strong>🤝 Đề xuất phương pháp phù hợp:</strong> Agile, Scrum hay
            Waterfall – tùy theo tính chất dự án và mô hình hoạt động của doanh
            nghiệp.
          </p>
        </>
      ),
    },
    {
      step: "02",
      title: "Phân tích & Thiết kế hệ thống",
      description: "Kiến tạo nền móng công nghệ vững chắc và trực quan",
      color: "green",
      icon: "🎨",
      detail: (
        <>
          <p>
            <strong>🧠 Phân tích nghiệp vụ chuyên sâu:</strong> Mô hình hóa toàn
            bộ luồng xử lý, hành vi người dùng và vai trò chức năng.
          </p>
          <p>
            <strong>🧱 Thiết kế kiến trúc kỹ thuật:</strong> Lập sơ đồ cơ sở dữ
            liệu, API, phân tầng hệ thống và giải pháp bảo mật.
          </p>
          <p>
            <strong>🎯 Xây dựng giao diện trực quan:</strong> Thiết kế UI/UX tối
            ưu trải nghiệm người dùng, phối hợp với prototype mô phỏng sớm sản
            phẩm.
          </p>
          <p>
            <strong>🧾 Tài liệu kỹ thuật rõ ràng:</strong> Chuẩn hóa mọi mô hình
            và thông số kỹ thuật để sẵn sàng bước vào giai đoạn phát triển.
          </p>
        </>
      ),
    },
    {
      step: "03",
      title: "Phát triển & Kiểm thử",
      description: "Hiện thực hóa ý tưởng thành sản phẩm công nghệ hoàn chỉnh",
      color: "teal",
      icon: "⚙️",
      detail: (
        <>
          <p>
            <strong>💻 Lập trình theo chuẩn:</strong> Code sạch, logic rõ ràng,
            dễ mở rộng, tuân thủ quy tắc SOLID và các best practice.
          </p>
          <p>
            <strong>🧪 Kiểm thử toàn diện:</strong> Tự động hóa Unit Test,
            Integration Test và kiểm thử UI để đảm bảo mọi chức năng đều hoạt
            động ổn định.
          </p>
          <p>
            <strong>🔄 Chu trình tối ưu liên tục:</strong> Feedback nhanh – cải
            tiến nhanh, đảm bảo sản phẩm luôn đi đúng kỳ vọng người dùng.
          </p>
          <p>
            <strong>✅ Kiểm soát chất lượng nghiêm ngặt:</strong> Sử dụng quy
            trình CI/CD, code review đa cấp và checklist QA chuyên biệt.
          </p>
        </>
      ),
    },
    {
      step: "04",
      title: "Triển khai & Đồng hành",
      description: "Đưa sản phẩm vào hoạt động và phát triển bền vững",
      color: "cyan",
      icon: "🚀",
      detail: (
        <>
          <p>
            <strong>🚢 Triển khai an toàn:</strong> Đưa hệ thống lên môi trường
            thực tế với các bước kiểm tra bảo mật, cấu hình tối ưu hiệu suất.
          </p>
          <p>
            <strong>👨‍🏫 Đào tạo & hỗ trợ sử dụng:</strong> Cung cấp tài liệu chi
            tiết, tổ chức buổi hướng dẫn sử dụng và hỗ trợ nội bộ doanh nghiệp.
          </p>
          <p>
            <strong>🔧 Bảo trì & phản hồi tức thời:</strong> Luôn sẵn sàng hỗ
            trợ kỹ thuật, cập nhật tính năng và đảm bảo vận hành liên tục.
          </p>
          <p>
            <strong>📈 Đồng hành chiến lược:</strong> Tư vấn cải tiến công nghệ,
            mở rộng tính năng theo sự phát triển của doanh nghiệp.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-transparent to-orange-100/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-3 mb-8"
              data-aos="fade-down"
            >
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
                Công ty công nghệ hàng đầu Việt Nam
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Chào mừng đến với
            </h1>

            <div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-8 leading-tight"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Toàn Cầu
              </span>
            </div>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Công ty cổ phần công nghệ và thương mại Toàn Cầu - Đồng hành cùng
              doanh nghiệp trong hành trình chuyển đổi số với các giải pháp công
              nghệ tiên tiến và dịch vụ thương mại chuyên nghiệp
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              {/* <button
                onClick={() => {
                  const el = document.querySelector("#linh-vuc-hoat-dong");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Khám phá giải pháp
              </button> */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto border-2 border-amber-500 text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-amber-50 transition-all duration-300"
              >
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="linh-vuc-hoat-dong"
        className="py-12 sm:py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Lĩnh vực hoạt động{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                đa dạng
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Toàn Cầu với những lợi thế và chiến lược của mình đã, đang và sẽ
              tập trung phát triển các lĩnh vực chuyên môn hóa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Phát triển phần mềm */}
            <div
              className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:border-amber-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Phát triển phần mềm
              </h3>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  Phần mềm ứng dụng cho tổ chức, cá nhân
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  Website và ứng dụng web
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  Gia công phần mềm cho thị trường nước ngoài
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  Giải pháp phần mềm tổng thể
                </li>
              </ul>
            </div>

            {/* Feature 2 - Y tế số */}
            <div
              className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M4.6 9L12 2L19.4 9C20.2 9.8 20.2 11.2 19.4 12L12 19.4L4.6 12C3.8 11.2 3.8 9.8 4.6 9Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Giải pháp Y tế số
              </h3>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Hệ thống bệnh án điện tử (EMR)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Hệ thống quản lý bệnh viện (HIS)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Phần mềm quản lý xét nghiệm (LIS)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Lưu trữ hình ảnh y tế (PACS)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Giải pháp kết nối hệ thống y tế (HUB)
                </li>
              </ul>
            </div>

            {/* Feature 3 - Thương mại điện tử */}
            <div
              className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-200"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M15 21C16.1 21 17 20.1 17 19C17 17.9 16.1 17 15 17C13.9 17 13 17.9 13 19C13 20.1 13.9 21 15 21ZM9 21C10.1 21 11 20.1 11 19C11 17.9 10.1 17 9 17C7.9 17 7 17.9 7 19C7 20.1 7.9 21 9 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thương mại điện tử
              </h3>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Dịch vụ thương mại và thương mại điện tử
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Giải pháp tích hợp thông minh
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Phục vụ nông nghiệp và dân sinh
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Sàn giao dịch trực tuyến
                </li>
              </ul>
            </div>

            {/* Feature 4 - GIS & Bản đồ số */}
            <div
              className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-200"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="28"
                  height="28"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                GIS & Bản đồ số
              </h3>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  Đo đạc và xây dựng bản đồ số
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  Phần mềm khai thác bản đồ số chuyên ngành
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  Quản trị dữ liệu địa lý
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  Số hóa và tổ chức tài liệu
                </li>
              </ul>
            </div>

            {/* Feature 5 - Truyền thông số */}
            <div
              className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-indigo-100 hover:border-indigo-200"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M8 12L10 14L16 8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Truyền thông số
              </h3>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  Dịch vụ truyền thông và báo điện tử
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  Quảng cáo trực tuyến
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  Cung cấp dịch vụ nội dung số
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  Giải pháp viễn thông
                </li>
              </ul>
            </div>

            {/* Feature 6 - Hạ tầng IT */}
            <div
              className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V8C20 9.10457 19.1046 10 18 10H6C4.89543 10 4 9.10457 4 8V6Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 14C4 12.8954 4.89543 12 6 12H18C19.1046 12 20 12.8954 20 14V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V14Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hạ tầng IT
              </h3>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  Tư vấn và thiết kế hạ tầng CNTT
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  Cung cấp máy tính, thiết bị, linh kiện
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  Thi công lắp đặt hệ thống mạng
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  Quản trị hệ thống và mạng máy tính
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden"
        id="ve-chung-toi"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-amber-700 font-semibold text-sm">
                  VỀ CHÚNG TÔI
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Về{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Toàn Cầu
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Công ty Cổ phần Công nghệ và Thương mại Toàn Cầu hoạt động
                chuyên nghiệp trong lĩnh vực công nghệ thông tin và truyền
                thông. Với nhiều năm kinh nghiệm đã trải qua về thị trường và
                sản phẩm, chúng tôi đã và đang khẳng định được vị trí của mình
                trên thị trường với mục tiêu tạo ra môi trường làm việc tích cực
                và hiệu quả nhất.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Đội ngũ kết hợp giữa tuổi trẻ nhất huyết và kinh nghiệm dày dặn",
                  "Quy trình và công nghệ tiên tiến nhất hiện nay",
                  "Chứng chỉ ISO 9001:2008 cho quy trình quản lý chất lượng",
                  "Chứng chỉ ISO 27001:2005 cho công tác an toàn, bảo mật thông tin",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M9 12L11 14L15 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border-l-4 border-amber-500">
                <p className="text-gray-700 italic leading-relaxed">
                  "Luôn tham nhận việc làm thoả mãn được sự hài lòng của khách
                  hàng chính là sự thành công và là mục tiêu làm kim chỉ nam để
                  hướng tới. Chúng tôi luôn đem lại sự hài lòng tốt nhất cho
                  khách hàng trong mọi giai đoạn."
                </p>
              </div>

              {/* <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Tìm hiểu thêm
              </button> */}
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="text-2xl font-black text-gray-900">
                        Nhanh chóng
                      </div>
                      <div className="text-sm text-gray-600">
                        Triển khai dự án
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="text-2xl font-black text-gray-900">
                        Chất lượng
                      </div>
                      <div className="text-sm text-gray-600">
                        Sản phẩm cao cấp
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="text-2xl font-black text-gray-900">
                        Uy tín
                      </div>
                      <div className="text-sm text-gray-600">
                        Thương hiệu đáng tin
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-2xl font-black text-gray-900">
                        Hỗ trợ
                      </div>
                      <div className="text-sm text-gray-600">24/7 tận tình</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sứ mệnh & Tầm nhìn
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="group" data-aos="fade-right">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">SỨ MỆNH</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Đem đến cho xã hội các sản phẩm, dịch vụ thực sự hữu ích, gần
                  bô lâu dài trong đời sống xã hội.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group" data-aos="fade-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7L7 6.5C7.6 6.4 8.2 6.7 8.5 7.2L12 13L15.5 7.2C15.8 6.7 16.4 6.4 17 6.5L23 7V9C23 10.1 22.1 11 21 11S19 10.1 19 9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">TẦM NHÌN</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Trở thành một đơn vị hàng đầu trong lĩnh vực sản xuất và cung
                  cấp dịch vụ công nghệ tại Việt Nam, có khả năng tham gia vào
                  thị trường toàn cầu thông qua kênh phân phối Internet, lấy con
                  người, công nghệ, quy trình làm điểm tựa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Chart Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center mb-16"
            data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sơ đồ tổ chức
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div data-aos="fade-up" data-aos-delay="200">
              <OrganizationChart />
            </div>

           
            <div
              className="mt-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-8 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="400">
              <div className="text-center mb-6">
                <p className="text-gray-700 text-lg font-medium">
                  Cấu trúc tổ chức được thiết kế để đảm bảo hiệu quả hoạt động
                  và phát triển bền vững
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <div className="text-2xl font-bold text-amber-600">11</div>
                  <div className="text-sm text-gray-600">Phòng ban</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <div className="text-sm text-gray-600">Cấp quản lý</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <div className="text-2xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Nhân viên</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Hoạt động</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* People Section - Con Người */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-amber-100/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                CON NGƯỜI
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Đội ngũ{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                chuyên nghiệp
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Con người là tài sản quý giá nhất của chúng tôi, được đào tạo bài
              bản và phát triển liên tục để mang lại giá trị tốt nhất cho khách
              hàng
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Kỹ năng quản lý */}
            <div
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              data-aos="fade-right"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M16 4V2C16 1.45 15.55 1 15 1H9C8.45 1 8 1.45 8 2V4H16ZM11 14H13V8H11V14ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Kỹ năng quản lý
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Đội ngũ quản lý của chúng tôi đã được đào tạo qua những lớp
                    đào tạo về quản lý và có bề dày kinh nghiệm thực tế qua việc
                    trí quản lý cao cấp tại các công ty hàng đầu Việt Nam và
                    nước ngoài, chúng tôi am hiểu về các quy trình và cách thức
                    quản lý hiệu quả và tối ưu nhất hiện nay.
                  </p>
                </div>
              </div>
            </div>

            {/* Kinh nghiệm chuyên môn */}
            <div
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              data-aos="fade-left"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Kinh nghiệm chuyên môn
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Chúng tôi có đội ngũ nhân viên được đào tạo bài bản tại các
                    trường đại học danh tiếng Việt Nam như: Đại học Bách Khoa Hà
                    Nội, Đại học Quốc Gia Hà Nội, Đại học Kinh tế Quốc Dân, Đại
                    học Thương Mại... Được bổ sung các chứng chỉ chuyên ngành
                    của các trung tâm đào tạo quốc tế như: NIT, Aptech... Có
                    kinh nghiệm phát triển và triển khai các hệ thống phần mềm
                    ứng dụng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phát triển nguồn lực */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Phát triển nguồn lực
              </h3>
              <div className="text-center mb-8">
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                  Xác định được vai trò quan trọng của con người và nhằm đáp ứng
                  được những yêu cầu của khách hàng, chúng tôi đã có chương
                  trình và chính sách phát triển cụ thể:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div
                  className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7L7 6.5C7.6 6.4 8.2 6.7 8.5 7.2L12 13L15.5 7.2C15.8 6.7 16.4 6.4 17 6.5L23 7V9C23 10.1 22.1 11 21 11S19 10.1 19 9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tuân theo một quy trình tuyển dụng chặt chẻ theo tiêu chuẩn
                    ISO/CMMI
                  </p>
                </div>

                <div
                  className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V14H17V17Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Đưa ra các chính sách phát triển thuận lợi nhất, và tạo môi
                    trường làm việc chuyên nghiệp để nhân viên có thể phát huy
                    hết khả năng của mình
                  </p>
                </div>

                <div
                  className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Đảm bảo các quyền lợi tối đa cho nhân viên, đặc biệt về
                    chính sách lương và chương trình đào tạo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chương trình đào tạo */}
          <div
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <div
                  className="w-48 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl"
                  data-aos="flip-left"
                  data-aos-delay="400"
                >
                  <div className="text-center text-white">
                    <div className="text-3xl font-black mb-2">TOTAL</div>
                    <div className="text-lg font-semibold">TRAINING</div>
                    <div className="mt-2">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mx-auto"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Chương trình đào tạo
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nhằm xây dựng tổ chức mạnh và bổ sung các kỹ năng, kiến thức
                  công nghệ cần thiết, chúng tôi xây dựng nội dung các khóa đào
                  tạo phù hợp với mục tiêu phát triển của nhân viên và được thực
                  hiện bởi những người giàu kinh nghiệm trong từng lĩnh vực hoặc
                  những trung tâm đào tạo có uy tín.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="text-center text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-5xl font-black mb-2">500+</div>
              <div className="text-lg font-medium opacity-90">
                Dự án hoàn thành
              </div>
            </div>
            <div
              className="text-center text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-5xl font-black mb-2">200+</div>
              <div className="text-lg font-medium opacity-90">
                Khách hàng tin tưởng
              </div>
            </div>
            <div
              className="text-center text-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-5xl font-black mb-2">8+</div>
              <div className="text-lg font-medium opacity-90">
                Năm kinh nghiệm
              </div>
            </div>
            <div
              className="text-center text-white"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-5xl font-black mb-2">24/7</div>
              <div className="text-lg font-medium opacity-90">
                Hỗ trợ khách hàng
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
        id="san-pham"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 font-semibold text-sm">
                SẢN PHẨM
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Giải pháp{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                toàn diện
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Các sản phẩm phần mềm chuyên nghiệp đáp ứng mọi nhu cầu quản lý
              của doanh nghiệp
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                id="productSlider2"
              >
                <div className="w-full flex-shrink-0 h-auto lg:h-[700px]">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 h-full">
                    {/* bệnh án điện tử */}
                    <div className="grid lg:grid-cols-2 gap-8 h-full">
                      {/* Nội dung bên trái */}
                      <div>
                        <div className="inline-block bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                          Bệnh án điện tử
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                          Phần mềm Bệnh án điện tử EMR (Electronic Medical
                          Record)
                        </h3>

                        <div className="space-y-4 mb-6">
                          <div className="bg-emerald-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-emerald-400 mb-2">
                              🏥 Quản lý hồ sơ bệnh nhân
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Lưu trữ toàn bộ lịch sử khám, chẩn đoán và điều
                              trị của bệnh nhân theo chuẩn Bộ Y Tế.
                            </p>
                          </div>

                          <div className="bg-emerald-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-emerald-400 mb-2">
                              🔒 Bảo mật & phân quyền
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Hệ thống phân quyền truy cập nghiêm ngặt theo vai
                              trò bác sĩ, y tá, quản trị viên,...
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-emerald-400 font-semibold mb-1">
                              📁 Bệnh án số hóa
                            </div>
                            <div className="text-gray-400">
                              Chẩn đoán, đơn thuốc, xét nghiệm, hình ảnh
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-emerald-400 font-semibold mb-1">
                              📆 Lịch sử khám chữa
                            </div>
                            <div className="text-gray-400">
                              Theo dõi khám bệnh, điều trị nội trú, ngoại trú
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-emerald-400 font-semibold mb-1">
                              ⚙️ Tích hợp thiết bị y tế
                            </div>
                            <div className="text-gray-400">
                              Kết nối máy đo, xét nghiệm, thiết bị y khoa
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-emerald-400 font-semibold mb-1">
                              📊 Báo cáo & thống kê
                            </div>
                            <div className="text-gray-400">
                              Xuất báo cáo nhanh theo chuẩn cơ quan y tế
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hộp mô tả bên phải */}
                      <div className="flex items-center justify-center">
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-md">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-3xl">🩺</span>
                            </div>
                            <h4 className="text-xl font-bold text-white">
                              eHealth Records
                            </h4>
                            <p className="text-gray-300">
                              Hệ thống bệnh án điện tử toàn diện
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Số hóa toàn bộ hồ sơ bệnh nhân
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Quản lý dữ liệu y tế an toàn & bảo mật
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Hỗ trợ chuẩn hóa theo thông tư Bộ Y Tế
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Dễ dàng truy xuất & chia sẻ thông tin
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 1: gHRM */}
                <div className="w-full flex-shrink-0 h-auto lg:h-[700px]">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 h-full">
                    <div className="grid lg:grid-cols-2 gap-8 h-full">
                      <div>
                        <div className="inline-block bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                          Quản lý nhân sự
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                          Phần mềm quản lý nhân sự gHRM
                        </h3>

                        <div className="space-y-4 mb-6">
                          <div className="bg-emerald-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-emerald-400 mb-2">
                              🌍 Đa quốc gia
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Hỗ trợ quản trị nguồn nhân lực cho các tập đoàn
                              hoạt động đa quốc gia
                            </p>
                          </div>

                          <div className="bg-emerald-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-emerald-400 mb-2">
                              🔄 Tương tác B2E
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Hệ thống tương tác hai chiều giữa doanh nghiệp và
                              nhân viên
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-emerald-400 font-semibold mb-1">
                              👥 Quản lý nhân sự
                            </div>
                            <div className="text-gray-400">
                              Hồ sơ, hợp đồng, chức vụ
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-emerald-400 font-semibold mb-1">
                              💰 Quản lý lương
                            </div>
                            <div className="text-gray-400">
                              Tính lương, trợ cấp, thưởng
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-emerald-400 font-semibold mb-1">
                              ⏰ Chấm công
                            </div>
                            <div className="text-gray-400">
                              Thiết bị vân tay, ca linh hoạt
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-emerald-400 font-semibold mb-1">
                              📊 Báo cáo
                            </div>
                            <div className="text-gray-400">
                              Thống kê đa dạng
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-md">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-3xl">👨‍💼</span>
                            </div>
                            <h4 className="text-xl font-bold text-white">
                              gHRM
                            </h4>
                            <p className="text-gray-300">
                              Human Resource Management
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Tự động hóa quy trình
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Tiết kiệm thời gian, chi phí
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Dữ liệu chính xác
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Theo dõi nguồn lực real-time
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2: gGIS */}
                <div className="w-full flex-shrink-0 h-auto lg:h-[700px]">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 h-full">
                    <div className="grid lg:grid-cols-2 gap-8 h-full">
                      <div>
                        <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                          Bản đồ số
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                          Phần mềm quản lý bản đồ số gGIS
                        </h3>

                        <div className="space-y-4 mb-6">
                          <div className="bg-blue-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-blue-400 mb-2">
                              🗺️ Đa chuẩn
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Tương thích với chuẩn bản đồ Quốc gia và Quốc tế
                            </p>
                          </div>

                          <div className="bg-blue-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-blue-400 mb-2">
                              🔧 Tích hợp thiết bị
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Kết nối camera, GPS, thiết bị đo lường chuyên dụng
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-blue-400 font-semibold mb-1">
                              🚗 Giao thông
                            </div>
                            <div className="text-gray-400">
                              Quản lý hệ thống đối tượng
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-blue-400 font-semibold mb-1">
                              🌊 Thủy hệ
                            </div>
                            <div className="text-gray-400">
                              Tối ưu hóa đường đi
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-blue-400 font-semibold mb-1">
                              🏠 Nhà cửa
                            </div>
                            <div className="text-gray-400">
                              Khu công nghiệp, dân cư
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-blue-400 font-semibold mb-1">
                              📍 Real-time
                            </div>
                            <div className="text-gray-400">
                              Tích hợp theo thời gian thực
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-md">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-3xl">🗺️</span>
                            </div>
                            <h4 className="text-xl font-bold text-white">
                              gGIS
                            </h4>
                            <p className="text-gray-300">
                              Geographic Information System
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Đa dạng loại hình bản đồ
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Tùy biến theo chuyên ngành
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Giao diện thân thiện
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Tính toán tối ưu đường đi
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3: gPM */}
                <div className="w-full flex-shrink-0 h-auto lg:h-[700px]">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 h-full">
                    <div className="grid lg:grid-cols-2 gap-8 h-full">
                      <div>
                        <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                          Quản lý dự án
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                          Phần mềm quản lý dự án gPM
                        </h3>

                        <div className="space-y-4 mb-6">
                          <div className="bg-purple-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-purple-400 mb-2">
                              ⚖️ 9 nguyên tắc chuẩn
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Tuân thủ chuẩn quản lý dự án quốc tế
                            </p>
                          </div>

                          <div className="bg-purple-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-purple-400 mb-2">
                              🌐 Dự án xa trụ sở
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Phù hợp với dự án có phạm vi rộng lớn, xa trụ sở
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-purple-400 font-semibold mb-1">
                              📅 Tiến độ
                            </div>
                            <div className="text-gray-400">
                              Kế hoạch thực hiện
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-purple-400 font-semibold mb-1">
                              💼 Vốn đầu tư
                            </div>
                            <div className="text-gray-400">
                              Thanh toán, quyết toán
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-purple-400 font-semibold mb-1">
                              🏗️ Nhà thầu
                            </div>
                            <div className="text-gray-400">
                              Quản lý khối lượng
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-purple-400 font-semibold mb-1">
                              👷 Nhân lực
                            </div>
                            <div className="text-gray-400">
                              Tiền lương, thiết bị
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-md">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-3xl">📊</span>
                            </div>
                            <h4 className="text-xl font-bold text-white">
                              gPM
                            </h4>
                            <p className="text-gray-300">Project Management</p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Tổng hợp dự án toàn diện
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Quản lý rủi ro chuyên nghiệp
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Công nghệ hiện đại iii
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Giám sát trong & ngoài nước
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 4: gES - Cân điện tử */}
                <div className="w-full flex-shrink-0 h-auto lg:h-[700px]">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 h-full">
                    <div className="grid lg:grid-cols-2 gap-8 h-full">
                      <div>
                        <div className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                          Cân điện tử
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                          Phần mềm cân điện tử gES
                        </h3>

                        <div className="space-y-4 mb-6">
                          <div className="bg-indigo-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-indigo-400 mb-2 flex items-center gap-2">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-indigo-400"
                              >
                                <path d="M12 3C12.5523 3 13 3.44772 13 4V7H18C18.5523 7 19 7.44772 19 8V9C19 9.55228 18.5523 10 18 10H13V16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16H11V10H6C5.44772 10 5 9.55228 5 9V8C5 7.44772 5.44772 7 6 7H11V4C11 3.44772 11.4477 3 12 3Z" />
                              </svg>
                              Tương thích rộng
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Tương thích với mọi thiết bị cân điện tử từ 30 đến
                              150 tấn
                            </p>
                          </div>

                          <div className="bg-indigo-500/10 rounded-xl p-4">
                            <h4 className="text-lg font-bold text-indigo-400 mb-2 flex items-center gap-2">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-indigo-400"
                              >
                                <path d="M3 13H11V3H13V13H21V15H13V21H11V15H3V13Z" />
                              </svg>
                              Đa ứng dụng
                            </h4>
                            <p className="text-gray-300 text-sm">
                              Phù hợp với trạm cân xe, giao thông, công trường,
                              trạm trộn, nhà máy
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-indigo-400 font-semibold mb-1 flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-indigo-400"
                              >
                                <path d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z" />
                              </svg>
                              Cơ sở dữ liệu
                            </div>
                            <div className="text-gray-400">
                              Phân tán, đa trạm cân
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-indigo-400 font-semibold mb-1 flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-indigo-400"
                              >
                                <path d="M6 10C6 5.58172 9.58172 2 14 2C18.4183 2 22 5.58172 22 10V11H20V10C20 6.68629 17.3137 4 14 4C10.6863 4 8 6.68629 8 10V11H10V13H6V11H4V10H6ZM10 13V22H4V13H10ZM8 15H6V20H8V15Z" />
                              </svg>
                              Bảo mật
                            </div>
                            <div className="text-gray-400">
                              Lưu trữ kép, an toàn
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-indigo-400 font-semibold mb-1 flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-indigo-400"
                              >
                                <path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L21.3536 7.35355L15.7071 13L13.2929 10.5858L9.20711 14.6716L7.79289 13.2574L13.2929 7.75736L15.7071 10.1716L19.9393 5.93934Z" />
                              </svg>
                              Báo cáo
                            </div>
                            <div className="text-gray-400">
                              Thống kê toàn diện
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-indigo-400 font-semibold mb-1 flex items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-indigo-400"
                              >
                                <path d="M12 2C13.1046 2 14 2.89543 14 4V6.26756C16.9463 7.05039 19.9496 9.05039 20.7324 12H22C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14H20.7324C19.9496 16.9496 16.9463 18.9496 14 19.7324V22C14 22.5523 13.5523 23 13 23C12.4477 23 12 22.5523 12 22V19.7324C9.05039 18.9496 6.05039 16.9463 5.26756 14H4C3.44772 14 3 13.5523 3 13C3 12.4477 3.44772 12 4 12H5.26756C6.05039 9.05039 9.05039 7.05039 12 6.26756V4C12 2.89543 12.8954 2 12 2ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z" />
                              </svg>
                              Tự động
                            </div>
                            <div className="text-gray-400">
                              Camera AI, nhận diện
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-md">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-white"
                              >
                                <path d="M12 3C12.5523 3 13 3.44772 13 4V7H18C18.5523 7 19 7.44772 19 8V9C19 9.55228 18.5523 10 18 10H13V16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16H11V10H6C5.44772 10 5 9.55228 5 9V8C5 7.44772 5.44772 7 6 7H11V4C11 3.44772 11.4477 3 12 3Z" />
                              </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white">
                              gES
                            </h4>
                            <p className="text-gray-300">
                              electronic Scale Management
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Hệ thống quản lý thông minh
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Camera AI nhận diện
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Giám sát thời gian thực
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                              <span className="text-gray-300">
                                Báo cáo đa dạng
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                id="prevSlide2"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white group-hover:text-blue-300"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex gap-2" id="slideIndicators2">
                <button className="w-3 h-3 rounded-full bg-blue-400 transition-all duration-300"></button>
                <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"></button>
                <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"></button>
                <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"></button>
              </div>

              <button
                id="nextSlide2"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white group-hover:text-blue-300"
                >
                  <path
                    d="M9 18L15 12L9 6"
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
      </section>

      {/* Technology Stack Section */}

      {/* Portfolio Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-amber-400/30">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-300 font-semibold text-sm">
                DỰ ÁN TIÊU BIỂU
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Portfolio{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                xuất sắc
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Khám phá những dự án thành công mà chúng tôi đã thực hiện cho các
              khách hàng trong nhiều lĩnh vực khác nhau
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hệ thống ERP Doanh nghiệp",
                category: "Web Application",
                description:
                  "Giải pháp quản lý tài nguyên doanh nghiệp toàn diện cho công ty sản xuất lớn",
                tech: ["React", "Node.js", "PostgreSQL"],
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Ứng dụng E-commerce",
                category: "Mobile & Web",
                description:
                  "Nền tảng thương mại điện tử với tính năng AI recommendation và thanh toán đa dạng",
                tech: ["Flutter", "Laravel", "AWS"],
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Hệ thống IoT Thông minh",
                category: "IoT Solution",
                description:
                  "Giải pháp IoT cho smart building với dashboard realtime và AI analytics",
                tech: ["Python", "MongoDB", "Docker"],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Ứng dụng Fintech",
                category: "Financial Technology",
                description:
                  "Ứng dụng thanh toán và quản lý tài chính cá nhân với bảo mật cao",
                tech: ["React Native", "Node.js", "Redis"],
                gradient: "from-amber-500 to-orange-500",
              },
              {
                title: "Hệ thống CRM",
                category: "Customer Management",
                description:
                  "Giải pháp quản lý khách hàng với AI chatbot và automation marketing",
                tech: ["Vue.js", "Python", "PostgreSQL"],
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Platform Giáo dục",
                category: "E-learning",
                description:
                  "Nền tảng học trực tuyến với video streaming và interactive learning",
                tech: ["React", "Node.js", "AWS"],
                gradient: "from-rose-500 to-pink-500",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="text-amber-400 text-sm font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <button className="text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group/btn">
                  Xem chi tiết
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management System Section */}
      <section
        className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden"
        id="he-thong"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 font-semibold text-sm">
                HỆ THỐNG
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Hệ thống{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                quản lý chất lượng
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi áp dụng hệ thống quản lý chất lượng nghiêm ngặt để đảm
              bảo mọi sản phẩm và dịch vụ đều đạt tiêu chuẩn cao nhất
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Quality Management Process */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V13C15 14.1 14.1 15 13 15S11 14.1 11 13V12L9 12C7.9 12 7 11.1 7 10S7.9 8 9 8L11 8V7.5L5 6V9L7 9.5V18C7 19.1 7.9 20 9 20H15C16.1 20 17 19.1 17 18V9.5L21 9Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Quy trình quản lý chất lượng
                  </h3>
                  <p className="text-emerald-600">Your Gold Partner</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Hệ thống quản lý chất lượng
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Nhận ra vai trò quan trọng của hệ thống chất lượng trong
                    việc đảm bảo thời gian, chi phí và cam kết với khách hàng,
                    chúng tôi đã xây dựng và tiếp tục cải tiến hệ thống quản lý
                    chất lượng ngày càng chặt chẽ
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Chỉnh sách, quy trình hiện đại, hiệu quả, những điều theo
                      thể, điện chỉnh khoa học và các công đoàn hết quốc tế như
                      ISO 9001: 2008, CMMI cũ như xây dựng hệ thống chỉ hiện CMG
                      Level 4 và ISO 27001: 2001.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Có hệ thống đào tạo và kiếm man chất lượng, có dự kiện, có
                      thông kỹ số, hệ đúng lý chất lượng.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Các ứng dụng đại đều được kiểm soát chất lượng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quality Process Details */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  Đảm bảo chất lượng
                </h4>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Chúng tôi hiểu rõ chính mình về chất lượng cá thể thường mọi
                    của chúng ta trong quá trình và kết quả hoạt động kiểm soát
                    CMMI Level 4 và ISO 27001: 2001.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-600">
                        ISO 9001
                      </div>
                      <p className="text-sm text-gray-600">
                        Quản lý chất lượng
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        CMMI Level 4
                      </div>
                      <p className="text-sm text-gray-600">
                        Quản lý chất lượng
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-teal-100">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17L5 13L6.41 11.59L9 14.17L17.59 5.58L19 7L9 17Z" />
                    </svg>
                  </div>
                  Quy trình cải tiến liên tục
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <p className="text-gray-700">
                      Phân tích và thiết kế hệ thống
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <p className="text-gray-700">Xây dựng</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <p className="text-gray-700">Kiểm thử</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <p className="text-gray-700">
                      Quản lý nhánh xây dựng sản phẩm
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <p className="text-gray-700">
                      Quản lý dự án lây và quản lý đầu tư phẩm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance Process Timeline */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Quy trình phát triển với Công nghệ thông tin
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((phase, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  onClick={() => setSelectedStep(phase)}
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-br from-${phase.color}-500 to-${phase.color}-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    {phase.icon}
                  </div>
                  <div
                    className={`text-${phase.color}-600 font-bold text-sm mb-2`}
                  >
                    BƯỚC {phase.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    {phase.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>

            {selectedStep && (
              <StepModal
                step={selectedStep}
                onClose={() => setSelectedStep(null)}
              />
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 font-semibold text-sm">
                KHÁCH HÀNG NÓI GÌ
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Đánh giá từ{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                khách hàng
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lắng nghe những chia sẻ chân thật từ các đối tác đã đồng hành cùng
              chúng tôi trong hành trình chuyển đổi số
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nguyễn Văn An",
                position: "CEO",
                company: "TechCorp Vietnam",
                avatar: "👨‍💼",
                rating: 5,
                content:
                  "Chúng tôi đã giúp khách hàng xây dựng hệ thống ERP hoàn chỉnh. Đội ngũ chuyên nghiệp, tiến độ đúng hẹn và hỗ trợ tận tình sau triển khai.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                name: "Trần Thị Minh",
                position: "CTO",
                company: "StartupX",
                avatar: "👩‍💻",
                rating: 5,
                content:
                  "Giải pháp mobile app vượt xa mong đợi của khách hàng. UI/UX đẹp, performance tốt và tích hợp payment gateway rất mượt mà.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                name: "Lê Hoàng Nam",
                position: "Director",
                company: "Manufacturing Co.",
                avatar: "👨‍🔧",
                rating: 5,
                content:
                  "Hệ thống IoT smart factory đã tối ưu hóa quy trình sản xuất, giảm 30% chi phí vận hành và tăng hiệu suất đáng kể.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                name: "Phạm Thị Lan",
                position: "Marketing Manager",
                company: "E-commerce Plus",
                avatar: "👩‍💼",
                rating: 5,
                content:
                  "Website e-commerce và mobile app đã giúp doanh thu online tăng 200%. Tính năng AI recommendation rất ấn tượng.",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                name: "Hoàng Văn Tuấn",
                position: "IT Manager",
                company: "FinanceVN",
                avatar: "👨‍💻",
                rating: 5,
                content:
                  "Ứng dụng fintech với bảo mật cao và compliance đầy đủ. Chúng tôi thực sự hiểu rõ domain financial và regulatory requirements.",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                name: "Ngô Thị Hương",
                position: "Founder",
                company: "EduTech Pro",
                avatar: "👩‍🏫",
                rating: 5,
                content:
                  "Platform e-learning với video streaming HD và interactive features tuyệt vời. Học sinh và giáo viên đều rất hài lòng với trải nghiệm.",
                gradient: "from-rose-500 to-pink-500",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-yellow-400"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/10 via-transparent to-black/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white font-semibold text-sm">
              BẮT ĐẦU DỰ ÁN
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Sẵn sàng{" "}
            <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              chuyển đổi số?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Hãy để chúng tôi đồng hành cùng bạn trong hành trình chuyển đổi số.
            Liên hệ ngay để được tư vấn miễn phí về giải pháp phù hợp nhất cho
            doanh nghiệp của bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-amber-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 5A2 2 0 015 3H19A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              Liên hệ ngay
            </button>

            {/* <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="16"
                  height="16"
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
              Tư vấn miễn phí
            </button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-black text-white mb-2">24h</div>
              <div className="text-white/80">Phản hồi nhanh chóng</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-black text-white mb-2">100%</div>
              <div className="text-white/80">Tư vấn miễn phí</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-black text-white mb-2">1-1</div>
              <div className="text-white/80">Hỗ trợ cá nhân hóa</div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
