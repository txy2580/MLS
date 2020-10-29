import {request} from './request.js'

 export function getHomeMultidata(){
return request({
 		url:"/home/multidata"
	})
 }
 
 export function getHomeGoods(type,page){
 	 return request({
 		 url:'/home/data',
 		 params:{
			 type,
			 page
		 }
 	 })
 }

/* const totalNums = [];

const num1 = [1,2,3]

totalNums.push(...num1) */