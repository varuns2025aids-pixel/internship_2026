import { useContext } from 'react'
import StudentContext from '../../components/StudenContext'

const Child = () => {
  const studentName = useContext(StudentContext)

  return <p>Child says hello to {studentName}</p>
}

export default Child
