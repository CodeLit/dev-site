<template>
    <b-card class="mb-5 pb-4">
        <div class="p-4">
            <div class="flex items-center">
                <img v-if="logo" :alt="title" :src="logo" class="w-16 m-3">
                <div>
                    <h4 v-if="title" class="mb-3">{{ title }}</h4>
                    <a v-if="link" :href="addProtocol(link)" target="_blank">{{ removeProtocol(link) }}</a>
                    <!--            <p>{{$t('projects.type')}}: {{$t('projects.'+jobType)}}</p>-->
                    <p v-if="descriptionTrans" v-html="$t('projects.'+descriptionTrans)"></p>
                </div>
            </div>
        </div>
        <div v-if="!disable_preview" class="project-wrap" @click="openLink(addProtocol(link))">
            <iframe v-if="mode === 'iframe'"
                    v-lazy="(get_external_html?'/iframe-redirect?url=':'')+addProtocol(link)"
                    class="frame"
                    loading="lazy" style="pointer-events: none" @load="appear"></iframe>
            <img v-if="mode === 'image'" :alt="title" :src="'/img/websites/'+link+'.webp'" loading="lazy">
        </div>
    </b-card>
</template>


<script>
export default {
    name: 'b-Project',
    props: ['link', 'jobType', 'title', 'descriptionTrans', 'get_external_html', 'disable_preview', 'mode', 'logo'],
    data() {
        return {
            wasCreated: false,
        }
    },
    methods: {
        appear() {
            this.wasCreated = true
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

<style scoped>
.frame {
    width: 100%;
    height: 70vh;
}

.project-wrap {
    cursor: pointer;
}
</style>
