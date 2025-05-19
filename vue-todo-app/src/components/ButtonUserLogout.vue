<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"

import { cn } from "@/lib/utils"

import { useLogout } from "@/hooks/useLogout"

import { LogOut, User, ChevronDown } from "lucide-vue-next"

import Button from "./ui/button/Button.vue"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const dropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const username = ref("Guest")

// Ambil username dari localStorage pas mounted
onMounted(() => {
  const storedUser = localStorage.getItem("aUsr")
  if (storedUser) {
    username.value = storedUser.split("@")[0]
  }

  // Optional: Klik di luar dropdown buat tutup dropdown
  const onClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      dropdownOpen.value = false
    }
  }
  document.addEventListener("click", onClickOutside)

  onBeforeUnmount(() => {
    document.removeEventListener("click", onClickOutside)
  })
})

const handleLogout = useLogout()

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function closeDropdown() {
  dropdownOpen.value = false
}
</script>

<template>
  <div ref="dropdownRef" class="relative">
    <Button
      variant="link"
      @click="toggleDropdown"
      :class="
        cn(
          'flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-white focus:outline-none !no-underline',
          '!px-0',
        )
      "
    >
      <User />
      {{ username }}
      <ChevronDown :class="cn('transition-all duration-300', dropdownOpen ? 'rotate-180' : '')" />
    </Button>

    <div
      v-if="dropdownOpen"
      :class="
        cn(
          'absolute right-0 mt-2 min-w-50 py-2',
          'bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded shadow-md z-10',
        )
      "
    >
      <AlertDialog>
        <AlertDialogTrigger
          :class="
            cn(
              'w-full flex gap-3 items-center justify-start px-4 py-2 text-sm text-red-500 cursor-pointer',
              'bg-background hover:bg-accent',
              'dark:text-red-300 dark:bg-transparent dark:hover:bg-accent',
            )
          "
        >
          <LogOut :size="16" />
          <span class="font-bold">Sign Out</span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Done for now?</AlertDialogTitle>
            <AlertDialogDescription>
              Your tasks will be right here when you're back.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel class="cursor-pointer" @click="closeDropdown">
              Keep working
            </AlertDialogCancel>
            <AlertDialogAction
              class="bg-red-500 hover:bg-red-400 text-white cursor-pointer"
              @click="handleLogout"
            >
              I'm done
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  </div>
</template>
