// @flow
import { getAppServiceUrls } from '../../../../utils';

const axios = require('axios');

export function loadWordRecommendations(
    queryString: string
): Promise<any> {
    return axios({
        method : 'post',
        url: `${getAppServiceUrls().computerAndTacosServiceUrl}/tries/search`,
        data: {
            queryString
        }
    });
}
