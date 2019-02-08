import { observable, autorun, computed, action } from 'mobx'

export class AppStore {
  @observable todos=[];
}