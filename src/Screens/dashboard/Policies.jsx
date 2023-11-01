import React, { useState } from 'react';

function PolicyComponent() {
    const [showForm, setShowForm] = useState(false);
    const [policies, setPolicies] = useState([]);

    const handleAddPolicy = (policy) => {
        // setPolicies([...policies, policy]);
        console.log(policy);
        setShowForm(false);
    };

    const handleEdit = (id) => {
        console.log("Editing policy with id:", id);
    };

    const handleDelete = (id) => {
        setPolicies(policies.filter(p => p.id !== id));
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

            <button className="btn" onClick={() => setShowForm(!showForm)}>Create Policy</button>
            
            {showForm && (
                <PolicyForm onSubmit={handleAddPolicy} />
            )}
            
            <PolicyTable policies={policies} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

function PolicyForm({ onSubmit }) {
    const [policyText, setPolicyText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(policyText) {
            onSubmit({ id: Date.now(), text: policyText });
            setPolicyText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={policyText} 
                onChange={e => setPolicyText(e.target.value)} 
                placeholder="Enter policy text"
            />
            <button type="submit" className="btn">Submit</button>
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
                {policies.map(policy => (
                    <tr key={policy.id}>
                        <td>{policy.text}</td>
                        <td><button className="btn" onClick={() => onEdit(policy.id)}>Edit</button></td>
                        <td><button className="btn" onClick={() => onDelete(policy.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PolicyComponent;
