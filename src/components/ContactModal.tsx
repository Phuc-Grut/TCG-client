import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactModal = ({ onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState("Cá nhân");

  const validateForm = () => {
    const form = formRef.current;
    if (!form) return false;

    const email = (form["email"] as HTMLInputElement)?.value;
    const name = (form["full_name"] as HTMLInputElement)?.value;
    const phone = (form["phone"] as HTMLInputElement)?.value;

    if (!name || name.trim() === "") {
      setErrorMessage("Vui lòng nhập họ và tên.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Email không hợp lệ.");
      return false;
    }

    if (!phone || phone.trim().length < 9) {
      setErrorMessage("Số điện thoại không hợp lệ.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current || !validateForm()) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_xc0mv5l", // <- Thay bằng service ID của bạn
        "template_ucatv1j", // <- Thay bằng template ID của bạn
        formRef.current,
        "1LxVJKRdLdHLZhrsQ" // <- Public key
      )
      .then(() => {
        setIsSent(true);
        formRef.current?.reset();
        setTimeout(() => {
          setIsSent(false);
          setIsLoading(false);
          onClose();
        }, 3000);
      })
      .catch((error) => {
        console.error("Lỗi gửi email:", error);
        setIsLoading(false);
        setErrorMessage("Không thể gửi thông tin. Vui lòng thử lại sau.");
      });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 grid place-items-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="text-center text-2xl font-bold text-orange-600 mb-8">
            Liên hệ với chúng tôi
          </h2>

          {isSent ? (
            <div className="text-green-600 font-semibold text-center text-sm">
              ✅ Cảm ơn bạn! Thông tin đã được gửi thành công.
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="date"
                value={new Date().toLocaleString()}
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="company_name"
                value={type === "Doanh nghiệp" ? undefined : ""}
              />
              <input
                type="hidden"
                name="company_address"
                value={type === "Doanh nghiệp" ? undefined : ""}
              />

              {errorMessage && (
                <div className="text-red-600 text-sm text-center font-medium">
                  ⚠ {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="full_name"
                  required
                  placeholder="Nguyễn Văn A"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="0123 456 789"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Bạn là
                </label>
                <select
                  name="user_type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option>Cá nhân</option>
                  <option>Doanh nghiệp</option>
                </select>
              </div>

              {type === "Doanh nghiệp" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Tên công ty
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      placeholder="Công ty TNHH ABC"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Địa chỉ công ty
                    </label>
                    <input
                      type="text"
                      name="company_address"
                      placeholder="123 Nguyễn Trãi, Hà Nội"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold py-2 rounded-lg hover:opacity-90 transition-all duration-300 mt-2"
              >
                {isLoading ? "Đang gửi..." : "Gửi thông tin"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
