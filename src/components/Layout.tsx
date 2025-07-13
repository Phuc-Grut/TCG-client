import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import ContactModal from "./ContactModal";
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
    <div>
      {" "}
      <Header onOpenModal={handleOpenModal} />
      {/* Main content */}
      <main className="min-h-[80vh] px-4 overflow-x-hidden">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />
      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
