import React from 'react';
import {Modal} from 'antd';
import JsonP from 'jsonp';
import axios from 'axios';

export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                params:'callback'
            },function(err,response){
                //to-do
                if(response.status == 'success'){
                    resolve(response);
                }else{
                    reject(response.message);
                }
            })
        })
    }
    static ajax(options){
        let  loading;
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseApi='https://www.easy-mock.com/mock/5bc4464cf8cdf063243f3826/mockapi';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data&& options.data.params) || ''
            }).then((response)=>{
                if(options.data && options.data.isShowLoading !== false){
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if(response.status == '200'){
                    const res = response.data;
                    if(res.code=='0'){
                        resolve(response);
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.msg,
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
}
