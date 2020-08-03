// @flow
/**
 * Holds the application settings
 */
let appServiceUrls;

export function getAppServiceUrls() {
  return appServiceUrls;
}

export function setAppServiceUrls(serviceUrls: any) {
    appServiceUrls = serviceUrls;
  return appServiceUrls;
}
