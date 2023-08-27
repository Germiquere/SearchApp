export const getItemById = async (id) => {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_URL_API_ITEM_BY_ID}${id}`
        );
        console.log(`${import.meta.env.VITE_URL_API_ITEM_BY_ID}${id}`);
        if (!res.ok) {
            throw new Error("Error al cargar los productos");
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
