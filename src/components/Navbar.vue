<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon
                color="grey--text"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">todo</span> <span>ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="grey lighten-2">
            <v-list>
                <v-list-tile
                    v-for="link in links"
                    :key="link.text"
                    router
                    :to="link.path"
                >
                    <v-list-tile-action>
                        <v-icon class="grey--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="grey--text">{{
                            link.text
                        }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', path: '/' },
                { icon: 'folder', text: 'Projects', path: '/project' },
                { icon: 'person', text: 'Team', path: '/team' },
            ],
        }
    },
}
</script>

<style></style>
