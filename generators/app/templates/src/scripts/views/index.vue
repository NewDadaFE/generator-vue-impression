<template>
    <flex direction="column">
        <navbar>
            <h5 slot="body">vue-impression</h5>
        </navbar>
        <flex-item>
            <group-title>Hello, impression!</group-title>
            <group>
                <cell to="counter">Counter</cell>
                <cell to="square">Square</cell>
                <cell to="search">search</cell>
            </group>
        </flex-item>
    </flex>
</template>
