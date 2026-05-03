<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems, TransitionRoot } from '@headlessui/vue';
import { useRoute } from 'vue-router';

import iconDiscord from '../assets/icon-discord.png';
import iconGithub from '../assets/icon-github.png';
import iconReddit from '../assets/icon-reddit.png';
import Urls from '../lib/urls';

const route = useRoute();
const formatterRouteNames = ['formatter-fh5', 'formatter-fm8', 'formatter-fh6'];
const showFH6Link = Date.now() >= new Date('2026-05-15T00:00:00.000Z').getTime();

function isFormatterActive() {
  return formatterRouteNames.includes(route.name as string);
}
</script>
<template>
  <header>
    <div class="md:mr-8 z-10">
      <router-link :to="{ name: 'home' }">
        <img
          src="/images/OPTN_logo.png"
          alt="OPTN Logo"
          class="w-auto h-10 mx-auto md:mx-0 min-w-[216px]"
        >
      </router-link>
    </div>

    <div class="flex grow md:w-full items-center justify-center md:justify-between z-10">
      <div class="nav-bar">
        <Menu
          v-slot="{ open }"
          as="div"
          class="nav-dropdown"
        >
          <MenuButton
            class="nav-link nav-dropdown-toggle"
            :class="{ active: isFormatterActive() }"
          >
            Formatters
            <svg
              class="nav-dropdown-caret"
              :class="{ 'rotate-180': open }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1.5"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0
                  111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0
                  01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </MenuButton>
          <TransitionRoot
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <MenuItems class="nav-dropdown-menu">
              <MenuItem
                v-if="showFH6Link"
                v-slot="{ close }"
              >
                <router-link
                  v-slot="{ href, navigate }"
                  :to="{ name: 'formatter-fh6', params: { version: 'v1' } }"
                  custom
                >
                  <a
                    :href="href"
                    class="nav-dropdown-item"
                    :class="{ active: route.name === 'formatter-fh6' }"
                    @click="close(); navigate($event)"
                  >
                    Forza Horizon 6
                  </a>
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ close }">
                <router-link
                  v-slot="{ href, navigate }"
                  :to="{ name: 'formatter-fh5', params: { version: 'v1' } }"
                  custom
                >
                  <a
                    :href="href"
                    class="nav-dropdown-item"
                    :class="{ active: route.name === 'formatter-fh5' }"
                    @click="close(); navigate($event)"
                  >
                    Forza Horizon 5
                  </a>
                </router-link>
              </MenuItem>
              <MenuItem v-slot="{ close }">
                <router-link
                  v-slot="{ href, navigate }"
                  :to="{ name: 'formatter-fm8', params: { version: 'v3' } }"
                  custom
                >
                  <a
                    :href="href"
                    class="nav-dropdown-item"
                    :class="{ active: route.name === 'formatter-fm8' }"
                    @click="close(); navigate($event)"
                  >
                    Forza Motorsport
                  </a>
                </router-link>
              </MenuItem>
            </MenuItems>
          </TransitionRoot>
        </Menu>
        <router-link
          class="nav-link"
          :to="{ name: 'tuningchart' }"
        >
          Tuning Chart
        </router-link>
      </div>

      <ul class="link-bar">
        <li>
          <a
            :href="Urls.DiscordInvite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="iconDiscord"
              alt="Discord"
            >
          </a>
        </li>
        <li>
          <a
            :href="Urls.Reddit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="iconReddit"
              alt="Reddit"
            >
          </a>
        </li>
        <li>
          <a
            :href="Urls.GitHubOrg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="iconGithub"
              alt="Github"
            >
          </a>
        </li>
      </ul>
    </div>
  </header>

  <div class="header-image z-0">
    <img
      class="invisible"
      src="/images/OPTN_header_car.png"
      alt="OPTN Car"
    >
  </div>
</template>
