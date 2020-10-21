'use strict';
const db = uniCloud.database();
const dbCmd = db.command;

async function Taber(e) {
	let taber = await db.collection('global').get();
	if(taber.affectedDocs){
		return {
			code:0,
			taber:taber.data[0].taber
		}	
	}else{
		return {
			code:500,
			msg:"未能与服务器取得联系"
		}
	}
}

async function Global(e) {
	let global = await db.collection('global').get();
	if(global.affectedDocs){
		return {
			code:0,
			data:global.data[0],
			msg:'操作成功'
		};
	}else{
		return {
			code:-1
		}
	}
}

async function setGlobal(event) {
	let g = await db.collection('global').where({
		version:event.params.version
	}).get();
	console.log(g);
	await db.collection('error').add({
		url:event.mark,
		data:g,
		fn: 'setGlobal'
	});
	if(g.affectedDocs === 1){
		let res = await db.collection('global').where({
			version:event.params.version
		}).update(event.params);
		return res;
	}else{
		let res = await db.collection('global').add(event.params);
		return res;
	}
}
//轮播
async function banner(event) {
	let banner = await db.collection('banner').get();
	if(banner.affectedDocs){
		return {
			code:0,
			data:banner.data[0].banner,
			msg:'操作成功'
		};
	}else{
		return {
			code:-1
		}
	}
}

exports.main = async (event, context) => {
	if (event.mark == 'taber') {
		return await Taber(event);
	}else if (event.mark == 'global') {
		return await Global(event);
	}else if (event.mark == 'setGlobal') {
		return await setGlobal(event);
	}else if (event.mark == 'banner') {
		return await banner(event);
	}
	
	
};
