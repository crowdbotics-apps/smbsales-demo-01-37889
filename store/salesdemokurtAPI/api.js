import axios from "axios"
const salesdemokurtAPI = axios.create({
  baseURL: "https://smbsales-demo-01-37889.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return salesdemokurtAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return salesdemokurtAPI.post(`/api/v1/signup/`, payload)
}
function modules_payments_get_payments_history_list(payload) {
  return salesdemokurtAPI.get(`/modules/payments/get_payments_history/`)
}
function modules_payments_get_payments_methods_list(payload) {
  return salesdemokurtAPI.get(`/modules/payments/get_payments_methods/`)
}
function modules_payments_payment_sheet_create(payload) {
  return salesdemokurtAPI.post(`/modules/payments/payment_sheet/`)
}
function modules_social_auth_apple_connect_create(payload) {
  return salesdemokurtAPI.post(`/modules/social-auth/apple/connect/`, payload)
}
function modules_social_auth_apple_login_create(payload) {
  return salesdemokurtAPI.post(`/modules/social-auth/apple/login/`, payload)
}
function modules_social_auth_facebook_connect_create(payload) {
  return salesdemokurtAPI.post(
    `/modules/social-auth/facebook/connect/`,
    payload
  )
}
function modules_social_auth_facebook_login_create(payload) {
  return salesdemokurtAPI.post(`/modules/social-auth/facebook/login/`, payload)
}
function modules_social_auth_google_connect_create(payload) {
  return salesdemokurtAPI.post(`/modules/social-auth/google/connect/`, payload)
}
function modules_social_auth_google_login_create(payload) {
  return salesdemokurtAPI.post(`/modules/social-auth/google/login/`, payload)
}
function modules_social_auth_socialaccounts_list(payload) {
  return salesdemokurtAPI.get(`/modules/social-auth/socialaccounts/`)
}
function modules_social_auth_socialaccounts_disconnect_create(payload) {
  return salesdemokurtAPI.post(
    `/modules/social-auth/socialaccounts/${payload.id}/disconnect/`,
    payload
  )
}
function rest_auth_login_create(payload) {
  return salesdemokurtAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_list(payload) {
  return salesdemokurtAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return salesdemokurtAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return salesdemokurtAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return salesdemokurtAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return salesdemokurtAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return salesdemokurtAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return salesdemokurtAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_read(payload) {
  return salesdemokurtAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return salesdemokurtAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return salesdemokurtAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  modules_payments_get_payments_history_list,
  modules_payments_get_payments_methods_list,
  modules_payments_payment_sheet_create,
  modules_social_auth_apple_connect_create,
  modules_social_auth_apple_login_create,
  modules_social_auth_facebook_connect_create,
  modules_social_auth_facebook_login_create,
  modules_social_auth_google_connect_create,
  modules_social_auth_google_login_create,
  modules_social_auth_socialaccounts_list,
  modules_social_auth_socialaccounts_disconnect_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
