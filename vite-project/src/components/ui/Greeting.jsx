import StudentContext from '../../components/StudenContext'

const Greeting = ({ children }) => {
  const studentName = 'Prabhu'

  return (
    <StudentContext.Provider value={studentName}>
      {children}
    </StudentContext.Provider>
  )
}

export default Greeting
