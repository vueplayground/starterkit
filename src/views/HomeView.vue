<template>
	<Home>
		<PageContainer>
			<div class="w-full md:flex-row flex-col my-16 py-4 flex">
				<div class="px-6 justify-center flex-col flex w-full md:w-2/3">
					<h1 class="mb-8 font-semibold text-4xl">
						Next generation front end tooling
					</h1>
					<p class="tracking-wide max-w-md font-light text-2xl">
						Explore the depth of Vue.js visually, uncovering its elegant design patterns, and dynamic capabilities, immersing yourself in a vibrant web development experience.
					</p>
				</div>
				<div class="p-6 justify-center lg:justify-end flex w-full md:w-1/3">
					<img
						src="@/assets/images/screenshot.png"
						class="w-full object-contain opacity-90"
					/>
				</div>
			</div>
		</PageContainer>
		<div class="py-16 bg-slate-100 mt-6">
			<PageContainer>
				<div class="grid-cols-1 w-full gap-12 sm:grid-cols-3 grid p-6">
					<div class="duration-300 transition-colors hover:bg-slate-100 cursor-pointer items-center flex-col py-8 rounded-lg flex bg-slate-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="text-slate-400 w-16 h-16"
						>
							<path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
						</svg><span class="text-2xl pt-7 text-slate-800">
							Drag & Drop
						</span>
					</div>
					<div class="duration-300 transition-colors hover:bg-slate-100 cursor-pointer items-center flex-col py-8 rounded-lg flex bg-slate-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="text-slate-400 w-16 h-16"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clip-rule="evenodd"
							/>
						</svg><span class="text-2xl pt-7 text-slate-800">
							Less Code
						</span>
					</div>
					<div class="duration-300 transition-colors hover:bg-slate-100 cursor-pointer items-center flex-col py-8 rounded-lg flex bg-slate-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="text-slate-400 w-16 h-16"
						>
							<path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
							<path
								fill-rule="evenodd"
								d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
								clip-rule="evenodd"
							/>
						</svg><span class="text-2xl pt-7 text-slate-800">
							Save Time
						</span>
					</div>
				</div>
			</PageContainer>
		</div>
	</Home>
</template>
<script>
	import PageContainer from '@/components/organisms/PageContainer.vue';
	import Home from '@/components/templates/Home.vue';
	export default {
		components: {
			PageContainer: PageContainer,
			Home: Home
		},
		data: () => ({})
	};

</script>
<style scoped></style>