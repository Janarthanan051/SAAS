import React, { useState } from 'react';
import { 
  X, CheckSquare, HardDrive, BarChart3, Users, Plus, Trash2, 
  Upload, FileText, CheckCircle2, Search, Filter, ShieldCheck 
} from 'lucide-react';

export default function DashboardModal({ onClose, showToast }) {
  const [activeTab, setActiveTab] = useState('kanban');

  // Task Kanban State
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Design Biccas Homepage Hero', category: 'Design', status: 'done', priority: 'High' },
    { id: '2', title: 'Setup Cloud File Storage Encryption', category: 'Backend', status: 'in-progress', priority: 'High' },
    { id: '3', title: 'Integrate Stripe Payment Gateway', category: 'Billing', status: 'todo', priority: 'Medium' },
    { id: '4', title: 'Conduct User Testing Session #3', category: 'UX Research', status: 'in-progress', priority: 'Low' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('Design');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle,
      category: newTaskCategory,
      status: 'todo',
      priority: 'Medium'
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    showToast('Task added to workspace board!', 'success');
  };

  const handleMoveTask = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
    showToast(`Task status updated to ${newStatus}`, 'info');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    showToast('Task deleted', 'warning');
  };

  // Cloud Storage Files State
  const [files, setFiles] = useState([
    { id: 'f1', name: 'Q3_Financial_Forecast.pdf', size: '4.2 MB', date: 'Today, 10:24 AM' },
    { id: 'f2', name: 'Biccas_Brand_Guidelines_2026.fig', size: '48.9 MB', date: 'Yesterday' },
    { id: 'f3', name: 'Product_Roadmap_Presentation.pptx', size: '12.1 MB', date: '3 days ago' },
  ]);

  const [uploading, setUploading] = useState(false);

  const handleUploadSim = () => {
    setUploading(true);
    setTimeout(() => {
      const newFile = {
        id: Date.now().toString(),
        name: `Project_Asset_${files.length + 1}.zip`,
        size: `${(Math.random() * 20 + 2).toFixed(1)} MB`,
        date: 'Just now'
      };
      setFiles([newFile, ...files]);
      setUploading(false);
      showToast('File uploaded safely to encrypted cloud storage!', 'success');
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={styles.header}>
          <div style={styles.headerTitleGroup}>
            <div style={styles.logoBadge}>B</div>
            <div>
              <h3 style={styles.headerTitle}>Biccas Workspace Demo App</h3>
              <p style={styles.headerSub}>Live Interactive Productivity & Team Storage Suite</p>
            </div>
          </div>
          <button onClick={onClose} style={styles.closeBtn} title="Close Workspace">
            <X size={20} color="#192026" />
          </button>
        </div>

        {/* Workspace Navigation Tabs */}
        <div style={styles.tabNav}>
          <button 
            onClick={() => setActiveTab('kanban')}
            style={{ ...styles.tabBtn, ...(activeTab === 'kanban' ? styles.tabBtnActive : {}) }}
          >
            <CheckSquare size={16} /> Task Manager
          </button>
          <button 
            onClick={() => setActiveTab('storage')}
            style={{ ...styles.tabBtn, ...(activeTab === 'storage' ? styles.tabBtnActive : {}) }}
          >
            <HardDrive size={16} /> Cloud Storage
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            style={{ ...styles.tabBtn, ...(activeTab === 'analytics' ? styles.tabBtnActive : {}) }}
          >
            <BarChart3 size={16} /> Live Analytics
          </button>
        </div>

        {/* Tab Body Content */}
        <div style={styles.body}>
          {/* TAB 1: KANBAN TASK BOARD */}
          {activeTab === 'kanban' && (
            <div>
              {/* Add Task Input Form */}
              <form onSubmit={handleAddTask} style={styles.addTaskRow}>
                <input 
                  type="text" 
                  placeholder="Enter a new task title..." 
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  style={styles.addTaskInput}
                />
                <select 
                  value={newTaskCategory}
                  onChange={(e) => setNewTaskCategory(e.target.value)}
                  style={styles.addTaskSelect}
                >
                  <option value="Design">Design</option>
                  <option value="Backend">Backend</option>
                  <option value="Billing">Billing</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <button type="submit" style={styles.addTaskBtn}>
                  <Plus size={16} /> Add Task
                </button>
              </form>

              {/* Kanban Columns */}
              <div style={styles.kanbanGrid}>
                {/* Column: To Do */}
                <div style={styles.kanbanCol}>
                  <div style={styles.colHeader}>
                    <span>To Do ({tasks.filter(t => t.status === 'todo').length})</span>
                  </div>
                  <div style={styles.cardList}>
                    {tasks.filter(t => t.status === 'todo').map((task) => (
                      <div key={task.id} style={styles.taskCard}>
                        <span style={styles.categoryBadge}>{task.category}</span>
                        <h4 style={styles.taskTitle}>{task.title}</h4>
                        <div style={styles.taskFooter}>
                          <button 
                            onClick={() => handleMoveTask(task.id, 'in-progress')}
                            style={styles.moveBtn}
                          >
                            Start Task →
                          </button>
                          <button onClick={() => handleDeleteTask(task.id)} style={styles.deleteBtn}>
                            <Trash2 size={14} color="#EF4444" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column: In Progress */}
                <div style={styles.kanbanCol}>
                  <div style={styles.colHeader}>
                    <span>In Progress ({tasks.filter(t => t.status === 'in-progress').length})</span>
                  </div>
                  <div style={styles.cardList}>
                    {tasks.filter(t => t.status === 'in-progress').map((task) => (
                      <div key={task.id} style={styles.taskCard}>
                        <span style={{ ...styles.categoryBadge, backgroundColor: '#FEF3C7', color: '#D97706' }}>
                          {task.category}
                        </span>
                        <h4 style={styles.taskTitle}>{task.title}</h4>
                        <div style={styles.taskFooter}>
                          <button 
                            onClick={() => handleMoveTask(task.id, 'done')}
                            style={{ ...styles.moveBtn, backgroundColor: '#54BD95', color: '#FFFFFF' }}
                          >
                            Complete ✓
                          </button>
                          <button onClick={() => handleDeleteTask(task.id)} style={styles.deleteBtn}>
                            <Trash2 size={14} color="#EF4444" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column: Done */}
                <div style={styles.kanbanCol}>
                  <div style={styles.colHeader}>
                    <span>Completed ({tasks.filter(t => t.status === 'done').length})</span>
                  </div>
                  <div style={styles.cardList}>
                    {tasks.filter(t => t.status === 'done').map((task) => (
                      <div key={task.id} style={{ ...styles.taskCard, opacity: 0.85 }}>
                        <span style={{ ...styles.categoryBadge, backgroundColor: '#E8F7F0', color: '#54BD95' }}>
                          {task.category}
                        </span>
                        <h4 style={{ ...styles.taskTitle, textDecoration: 'line-through' }}>{task.title}</h4>
                        <div style={styles.taskFooter}>
                          <span style={styles.doneCheck}>✓ Done</span>
                          <button onClick={() => handleDeleteTask(task.id)} style={styles.deleteBtn}>
                            <Trash2 size={14} color="#EF4444" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CLOUD STORAGE */}
          {activeTab === 'storage' && (
            <div>
              <div style={styles.storageHeader}>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700' }}>Cloud Storage Drive</h4>
                  <p style={{ fontSize: '13px', color: '#A6A6A6' }}>Encrypted & Backed up automatically</p>
                </div>
                <button 
                  onClick={handleUploadSim} 
                  disabled={uploading}
                  style={styles.uploadBtn}
                >
                  <Upload size={16} /> {uploading ? 'Encrypting & Uploading...' : 'Upload File'}
                </button>
              </div>

              {/* Storage Meter */}
              <div style={styles.storageMeterBox}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                  <span>Used Storage (65.2 MB of 10 GB)</span>
                  <span style={{ color: '#54BD95', fontWeight: '600' }}>Pro Tier Plan</span>
                </div>
                <div style={styles.meterTrack}>
                  <div style={styles.meterFill}></div>
                </div>
              </div>

              {/* File List */}
              <div style={styles.fileList}>
                {files.map((file) => (
                  <div key={file.id} style={styles.fileItem}>
                    <div style={styles.fileIconBg}>
                      <FileText size={20} color="#54BD95" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={styles.fileName}>{file.name}</div>
                      <div style={styles.fileMeta}>{file.size} • Uploaded {file.date}</div>
                    </div>
                    <span style={styles.fileStatus}>Encrypted ✓</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DAILY ANALYTICS */}
          {activeTab === 'analytics' && (
            <div>
              <div style={styles.analyticsGrid}>
                <div style={styles.statCard}>
                  <div style={styles.statLabel}>Total Active Projects</div>
                  <div style={styles.statValue}>24</div>
                  <div style={styles.statTrend}>+12.5% this month</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statLabel}>Team Productivity Score</div>
                  <div style={styles.statValue}>94.8%</div>
                  <div style={styles.statTrend}>Optimal Performance</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statLabel}>Cloud Bandwidth Saved</div>
                  <div style={styles.statValue}>1.4 TB</div>
                  <div style={styles.statTrend}>Top efficiency</div>
                </div>
              </div>

              <div style={styles.chartBox}>
                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Weekly Team Task Activity</h4>
                <div style={styles.barChartContainer}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                    const heights = [45, 70, 90, 60, 85, 40, 30];
                    return (
                      <div key={day} style={styles.barCol}>
                        <div 
                          style={{
                            ...styles.barVisual,
                            height: `${heights[i]}%`,
                            backgroundColor: i === 4 ? '#54BD95' : '#E2E8F0'
                          }} 
                        />
                        <span style={styles.barLabel}>{day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '860px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '24px 30px',
    borderBottom: '1px solid #E2E8F0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFCFB',
  },
  headerTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  logoBadge: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#192026',
  },
  headerSub: {
    fontSize: '13px',
    color: '#A6A6A6',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '50%',
  },
  tabNav: {
    display: 'flex',
    gap: '12px',
    padding: '16px 30px',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E2E8F0',
  },
  tabBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 18px',
    borderRadius: '999px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#68717A',
    backgroundColor: '#F1F5F9',
    border: 'none',
  },
  tabBtnActive: {
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    boxShadow: '0 4px 12px rgba(84, 189, 149, 0.3)',
  },
  body: {
    padding: '30px',
    flex: 1,
  },
  addTaskRow: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
  },
  addTaskInput: {
    flex: 1,
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid #CBD5E1',
    fontSize: '14px',
    outline: 'none',
  },
  addTaskSelect: {
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid #CBD5E1',
    fontSize: '14px',
    outline: 'none',
  },
  addTaskBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    fontWeight: '600',
    padding: '12px 20px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
  },
  kanbanGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  kanbanCol: {
    backgroundColor: '#F8FAFC',
    borderRadius: '16px',
    padding: '16px',
    border: '1px solid #E2E8F0',
    minHeight: '300px',
  },
  colHeader: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#475569',
    marginBottom: '16px',
  },
  cardList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '14px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
    border: '1px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    fontSize: '11px',
    fontWeight: '700',
    backgroundColor: '#DBEAFE',
    color: '#1E40AF',
    padding: '2px 8px',
    borderRadius: '8px',
  },
  taskTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1E293B',
  },
  taskFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4px',
  },
  moveBtn: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#54BD95',
    backgroundColor: '#E8F7F0',
    border: 'none',
    padding: '4px 10px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  doneCheck: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#54BD95',
  },
  storageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  uploadBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    padding: '10px 20px',
    borderRadius: '999px',
    fontWeight: '600',
    fontSize: '14px',
  },
  storageMeterBox: {
    backgroundColor: '#F8FAFC',
    padding: '16px',
    borderRadius: '14px',
    marginBottom: '24px',
  },
  meterTrack: {
    width: '100%',
    height: '8px',
    backgroundColor: '#E2E8F0',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  meterFill: {
    width: '18%',
    height: '100%',
    backgroundColor: '#54BD95',
  },
  fileList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  fileItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid #E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  fileIconBg: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#E8F7F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#192026',
  },
  fileMeta: {
    fontSize: '12px',
    color: '#A6A6A6',
  },
  fileStatus: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#54BD95',
  },
  analyticsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    backgroundColor: '#F8FAFC',
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
  },
  statLabel: {
    fontSize: '13px',
    color: '#64748B',
    marginBottom: '6px',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#1E293B',
  },
  statTrend: {
    fontSize: '12px',
    color: '#54BD95',
    fontWeight: '600',
    marginTop: '4px',
  },
  chartBox: {
    backgroundColor: '#F8FAFC',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
  },
  barChartContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '180px',
    paddingTop: '20px',
  },
  barCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
  },
  barVisual: {
    width: '32px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
  },
  barLabel: {
    fontSize: '12px',
    color: '#64748B',
    fontWeight: '600',
  }
};
