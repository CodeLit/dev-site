<script setup>
import GitHubIcon from 'vue-ionicons/dist/logo-github.vue'
import LinkedinIcon from 'vue-ionicons/dist/logo-linkedin.vue'
import BLink from '@js/components/common/b-Link.vue'
</script>

<template>
    <b-link blank class="link" url="https://github.com/CodeLit">
        <git-hub-icon class="ionic-icon icon" />
        GitHub
    </b-link>
    <b-link blank class="link" url="https://www.linkedin.com/in/codelit/">
        <linkedin-icon class="ionic-icon icon" />
        LinkedIn
    </b-link>
</template>

<style lang="scss" scoped>
.link {
    display: flex;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
}

.ionic-icon {
    fill: white;
    display: inline-block;
}

.icon {
    display: inline-block;
}
</style>
