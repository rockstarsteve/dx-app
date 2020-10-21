import store from '@/config/store';
class cloudConfig {
	constructor(url, data, fn, loading) {
		this.url = url;
		this.data = data;
		if(fn === true){
			loading = fn;
		}else{
			this.fn = fn;
		}
		loading && store.commit('setLoadingShow', true);
	}
	cloudSyn() {
		uniCloud.callFunction({
				name: this.url,
				data: this.data
			}).then(res => {
				store.commit('setLoadingShow', false);
				if (res.success) {
					this.fn(res.result);
				} else {
					uni.showToast({
						title: '网络异常，请稍后再试!',
						icon: 'none',
					});
				}
			})
			.catch(err => {
				store.commit('setLoadingShow', false);
				console.log(err);
				uni.showToast({
					title: '网络异常，请稍后再试!',
					icon: 'none',
				});
			});

	}
	cloudAsy() {
		return new Promise((resolve, reject) => {
			uniCloud.callFunction({
					name: this.url,
					data: this.data
				})
				.then(res => {
					store.commit('setLoadingShow', false);
					if (!res.success) {
						reject('请求未成功');
						uni.showToast({
							title: '网络异常，请稍后再试!',
							icon: 'none',
						});
					} else {
						let data = res.result;
						if (data) {
							resolve(data);
						} else {
							reject('网络异常，请稍后再试1!');
							uni.showToast({
								title: '网络异常，请稍后再试!',
								icon: 'none',
							});
						}
					}
				})
				.catch(err => {
					store.commit('setLoadingShow', false);
					reject('网络异常，请稍后再试2!');
					uni.showToast({
						title: '网络异常，请稍后再试!',
						icon: 'none',
					});
				});
		});

	}

}

export default {
	clouds(url, mark = '', data = {}, fn = false, loading = false) {
		data.mark = mark;
		const cloudConfigs = new cloudConfig(url, data, fn, loading);
		if (fn && fn != true) {
			cloudConfigs.cloudSyn();
		} else {
			return cloudConfigs.cloudAsy();
		}
	}
};
