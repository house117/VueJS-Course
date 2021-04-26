<template>
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
          Server #{{ id }}
      </li>
</template>

<script>
    export default {
        props: ['id'],
        methods: {
            serverSelected() {
                
            }
        }
    }
</script>


<style>

</style>
