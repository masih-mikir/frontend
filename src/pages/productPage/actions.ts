import axios from 'axios';

import { CONFIG } from 'src/config/config';
import { InterfaceProductRequest, InterfaceRecreation } from 'src/interfaces/product';

export const getRecreations = (data: InterfaceProductRequest, cb: any) => {
    const url = `${CONFIG.apiUrl}/itineraries`;
    return axios({
        data,
        method: 'POST',
        transformRequest: [(jsonData: InterfaceProductRequest, headers) => {
            return Object.keys(jsonData).reduce((formData: FormData, key) => {
                formData.append(key, jsonData[key])
                return formData;
            }, new FormData())
        }],
        url,
    })
        .then((response) => {
            const responsesData: any[] = response.data.data;
            const realRecreations = responsesData.map(responseData => {
                if (responseData.category === "recreation") {
                    return responseData;
                }
                if (responseData.category === "transport") {
                    return {
                        category: responseData.category,
                        position_lat: responseData.position_lat,
                        position_long: responseData.position_long,
                        recreation_city: responseData.restaurant_city,
                        recreation_description: "Perjalaan menggunakan taksi",
                        recreation_id: responseData.cost,
                        recreation_image: responseData.restaurant_image,
                        recreation_name: "Dalam perjalanan menuju tempat selanjutnya",
                        recreation_price: responseData.cost,
                        recreation_time_minute: responseData.time,
                    }
                }
                return {
                    category: responseData.category,
                    position_lat: responseData.position_lat,
                    position_long: responseData.position_long,
                    recreation_city: responseData.restaurant_city,
                    recreation_description: responseData.restaurant_description,
                    recreation_id: responseData.restaurant_id,
                    recreation_image: responseData.restaurant_image,
                    recreation_name: responseData.restaurant_name,
                    recreation_price: responseData.restaurant_price,
                    recreation_time_minute: responseData.restaurant_time_minute,
                }
            })
            const budget = realRecreations.reduce((sum, res: InterfaceRecreation) => {
                return sum + res.recreation_price;
            }, 0)
            cb(realRecreations, budget)
        })
}
