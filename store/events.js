import EventService from '~/services/EventService'

// its important that state returns anonymous function:
// if it didnt, on the server side it would only create one state instance
// and it would share this one instance all over requests
// in our case we create a new one every time

export const state = () => ({
  events: [],
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
}

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response.data)
    })
  },
}
