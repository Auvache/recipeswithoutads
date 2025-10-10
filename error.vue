<template>
  <Navbar />
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="mb-4">Oops!</h1>
          <p>The page you tried to hit doesn't exist. <br><NuxtLink to="/">Click here to go back to the homepage.</NuxtLink></p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

console.log(props.error)
</script>
