<template>
	<Default>
		<PageContainer class="flex-col">
			<div class="mb-32 flex mt-8 flex-col lg:flex-row mx-6">
				<div class="lg:mr-6 grow">
					<h2 class="overflow-hidden w-full text-ellipsis whitespace-nowrap text-2xl font-medium mb-6">
						Product Detail
					</h2>
					<div class="from-fuchsia-950 bg-gradient-to-tl bg-slate-800 rounded-md aspect-video">
					</div>
				</div>
				<div class="w-96">
					<h2 class="text-2xl font-medium mt-6 lg:mt-0">
						Price
					</h2>
					<h3 class="font-extralight text-xl">
						400 USD
					</h3>
					<p class="mt-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac leo vel quam facilisis ullamcorper. Donec auctor sapien ac sapien commodo, id fringilla nulla vulputate.
					</p>
					<p class="mt-4">
						Sed ut nulla nec odio bibendum dapibus. Cras ultricies elit id ex vestibulum, sit amet gravida magna consequat. Sed interdum velit in varius tempor.
					</p><button class="hover:bg-pink-700 py-1.5 px-4 rounded-md bg-pink-600 text-white mt-6">
						Add to Cart
					</button>
				</div>
			</div>
		</PageContainer>
	</Default>
</template>
<script>
	import PageContainer from '@/components/organisms/PageContainer.vue';
	import Default from '@/components/templates/Default.vue';
	export default {
		components: {
			PageContainer: PageContainer,
			Default: Default
		},
		data: () => ({})
	};

</script>
<style scoped></style>