import { Prop, Watch} from 'vue-property-decorator';
import { Vue, Options } from 'vue-class-component'
import { reactive, defineComponent } from "vue";
import MyButtonLikeClass from '@/components/MyButtonLikeClass/MyButtonLikeClass.vue'
type TPerson={
    lastName: string;
    firstName: string;
}

@Options({
    name: "CompLikeClass",
    components: {MyButtonLikeClass}
})
export default class CompLikeClass extends Vue {
    // Declared as component data
    message = 'Hello World!'
}


