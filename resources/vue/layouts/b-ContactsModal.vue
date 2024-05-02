<script setup>

import BLinks from '@layouts/b-Links.vue'
import BContacts from '@layouts/b-Contacts.vue'
import BModal from '@components/common/b-Modal.vue'
</script>

<template>
    <b-modal>
        <h3>Contacts</h3>
        <div class="text-xl flex pt-3">
            <div class="contacts-column flex flex-col items-start">
                <b-contacts />
            </div>
            <div class="contacts-column flex flex-col items-start ml-3">
                <b-links />
            </div>
        </div>
    </b-modal>
</template>

<style lang="scss" scoped>
.contacts-column > * {
    margin: 3px;
}
</style>
