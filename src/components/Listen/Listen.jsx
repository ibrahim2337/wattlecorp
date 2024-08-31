import "./Listen.css"

const Listen = () => {
    return (
        <div className="listen bg-black">
            <div className="grid lg:grid-cols-2 justify-center items-center gap-5 py-20 px-40">
             <div className="text-center">
                <h1 className="text-4xl font-bold text-red-100">Listen to People</h1>
                <p className="text-[#a09f9f] text-sm font-semibold py-8">We help companies in UAE to protect their online assets.</p>
                <p className="text-red-100 text-sm font-semibold pt-3">Wattlecorp team took barely 3 days to figure out the issues I had on my application. Their team consistently worked with my developer team to build a security system for my application which deals with sensitive data. Thank you team for your genius work.</p>
                <h3 className="text-red-100 text-lg font-bold mt-8">CEO</h3>
                <p className="text-[#6e6d6d] text-xs">Health Tech Company at Dubai, UAE</p>
             </div>
            </div>
        </div>
    );
};

export default Listen;