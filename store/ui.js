export const state = () => ({
  themeDark: true,
  currentPart: 0 // type: Number | 0: intro, 1: about, 2: experience, 3: portfolio, 4: tutoring, 5: picsee, 6: future, 7: credit
})

export const mutations = {
  SET_UI (state, { key, value }) {
    state[key] = value
  }
}
