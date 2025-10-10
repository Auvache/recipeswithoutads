<template>
	<h1 class="ada-hide">Recipes Without Ads</h1>
	<section class="section-padding">
		<div class="container thin-content">
			<h1 class="ada-hide">Relevant Articles</h1>
			<div id="featuredArticles">
				<div class="recipe-card" v-for="recipe in Recipes" :key="recipe.slug" :id="recipe.slug">
					<NuxtLink :to="`/recipes/${recipe.slug}`" class="text-decoration-none" >
						<img :src="`/img/recipes/${recipe.slug}.jpg`" alt="">
						<h2 class="intro-heading">{{recipe.name}} - {{recipe.summary}}</h2>
					</NuxtLink>
					<hr>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Recipes from "assets/recipeList.json"

// meta tags
let metaTitle = 'Recipes Without Ads'
let metaDescription = 'Recipes without any ads'
let metaKeywords = 'Recipes Without Ads, Recipes No Ads'
let metaCanonical = 'www.recipeswithoutads.com'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>