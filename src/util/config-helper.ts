import { SessionStorageKeys } from '@/util/constants'

export default class ConfigHelper {
  static async fetchConfig () {
    // sbc common components need the following keys
    sessionStorage.setItem(SessionStorageKeys.AuthApiUrl, ConfigHelper.getAuthAPIUrl())
    sessionStorage.setItem(SessionStorageKeys.PayApiUrl, ConfigHelper.getPayAPIURL())
    sessionStorage.setItem(SessionStorageKeys.StatusApiUrl, ConfigHelper.getStatusAPIUrl())
    sessionStorage.setItem(SessionStorageKeys.AuthWebUrl, ConfigHelper.getAuthWebUrl())
    sessionStorage.setItem(SessionStorageKeys.FasWebUrl, ConfigHelper.getFasWebUrl())
    if (ConfigHelper.getSiteminderLogoutUrl()) {
      sessionStorage.setItem(SessionStorageKeys.SiteminderLogoutUrl, ConfigHelper.getSiteminderLogoutUrl())
    }
  }

  /**
 * this will run everytime when vue is being loaded..so do the call only when session storage doesnt have the values
 */
  static saveConfigToSessionStorage () {
    return this.fetchConfig()
  }

  static getSelfURL () {
    // this is without a trailing slash
    return `${window.location.origin}${process.env.VUE_APP_PATH}`.replace(/\/$/, '') // remove the slash at the end
  }

  static getPayAPIURL () {
    const payApiUrl = `${process.env.VUE_APP_PAY_API_URL}` + `${process.env.VUE_APP_PAY_API_VERSION}`
    return sessionStorage.getItem(SessionStorageKeys.PayApiUrl) || payApiUrl
  }

  static getFasAPIURL () {
    return `${ConfigHelper.getPayAPIURL()}/fas`
  }

  static getAuthAPIUrl () {
    const authApiUrl = `${process.env.VUE_APP_AUTH_API_URL}` + `${process.env.VUE_APP_AUTH_API_VERSION}`
    return sessionStorage.getItem(SessionStorageKeys.AuthApiUrl) || authApiUrl
  }

  static getAuthWebUrl () {
    return sessionStorage.getItem(SessionStorageKeys.AuthWebUrl) || `${process.env.VUE_APP_AUTH_WEB_URL}`
  }

  static getFasWebUrl () {
    return sessionStorage.getItem(SessionStorageKeys.FasWebUrl) || `${process.env.VUE_APP_FAS_WEB_URL}`
  }

  static getStatusAPIUrl () {
    const statusApiUrl = `${process.env.VUE_APP_STATUS_API_URL}` + `${process.env.VUE_APP_STATUS_API_VERSION}`
    return sessionStorage.getItem(SessionStorageKeys.StatusApiUrl) || statusApiUrl
  }

  static getSiteminderLogoutUrl () {
    const logoutUrl = `${process.env.VUE_APP_SITEMINDER_LOGOUT_URL}`
    return sessionStorage.getItem(SessionStorageKeys.SiteminderLogoutUrl) || logoutUrl
  }

  static getKeycloakAuthUrl () {
    return `${process.env.VUE_APP_KEYCLOAK_AUTH_URL}`
  }

  static getKeycloakRealm () {
    return `${process.env.VUE_APP_KEYCLOAK_REALM}`
  }

  static getKeycloakClientId () {
    return `${process.env.VUE_APP_KEYCLOAK_CLIENTID}`
  }

  static getAddressCompleteKey () {
    return `${process.env.VUE_APP_ADDRESS_COMPLETE_KEY}`
  }

  static addToSession (key:string, value:any) {
    sessionStorage.setItem(key, value)
  }

  static getFromSession (key:string) {
    return sessionStorage.getItem(key)
  }

  static removeFromSession (key:string) {
    sessionStorage.removeItem(key)
  }

  static clearSession () {
    sessionStorage.clear()
  }
}
