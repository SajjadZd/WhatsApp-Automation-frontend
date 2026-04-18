const FeatureCard = ({ children, title, desc }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 mb-4" >{children}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default FeatureCard