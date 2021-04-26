<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './componenets/Shared/Header.vue'
    import Footer from './componenets/Shared/Header.vue'
    import Servers from './componenets/Shared/Header.vue'
    import ServerDetails from './componenets/Shared/Header.vue'
    
    export default {
        componentes: { 
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
