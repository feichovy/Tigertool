import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('requests');

  const pageTitle =
    activeTab === 'requests'
      ? 'Software Request 发送模块 (Phase 1)'
      : activeTab === 'uat'
      ? 'UAT 流程启动模块 (Phase 2)'
      : 'Room Allocation 智能映射模块 (Phase 3)';

  const pageDesc =
    activeTab === 'requests'
      ? '一键群发 Microsoft Form，沉淀发送记录与今日统计。'
      : activeTab === 'uat'
      ? '批量发送 UAT 邀请，自动生成模块与 Ticket 邮件。'
      : '多表映射与写回，追踪进度与异常信息。';

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-badge">TT</div>
          <div>
            <h1>Tiger Team Tool</h1>
            <p>Placement Workflow</p>
          </div>
        </div>

        <nav className="nav">
          <button
            onClick={() => setActiveTab('requests')}
            className={`nav-item ${activeTab === 'requests' ? 'active' : ''}`}
          >
            <span className="nav-title">Software Request</span>
            <span className="nav-sub">邮件群发与统计</span>
          </button>
          <button
            onClick={() => setActiveTab('uat')}
            className={`nav-item ${activeTab === 'uat' ? 'active' : ''}`}
          >
            <span className="nav-title">UAT 流程启动</span>
            <span className="nav-sub">Module + Ticket 邮件</span>
          </button>
          <button
            onClick={() => setActiveTab('mapping')}
            className={`nav-item ${activeTab === 'mapping' ? 'active' : ''}`}
          >
            <span className="nav-title">Room Allocation</span>
            <span className="nav-sub">智能映射写回</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="status-pill">
            <span className="status-dot" /> Outlook API 已连接
          </div>
          <p className="muted">今日已发送：128</p>
        </div>
      </aside>

      <main className="content">
        <header className="page-header">
          <div>
            <h2>{pageTitle}</h2>
            <p>{pageDesc}</p>
          </div>
          <div className="header-actions">
            <button className="btn ghost">查看日志</button>
            <button className="btn primary">同步 Excel</button>
          </div>
        </header>

        {activeTab === 'requests' && (
          <section className="grid">
            <div className="card span-7">
              <div className="card-header">
                <div>
                  <h3>输入源</h3>
                  <p>读取教师/申请人邮箱列表（Excel 或文本输入）。</p>
                </div>
                <button className="btn outline">导入 Excel</button>
              </div>
              <div className="card-body">
                <div className="upload">
                  <div>
                    <h4>邮箱列表</h4>
                    <p className="muted">支持 .xlsx / .csv / .txt</p>
                  </div>
                  <button className="btn ghost">选择文件</button>
                </div>
                <label className="field">
                  <span>或直接粘贴邮箱（每行一个）</span>
                  <textarea placeholder="teacher1@domain.com\nteacher2@domain.com" rows="6" />
                </label>
              </div>
            </div>

            <div className="card span-5">
              <div className="card-header">
                <div>
                  <h3>操作</h3>
                  <p>一键群发 Microsoft Form 链接。</p>
                </div>
              </div>
              <div className="card-body">
                <label className="field">
                  <span>Microsoft Form 链接</span>
                  <input type="text" placeholder="https://forms.office.com/..." />
                </label>
                <label className="field">
                  <span>邮件模板</span>
                  <textarea
                    rows="6"
                    defaultValue="您好，
请填写以下 Software Request 表单：\n[Microsoft Form Link]\n谢谢。"
                  />
                </label>
                <button className="btn primary full">一键群发</button>
                <div className="divider" />
                <div className="stat-list">
                  <div>
                    <p className="stat-title">今日已发送</p>
                    <p className="stat-value">128</p>
                  </div>
                  <div>
                    <p className="stat-title">最近一次批量发送</p>
                    <p className="stat-value">09:42 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card span-12">
              <div className="card-header">
                <div>
                  <h3>发送记录</h3>
                  <p>查看成功/失败与批次时间。</p>
                </div>
                <button className="btn ghost">导出</button>
              </div>
              <div className="table-placeholder">这里展示批量发送记录表格</div>
            </div>
          </section>
        )}

        {activeTab === 'uat' && (
          <section className="grid">
            <div className="card span-7">
              <div className="card-header">
                <div>
                  <h3>输入源</h3>
                  <p>Email + Module Code + Ticket Number 三要素。</p>
                </div>
                <button className="btn outline">导入 Excel</button>
              </div>
              <div className="card-body">
                <div className="inline-fields">
                  <label className="field">
                    <span>Email 列</span>
                    <input type="text" placeholder="Email" />
                  </label>
                  <label className="field">
                    <span>Module Code 列</span>
                    <input type="text" placeholder="Module Code" />
                  </label>
                  <label className="field">
                    <span>Ticket Number 列</span>
                    <input type="text" placeholder="Ticket" />
                  </label>
                </div>
                <div className="table-placeholder">这里展示待发送 UAT 表格</div>
              </div>
            </div>

            <div className="card span-5">
              <div className="card-header">
                <div>
                  <h3>操作</h3>
                  <p>批量发送 UAT 邀请邮件。</p>
                </div>
              </div>
              <div className="card-body">
                <label className="field">
                  <span>邮件模板</span>
                  <textarea
                    rows="6"
                    defaultValue="您的模块 [Module Code] 已装好，请使用 Ticket [Ticket Number] 登录虚拟机测试。"
                  />
                </label>
                <button className="btn primary full">批量发送 UAT 邀请</button>
                <div className="divider" />
                <div className="stat-list">
                  <div>
                    <p className="stat-title">待发送数量</p>
                    <p className="stat-value">42</p>
                  </div>
                  <div>
                    <p className="stat-title">发送成功率</p>
                    <p className="stat-value">98.6%</p>
                  </div>
                  <div>
                    <p className="stat-title">最近批次</p>
                    <p className="stat-value">今天 14:20</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'mapping' && (
          <section className="grid">
            <div className="card span-8">
              <div className="card-header">
                <div>
                  <h3>输入源</h3>
                  <p>已通过环境变量配置共享表格，无需手动上传。</p>
                </div>
                <button className="btn outline">检查连接</button>
              </div>
              <div className="card-body">
                <div className="table-placeholder">
                  读取共享表格：Software / Module / Room（已配置）
                </div>
              </div>
            </div>

            <div className="card span-4">
              <div className="card-header">
                <div>
                  <h3>操作</h3>
                  <p>执行 Mapping 并写回共享表。</p>
                </div>
              </div>
              <div className="card-body">
                <button className="btn primary full">执行 Mapping 映射</button>
                <div className="divider" />
                <div className="alert warning">
                  发现 3 个软件找不到对应的 Room
                </div>
              </div>
            </div>

            <div className="card span-12">
              <div className="card-header">
                <div>
                  <h3>异常记录</h3>
                  <p>仅展示无法映射的异常信息。</p>
                </div>
                <button className="btn ghost">查看异常</button>
              </div>
              <div className="table-placeholder">这里展示异常记录表格</div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;