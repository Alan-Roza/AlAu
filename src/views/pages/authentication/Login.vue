<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <img src="@/assets/images/pages/dog.png" style="width:2em;height:2em" />
        <h2 class="brand-text text-primary ml-1">
          AlAu
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Login V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-6">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title class="mb-1 font-weight-bold" title-tag="h2">
            Bem Vindo ao Alimentador Automático! 👋
          </b-card-title>
          <b-card-text class="mb-2">
            A plataforma para alimentar o seu animal
          </b-card-text>

          <b-alert variant="primary" show>
            <div class="alert-body font-small-2">
              <p>
                <small class="mr-50"
                  ><span class="font-weight-bold"
                    >Este é um modelo de validação do software</span
                  >
                </small>
              </p>
            </div>
            <feather-icon
              v-b-tooltip.hover.left="'This is just for ACL demo purpose'"
              icon="HelpCircleIcon"
              size="18"
              class="position-absolute"
              style="top: 10; right: 10;"
            />
          </b-alert>

          <!-- form -->
          <validation-observer ref="loginForm">
            <b-form class="auth-login-form mt-2" @submit.prevent="login">
              <!-- userName -->
              <b-form-group label="Usuário" label-for="login-userName">
                <validation-provider
                  #default="{ errors }"
                  name="userName"
                  vid="userName"
                >
                  <b-form-input
                    id="login-userName"
                    v-model="userName"
                    :state="errors.length > 0 ? false : null"
                    name="login-userName"
                    placeholder="Digite seu nome"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="userName.length === 0"
              >
                Entrar
              </b-button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  BAlert,
  VBTooltip,
} from 'bootstrap-vue'
import useJwt from '@/auth/jwt/useJwt'
import { required } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      userName: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),

      // validation rules
      required,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/dog.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          useJwt
            .login({
              email: 'admin@demo.com',
              password: 'admin',
            })
            .then(response => {
              const { userData } = response.data
              userData.username = this.userName
              useJwt.setToken(response.data.accessToken)
              useJwt.setRefreshToken(response.data.refreshToken)
              localStorage.setItem('userData', JSON.stringify(userData))
              this.$ability.update(userData.ability)

              // ? This is just for demo purpose as well.
              // ? Because we are showing eCommerce app's cart items count in navbar
              this.$store.commit(
                'infos/UPDATE_USERNAME',
                this.userName,
              )

              // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease
              this.$router
                .replace(getHomeRouteForLoggedInUser(userData.role))
                .then(() => {
                  this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `Bem Vindo ${this.userName}`,
                      icon: 'CoffeeIcon',
                      variant: 'success',
                      text: `Você logou com sucesso como ${this.userName}. Agora podemos explorar!`,
                    },
                  })
                })
            })
            .catch(error => {
              this.$refs.loginForm.setErrors(error.response.data.error)
            })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
