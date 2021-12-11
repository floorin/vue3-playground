import { reactive, defineComponent, watch } from "vue";

export default defineComponent({
    props: {
        numberToDisplay: Number
    },
    name: "DisplayNumber",
    setup(props) {
        watch(() => props.numberToDisplay, (oldValue, newValue) => {
            console.log("Watch props.numberToDisplay function called with args:",oldValue, newValue);
        });
    }
})
