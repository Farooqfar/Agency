export default function GradientButton({ children }) {
  return (
    <button
      className="px-6 py-3 rounded-xl text-white font-semibold 
                 bg-gradient-to-r from-[#ec4899] to-[#f97316]
                 hover:scale-105 transition-transform duration-300 shadow-lg hover:cursor-pointer"
    >
      {children}
    </button>
  );
}
