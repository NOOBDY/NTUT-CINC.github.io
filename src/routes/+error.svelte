<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="flex h-full items-center justify-center">
    <div class="select-none text-center font-heading text-neutral-700">
        <h1 class="text-9xl">
            {$page.status}
        </h1>
        <p class="text-2xl font-bold">
            {$page.error?.message}
        </p>
    </div>
</div>
