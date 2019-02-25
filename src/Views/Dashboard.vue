<template>
    <div class="dashboard">
        <h1 class="subheading grey--text">Dashboard</h1>

        <v-container class="my-3">
            <v-card v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="right">
                            <v-chip
                                small
                                :class="`${project.status} white--text caption`"
                                >{{ project.status }}</v-chip
                            >
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>
            <v-divider></v-divider>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: 'Tia Portal',
                    person: 'Najibi Nagra',
                    due: '12.03.2019',
                    status: 'ongoing',
                },
                {
                    title: 'Cordova',
                    person: 'Tom Klarens',
                    due: '11.01.2019',
                    status: 'completed',
                },
                {
                    title: 'Spirit',
                    person: 'Robert Doyle',
                    due: '01.02.2019',
                    status: 'ongoing',
                },
                {
                    title: 'Redux',
                    person: 'Ista Nestec',
                    due: '23.11.2018',
                    status: 'overdue',
                },
            ],
        }
    },
}
</script>

<style>
.project.completed {
    border-left: 4px solid #3cd1c2;
}

.project.ongoing {
    border-left: 4px solid orange;
}

.project.overdue {
    border-left: 4px solid tomato;
}

.chip.completed {
    background-color: #3cd1c2;
}

.chip.ongoing {
    background-color: orange;
}

.chip.overdue {
    background-color: tomato;
}
</style>
