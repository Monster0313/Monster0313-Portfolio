export const state = () => ({
  themeDark: true,
  currentPart: 0, // type: Number | 0: intro, 1: about, 2: experience, 3: portfolio,  4: future, 5: credit
  isProjectCard: false
})

export const mutations = {
  SET_UI (state, { key, value }) {
    state[key] = value
  }
}
