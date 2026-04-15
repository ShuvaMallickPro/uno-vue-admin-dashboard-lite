<script setup lang="ts">
import { toast } from "vue-sonner";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
// SHADCN COMPONENTS
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// CUSTOM COMPONENTS
import { DataTable } from "@/components/table";
import SearchInput from "@/components/SearchInput.vue";
import DataNotFound from "@/components/DataNotFound.vue";
import CustomBreadcrumb from "@/components/CustomBreadcrumb.vue";
import { UserListSkeleton } from "@/sections/users/skeletons";
// TABLE COLUMNS DEFINITION
import { columns } from "./columns";
// TYPES
import type { User, UserStatus } from "@/types/User";
import { usePremium } from "@/stores/premium";

const premium = usePremium();

const isLoading = ref(false);
const roles = ref<string[]>(["Admin", "Manager", "Support", "Author", "Viewer"]);
const statuses = ref<UserStatus[]>([
  { id: 1, title: "Active", value: "Active" },
  { id: 2, title: "Banned", value: "Banned" },
  { id: 3, title: "Rejected", value: "Rejected" },
  { id: 4, title: "Pending", value: "Pending" },
]);

const users = ref<User[]>([
  {
    id: 1,
    name: "Ava Johnson",
    role: "Admin",
    image: "https://i.pravatar.cc/128?img=1",
    email: "ava.johnson@acme.io",
    phone: "+1 415 555 0110",
    status: "Active",
    address: "San Francisco, CA",
    createdAt: "2025-11-02",
  },
  {
    id: 2,
    name: "Noah Williams",
    role: "Manager",
    image: "https://i.pravatar.cc/128?img=12",
    email: "noah.williams@acme.io",
    phone: "+1 212 555 0171",
    status: "Active",
    address: "New York, NY",
    createdAt: "2025-10-14",
  },
  {
    id: 3,
    name: "Mia Martinez",
    role: "Support",
    image: "https://i.pravatar.cc/128?img=5",
    email: "mia.martinez@acme.io",
    phone: "+1 305 555 0182",
    status: "Pending",
    address: "Miami, FL",
    createdAt: "2026-01-09",
  },
  {
    id: 4,
    name: "Liam Brown",
    role: "Author",
    image: "https://i.pravatar.cc/128?img=33",
    email: "liam.brown@acme.io",
    phone: "+1 206 555 0134",
    status: "Active",
    address: "Seattle, WA",
    createdAt: "2025-09-22",
  },
  {
    id: 5,
    name: "Sophia Davis",
    role: "Viewer",
    image: "https://i.pravatar.cc/128?img=20",
    email: "sophia.davis@acme.io",
    phone: "+1 617 555 0199",
    status: "Rejected",
    address: "Boston, MA",
    createdAt: "2025-08-03",
  },
  {
    id: 6,
    name: "Ethan Wilson",
    role: "Support",
    image: "https://i.pravatar.cc/128?img=41",
    email: "ethan.wilson@acme.io",
    phone: "+1 312 555 0147",
    status: "Banned",
    address: "Chicago, IL",
    createdAt: "2025-06-18",
  },
  {
    id: 7,
    name: "Olivia Taylor",
    role: "Manager",
    image: "https://i.pravatar.cc/128?img=47",
    email: "olivia.taylor@acme.io",
    phone: "+1 512 555 0128",
    status: "Active",
    address: "Austin, TX",
    createdAt: "2025-12-01",
  },
  {
    id: 8,
    name: "James Anderson",
    role: "Viewer",
    image: "https://i.pravatar.cc/128?img=53",
    email: "james.anderson@acme.io",
    phone: "+1 702 555 0155",
    status: "Pending",
    address: "Las Vegas, NV",
    createdAt: "2026-02-26",
  },
  {
    id: 9,
    name: "Isabella Thomas",
    role: "Author",
    image: "https://i.pravatar.cc/128?img=58",
    email: "isabella.thomas@acme.io",
    phone: "+1 303 555 0106",
    status: "Active",
    address: "Denver, CO",
    createdAt: "2025-07-11",
  },
  {
    id: 10,
    name: "Benjamin Lee",
    role: "Support",
    image: "https://i.pravatar.cc/128?img=60",
    email: "benjamin.lee@acme.io",
    phone: "+1 404 555 0119",
    status: "Active",
    address: "Atlanta, GA",
    createdAt: "2025-05-05",
  },
]);

// HANDLE DELETE USERS BY IDS
const handleDeleteUsers = async (selectedUsers: User[]) => {
  try {
    isLoading.value = true;
    const ids = selectedUsers.map((user) => user.id);
    await new Promise((r) => setTimeout(r, 450));
    const idSet = new Set(ids);
    users.value = users.value.filter((u) => !idSet.has(u.id));
    toast.success("Users deleted successfully");
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete users");
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <CustomBreadcrumb
    heading="Users"
    :links="[
      { name: 'Home', href: '/' },
      { name: 'Users', current: true }
    ]" />

  <Card class="p-0 pt-5">
    <!-- SHOW LOADING SKELETON -->
    <UserListSkeleton v-if="isLoading" />

    <!-- DATA NOT FOUND UI -->
    <DataNotFound v-else-if="users?.length === 0" />

    <!-- SHOW DATA TABLE WHEN DATA IS AVAILABLE -->
    <DataTable v-else-if="users" :data="users" :columns="columns" @delete="handleDeleteUsers">
      <template
        v-slot:toolbar="{ isFiltered, globalFilter, column, handleResetFilters, setGlobalFilter }">
        <div
          class="flex flex-col gap-4 px-5 mt-1 mb-5 lg:justify-between lg:flex-row lg:items-center">
          <div class="flex flex-col gap-4 items-center lg:flex-row lg:w-3/4 2xl:w-3/5">
            <!-- GLOBAL SEARCH FILTER -->
            <SearchInput
              placeholder="Find User"
              :modelValue="globalFilter"
              :updateModelValue="(value) => setGlobalFilter(String(value))" />

            <div class="flex gap-3 items-center w-full">
              <!-- STATUS BASED FILTER -->
              <Select
                :model-value="`${column('status')?.getFilterValue() || ''}`"
                @update:model-value="column('status')?.setFilterValue($event)">
                <SelectTrigger>
                  <SelectValue
                    placeholder="Status"
                    :class="{ 'text-muted': !column('status')?.getFilterValue() }" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem v-for="status in statuses" :key="status.id" :value="status.value">
                    {{ status.title }}
                  </SelectItem>
                </SelectContent>
              </Select>

              <!-- ROLE BASED FILTER -->
              <Select
                :model-value="`${column('role')?.getFilterValue() || ''}`"
                @update:model-value="column('role')?.setFilterValue($event)">
                <SelectTrigger>
                  <SelectValue
                    placeholder="Role"
                    :class="{ 'text-muted': !column('role')?.getFilterValue() }" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem v-for="role in roles" :value="role" :key="role">
                    {{ role }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div class="flex gap-4 items-center">
            <!-- CLEAR FILTER BUTTON -->
            <Button v-if="isFiltered" @click="handleResetFilters" color="error">
              <Icon icon="heroicons:trash" height="18" class="me-2" />
              Clear
            </Button>

            <!-- NAVIGATE BUTTON -->
            <Button @click="premium.open('Create user')">
              <Icon icon="ic:round-plus" height="18" class="me-2" />
              Add User
            </Button>
          </div>
        </div>
      </template>
    </DataTable>
  </Card>
</template>
