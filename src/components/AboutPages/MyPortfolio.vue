<template>
  <v-container id="about-me">
    <!-- * About Me -->
    <v-row
      
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
        xs="12"
        align="center"
      >
        <h2 class="text-h4 text-center myFont">
          Student
        </h2>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="4"
        sm="12"
        xs="12"
        align="center"
      >
        <v-card
          elevation="2"
          max-width="400"
          justify="center"
          align="center"
          class="card-circle"
        >
          <div class="card-image">
            <svg
              class="circle-chart"
              viewBox="0 0 33.83098862 33.83098862"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="circle-chart-background"
                strok-fill="orange"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="15.91549431"
              />
              <circle
                class="circle-chart-circle"
                stroke-width="1"
                stroke-dasharray="33,100"
                stroke-linecap="round"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="15.91549431"
              />
            </svg>
            <div class="avatar">
              <img
                src="/src/assets/about/av-2.png"
                width="200"
                cover
                alt="av-1"
              >
            </div>
          </div>
          <h3 class="myFont">
            Azhar abd al-baqi al-shurbaji
          </h3>
          <v-card-text
            class="text-grey"
          >
            <p class="text-grey-darken-2 text-body-1 mb-3">
              <b>- Front-End developer -</b>
            </p>
            with a passion for problem solving and design, 
            my goal is to create websits with a clean code, fully responsive
          </v-card-text>

          <p>
            How do you take <span class="text-orange">your Coffee</span>?
          </p>

          <div class="text-center ma-5">
            <v-btn
              href="https://github.com/azharalshurbaji"
              target="_blank"
              class="pa-3 btn-hover"
              elevation="1"
              hover
              size="larg"
              color="orange"
              variant="text"
              icon="mdi-github"
            />

            <v-btn
              href="https://www.linkedin.com/in/azhar-al-shurbaji-8b62b7257"
              target="_blank"
              class="offset-1 pa-3 btn-hover"
              elevation="1"
              hover
              size="larg"
              color="orange"
              variant="text"
              icon="mdi-linkedin"
            />

            <v-btn
              href="https://codepen.io/azharalshurbaji"
              target="_blank"
              class="offset-1 pa-3 btn-hover"
              elevation="1"
              hover
              size="larg"
              color="orange"
              variant="text"
              icon="mdi-codepen"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
      >
        <h1 class="text-h4 myFont text-center my-6">
          -- My Drawing in CSS --
        </h1>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
      >
        <v-carousel 
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Flower2.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Flower2.png"
            cover
            class="flower-style pa-2"
            title="CSS"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/links/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>

          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Girls.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Girls.png"
            cover
            class="pa-2"
            title="CSS"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/Drawing-Avatar/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>


          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Pikachu-CSS.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Pikachu-CSS.png"
            cover
            class="pa-2"
            title="CSS"
          >
            <a
              class="link-style"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>

          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/flower.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/flower.png"
            cover
            class="flower-style pa-2"
            title="CSS"
          >
            <a
              class="link-style"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>

          
          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Form-2.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Form-2.png"
            cover
            class="flower-style pa-2"
            title="CSS"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/form-video-table/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>

          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Form.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/Form.png"
            cover
            class="flower-style pa-2"
            title="CSS"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/form-float/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>
          

          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/clock.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/clock.png"
            cover
            class="flower-style pa-2"
            title="CSS + JS"
          >
            <a
              class="link-style"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>

          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/neumorphic.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/neumorphic.png"
            cover
            class="flower-style pa-2"
            title="CSS + JS"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/Neumorphic-Form-JS/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>
          
          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/card-svg.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/card-svg.png"
            cover
            class="flower-style pa-2"
            title="CSS"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/Card-SVG-circle-border/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>
        </v-carousel>

        <h1 class="text-h4 myFont text-center mt-10">
          -- My Projects --
        </h1>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
      >
        <v-carousel 
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/Innovative-Solutions.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/Innovative-Solutions.png"
            class="pa-2"
            title="Bootstrap"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/Templete-Business-company/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>
         

          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/Nera-2.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/Nera-2.png"
            cover
            class="flower-style pa-2"
            title="CSS"
          >
            <a
              class="link-style"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>


          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/fresh-bulma.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/fresh-bulma.png"
            cover
            class="flower-style pa-2"
            title="Bulma Freamwork"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/fresh/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>


          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/todo-list-vue.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/todo-list-vue.png"
            cover
            class="flower-style pa-2"
            title="Vue.js"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/todolist-vue.js/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>


          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/bitcoin.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/bitcoin.png"
            cover
            class="flower-style pa-2"
            title="Bulma Freamwork"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/bitcoin-website/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>


          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/brush-shop.PNG"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/brush-shop.PNG"
            cover
            class="flower-style pa-2"
            title="Bootstrap"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/brushes-shop/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>


          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/Perfume-shop.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/Perfume-shop.png"
            cover
            class="flower-style pa-2"
            title="Bootstrap"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/Perfume-shop/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>


          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/todo-list-js.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/todo-list-js.png"
            cover
            class="flower-style pa-2"
            title="java script"
          >
            <a
              class="link-style"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>


          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/seo-website.png"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/seo-website.png"
            cover
            class="flower-style pa-2"
            title="CSS"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/seo-one-page-template/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>


          <v-carousel-item
            src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/my-cv.PNG"
            lazy-src="https://azharalshurbaji.github.io/diamond-image/img/protfolio/template/my-cv.PNG"
            class="flower-style pa-2"
            title="Bootstrap"
          >
            <a
              class="link-style"
              href="https://azharalshurbaji.github.io/my-website/"
              target="_blank"
              rel="noopener noreferrer"
            >Live Demo</a>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

.link-style
{
  color: #0000ff;
  border: 1px solid #0000ff;
  padding: 8px 15px;
  border-radius: 50px;
}
.link-style:hover
{
  background: #0000ff;
  color: #fff;
  transition: .5s;
}

.btn-hover:hover
{
  box-shadow: 0 0 20px #ffa500 !important;
  transition: .5s;
}

.card-circle
{
  position: relative;
}
.avatar 
{
    position: absolute;
    top: 26%;
    left: 50%;
    transform: translate(-50% , -50%);
    margin: 0 auto;
    -webkit-transform: translate(-50% , -50%);
    -moz-transform: translate(-50% , -50%);
    -ms-transform: translate(-50% , -50%);
    -o-transform: translate(-50% , -50%);
}

.circle-chart-background
{
    stroke-width: 1px;
    stroke: #00214e2a;
}
.circle-chart
{    margin: 30px;}
.circle-chart-circle
{
    border: 1px solid #4e05000a;
    stroke-dasharray: 0,100;
    transition: all .7s linear;
    -webkit-transition: all .7s linear;
    -moz-transition: all .7s linear;
    -ms-transition: all .7s linear;
    -o-transition: all .7s linear;
}

.card-circle:hover .circle-chart-circle
{
    stroke: #e76e0a;
    stroke-dasharray: 5 5 ;
}

</style>