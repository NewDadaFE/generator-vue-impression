<template>
    <div>
        <group-title>Counter</group-title>
        <group>
            <cell>
                Clicked: {{ count }} times
            </cell>
            <cell>
                doubleTimes: {{ doubleCount }}
            </cell>
            <cell>
                <btn theme="primary" size="sm" @click="increment"><icon name="plus" size="lg"/></btn>
                <btn theme="secondary" size="sm" @click="decrement"><icon name="minus" size="lg" /></btn>
                <btn theme="default" size="sm" slot="footer" @click="reset">RESET</btn>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        props: {
            count: Number,
            doubleCount: Number,
            increment: Function,
            decrement: Function,
            reset: Function,
        },
    };
</script>
