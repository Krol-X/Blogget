import {beApiRequest} from './base/apiRequestFact';

export const redditBest = beApiRequest('/best');
export const redditInfo = beApiRequest('/api/info');
export const redditComments = beApiRequest('/comments'); // /article_id36
