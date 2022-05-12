<template>
  <b-card v-if="data" text-variant="center" class="card card-congratulations">
    <!-- images -->
    <b-img
      :src="require('@/assets/images/elements/decore-left.png')"
      class="congratulations-img-left"
    />
    <b-img
      :src="require('@/assets/images/elements/decore-right.png')"
      class="congratulations-img-right"
    />
    <!--/ images -->

    <b-avatar variant="primary" size="70" class="shadow mb-2">
      <feather-icon size="28" icon="AwardIcon" />
    </b-avatar>
    <h1 class="mb-1 mt-50 text-white">Tudo certo por aqui!</h1>
    <!-- PEGA O NOME DO USUARIO LOGADO {{ data.name }} -->
    <b-card-text class="m-auto w-80">
      Seu pet se alimentou <strong>{{ data.saleToday }}x</strong> essa
      semana.<br />
      Você pode checar as alimentações futuras e as que estão para acontecer.
    </b-card-text>
  </b-card>
</template>

<script>
import { BCard, BImg, BAvatar, BCardText } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BAvatar,
    BImg,
    BCardText,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
