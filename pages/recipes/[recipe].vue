<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div v-if="recipe">
				<h1>{{ recipe.name }}</h1>
				<img :src="`/img/recipes/${recipe.slug}.jpg`" alt="">
				<p>{{ recipe.summary }}</p>

				<h2>Ingredients</h2>
				<ul>
					<li v-for="(item, i) in recipe.ingredients" :key="i">{{ item }}</li>
				</ul>

				<h2>Steps</h2>
				<ol>
					<li v-for="(step, i) in recipe.steps" :key="i">{{ step }}</li>
				</ol>
			</div>

			<p v-else>Recipe not found.</p>
		</div>
	</section>
</template>

<script setup>
import recipeList from '~/assets/recipeList.json'
const route = useRoute()
const recipeSlug = route.params.recipe
const recipe = recipeList.find(r => r.slug === recipeSlug)

// meta tags
let metaTitle = `${recipe.name} | Recipes Without Ads`
let metaDescription = `${recipe.name} recipe without ads, ${recipe.summary}`
let metaKeywords = `Recipes Without Ads, Recipes No Ads, ${recipe.name}`
let metaCanonical = `www.recipeswithoutads.com/recipes/${recipe.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>
