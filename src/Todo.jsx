export default function Todo({task, isDone}){
    //Conditional rendering option1
    // if(isDone){
    //     return <li>Finished: {task}</li>
    // }
    // else{
    //     return <li>Work on: {task}</li>
    // }

    //option2
    // return (
    //     <li>{isDone ? 'Finished':'Work On'}: {task}</li>
    // );
    // // otion3
    // return(
    //     <li>{task} {isDone && ': Done'}</li>
    // );
    // option4 
    // return(
    //     <li>{task} {isDone || ': Do it now'}</li>
    // );
    //option6
    let listItem;
    if(isDone){
        listItem='Finished';
    }else{
        listItem='Work on';
    }
    return <li>{task} : {listItem}</li>
}