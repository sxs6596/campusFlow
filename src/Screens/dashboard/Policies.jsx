import React, { useState, useEffect } from "react";
import axios from "axios";

function PolicyComponent() {
  const [showForm, setShowForm] = useState(false);
  const [policies, setPolicies] = useState([]);
  const [editingPolicy, setEditingPolicy] = useState(null);

  useEffect(() => {
    async function getPolicies() {
      const response = await axios.get(
        "https://rxk4239.uta.cloud/createPolicies.php"
      );
      setPolicies(response.data.data);
    }
    getPolicies();
  }, [policies]);

  const handleAddPolicy = (policy) => {
    console.log(policy);
    setShowForm(false);
  };

  const handleEdit = (policy) => {
    setEditingPolicy(policy);
    setShowForm(true);
  };

  const handleUpdatePolicy = (updatedPolicy) => {
    const updatedPolicies = policies.map((p) =>
      p.id === updatedPolicy.id ? updatedPolicy : p
    );
    setPolicies(updatedPolicies);

    setEditingPolicy(null);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setPolicies(policies.filter((p) => p.id !== id));
  };

  return (
    <div>
      <style>{`
                /* Table styles */
                .table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .table th, .table td {
                    padding: 10px 15px;
                    border: 1px solid #ddd;
                    text-align: left;
                }

                .table th {
                    background-color: #f5f5f5;
                }

                /* Button styles */
                .btn {
                    display: inline-block;
                    padding: 6px 12px;
                    margin-bottom: 0;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1.42857143;
                    text-align: center;
                    white-space: nowrap;
                    vertical-align: middle;
                    cursor: pointer;
                    user-select: none;
                    border: 1px solid transparent;
                    border-radius: 4px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                }

                .btn:hover {
                    background-color: #0056b3;
                }
            `}</style>

      {!editingPolicy && (
        <>
          <button className="btn" onClick={() => setShowForm(!showForm)}>
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
      <button type="submit" className="btn">
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
