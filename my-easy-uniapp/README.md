为什么写这个
每次开发项目都找框架。别人大的框架东西太多。拿到手可能要改很多东西。不如写个基础的。

达到什么效果
1.基础化，要什么加什么。不会上来给你一堆东西让你学。有需要自己加，也防止go学完回来前端不会了。
2.公共化，写绝对必要的公共的方式组件。方便-比如弹出层，加载框。优化调用方式。
3.定制化，只写基础框架调用方式和必要组件。有全局的设定代码，可本地可远程
4.代码尽量简单可读。最好让初学者也会。
5.支持unicloud。
6.预先支持多语言。防止后期需要。

目录安排：
api：接口

common：公用js

components  组件    
	common：全局组件
	my-module：全局单独组件
	public-module.vue：每个页面都需要引入
	
config:定制化

plugins：静态工具不常使用

ps：
本人很菜也想进步。代码也有借鉴大神。接受附带问题的意见和批评。
项目刚起步。只能自己用。每天上传一点。预先写H5端写完了再加其他端
有想要的功能可以留言给我Q：157876229。群：157876229。

第一版：
模态窗：
	this.$store.commit('setMyModel', {
		index:1,	//某块标识
		type:'DialogModal',   //   Modal   bottomModal  DialogModal  
		title:'这是标题',    
		main:'主题'
	});
	methods 中 model方法唤起。多个模态框可根据data.index分类。data.main判断确定还是取消；

存储管理： 总存 为site大JSON数据。
	存： this.tools.setSite('aaa',数据);
	拿:  this.tools.getSite('aaa');

unicloud接口：
	异步： 最后一个数加载判断。true加载.false不写不加载
		this.$cloud('global','global',{
		},function(res){
			console.log(res)
		},true)
	同步：
		// let aaaa = await this.$cloud('global','global',{},true)

后台uniapp基础搭建  bigLog为true调用
	记得选择空间，初始化数据上传云函数；后期开放本地
	随便吐槽下。unicloud不支持socket扎心。等待后期把

加载
	this.$store.commit('setLoadingShow', true);
	
config
	总设置：有备注
	
router
	config-global里写router。有备注。控制标题名/强制登录/控制导航后退键和右侧展示内容（以后在写）














