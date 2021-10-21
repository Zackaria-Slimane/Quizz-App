<template>
	<div class="result">
		<div class="title">{{ results[resultIndex].title }}</div>
		<div class="desc">
			<p>{{ results[resultIndex].desc }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Results",
		props: ["totalCorrect", "results"],
		computed: {
			resultIndex() {
				let index = 0;
				this.results.forEach((e, i) => {
					if (e.min <= this.totalCorrect && e.max >= this.totalCorrect) {
						index = i;
					}
				});
				return index;
			},
		},
	};
</script>

<style></style>
