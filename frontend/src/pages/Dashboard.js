import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, createTask, deleteTask, updateTask } from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const navigate = useNavigate();

  // load tasks
  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      alert("Please login first");
      navigate("/");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // add task
  const handleAdd = async () => {
    if (!title) return;

    await createTask({
      title,
      description: "From UI",
      status: "PENDING"
    });

    setTitle("");
    loadTasks();
  };

  // delete task
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    await deleteTask(id);
    loadTasks();
  };

  // start editing
  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
  };

  // update task
  const handleUpdate = async (id) => {
    await updateTask(id, {
      title: editTitle,
      description: "Updated",
      status: "PENDING"
    });

    setEditingId(null);
    setEditTitle("");
    loadTasks();
  };

  // logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      
      {/* Header */}
      <div style={styles.header}>
        <h2>Dashboard</h2>
        <button onClick={handleLogout} style={styles.logout}>
          Logout
        </button>
      </div>

      {/* Add Task */}
      <div style={styles.card}>
        <input
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.button}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div style={styles.card}>
        <h3>Your Tasks</h3>

        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          <ul>
            {tasks.map((t) => (
              <li key={t.id} style={styles.task}>
                
                {editingId === t.id ? (
                  <>
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />

                    <button
                      onClick={() => handleUpdate(t.id)}
                      style={styles.saveBtn}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    {t.title} - {t.status}

                    <button
                      onClick={() => handleEdit(t)}
                      style={styles.editBtn}
                    >
                      Edit
                    </button>
                  </>
                )}

                <button
                  onClick={() => handleDelete(t.id)}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    fontFamily: "Arial"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logout: {
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer"
  },
  card: {
    background: "#fff",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  input: {
    padding: "8px",
    width: "70%",
    marginRight: "10px"
  },
  button: {
    padding: "8px 12px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  task: {
    padding: "8px 0"
  },
  deleteBtn: {
    marginLeft: "10px",
    background: "red",
    color: "white",
    border: "none",
    padding: "4px 8px",
    cursor: "pointer"
  },
  editBtn: {
    marginLeft: "10px",
    background: "blue",
    color: "white",
    border: "none",
    padding: "4px 8px",
    cursor: "pointer"
  },
  saveBtn: {
    marginLeft: "10px",
    background: "green",
    color: "white",
    border: "none",
    padding: "4px 8px",
    cursor: "pointer"
  }
};