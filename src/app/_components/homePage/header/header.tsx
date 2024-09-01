export default function Header() {
    
    return (
        <header>
            <div className="flex justify-around mt-5 border-b-2 h-14">

                <div>
                    <span className="mr-3 text-sm"><i className="fa-solid fa-language"></i> USD <i className="fa-solid fa-chevron-down"></i></span>
                    <span className="text-sm">English <i className="fa-solid fa-chevron-down"></i></span>
                </div>

                <h1 className="text-3xl font-bold ">ecomus</h1>

                <div>
                    <i className="fa-solid fa-magnifying-glass mr-3"></i>
                    <i className="fa-regular fa-user mr-3"></i>
                    <i className="fa-regular fa-heart mr-3"></i>
                    <i className="fa-solid fa-bag-shopping mr-3"></i>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <p className="mr-6">Home <i className="fa-solid fa-chevron-down"></i></p>
                <p className="mr-6">Shop <i className="fa-solid fa-chevron-down"></i></p>
                <p className="mr-6">Products <i className="fa-solid fa-chevron-down"></i></p>
                <p className="mr-6">Page <i className="fa-solid fa-chevron-down"></i></p>
                <p className="mr-6">Blog <i className="fa-solid fa-chevron-down"></i></p>
                <p className="mr-6">Buy now</p>
            </div>
        </header>
    );
};