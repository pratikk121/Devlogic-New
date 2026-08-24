import React, { useState, useEffect, useRef } from 'react';
import { LAB_EXPERIMENTS } from '../data/companyData';
import { LabExperiment } from '../types';
import { 
  FlaskConical, 
  Terminal, 
  Code2, 
  Play, 
  CheckCircle2, 
  Cpu, 
  Activity, 
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Download,
  Filter,
  RefreshCw,
  Zap,
  Plus,
  Trash2,
  FileCode,
  AlertTriangle
} from 'lucide-react';

export const LabSection: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(LAB_EXPERIMENTS[0].id);

  // --- EXPERIMENT 1 STATE (Payload Normalizer & TS Generator) ---
  const [jsonInput, setJsonInput] = useState<string>(
    '{\n  "event": "stripe.charge.succeeded",\n  "amount": 45000,\n  "currency": "usd",\n  "customer": "cus_9842",\n  "metadata": {\n    "orderId": "ord_102",\n    "tier": "enterprise"\n  }\n}'
  );
  const [activeTabExp1, setActiveTabExp1] = useState<'normalized' | 'typescript' | 'sql'>('normalized');
  const [parsedJson, setParsedJson] = useState<any>(null);
  const [copiedExp1, setCopiedExp1] = useState<boolean>(false);

  useEffect(() => {
    try {
      setParsedJson(JSON.parse(jsonInput));
    } catch {
      setParsedJson(null);
    }
  }, [jsonInput]);

  const loadJsonPreset = (preset: 'stripe' | 'github' | 'shopify') => {
    if (preset === 'stripe') {
      setJsonInput('{\n  "event": "stripe.charge.succeeded",\n  "amount": 45000,\n  "currency": "usd",\n  "customer": "cus_9842"\n}');
    } else if (preset === 'github') {
      setJsonInput('{\n  "action": "opened",\n  "issue": {\n    "id": 89421,\n    "title": "Database pool timeout in prod",\n    "user": "alex_dev"\n  }\n}');
    } else {
      setJsonInput('{\n  "topic": "orders/create",\n  "order_id": 9012,\n  "total_price": "129.99",\n  "line_items": [\n    { "title": "Devlogic License", "quantity": 1 }\n  ]\n}');
    }
  };

  const generateTsInterface = (obj: any): string => {
    if (!obj || typeof obj !== 'object') return '// Invalid JSON payload';
    let lines = ['export interface WebhookPayload {'];
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      let typeStr: string = typeof val;
      if (Array.isArray(val)) typeStr = 'any[]';
      else if (val === null) typeStr = 'null';
      else if (typeof val === 'object') typeStr = 'Record<string, any>';
      lines.push(`  ${key}: ${typeStr};`);
    }
    lines.push('  devlogicIngestedAt: string;');
    lines.push('  devlogicNormalizedStatus: "NORMALIZED_ZERO_ERROR";');
    lines.push('}');
    return lines.join('\n');
  };

  const generateSqlDdl = (obj: any): string => {
    if (!obj || typeof obj !== 'object') return '-- Invalid JSON payload';
    let lines = ['CREATE TABLE IF NOT EXISTS webhook_logs ('];
    lines.push('  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),');
    lines.push('  ingested_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),');
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      let colType = 'TEXT';
      if (typeof val === 'number') colType = 'NUMERIC';
      else if (typeof val === 'boolean') colType = 'BOOLEAN';
      else if (typeof val === 'object') colType = 'JSONB';
      lines.push(`  ${key.toLowerCase()} ${colType},`);
    }
    lines.push('  raw_payload JSONB NOT NULL');
    lines.push(');');
    return lines.join('\n');
  };

  // --- EXPERIMENT 2 STATE (Workflow Automation Executor) ---
  const [wfTrigger, setWfTrigger] = useState<string>('Webhook Event Received');
  const [wfCondition, setWfCondition] = useState<string>('Amount >= $100');
  const [wfAction, setWfAction] = useState<string>('Send Slack Alert & Create CRM Task');
  const [wfLogs, setWfLogs] = useState<string[]>([]);
  const [isWfRunning, setIsWfRunning] = useState<boolean>(false);

  const handleRunWorkflow = () => {
    setIsWfRunning(true);
    setWfLogs(['[0.00s] Initializing Devlogic BullMQ Worker...']);

    setTimeout(() => {
      setWfLogs((prev) => [...prev, `[0.12s] TRIGGER FIRED: ${wfTrigger}`]);
    }, 400);

    setTimeout(() => {
      setWfLogs((prev) => [...prev, `[0.34s] EVALUATING RULE: ${wfCondition} -> PASSED (true)`]);
    }, 900);

    setTimeout(() => {
      setWfLogs((prev) => [
        ...prev,
        `[0.68s] EXECUTING ACTION: ${wfAction}`,
        `[0.85s] SUCCESS: Workflow executed with status 200 OK`
      ]);
      setIsWfRunning(false);
    }, 1500);
  };

  // --- EXPERIMENT 3 STATE (Canvas Node Topology Visualizer) ---
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [trafficSpike, setTrafficSpike] = useState<boolean>(false);
  const [simLatency, setSimLatency] = useState<number>(4);

  useEffect(() => {
    if (selectedExpId !== 'exp-03') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let packetOffset = 0;

    const nodes = [
      { id: 'CDN', x: 60, y: 100, label: 'Edge CDN', color: '#0284c7' },
      { id: 'API', x: 200, y: 100, label: 'API Gateway', color: '#4f46e5' },
      { id: 'APP', x: 340, y: 60, label: 'App Worker', color: '#059669' },
      { id: 'AUTH', x: 340, y: 140, label: 'Auth Guard', color: '#e11d48' },
      { id: 'DB', x: 480, y: 100, label: 'Postgres DB', color: '#d97706' }
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Connections
      ctx.strokeStyle = trafficSpike ? 'rgba(2, 132, 199, 0.6)' : 'rgba(148, 163, 184, 0.4)';
      ctx.lineWidth = 2;

      // Draw lines
      const drawLine = (n1: any, n2: any) => {
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      };

      drawLine(nodes[0], nodes[1]);
      drawLine(nodes[1], nodes[2]);
      drawLine(nodes[1], nodes[3]);
      drawLine(nodes[2], nodes[4]);

      // Animated Packets
      packetOffset = (packetOffset + (trafficSpike ? 3 : 1)) % 100;
      const t = packetOffset / 100;

      ctx.fillStyle = trafficSpike ? '#0284c7' : '#059669';
      const drawPacket = (n1: any, n2: any) => {
        const px = n1.x + (n2.x - n1.x) * t;
        const py = n1.y + (n2.y - n1.y) * t;
        ctx.beginPath();
        ctx.arc(px, py, trafficSpike ? 4 : 3, 0, Math.PI * 2);
        ctx.fill();
      };

      drawPacket(nodes[0], nodes[1]);
      drawPacket(nodes[1], nodes[2]);
      drawPacket(nodes[2], nodes[4]);

      // Draw Nodes
      nodes.forEach((n) => {
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0f172a';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, n.y + 32);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [selectedExpId, trafficSpike]);

  // --- EXPERIMENT 4 STATE (Log Anomaly Analyzer) ---
  const [logFilter, setLogFilter] = useState<'ALL' | 'ERROR' | 'WARN' | 'INFO'>('ALL');
  const [logSearch, setLogSearch] = useState<string>('');
  const [logEntries] = useState([
    { id: 1, time: '12:04:01', level: 'INFO', msg: 'GET /api/v1/health 200 OK - 2ms' },
    { id: 2, time: '12:04:05', level: 'WARN', msg: 'Postgres Connection Pool 85% capacity threshold' },
    { id: 3, time: '12:04:12', level: 'ERROR', msg: 'Stripe Webhook signature validation failed for payload_9421' },
    { id: 4, time: '12:04:18', level: 'INFO', msg: 'Redis BullMQ job #8892 processed in 14ms' },
    { id: 5, time: '12:04:25', level: 'FATAL', msg: 'Unhandled Promise Rejection: AWS S3 ETIMEDOUT uploading backup' },
    { id: 6, time: '12:04:30', level: 'INFO', msg: 'JWT auth refreshed for user usr_4492' }
  ]);

  const filteredLogs = logEntries.filter((l) => {
    if (logFilter !== 'ALL' && l.level !== logFilter) return false;
    if (logSearch && !l.msg.toLowerCase().includes(logSearch.toLowerCase())) return false;
    return true;
  });

  const handleDownloadLogReport = () => {
    const report = `# DEVLOGIC INCIDENT & LOG ANALYSIS REPORT
Date: ${new Date().toISOString()}
Filtered Count: ${filteredLogs.length} Events

## LOG DETAILS
${filteredLogs.map((l) => `[${l.time}] [${l.level}] ${l.msg}`).join('\n')}
`;
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Devlogic_Log_Analysis.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-mono text-xs mb-3 shadow-2xs">
            <FlaskConical className="w-3.5 h-3.5 text-cyan-600" />
            <span>DEVLOGIC LAB // INTERACTIVE UTILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Try Our Working System Prototypes.
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Test live client-side engineering tools developed by Devlogic architects—fully functional in your browser.
          </p>
        </div>

        {/* Experiment Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {LAB_EXPERIMENTS.map((exp) => {
            const isSelected = exp.id === selectedExpId;
            return (
              <div
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-cyan-600 shadow-sm ring-1 ring-cyan-500/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-50 text-cyan-800 border border-cyan-200">
                      {exp.version}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-700 font-semibold">
                      {exp.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {exp.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-500">{exp.category}</span>
                  <span className={isSelected ? 'text-cyan-700 font-bold' : 'text-slate-500'}>
                    {isSelected ? 'ACTIVE TOOL' : 'RUN TOOL →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE WORKBENCH PANEL */}
        <div className="p-6 sm:p-8 rounded-2xl dark-product-surface shadow-md border border-slate-800 relative">
          {/* TOOL 1: PAYLOAD NORMALIZER & CODE GENERATOR */}
          {selectedExpId === 'exp-01' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-cyan-400" />
                    <span>Neural Webhook Payload Normalizer & Code Generator</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Paste raw JSON or load presets to sanitize schema, generate TypeScript interfaces, and SQL tables.
                  </p>
                </div>

                {/* Presets */}
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-slate-500 text-[11px]">PRESETS:</span>
                  <button onClick={() => loadJsonPreset('stripe')} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800">Stripe</button>
                  <button onClick={() => loadJsonPreset('github')} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800">GitHub</button>
                  <button onClick={() => loadJsonPreset('shopify')} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800">Shopify</button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Input Editor */}
                <div>
                  <label className="font-mono text-xs text-slate-400 block mb-2">
                    Raw Payload Input (JSON):
                  </label>
                  <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    rows={12}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 focus:outline-none focus:border-cyan-500"
                  ></textarea>
                </div>

                {/* Generated Output */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 font-mono text-xs">
                      <button
                        onClick={() => setActiveTabExp1('normalized')}
                        className={`px-3 py-1 rounded-t-lg border-t border-x ${activeTabExp1 === 'normalized' ? 'bg-slate-900 text-cyan-400 border-slate-800' : 'text-slate-500 border-transparent'}`}
                      >
                        Normalized JSON
                      </button>
                      <button
                        onClick={() => setActiveTabExp1('typescript')}
                        className={`px-3 py-1 rounded-t-lg border-t border-x ${activeTabExp1 === 'typescript' ? 'bg-slate-900 text-cyan-400 border-slate-800' : 'text-slate-500 border-transparent'}`}
                      >
                        TypeScript Interface
                      </button>
                      <button
                        onClick={() => setActiveTabExp1('sql')}
                        className={`px-3 py-1 rounded-t-lg border-t border-x ${activeTabExp1 === 'sql' ? 'bg-slate-900 text-cyan-400 border-slate-800' : 'text-slate-500 border-transparent'}`}
                      >
                        SQL DDL
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        let textToCopy = '';
                        if (activeTabExp1 === 'normalized') textToCopy = JSON.stringify(parsedJson, null, 2);
                        else if (activeTabExp1 === 'typescript') textToCopy = generateTsInterface(parsedJson);
                        else textToCopy = generateSqlDdl(parsedJson);
                        navigator.clipboard.writeText(textToCopy);
                        setCopiedExp1(true);
                        setTimeout(() => setCopiedExp1(false), 2000);
                      }}
                      className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1"
                    >
                      {copiedExp1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedExp1 ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs min-h-[250px] overflow-x-auto text-emerald-400">
                    {parsedJson ? (
                      <pre>
                        {activeTabExp1 === 'normalized' && JSON.stringify({ ...parsedJson, devlogicNormalizedStatus: 'NORMALIZED_ZERO_ERROR', devlogicIngestedAt: new Date().toISOString() }, null, 2)}
                        {activeTabExp1 === 'typescript' && generateTsInterface(parsedJson)}
                        {activeTabExp1 === 'sql' && generateSqlDdl(parsedJson)}
                      </pre>
                    ) : (
                      <span className="text-rose-400">// INVALID JSON PARSE ERROR: Check syntax above</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 2: VISUAL AUTOMATION RULE EXECUTOR */}
          {selectedExpId === 'exp-02' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-400" />
                  <span>Visual Workflow Automation Executor</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Construct event-driven automation rules and test execution pipelines in real time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Trigger */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-[11px] text-cyan-400 block font-bold">1. SYSTEM TRIGGER</span>
                  <select
                    value={wfTrigger}
                    onChange={(e) => setWfTrigger(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option>Webhook Event Received</option>
                    <option>Cron Schedule (Every Hour)</option>
                    <option>Database Record Inserted</option>
                    <option>Form Submission Trigger</option>
                  </select>
                </div>

                {/* Filter */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-[11px] text-indigo-400 block font-bold">2. CONDITION RULE</span>
                  <select
                    value={wfCondition}
                    onChange={(e) => setWfCondition(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option>Amount &gt;= $100</option>
                    <option>User Tier == 'Enterprise'</option>
                    <option>Status == 'Pending Review'</option>
                    <option>Always True (No Filter)</option>
                  </select>
                </div>

                {/* Action */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-[11px] text-emerald-400 block font-bold">3. DISPATCH ACTION</span>
                  <select
                    value={wfAction}
                    onChange={(e) => setWfAction(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option>Send Slack Alert & Create CRM Task</option>
                    <option>Generate PDF Invoice & Email Client</option>
                    <option>Trigger AWS Lambda Microservice</option>
                    <option>Update Postgres Record Status</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleRunWorkflow}
                  disabled={isWfRunning}
                  className="px-8 py-3 rounded-xl font-bold text-xs text-slate-950 bg-indigo-400 hover:bg-indigo-300 shadow-lg flex items-center gap-2"
                >
                  <Play className={`w-4 h-4 fill-slate-950 ${isWfRunning ? 'animate-spin' : ''}`} />
                  <span>{isWfRunning ? 'EXECUTING WORKFLOW...' : 'TEST PIPELINE EXECUTION'}</span>
                </button>
              </div>

              {/* Console Output */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 min-h-[140px]">
                <span className="text-slate-500 text-[10px] uppercase font-bold block mb-2">// REAL-TIME RUNTIME LOG STREAM:</span>
                {wfLogs.length > 0 ? (
                  wfLogs.map((log, i) => (
                    <div key={i} className="py-0.5 text-emerald-400">{log}</div>
                  ))
                ) : (
                  <span className="text-slate-600">Click 'TEST PIPELINE EXECUTION' to simulate event handling...</span>
                )}
              </div>
            </div>
          )}

          {/* TOOL 3: TOPOLOGY CANVAS VISUALIZER */}
          {selectedExpId === 'exp-03' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-emerald-400" />
                    <span>System Topology & Canvas Packet Visualizer</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Interactive canvas demonstrating client-side packet flow across microservice architecture.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setTrafficSpike(!trafficSpike);
                      setSimLatency(trafficSpike ? 4 : 28);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all ${
                      trafficSpike
                        ? 'bg-rose-950 text-rose-300 border-rose-800'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {trafficSpike ? '⚡ HIGH LOAD SPIKE ACTIVE' : 'SIMULATE HIGH TRAFFIC'}
                  </button>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
                <canvas
                  ref={canvasRef}
                  width={560}
                  height={180}
                  className="max-w-full bg-slate-950"
                ></canvas>

                <div className="w-full flex items-center justify-between pt-4 border-t border-slate-800 mt-4 font-mono text-xs">
                  <span className="text-slate-400">Node Latency: <strong className={trafficSpike ? 'text-rose-400' : 'text-emerald-400'}>{simLatency}ms</strong></span>
                  <span className="text-slate-400">Uptime Protocol: <strong className="text-cyan-400">99.99% TLS 1.3</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 4: LOG ANOMALY ANALYZER */}
          {selectedExpId === 'exp-04' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                    <span>Real-Time Log Anomaly & Regex Filter</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Filter live server logs by severity, run keyword queries, and export incident summaries.
                  </p>
                </div>

                <button
                  onClick={handleDownloadLogReport}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-cyan-400 bg-slate-900 border border-slate-800 hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Report (.md)</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="text"
                  placeholder="Filter logs by keyword (e.g. Postgres, Stripe, JWT)..."
                  value={logSearch}
                  onChange={(e) => setLogSearch(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
                />

                <div className="flex items-center gap-1.5 font-mono text-xs shrink-0">
                  {['ALL', 'ERROR', 'WARN', 'INFO'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setLogFilter(lvl as any)}
                      className={`px-3 py-1.5 rounded-lg border ${logFilter === lvl ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400' : 'bg-slate-950 text-slate-400 border-slate-800'}`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-2 max-h-[260px] overflow-y-auto">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <div key={log.id} className="flex items-start gap-3 p-2 rounded bg-slate-900/60 border border-slate-800/80">
                      <span className="text-slate-500 shrink-0">{log.time}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold shrink-0 ${
                        log.level === 'FATAL' || log.level === 'ERROR'
                          ? 'bg-rose-950 text-rose-300 border border-rose-800'
                          : log.level === 'WARN'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                      }`}>
                        {log.level}
                      </span>
                      <span className="text-slate-200">{log.msg}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-slate-500">// No logs matching current filter criteria</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
