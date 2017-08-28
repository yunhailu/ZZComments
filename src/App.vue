<template>
    <div id="app">
        <transition name="fade">
            <!--<keep-alive>-->
                <router-view></router-view>
            <!--</keep-alive>-->
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
  *, html, body {
    border: 0;
    padding: 0;
    margin: 0;
  }

  html, body {
    background-color: #ececec;
    color: #323232;
    -webkit-tap-highlight-color:transparent;
  }


  ul{  list-style-type: none;  }
  li{  list-style: none;   }
  textarea{  resize : none;  }
  input, textarea{
      background:none;
      outline:none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #43474C;
  }

  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0;
  }
</style>
