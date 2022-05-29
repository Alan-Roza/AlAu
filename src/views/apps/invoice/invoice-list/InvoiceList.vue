<template>

  <!-- Table Container Card -->
  <b-card
    no-body
  >

    <div class="m-2">

      <!-- Table Top -->
      <b-row>

        <!-- Per Page -->
        <b-col
          cols="12"
          md="6"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
          <b-button
            variant="primary"
            :to="{ name: 'apps-invoice-add'}"
          >
            Adicionar
          </b-button>
        </b-col>
      </b-row>

    </div>

    <b-table
      ref="refInvoiceListTable"
      :items="fetchInvoices"
      responsive
      :fields="tableColumns"
      primary-key="id"
      :sort-by.sync="sortBy"
      show-empty
      empty-text="Nenhum dado encontrado"
      :sort-desc.sync="isSortDirDesc"
      class="position-relative"
    >

      <template #head(invoiceStatus)>
        <feather-icon
          icon="TrendingUpIcon"
          class="mx-auto"
        />
      </template>

      <!-- Column: Id -->
      <template #cell(id)="data">
        <b-link
          :to="{ name: 'apps-invoice-edit', params: { id: data.item.id }}"
          class="font-weight-bold"
        >
          #{{ data.value }}
        </b-link>
      </template>

      <!-- Column: Invoice Status -->
      <template #cell(operation)="data">
        {{ data.value === 'feed' && 'Alimentar' }}
      </template>

      <!-- Column: Client -->
      <template #cell(title)="data">
        <b-media vertical-align="center">
          <span class="font-weight-bold d-block text-nowrap">
            {{ data.value }}
          </span>
        </b-media>
      </template>

      <template #cell(desc)="data">
        <b-media vertical-align="center">
          <span class="font-weight-bold d-block text-nowrap">
            {{ data.value }}
          </span>
        </b-media>
      </template>

      <template #cell(mealSize)="data">
        <b-media vertical-align="center">
          <span class="font-weight-bold d-block text-nowrap">
            {{ data.value === 'Large' ? 'Muito' : data.value === 'Medium' ? 'Médio' : 'Pouco' }}
          </span>
        </b-media>
      </template>

      <!-- Column: Issued Date -->
      <template #cell(creationDate)="data">
        <span class="text-nowrap">
          {{ data.value.slice(0, 10) }}
        </span>
      </template>

      <!-- Column: Actions -->
      <template #cell(actions)="data">

        <div class="text-nowrap">
          <b-button
            variant="link"
            class="p-0"
            :to="{ name: 'apps-invoice-edit', params: { id: data.item.id } }"
          >
            <feather-icon
              :id="`invoice-row-${data.item.id}-edit-icon`"
              icon="EditIcon"
              class="cursor-pointery"
              size="16"
            />
          </b-button>
          <b-tooltip
            title="Editar"
            class="cursor-pointer"
            :target="`invoice-row-${data.item.id}-edit-icon`"
          />

          <b-button
            variant="link"
            class="p-0 pl-1"
            @click="deleteSchedule(data.item.id)"
          >
            <feather-icon
              :id="`invoice-row-${data.item.id}-trash-icon`"
              icon="TrashIcon"
              class="cursor-pointery"
              size="16"
            />
          </b-button>
          <b-tooltip
            title="Deletar"
            class="cursor-pointer"
            :target="`invoice-row-${data.item.id}-trash-icon`"
          />

        </div>
      </template>
    </b-table>
  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BButton, BTable, BMedia, BLink,
  BTooltip,
} from 'bootstrap-vue'
import { onUnmounted } from '@vue/composition-api'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from 'axios'
import store from '@/store'
import useInvoicesList from './useInvoiceList'

import invoiceStoreModule from '../invoiceStoreModule'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BButton,
    BTable,
    BMedia,
    BLink,
    BTooltip,
  },
  methods: {
    deleteSchedule(id) {
      axios
        .delete(`https://upx-backend-whntohr7oq-rj.a.run.app/feeding/delete?user=${this.userData.username}&id=${id}`).then(response => {
          console.log(response, 'response list feeding')
          // eslint-disable-next-line no-restricted-globals
          location.reload()
          this.toast({
            component: ToastificationContent,
            props: {
              title: 'Schedule deletado com sucesso.',
              icon: 'ThumbsUpIcon',
              variant: 'success',
            },
          })
          this.fetchInvoices('', () => {})
        })
        .catch(() => {
          this.toast({
            component: ToastificationContent,
            props: {
              title: 'Erro ao carregar a lista',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        })
    },
  },
  setup() {
    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    const toast = useToast()

    const userData = JSON.parse(localStorage.getItem('userData'))

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    const {
      fetchInvoices,
      tableColumns,
      sortBy,
      isSortDirDesc,
      refInvoiceListTable,

    } = useInvoicesList()

    return {
      fetchInvoices,
      tableColumns,
      toast,
      userData,
      sortBy,
      isSortDirDesc,
      refInvoiceListTable,
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;

  ::v-deep .vs__selected-options {
    flex-wrap: nowrap;
  }

  ::v-deep .vs__selected {
    width: 100px;
  }
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
