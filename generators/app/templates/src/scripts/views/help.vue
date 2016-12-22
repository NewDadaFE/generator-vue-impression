<template>
    <flex direction="column">
        <navbar>
            <router-link :to="{path: '/'}">返回</router-link>
            <h5 slot="body">Help</h5>
        </navbar>
        <flex-item>
            <h1>This is help page.</h1>
        </flex-item>
    </flex>
</template>
