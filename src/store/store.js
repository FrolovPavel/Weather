import Vue from 'vue'
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        weather: []
    },
    actions: {
        GET_WEATHER({commit},city){
            return axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5b5375b7952906a50e1d978e47509fc7&lang=ru`,
                {
                    method: 'GET'
                })
                .then(respons => {
                    commit('SET_WEATHER', respons.data)
                })

        }
    },
    mutations: {
        SET_WEATHER(state,weather) {
            console.log(weather)
        }
    }

})

export default store