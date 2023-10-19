<template>
    <h1>{{ title ?? 'Hello world' }}</h1>
</template>

<script>
    export default {
        name: 'ExampleComponent',

        props: {
            title: { type: String, default: null }
        }
    }
</script>
