<script setup lang="ts">
import logoUrl from '../assets/OPTN_logo.png';
import iconGithub from '../assets/icon-github.png';
import iconReddit from '../assets/icon-reddit.png';
import iconDiscord from '../assets/icon-discord.png';
</script>
<template>
  <header>
    <div class="md:mr-8">
      <img
        :src="logoUrl"
        alt="OPTN Logo"
        class="w-auto h-10 mx-auto md:mx-0"
      >
    </div>

    <div class="flex grow items-center justify-between">
      <div class="text-center md:text-left">
        <router-link class="nav-link" :to="{ name: 'formatter' }">Formatter</router-link>
        <router-link class="nav-link" :to="{ name: 'calculator' }">Calculator</router-link>
        <router-link class="nav-link" :to="{ name: 'tuningchart' }">Tuning Chart</router-link>
      </div>

      <ul class="link-bar">
        <li>
          <a href="https://discord.gg/K2Kk5Kj6PP" target="_blank">
            <img :src="iconDiscord" alt="Discord">
          </a>
        </li>
        <li>
          <a
            href="https://reddit.com/r/ForzaOpenTunes"
            target="_blank"
          >
            <img :src="iconReddit" alt="Reddit">
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank">
            <img :src="iconGithub" alt="Github">
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
