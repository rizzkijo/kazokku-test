<script setup lang="ts">
const props = defineProps({
  wrapperClassName: String,
})

import { computed, useAttrs } from "vue"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useDarkMode } from "@/hooks/useDarkMode"
import { Sun, Moon } from "lucide-vue-next"

const { isDarkMode, toggleDark } = useDarkMode()

const checked = computed({
  get: () => isDarkMode.value,
  set: (val) => toggleDark(val),
})

const attrs = useAttrs()
</script>

<template>
  <div class="flex items-center gap-2" :class="props.wrapperClassName">
    <Label for="toggleTheme" class="cursor-pointer text-xs" title="Light mode!">
      <Sun
        class="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
        :class="{ 'text-gray-500': isDarkMode, 'text-yellow-600': !isDarkMode }"
      />
    </Label>

    <Switch
      id="toggleTheme"
      :model-value="checked"
      @update:model-value="toggleDark"
      v-bind="attrs"
    />

    <Label for="toggleTheme" class="cursor-pointer text-xs" title="Dark mode!">
      <Moon
        class="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
        :class="{ 'text-yellow-500': isDarkMode, 'text-gray-400': !isDarkMode }"
      />
    </Label>
  </div>
</template>
