import store from '../index';
import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {TPerson} from '@/types/TPerson';

@Module({ namespaced: true, dynamic: true, store, name: 'storModulTest1'})
export default class ModulTest1 extends VuexModule {
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

}
