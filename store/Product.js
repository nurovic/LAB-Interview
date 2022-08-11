export const state = () => {}

export const mutations = {
}

export const actions = {
    async getProducts ({commit}) {
        const data = await this.$axios.$get('https://dummyjson.com/products?limit=4')
        return data.products
        commit('GET_PRODUCTS', data)
      },
}

export const getters = {}