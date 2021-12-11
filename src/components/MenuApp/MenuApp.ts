import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import { defineComponent } from "vue";

type TPerson={
    lastName: string;
    firstName: string;
}

export default defineComponent({
    name: "MenuApp",
    methods: {
        goToView(pRouteViewName: string ) {
            this.$router.push({ name: pRouteViewName })
        }

},
});
