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
                        v-model="invoiceData.id"
                        disabled
                      />
                    </b-input-group>
                  </div>
                  <div class="d-flex align-items-center mb-1">
                    <span class="title">
                      Data Criação:
                    </span>
                    <flat-pickr
                      v-model="invoiceData.issuedDate"
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
                  xl="6"
                  class="mb-lg-1"
                >
                  <h6 class="mb-2">
                    Operação:
                  </h6>

                  <!-- Select Client -->
                  <v-select
                    v-model="invoiceData.op"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="op"
                    label="company"
                    input-id="invoice-data-client"
                    :clearable="false"
                  >
                    <template #list-header>
                      <li
                        v-b-toggle.sidebar-invoice-add-new-customer
                        class="add-new-client-header d-flex align-items-center my-50"
                      >
                        <feather-icon
                          icon="PlusIcon"
                          size="16"
                        />
                        <span class="align-middle ml-25">Add New Customer</span>
                      </li>
                    </template>
                  </v-select>

                  <div class=" mb-1 mt-2">
                    <span class="title">
                      Data Criação:
                    </span>
                    <flat-pickr
                      class="form-control"
                      :config="{ enableTime: true, dateFormat: 'H:i'}"
                    />
                  </div>

                  <validation-provider
                    #default="validationContext"
                    name="Start Date"
                    rules="required"
                  >

                    <b-form-group
                      label="Start Date"
                      label-for="start-date"
                      :state="getValidationState(validationContext)"
                    >
                      <flat-pickr
                        v-model="eventLocal.start"
                        class="form-control"
                        :config="{ enableTime: true, dateFormat: 'H:i'}"
                      />
                      <b-form-invalid-feedback :state="getValidationState(validationContext)">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- Title -->
                  <validation-provider
                    #default="validationContext"
                    name="Title"
                    rules="required"
                  >
                    <b-form-group
                      label="Title"
                      label-for="event-title"
                    >
                      <b-form-input
                        id="event-title"
                        v-model="eventLocal.title"
                        autofocus
                        :state="getValidationState(validationContext)"
                        trim
                        placeholder="Event Title"
                      />

                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- Selected Client -->
                  <div
                    v-if="invoiceData.client"
                    class="mt-1"
                  >
                    <h6 class="mb-25">
                      {{ invoiceData.client.name }}
                    </h6>
                    <b-card-text class="mb-25">
                      {{ invoiceData.client.company }}
                    </b-card-text>
                    <b-card-text class="mb-25">
                      {{ invoiceData.client.address }}, {{ invoiceData.client.country }}
                    </b-card-text>
                    <b-card-text class="mb-25">
                      {{ invoiceData.client.contact }}
                    </b-card-text>
                    <b-card-text class="mb-0">
                      {{ invoiceData.client.companyEmail }}
                    </b-card-text>
                  </div>
                </b-col>

                <!-- Col: Payment Details -->
                <b-col
                  xl="6"
                  cols="12"
                  class="mt-xl-0 mt-2 justify-content-end d-xl-flex d-block"
                >
                  <div>
                    <h6 class="mb-2">
                      Payment Details:
                    </h6>
                    <table>
                      <tbody>
                        <tr>
                          <td class="pr-1">
                            Total Due:
                          </td>
                          <td><span class="font-weight-bold">$12,110.55</span></td>
                        </tr>
                        <tr>
                          <td class="pr-1">
                            Bank name:
                          </td>
                          <td>American Bank</td>
                        </tr>
                        <tr>
                          <td class="pr-1">
                            Country:
                          </td>
                          <td>United States</td>
                        </tr>
                        <tr>
                          <td class="pr-1">
                            IBAN:
                          </td>
                          <td>ETD95476213874685</td>
                        </tr>
                        <tr>
                          <td class="pr-1">
                            SWIFT code:
                          </td>
                          <td>BR91905</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

          <!-- Button: Send Invoice -->
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mb-75"
            block
            disabled
          >
            Send Invoice
          </b-button>

          <!-- Button: DOwnload -->
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            class="mb-75"
            block
          >
            Preview
          </b-button>

          <!-- Button: Print -->
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            block
            @click="sendSchedule()"
          >
            Save
          </b-button>
        </b-card>

        <!-- Payment Method -->
        <div class="mt-2">
          <b-form-group
            label="Accept Payment Via"
            label-for="payment-method"
          >
            <v-select
              v-model="invoiceData.paymentMethod"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="paymentMethods"
              input-id="payment-method"
              class="payment-selector"
              :clearable="false"
            />
          </b-form-group>

          <!-- ? Below values are not adding invoiceData to keep invoiceData more generic and less confusing  -->

          <!-- Payment Terms -->
          <div class="d-flex justify-content-between align-items-center">
            <label for="patymentTerms">Payment Terms</label>
            <b-form-checkbox
              id="patymentTerms"
              :checked="true"
              switch
            />
          </div>

          <!-- Client Notes -->
          <div class="d-flex justify-content-between align-items-center my-1">
            <label for="clientNotes">Client Notes</label>
            <b-form-checkbox
              id="clientNotes"
              :checked="true"
              switch
            />
          </div>

          <!-- Payment Stub -->
          <div class="d-flex justify-content-between align-items-center">
            <label for="paymentStub">Payment Stub</label>
            <b-form-checkbox
              id="paymentStub"
              switch
            />
          </div>
        </div>
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
import {
  BRow, BCol, BCard, BCardBody, BButton, BCardText, BForm, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BFormCheckbox, VBToggle,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
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
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BFormCheckbox,
    flatPickr,
    vSelect,
    Logo,
    InvoiceSidebarAddNewCustomer,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,

  },
  mixins: [heightTransition],
  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    addNewItemInItemForm() {
      this.$refs.form.style.overflow = 'hidden'
      this.invoiceData.items.push(JSON.parse(JSON.stringify(this.itemFormBlankItem)))

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
        setTimeout(() => {
          this.$refs.form.style.overflow = null
        }, 350)
      })
    },
    removeItem(index) {
      this.invoiceData.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
    async sendSchedule() {
      const body = {
        id: 'Alan',
        name: 'Alimentação da noite',
        cron: '0 19 * * *',
        op: 'feed',
      }
      const response = await axios.post('/addSchedule', body)
      console.log(response)
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

    const op = ref([])
    store.dispatch('app-invoice/fetchClients')
      .then(response => { op.value = response.data })

    const itemFormBlankItem = {
      item: null,
      cost: 0,
      qty: 0,
      description: '',
    }

    const invoiceData = ref({
      id: 5037,
      client: null,

      // ? Set single Item in form for adding data
      items: [JSON.parse(JSON.stringify(itemFormBlankItem))],

      salesPerson: '',
      note: 'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!',
      paymentMethod: null,
    })

    const itemsOptions = [
      {
        itemTitle: 'App Design',
        cost: 24,
        qty: 1,
        description: 'Designed UI kit & app pages.',
      },
      {
        itemTitle: 'App Customization',
        cost: 26,
        qty: 1,
        description: 'Customization & Bug Fixes.',
      },
      {
        itemTitle: 'ABC Template',
        cost: 28,
        qty: 1,
        description: 'Bootstrap 4 admin template.',
      },
      {
        itemTitle: 'App Development',
        cost: 32,
        qty: 1,
        description: 'Native App Development.',
      },
    ]

    const updateItemForm = (index, val) => {
      const { cost, qty, description } = val
      invoiceData.value.items[index].cost = cost
      invoiceData.value.items[index].qty = qty
      invoiceData.value.items[index].description = description
    }

    const paymentMethods = [
      'Bank Account',
      'PayPal',
      'UPI Transfer',
    ]

    return {
      invoiceData,
      op,
      itemsOptions,
      updateItemForm,
      itemFormBlankItem,
      paymentMethods,
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
