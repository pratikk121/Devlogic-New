import React, { useState, useMemo } from 'react';
import { 
  Activity, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  Server, 
  ShieldCheck, 
  Terminal, 
  Search, 
  ArrowUpRight, 
  Database, 
  BarChart3, 
  RefreshCw, 
  Zap,
  Clock,
  Wrench
} from 'lucide-react';

interface EnterpriseProductPreviewProps {
  onOpenProjectInquiry: () => void;
}

export const EnterpriseProductPreview: React.FC<EnterpriseProductPreviewProps> = ({
  onOpenProjectInquiry
}) => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'drivers' | 'routes' | 'health'>('telemetry');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'IDLE' | 'MAINTENANCE'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const tabs = [
    { id: 'telemetry', label: 'Live Telemetry', icon: Activity },
    { id: 'drivers', label: 'Drivers Logs', icon: Truck },
    { id: 'routes', label: 'Route Optimization', icon: MapPin },
    { id: 'health', label: 'System Health', icon: Server }
  ] as const;

  // Fleet Telemetry Data (India Logistics Corridors)
  const fleetData = [
    { id: 'TRK-901', driver: 'Rahul Sharma', location: 'Mumbai, MH (NH 48 Hub)', speed: '68 km/h', status: 'ACTIVE', fuel: '84%', temp: '28°C', eta: '14:30 IST' },
    { id: 'TRK-904', driver: 'Elena D\'Souza', location: 'Bengaluru, KA (Electronic City)', speed: '52 km/h', status: 'ACTIVE', fuel: '92%', temp: '24°C', eta: '16:15 IST' },
    { id: 'TRK-882', driver: 'Vikram Singh', location: 'Delhi NCR (Terminal 4 Depot)', speed: '0 km/h', status: 'IDLE', fuel: '45%', temp: '32°C', eta: 'At Depot' },
    { id: 'TRK-740', driver: 'Priya Nair', location: 'Pune, MH (Expressway Hub)', speed: '0 km/h', status: 'MAINTENANCE', fuel: '18%', temp: '26°C', eta: 'In Service' },
    { id: 'TRK-915', driver: 'Amit Patel', location: 'Hyderabad, TS (ORR Corridor)', speed: '72 km/h', status: 'ACTIVE', fuel: '76%', temp: '29°C', eta: '15:45 IST' }
  ];

  const filteredFleet = useMemo(() => {
    return fleetData.filter((item) => {
      if (statusFilter !== 'ALL' && item.status !== statusFilter) return false;
      if (
        searchQuery &&
        !item.id.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.driver.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.location.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [fleetData, statusFilter, searchQuery]);

  const handleRefreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="dark-product-surface rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans text-slate-100 transition-all duration-300">
      
      {/* Top Application Header Bar */}
      <div className="bg-slate-950/90 px-4 sm:px-6 py-3.5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>

          <div className="h-4 w-px bg-slate-800 mx-1"></div>

          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span className="font-mono text-xs font-bold text-white tracking-wide">
              DEVLOGIC TELEMETRY ENGINE
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800/80 font-semibold">
              v2.4.0 ONLINE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <Server className="w-3.5 h-3.5 text-blue-400" />
            <span>MUMBAI-AP-SOUTH1 CLUSTER</span>
          </div>

          <button
            onClick={handleRefreshData}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors apple-press"
            title="Refresh Fleet Data"
            aria-label="Refresh Telemetry Fleet Data"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-blue-400' : ''}`} />
          </button>

          <button
            onClick={onOpenProjectInquiry}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] transition-colors flex items-center gap-1 apple-press shadow-xs"
          >
            <span>Request Demo Build</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Navigation & Controls Bar */}
      <div className="bg-slate-900/80 px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 text-xs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all duration-200 apple-press ${
                activeTab === tab.id
                  ? 'bg-slate-800 text-white border border-slate-700 shadow-xs font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
              }`}
            >
              <tab.icon className={`w-3.5 h-3.5 ${activeTab === tab.id ? 'text-blue-400' : ''}`} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Global Search and Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 min-w-[130px]">
            <Search className="w-3 h-3 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter fleet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 sm:py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-1 text-xs bg-slate-950 border border-slate-800 rounded-lg p-1">
            {(['ALL', 'ACTIVE', 'IDLE', 'MAINTENANCE'] as const).map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStatusFilter(st)}
                className={`flex-1 sm:flex-none text-center px-2 py-1 sm:py-0.5 rounded-md text-[10px] font-bold transition-all apple-press ${
                  statusFilter === st
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Dashboard Content Workspace */}
      <div className="p-4 sm:p-6 space-y-6">

        {/* Metric KPI Cards Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
              <span>Active Vehicles</span>
              <Truck className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">42 / 45</div>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3 h-3" /> 93.3% Fleet Utilization
            </span>
          </div>

          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
              <span>Telemetry Ingestion</span>
              <Activity className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">1,280 ops/s</div>
            <span className="text-[10px] text-blue-400 font-mono flex items-center gap-1 mt-1">
              <Zap className="w-3 h-3" /> 4ms WS Latency
            </span>
          </div>

          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
              <span>Route Fuel Saved</span>
              <BarChart3 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">18.4%</div>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3 h-3" /> Optimal Route Engine
            </span>
          </div>

          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
              <span>Database Sync</span>
              <Database className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">PostgreSQL</div>
            <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 mt-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> ACID Compliant
            </span>
          </div>
        </div>

        {/* Tab 1: Telemetry Data Table View */}
        {activeTab === 'telemetry' && (
          <div className="bg-slate-950/90 rounded-2xl border border-slate-800/90 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between bg-slate-900/60 font-mono text-xs">
              <span className="font-bold text-slate-300">LIVE GPS TELEMETRY STREAM ({filteredFleet.length} VEHICLES)</span>
              <span className="text-slate-500 text-[11px]">UPDATED REAL-TIME VIA WEBSOCKETS</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-slate-300">
                <caption className="sr-only">Live GPS Fleet Telemetry Stream for Active Indian Transport Corridors</caption>
                <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Unit ID</th>
                    <th className="px-4 py-3 font-semibold">Assigned Driver</th>
                    <th className="px-4 py-3 font-semibold">Current Location</th>
                    <th className="px-4 py-3 font-semibold">Speed</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Fuel Level</th>
                    <th className="px-4 py-3 font-semibold">Target ETA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredFleet.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="px-4 py-3 font-bold text-blue-400">{row.id}</td>
                      <td className="px-4 py-3 text-white font-medium">{row.driver}</td>
                      <td className="px-4 py-3 text-slate-300 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{row.location}</span>
                      </td>
                      <td className="px-4 py-3 text-slate-200">{row.speed}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                          row.status === 'ACTIVE'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/80'
                            : row.status === 'IDLE'
                            ? 'bg-amber-950 text-amber-400 border border-amber-800/80'
                            : 'bg-rose-950 text-rose-400 border border-rose-800/80'
                        }`}>
                          {row.status === 'ACTIVE' && (
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" aria-hidden="true" />
                          )}
                          {row.status === 'IDLE' && (
                            <Clock className="w-2.5 h-2.5 text-amber-400 shrink-0" aria-hidden="true" />
                          )}
                          {row.status === 'MAINTENANCE' && (
                            <Wrench className="w-2.5 h-2.5 text-rose-400 shrink-0" aria-hidden="true" />
                          )}
                          <span>{row.status}</span>
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-blue-400 h-full rounded-full transition-all duration-300"
                              style={{ width: row.fuel }}
                            ></div>
                          </div>
                          <span className="text-[11px] text-slate-400">{row.fuel}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-400">{row.eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Driver Shift Logs */}
        {activeTab === 'drivers' && (
          <div className="bg-slate-950/90 rounded-2xl border border-slate-800 p-5 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-bold text-white">DRIVER COMPLIANCE & SHIFT LOGS</span>
              <span className="text-emerald-400 text-[11px]">HOS COMPLIANT</span>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Rahul Sharma', shift: '06:00 - 16:00 IST', driveTime: '6h 12m', restRemaining: '3h 48m', status: 'ON ROUTE' },
                { name: 'Elena D\'Souza', shift: '07:00 - 17:00 IST', driveTime: '5h 45m', restRemaining: '4h 15m', status: 'ON ROUTE' },
                { name: 'Vikram Singh', shift: '08:00 - 18:00 IST', driveTime: '4h 20m', restRemaining: '5h 40m', status: 'DEPOT REST' }
              ].map((d, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{d.name}</h4>
                    <span className="text-slate-400 text-[11px]">Shift: {d.shift}</span>
                  </div>

                  <div className="flex items-center gap-6 text-slate-300">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Drive Time</span>
                      <span className="font-bold text-blue-400">{d.driveTime}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Rest Budget</span>
                      <span className="font-bold text-emerald-400">{d.restRemaining}</span>
                    </div>
                    <span className="px-2 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-bold text-[10px]">
                      {d.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Route Efficiency */}
        {activeTab === 'routes' && (
          <div className="bg-slate-950/90 rounded-2xl border border-slate-800 p-5 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-bold text-white">ROUTE OPTIMIZATION & GEOSHARDING</span>
              <span className="text-blue-400 text-[11px]">ALGORITHM: DIJKSTRA + TRAFFIC API</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-blue-400 font-bold block mb-1">Route #104: Mumbai → Pune</span>
                <p className="text-slate-400 text-[11px] mb-3">Distance: 148 km · Avg Speed: 74 km/h · ETA Savings: -22 mins</p>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div className="bg-emerald-400 h-full w-[88%] rounded-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-blue-400 font-bold block mb-1">Route #208: Bengaluru → Hyderabad</span>
                <p className="text-slate-400 text-[11px] mb-3">Distance: 569 km · Avg Speed: 82 km/h · ETA Savings: -45 mins</p>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div className="bg-blue-400 h-full w-[92%] rounded-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Cluster Health */}
        {activeTab === 'health' && (
          <div className="bg-slate-950/90 rounded-2xl border border-slate-800 p-5 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-bold text-white">CONTAINER & INFRASTRUCTURE LOGS</span>
              <span className="text-emerald-400 text-[11px]">99.99% UPTIME GUARANTEE</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-emerald-400">
                <span>[10:14:02] WebSocket Gateway: 1,280 active connections synchronized.</span>
                <span className="text-slate-500">2ms</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-blue-400">
                <span>[10:14:00] PostgreSQL Connection Pool: 12/50 connections active (HEALTHY).</span>
                <span className="text-slate-500">1ms</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-slate-300">
                <span>[10:13:58] Redis BullMQ Queue: 0 pending background jobs.</span>
                <span className="text-slate-500">0ms</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Status Footer Strip */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE SYSTEM SYNC</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">STRICT TYPESAFE CODEBASE</span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-slate-500">Architecture:</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-bold">
              React 18 + Node.js + PostgreSQL
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
