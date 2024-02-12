<template>
	<div
		class="place-items-center flex from-emerald-500 bg-fuchsia-700 justify-center bg-gradient-to-l uppercase p-8 text-white w-full"
		style="min-height:150px"
	>
		<PageContainer>
			<slot>
				<h1 class="w-full font-medium text-3xl">
					Your fancy hero title
				</h1>
			</slot>
		</PageContainer>
	</div>
</template>
<script>
	import PageContainer from '@/components/organisms/PageContainer.vue';
	export default {
		components: {
			PageContainer: PageContainer
		},
		data: () => ({})
	};

</script>
<style scoped></style>