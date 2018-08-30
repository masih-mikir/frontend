export interface InterfaceProductRequest {
    city: string;
    lat: number;
    lng: number;
    start_time: number;
    end_time: number;
};

export interface InterfaceProductResponse {
    data: InterfaceRecreation[];
};

export interface InterfaceRecreation {
    category: string;
    recreation_id: number;
    recreation_name: string;
    recreation_time_minute: number;
    recreation_price: number;
    position_lat: number;
    position_long: number;
    recreation_image: string;
    recreation_city: string;
    recreation_description: string;
};
