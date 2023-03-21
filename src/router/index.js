// Composables
import user from '@/store/user'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // { 
  //   path: '/Product' , component: ()=> import('@/views/ProductView.vue'),
  // children: [
  //     {
  //       path: 'products/:id/SingleProduct' ,
  //       name: 'SingleProduct',
  //        component: ()=> import('@/views/SingleProductView.vue'),
  //     }
  // ] 
  // },

  {

    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
        meta: { transition: 'slide-left' },
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '@/views/ProductsView.vue'),
        meta: { transition: 'slide-right' },
      },
          //! Single Product Page
      {
        path: '/singleproduct/:id',
       name: 'singleproduct',
       component: () => import(/* webpackChunkName: "singleproduct" */ '@/views/SingleProductView.vue'),
        meta: {
          guard: 'auth'
        },
      },

      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/CartView.vue'),
        meta: {
          guard: 'auth'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '@/views/AboutView.vue'),
        meta: {transition: 'slide-left'}
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/LoginView.vue'),
        
        meta: {
          guard: 'public'
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "Profile" */ '@/views/ProfileView.vue'),

        meta: {
          //* auth => authenticated
          guard: 'auth' 
        }
      },

    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/sidebar/SideBar.vue'),
    children: [
      {
        path: '/fake-chart',
        name: 'FakeChart',
        component: () => import(/* webpackChunkName: "FakeChart" */ '@/views/FakeChartView.vue'),
        meta: {
          //* auth => authenticated
          guard: 'auth' 
        }
      },
      {
        path: '/products-maneger',
        name: 'ProductsManeger',
        component: () => import(/* webpackChunkName: "ProductsManeger" */ '@/views/ProductsManegerView.vue'),
  
        meta: {
          //* auth => authenticated
          guard: 'auth' 
        }
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "Users" */ '@/views/UsersView.vue'),
  
        meta: {
          //* auth => authenticated
          guard: 'auth' 
        }
      },
    ]
  },

    
]


const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),

  // history: createWebHistory(process.env.NODE_ENV === "production" ? "/diamond-castle/" : "/"),
  history: createWebHashHistory(process.env.NODE_ENV === "production" ? "/diamond-castle/" : "/"),
  
  routes,

  scrollBehavior(to ,from ,savedPosition)
  {
    if(savedPosition)
    { return savedPosition }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    //? always Scroll to Top
    return { top: 0 }
    
  }
})

router.beforeEach( function (to ,from ,next) {
  // console.log(to.meta.guard)

  const store = user() 
  // console.log(store);

  if(to.meta.guard === 'auth' && !store.isLoggedIn) {
    next('/login' , '/cart' ,'/oneproduct')
  } 
  else if(to.meta.guard === 'public' && store.isLoggedIn) {
    next('/profile')
  }
  else {
    next()
  }
})

export default router
