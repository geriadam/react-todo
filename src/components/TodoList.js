import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    getAddItem = () => {
        const { value } = this.state;
        const { todoState } = this.props;
        return {
            name: value,
            isDone: false,
            id: todoState.list.length
        };
    };

    render() {
        const {
            todoState,
            handleAddClick,
            handleDeleteClick,
            handleUpdateClick
        } = this.props;

        return ( 
            <>
                <input value={this.state.value} onChange={this.handleInputChange}></input> 
                <button onClick = {() => handleAddClick(this.getAddItem()) }>Add</button> 
                <p> Todo： </p> 
                <ul> 
                {
                    todoState.list.map((item, index) => { 
                        const textDecoration = item.isDone ? { textDecoration: "line-through" } : { textDecoration: "none" };
                        return (
                            <li key={index} style={textDecoration}>
                                {item.name}{" "}
                                <button onClick={() => handleUpdateClick({ id: item.id })}>
                                    {item.isDone ? "Completed" : "Not Done"}
                                </button>
                                <button onClick={() => handleDeleteClick({ id: item.id })}>
                                    删除
                                </button>
                            </li>
                        );
                    })
                }
                </ul>
            </>
        );
    }
}
export default TodoList;
