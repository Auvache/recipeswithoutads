<template>
  <nav class="bg-black-denim">
    <div class="container medium-content py-2">
      <div class="d-flex justify-content-between align-items-center">
        <NuxtLink class="logo" to="/">
          Recipes Without Ads
        </NuxtLink>
        <div class="menu-links">
          <div>
            <button class="hamburger-icon" type="button" @click="toggleMenu" aria-label="Toggle menu">
                <span class="bar1 mb-1"></span>
                <span class="bar2 mb-1"></span>
                <span class="bar3"></span>
            </button>
            <ul id="dropdown" class="hamburger-menu d-none">
              <li><NuxtLink class="text-decoration-none text-black" @click="toggleMenu" to="/all-recipes">All Recipes</NuxtLink></li>
              <li><NuxtLink class="text-decoration-none text-black" @click="toggleMenu" to="/">Home</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="nav-buffer"></div>
</template>

<script setup>
const toggleMenu = () => {
  let menu = document.getElementById("dropdown");
  menu.classList.toggle("d-none");
}
</script>