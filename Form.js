import React, { useState } from "react";

function Form() {
    // const saveditems = JSON.parse(localStorage.getItem('items'));
    const [addDetails, setAddDetail] = useState([]);

    function handleChange(e) {
        e.preventDefault();
        const form = e.currentTarget;
        console.log(form);
        let inputValue = form.add.value;
        console.log(inputValue);

        const addNewDetails = {
            id: new Date(),
            text: inputValue,
        }

        addDetails.push(addNewDetails);
        form.reset()
        setAddDetail([...addDetails])
    }

    console.log(addDetails)

    const details = addDetails.map(detail =>
        <label key={detail.text}>
            <input type="checkbox" name="checkbox" />
            <span>{detail.text}</span>
        </label>
    )

    return (
        <>
            <form onSubmit={handleChange}>
                <input
                    type="text"
                    placeholder="add details"
                    name="add"
                />
                <button type="submit" >Add</button>
            </form>
            <div className="todo">
                {details}
            </div>
        </>
    )
}

export default Form

