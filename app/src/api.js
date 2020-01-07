export const HOST = process.env.REACT_APP_ENDPOINT_URL
export const HOST_ML = process.env.REACT_APP_ML_ENDPOINT_URL;

export function loadCategory(category) {
    return fetch(`${HOST_ML}/categories/${category}`).then(value => value.json());
}