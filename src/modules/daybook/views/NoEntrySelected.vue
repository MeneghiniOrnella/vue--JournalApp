<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">You have not selected anything</h1>
    </div>
    <Fab @on:click="createNewEntry" />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
    },
    methods: {
        createNewEntry(){
            //if(!entry){ return this.$router.push({ name: 'no-entry' }) }
            this.$router.push({ name: 'entry', params: { id: 'new' } })
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>