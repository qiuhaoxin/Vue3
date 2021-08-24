<template>
    <div>{{name}}</div>
    <div>
        <label>scroll the value</label>
        <input type="range" min="0" max="500" v-model="padding"/>
        <div v-pin:[align]="padding">
            just to test
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name:'qiuhaoxin123',
                padding:10,
                align:'right'
            }
        }
    }
</script>