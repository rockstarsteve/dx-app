'use strict';

const db = uniCloud.database();
const collection = db.collection('my-data')
const dbCmd = db.command

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	// 获取已存库的最大文章ID
	const record = await collection.get()
	
	//返回数据给客户端
	return record
};
