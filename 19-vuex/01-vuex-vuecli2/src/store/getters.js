export default {
  getStudentCounts: state => {
    return state.students.filter(s => s.age > 20).length
  },
  getStuById: state => id => {
    return state.students.find(s => s.id === id)
  },
  getStuByIdF (state) {
    return function (id) {
      return state.students.find(s => s.id === id)
    }
  }
}
