import React, { useState, useEffect, useRef } from 'react';
import { MOCK_CLIENT_PORTAL_PROJECT } from '../data/companyData';
import { 
  Lock, 
  X, 
  CheckCircle2, 
  FileText, 
  Download, 
  Send
} from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  sender: 'user' | 'architect';
  name: string;
  text: string;
  time: string;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (modalRef.current) {
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        (focusable[0] as HTMLElement).focus();
      }
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const [activeTab, setActiveTab] = useState<'overview' | 'deliverables' | 'sprints' | 'support'>('overview');
  const [completionPercent, setCompletionPercent] = useState<number>(MOCK_CLIENT_PORTAL_PROJECT.completionPercent);

  // Interactive Tasks
  const [sprintTasks, setSprintTasks] = useState([
    { id: 1, text: 'Deploy Mobile Telemetry API Gateway', done: true },
    { id: 2, text: 'Configure Redis BullMQ queue for push alerts', done: true },
    { id: 3, text: 'Integrate UPI / Razorpay Webhook HMAC signature verification', done: false },
    { id: 4, text: 'Perform End-to-End Load Test on Postgres Cluster', done: false }
  ]);

  // Messages Thread
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'architect',
      name: 'Devlogic Engineering Lead',
      text: 'Welcome to the Devlogic Client Portal. Sprint #4 telemetry is live. We have completed the API Gateway migration.',
      time: '10:14 AM'
    }
  ]);

  const toggleTask = (id: number) => {
    const updated = sprintTasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    setSprintTasks(updated);
    const completedCount = updated.filter((t) => t.done).length;
    const calc = Math.round(60 + (completedCount / updated.length) * 35);
    setCompletionPercent(calc);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      sender: 'user',
      name: 'You (Client Lead)',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setNewMessage('');

    // Simulate auto-reply from architect
    setTimeout(() => {
      const replyMsg: Message = {
        id: Date.now() + 1,
        sender: 'architect',
        name: 'Devlogic Engineering Lead',
        text: `Received your note: "${userMsg.text.slice(0, 30)}...". I am reviewing this with our infrastructure engineers and will update the task queue shortly.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 1200);
  };

  const handleDownloadDeliverable = (title: string) => {
    const content = `# DEVLOGIC DELIVERABLE: ${title.toUpperCase()}
Project: ${MOCK_CLIENT_PORTAL_PROJECT.name}
Verified Lead Architect: ${MOCK_CLIENT_PORTAL_PROJECT.leadEngineer}
Timestamp: ${new Date().toISOString()}

---
This document represents an official signed technical deliverable generated for client audit.
Status: APPROVED & DEPLOYED TO STAGING
`;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl overflow-y-auto">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="portal-modal-title"
        className="bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl max-w-4xl w-full my-8 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto apple-modal-content"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-950/70 text-blue-400 border border-blue-800/60 shadow-xs">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider">
                  DEVLOGIC CLIENT PORTAL // LIVE INTERACTIVE SIMULATOR
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">
                  {MOCK_CLIENT_PORTAL_PROJECT.status}
                </span>
              </div>
              <h3 id="portal-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {MOCK_CLIENT_PORTAL_PROJECT.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-colors apple-press focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Close portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 py-4 border-b border-slate-800 overflow-x-auto">
          {[
            { id: 'overview', label: 'System Progress' },
            { id: 'deliverables', label: 'Documents & Spec Vault' },
            { id: 'sprints', label: 'Interactive Sprint Checklist' },
            { id: 'support', label: 'Direct Engineer Thread' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap apple-press ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="py-6 space-y-6">
            {/* Progress Bar */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center justify-between mb-2 font-mono text-xs">
                <span className="text-slate-400">Total System Completion</span>
                <span className="text-blue-400 font-bold">{completionPercent}%</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${completionPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <span className="text-slate-500 block mb-1">Next Milestone:</span>
                <span className="text-white font-bold">{MOCK_CLIENT_PORTAL_PROJECT.nextMilestone}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <span className="text-slate-500 block mb-1">Target Launch:</span>
                <span className="text-emerald-400 font-bold">{MOCK_CLIENT_PORTAL_PROJECT.estimatedCompletion}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <span className="text-slate-500 block mb-1">Lead Architect:</span>
                <span className="text-blue-400 font-bold">{MOCK_CLIENT_PORTAL_PROJECT.leadEngineer}</span>
              </div>
            </div>

            {/* Activity Stream */}
            <div>
              <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-widest block mb-3">
                REAL-TIME ENGINEERING ACTIVITY LOG
              </span>
              <div className="space-y-2">
                {MOCK_CLIENT_PORTAL_PROJECT.recentActivity.map((act, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-mono bg-slate-900 text-blue-400 border border-slate-800">
                        {act.tag}
                      </span>
                      <span className="text-slate-200">{act.text}</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">{act.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Deliverables Vault */}
        {activeTab === 'deliverables' && (
          <div className="py-6 space-y-4">
            <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-widest block">
              SECURE DOCUMENT & ARCHITECTURE DELIVERABLES
            </span>
            <div className="space-y-3">
              {MOCK_CLIENT_PORTAL_PROJECT.deliverables.map((del, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <div>
                      <h4 className="text-xs font-bold text-white font-mono">{del.title}</h4>
                      <p className="text-[10px] text-slate-500 font-mono">
                        {del.type} · {del.size} · Uploaded {del.date}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownloadDeliverable(del.title)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-800 flex items-center gap-1.5 apple-press"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Spec</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Active Sprint Checklist */}
        {activeTab === 'sprints' && (
          <div className="py-6 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 mb-4">
              <span className="font-mono text-xs text-blue-400 font-bold block mb-1">
                CURRENT SPRINT: {MOCK_CLIENT_PORTAL_PROJECT.activeSprint}
              </span>
              <p className="text-xs text-slate-300 font-normal">
                Click tasks below to test completion status updates in real-time.
              </p>
            </div>

            <div className="space-y-2">
              {sprintTasks.map((t) => (
                <div
                  key={t.id}
                  onClick={() => toggleTask(t.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs font-mono apple-press ${
                    t.done
                      ? 'bg-emerald-950/30 border-emerald-800/80 text-emerald-300'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className={`w-4 h-4 ${t.done ? 'text-emerald-400' : 'text-slate-600'}`} />
                    <span className={t.done ? 'line-through opacity-80' : ''}>{t.text}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">
                    {t.done ? 'COMPLETED' : 'IN PROGRESS'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Direct Engineer Thread */}
        {activeTab === 'support' && (
          <div className="py-6 space-y-4">
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 max-h-[300px] overflow-y-auto space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`p-3.5 rounded-2xl max-w-lg text-xs ${
                    m.sender === 'user'
                      ? 'ml-auto bg-blue-950/60 border border-blue-800/80 text-blue-100'
                      : 'mr-auto bg-slate-900 border border-slate-800 text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-1">
                    <span className="font-bold">{m.name}</span>
                    <span>{m.time}</span>
                  </div>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                aria-label="Message to Devlogic Engineering Lead"
                placeholder="Type your message to Devlogic Engineering Lead..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 flex items-center gap-1.5 shrink-0 apple-press shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send</span>
              </button>
            </form>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white apple-press transition-colors"
          >
            Close Portal Preview
          </button>
        </div>
      </div>
    </div>
  );
};
