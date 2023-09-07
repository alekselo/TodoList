import styled  from "styled-components";

export const TodoContainer = styled.div`
width: 100%;
padding: 15px;
` 

 const TodoList = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 0;
    list-style: none;
    &:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }
 `
   
 export const TodoListFailed = styled(TodoList)`
  margin-bottom: 0px;
`

 export const TodoListCompleted = styled(TodoList)`
    position: relative;
    padding: 60px 0 0 0;
    margin-top: 0px;

    &:before {
        content: '';
        width: 150px;
        height: 1px;
        background: #d8e5e0;
        position: absolute;
        top: 30px;
        left: calc(50% - 75px);
    }
`

export const ItemMessage = styled.p`
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
`


