const ProductPictures = ({ product, setCurrentPicture, currentPicture }) => {
    let newProducts = [];
    if (product.pictures.length > 5) {
        newProducts = product.pictures.slice(0, 5);
    } else {
        newProducts = product.pictures;
    }

    // console.log(currentPicture);

    const handleMouseEnter = (index) => {
        setCurrentPicture(index);
        console.log(index);
    };

    return (
        <div className="flex flex-col gap-2 p-3">
            {newProducts.map((picture, index) => (
                <div
                    onMouseEnter={() => {
                        handleMouseEnter(index);
                    }}
                    key={index}
                    className={` cursor-pointer w-14 h-14 overflow-hidden p-1 border-2 border-nextGray rounded-md ${
                        currentPicture === index ? "border-blue-500" : ""
                    }`}
                >
                    <img
                        className="w-full h-full object-contain"
                        src={picture.url}
                        alt=""
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductPictures;
