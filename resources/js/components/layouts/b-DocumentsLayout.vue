<template>
    <div>
        <b-card class="py-5 px-2">
            <h1>{{ $t('common.my_certificates') }}</h1>
            <br>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                <b-document src="https://drive.google.com/file/d/1uE-ShssmbRxzdE_SPvAvRW56vr7JIWKr/preview" />
                <b-document src="https://drive.google.com/file/d/1GgeURQPB2zlRR5wwMxcD8T0JqIKWMrq6/preview" />
                <b-document src="https://drive.google.com/file/d/1H4RdhtXnytuQZS5g2A4KiSGVb9lbNbQw/preview" />
                <b-document src="https://drive.google.com/file/d/1PZcQc91sz3nvNRg2_P1KqCraIHMm5wtt/preview" />
                <b-document src="https://drive.google.com/file/d/1CPlG_L8fPjDaTBFnMy9XgFWHvFRcgXFs/preview" />
                <b-document src="https://drive.google.com/file/d/1oD4gXBl1kWHQk7Ix_PajnraKPpmCiVoM/preview" />
                <b-document src="https://drive.google.com/file/d/1IxP-APFugsy5RvnfIsqlVmORTM3_3tJJ/preview" />
                <b-document src="https://drive.google.com/file/d/1-qhD8PRYnCAKuQDTI1L24CTm2YZ3eWbO/preview" />
            </div>
        </b-card>
        <b-card class="mt-72 py-5 px-2">
            <h2>{{ $t('common.other_documents') }}</h2>
            <br>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                <b-document src="https://drive.google.com/file/d/1jxUd-5pAg14WKaTxWYxRAu0a631Oe9m7/preview" />
                <b-document src="https://drive.google.com/file/d/1jxmG3aGB8zHww3Mr2YA2akM3u8hi7Jgf/preview" />
                <b-document src="https://drive.google.com/file/d/18dZUW0pmNExtOUJps8oMzsmUyC2ZSyUY/preview" />
                <b-document src="https://drive.google.com/file/d/1Bs6SrlU-qFR-EpZUFjIcQFfiIZD_jBsG/preview" />
                <b-document src="https://drive.google.com/file/d/1CpPRPsfi9FDjAo2UTNEy3X7AW9Q9RLrE/preview" />
                <b-document src="https://drive.google.com/file/d/1pc4EDPmwTyqPta-wzjtkksF8ZRhd0PlN/preview" />
            </div>
        </b-card>
    </div>

</template>

<script>
import BCard from "../b-Card";
import BDocument from "../b-Document";

export default {
    name: "bDocuments",
    components: {BCard, BDocument}
}
</script>

<style scoped>

</style>
