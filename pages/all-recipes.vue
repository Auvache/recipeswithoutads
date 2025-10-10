<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
	      <div class="text-center mb-5">
		      <h1 class="text-sm-center">All Recipes</h1>
	      </div>

	      <ul>
		      <li v-for="recipe in recipeList" :key="recipe.slug">
			      <NuxtLink :to="`/recipes/${recipe.slug}`" class="text-decoration-none" >{{recipe.name}}</NuxtLink>
		      </li>
	      </ul>

      </div>
    </div>
  </section>
</template>

<script setup>
import recipeList from '~/assets/recipeList.json'

// meta tags
let metaTitle = 'Recipes Without Ads | All Recipes'
let metaDescription = 'Recipes Without Ads | All Recipes'
let metaKeywords = 'Recipes Without Ads | All Recipes'
let metaCanonical = 'www.recipeswithoutads.com/all-recipes'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>