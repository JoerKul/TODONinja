<template>
    <v-app>
        <Navbar />
        <v-content class="mx-4 my-2"> <router-view></router-view> </v-content>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
    components: { Navbar },
}
</script>

<style></style>
