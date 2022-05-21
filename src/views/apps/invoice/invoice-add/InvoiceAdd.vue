<template>
  <section class="invoice-add-wrapper">
    <b-row class="invoice-add">

      <!-- Col: Left (Invoice Container) -->
      <b-col
        cols="12"
        xl="9"
        md="8"
      >
        <b-form @submit.prevent>
          <b-card
            no-body
            class="invoice-preview-card"
          >
            <!-- Header -->
            <b-card-body class="invoice-padding pb-0">

              <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">

                <!-- Header: Left Content -->
                <div>
                  <div class="logo-wrapper">
                    <logo />
                    <h3 class="text-primary invoice-logo">
                      AlAu
                    </h3>
                  </div>
                  <b-card-text class="mb-25">
                    Através desta seção será possível adicionar
                  </b-card-text>
                  <b-card-text class="mb-25">
                    novos schedules para o suprimento
                  </b-card-text>
                  <b-card-text class="mb-0">
                    automático do recipiente de alimentos.
                  </b-card-text>
                </div>

                <!-- Header: Right Content -->
                <div class="invoice-number-date mt-md-0 mt-2">
                  <div class="d-flex align-items-center justify-content-md-end mb-1">
                    <h4 class="invoice-title">
                      Id
                    </h4>
                    <b-input-group class="input-group-merge invoice-edit-input-group disabled">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="HashIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="invoice-data-id"
                        disabled
                      />
                    </b-input-group>
                  </div>
                  <div class="d-flex align-items-center mb-1">
                    <span class="title">
                      Data Criação:
                    </span>
                    <flat-pickr
                      v-model="invoiceData.createdAt"
                      class="form-control invoice-edit-input"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </b-card-body>

            <!-- Spacer -->
            <hr class="invoice-spacing">

            <!-- Invoice Client & Payment Details -->
            <b-card-body
              class="invoice-padding pt-0"
            >
              <b-row class="invoice-spacing">

                <!-- Col: Invoice To -->
                <b-col
                  cols="12"
                  xl="12"
                  class="mb-lg-1"
                >

                  <!-- Form Add -->
                  <b-form-group>
                    <h5 class="mt-2">
                      Título:
                    </h5>
                    <b-form-input
                      id="basicInput"
                      v-model="invoiceData.title"
                      placeholder="Digite um nome/título"
                    />

                    <h5 class="mt-2">
                      Descrição:
                    </h5>
                    <b-form-textarea
                      id="textarea-no-resize"
                      v-model="invoiceData.description"
                      placeholder="Digite uma descrição"
                      rows="3"
                      no-resize
                    />

                    <h5 class="mt-2">
                      Operação:
                    </h5>
                    <v-select
                      v-model="invoiceData.process"
                      label="title"
                      :options="itemsOptions"
                    />

                    <h5 class="mt-2">
                      Frequência:
                    </h5>
                    <b-form-timepicker
                      v-model="invoiceData.frequency"
                      class="form-control"
                      :locale="locale"
                      placeholder="Selecione um horário"
                    />

                    <h5 class="mt-2">
                      Quantidade de Alimento:
                    </h5>
                    <b-form-radio-group
                      v-model="invoiceData.feedAmount"
                      :options="feedOptions"
                      class="demo-inline-spacing"
                      name="radio-inline"
                    />

                  </b-form-group>
                </b-col>

              </b-row>
            </b-card-body>
          </b-card>
        </b-form>
      </b-col>

      <!-- Right Col: Card -->
      <b-col
        cols="12"
        md="4"
        xl="3"
        class="invoice-actions mt-md-0 mt-2"
      >

        <!-- Action Buttons -->
        <b-card>

          <!-- Button: Print -->
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            block
            @click="sendSchedule()"
          >
            Adicionar
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    <invoice-sidebar-add-new-customer />
  </section>
</template>

<script>
import Logo from '@core/layouts/components/Logo.vue'
import { ref, onUnmounted } from '@vue/composition-api'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import vSelect from 'vue-select'
import {
  BRow, BCol, BCard, BCardBody, BButton, BCardText, BForm, BFormInput, BInputGroup, BFormRadioGroup, BInputGroupPrepend, BFormTimepicker, VBToggle, BFormTextarea,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from 'axios'
import invoiceStoreModule from '../invoiceStoreModule'
import InvoiceSidebarAddNewCustomer from '../InvoiceSidebarAddNewCustomer.vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BButton,
    BCardText,
    BForm,
    BFormRadioGroup,
    BFormInput,
    BInputGroup,
    BFormTextarea,
    BInputGroupPrepend,
    flatPickr,
    Logo,
    BFormTimepicker,
    InvoiceSidebarAddNewCustomer,
    vSelect,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,

  },
  mixins: [heightTransition],
  methods: {
    async sendSchedule() {
      try {
        const body = {
          username: this.userData.username,
          createdAt: this.invoiceData.createdAt,
          operation: this.invoiceData.process.value,
          frequency: this.invoiceData.frequency,
          description: this.invoiceData.description,
          title: this.invoiceData.title,
          feedAmount: this.invoiceData.feedAmount,
        }
        const response = await axios.post('/addSchedule', body)
        if (response) {
          this.toast({
            component: ToastificationContent,
            props: {
              title: 'Yupii!! Schedule salvo com sucesso.',
              icon: 'ThumbsUpIcon',
              variant: 'success',
            },
          })
        }
      } catch (err) {
        this.toast({
          component: ToastificationContent,
          props: {
            title: 'Oops... Erro ao salvar, tente novamente mais tarde.',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      }
    },
  },
  setup() {
    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    const toast = useToast()

    const invoiceData = ref({
      createdAt: new Date(),
      process: { title: 'Alimentar', value: 'feed' },
      frequency: null,
      description: '',
      title: '',
      feedAmount: null,
    })

    const userData = JSON.parse(localStorage.getItem('userData'))

    const itemsOptions = [
      {
        title: 'Alimentar',
        value: 'feed',
      },
    ]

    const feedOptions = [
      { text: 'Pouco', value: 'feedLow' },
      { text: 'Médio', value: 'feedMiddle' },
      { text: 'Muito', value: 'feedHigh' },
    ]

    const locale = 'de'

    return {
      invoiceData,
      itemsOptions,
      locale,
      feedOptions,
      toast,
      userData,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
.invoice-add-wrapper {
  .add-new-client-header {
    padding: $options-padding-y $options-padding-x;
      color: $success;

    &:hover {
      background-color: rgba($success, 0.12);
    }
  }
}
</style>

<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
@import '~@core/scss/base/components/variables-dark';

.form-item-section {
background-color:$product-details-bg;
}

.form-item-action-col {
  width: 27px;
}

.repeater-form {
  // overflow: hidden;
  transition: .35s height;
}

.v-select {
  &.item-selector-title,
  &.payment-selector {
    background-color: #fff;

    .dark-layout & {
      background-color: unset;
    }
  }
}

.dark-layout {
  .form-item-section {
    background-color: $theme-dark-body-bg;

    .row .border {
      background-color: $theme-dark-card-bg;
    }

  }
}
</style>
