<script setup>
import { computed, onMounted, ref } from 'vue'
import { useDevSiteStore } from '@/App/store.js'
import bProject from '@sections/ProjectSection.vue'
import bFooter from '@layouts/b-Footer.vue'
import bButton from '../Components/common/b-Button.vue'
import projects from '@/App/projects.js'
import backgroundImg from '@img/backgrounds/laptop-on-table.jpg'
import { VSwitch } from 'vuetify/components'
import PageTitle from '@sections/PageTitle.vue'

const devSiteStore = useDevSiteStore()
const selectedTag = ref('all')
const iframeMode = ref(false)

// Compute existing tags with counts
const existingTags = computed(() => {
    const tags = { all: projects.length }
    projects.forEach(project => {
        project.tags.forEach(tag => {
            tags[tag] = (tags[tag] || 0) + 1
        })
    })
    return tags
})

const getMode = computed(() => (iframeMode.value ? 'iframe' : 'image'))

// Method to select tags
const selectTag = (tag) => {
    selectedTag.value = selectedTag.value === tag ? 'all' : tag
}

// Set background image on mounted
onMounted(() => {
    devSiteStore.setPageImage(backgroundImg)
})
</script>

<template>
    <div>
        <PageTitle />
        <div class="card-container mx-auto flex justify-between items-center my-1">
            <div class="tags w-50">
                <bButton v-for="(count, tag) in existingTags" :key="tag" :class="{ 'active': selectedTag === tag }"
                          class="mr-4 mb-2 px-4 py-2 rounded-full"
                          color="primary" @click="selectTag(tag)">
                    {{ tag }} ({{ count }})
                </bButton>
            </div>
            <div>
                <VSwitch
                    class="text-white"
                    color="success"
                    inset
                    label="iFrame mode"
                    v-model="iframeMode">
                </VSwitch>
            </div>
        </div>
        <transition-group name="list">
            <bProject v-for="(project, i) in projects"
                       v-show="selectedTag === 'all' || project.tags.includes(selectedTag)"
                       :key="i" :mode="getMode" :selectedTag="selectedTag" v-bind="project" @selectTag="selectTag" />
        </transition-group>
        <bFooter blurred="1" class="mt-auto" />
    </div>
</template>

<style lang="scss" scoped>
.card-container {
    width: 95vw;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-leave-active {
    position: absolute;
}
</style>
