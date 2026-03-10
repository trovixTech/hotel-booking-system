const Loader = () => {
    const name = "DADDY".split("");

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-[9999]">
            <div className="flex space-x-2">
                {name.map((letter, index) => (
                    <span 
                        key={index} 
                        className="text-6xl font-black text-white animate-bounce"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Loader;