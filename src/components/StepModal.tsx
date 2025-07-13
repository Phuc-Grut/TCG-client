export default function StepModal({ step, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center text-3xl text-white`}
          >
            {step.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              BƯỚC {step.step}: {step.title}
            </h2>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="text-gray-700 text-sm leading-relaxed">
          {step.detail ? (
            <div className="space-y-3">{step.detail}</div>
          ) : (
            <p>Chi tiết đang được cập nhật...</p>
          )}
        </div>
      </div>
    </div>
  );
}
