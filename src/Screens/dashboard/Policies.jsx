import React, { useState, useEffect } from "react";
import axios from "axios";

function PolicyComponent() {
  const [showForm, setShowForm] = useState(false);
  const [policies, setPolicies] = useState([]);
  const [editingPolicy, setEditingPolicy] = useState(null);
  // const policyId = localStorage.getItem('policyId');
  // const updatedPolicyWithId = { ...updatedPolicy, id: policyId };


  useEffect(() => {
    async function getPolicies() {
      try {
        const response = await axios.get("https://rxk4239.uta.cloud/createPolicies.php");
        if (response.data && response.data.data) {
          setPolicies(response.data.data);
        } else {
          setPolicies([]);
        }
      } catch (error) {
        console.error("Error fetching policies:", error);
      }
    }

    getPolicies();
  }, []);

  const handleEdit = (policy) => {
    localStorage.setItem('policyId', policy.id);  // Store the ID in localStorage
    setEditingPolicy(policy);
    setShowForm(true);
  };




  const handleAddPolicy = async (policy) => {
    try {
      const response = await axios.post('https://rxk4239.uta.cloud/plagarismAPI.php', policy);
      if (response.data && response.data.message.includes('successfully')) {
        setPolicies([...policies, policy]);
      }
    } catch (error) {
      console.error("Error creating policy:", error);
    }
    setShowForm(false);
  };

const handleUpdatePolicy = async (updatedPolicy) => {
    const policyId = localStorage.getItem('policyId');
    const updatedPolicyWithId = { ...updatedPolicy, id: policyId }; // Move this line here

    try {
      const response = await axios.put('https://rxk4239.uta.cloud/plagarismAPI.php', updatedPolicyWithId); // Use updatedPolicyWithId here
      if (response.data && response.data.message.includes('successfully')) {
        const updatedPolicies = policies.map((p) =>
          p.id === updatedPolicy.id ? updatedPolicy : p
        );
        setPolicies(updatedPolicies);
      }
    } catch (error) {
      console.error("Error updating policy:", error);
    }
    setEditingPolicy(null);
    setShowForm(false);
    localStorage.removeItem('policyId');
};


const handleDelete = async (policyId) => {
  if (!policyId) {
      console.error("Policy ID is missing.");
      return;
  }

  try {
      const response = await axios.delete('https://rxk4239.uta.cloud/plagarismAPI.php', { data: { id: policyId } });
      if (response.data && response.data.message.includes('successfully')) {
          setPolicies(policies.filter((p) => p.id !== policyId));
      }
  } catch (error) {
      console.error("Error deleting policy:", error);
  }
};



  return (
    <div>
      {!editingPolicy && (
        <>
          <button onClick={() => setShowForm(!showForm)}>
            Create Policy
          </button>
          {showForm && !editingPolicy && (
            <PolicyForm onSubmit={handleAddPolicy} />
          )}
          <PolicyTable
            policies={policies}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </>
      )}
      {showForm && editingPolicy && (
        <PolicyForm
          initialText={editingPolicy.description}
          onSubmit={(policy) =>
            handleUpdatePolicy({ ...editingPolicy, ...policy })
          }
        />
      )}
    </div>
  );
}


function PolicyForm({ onSubmit, initialText = "" }) {
  const [policyText, setPolicyText] = useState(initialText);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (policyText) {
      onSubmit({ id: Date.now(), description: policyText });
      setPolicyText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={policyText}
        onChange={(e) => setPolicyText(e.target.value)}
        placeholder="Enter policy text"
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

function PolicyTable({ policies, onEdit, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Plagiarism Policy</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {policies.map((policy) => (
          <tr key={policy.id}>
            <td>{policy.description}</td>
            <td>
              <button className="btn" onClick={() => onEdit(policy)}>
                Edit
              </button>
            </td>
            <td>
              <button className="btn" onClick={() => onDelete(policy.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default PolicyComponent;