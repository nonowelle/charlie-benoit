<template>
  <div>
    <header class="navigation">
      <nav class="navbar" v-click-outside="onClickOutside">
        <a href="#header" v-smooth-scroll class="nav-logo">B & C </a>
        <ul class="nav-menu" v-bind:class="{ active: isActive }">
          <li class="nav-item">
            <a href="#mariage" v-smooth-scroll class="nav-link">Le mariage</a>
          </li>
          <li class="nav-item">
            <a href="#hebergement-wrapper" v-smooth-scroll class="nav-link"
              >Hébergement</a
            >
          </li>
          <li class="nav-item">
            <a href="#contact" v-smooth-scroll class="nav-link">Contact</a>
          </li>

          <li class="nav-item">
            <a href="#rsvp" v-smooth-scroll class="button small dark invert"
              >RSVP</a
            >
          </li>
        </ul>
        <div
          class="hamburger"
          v-on:click="isActive = !isActive"
          v-bind:class="{ active: isActive }"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import Vue from "vue";

Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});
export default {
  name: "Nav",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onClickOutside() {
      if (this.isActive === true) {
        this.isActive = !this.isActive;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
