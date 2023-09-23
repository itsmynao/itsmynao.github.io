<script setup>
import { ref } from 'vue'

defineProps({
	msg: String,
})

const count = ref(0)
</script>

<template>
	<div id="background-image" class="bg-gray-100 p-12">
		<div class="bg-red-900 bg-opacity-75 background-opacity-20 text-center p-4 text-white text-lg rounded-t">
			<img src="../assets/cecilia.png" class="h-32 m-auto mb-5" alt="">
			<div>
				<h1 class="font-semibold">ENCIK NAO</h1>
				<p class="font-thin text-sm">WIBU YANG STRESS</p>
			</div>
		</div>
		<div class="bg-white h-96 lg:h-132 overflow-y-scroll rounded-b bg-opacity-75 shadow-xl">
			<div class="text-center my-5">
				<h1 class="font-semibold text-red-700">PENGENALAN</h1>
				<div class="flex justify-center items-center gap-1 m-auto">
					<div class="w-12 h-1 bg-red-700 rounded-full"></div>
					<div class="w-2 h-2 bg-red-700 rounded-full"></div>
					<div class="w-12 h-1 bg-red-700 rounded-full"></div>
				</div>
			</div>
			<div class="p-4 text-red-700 text-center w-96 m-auto">
				<p>Seorang <span class="font-semibold">WIBU</span> berkelahiran anak jati <span class="font-semibold">JOHOR
						BAHRU</span> yang cemerlang dalam
					pengaturcaraan, suka <span class="font-semibold">menyendiri</span> dan <span
						class="font-semibold">meluahkan
						perasaan</span> dekat facebook.
				</p>
				<div class="flex justify-center items-center text-center mt-2 gap-2">
					<a target="_blank" href="https://www.facebook.com/people/Encik-Nao/100093700727393/">
						<i
							class="fa-brands fa-facebook text-2xl hover:text-4xl transition-all duration-500 hover:text-red-900 hover:cursor-pointer"></i>
					</a>
					<a target="_blank" href="https://steamcommunity.com/id/itsmynao/">
						<i
							class="fa-brands fa-steam text-2xl hover:text-4xl transition-all duration-400 hover:text-red-900 hover:cursor-pointer"></i>
					</a>
				</div>
			</div>
			<div class="text-center my-5">
				<h1 class="font-semibold text-red-700">HOBI</h1>
				<div class="flex justify-center items-center gap-1 m-auto">
					<div class="w-12 h-1 bg-red-700 rounded-full"></div>
					<div class="w-2 h-2 bg-red-700 rounded-full"></div>
					<div class="w-12 h-1 bg-red-700 rounded-full"></div>
				</div>
			</div>
			<div class="text-center w-full text-sm lg:text-base hover:bg-white py-2 transition-all duration-500">
				<ul>
					<li class="flex justify-center items-center gap-2 text-red-700">
						<div>&#9989;</div>
						<p>SUKA KACAU ANAK DARA/DUDA ORANG</p>
					</li>
					<li class="flex justify-center items-center gap-2 text-red-700">
						<div>&#9989;</div>
						<p>MENGHABISKAN MASA DI DEPAN KOMPUTER</p>
					</li>
					<li class="flex justify-center items-center gap-2 text-red-700">
						<div>&#9989;</div>
						<p>PENCURI/POSTING MEME TANPA SOS</p>
					</li>
				</ul>
			</div>
			<div class="text-center my-5">
				<h1 class="font-semibold text-red-700">SKILLS ISSUE</h1>
				<div class="flex justify-center items-center gap-1 m-auto">
					<div class="w-12 h-1 bg-red-700 rounded-full"></div>
					<div class="w-2 h-2 bg-red-700 rounded-full"></div>
					<div class="w-12 h-1 bg-red-700 rounded-full"></div>
				</div>
			</div>
			<div class="">
				<div
					class="flex flex-col justify-center items-center mb-5 w-full hover:bg-white hover:text-lg py-2 transition-all duration-500 hover:bg-white hover:text-lg py-2 transition-all duration-500">
					<label class="font-semibold text-red-800">WIBU STRESS LEVEL</label>
					<div class="flex gap-1">
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-300"></div>
					</div>
					<div class="mt-2 text-red-700">
						<p>- Stress tak tertolong</p>
						<p>- Susah nak jejak rumput depan rumah.</p>
					</div>
				</div>
				<div
					class="flex flex-col justify-center items-center mb-5 w-full hover:bg-white hover:text-lg py-2 transition-all duration-500">
					<label class="font-semibold text-red-800">SHITPOSTING SKILLS</label>
					<div class="flex gap-1">
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
					</div>
					<div class="mt-2 text-red-700">
						<p>- Real shit!</p>
					</div>
				</div>
				<div
					class="flex flex-col justify-center items-center mb-5 w-full hover:bg-white hover:text-lg py-2 transition-all duration-500">
					<label class="font-semibold text-red-800">SOCIAL SKILLS</label>
					<div class="flex gap-1">
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
					</div>
					<div class="mt-2 text-red-700">
						<p>- Am pretty bad dawg!</p>
					</div>
				</div>
				<div
					class="flex flex-col justify-center items-center mb-5 w-full hover:bg-white hover:text-lg py-2 transition-all duration-500">
					<label class="font-semibold text-red-800">PROGRAMMING SKILLS</label>
					<div class="flex gap-1">
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-700"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
						<div class="w-12 h-1 bg-red-300"></div>
					</div>
					<div class="mt-2 text-red-700">
						<p>- Kira power lah jugak!</p>
					</div>
				</div>
				<div class="text-center my-5">
					<h1 class="font-semibold text-red-700">PROJEK YANG TELAH DIBANGUNKAN</h1>
					<div class="flex justify-center items-center gap-1 m-auto">
						<div class="w-12 h-1 bg-red-700 rounded-full"></div>
						<div class="w-2 h-2 bg-red-700 rounded-full"></div>
						<div class="w-12 h-1 bg-red-700 rounded-full"></div>
					</div>
				</div>
				<div class="">
					<div class="w-96 m-auto text-center mb-5 text-red-700">
						<p class="italic">Takde projek apa-apa lagi &#128532;</p>
					</div>
				</div>
				<div class="text-center my-5">
					<h1 class="font-semibold text-red-700">FAQ</h1>
					<div class="flex justify-center items-center gap-1 m-auto">
						<div class="w-12 h-1 bg-red-700 rounded-full"></div>
						<div class="w-2 h-2 bg-red-700 rounded-full"></div>
						<div class="w-12 h-1 bg-red-700 rounded-full"></div>
					</div>
				</div>
				<div class="text-red-700">
					<div class="w-96 m-auto text-center mb-5">
						<h1 class="font-semibold">Adakah kamu single?</h1>
						<p class="italic">- Ye, aku single &#128532;</p>
					</div>

					<div class="w-96 m-auto text-center mb-5">
						<h1 class="font-semibold">Kani?</h1>
						<p class="italic">- UWOOOOGHHHH &#128557;</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#background-image {
	background-image: url('../assets/cecilia-2.jpg');
	height: 100vh;
}
</style>
