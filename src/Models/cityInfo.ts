import { weather } from "./weather";

export interface cityInfo {
    id:number;
    cityname : string;
    country : string;
    weather?: weather;
}