<template>
    <div class="card">
        <div class="card-title ">{{book.title}}-{{book.author.join('/')}}</div>
        <div>{{book.catalog}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            book: Object,
        },
    };
</script>
