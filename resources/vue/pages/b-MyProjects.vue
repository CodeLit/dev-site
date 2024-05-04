<script setup>
import bProject from '@layouts/b-Project.vue'
import bFooter from '@layouts/b-Footer.vue'
import bButton from '../components/common/b-Button.vue'
import projects from '@js/projects.js'
</script>

<template>
    <div>
        <div class="card-container mx-auto flex justify-between items-center my-1">
            <div class="tags w-50">
                <b-button v-for="(count, tag) in existingTags" :key="tag" :class="{'active': selectedTag === tag}"
                          class="mr-4 mb-2 px-4 py-2 rounded-full"
                          color="primary" @click="selectTag(tag)">
                    {{ tag }} ({{ count }})
                </b-button>
            </div>
            <div>
                <v-switch v-model="iframeMode" class="text-white" color="success" inset label="iFrame mode"></v-switch>
            </div>
        </div>
        <TransitionGroup
            name="list"
        >
            <b-project v-for="(project,i) in projects"
                       v-show="selectedTag === 'all' || project.tags.includes(selectedTag)"
                       :key="i" :mode="getMode()" :selectedTag="selectedTag" v-bind="project" @selectTag="selectTag" />

        </TransitionGroup>
        <b-footer blurred="1" class="mt-auto" />
    </div>
</template>
<script>

import backgroundImg from '@img/backgrounds/laptop-on-table.jpg'


export default {
    mounted() {
        this.$store.commit('setPageImage', backgroundImg)
    },
    data() {
        return {
            projects: projects,
            iframeMode: false,
            selectedTag: 'all',
        }
    },
    computed: {
        existingTags() {
            let tags = {
                all: projects.length,
            }
            for (const projectsKey in projects) {
                const project = projects[projectsKey]
                if (project.tags) {
                    for (const tag of project.tags) {
                        if (tags[tag]) {
                            tags[tag] += 1
                        } else {
                            tags[tag] = 1
                        }
                    }
                }
            }
            return tags
        },
    },
    methods: {
        getMode() {
            return this.iframeMode ? 'iframe' : 'image'
        },
        selectTag(tag) {
            if (this.selectedTag === tag) {
                this.selectedTag = 'all'
            } else {
                this.selectedTag = tag
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.card-container {
    width: 95vw;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>
