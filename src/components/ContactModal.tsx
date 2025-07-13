import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: Props) {
  const [type, setType] = useState("Cá nhân");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 grid place-items-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative animate-fadeIn">
        {/* Close button */}
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

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Số điện thoại */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Số điện thoại</label>
              <input
                type="tel"
                placeholder="0123 456 789"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Bạn là */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Bạn là</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option>Cá nhân</option>
                <option>Doanh nghiệp</option>
              </select>
            </div>

            {/* Nếu là doanh nghiệp thì hiện thêm */}
            {type === "Doanh nghiệp" && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Tên công ty</label>
                  <input
                    type="text"
                    placeholder="Công ty TNHH ABC"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Địa chỉ công ty</label>
                  <input
                    type="text"
                    placeholder="123 Nguyễn Trãi, Hà Nội"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </>
            )}

            {/* Gửi thông tin */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold py-2 rounded-lg hover:opacity-90 transition-all duration-300 mt-2"
            >
              Gửi thông tin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
