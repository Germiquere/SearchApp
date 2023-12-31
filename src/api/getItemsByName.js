import React from "react";

export const getItemsByName = async (name, offset = 0) => {
    try {
        const res = await fetch(
            `https://api.mercadolibre.com/sites/MLA/search?q=${name}&limit=50&offset=${offset}`
        );
        if (!res.ok) {
            throw new Error("Error al cargar los productos");
        }
        const data = await res.json();
        const categoriesArray =
            data.filters.length > 0
                ? data.filters.flatMap((filter) =>
                      filter.values.map((item) => item.name)
                  )
                : [];

        const itemsArray =
            data.results.length > 0
                ? data.results.map((item) => ({
                      id: item.id,
                      title: item.title,
                      price: {
                          currency: item.currency_id,
                          amount: item.price,
                      },
                      picture: item.thumbnail,
                      condition: item.condition,
                      free_shipping: item.shipping.free_shipping,
                  }))
                : [];
        // console.log(itemsArray);
        const newData = {
            author: {
                name: "German",
                lastname: "Miquere",
            },
            paging: data.paging,
            categories: categoriesArray,
            items: itemsArray,
        };
        console.log(newData);
        return data;
    } catch (error) {
        console.log(error);
    }
};
