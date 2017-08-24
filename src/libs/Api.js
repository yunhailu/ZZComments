import Vue from 'vue'

const API = {
    ZZ_FEEDBACK_APP_PAGE: 'zzFeedbackAppPage',
    ZZ_FEEDBACK_APP_ADD: 'zzFeedbackAppAdd',
    ZZ_FEEDBACK_APP_DETAIL_ITEM: 'zzFeedbackAppDetailItem',
    ZZ_FEEDBACK_APP_DETAIL_REPLAY: 'zzFeedbackAppDetailReplay'
};

const Request = {
    jsonp(URL, params){
        return Vue.http.jsonp(URL, { params, credentials: true } )
            .then(response => response.data)
            .catch(err => err);
    }
};

/**
 * @description 获取话题列表
 * @params {String} pageIndex
 * @return {Promise}
 * */
export const zzFeedbackAppPage = (params) => {
    return Request.jsonp(API.ZZ_FEEDBACK_APP_PAGE, params);
};

/**
 * @description 获取话题详情
 * @params title
 * @params content
 * @params parId
 * @params feedBackType(0: 发送, 1: 回复)
 * @return {Promise}
 * */
export const zzFeedbackAppAdd = (params) => {
    return Request.jsonp(API.ZZ_FEEDBACK_APP_ADD, params);
};

/**
 * @description 获取话题详情
 * @params {String} parId 话题ID
 * @return {Promise}
 * */
export const zzFeedbackAppDetailItem = (params) => {
    return Request.jsonp(API.ZZ_FEEDBACK_APP_DETAIL_ITEM, params);
};

/**
 * @description 获取话题回复
 * @params {String} parId 话题ID
 * @return {Promise}
 * */
export const zzFeedbackAppDetailReplay = (params) => {
    return Request.jsonp(API.ZZ_FEEDBACK_APP_DETAIL_REPLAY, params);
};

