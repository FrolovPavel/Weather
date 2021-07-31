import Vue from 'vue'
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        weather: {
            result: {},
            error: [],
        }
    },
    actions: {
        GET_DATA({commit},city){
            return axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5b5375b7952906a50e1d978e47509fc7&lang=ru`,
                {
                    method: 'GET'
                })
                .then(respons => {
                    commit('SET_WEATHER', respons.data)
                    console.log(respons.data)
                })
                .catch(error => {
                    commit('SET_ERROR', error)
                })

        }
    },
    mutations: {
        SET_WEATHER(state,weather) {
            state.weather.result = weather
            state.weather.error = []
        },
        SET_ERROR(state, error){
            state.weather.error = error
            state.weather.result = { }
        }
    },
    getters: {
        DATA(state){
            return state.weather
        }
    }

})

export default store