
import {connect} from "react-redux";
import Task from "./Task";


const TodoList = (props) => {

    return (
        <div>
            {props.todoList.map(el => <Task key={el.id} grandTask={el}/>)}

        </div>
    );

}
const mapStateToProps = (state) => ({
    todoList: state.todoList
})

export default connect(mapStateToProps)(TodoList)