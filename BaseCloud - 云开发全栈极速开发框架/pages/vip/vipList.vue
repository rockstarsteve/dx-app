<template>
	<layout>
		<block slot="titleLeft">
			<conditions :showFirst="true" :conditions="conditions" :list="conditonList" @confirm="submitSearch"></conditions>
		</block>
		
		<block slot="titleRight">
			<auth-nav href="/pages/user/userEdit" url="user-center/user/info" class="btn w80 flex">
				<text class="bIcon-addCircle mr5"></text>
				添加
			</auth-nav>
		</block>
		这里是会员列表页面
	</layout>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
