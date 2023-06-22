
const BASE_URL = 'https://sup-backend-5joh.onrender.com'
// https://sup-api-js.herokuapp.com
// https://sup-backend-5joh.onrender.com
// https://sup-frontend-u8ga.onrender.com
// http://localhost:8080
export const API_URL = (slug) => `${BASE_URL}/${slug}`
export const API_LIKES = (id) => `${BASE_URL}/posts/${id}/likes`
export const API_DELETE = (userId) => `${BASE_URL}/users/${userId}`
export const API_DELETE_MSG = (id) => `${BASE_URL}/posts/${id}`
export const API_UPDATE = (id) => `${BASE_URL}/posts/${id}`
