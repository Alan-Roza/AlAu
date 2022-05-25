<template>
  <b-card v-if="data" class="card-transaction" no-body>
    <b-card-header>
      <b-card-title>Histórico de Alimentações</b-card-title>
    </b-card-header>

    <b-card-body>
      <div
        v-for="transaction in data"
        :key="transaction.id"
        class="transaction-item"
      >
        <b-media no-body>
          <b-media-aside>
            <b-avatar
              rounded
              size="58"
              :variant="transaction.status.includes('Success') ? 'light-success' : 'light-primary'"
            >
              <feather-icon
                size="24"
                :icon="transaction.status.includes('Success') ? 'CheckIcon' : 'BatteryChargingIcon'"
              />
            </b-avatar>
          </b-media-aside>
          <b-media-body>
            <h6 class="transaction-title">
              {{ transaction.title }}
            </h6>
            <small>{{ transaction.status.includes('Success') ? 'Sucesso!' : 'O Recipiente já Estava Cheio.' }}</small>
          </b-media-body>
        </b-media>
        <div style="text-align: right">
          <div>
            {{ transaction.time }}
          </div>
          <div
            class="font-weight-bolder"
            :class="transaction.status.includes('Success') ? 'text-success' : 'text-primary'"
          >
            {{ transaction.mealSize === 'Large' ? 'Muito' : transaction.mealSize === 'Medium' ? 'Médio' : 'Pouco' }}
          </div>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardTitle,
  BCardBody,
  BMediaBody,
  BMedia,
  BMediaAside,
  BAvatar,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BMediaBody,
    BMedia,
    BMediaAside,
    BAvatar,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
