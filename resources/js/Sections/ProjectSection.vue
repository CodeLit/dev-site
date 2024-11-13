<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import bCard from '@components/common/b-Card.vue'
import BButton from '../Components/common/b-Button.vue'
import { importImg, isMobile } from '@/App/helpers.js'

const emit = defineEmits(['selectTag'])

const props = defineProps({
    link: String,
    jobType: String,
    title: String,
    descriptionTrans: String,
    get_external_html: Boolean,
    disablePreview: Boolean,
    mode: String,
    logo: String,
    selectedTags: Array,
    tags: Array,
    altPadding: Boolean,
    selectedTag: String,
})

const loaded = ref(false)
const { t } = useI18n()

const appear = () => {
    loaded.value = true
}

const openLink = (link) => {
    if (typeof window === 'undefined') return
    window.open(link, '_blank').focus()
}

const addProtocol = (link) => `https://${link}`

const removeProtocol = (link) => link.replace(/(^\w+:|^)\/\//, '')

const shortenText = (text) => (text.length < 20 ? text : text.substring(0, 20) + '...')

const selectTag = (tag) => {
    emit('selectTag', tag)
}
</script>

<template>
    <b-card :class="{'pb-4': !altPadding}" class="mb-5 mx-4">
        <div class="p-4">
            <div class="flex items-center">
                <img v-if="logo" :alt="title" :src="logo" class="w-16 m-3">
                <div>
                    <h4 v-if="title" class="mb-3 mt-1.5 leading-6">{{ title }}</h4>
                    <a v-if="link" :href="addProtocol(link)" target="_blank">
                        {{ isMobile() ? shortenText(removeProtocol(link)) : removeProtocol(link) }}
                    </a>
                    <p v-if="descriptionTrans" v-html="t('projects.' + descriptionTrans)"></p>
                    <div class="tags">
                        <bButton
                            v-for="(tag, i) in tags"
                            :key="i"
                            :class="{ active: selectedTag === tag }"
                            class="mr-4 mt-2 px-3 py-1 rounded-full"
                            color="primary"
                            @click="selectTag(tag)"
                        >
                            {{ tag }}
                        </bButton>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!disablePreview" class="project-wrap" @click="openLink(addProtocol(link))">
            <div v-if="mode === 'iframe'" class="iframe-wrapper flex items-center justify-center">
                <iframe
                    v-show="loaded"
                    :src="(get_external_html ? '/iframe-redirect?url=' : '') + addProtocol(link)"
                    :title="title"
                    class="frame"
                    style="pointer-events: none"
                    @load.once="appear"
                ></iframe>
                <v-progress-circular v-if="!loaded" :size="70" indeterminate></v-progress-circular>
            </div>
            <img
                v-if="mode === 'image'"
                :alt="title"
                :src="importImg('/websites/' + link + '.png')"
                loading="lazy"
            />
        </div>
    </b-card>
</template>

<style lang="scss" scoped>
.iframe-wrapper {
    height: 70vh;

    .frame {
        height: 100%;
        width: 100%;
    }
}

.project-wrap {
    cursor: pointer;
}
</style>
