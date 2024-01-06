<template>
    <b-card :class="{'pb-4': !altPadding}" class="mb-5 mx-4">
        <div class="p-4">
            <div class="flex items-center">
                <img v-if="logo" :alt="title" :src="logo" class="w-16 m-3">
                <div>
                    <h4 v-if="title" class="mb-3 mt-1.5">{{ title }}</h4>
                    <a v-if="link" :href="addProtocol(link)" target="_blank">{{ removeProtocol(link) }}</a>
                    <!--            <p>{{$t('projects.type')}}: {{$t('projects.'+jobType)}}</p>-->
                    <p v-if="descriptionTrans" v-html="$t('projects.'+descriptionTrans)"></p>
                </div>
            </div>
        </div>
        <div v-if="!disablePreview" class="project-wrap" @click="openLink(addProtocol(link))">
            <div v-if="mode === 'iframe'" class="iframe-wrapper flex items-center justify-center">
                <iframe v-show="loaded"
                        :src="(get_external_html?'/iframe-redirect?url=':'')+addProtocol(link)"
                        class="frame"
                        style="pointer-events: none" @load.once="appear"></iframe>
                <v-progress-circular v-if="!loaded" :size="70" indeterminate></v-progress-circular>
            </div>
            <img v-if="mode === 'image'" :alt="title" :src="'/img/websites/'+link+'.webp'" loading="lazy">
        </div>
    </b-card>
</template>


<script>
export default {
    name: 'b-Project',
    props: ['link', 'jobType', 'title', 'descriptionTrans', 'get_external_html', 'disablePreview',
        'mode', 'logo', 'selectedTags', 'tags', 'altPadding'],
    data() {
        return {
            wasCreated: false,
            loaded: false,
        }
    },
    methods: {
        appear() {
            this.wasCreated = true
            this.loaded = true
        },
        openLink(link) {
            window.open(link, '_blank').focus()
        },
        addProtocol(link) {
            return 'https://' + link
        },
        removeProtocol(link) {
            return link.replace(/(^\w+:|^)\/\//, '')
        },
    },
}
</script>

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
