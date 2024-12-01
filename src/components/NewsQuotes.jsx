export default function NewsQuotes({ newsItem }) {
    if (!newsItem) return null;

    return (
        <div className="py-10 px-4 md:py-20 md:px-10 text-center text-white bg-[#1E1E1E]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-5xl mx-auto">
                "{newsItem.quotes}"
            </h1>
            <h2 className="text-md sm:text-xl md:text-2xl">
                ~ {newsItem.name} ~
            </h2>
            <h3 className="text-sm sm:text-lg md:text-1xl">
                {newsItem.position}
            </h3>
        </div>
    );
}
