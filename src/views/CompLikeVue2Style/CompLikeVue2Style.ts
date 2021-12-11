import { defineComponent } from "vue";
import nomenclatoare from '@/store/modules/nomenclatoare';
import {getModule} from 'vuex-module-decorators';
import {TPerson} from '@/types/TPerson';

const storeNomenclatoare = getModule(nomenclatoare);

export default defineComponent({
    name: "CompLikeVue2Style",
    data() {
        return {
            person:{marca:1, lastName:'Codreanu',firstName:'Florin'} as TPerson,
            submitted: false,
            selectedPerson:{marca:0,lastName:'',firstName:''} as TPerson
        };
    },
    computed:{
        optionsPersons():TPerson[]{
            return storeNomenclatoare.optionsPersons;
        },
        getFullName():string{
            return  `${this.person.lastName}  ${this.person.firstName}`
        }
    },
    methods: {
        modifyPerson() {
            console.log('modifyPerson')
            this.person.lastName='Codreanu methods';
        },
        getPersonsFromDB() {
            storeNomenclatoare.get_persons_fromDB()
        }
    },
});
