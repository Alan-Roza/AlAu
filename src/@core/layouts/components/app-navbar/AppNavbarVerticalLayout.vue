<template>
  <div class="navbar-container d-flex content align-items-center">
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link class="nav-link" @click="toggleVerticalMenuActive">
          <feather-icon icon="MenuIcon" size="21" />
        </b-link>
      </li>
    </ul>
    <!-- Left Col -->
    <div
      class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"
    >
      <dark-Toggler class="d-none d-lg-block" />
      <div @click="refresh">
        <refresh class="d-none d-lg-block" />
      </div>
      <div @click="manualFeed">
        <EatNow class="d-none d-lg-block" />
      </div>
    </div>
    <b-navbar-nav class="nav align-items-center ml-auto">
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script>
import { BLink, BNavbarNav } from 'bootstrap-vue'
import axios from 'axios'
import store from '@/store/index'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import DarkToggler from './components/DarkToggler.vue'
import UserDropdown from './components/UserDropdown.vue'
import Refresh from './components/Refresh.vue'
import EatNow from './components/EatNow.vue'

export default {
  components: {
    BLink,

    // Navbar Components
    BNavbarNav,
    Refresh,
    DarkToggler,
    UserDropdown,
    EatNow,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    refreshing() {
      return store.state.infos.dashboardRefresh
    },
  },
  methods: {
    refresh() {
      this.$store.commit('infos/UPDATE_DASHBOARD', !this.refreshing)
      this.toast({
        component: ToastificationContent,
        props: {
          title: 'Painel de controle atualizado com sucesso!',
          icon: 'ThumbsUpIcon',
          variant: 'success',
        },
      })
    },
    manualFeed() {
      axios
        .get(`https://upx-backend-whntohr7oq-rj.a.run.app/feeding/manual?user=${this.userData.username}`).then(response => {
          console.log(response, 'response list feeding')
          this.toast({
            component: ToastificationContent,
            props: {
              title: 'O Recipiente foi completado.',
              icon: 'ThumbsUpIcon',
              variant: 'success',
            },
          })
        })
        .catch(() => {
          this.toast({
            component: ToastificationContent,
            props: {
              title: 'Oops... Não foi possível completar o recipiente.',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        })
    },
  },
  setup() {
    const toast = useToast()

    const userData = JSON.parse(localStorage.getItem('userData'))

    return {
      toast,
      userData,
    }
  },
}
</script>
