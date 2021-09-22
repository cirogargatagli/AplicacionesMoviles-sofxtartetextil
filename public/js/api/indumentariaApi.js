import { getJSON, get } from "./apiService.js"
const endpointArticulosMock = "https://api.jsonbin.io/b/614a772faa02be1d444c8c1e"

export const getArticulos = () => {
    return get(endpointArticulosMock)
}