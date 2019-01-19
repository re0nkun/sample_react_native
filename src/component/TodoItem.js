import React from 'react'
import { 
  Text, 
  StyleSheet, 
  View 
} from 'react-native'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#333',
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    backgroundColor: '#800000',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

// export default class TodoItem extends Component {
const TodoItem = (props) => {
  const {
    onDone,
    onDelete,
    text,
    done,
  } = props

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Button onPress={onDone}>
          {done? "Undo" : "Done"}
        </Button>
        <Text style={[styles.text, done && styles.doneText]}> 
          {text}
        </Text>
      </View>
      <Button 
        style={styles.deleteButton}
        onPress={onDelete}
      >
        Delete
      </Button>
    </View>
  )
}

export default TodoItem