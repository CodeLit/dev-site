<template>
    <b-card class="mb-5 pb-4">
        <div class="p-4">
            <h1>{{title}}</h1>
            <a target="_blank" :href="link">{{link}}</a>
            <p>Тип: {{jobType}}</p>
            <p>{{description}}</p>
        </div>
        <iframe v-lazy="'/iframe-redirect?url='+src" class="frame"></iframe>
    </b-card>
</template>

<script>
export default {
    name: "b-Project",
    props: ['link','jobType','title','description']
}
</script>

<style scoped>
.frame{
    width: 100%;
    height: 70vh;
}
</style>
