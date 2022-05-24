<template>
    <b-card class="mb-5 pb-4">
        <div class="p-4">
            <h1>{{title}}</h1>
            <a target="_blank" :href="link">{{link}}</a>
            <p>Тип: {{jobType}}</p>
            <p>{{description}}</p>
        </div>
        <iframe v-if="!disable_preview" v-lazy="(get_external_html?'/iframe-redirect?url=':'')+link" class="frame"></iframe>
    </b-card>
</template>

<script>
export default {
    name: "b-Project",
    props: ['link','jobType','title','description','get_external_html', 'disable_preview']
}
</script>

<style scoped>
.frame{
    width: 100%;
    height: 70vh;
}
</style>
