<script>
	export let name;
	export let age;

	$: uppercaseName = name.toUpperCase();

	function incrementAge() {
		age += 1;
	}

	function changeName() {
		name = 'monkey';
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click="{incrementAge}">Change Age</button>
<button on:click="{changeName}">Change Name</button>
