import store from '../index';
import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {TPerson} from '@/types/TPerson';

@Module({ namespaced: true, dynamic: true, store, name: 'storeNomenclatoare'})
export default class Nomenclatoare extends VuexModule {
    public currentPageTitle ='';
    public optionsPersons: TPerson[]=[];

    @Mutation
    public SET_CURRENTPAGETITLE(ptitle: string) {
        this.currentPageTitle = ptitle;
    }
    @Action
    public set_currentpagetitle(ptitle: string) {
        this.context.commit('SET_CURRENTPAGETITLE', ptitle);
    }


    @Mutation
    public SET_OPTS_PERSONS(persons: TPerson[]) {
        this.optionsPersons = JSON.parse(JSON.stringify(persons));
    }

    @Action
    public set_opts_persons(persons: TPerson[]) {
        this.context.commit('SET_OPTS_PERSONS', persons);
    }


    @Action
    public get_persons_fromDB() {
        const listPersons=[{marca:1,lastName:'Marcu',firstName:'Elena'}
                        ,{marca:2, lastName:'Popa',firstName:'Radu'}
                        ,{marca:3, lastName:'Marin',firstName:'Daniela'}];
        this.context.commit('SET_OPTS_PERSONS', listPersons);

    }

}
