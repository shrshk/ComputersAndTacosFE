import { getAppServiceUrls, setAppServiceUrls } from './app-service-urls.config';

describe('appServiceUrls', () => {
  it('appServiceUrls initially undefined', () => {
    expect(getAppServiceUrls()).toBeUndefined();
  });

  it('appServiceUrls returns serviceUrls', () => {
    const serviceUrls = { dummy: 123 };
      setAppServiceUrls(serviceUrls);
    expect(getAppServiceUrls()).toEqual(serviceUrls);
  });
});
