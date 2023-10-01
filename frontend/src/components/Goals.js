import React, { useState } from 'react';

// export function Goals({checkGoals, getGoals, createGoal, completeGoal}) {
export function Goals() {
  
  // checkGoals()
  
  // const [goals, setGoals] = useState(getGoals());
  const [goals, setGoals] = useState([]);

  const [formData, setFormData] = useState({
    goal: '',
    description: '',
    date: '',
    amount: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (index) => {
    const updatedGoals = [...goals];
    if (updatedGoals[index].completed == 0){
      updatedGoals[index].completed = 1;
      setGoals(updatedGoals);
      // completeGoal(updatedGoal[index].hashNumber)
    }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new goal object
    const newGoal = {
      hashNumber: Math.floor(Math.random() * 1000000),
      goal: formData.goal,
      description: formData.description,
      date: formData.date,
      amount: formData.amount,
      completed: 0
    };

    console.log(formData.hashNumber)
    console.log(formData.goal)
    console.log(formData.description)
    console.log(formData.date)
    console.log(formData.amount)

    // Add the new goal to the list of goals
    setGoals([...goals, newGoal]);


    // Clear the form
    setFormData({
      goal: '',
      description: '',
      date: '',
      amount: 1,
    });

    // createGoal(formData.hashNumber, formData.description, formData.date, formData.amount)

  };

  return (
    <div>
      <div className="container">
          <ul style={{ listStyleType: 'none' }}>
              {goals.map((goal, index) => (
                  <li key={index}>
                      <input 
                          type="checkbox" 
                          checked={goal.completed} 
                          onChange={() => handleCheckboxChange(index)}
                      />
                      <strong>{" "}</strong> {goal.goal} - 
                      <strong>{" "}</strong> {goal.description} | 
                      <strong>{" "}</strong> {goal.date} | 
                      <strong>{" "} Amount:</strong> {goal.amount} {" "} ETH
                  </li>
              ))}
          </ul>
      </div>

      <h4>Create new goal</h4>
      <form
        onSubmit={(event) => {
          // // This function just calls the transferTokens callback with the
          // // form's data.
          // event.preventDefault();

          // const formData = new FormData(event.target);
          // const to = formData.get("to");
          // const amount = formData.get("amount");

          // if (to && amount) {
          //   transferTokens(to, amount);
          // }
          handleSubmit(event)

        }}
      >

        <div className="form-group">
          <label>Goal</label>
          <input
              className="form-control"
              type="text"
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              required
          />
        </div>
        <div className="form-group">
            <label>Short description</label>
            <input
                className="form-control"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
            />
        </div>
        <div className="form-group">
            <label>Date</label>
            <input
                className="form-control"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
            />
        </div>
        <div className="form-group">
            <label>Amount of accountability money</label>
            <input
                className="form-control"
                type="number"
                step="1"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="1"
                required
            />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Create Goal" />
        </div>
      </form>
    </div>
  );
}
