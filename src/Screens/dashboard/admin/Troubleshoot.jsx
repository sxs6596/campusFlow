import React from 'react';

const Troubleshoot = () => {
    const data = [
        { id: 1, problem: 'Login Issue', issue: 'Unresolved', user: 'Student' },
        { id: 2, problem: 'Submission Error', issue: 'Resolved', user: 'Instructor' },
        { id: 3, problem: 'Video not playing', issue: 'Unresolved', user: 'QA Officer' },
    ];

    const styles = {
        troubleshoot: {
            padding: '20px',
            backgroundColor: '#f8f8f8',
            maxWidth: '800px',
            margin: 'auto',
            borderRadius: '8px',
        },
        header: {
            color: '#333',
            marginBottom: '20px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
        },
        cell: {
            padding: '12px 15px',
            borderBottom: '1px solid #ddd',
        },
        headerCell: {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px 15px',
            borderBottom: '1px solid #ddd',
        },
        select: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
    };

    return (
        <div style={styles.troubleshoot}>
            <h2 style={styles.header}>Troubleshoot Issues</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.headerCell}>ID</th>
                        <th style={styles.headerCell}>Problem</th>
                        <th style={styles.headerCell}>Issue</th>
                        <th style={styles.headerCell}>User</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td style={styles.cell}>{item.id}</td>
                            <td style={styles.cell}>{item.problem}</td>
                            <td style={styles.cell}>
                                <select style={styles.select} defaultValue={item.issue}>
                                    <option value="Resolved">Resolved</option>
                                    <option value="Unresolved">Unresolved</option>
                                </select>
                            </td>
                            <td style={styles.cell}>{item.user}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Troubleshoot;
