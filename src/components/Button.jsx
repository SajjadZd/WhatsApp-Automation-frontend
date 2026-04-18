const Button = ({ children, variant = "primary" }) => {
    const base =
        "px-6 py-3 rounded-2xl font-semibold transition shadow-sm mx-2";
    const styles =
        variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-white border border-gray-300 hover:bg-gray-50";
    return <button className={`${base} ${styles}`}>{children}</button>;
};

export default Button