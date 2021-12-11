import { Prop, Watch} from 'vue-property-decorator';
import { Vue, Options } from 'vue-class-component'
import { reactive, defineComponent } from "vue";

type TPerson={
    lastName: string;
    firstName: string;
}

@Options({
    name: "MyButtonLikeClass",
    components: {}
})
export default class MyButtonLikeClass extends Vue {
    @Prop({ default: 'blue' }) public readonly  color!: string;
}


