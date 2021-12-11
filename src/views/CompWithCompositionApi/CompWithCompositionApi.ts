import { reactive, ref, defineComponent } from "vue";
import DisplayNumber from '@/components/DisplayNumber/DisplayNumber.vue'
import {TPerson} from '@/types/TPerson';

export default defineComponent({
    name: "CompWithCompositionApi",
    components: {
        DisplayNumber
    },
    setup(props) {
        const numberToDisplay = ref(123)
        const person = reactive({
            marca: 1,
            lastName: 'Codreanu',
            firstName: 'Florin'
        });

        const modifyPerson = () => {
            person.lastName = 'Codreanu compositionApi';
        }

        const modifyNumberToDisplay = (newNumber: number) => {
            numberToDisplay.value = newNumber;
        }

        return {numberToDisplay, person, modifyPerson,modifyNumberToDisplay};
    }
})
