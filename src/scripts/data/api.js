import BASE_URL from "../config";

const ENDPOINTS = {
    SHOP_ITEMS: `${BASE_URL}/shopItems`,
    // SPECIFIED_SHOP_ITEMS: `${BASE_URL}/shopItems/${id}`,
}

export async function getAllShopItems() {
    const fetchResponse = await fetch(ENDPOINTS.SHOP_ITEMS);
    const json = await fetchResponse.json();

    console.log('API response:', json);

    return {
      ok: fetchResponse.ok,
      message: json.status,
      data: json.data.shopItems,
    }
}