import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import ContactModal from "./ContactModal"; // nhớ đúng đường dẫn import
import { useState } from "react";

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Truyền hàm mở modal xuống Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Phần chính */}
      <main className="min-h-[80vh] px-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal đặt ở ngoài để không bị ảnh hưởng bởi header */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
