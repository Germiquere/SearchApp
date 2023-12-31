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

    const onMouse =
        "cursor-pointer w-14 h-14 overflow-hidden p-1 border-2 rounded-md border-borderColor";
    const outMouse =
        "cursor-pointer w-14 h-14 overflow-hidden p-1 border-2 rounded-md border-nextGray";

    return (
        <div className="flex flex-col gap-2 p-3">
            {newProducts.map((picture, index) => (
                <div
                    onMouseEnter={() => {
                        handleMouseEnter(index);
                    }}
                    key={index}
                    className={currentPicture === index ? onMouse : outMouse}
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
