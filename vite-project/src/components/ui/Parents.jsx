import Greeting from './Greeting'
import Child from './Child'

const Parents = () => {
  return (
    <div>
      <h2>Parent component</h2>
      <Greeting>
        <Child />
      </Greeting>
    </div>
  )
}

export default Parents
