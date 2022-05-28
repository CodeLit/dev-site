<template>
    <b-card class="mb-5 pb-4">
        <div class="p-4">
            <h1>{{title}}</h1>
            <a target="_blank" :href="link">{{link}}</a>
            <p>{{$t('projects.type')}}: {{$t('projects.'+jobType)}}</p>
            <p>{{$t('projects.'+descriptionTrans)}}</p>
        </div>
        <UseElementVisibility v-slot="{isVisible}">
            <iframe style="pointer-events: none"
                v-if="!disable_preview && (isVisible || wasCreated)"
                    v-lazy="(get_external_html?'/iframe-redirect?url=':'')+link"
                    loading="lazy" class="frame" @load="appear"></iframe>
        </UseElementVisibility>
    </b-card>
</template>

<script setup>
import { UseElementVisibility } from '@vueuse/components'
</script>

<script>
export default {
    name: "b-Project",
    props: ['link','jobType','title','descriptionTrans','get_external_html', 'disable_preview'],
    data() {
        return {
            wasCreated: false,
        }
    },
    methods:{
        appear() {
            this.wasCreated = true
        }
    }
}
</script>

<style scoped>
.frame{
    width: 100%;
    height: 70vh;
}
</style>
