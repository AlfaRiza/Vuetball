<template>
  <header class="navbar-header">
    <nav class="nav-box">
      <div>
        <router-link to="/" class="min-w-full">
          Voetball
        </router-link>
      </div>

      <div
        id="burger"
        :class="`${isMenuOpen && 'active'} md:hidden`"
        @click.prevent="toggleMenu()"
      >
        <slot>
          <button type="button" class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
          </button>
        </slot>
      </div>

      <div
        :class="`${
          !isMenuOpen && `hidden md:visible lg:visible`
        } w-full md:flex md:items-center md:w-auto`"
        id="menu"
      >
        <ul class="nav-body">
          <li>
            <router-link to="/" class="nav-item" href="#">Home</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import Logo from "@images/ball.png";
import { ref } from "vue";

const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
