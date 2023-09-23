<script setup>
import { ref } from 'vue'

defineProps({
	msg: String,
})

const count = ref(0)
</script>

<template>
	<div id="background-image" class="sm:flex bg-gray-100 p-12">
		<div class="bg-red-900 bg-opacity-75 background-opacity-20 text-center p-4 text-white text-lg rounded-t">
			<h1 class="font-semibold">ENCIK NAO</h1>
			<p class="font-thin text-sm">WIBU YANG BERJAYA</p>
		</div>
		<div class="bg-white rounded-b bg-opacity-75 shadow-xl">
			<div class="p-4">

			</div>
		</div>
	</div>
</template>

<style scoped></style>
