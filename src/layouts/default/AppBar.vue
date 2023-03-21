<template>
  <v-app-bar app>
    <!-- style="background-image: url(img/main-img/magicpattern-svg-chart.svg);background-attachment: fixed;
      background-size: cover;" -->
    <v-app-bar-nav-icon 
      class="hidden-md-and-up"
      @click="drawer = true"
    />
    <v-app-bar-title class="hidden-sm-and-down">
      <v-icon icon="mdi-diamond-stone" />
      <span class="text-h6">
        Diamond Castle
      </span>
      <v-btn 
        size="25"
        variant="outlined"
        class="mx-3"
        @click="toggleLocale"
      >
        <v-icon>{{ $i18n.locale === 'ar' ? 'mdi-abjad-arabic' : 'mdi-alpha-e' }}</v-icon> 
      </v-btn> 
    </v-app-bar-title>
    
    <v-btn
      exact
      to="/"
      stacked
      class="hidden-sm-and-down"
    >
      {{ $t('navbarItem1.navBar') }}
    </v-btn>
    <v-btn
      stacked
      to="/about"
      class="hidden-sm-and-down"
    >
      {{ $t('navbarItem2.navBar') }} 
    </v-btn>

    <v-btn 
      to="/products"
      stacked
      class="hidden-sm-and-down"
    >
      {{ $t('navbarItem3.navBar') }}
    </v-btn>
  
    <v-btn 
      v-if="isLoggedIn"
      to="/cart"
      stacked
      class="hidden-sm-and-down"
    >
      <v-badge
        :content="itemsCount"
        color="red"
        floating
      />
      <v-icon>
        mdi-cart
      </v-icon> 
    </v-btn>

    <div class="text-center">
      <v-menu open-on-hover>
        <template #activator="{ props }">
          <v-btn 
            v-if="isLoggedIn"
            v-bind="props"
            variant="text"
            stacked
            class="hidden-sm-and-down ma-3"
          >
            <v-img 
              :src="user.image"
              width="40"
              cover
            />
            {{ user.firstName }}
          </v-btn>
          <v-btn 
            v-else
            to="/login"
            class="hidden-sm-and-down ma-3"
          >
            Login
          </v-btn>
        </template>
        <v-list>
          <v-list-item> 
            <v-btn 
              variant="outlined"
              to="/profile"
              stacked
              block
              class="ma-3"
            > 
              <v-img 
                :src="user.image"
                width="40"
                cover
              />
              {{ user.firstName }}
            </v-btn>
          </v-list-item>
          <v-divider />
          <v-list-item class="mt-1">
            <v-btn 
              block
              variant="outlined"
              @click="toggleTheme"
            >
              <v-icon> mdi-theme-light-dark</v-icon>
              Dark Mode 
            </v-btn>  
            <br>
            <v-btn 
              block
              variant="outlined"
              @click="toggleLocale"
            >
              <v-icon> mdi-abjad-arabic</v-icon> 
            </v-btn>  
            <br>
            <v-btn
              v-if="isLoggedIn"
              v-bind="props"
              variant="outlined"
              to="/fake-chart"
              block
            >
              Products Maneger
            </v-btn>
            <br>
            <v-btn
              v-if="isLoggedIn"
              to="/login"
              variant="text"
              block
              @click="logout"
            >
              <v-icon>mdi-logout</v-icon>
              Logout
            </v-btn>
            <v-btn
              v-else
              to="/login"
              variant="text"
              block
            >
              Login 
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
  
  <!-- & temporary: For hide Navigation Drawer on Display md and Up -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list>
      <v-app-bar-title class="text-center ma-2">
        <v-icon 
          icon="mdi-diamond-stone"
        />
        <span
          class="text-h6 "
        >
          Diamond Castle
        </span>

        <v-btn 
          v-if="!isLoggedIn"
          variant="outlined"
          to="/profile"
          stacked
          block
          class="ma-3"
        >
          Login
        </v-btn> 
        <v-btn 
          v-else
          variant="outlined"
          to="/profile"
          stacked
          block
          class="ma-3"
        > 
          <v-img 
            :src="user.image"
            width="40"
            cover
          />
          {{ user.firstName }}
        </v-btn>
      </v-app-bar-title>
      <v-list-item class="text-center">
        <v-btn 
          icon="mdi-theme-light-dark"
          title="theme color"
          @click="toggleTheme"
        />
        <v-btn 
          icon="mdi-abjad-arabic"
          title="translate"
          @click="toggleLocale"
        />
        <v-btn 
          :disabled="!isLoggedIn"
          to="/cart"
          title="your cart"
          stacked
        >
          <v-badge
            :content="itemsCount"
            color="red"
            floating
          />
          <v-icon>
            mdi-cart
          </v-icon> 
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn
          exact
          to="/"
        >
          {{ $t('navbarItem1.navBar') }}
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn
          exact
          to="/about"
        >
          {{ $t('navbarItem2.navBar') }} 
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn 
          to="/products"
        >
          {{ $t('navbarItem3.navBar') }}
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          variant="text"
          to="/fake-chart"
        >
          Products Maneger
        </v-btn>
        <v-divider class="mt-10" />
        <v-btn
          v-if="isLoggedIn"
          to="/login"
          variant="text"
          block
          @click="logout"
        >
          <v-icon>mdi-logout</v-icon>
          Logout
        </v-btn>
        <v-btn
          v-else
          to="/login"
          variant="text"
          block
        >
          Login 
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useTheme } from 'vuetify'
import { mapActions, mapState } from 'pinia';
import cart from '@/store/cart';
import user from '@/store/user';

export default {

  setup () {
    const theme = useTheme()
    
    return {
      theme ,
      toggleTheme :() => 
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
    
    }
  },
  data: () => ({
    drawer: false,
    }),
  computed: {
    ...mapState(cart, ['itemsCount']),
    ...mapState(user, ['isLoggedIn' , 'user']),
  },
  methods: {
    ...mapActions(user , ['logout']),

  toggleLocale() {
    this.$i18n.locale = this.$i18n.locale === 'ar' ? 'en' : 'ar';
    this.$vuetify.locale.current = this.$vuetify.locale.current === 'ar' ? 'en' : 'ar'
    }

  }
}
</script>

