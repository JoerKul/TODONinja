<template>
    <div class="team">
        <h1 class="subheading grey--text">Team</h1>

        <v-container class="my-2">
            <v-layout row wrap>
                <v-flex
                    xs12
                    sm6
                    md4
                    lg3
                    v-for="person in team"
                    :key="person.name"
                >
                    <v-card class="text-xs-center ma-3">
                        <v-responsive>
                            <v-avatar size="100" class="ma-2 grey lighten-2">
                                <img :src="person.avatar"/>
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="grey">
                                <v-icon small left>message</v-icon>
                                <span>MESSAGE</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                {
                    name: 'Pauolo',
                    role: 'Designer',
                    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
                },
                {
                    name: 'Marco',
                    role: 'Web Developer',
                    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
                },
                {
                    name: 'Chui li',
                    role: 'Social Media',
                    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
                },
                {
                    name: 'Stefano',
                    role: 'Sales',
                    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
                },
            ],
        }
    },
}
</script>

<style></style>
