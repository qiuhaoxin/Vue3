import {createApp} from 'vue';
import App from './Main.vue';

const app=createApp(App);

app.mixin({
    created(){
        console.log("created!!!");
    },
    mounted(){
        console.log("name is ",this.name);
    }
})

app.directive('pin',{
    mounted(el,binding){
        console.log("binding arg is ",binding.arg);
        console.log("binding value is ",binding.value);
        el.style.position='fixed';
        const s=binding.arg || 'top';
        el.style[s]=binding.value + 'px';

    },
    updated(el,binding){
        console.log("updated is ",binding.value);
        const s=binding.arg || 'top';
        el.style[s]=binding.value + "px";
    }
})


console.log("hei");
app.mount('#app');
