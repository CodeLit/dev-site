<script setup>
import { importImg } from '@/app/helpers.js'
import { Head } from '@inertiajs/vue3'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { getCurrentRoute } from '@/app/routes.js'

const { t } = useI18n()

const props = defineProps({
    title: String,
})

const formattedTitle = computed(() => {
    const route = getCurrentRoute()
    const title = props.title || t(route.trans)
    const appName = t('common.blog_name') || import.meta.env.VITE_APP_NAME || 'Dev Site'
    return (title && !route.empty_title) ? `${title} - ${appName}` : appName
})
</script>

<template>
    <Head :title="formattedTitle">
        <link :href="importImg('/favicon/favicon.png')" rel="icon" type="image/x-icon" />
    </Head>
</template>

<style lang="scss" scoped>

</style>
