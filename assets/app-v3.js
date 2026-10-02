(()=>{
const DB = Object.assign(Object.create(null), Object.fromEntries(DATA.characters.map(c => [c.id, c])));
const TEAM = Object.assign(Object.create(null), Object.fromEntries(DATA.teams.map(t => [t.id, t])));
const KEY = new URLSearchParams(location.search).get('preview') === '1' ? 'wavebook-preview-v3' : 'wavebook-progress-v2';
const TABS = ['build', 'teams', 'rotation', 'progress', 'sources'];
const NAMES = { overview: 'Overview', roster: 'Resonators', teams: 'Team planner', echoes: 'Echo planner', rotation: 'Rotation lab', compare: 'Compare builds', planner: 'Upgrade planner', reference: 'Guide & sources' };
const NAV = [['overview', 'grid'], ['roster', 'users'], ['teams', 'layers'], ['echoes', 'diamond'], ['rotation', 'play'], ['compare', 'columns'], ['planner', 'check'], ['reference', 'book']];
const statLabel = n => n === '' || n == null ? 'Not entered' : String(n);
const nameOf = id => DB[id]?.short || DATA.outside[id] || id;
const fullName = id => DB[id]?.name || DATA.outside[id] || id;
const initials = name => name === 'Yangyang: Xuanling' ? 'YX' : name.split(/\s+/).map(s => s[0]).join('').slice(0, 2).toUpperCase();
const num = v => Number.isFinite(Number(v)) ? Number(v) : 0;
const targetER = p => p.er[0] === p.er[1] ? `${p.er[0]}%` : `${p.er[0]}–${p.er[1]}%`;
const shortTalent = s => s.replace('Resonance ', '').replace(' Circuit', '').replace(' Skill', '');
const setsText = p => p.sets.map(s => `${s.pieces}pc ${s.name}`).join(' + ');
const currentPreset = (c, store) => c.presets.find(p => p.id === store.profiles[c.id]?.preset) || c.presets[0];
const ck = (p, item) => ['inherents', 'weapon'].includes(item.id) ? item.id : `${p.id}:${item.id}`;
const completion = (c, store) => { const p = currentPreset(c, store), checks = store.profiles[c.id].checks; return c.checks.filter(x => checks[ck(p, x)]).length; };
const nextCheck = (c, store) => upgradeAction(c, store);
function makeDefault() {
    return { schemaVersion: 2, theme: 'dark', favorites: [...DATA.focus], queue: ['jingran', 'lucy', 'iuno', 'rebecca', 'shorekeeper'], squads: [...DATA.defaultSquads], customSquads: [null, null, null, null], lastBackup: '', compare: ['iuno', 'chisa', 'lynae'], profiles: Object.fromEntries(DATA.characters.map(c => [c.id, { owned: c.id === 'lucy' ? 'owned' : 'unspecified', sequence: c.id === 'lucy' ? '2' : '', targetSequence: c.id === 'iuno' ? '2' : '', signature: 'unspecified', level: '', weaponLevel: '', preset: c.presets[0].id, notes: '', checks: {}, talentLevels: {}, statsByPreset: {}, statsPreset: c.presets[0].id, stats: { er: '', extraER: '', crit: '', extraCrit: '', critDmg: '', hp: '', atk: '', def: '' } }])) };
}
function cleanImport(raw) {
    if (!raw || raw.schemaVersion !== 2 || !raw.profiles || typeof raw.profiles !== 'object' || Array.isArray(raw.profiles))
        throw new Error('This is not a Wavebook version-2 backup.');
    const clean = makeDefault();
    const txt = (v, max = 5000) => typeof v === 'string' ? v.slice(0, max) : '';
    const numberText = (v, min, max) => v !== '' && v != null && Number.isFinite(Number(v)) && Number(v) >= min && Number(v) <= max ? String(v) : '';
    clean.theme = raw.theme === 'light' ? 'light' : 'dark';
    for (const k of ['favorites', 'queue', 'compare'])
        if (Array.isArray(raw[k]))
            clean[k] = [...new Set(raw[k].filter(x => typeof x === 'string' && DB[x]))].slice(0, k === 'compare' ? 3 : 18);
    if (Array.isArray(raw.squads))
        clean.squads = Array.from({ length: 4 }, (_, i) => TEAM[raw.squads[i]] ? raw.squads[i] : '');
    if (Array.isArray(raw.customSquads)) clean.customSquads = Array.from({length: 4}, (_, i) => Array.isArray(raw.customSquads[i]) ? Array.from({length: 3}, (_, j) => { const id = raw.customSquads[i][j]; return typeof id === 'string' && (DB[id] || Object.hasOwn(DATA.outside,id)) ? id : ''; }) : null);
    clean.lastBackup = typeof raw.lastBackup === 'string' && !Number.isNaN(Date.parse(raw.lastBackup)) ? raw.lastBackup : '';
    for (const c of DATA.characters) {
        const v = raw.profiles[c.id];
        if (!v || typeof v !== 'object')
            continue;
        const p = clean.profiles[c.id];
        p.owned = ['owned', 'planned', 'unspecified'].includes(v.owned) ? v.owned : 'unspecified';
        p.sequence = numberText(v.sequence, 0, 6);
        p.targetSequence = numberText(v.targetSequence, 0, 6);
        p.signature = ['owned', 'not-owned', 'unspecified'].includes(v.signature) ? v.signature : 'unspecified';
        p.level = numberText(v.level, 1, 90);
        p.weaponLevel = numberText(v.weaponLevel, 1, 90);
        p.notes = txt(v.notes);
        p.preset = c.presets.some(q => q.id === v.preset) ? v.preset : c.presets[0].id;
        for (const cp of c.presets)
            for (const check of c.checks) {
                const key = ck(cp, check);
                if (v.checks && typeof v.checks[key] === 'boolean')
                    p.checks[key] = v.checks[key];
            }
        for (const talent of c.talents)
            p.talentLevels[talent] = numberText(v.talentLevels?.[talent], 1, 10);
        p.statsPreset = c.presets.some(q => q.id === v.statsPreset) ? v.statsPreset : p.preset;
        for (const field of Object.keys(p.stats))
            p.stats[field] = numberText(v.stats?.[field], 0, field === 'hp' ? 200000 : ['atk','def'].includes(field) ? 20000 : field === 'crit' ? 100 : 1000);
        for (const preset of c.presets) if(v.statsByPreset && v.statsByPreset[preset.id] && typeof v.statsByPreset[preset.id] === 'object') p.statsByPreset[preset.id] = Object.fromEntries(Object.keys(p.stats).map(field => [field, numberText(v.statsByPreset[preset.id][field], 0, field === 'hp' ? 200000 : ['atk','def'].includes(field) ? 20000 : field === 'crit' ? 100 : 1000)]));
        p.statsByPreset[p.statsPreset] = {...p.stats};
        p.stats = {...(p.statsByPreset[p.preset] || Object.fromEntries(Object.keys(p.stats).map(k=>[k,''])))};
        p.statsPreset = p.preset;
    }
    return clean;
}
function load() { try {
    const x = localStorage.getItem(KEY);
    return x ? cleanImport(JSON.parse(x)) : makeDefault();
}
catch {
    try { const old = localStorage.getItem(KEY); if (old) localStorage.setItem(KEY + '-recovery', old); } catch (_) {}
    return makeDefault();
} }
function getRoute() { const parts = location.hash.replace(/^#/, '').split('/'); if (parts[0] === 'character' && DB[parts[1]])
    return { view: 'character', character: parts[1], tab: TABS.includes(parts[2]) ? parts[2] : 'build' }; return { view: NAMES[parts[0]] ? parts[0] : 'overview', character: 'iuno', tab: 'build' }; }
function Icon({ name, size = 20, ...props }) {
    const paths = { grid: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z', users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M16 3a4 4 0 0 1 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0', layers: 'm12 2 10 6-10 6L2 8z M2 12l10 6 10-6 M2 16l10 6 10-6', diamond: 'm12 2 10 10-10 10L2 12z M2 12h20 M12 2l4 10-4 10-4-10z', play: 'm8 5 11 7-11 7z', columns: 'M3 3h18v18H3z M12 3v18', check: 'm4 12 5 5L20 6', book: 'M12 21c-3-2-7-2-10-2V3c4 0 7 0 10 2 3-2 6-2 10-2v16c-3 0-7 0-10 2z M12 5v16', search: 'M21 21l-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0', arrow: 'M5 12h14 M13 6l6 6-6 6', back: 'M19 12H5 M11 6l-6 6 6 6', star: 'm12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z', download: 'M12 3v12 m-5-5 5 5 5-5 M5 17v4h14v-4', upload: 'M12 16V4 m-5 5 5-5 5 5 M5 17v4h14v-4', sun: 'M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M17.5 17.5 19 19 M5 19l1.5-1.5 M17.5 6.5 19 5 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0', moon: 'M20.5 13.2A8.5 8.5 0 0 1 10.8 3 9 9 0 1 0 20.5 13.2z', close: 'M6 6l12 12 M18 6 6 18', menu: 'M3 6h18 M3 12h18 M3 18h18', link: 'M10 13a5 5 0 0 0 7 .5l4-4a5 5 0 0 0-7-7l-2 2 M14 11a5 5 0 0 0-7-.5l-4 4a5 5 0 0 0 7 7l2-2', info: 'M12 11v6 M12 7v.01 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0', alert: 'm12 3 10 18H2z M12 9v5 M12 17v.01', chevron: 'm9 5 7 7-7 7', up: 'm6 15 6-6 6 6', down: 'm6 9 6 6 6-6', copy: 'M9 9h12v12H9z M15 9V3H3v12h6', trash: 'M3 6h18 M9 6V3h6v3 M5 6l1 15h12l1-15 M10 10v7 M14 10v7', print: 'M6 9V2h12v7 M6 17H3V9h18v8h-3 M6 14h12v8H6z', save: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2z M7 3v6h10V3 M7 21v-7h10v7', bolt: 'm13 2-9 12h7l-1 8 10-12h-7z', reset: 'M3 11a9 9 0 1 1 2.5 7 M3 3v8h8', plus: 'M12 5v14 M5 12h14' };
    return React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.65", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...props },
        React.createElement("path", { d: paths[name] || paths.diamond }));
}
const Pill = ({ children, tone = '', ...props }) => React.createElement("span", { className: `pill ${tone}`, ...props }, children);
const Avatar = ({ id, size = 'md' }) => { const c = DB[id]; return React.createElement("span", { className: `avatar ${size} ${c?.element.toLowerCase() || 'external'}`, "aria-hidden": "true" },
    React.createElement("span", null, initials(fullName(id)))); };
const Empty = ({ title, children }) => React.createElement("div", { className: "empty" },
    React.createElement(Icon, { name: "search", size: 28 }),
    React.createElement("h3", null, title),
    React.createElement("p", null, children));
const SourceLink = ({ url, children }) => React.createElement("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "source-link" },
    children,
    React.createElement(Icon, { name: "link", size: 13 }));
const Callout = ({ title, children, tone = 'info' }) => React.createElement("div", { className: `callout ${tone}` },
    React.createElement(Icon, { name: tone === 'warn' ? 'alert' : 'info', size: 18 }),
    React.createElement("div", null,
        title && React.createElement("strong", null, title),
        React.createElement("p", null, children)));
const Field = ({ label, children, hint }) => React.createElement("label", { className: "field" },
    React.createElement("span", null, label),
    children,
    hint && React.createElement("small", null, hint));
const CheckRow = ({ checked, onChange, label }) => React.createElement("label", { className: `check-row ${checked ? 'done' : ''}` },
    React.createElement("input", { type: "checkbox", checked: !!checked, onChange: onChange }),
    React.createElement("span", { className: "check-box" }, checked && React.createElement(Icon, { name: "check", size: 13 })),
    React.createElement("span", null, label));
class App extends React.Component {
    constructor(props) {
        super(props);
        this.mutate = fn => { this.setState(s => ({ store: fn(s.store) }), () => this.persist(this.state.store)); };
        this.updateProfile = (id, patch) => this.mutate(s => ({ ...s, profiles: { ...s.profiles, [id]: { ...s.profiles[id], ...patch } } }));
        this.setStat = (id, k, v) => { const p = this.state.store.profiles[id]; const stats = {...p.stats,[k]:v}; this.updateProfile(id, { statsPreset: p.preset, stats, statsByPreset: {...p.statsByPreset,[p.preset]:stats} }); };
        this.nav = (view, id = '', tab = 'build') => { location.hash = view === 'character' ? `character/${id}/${tab}` : view; this.setState({ menu: false, command: false }); window.scrollTo({ top: 0, behavior: 'instant' }); };
        this.notify = text => { clearTimeout(this.toastTimer); this.setState({ toast: text }); this.toastTimer = setTimeout(() => this.setState({ toast: '' }), 3800); };
        this.openCommand = () => { this.commandOrigin = document.activeElement; this.setState({ command: true, commandQuery: '' }, () => setTimeout(() => this.commandRef.current?.focus(), 20)); };
        this.favorite = id => this.mutate(s => ({ ...s, favorites: s.favorites.includes(id) ? s.favorites.filter(x => x !== id) : [...s.favorites, id] }));
        this.addQueue = id => { if (this.state.store.queue.includes(id)) {
            this.nav('planner');
            return;
        } this.mutate(s => ({ ...s, queue: [...s.queue, id] })); this.notify(`${nameOf(id)} added to your upgrade queue.`); };
        this.addCompare = id => { const xs = this.state.store.compare; if (xs.includes(id)) {
            this.nav('compare');
            return;
        } if (xs.length >= 3) {
            this.notify('Comparison holds three characters. Replace one in Compare builds.');
            this.nav('compare');
            return;
        } this.mutate(s => ({ ...s, compare: [...s.compare, id] })); this.nav('compare'); };
        this.progressToggle = (c, p, item) => { const a = this.state.store.profiles[c.id], key = ck(p, item); this.updateProfile(c.id, { checks: { ...a.checks, [key]: !a.checks[key] } }); };
        this.setPreset = (id, preset) => this.updateProfile(id, { preset });
        this.exportData = () => { const blob = new Blob([JSON.stringify({ ...this.state.store, exportedAt: new Date().toISOString(), guideSnapshot: DATA.snapshot }, null, 2)], { type: 'application/json' }); this.downloadBlob(blob, `wavebook-backup-${new Date().toISOString().slice(0, 10)}.json`); this.notify('Backup exported. Keep it to move progress between browsers.'); };
        this.downloadBlob = (blob, name) => { const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 60000); };
        this.importData = async (e) => { const f = e.target.files?.[0]; e.target.value = ''; if (!f)
            return; try {
            if (f.size > 2000000)
                throw new Error('Backup must be under 2 MB.');
            const store = cleanImport(JSON.parse(await f.text()));
            if (!window.confirm('Replace your local progress with this backup? Export the current progress first if you need to keep it.'))
                return;
            this.setState({ store });
            this.persist(store);
            document.documentElement.dataset.theme = store.theme;
            this.notify('Backup imported successfully.');
        }
        catch (err) {
            this.notify(`Import failed: ${err.message}`);
        } };
        this.reset = () => { if (!window.confirm('Reset all saved Wavebook progress on this browser? Your guide content is not affected.'))
            return; const store = makeDefault(); this.setState({ store }); this.persist(store); document.documentElement.dataset.theme = store.theme; this.notify('Progress reset to the starting guide.'); };
        this.toggleTheme = () => { const theme = this.state.store.theme === 'dark' ? 'light' : 'dark'; this.mutate(s => ({ ...s, theme })); document.documentElement.dataset.theme = theme; };
        this.report = (page = 1) => { const a = document.createElement('a'); a.href = './assets/original-report.pdf' + (page > 0 ? '#page=' + page : ''); if (page === 0) a.download = 'Wuthering_Waves_Roster_Guide_3_7.pdf'; else { a.target = '_blank'; a.rel = 'noopener'; } document.body.appendChild(a); a.click(); a.remove(); };
        this.copyBuild = async (c) => { const p = currentPreset(c, this.state.store), text = `${c.name} — ${p.label}\n${setsText(p)}\nActive Echo: ${p.echo} (${p.activeCost}-cost)\n${p.costs.join('–')}\n${p.mains.join(' / ')}\nER: ${targetER(p)}\nTalents: ${p.talents.join(' → ')}\n${p.note}\nSource: ${c.sources[0].url}`; try {
            if (!navigator.clipboard)
                throw new Error('no clipboard');
            await navigator.clipboard.writeText(text);
            this.notify('Build copied.');
        }
        catch {
            this.downloadBlob(new Blob([text], { type: 'text/plain' }), `${c.id}-build.txt`);
            this.notify('Browser clipboard unavailable. Saved a text build card instead.');
        } };
        this.filteredCharacters = () => { const { query, role, element, ownedOnly, store } = this.state, q = query.toLowerCase().trim(); return DATA.characters.filter(c => (role === 'All' || c.role === role || c.presets.some(p => p.role === role)) && (element === 'All' || c.element === element) && (!ownedOnly || store.profiles[c.id].owned === 'owned') && (!q || JSON.stringify(c).toLowerCase().includes(q))); };
        this.assignTeam = (slot, tid) => { this.mutate(s => { const squads = [...s.squads]; squads[slot] = tid; return { ...s, squads }; }); this.notify(`${TEAM[tid]?.name || 'Empty team'} assigned to slot ${slot + 1}.`); };
        this.nextStep = d => { const steps = this.rotationSteps(); this.setState(s => ({ step: Math.max(0, Math.min(steps.length - 1, s.step + d)) })); };
        this.moveQueue = (idx, delta) => this.mutate(s => { const q = [...s.queue], j = idx + delta; if (j < 0 || j >= q.length)
            return s; [q[idx], q[j]] = [q[j], q[idx]]; return { ...s, queue: q }; });
        this.state = { store: load(), ...getRoute(), menu: false, query: '', role: 'All', element: 'All', ownedOnly: false, command: false, commandQuery: '', toast: '', storageOK: true, step: 0, rotationId: 'jingran-core', echoQuery: '', echoFocus: false, teamFilter: '', teamQuery: '', referenceTab: 'guide' };
        this.fileRef = React.createRef();
        this.commandRef = React.createRef();
    }
    componentDidMount() { this.routeListener = () => this.setState({ ...getRoute(), menu: false }); this.keyListener = e => { const input = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName); if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openCommand();
    }
    else if (e.key === 'Escape') {
        this.setState({ command: false, menu: false });
    }
    else if (e.key === '/' && !input) {
        e.preventDefault();
        this.openCommand();
    }
    else if (this.state.view === 'rotation' && !input && !this.state.command) {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            this.nextStep(1);
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            this.nextStep(-1);
        }
    } }; window.addEventListener('hashchange', this.routeListener); window.addEventListener('keydown', this.keyListener); document.documentElement.dataset.theme = this.state.store.theme; this.persist(this.state.store); }
    componentWillUnmount() { window.removeEventListener('hashchange', this.routeListener); window.removeEventListener('keydown', this.keyListener); clearTimeout(this.toastTimer); }
    persist(store) { try {
        localStorage.setItem(KEY, JSON.stringify(store));
        if (!this.state.storageOK)
            this.setState({ storageOK: true });
    }
    catch {
        if (this.state.storageOK)
            this.setState({ storageOK: false });
    } }
    sourcesInline(c) { return React.createElement("div", { className: "source-strip" },
        React.createElement("button", { className: "text-button", onClick: () => this.report(c.page) },
            React.createElement(Icon, { name: "book", size: 14 }),
            " Report \u00B7 p. ",
            c.page),
        React.createElement(SourceLink, { url: c.sources[0].url }, "Build guide"),
        React.createElement("span", null,
            c.reviewed ? 'Selected details rechecked' : 'Imported report snapshot',
            " \u00B7 ",
            DATA.snapshot)); }
    memberButtons(ids) { return React.createElement("div", { className: "member-row" }, ids.map((id, i) => React.createElement(React.Fragment, { key: id + i },
        i > 0 && React.createElement("span", { className: "member-plus" }, "+"),
        React.createElement("button", { className: "member-chip", onClick: () => DB[id] ? this.nav('character', id) : this.notify(`${fullName(id)} is outside the 18-profile guide.`) },
            React.createElement(Avatar, { id: id, size: "xs" }),
            React.createElement("span", null, nameOf(id)),
            !DB[id] && React.createElement("small", null, "external"))))); }
    presetSelect(c, compact = false) { const p = currentPreset(c, this.state.store); return React.createElement(Field, { label: compact ? 'Preset' : 'Choose the job before the build' },
        React.createElement("select", { value: p.id, onChange: e => this.setPreset(c.id, e.target.value), "aria-label": `${c.name} build preset` }, c.presets.map(p => React.createElement("option", { key: p.id, value: p.id }, p.label)))); }
    charCard(c) { const { store } = this.state, p = currentPreset(c, store), record = store.profiles[c.id], done = completion(c, store); return React.createElement("article", { className: `character-card ${c.element.toLowerCase()}`, key: c.id },
        React.createElement("div", { className: "card-top" },
            React.createElement(Avatar, { id: c.id }),
            React.createElement("button", { className: `icon-button favorite ${store.favorites.includes(c.id) ? 'on' : ''}`, "aria-label": `${store.favorites.includes(c.id) ? 'Unpin' : 'Pin'} ${c.name}`, onClick: () => this.favorite(c.id) },
                React.createElement(Icon, { name: "star", size: 18 }))),
        React.createElement("button", { className: "card-title", onClick: () => this.nav('character', c.id) },
            React.createElement("h3", null, c.name),
            React.createElement(Icon, { name: "chevron", size: 16 })),
        React.createElement("p", { className: "card-subtitle" },
            c.element,
            " \u00B7 ",
            c.weapon),
        React.createElement("div", { className: "badge-row" },
            React.createElement(Pill, null, c.role),
            record.sequence !== '' && React.createElement(Pill, { tone: "accent" },
                "S",
                record.sequence,
                c.id === 'lucy' ? ' · yours' : ''),
            record.owned === 'planned' && React.createElement(Pill, null, "Planned")),
        React.createElement("div", { className: "card-build" },
            React.createElement("span", null, p.label),
            React.createElement("strong", null, p.sets[0].name),
            React.createElement("small", null,
                targetER(p),
                " ER \u00B7 ",
                c.scaling,
                " build")),
        React.createElement("div", { className: "progress-label" },
            React.createElement("span", null, "Build checklist"),
            React.createElement("span", null,
                done,
                "/",
                c.checks.length)),
        React.createElement("div", { className: "progress-track" },
            React.createElement("i", { style: { width: `${done / c.checks.length * 100}%` } }))); }
    overview() {
        const { store } = this.state;
        const done = DATA.characters.reduce((s, c) => s + completion(c, store), 0), all = DATA.characters.reduce((s, c) => s + c.checks.length, 0);
        return React.createElement("div", { className: "page-enter" },
            React.createElement("section", { className: "hero" },
                React.createElement("div", { className: "hero-copy" },
                    React.createElement("div", { className: "eyebrow" },
                        React.createElement("span", { className: "live-dot" }),
                        " YOUR ROSTER, CONNECTED"),
                    React.createElement("h1", null,
                        "Build a team.",
                        React.createElement("br", null),
                        React.createElement("span", null, "Not just a roster.")),
                    React.createElement("p", null, "One place for your Echo presets, talent priorities and the handoffs that make your teams work."),
                    React.createElement("div", { className: "button-row" },
                        React.createElement("button", { className: "button primary", onClick: () => this.nav('character', 'jingran') },
                            "Continue with Jingran ",
                            React.createElement(Icon, { name: "arrow", size: 16 })),
                        React.createElement("button", { className: "button subtle", onClick: () => this.nav('rotation') },
                            React.createElement(Icon, { name: "play", size: 16 }),
                            " Open rotation lab"))),
                React.createElement("div", { className: "hero-orbit", "aria-hidden": "true" },
                    React.createElement("div", { className: "orbit outer" }),
                    React.createElement("div", { className: "orbit inner" }),
                    React.createElement("div", { className: "orbit-core" },
                        React.createElement(Icon, { name: "diamond", size: 48 }),
                        React.createElement("span", null, "3.7")),
                    React.createElement("div", { className: "orbit-label top" }, "TEAMS"),
                    React.createElement("div", { className: "orbit-label bottom" }, "TALENTS \u00B7 ECHOES"))),
            React.createElement("div", { className: "stat-grid" },
                React.createElement("div", null,
                    React.createElement("span", null, "Resonator profiles"),
                    React.createElement("strong", null, "18"),
                    React.createElement("small", null, "All characters from your report")),
                React.createElement("div", null,
                    React.createElement("span", null, "Role-specific presets"),
                    React.createElement("strong", null, "29"),
                    React.createElement("small", null, "Builds change with the job")),
                React.createElement("div", null,
                    React.createElement("span", null, "Team templates"),
                    React.createElement("strong", null, "20"),
                    React.createElement("small", null, "With shared-character checks")),
                React.createElement("div", null,
                    React.createElement("span", null, "Your checklist progress"),
                    React.createElement("strong", null,
                        done,
                        React.createElement("em", null,
                            " / ",
                            all)),
                    React.createElement("small", null, "Based only on your saved checks"))),
            React.createElement("div", { className: "section-heading" },
                React.createElement("div", null,
                    React.createElement("div", { className: "eyebrow" }, "START HERE"),
                    React.createElement("h2", null, "Your focus")),
                React.createElement("button", { className: "text-button", onClick: () => this.nav('roster') },
                    "All resonators ",
                    React.createElement(Icon, { name: "arrow", size: 15 }))),
            React.createElement("div", { className: "focus-grid" },
                store.favorites.slice(0, 6).map(id => this.charCard(DB[id])),
                !store.favorites.length && React.createElement(Empty, { title: "Pin a focus character" }, "Use the star on any character card.")),
            React.createElement("div", { className: "two-col" },
                React.createElement("section", { className: "panel" },
                    React.createElement("div", { className: "section-heading tight" },
                        React.createElement("h2", null, "Next in your queue"),
                        React.createElement("button", { className: "text-button", onClick: () => this.nav('planner') },
                            "Manage ",
                            React.createElement(Icon, { name: "arrow", size: 14 }))),
                    store.queue.slice(0, 4).map((id, i) => React.createElement("button", { key: id, className: "queue-preview", onClick: () => this.nav('character', id, 'progress') },
                        React.createElement("span", { className: "index" },
                            "0",
                            i + 1),
                        React.createElement(Avatar, { id: id, size: "sm" }),
                        React.createElement("span", null,
                            React.createElement("strong", null, nameOf(id)),
                            React.createElement("small", null, nextCheck(DB[id], store))),
                        React.createElement(Icon, { name: "chevron", size: 15 }))),
                    !store.queue.length && React.createElement("p", { className: "muted" }, "Add a character from their profile to start an upgrade queue.")),
                React.createElement("section", { className: "panel" },
                    React.createElement("div", { className: "eyebrow" }, "ACCOUNT NOTES"),
                    React.createElement("h2", null, "Keep the assumptions visible."),
                    React.createElement("div", { className: "note-list" },
                        React.createElement("p", null,
                            React.createElement("b", null, "Lucy S2 is confirmed."),
                            " Other sequences and weapon ownership remain unspecified until you enter them."),
                        React.createElement("p", null,
                            React.createElement("b", null, Number(store.profiles.iuno.sequence) >= 2 ? `Iuno S${store.profiles.iuno.sequence} is recorded.` : 'Iuno S2 is a goal, not an equipped buff.'),
                            " The default Jingran lab still teaches an S0 route."),
                        React.createElement("p", null,
                            React.createElement("b", null, "Snapshot, not live sync."),
                            " The guide is based on your report with selected checks; your game account is not connected.")),
                    React.createElement("button", { className: "button subtle", onClick: () => this.nav('reference') },
                        "What changed from the PDF ",
                        React.createElement(Icon, { name: "arrow", size: 15 })))),
            React.createElement("section", { className: "panel compact-panel" },
                React.createElement("div", { className: "section-heading tight" },
                    React.createElement("div", null,
                        React.createElement("h2", null, "Four-team starting allocation"),
                        React.createElement("p", { className: "muted" }, "An allocation plan\u2014not four separate claims of universal best-in-slot.")),
                    React.createElement("button", { className: "button subtle", onClick: () => this.nav('teams') }, "Edit teams")),
                React.createElement("div", { className: "allocation-mini" }, store.squads.map((tid, i) => React.createElement("div", { key: i },
                    React.createElement("span", { className: "index" },
                        "0",
                        i + 1),
                    TEAM[tid] ? this.memberButtons(TEAM[tid].members) : React.createElement("span", { className: "muted" }, "Empty slot"))))));
    }
    roster() { const cs = this.filteredCharacters(); return React.createElement("div", { className: "page-enter" },
        React.createElement("div", { className: "page-heading" },
            React.createElement("div", { className: "eyebrow" }, "YOUR FIELD GUIDE"),
            React.createElement("h1", null, "Resonators"),
            React.createElement("p", null, "Search names, Echoes, weapons, mechanics or talent priorities.")),
        React.createElement("div", { className: "filter-bar" },
            React.createElement("div", { className: "search-field" },
                React.createElement(Icon, { name: "search" }),
                React.createElement("input", { type: "search", placeholder: "Try \u201CMoonlit\u201D, \u201CHeavy\u201D, or \u201CJingran\u201D\u2026", value: this.state.query, onInput: e => this.setState({ query: e.target.value }), "aria-label": "Search resonators" }),
                this.state.query && React.createElement("button", { className: "icon-button", "aria-label": "Clear search", onClick: () => this.setState({ query: '' }) },
                    React.createElement(Icon, { name: "close", size: 16 }))),
            React.createElement("select", { "aria-label": "Filter by element", value: this.state.element, onChange: e => this.setState({ element: e.target.value }) }, ['All', 'Aero', 'Electro', 'Fusion', 'Glacio', 'Havoc', 'Spectro'].map(e => React.createElement("option", { key: e }, e)))),
        React.createElement("div", { className: "filter-under" },
            React.createElement("div", { className: "segmented", "aria-label": "Role filter" }, ['All', 'Carry', 'Hybrid', 'Sustain'].map(role => React.createElement("button", { className: this.state.role === role ? 'active' : '', onClick: () => this.setState({ role }), key: role }, role))),
            React.createElement("label", { className: "inline-check" },
                React.createElement("input", { type: "checkbox", checked: this.state.ownedOnly, onChange: e => this.setState({ ownedOnly: e.target.checked }) }),
                " Owned only"),
            React.createElement("span", { className: "muted small" },
                cs.length,
                " of 18 profiles")),
        React.createElement("div", { className: "roster-grid" }, cs.map(c => this.charCard(c))),
        !cs.length && React.createElement(Empty, { title: "No matching resonators" }, "Clear a filter or search for a different name, set or mechanic. Unspecified ownership is excluded by \u201COwned only\u201D.")); }
    character() {
        const { character, tab, store } = this.state, c = DB[character], p = currentPreset(c, store), record = store.profiles[c.id];
        return React.createElement("div", { className: "page-enter" },
            React.createElement("div", { className: "profile-back" },
                React.createElement("button", { className: "text-button", onClick: () => this.nav('roster') },
                    React.createElement(Icon, { name: "back", size: 15 }),
                    " All resonators"),
                React.createElement("span", { className: "small muted" },
                    "Report p. ",
                    c.page,
                    " \u00B7 ",
                    DATA.snapshot)),
            React.createElement("section", { className: `profile-hero ${c.element.toLowerCase()}` },
                React.createElement(Avatar, { id: c.id, size: "xl" }),
                React.createElement("div", { className: "profile-title" },
                    React.createElement("div", { className: "eyebrow" },
                        c.element.toUpperCase(),
                        " / ",
                        c.weapon.toUpperCase()),
                    React.createElement("h1", null, c.name),
                    React.createElement("p", null, c.subtitle),
                    React.createElement("div", { className: "badge-row" },
                        React.createElement(Pill, { tone: "accent" }, record.sequence !== '' ? `S${record.sequence}${record.owned === 'owned' ? ' · owned' : ''}` : 'Sequence unspecified'),
                        React.createElement(Pill, null, record.signature === 'owned' ? 'Signature owned' : record.signature === 'not-owned' ? 'No signature recorded' : 'Weapon ownership unspecified'))),
                React.createElement("div", { className: "profile-actions" },
                    React.createElement("button", { className: `icon-button ${store.favorites.includes(c.id) ? 'on' : ''}`, "aria-label": "Toggle favorite", onClick: () => this.favorite(c.id) },
                        React.createElement(Icon, { name: "star" })),
                    React.createElement("button", { className: "button subtle", onClick: () => this.addCompare(c.id) },
                        React.createElement(Icon, { name: "columns", size: 16 }),
                        " Compare"),
                    React.createElement("button", { className: "button primary", onClick: () => this.addQueue(c.id) }, store.queue.includes(c.id) ? 'View queue' : 'Add to queue'))),
            React.createElement("div", { className: "profile-tabbar", role: "tablist", "aria-label": "Character sections" }, TABS.map(t => React.createElement("button", { role: "tab", "aria-selected": tab === t, className: tab === t ? 'active' : '', key: t, onClick: () => this.nav('character', c.id, t) }, ({ build: 'Build & talents', teams: 'Teams', rotation: 'Rotation', progress: 'Progress & notes', sources: 'Sources' })[t]))),
            tab === 'build' && this.buildTab(c, p),
            tab === 'teams' && this.teamsFor(c),
            tab === 'rotation' && this.rotationFor(c, p),
            tab === 'progress' && this.progressTab(c, p),
            tab === 'sources' && this.characterSources(c));
    }
    buildTab(c, p) {
        return React.createElement("div", null,
            React.createElement("div", { className: "preset-bar" },
                this.presetSelect(c),
                React.createElement("div", { className: "preset-description" },
                    React.createElement(Pill, null, p.role),
                    React.createElement("span", null, c.tagline)),
                React.createElement("button", { className: "icon-button", "aria-label": "Copy build summary", onClick: () => this.copyBuild(c) },
                    React.createElement(Icon, { name: "copy" }))),
            p.note && React.createElement(Callout, { title: "Use this preset when\u2026" }, p.note),
            React.createElement("div", { className: "build-layout" },
                React.createElement("section", { className: "panel" },
                    React.createElement("div", { className: "section-heading tight" },
                        React.createElement("h2", null, "Echo loadout"),
                        React.createElement(Pill, null, p.costs.join('–'))),
                    React.createElement("div", { className: "set-chips" }, p.sets.map(s => React.createElement("button", { className: "set-chip", key: s.name, onClick: () => { this.setState({ echoQuery: s.name }); this.nav('echoes'); } },
                        React.createElement("span", null, s.pieces),
                        React.createElement("strong", null, s.name),
                        React.createElement(Icon, { name: "arrow", size: 14 })))),
                    React.createElement("div", { className: "active-echo" },
                        React.createElement("div", { className: "echo-symbol" },
                            React.createElement(Icon, { name: "diamond", size: 25 })),
                        React.createElement("div", null,
                            React.createElement("span", null,
                                "ACTIVE ECHO \u00B7 ",
                                p.activeCost,
                                "-COST"),
                            React.createElement("strong", null, p.echo))),
                    React.createElement("div", { className: "echo-slots" }, p.costs.map((cost, i) => React.createElement("div", { className: "echo-slot", key: i },
                        React.createElement("span", { className: `cost cost-${cost}` },
                            cost,
                            React.createElement("small", null, "COST")),
                        React.createElement("div", null,
                            React.createElement("small", null,
                                "Piece ",
                                i + 1),
                            React.createElement("strong", null, p.mains[i]))))),
                    React.createElement("p", { className: "hint" },
                        "Costs describe five pieces, not a required active-slot order.",
                        p.activeCost === 3 ? ' The active three-cost does not replace the four-cost stat piece.' : ''),
                    React.createElement("div", { className: "divider" }),
                    React.createElement("h3", null, "Substat priority"),
                    React.createElement("p", { className: "substat-line" }, c.substats)),
                React.createElement("div", { className: "stack" },
                    React.createElement("section", { className: "panel" },
                        React.createElement("div", { className: "section-heading tight" },
                            React.createElement("h2", null, "Talent order"),
                            React.createElement("span", { className: "eyebrow" }, "FOR THIS ROLE")),
                        React.createElement("ol", { className: "talent-list" }, p.talents.map((t, i) => React.createElement("li", { key: t },
                            React.createElement("span", { className: `rank ${i < 2 ? 'important' : ''}` }, String(i + 1).padStart(2, '0')),
                            React.createElement("div", null,
                                React.createElement("strong", null, t),
                                i < 2 && React.createElement("small", null, "Priority investment"))))),
                        React.createElement("p", { className: "hint" }, c.talentNote),
                        React.createElement("button", { className: "text-button", onClick: () => this.nav('character', c.id, 'progress') },
                            "Track current levels ",
                            React.createElement(Icon, { name: "arrow", size: 14 }))),
                    React.createElement("section", { className: "panel stat-panel" },
                        React.createElement("div", null,
                            React.createElement("span", null, "ENERGY REGEN"),
                            React.createElement("strong", null, targetER(p))),
                        React.createElement("p", null, ['shorekeeper', 'mornye', 'suisui'].includes(c.id) ? 'Effective total / buff target. Check which bonuses are already included.' : 'Starting rotation estimate. Confirm with two full loops.'),
                        React.createElement("div", { className: "stat-mini" },
                            React.createElement("span", null, "Primary scaling"),
                            React.createElement("b", null, c.scaling),
                            React.createElement("span", null, "Damage / role emphasis"),
                            React.createElement("b", null, c.damage)),
                        React.createElement("button", { className: "text-button", onClick: () => this.nav('character', c.id, 'progress') },
                            "Check my stats ",
                            React.createElement(Icon, { name: "arrow", size: 14 }))))),
            React.createElement("div", { className: "two-col" },
                React.createElement("section", { className: "panel" },
                    React.createElement("div", { className: "eyebrow" }, "WEAPON OPTIONS"),
                    React.createElement("h2", null, c.signature || 'Variation'),
                    React.createElement("p", { className: "muted" }, c.signature ? 'Signature recommendation—not proof you own it.' : 'Practical weapon for her healing / Concerto role.'),
                    React.createElement("div", { className: "weapon-options" }, c.alternatives.map(x => React.createElement(Pill, { key: x }, x))),
                    React.createElement("p", { className: "hint" }, "Alternatives are examples, not an exhaustive ranking. Check passive compatibility and rotation changes.")),
                React.createElement("section", { className: "panel" },
                    React.createElement("div", { className: "eyebrow" }, "MUST KNOW"),
                    React.createElement("h2", null, "One mistake to avoid."),
                    React.createElement("p", null, c.must))),
            this.sourcesInline(c));
    }
    teamsFor(c) { const ts = DATA.teams.filter(t => t.members.includes(c.id)); return React.createElement("div", null,
        React.createElement(Callout, { title: "For your requested roster" },
            c.roster,
            " Team labels describe roles and constraints, not a universal damage ranking."),
        React.createElement("div", { className: "team-library" }, ts.map(t => this.teamCard(t))),
        this.sourcesInline(c)); }
    teamCard(t) { return React.createElement("article", { className: "panel team-card", key: t.id },
        React.createElement("div", { className: "section-heading tight" },
            React.createElement("h3", null, t.name),
            React.createElement(Pill, { tone: t.external ? 'warning' : '' }, t.tag)),
        this.memberButtons(t.members),
        React.createElement("p", null, t.note),
        Object.keys(t.modes).length > 0 && React.createElement("div", { className: "team-presets" }, Object.entries(t.modes).map(([id, p]) => React.createElement("span", { key: id },
            nameOf(id),
            " ",
            React.createElement("b", null, DB[id]?.presets.find(x => x.id === p)?.label || p)))),
        React.createElement("div", { className: "team-card-foot" },
            React.createElement("select", { "aria-label": `Add ${t.name} to team slot`, value: "", onChange: e => { if (e.target.value === '')
                    return; this.assignTeam(Number(e.target.value), t.id); } },
                React.createElement("option", { value: "" }, "Assign to a slot\u2026"),
                [0, 1, 2, 3].map(i => React.createElement("option", { value: i, key: i },
                    "Team ",
                    i + 1))),
            t.id === 'jingran-core' && React.createElement("button", { className: "text-button", onClick: () => this.nav('rotation') },
                React.createElement(Icon, { name: "play", size: 14 }),
                " Practice"))); }
    rotationFor(c, p) { const isDetailed = ['iuno', 'jingran', 'shorekeeper'].includes(c.id); return React.createElement("div", null,
        React.createElement("div", { className: "panel" },
            React.createElement("div", { className: "eyebrow" }, "RESOURCE-FIRST TEACHING ROUTE"),
            React.createElement("h2", null,
                c.name,
                " \u00B7 ",
                p.label),
            React.createElement("p", { className: "rotation-prose" }, c.rotation),
            c.id === 'iuno' && p.id === 'carry' && React.createElement(Callout, { tone: "warn", title: "This summary is the short hybrid route" }, "Carry Iuno has a longer bow / Liberation route. Use the full carry section of the linked guide rather than treating this support sequence as her optimized carry rotation."),
            c.id === 'hsin' && p.id === 'unison' && React.createElement(Callout, { tone: "warn", title: "Unison has different swap logic" }, "The summary lists shared resource milestones only. Use the source\u2019s Unison route for exact inputs; the Flare support core is not interchangeable."),
            React.createElement("div", { className: "button-row" },
                isDetailed && React.createElement("button", { className: "button primary", onClick: () => { this.setState({ rotationId: 'jingran-core', step: 0 }); this.nav('rotation'); } },
                    React.createElement(Icon, { name: "play", size: 16 }),
                    " Open Jingran team lab"),
                React.createElement(SourceLink, { url: c.sources[0].url }, "Full role-specific rotation"))),
        React.createElement(Callout, { title: "What this does not claim" }, "These are teaching sequences, not frame-perfect timers. Enemy movement, weapon rank, Intro availability and higher sequences can change the optimal route."),
        this.sourcesInline(c)); }
    progressTab(c, p) {
        const record = this.state.store.profiles[c.id], done = completion(c, this.state.store), stats = record.stats;
        let erKnown = stats.er !== '', er = num(stats.er) + num(stats.extraER), critKnown = stats.crit !== '', crit = num(stats.crit) + num(stats.extraCrit);
        return React.createElement("div", { className: "stack" },
            React.createElement("div", { className: "two-col" },
                React.createElement("section", { className: "panel" },
                    React.createElement("div", { className: "section-heading tight" },
                        React.createElement("h2", null, "Your record"),
                        React.createElement(Pill, null, "Local only")),
                    React.createElement("p", { className: "hint" }, "Unknown is not the same as S0. Enter what you actually own."),
                    React.createElement("div", { className: "form-grid" },
                        React.createElement(Field, { label: "Ownership" },
                            React.createElement("select", { value: record.owned, onChange: e => this.updateProfile(c.id, { owned: e.target.value }) },
                                React.createElement("option", { value: "unspecified" }, "Unspecified"),
                                React.createElement("option", { value: "owned" }, "Owned"),
                                React.createElement("option", { value: "planned" }, "Planned"))),
                        React.createElement(Field, { label: "Current sequence" },
                            React.createElement("select", { value: record.sequence, onChange: e => this.updateProfile(c.id, { sequence: e.target.value }) },
                                React.createElement("option", { value: "" }, "Unknown"),
                                [0, 1, 2, 3, 4, 5, 6].map(n => React.createElement("option", { key: n, value: n },
                                    "S",
                                    n)))),
                        React.createElement(Field, { label: "Signature ownership" },
                            React.createElement("select", { value: record.signature, onChange: e => this.updateProfile(c.id, { signature: e.target.value }) },
                                React.createElement("option", { value: "unspecified" }, "Unspecified"),
                                React.createElement("option", { value: "owned" }, "Owned"),
                                React.createElement("option", { value: "not-owned" }, "Not owned"))),
                        React.createElement(Field, { label: "Target sequence" },
                            React.createElement("select", { value: record.targetSequence, onChange: e => this.updateProfile(c.id, { targetSequence: e.target.value }) },
                                React.createElement("option", { value: "" }, "No target"),
                                [0, 1, 2, 3, 4, 5, 6].map(n => React.createElement("option", { value: n, key: n },
                                    "S",
                                    n)))),
                        React.createElement(Field, { label: "Character level" },
                            React.createElement("input", { type: "number", min: "1", max: "90", placeholder: "Unknown", value: record.level, onInput: e => this.updateProfile(c.id, { level: e.target.value }) })),
                        React.createElement(Field, { label: "Weapon level" },
                            React.createElement("input", { type: "number", min: "1", max: "90", placeholder: "Unknown", value: record.weaponLevel, onInput: e => this.updateProfile(c.id, { weaponLevel: e.target.value }) }))),
                    record.sequence !== '' && record.targetSequence !== '' && React.createElement("div", { className: "mini-result" },
                        Math.max(0, num(record.targetSequence) - num(record.sequence)),
                        " additional sequence upgrade(s) to your target. Availability and cost are not inferred.")),
                React.createElement("section", { className: "panel" },
                    React.createElement("div", { className: "section-heading tight" },
                        React.createElement("h2", null, "Build checklist"),
                        React.createElement(Pill, { tone: "accent" },
                            done,
                            "/",
                            c.checks.length)),
                    this.presetSelect(c, true),
                    React.createElement("div", { className: "checklist" }, c.checks.map(x => React.createElement(CheckRow, { key: x.id, label: x.label, checked: record.checks[ck(p, x)], onChange: () => this.progressToggle(c, p, x) }))),
                    React.createElement("p", { className: "hint" }, "Weapon / Inherent checks are shared. Other checks are saved separately for each role preset."))),
            React.createElement("div", { className: "two-col" },
                React.createElement("section", { className: "panel" },
                    React.createElement("h2", null, "Talent level tracker"),
                    React.createElement("p", { className: "hint" }, "Ordered for the selected role. No levels are assumed."),
                    React.createElement("div", { className: "talent-tracker" }, p.talents.map((t, i) => React.createElement("label", { key: t },
                        React.createElement("span", { className: "index" },
                            "0",
                            i + 1),
                        React.createElement("strong", null, t),
                        React.createElement("select", { "aria-label": `${c.name} ${t} level`, value: record.talentLevels[t] || '', onChange: e => this.updateProfile(c.id, { talentLevels: { ...record.talentLevels, [t]: e.target.value } }) },
                            React.createElement("option", { value: "" }, "\u2014"),
                            Array.from({ length: 10 }, (_, i) => i + 1).map(n => React.createElement("option", { key: n, value: n }, n)))))),
                    React.createElement("p", { className: "hint" }, c.talentNote)),
                React.createElement("section", { className: "panel" },
                    React.createElement("h2", null, "Stat sanity check"),
                    React.createElement("p", { className: "hint" }, "Enter the displayed values. Add only bonuses that are NOT already included."),
                    React.createElement("div", { className: "form-grid" },
                        React.createElement(Field, { label: "Displayed ER (%)" },
                            React.createElement("input", { type: "number", min: "0", max: "1000", placeholder: "e.g. 230", value: stats.er, onInput: e => this.setStat(c.id, 'er', e.target.value) })),
                        React.createElement(Field, { label: "Extra active ER points", hint: "Use 0 when already counted." },
                            React.createElement("input", { type: "number", min: "0", max: "1000", placeholder: "0", value: stats.extraER, onInput: e => this.setStat(c.id, 'extraER', e.target.value) })),
                        React.createElement(Field, { label: "Displayed Crit Rate (%)" },
                            React.createElement("input", { type: "number", min: "0", max: "1000", placeholder: "e.g. 60", value: stats.crit, onInput: e => this.setStat(c.id, 'crit', e.target.value) })),
                        React.createElement(Field, { label: "Extra active Crit points", hint: "Set + weapon + teammates, once only." },
                            React.createElement("input", { type: "number", min: "0", max: "1000", placeholder: "0", value: stats.extraCrit, onInput: e => this.setStat(c.id, 'extraCrit', e.target.value) })),
                        c.id === 'jingran' && React.createElement(Field, { label: "HP in the intended loadout" },
                            React.createElement("input", { type: "number", min: "0", max: "200000", placeholder: "50000", value: stats.hp, onInput: e => this.setStat(c.id, 'hp', e.target.value) }))),
                    React.createElement("div", { className: `calc-result ${erKnown && er < p.er[0] ? 'needs' : ''}` },
                        React.createElement("span", null, "Effective ER"),
                        React.createElement("b", null, erKnown ? `${er.toFixed(1)}%` : 'Enter a value'),
                        React.createElement("small", null, erKnown ? (er < p.er[0] ? `${(p.er[0] - er).toFixed(1)} points below the ${targetER(p)} starting target.` : `Meets the starting target. Two-loop testing still decides sufficiency.`) : `Preset target: ${targetER(p)}`)),
                    React.createElement("div", { className: `calc-result ${critKnown && crit > 100 ? 'needs' : ''}` },
                        React.createElement("span", null, "Active Crit Rate"),
                        React.createElement("b", null, critKnown ? `${crit.toFixed(1)}%` : 'Enter a value'),
                        React.createElement("small", null, critKnown ? (crit > 100 ? `${(crit - 100).toFixed(1)} points above 100%; check your counted bonuses.` : 'No overcap in the bonuses you entered. This is not a damage simulation.') : 'No temporary bonuses are silently assumed.')),
                    c.id === 'jingran' && stats.hp !== '' && React.createElement("div", { className: `calc-result ${num(stats.hp) < 50000 ? 'needs' : ''}` },
                        React.createElement("span", null, "HP checkpoint"),
                        React.createElement("b", null, num(stats.hp).toLocaleString()),
                        React.createElement("small", null, num(stats.hp) < 50000 ? `${(50000 - num(stats.hp)).toLocaleString()} below 50,000.` : 'The 50,000 checkpoint is met; prioritize other useful stats afterward.')))),
            React.createElement("section", { className: "panel" },
                React.createElement("div", { className: "section-heading tight" },
                    React.createElement("h2", null, "Your notes"),
                    React.createElement("span", { className: "small muted" },
                        record.notes.length,
                        "/5000")),
                React.createElement("textarea", { rows: "5", maxLength: "5000", placeholder: "What is missing? Which weapon worked? Does the second loop stall? Save your tested rotation notes here\u2026", value: record.notes, onInput: e => this.updateProfile(c.id, { notes: e.target.value }), "aria-label": `${c.name} personal notes` }),
                React.createElement("p", { className: "hint" }, this.state.storageOK ? 'Saved on this browser. Use Export to back up or transfer between devices.' : 'Browser storage is unavailable. Export before closing to preserve this session.')),
            React.createElement(Callout, { title: "Investment context" }, c.investment),
            this.sourcesInline(c));
    }
    characterSources(c) { return React.createElement("div", { className: "panel" },
        React.createElement("div", { className: "eyebrow" }, "PROVENANCE & LIMITS"),
        React.createElement("h2", null,
            c.name,
            " references"),
        React.createElement("p", null,
            "The original PDF is the base content. ",
            c.reviewed ? 'Build, stat and gameplay sections were checked against the current guide; this is not a newly recomputed damage model.' : 'This profile was migrated from the supplied report, not independently re-verified in full during the app conversion.'),
        React.createElement("div", { className: "source-buttons" },
            React.createElement("button", { className: "button primary", onClick: () => this.report(c.page) },
                React.createElement(Icon, { name: "book", size: 16 }),
                " Original report \u00B7 page ",
                c.page),
            c.sources.map(s => React.createElement(SourceLink, { url: s.url, key: s.url }, s.label))),
        React.createElement(Callout, { title: "Snapshot date" },
            DATA.snapshot,
            ". External links require internet. All guide content, personal notes and original PDF access are included in the offline app."),
        React.createElement("p", { className: "muted" }, "ER ranges are practical starting estimates, and many priorities depend on role. A set recommendation does not establish a universal DPS winner. S0 is a teaching assumption, not a claim of ownership.")); }
    conflicts() { const occurrences = {}; this.state.store.squads.forEach((tid, i) => TEAM[tid]?.members.forEach(id => (occurrences[id] ?? (occurrences[id] = [])).push(i + 1))); return Object.entries(occurrences).filter(([id, slots]) => slots.length > 1); }
    teamPlanner() { const conflicts = this.conflicts(), conflictIDs = new Set(conflicts.map(x => x[0])); const library = DATA.teams.filter(t => (!this.state.teamFilter || t.members.includes(this.state.teamFilter)) && (!this.state.teamQuery || JSON.stringify(t).toLowerCase().includes(this.state.teamQuery.toLowerCase()))); return React.createElement("div", { className: "page-enter" },
        React.createElement("div", { className: "page-heading" },
            React.createElement("div", { className: "eyebrow" }, "COMPLETE CORES, NOT SHARED SUPPORTS"),
            React.createElement("h1", null, "Team planner"),
            React.createElement("p", null, "Choose up to four templates. Shared characters are flagged immediately.")),
        React.createElement("div", { className: `allocation-status ${conflicts.length ? 'warn' : 'good'}` },
            React.createElement(Icon, { name: conflicts.length ? 'alert' : 'check', size: 22 }),
            React.createElement("div", null,
                React.createElement("strong", null, conflicts.length ? `${conflicts.length} shared-character conflict${conflicts.length > 1 ? 's' : ''}` : 'No shared characters in your allocation'),
                React.createElement("p", null, conflicts.length ? conflicts.map(([id, slots]) => `${fullName(id)}: teams ${slots.join(' & ')}`).join(' · ') : 'This checks character overlap only—not rotation quality, weapon sharing or mode suitability.')),
            React.createElement("button", { className: "text-button", onClick: () => { this.mutate(s => ({ ...s, squads: [...DATA.defaultSquads] })); this.notify('Four-team starting allocation restored.'); } }, "Restore defaults")),
        React.createElement("div", { className: "squad-grid" }, this.state.store.squads.map((tid, i) => { const t = TEAM[tid]; return React.createElement("section", { className: `panel squad ${t?.members.some(id => conflictIDs.has(id)) ? 'has-conflict' : ''}`, key: i },
            React.createElement("div", { className: "section-heading tight" },
                React.createElement("div", { className: "eyebrow" },
                    "TEAM ",
                    String(i + 1).padStart(2, '0')),
                React.createElement("button", { className: "icon-button", "aria-label": `Clear team ${i + 1}`, onClick: () => this.assignTeam(i, '') },
                    React.createElement(Icon, { name: "close", size: 16 }))),
            React.createElement("select", { "aria-label": `Team ${i + 1} template`, value: tid, onChange: e => this.assignTeam(i, e.target.value) },
                React.createElement("option", { value: "" }, "Empty slot"),
                DATA.teams.map(t => React.createElement("option", { value: t.id, key: t.id }, t.name))),
            t ? React.createElement("div", null,
                React.createElement("div", { className: "squad-members" }, t.members.map(id => React.createElement("button", { className: conflictIDs.has(id) ? 'conflict-member' : '', key: id, onClick: () => DB[id] ? this.nav('character', id) : this.notify('Outside this guide’s profile list.') },
                    React.createElement(Avatar, { id: id, size: "sm" }),
                    React.createElement("strong", null, nameOf(id)),
                    conflictIDs.has(id) && React.createElement(Icon, { name: "alert", size: 14 })))),
                React.createElement("p", null, t.note),
                Object.entries(t.modes).map(([id, p]) => React.createElement("div", { className: "mode-note", key: id },
                    React.createElement("b", null, nameOf(id)),
                    React.createElement("span", null, DB[id]?.presets.find(x => x.id === p)?.label),
                    DB[id] && currentPreset(DB[id], this.state.store).id !== p && React.createElement("button", { className: "text-button", onClick: () => { this.setPreset(id, p); this.notify(`${nameOf(id)} preset updated.`); } }, "Apply")))) : React.createElement("div", { className: "empty-slot" }, "Select a team above or assign one from the library.")); })),
        React.createElement("div", { className: "section-heading" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, "CURATED COMBINATIONS"),
                React.createElement("h2", null, "Team library")),
            React.createElement("span", { className: "small muted" },
                library.length,
                " templates")),
        React.createElement("div", { className: "filter-bar" },
            React.createElement("div", { className: "search-field" },
                React.createElement(Icon, { name: "search" }),
                React.createElement("input", { "aria-label": "Search team templates", placeholder: "Search teams or modes\u2026", value: this.state.teamQuery, onInput: e => this.setState({ teamQuery: e.target.value }) })),
            React.createElement("select", { "aria-label": "Filter teams by character", value: this.state.teamFilter, onChange: e => this.setState({ teamFilter: e.target.value }) },
                React.createElement("option", { value: "" }, "Any resonator"),
                DATA.characters.map(c => React.createElement("option", { key: c.id, value: c.id }, c.name)))),
        React.createElement("div", { className: "team-library" }, library.map(t => this.teamCard(t))),
        !library.length && React.createElement(Empty, { title: "No matching teams" }, "Clear the search or select a different resonator."),
        React.createElement(Callout, { title: "Mode restrictions still matter" }, "The planner does not create new teams automatically. The listed presets preserve the report\u2019s intended conditions; outside-list characters are explicitly marked and are not assumed owned.")); }
    echoes() { var _a; let groups = {}; let cs = this.state.echoFocus ? DATA.characters.filter(c => this.state.store.queue.includes(c.id)) : DATA.characters; for (const c of cs) {
        const p = currentPreset(c, this.state.store);
        for (const set of p.sets) {
            (groups[_a = set.name] ?? (groups[_a] = [])).push({ c, p, set });
        }
    } let entries = Object.entries(groups).filter(([name, entries]) => `${name} ${entries.map(x => x.p.echo + ' ' + x.c.name).join(' ')}`.toLowerCase().includes(this.state.echoQuery.toLowerCase())).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])); return React.createElement("div", { className: "page-enter" },
        React.createElement("div", { className: "page-heading" },
            React.createElement("div", { className: "eyebrow" }, "FARM WITH A PURPOSE"),
            React.createElement("h1", null, "Echo planner"),
            React.createElement("p", null, "See which saved builds use each set\u2014and where their main stats differ.")),
        React.createElement("div", { className: "filter-bar" },
            React.createElement("div", { className: "search-field" },
                React.createElement(Icon, { name: "search" }),
                React.createElement("input", { "aria-label": "Search Echo sets", type: "search", placeholder: "Search a set, main Echo, or character\u2026", value: this.state.echoQuery, onInput: e => this.setState({ echoQuery: e.target.value }) }),
                this.state.echoQuery && React.createElement("button", { className: "icon-button", "aria-label": "Clear Echo search", onClick: () => this.setState({ echoQuery: '' }) },
                    React.createElement(Icon, { name: "close", size: 16 }))),
            React.createElement("label", { className: "inline-check" },
                React.createElement("input", { type: "checkbox", checked: this.state.echoFocus, onChange: e => this.setState({ echoFocus: e.target.checked }) }),
                " Upgrade queue only")),
        React.createElement(Callout, { title: "Shared set \u2260 interchangeable pieces" }, "This groups the presets you selected, not every possible alternative. Shorekeeper\u2019s HP pieces and Verina\u2019s ATK pieces serve different roles. Set overlap is not a claim that the sets share a farming location."),
        React.createElement("div", { className: "echo-group-grid" }, entries.map(([name, xs]) => React.createElement("section", { className: "panel echo-group", key: name },
            React.createElement("div", { className: "section-heading tight" },
                React.createElement("div", null,
                    React.createElement("div", { className: "eyebrow" }, xs.length > 1 ? 'SHARED SET' : 'SPECIALIST SET'),
                    React.createElement("h2", null, name)),
                React.createElement("span", { className: "number-badge" }, xs.length)),
            xs.map(({ c, p, set }) => React.createElement("div", { className: "echo-user", key: c.id },
                React.createElement("button", { className: "echo-user-name", onClick: () => this.nav('character', c.id) },
                    React.createElement(Avatar, { id: c.id, size: "sm" }),
                    React.createElement("span", null,
                        React.createElement("strong", null, c.name),
                        React.createElement("small", null,
                            p.label,
                            " \u00B7 ",
                            set.pieces,
                            " pieces")),
                    React.createElement(Icon, { name: "chevron", size: 15 })),
                React.createElement("dl", null,
                    React.createElement("dt", null, "Active"),
                    React.createElement("dd", null, p.echo),
                    React.createElement("dt", null, "Main stats"),
                    React.createElement("dd", null, p.mains.join(' · ')),
                    React.createElement("dt", null, "ER"),
                    React.createElement("dd", null, targetER(p)))))))),
        !entries.length && React.createElement(Empty, { title: "No sets match this view" }, "Try another search or add characters to the upgrade queue.")); }
    rotationSteps() { if (this.state.rotationId === 'jingran-core')
        return DATA.rotation; const c = DB[this.state.rotationId]; return c ? [{ character: c.id, title: 'Role and resource check', action: currentPreset(c, this.state.store).label, why: c.tagline, warning: c.must }, { character: c.id, title: 'Teaching sequence', action: c.rotation, why: c.talentNote, warning: 'This compact summary is not a frame-perfect or mode-independent rotation.' }, { character: c.id, title: 'Confirm the next loop', action: 'Check ER → resources → intended Outro', why: 'Repeat the full team rotation without an artificial opening energy refill.', warning: c.roster }] : DATA.rotation; }
    rotationLab() { const steps = this.rotationSteps(), step = Math.min(this.state.step, steps.length - 1), s = steps[step], c = DB[s.character]; return React.createElement("div", { className: "page-enter" },
        React.createElement("div", { className: "page-heading" },
            React.createElement("div", { className: "eyebrow" }, "LEARN THE HANDOFF"),
            React.createElement("h1", null, "Rotation lab"),
            React.createElement("p", null, "Advance manually while you practice. No invented timers or damage promises.")),
        React.createElement("div", { className: "rotation-controls" },
            React.createElement("select", { "aria-label": "Choose practice rotation", value: this.state.rotationId, onChange: e => this.setState({ rotationId: e.target.value, step: 0 }) },
                React.createElement("option", { value: "jingran-core" }, "Detailed: Shorekeeper \u2192 Iuno \u2192 Jingran"),
                DATA.characters.map(c => React.createElement("option", { key: c.id, value: c.id },
                    "Quick reference: ",
                    c.name))),
            React.createElement("button", { className: "button subtle", onClick: () => this.setState({ step: 0 }) },
                React.createElement(Icon, { name: "reset", size: 16 }),
                " Restart"),
            React.createElement("span", { className: "small muted desktop-only" }, "\u2190 \u2192 keys also navigate")),
        React.createElement("div", { className: "rotation-layout" },
            React.createElement("aside", { className: "step-list", "aria-label": "Rotation steps" }, steps.map((x, i) => React.createElement("button", { className: step === i ? 'active' : step > i ? 'past' : '', key: i, onClick: () => this.setState({ step: i }) },
                React.createElement("span", null, step > i ? React.createElement(Icon, { name: "check", size: 13 }) : String(i + 1).padStart(2, '0')),
                React.createElement("div", null,
                    React.createElement("small", null, nameOf(x.character)),
                    React.createElement("strong", null, x.title))))),
            React.createElement("section", { className: `practice-card ${c.element.toLowerCase()}` },
                React.createElement("div", { className: "practice-top" },
                    React.createElement(Avatar, { id: c.id, size: "lg" }),
                    React.createElement("div", null,
                        React.createElement("div", { className: "eyebrow" }, fullName(c.id)),
                        React.createElement("span", { className: "muted" },
                            "Step ",
                            step + 1,
                            " of ",
                            steps.length)),
                    React.createElement(Pill, null, this.state.rotationId === 'jingran-core' ? 'S0 teaching route' : 'Quick reference')),
                React.createElement("h2", null, s.title),
                React.createElement("div", { className: "action-box" }, s.action),
                React.createElement("div", { className: "practice-why" },
                    React.createElement("div", { className: "eyebrow" }, "WHY THIS STEP MATTERS"),
                    React.createElement("p", null, s.why)),
                React.createElement(Callout, { tone: "warn", title: "Watch for this" }, s.warning),
                React.createElement("div", { className: "practice-footer" },
                    React.createElement("button", { className: "button subtle", disabled: step === 0, onClick: () => this.nextStep(-1) },
                        React.createElement(Icon, { name: "back", size: 16 }),
                        " Previous"),
                    React.createElement("div", { className: "step-dots" }, steps.map((_, i) => React.createElement("button", { key: i, className: i === step ? 'active' : '', "aria-label": `Go to step ${i + 1}`, onClick: () => this.setState({ step: i }) }))),
                    React.createElement("button", { className: "button primary", disabled: step === steps.length - 1, onClick: () => this.nextStep(1) },
                        "Next ",
                        React.createElement(Icon, { name: "arrow", size: 16 }))))),
        React.createElement("div", { className: "two-col" },
            React.createElement("section", { className: "panel" },
                React.createElement("h3", null, "When the loop stalls"),
                React.createElement("p", null,
                    React.createElement("b", null, "No buff?"),
                    " Check Intro / Outro activation and field creation."),
                React.createElement("p", null,
                    React.createElement("b", null, "Low Jingran damage?"),
                    " Check HP, Liberation before Heavies, Qi, and a lost buff from swapping out."),
                React.createElement("p", null,
                    React.createElement("b", null, "Second loop is late?"),
                    " Add ER or omitted resource-building actions; do not judge only the opener.")),
            React.createElement("section", { className: "panel" },
                React.createElement("h3", null, "Practice assumptions"),
                React.createElement("p", null, "The detailed lab uses Jingran S0 and Iuno\u2019s short hybrid route. Higher sequences and weapon ranks can change the opener. The practice route does not assume an S2 damage benefit; record your actual sequence in Iuno\u2019s profile."),
                React.createElement(SourceLink, { url: DB.jingran.sources[0].url }, "Jingran named rotation"),
                React.createElement("br", null),
                React.createElement(SourceLink, { url: DB.iuno.sources[0].url }, "Iuno hybrid and carry routes")))); }
    compare() { const ids = this.state.store.compare; const cs = ids.map(id => DB[id]); return React.createElement("div", { className: "page-enter" },
        React.createElement("div", { className: "page-heading" },
            React.createElement("div", { className: "eyebrow" }, "COMPARE THE JOB, NOT A TIER LABEL"),
            React.createElement("h1", null, "Build comparison"),
            React.createElement("p", null, "Three characters, their selected roles, and what the builds actually need.")),
        React.createElement("div", { className: "compare-pickers" }, [0, 1, 2].map(i => React.createElement(Field, { label: `Character ${i + 1}`, key: i },
            React.createElement("select", { "aria-label": `Comparison character ${i + 1}`, value: ids[i] || '', onChange: e => this.mutate(s => { let compare = [...s.compare]; if (e.target.value) {
                    compare[i] = e.target.value;
                }
                else {
                    compare.splice(i, 1);
                } return { ...s, compare: compare.filter(Boolean) }; }) },
                React.createElement("option", { value: "" }, "Select a resonator\u2026"),
                DATA.characters.filter(c => !ids.includes(c.id) || ids[i] === c.id).map(c => React.createElement("option", { key: c.id, value: c.id }, c.name)))))),
        React.createElement("div", { className: "compare-grid" }, cs.map(c => { const p = currentPreset(c, this.state.store); return React.createElement("section", { className: `panel compare-card ${c.element.toLowerCase()}`, key: c.id },
            React.createElement(Avatar, { id: c.id, size: "lg" }),
            React.createElement("h2", null, c.name),
            React.createElement("p", { className: "muted" }, c.subtitle),
            this.presetSelect(c, true),
            React.createElement("div", { className: "compare-row" },
                React.createElement("span", null, "Echo set"),
                React.createElement("strong", null, setsText(p))),
            React.createElement("div", { className: "compare-row" },
                React.createElement("span", null, "Active Echo"),
                React.createElement("strong", null, p.echo),
                React.createElement("small", null,
                    p.activeCost,
                    "-cost active \u00B7 ",
                    p.costs.join('–'))),
            React.createElement("div", { className: "compare-row" },
                React.createElement("span", null, "Main stats"),
                p.mains.map((x, i) => React.createElement("p", { key: i },
                    React.createElement("b", null,
                        p.costs[i],
                        "c"),
                    " ",
                    x))),
            React.createElement("div", { className: "compare-row" },
                React.createElement("span", null, "Energy Regen"),
                React.createElement("strong", null, targetER(p))),
            React.createElement("div", { className: "compare-row" },
                React.createElement("span", null, "Talent order"),
                React.createElement("strong", null, p.talents.map(shortTalent).join(' → '))),
            React.createElement("div", { className: "compare-row" },
                React.createElement("span", null, "Primary scaling / damage"),
                React.createElement("strong", null,
                    c.scaling,
                    " / ",
                    c.damage)),
            React.createElement("div", { className: "compare-row" },
                React.createElement("span", null, "Signature / practical weapon"),
                React.createElement("strong", null, c.signature || 'Variation')),
            React.createElement("div", { className: "compare-row" },
                React.createElement("span", null, "Investment context"),
                React.createElement("p", null, c.investment)),
            React.createElement("button", { className: "button subtle full", onClick: () => this.nav('character', c.id) },
                "Open profile ",
                React.createElement(Icon, { name: "arrow", size: 15 })),
            this.sourcesInline(c)); })),
        !cs.length && React.createElement(Empty, { title: "Choose characters to compare" }, "Select up to three profiles above."),
        React.createElement(Callout, { title: "No false precision" }, "This is a build comparison, not a damage simulator. Personal damage, team DPS and unmatched damage-per-rotation estimates are deliberately not placed in a single ranking.")); }
    planner() { const { store } = this.state; return React.createElement("div", { className: "page-enter" },
        React.createElement("div", { className: "page-heading" },
            React.createElement("div", { className: "eyebrow" }, "FINISH THE TEAMS YOU PLAY"),
            React.createElement("h1", null, "Upgrade planner"),
            React.createElement("p", null, "Your priorities, saved locally. Move characters up or down as your active teams change.")),
        React.createElement("div", { className: "planner-add" },
            React.createElement("select", { value: "", "aria-label": "Add a character to upgrade queue", onChange: e => { if (e.target.value)
                    this.addQueue(e.target.value); } },
                React.createElement("option", { value: "" }, "Add a resonator to the queue\u2026"),
                DATA.characters.filter(c => !store.queue.includes(c.id)).map(c => React.createElement("option", { key: c.id, value: c.id }, c.name))),
            React.createElement("button", { className: "button subtle", onClick: this.exportData },
                React.createElement(Icon, { name: "download", size: 16 }),
                " Export progress")),
        React.createElement("div", { className: "planner-list" }, store.queue.map((id, i) => { const c = DB[id], p = currentPreset(c, store), done = completion(c, store), r = store.profiles[id]; return React.createElement("section", { className: "panel planner-item", key: id },
            React.createElement("div", { className: "planner-order" },
                React.createElement("span", null, String(i + 1).padStart(2, '0')),
                React.createElement("div", null,
                    React.createElement("button", { className: "icon-button", disabled: i === 0, "aria-label": `Move ${c.name} up`, onClick: () => this.moveQueue(i, -1) },
                        React.createElement(Icon, { name: "up", size: 17 })),
                    React.createElement("button", { className: "icon-button", disabled: i === store.queue.length - 1, "aria-label": `Move ${c.name} down`, onClick: () => this.moveQueue(i, 1) },
                        React.createElement(Icon, { name: "down", size: 17 })))),
            React.createElement(Avatar, { id: id, size: "lg" }),
            React.createElement("div", { className: "planner-main" },
                React.createElement("button", { className: "card-title", onClick: () => this.nav('character', id, 'progress') },
                    React.createElement("h2", null, c.name),
                    React.createElement(Icon, { name: "chevron", size: 15 })),
                React.createElement("div", { className: "badge-row" },
                    React.createElement(Pill, null, p.label),
                    React.createElement(Pill, null, r.level ? `Lv. ${r.level}` : 'Level unknown'),
                    r.sequence !== '' && React.createElement(Pill, null,
                        "S",
                        r.sequence)),
                React.createElement("p", { className: "next-action" },
                    React.createElement("b", null, "Next:"),
                    " ",
                    nextCheck(c, store)),
                React.createElement("div", { className: "planner-talents" }, p.talents.slice(0, 2).map(t => React.createElement("span", { key: t },
                    shortTalent(t),
                    " ",
                    React.createElement("b", null, r.talentLevels[t] ? `Lv. ${r.talentLevels[t]}` : 'unrecorded'))))),
            React.createElement("div", { className: "planner-progress" },
                React.createElement("strong", null,
                    done,
                    "/",
                    c.checks.length),
                React.createElement("small", null, "checks"),
                React.createElement("div", { className: "progress-track" },
                    React.createElement("i", { style: { width: `${done / c.checks.length * 100}%` } })),
                React.createElement("button", { className: "text-button", onClick: () => this.nav('character', id, 'progress') },
                    "Update ",
                    React.createElement(Icon, { name: "arrow", size: 13 }))),
            React.createElement("button", { className: "icon-button", "aria-label": `Remove ${c.name} from queue`, onClick: () => this.mutate(s => ({ ...s, queue: s.queue.filter(x => x !== id) })) },
                React.createElement(Icon, { name: "close", size: 16 }))); })),
        !store.queue.length && React.createElement(Empty, { title: "Your upgrade queue is empty" }, "Choose a character above. Removing a queue entry does not delete its build notes."),
        React.createElement("div", { className: "two-col" },
            React.createElement("section", { className: "panel" },
                React.createElement("div", { className: "eyebrow" }, "LEVELING ORDER"),
                React.createElement("h2", null, "Complete your active cores."),
                React.createElement("p", null, "Jingran / Iuno and Lucy S2 / Rebecca are your starting priorities. Raise the carries\u2019 weapons and key talents; then improve hybrids with meaningful personal damage."),
                React.createElement("p", { className: "muted" }, "This is an editable planning order\u2014not a claim that Hsin, Chisa or every support should always be leveled later.")),
            React.createElement("section", { className: "panel" },
                React.createElement("div", { className: "eyebrow" }, "SUPPORT CHECKPOINTS"),
                React.createElement("h2", null, "Level 90 is not the buff."),
                React.createElement("p", null, "Shorekeeper, Mornye and Suisui need their effective ER conditions and reliable healing. Leveling alone does not raise fixed buff percentages."),
                React.createElement("p", { className: "muted" }, "Once a team works across repeated rotations, choose its next marginal upgrade rather than scattering resources across unfinished carries."))),
        React.createElement("div", { className: "source-strip" },
            React.createElement("button", { className: "text-button", onClick: () => this.report(24) }, "Original report \u00B7 investment plan, p. 24"))); }
    reference() {
        return React.createElement("div", { className: "page-enter" },
            React.createElement("div", { className: "page-heading" },
                React.createElement("div", { className: "eyebrow" }, "TRANSPARENT BY DESIGN"),
                React.createElement("h1", null, "Guide & sources"),
                React.createElement("p", null, "What changed, what is known, and how to keep your progress.")),
            React.createElement("div", { className: "segmented reference-tabs" }, [['guide', 'How to use'], ['changes', 'Review notes'], ['glossary', 'Glossary'], ['sources', 'Sources'], ['data', 'Backup & settings']].map(([id, label]) => React.createElement("button", { className: this.state.referenceTab === id ? 'active' : '', onClick: () => this.setState({ referenceTab: id }), key: id }, label))),
            this.state.referenceTab === 'guide' && React.createElement("div", { className: "stack" },
                React.createElement("section", { className: "panel" },
                    React.createElement("h2", null, "A useful loop"),
                    React.createElement("div", { className: "guide-steps" }, [['1', 'Pick the team', 'Start in Team planner. Resolve shared supports before spending.'], ['2', 'Pick each character’s job', 'Select the right build preset. This changes the Echo set, stat targets and sometimes the talent order.'], ['3', 'Record what you have', 'Use Progress & notes for levels, sequences, stats and checklist progress. Unknown values stay unknown.'], ['4', 'Practice the handoff', 'Use the rotation lab. Test two complete loops before lowering ER.'], ['5', 'Back up your progress', 'Export a small JSON file, and import it to move to another browser or device.']].map(([n, title, body]) => React.createElement("div", { key: n },
                        React.createElement("span", { className: "rank important" }, n),
                        React.createElement("div", null,
                            React.createElement("h3", null, title),
                            React.createElement("p", null, body)))))),
                React.createElement(Callout, { title: "On phones and tablets" }, "Open your hosted Wavebook link in Safari. Use Share → Add to Home Screen → Open as Web App for a one-tap launcher. Once the web app has opened online and finished caching, it can reopen offline while that cache remains available. Source links still need internet. Notes stay in this browser, not GitHub; use Export to back up or transfer them."),
                React.createElement("section", { className: "panel" },
                    React.createElement("h2", null, "What is deliberately not automated"),
                    React.createElement("p", null, "No game-account connection, automatic patch updates, hidden damage simulation, live Echo inventory, or cross-device cloud sync. The only automatic calculations are transparent checklist counts, character overlaps and arithmetic from stats you enter."),
                    React.createElement("button", { className: "button subtle", onClick: () => this.report(0) },
                        React.createElement(Icon, { name: "download", size: 16 }),
                        " Original PDF included"))),
            this.state.referenceTab === 'changes' && React.createElement("div", { className: "changes-list" },
                DATA.updates.map((u, i) => React.createElement("section", { className: "panel", key: u.title },
                    React.createElement("div", { className: "eyebrow" },
                        "REVIEW NOTE 0",
                        i + 1),
                    React.createElement("h2", null, u.title),
                    React.createElement("p", null, u.body),
                    u.url ? React.createElement(SourceLink, { url: u.url }, u.source) : React.createElement("span", { className: "small muted" }, u.source))),
                React.createElement(Callout, { title: "Verification scope" }, "All 18 profiles have been reviewed against their current character guides. New stat benchmarks and routes include role and buff assumptions. Team DPS was not independently simulated; test energy and execution with your own loadout.")),
            this.state.referenceTab === 'glossary' && React.createElement("div", { className: "glossary-grid" }, DATA.glossary.map(([term, body]) => React.createElement("section", { className: "panel", key: term },
                React.createElement("h2", null, term),
                React.createElement("p", null, body)))),
            this.state.referenceTab === 'sources' && React.createElement("div", { className: "stack" },
                React.createElement("section", { className: "panel" },
                    React.createElement("div", { className: "eyebrow" }, "BASE DOCUMENT"),
                    React.createElement("h2", null, "Your 26-page roster report"),
                    React.createElement("p", null,
                        "Build data were migrated from Wuthering_Waves_Roster_Guide_3_7.pdf, dated ",
                        DATA.reportSnapshot,
                        ". The original is included with the offline app, with page-level links on each profile."),
                    React.createElement("div", { className: "button-row" },
                        React.createElement("button", { className: "button primary", onClick: () => this.report(1) }, "Read original PDF"),
                        React.createElement("button", { className: "button subtle", onClick: () => this.report(0) }, "Save PDF"))),
                React.createElement("div", { className: "sources-grid" }, DATA.characters.map(c => React.createElement("section", { className: "panel source-card", key: c.id },
                    React.createElement("div", { className: "section-heading tight" },
                        React.createElement("h3", null, c.name),
                        React.createElement(Pill, null, c.reviewed ? 'Reviewed 2 Oct' : 'Report import')),
                    React.createElement("button", { className: "text-button", onClick: () => this.report(c.page) },
                        "Report page ",
                        c.page),
                    c.sources.map(s => React.createElement(SourceLink, { url: s.url, key: s.url }, s.label))))),
                React.createElement("p", { className: "muted" }, "Independent fan guide; not an official Kuro Games product. Character and game names belong to their respective owners. External sites may change after this snapshot.")),
            this.state.referenceTab === 'data' && React.createElement("div", { className: "stack" },
                React.createElement("section", { className: "panel" },
                    React.createElement("h2", null, "Your data stays in your browser."),
                    React.createElement("p", null, this.state.storageOK ? 'Local storage is available. Changes to builds, notes, squads and your queue are saved automatically.' : 'Local storage is blocked in this browser. The current session still works, but export before closing.'),
                    React.createElement("p", { className: "muted" }, "Browser data can be cleared, and local-file storage behavior varies. Moving or renaming an HTML file may create a new storage location. Export is the reliable way to back up or transfer progress."),
                    React.createElement("div", { className: "button-row" },
                        React.createElement("button", { className: "button primary", onClick: this.exportData },
                            React.createElement(Icon, { name: "download", size: 16 }),
                            " Export backup"),
                        React.createElement("button", { className: "button subtle", onClick: () => this.fileRef.current?.click() },
                            React.createElement(Icon, { name: "upload", size: 16 }),
                            " Import backup"))),
                React.createElement("section", { className: "panel" },
                    React.createElement("h2", null, "Display"),
                    React.createElement("button", { className: "button subtle", onClick: this.toggleTheme },
                        React.createElement(Icon, { name: this.state.store.theme === 'dark' ? 'sun' : 'moon', size: 17 }),
                        " Switch to ",
                        this.state.store.theme === 'dark' ? 'light' : 'dark',
                        " mode"),
                    React.createElement("button", { className: "button subtle print-button", onClick: () => window.print() },
                        React.createElement(Icon, { name: "print", size: 17 }),
                        " Print this view")),
                React.createElement("section", { className: "panel danger-zone" },
                    React.createElement("h2", null, "Reset local progress"),
                    React.createElement("p", null, "This restores the original planning defaults. It does not remove guide content, but it clears your local notes and checks."),
                    React.createElement("button", { className: "button danger", onClick: this.reset },
                        React.createElement(Icon, { name: "trash", size: 16 }),
                        " Reset progress"))));
    }
    commandPalette() { const q = this.state.commandQuery.toLowerCase().trim(), cs = q ? DATA.characters.filter(c => JSON.stringify(c).toLowerCase().includes(q)).sort((a, b) => { const rank = c => { const names = [c.name, c.short, ...(c.aliases || [])].map(x => x.toLowerCase()); return names.includes(q) ? 0 : names.some(x => x.startsWith(q)) ? 1 : names.some(x => x.includes(q)) ? 2 : 3; }; return rank(a) - rank(b); }) : DATA.focus.map(id => DB[id]); return React.createElement("div", { className: "modal-overlay", onClick: e => { if (e.target === e.currentTarget)
            this.setState({ command: false }); } },
        React.createElement("section", { className: "command-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "command-title", onKeyDown: e => { if (e.key !== 'Tab')
                return; const els = [...e.currentTarget.querySelectorAll('input,button')].filter(x => !x.disabled); if (e.shiftKey && document.activeElement === els[0]) {
                e.preventDefault();
                els.at(-1)?.focus();
            }
            else if (!e.shiftKey && document.activeElement === els.at(-1)) {
                e.preventDefault();
                els[0]?.focus();
            } } },
            React.createElement("h2", { id: "command-title", className: "sr-only" }, "Quick navigation"),
            React.createElement("div", { className: "command-input" },
                React.createElement(Icon, { name: "search" }),
                React.createElement("input", { ref: this.commandRef, autoFocus: true, placeholder: "Jump to a character, set, or page\u2026", "aria-label": "Quick navigation search", value: this.state.commandQuery, onInput: e => this.setState({ commandQuery: e.target.value }), onKeyDown: e => { if (e.key === 'Enter' && cs[0])
                        this.nav('character', cs[0].id); if (e.key === 'Tab') {
                        const els = e.currentTarget.closest('[role=dialog]').querySelectorAll('input,button');
                        if (e.shiftKey && document.activeElement === els[0]) {
                            e.preventDefault();
                            els[els.length - 1].focus();
                        }
                    } } }),
                React.createElement("button", { className: "icon-button", "aria-label": "Close quick navigation", onClick: () => this.setState({ command: false }) },
                    React.createElement(Icon, { name: "close", size: 18 }))),
            React.createElement("div", { className: "command-results" },
                !q && React.createElement("div", { className: "command-caption" }, "YOUR FOCUS"),
                cs.slice(0, 12).map(c => React.createElement("button", { className: "command-item", key: c.id, onClick: () => this.nav('character', c.id) },
                    React.createElement(Avatar, { id: c.id, size: "sm" }),
                    React.createElement("span", null,
                        React.createElement("strong", null, c.name),
                        React.createElement("small", null,
                            c.element,
                            " \u00B7 ",
                            c.subtitle)),
                    React.createElement(Icon, { name: "arrow", size: 15 }))),
                q && !cs.length && React.createElement("p", { className: "empty" }, "No matching profiles."),
                React.createElement("div", { className: "command-caption" }, "PAGES"),
                NAV.filter(([v]) => !q || NAMES[v].toLowerCase().includes(q)).map(([v, icon], idx, arr) => React.createElement("button", { className: "command-item", key: v, onClick: () => this.nav(v), onKeyDown: e => { if (e.key === 'Tab' && !e.shiftKey && idx === arr.length - 1) {
                        e.preventDefault();
                        this.commandRef.current?.focus();
                    } } },
                    React.createElement(Icon, { name: icon }),
                    React.createElement("span", null, NAMES[v]),
                    React.createElement(Icon, { name: "arrow", size: 15 })))),
            React.createElement("div", { className: "command-footer" }, "Enter opens first match \u00B7 Esc closes \u00B7 Ctrl / \u2318 K to search"))); }
    render() { const { view, store, menu } = this.state, title = view === 'character' ? DB[this.state.character].short : NAMES[view]; return React.createElement("div", { className: "app-shell" },
        React.createElement("a", { className: "skip-link", href: "#main-content", onClick: e => { e.preventDefault(); document.getElementById('main-content')?.focus(); } }, "Skip to content"),
        menu && React.createElement("div", { className: "sidebar-shade", onClick: () => this.setState({ menu: false }) }),
        React.createElement("aside", { className: `sidebar ${menu ? 'open' : ''}`, id: "workspace-navigation", "aria-label": "Main navigation" },
            React.createElement("button", { className: "brand", onClick: () => this.nav('overview') },
                React.createElement("span", { className: "brand-mark" },
                    React.createElement(Icon, { name: "diamond", size: 23 })),
                React.createElement("span", null,
                    "WAVEBOOK",
                    React.createElement("small", null, "YOUR ROSTER FIELD GUIDE"))),
            React.createElement("div", { className: "sidebar-section-label" }, "WORKSPACE"),
            React.createElement("nav", null, NAV.map(([v, icon]) => React.createElement("button", { key: v, className: (view === v || (view === 'character' && v === 'roster')) ? 'active' : '', onClick: () => this.nav(v) },
                React.createElement(Icon, { name: icon, size: 18 }),
                React.createElement("span", null, NAMES[v]),
                v === 'roster' && React.createElement("small", null, "18")))),
            React.createElement("div", { className: "sidebar-section-label focus-label" }, "PINNED RESONATORS"),
            React.createElement("div", { className: "sidebar-focus" },
                store.favorites.slice(0, 6).map(id => React.createElement("button", { key: id, onClick: () => this.nav('character', id) },
                    React.createElement("span", { className: `element-dot ${DB[id].element.toLowerCase()}` }),
                    React.createElement("span", null, nameOf(id)),
                    store.profiles[id].sequence !== '' && React.createElement("small", null,
                        "S",
                        store.profiles[id].sequence))),
                !store.favorites.length && React.createElement("p", { className: "small muted" }, "Pin a character from the roster.")),
            React.createElement("div", { className: "sidebar-footer" },
                React.createElement("div", { className: "version-badge" },
                    React.createElement("span", null, "3.7"),
                    React.createElement("div", null,
                        "Research snapshot",
                        React.createElement("small", null, DATA.snapshot))),
                React.createElement("button", { className: "sidebar-export", onClick: this.exportData },
                    React.createElement(Icon, { name: "download", size: 15 }),
                    " Back up progress"),
                React.createElement("span", { className: "privacy-label" },
                    React.createElement("span", { className: "live-dot" }),
                    " ",
                    this.state.storageOK ? 'Local browser saves' : 'Session only · export needed'))),
        React.createElement("div", { className: "workspace" },
            React.createElement("header", { className: "topbar" },
                React.createElement("button", { className: "icon-button menu-button", "aria-label": "Open navigation", "aria-expanded": menu, "aria-controls": "workspace-navigation", onClick: () => this.setState({ menu: !menu }) },
                    React.createElement(Icon, { name: "menu" })),
                React.createElement("div", { className: "breadcrumb" },
                    "Workspace ",
                    React.createElement(Icon, { name: "chevron", size: 13 }),
                    React.createElement("strong", null, title)),
                React.createElement("button", { className: "top-search", onClick: this.openCommand },
                    React.createElement(Icon, { name: "search", size: 17 }),
                    React.createElement("span", null, "Quick jump"),
                    React.createElement("kbd", null, "\u2318 K")),
                React.createElement("button", { className: "icon-button", onClick: this.toggleTheme, "aria-label": `Switch to ${store.theme === 'dark' ? 'light' : 'dark'} theme` },
                    React.createElement(Icon, { name: store.theme === 'dark' ? 'sun' : 'moon', size: 19 })),
                React.createElement("button", { className: "icon-button desktop-only", "aria-label": "Print current view", onClick: () => window.print() },
                    React.createElement(Icon, { name: "print", size: 18 }))),
            React.createElement("main", { id: "main-content", tabIndex: "-1" },
                React.createElement("div", { className: "content" },
                    !this.state.storageOK && React.createElement(Callout, { tone: "warn", title: "Your browser is not saving this session" }, "Use Export before closing. The guide still works, but notes and checklists will not persist automatically."),
                    view === 'overview' && this.overview(),
                    view === 'roster' && this.roster(),
                    view === 'character' && this.character(),
                    view === 'teams' && this.teamPlanner(),
                    view === 'echoes' && this.echoes(),
                    view === 'rotation' && this.rotationLab(),
                    view === 'compare' && this.compare(),
                    view === 'planner' && this.planner(),
                    view === 'reference' && this.reference(),
                    React.createElement("footer", { className: "page-footer" },
                        React.createElement("span", null,
                            "WAVEBOOK ",
                            React.createElement("b", null, "3.7"),
                            " \u00B7 Independent roster guide"),
                        React.createElement("span", null, "Static snapshot \u00B7 Local-first \u00B7 No account connection"))))),
        React.createElement("nav", { className: "mobile-nav", "aria-label": "Mobile navigation" },
            [['overview', 'grid', 'Home'], ['roster', 'users', 'Roster'], ['teams', 'layers', 'Teams'], ['planner', 'check', 'Plan']].map(([v, icon, label]) => React.createElement("button", { key: v, className: view === v ? 'active' : '', onClick: () => this.nav(v) },
                React.createElement(Icon, { name: icon, size: 18 }),
                React.createElement("span", null, label))),
            React.createElement("button", { onClick: () => this.setState({ menu: !menu }) },
                React.createElement(Icon, { name: "menu", size: 18 }),
                React.createElement("span", null, "More"))),
        this.state.command && this.commandPalette(),
        this.state.toast && React.createElement("div", { className: "toast", role: "status" },
            React.createElement(Icon, { name: "info", size: 17 }),
            this.state.toast),
        React.createElement("input", { type: "file", accept: "application/json,.json", ref: this.fileRef, onChange: this.importData, className: "sr-only", "aria-label": "Import Wavebook backup" })); }
}

// Transparent calculations; unknown values remain unknown.
const h = React.createElement;
const STAT_NAMES = {hp:'HP',atk:'ATK',def:'DEF',crit:'Crit Rate',critDmg:'Crit DMG'};
const STAT_MAX = {hp:200000,atk:20000,def:20000,er:1000,extraER:1000,crit:100,extraCrit:200,critDmg:1000};
function valueOf(v, max=1000) { return v !== '' && v != null && Number.isFinite(Number(v)) && Number(v) >= 0 && Number(v) <= max ? Number(v) : null; }
function statSummary(c,store) {
 const r=store.profiles[c.id],p=currentPreset(c,store),s=r.stats;
 const er=valueOf(s.er),extraER=valueOf(s.extraER),cr=valueOf(s.crit,100),extraCrit=valueOf(s.extraCrit,200),cd=valueOf(s.critDmg);
 const fresh=r.statsPreset===p.id;
 return {fresh, er:er===null?null:er+(extraER??0), crit:cr===null?null:cr+(extraCrit??0), averageCrit:cr!==null&&cd!==null&&cd>=100 ? 1+Math.min(100,cr+(extraCrit??0))/100*(cd/100-1) : null};
}
function upgradeAction(c,store) {
 const r=store.profiles[c.id],p=currentPreset(c,store),s=statSummary(c,store);
 if(r.owned==='planned')return 'Acquire this planned character before allocating upgrade resources.';
 if(r.weaponLevel!==''&&num(r.weaponLevel)<90)return `Raise the selected weapon from Lv. ${r.weaponLevel}; then revisit Echo rolls.`;
 if(s.fresh&&s.er!==null&&s.er<p.er[0])return `Add ${(p.er[0]-s.er).toFixed(1)} ER points, then test two full loops.`;
 if(c.id==='jingran'&&s.fresh&&valueOf(r.stats.hp,200000)!==null&&num(r.stats.hp)<50000)return `Add ${(50000-num(r.stats.hp)).toLocaleString()} HP toward the conversion checkpoint.`;
 if(s.fresh&&s.crit!==null&&s.crit>100)return `Rebalance ${(s.crit-100).toFixed(1)} overcapped Crit Rate points.`;
 const talent=p.talents.slice(0,2).find(t=>r.talentLevels[t]!==''&&r.talentLevels[t]!=null&&num(r.talentLevels[t])<8);
 if(talent)return `Raise ${shortTalent(talent)} from Lv. ${r.talentLevels[talent]} before fine-tuning substats.`;
 return c.checks.find(x=>!r.checks[ck(p,x)])?.label||'Refine the build with a repeated full-team test.';
}
function squadAt(store,i) {
 const custom=store.customSquads?.[i];
 if(custom){
  const members=custom.filter(Boolean);
  const match=members.length===3&&new Set(members).size===3 ? DATA.teams.find(t=>t.members.length===3&&t.members.every(id=>members.includes(id))) : null;
  return {id:`custom-${i}`,name:match?.name||'Custom team',members,slots:custom,modes:match?.modes||{},note:match?.note||'Test this custom combination with the roles and rotations you selected.',matched:match,custom:true};
 }
 const t=TEAM[store.squads[i]];
 return t?{...t,slots:t.members,custom:false}:null;
}
function squadConflicts(store){
 const used={};for(let i=0;i<4;i++)for(const id of squadAt(store,i)?.members||[]) (used[id]??=[]).push(i+1);
 return Object.entries(used).filter(([,xs])=>xs.length>1);
}
function modeMatches(id,actual,required){return actual===required||(id==='jingran'&&required==='carry'&&actual==='hp-first');}
function teamIssues(t,store){
 if(!t)return [];
 const out=[],ids=t.members;
 if(ids.length!==3)out.push({kind:'warning',text:'Choose three members to complete this team.'});
 if(new Set(ids).size!==ids.length)out.push({kind:'warning',text:'A character appears twice in this team.'});
 if(ids.length===3&&!ids.some(id=>DB[id]&&currentPreset(DB[id],store).role==='Sustain'))out.push({kind:'warning',text:ids.includes('chisa')?'Chisa needs her sole-healer preset, or add a sustain slot.':'No sustain role is selected. Confirm this is an intentional quickswap setup.'});
 for(const [id,want] of Object.entries(t.modes||{}))if(DB[id]&&!modeMatches(id,currentPreset(DB[id],store).id,want))out.push({kind:'warning',text:`${nameOf(id)} needs ${DB[id].presets.find(p=>p.id===want)?.label||want} for this template.`,preset:[id,want]});
 const denia=ids.includes('denia')?currentPreset(DB.denia,store).id:null,aemeath=ids.includes('aemeath')?currentPreset(DB.aemeath,store).id:null;
 if(denia&&aemeath&&denia!==aemeath)out.push({kind:'warning',text:'Denia and Aemeath have different modes. Align their Tune / Fusion setup.'});
 if(denia==='fusion'&&!ids.includes('aemeath'))out.push({kind:'warning',text:'Fusion Denia’s listed synergy is Fusion Aemeath. Confirm a different recipient before investing.'});
 if(denia==='fusion'&&(ids.includes('qingxiao')||ids.includes('luuk')))out.push({kind:'warning',text:'This Tune carry wants Denia’s Tune Strain mode.'});
 if(ids.includes('hsin')&&currentPreset(DB.hsin,store).id==='unison'&&!ids.includes('jinhsi'))out.push({kind:'warning',text:'Unison Hsin needs a compatible Unison partner; the reviewed route uses Jinhsi.'});
 if(ids.includes('jingran')&&ids.includes('iuno')&&currentPreset(DB.iuno,store).id==='carry')out.push({kind:'warning',text:'Iuno’s carry preset does not provide the short Jingran support route.'});
 const planned=ids.filter(id=>DB[id]&&store.profiles[id].owned==='planned');if(planned.length)out.push({kind:'info',text:`Planned: ${planned.map(nameOf).join(', ')}.`});
 const unknown=ids.filter(id=>DB[id]&&store.profiles[id].owned==='unspecified');if(unknown.length)out.push({kind:'info',text:`Ownership unrecorded: ${unknown.map(nameOf).join(', ')}.`});
 const external=ids.filter(id=>!DB[id]);if(external.length)out.push({kind:'info',text:`Outside this guide: ${external.map(nameOf).join(', ')}. Ownership is not tracked.`});
 return out;
}
function rangeText(b,key){const unit=['crit','critDmg'].includes(key)?'%':'';return b.max===b.min?`${b.min.toLocaleString()}${unit}`:b.max==null?`${b.min.toLocaleString()}${unit}+`:`${b.min.toLocaleString()}–${b.max.toLocaleString()}${unit}`;}
function routeFor(c,p,phase='loop'){
 const r=c.routes[p.id]||c.routes['*']||c.routes.hybrid||Object.values(c.routes)[0];
 const actions=r[phase]||r.loop;
 return actions.map((action,i)=>({character:c.id,title:`${phase==='opener'?'Opener':'Loop'} · ${['Prepare','Build the resource','Complete the window','Finish the handoff','Close the cycle','Return to setup'][i]||`Step ${i+1}`}`,action,why:i===actions.length-1?'Finish the handoff, then repeat the full team loop without an opening energy refill.':c.guide.focus,warning:i===0?c.guide.note:c.must}));
}

class Workspace extends App {
 constructor(props){
  super(props);
  this.state={...this.state,sort:'pinned',practicePhase:'loop',offline:document.documentElement.dataset.wavebookOffline||'loading',undo:null};
  const originalSetPreset=this.setPreset;
  this.setPreset=(id,preset)=>{if(!DB[id]?.presets.some(p=>p.id===preset))return;this.snapshotUndo(`Change ${nameOf(id)} preset`);const r=this.state.store.profiles[id], statsByPreset={...r.statsByPreset,[r.preset]:{...r.stats}},stats={...(statsByPreset[preset]||Object.fromEntries(Object.keys(r.stats).map(k=>[k,''])))};this.updateProfile(id,{preset,statsPreset:preset,stats,statsByPreset});};
  this.assignTeam=(i,tid)=>{this.snapshotUndo(`Change team ${i+1}`);this.mutate(s=>{const squads=[...s.squads],customSquads=[...s.customSquads];squads[i]=TEAM[tid]?tid:'';customSquads[i]=null;return {...s,squads,customSquads};});this.notify(`${TEAM[tid]?.name||'Empty team'} saved in team ${i+1}.`);};
  this.editMember=(i,j,id)=>{this.snapshotUndo(`Edit team ${i+1}`);this.mutate(s=>{const customSquads=[...s.customSquads],slots=[...(squadAt(s,i)?.slots||['','',''])];while(slots.length<3)slots.push('');slots[j]=id;customSquads[i]=slots;return {...s,customSquads};});};
  this.filteredCharacters=()=>{
   const {query,role,element,ownedOnly,store,sort}=this.state,q=query.toLowerCase().trim();
   return DATA.characters.filter(c=>(role==='All'||c.role===role||c.presets.some(p=>p.role===role))&&(element==='All'||c.element===element)&&(!ownedOnly||store.profiles[c.id].owned==='owned')&&(!q||JSON.stringify(c).toLowerCase().includes(q))).sort((a,b)=>sort==='name'?a.name.localeCompare(b.name):sort==='progress'?completion(a,store)/a.checks.length-completion(b,store)/b.checks.length:sort==='queue'?(store.queue.includes(a.id)?store.queue.indexOf(a.id):99)-(store.queue.includes(b.id)?store.queue.indexOf(b.id):99):Number(store.favorites.includes(b.id))-Number(store.favorites.includes(a.id))||a.name.localeCompare(b.name));
  };
  this.exportData=()=>{const lastBackup=new Date().toISOString(),store={...this.state.store,lastBackup};this.downloadBlob(new Blob([JSON.stringify({...store,exportedAt:lastBackup,guideSnapshot:DATA.snapshot},null,2)],{type:'application/json'}),`wavebook-backup-${lastBackup.slice(0,10)}.json`);this.mutate(()=>store);this.notify('Backup exported with teams, loadouts and notes.');};
  this.nextStep=d=>{const n=this.rotationSteps().length;this.setState(s=>({step:Math.max(0,Math.min(n-1,s.step+d))}));};
 }
 componentDidMount(){super.componentDidMount();this.offlineListener=()=>this.setState({offline:document.documentElement.dataset.wavebookOffline||'unavailable'});window.addEventListener('wavebook-offline-ready',this.offlineListener);this.offlineListener();}
 componentWillUnmount(){super.componentWillUnmount();window.removeEventListener('wavebook-offline-ready',this.offlineListener);}
 componentDidUpdate(previousProps,previousState){
  if(previousState.command&&!this.state.command&&previousState.view===this.state.view)this.commandOrigin?.focus();
  if(previousState.view!==this.state.view||previousState.character!==this.state.character||previousState.tab!==this.state.tab){document.getElementById('main-content')?.focus({preventScroll:true});}
 }
 snapshotUndo(label){this.setState({undo:{label,store:JSON.parse(JSON.stringify(this.state.store))}});}
 undoLast(){const u=this.state.undo;if(!u)return;this.setState({store:u.store,undo:null},()=>{this.persist(this.state.store);document.documentElement.dataset.theme=this.state.store.theme;});this.notify(`${u.label} undone.`);}
 undoBar(){return this.state.undo&&h('div',{className:'undo-bar',role:'status'},h('span',null,this.state.undo.label),h('button',{className:'text-button',onClick:()=>this.undoLast()},h(Icon,{name:'reset',size:14}),'Undo'));}
 sourcesInline(c){return h('div',{className:'source-strip'},h(SourceLink,{url:c.guide.source},'Reviewed build guide'),h('span',null,`Checked ${c.guide.checked}`),h('button',{className:'text-button',onClick:()=>this.report(c.page)},`Original report · p. ${c.page}`));}
 overview(){const {store}=this.state,owned=DATA.characters.filter(c=>store.profiles[c.id].owned==='owned').length,conflicts=this.conflicts();return h('div',{className:'page-enter'},
  h('section',{className:'workspace-welcome'},h('div',null,h('div',{className:'eyebrow'},'YOUR ROSTER WORKSPACE'),h('h1',null,'Make your next upgrade count.'),h('p',null,'Choose a role, check the build, and practice the handoff. Your teams and progress stay here.')),h('div',{className:'button-row'},h('button',{className:'button primary',onClick:()=>this.nav('planner')},h(Icon,{name:'check',size:18}),'Continue upgrades'),h('button',{className:'button subtle',onClick:()=>this.nav('roster')},'Explore roster'))),
  h('div',{className:'workspace-status'},h(Pill,{tone:this.state.offline==='ready'?'accent':''},this.state.offline==='ready'?'Offline copy ready':this.state.offline==='unavailable'?'Online guide':'Preparing offline copy'),h('span',null,`${owned} owned recorded · ${DATA.characters.length} reviewed profiles`),h('span',null,`Last review ${DATA.snapshot}`),h('button',{className:'text-button',onClick:()=>{this.setState({referenceTab:'data'});this.nav('reference');}},'Backup & settings')),
  h('div',{className:'section-heading'},h('div',null,h('div',{className:'eyebrow'},'CONTINUE WHERE YOU LEFT OFF'),h('h2',null,'Next useful actions')),h('button',{className:'text-button',onClick:()=>this.nav('planner')},'Edit priorities',h(Icon,{name:'arrow',size:16}))),
  h('div',{className:'action-grid'},store.queue.slice(0,4).map((id,i)=>{const c=DB[id],p=currentPreset(c,store);return h('button',{className:'action-card',key:id,onClick:()=>this.nav('character',id,'progress')},h('div',{className:'action-card-top'},h(Avatar,{id}),h('span',null,h('strong',null,c.name),h('small',null,p.label)),h('span',{className:'index'},`0${i+1}`)),h('p',null,upgradeAction(c,store)),h('span',{className:'text-button'},'Update build',h(Icon,{name:'arrow',size:16})));})),
  !store.queue.length&&h(Empty,{title:'Choose your next project'},'Add a character in Upgrade planner to see the next action here.'),
  h('section',{className:'panel active-teams'},h('div',{className:'section-heading tight'},h('div',null,h('div',{className:'eyebrow'},'YOUR FOUR-TEAM PLAN'),h('h2',null,'Active teams')),h('button',{className:'button subtle',onClick:()=>this.nav('teams')},'Edit teams')),
   conflicts.length>0&&h(Callout,{tone:'warn',title:'Shared characters'},conflicts.map(([id,x])=>`${nameOf(id)} in teams ${[...new Set(x)].join(', ')}`).join(' · ')),
   h('div',{className:'allocation-mini'},Array.from({length:4},(_,i)=>{const t=squadAt(store,i);return h('div',{key:i},h('span',{className:'index'},`0${i+1}`),t?this.memberButtons(t.members):h('button',{className:'text-button',onClick:()=>this.nav('teams')},'Choose a team'));}))),
  h('div',{className:'section-heading'},h('h2',null,'Pinned resonators'),h('span',{className:'small muted'},'Pin profiles with the star')),
  h('div',{className:'focus-grid'},store.favorites.slice(0,6).map(id=>this.charCard(DB[id]))),
  h('div',{className:'backup-reminder'},h('span',null,store.lastBackup?`Last backup ${new Date(store.lastBackup).toLocaleDateString()}`:'Keep a backup to move your progress between devices.'),h('button',{className:'text-button',onClick:this.exportData},h(Icon,{name:'download',size:16}),'Export progress'))
 );}
 charCard(c){const card=super.charCard(c);card.props.children.push(h('button',{className:'card-next',onClick:()=>this.nav('character',c.id,'progress')},h('span',null,'Next'),h('strong',null,upgradeAction(c,this.state.store))));return card;}
 roster(){const cs=this.filteredCharacters();return h('div',{className:'page-enter'},h('div',{className:'page-heading'},h('div',{className:'eyebrow'},'BUILD FOR THE JOB'),h('h1',null,'Resonators'),h('p',null,'Search names, weapons, Echoes or mechanics. Open a profile for the build, practice route and next upgrade.')),
  h('div',{className:'roster-toolbar'},h('label',{className:'search-field'},h(Icon,{name:'search',size:20}),h('input',{type:'search','aria-label':'Search resonators',placeholder:'Name, Echo, weapon or mechanic…',value:this.state.query,onInput:e=>this.setState({query:e.target.value})})),
   h(Field,{label:'Element'},h('select',{value:this.state.element,onChange:e=>this.setState({element:e.target.value})},['All','Aero','Electro','Fusion','Glacio','Havoc','Spectro'].map(x=>h('option',{key:x},x)))),
   h(Field,{label:'Role'},h('select',{value:this.state.role,onChange:e=>this.setState({role:e.target.value})},['All','Carry','Hybrid','Sustain'].map(x=>h('option',{key:x,value:x},x==='Sustain'?'Sustain / healing':x)))),
   h(Field,{label:'Sort'},h('select',{value:this.state.sort,onChange:e=>this.setState({sort:e.target.value})},[['pinned','Pinned first'],['queue','Upgrade queue'],['name','Name'],['progress','Least complete']].map(([v,t])=>h('option',{key:v,value:v},t))))),
  h('div',{className:'filter-under'},h('label',{className:'inline-check'},h('input',{type:'checkbox',checked:this.state.ownedOnly,onChange:e=>this.setState({ownedOnly:e.target.checked})}),'Owned only'),h('span',{className:'small muted',role:'status'},`${cs.length} of ${DATA.characters.length} profiles`),h('button',{className:'text-button',onClick:()=>this.setState({query:'',role:'All',element:'All',ownedOnly:false})},'Clear filters')),
  h('div',{className:'roster-grid'},cs.map(c=>this.charCard(c))),!cs.length&&h(Empty,{title:'No profiles match'},'Clear the filters or try a broader mechanic or name.'));
 }
 benchmarkPanel(c,p,editable=false){const r=this.state.store.profiles[c.id],summary=statSummary(c,this.state.store);return h('section',{className:'panel benchmark-panel'},h('div',{className:'section-heading tight'},h('h2',null,editable?'Your build check':'Stat benchmarks'),h(Pill,null,'Level 90 guide')),
  h('p',{className:'hint'},'Reference values for a finished build, in party and outside combat. They guide refinement; team buffs, weapons and sequence investment change the result.'),
  h('div',{className:'benchmark-grid'},Object.entries(c.benchmarks).map(([key,b])=>{const v=valueOf(r.stats[key],STAT_MAX[key]),status=v===null?'unrecorded':!summary.fresh?'previous role':v<b.min?'below benchmark':'in range';return h('div',{className:`benchmark ${status==='below benchmark'?'needs':''}`,key},h('span',null,STAT_NAMES[key]),h('strong',null,rangeText(b,key)),h('small',null,v===null?'Not recorded':`${v.toLocaleString()}${['crit','critDmg'].includes(key)?'%':''} recorded · ${status}`));})),
  h('p',{className:'hint'},c.guide.note),
  !editable&&h('button',{className:'text-button',onClick:()=>this.nav('character',c.id,'progress')},'Enter my stats',h(Icon,{name:'arrow',size:16})));
 }
 buildTab(c,p){return h('div',{className:'stack'},this.undoBar(),h('section',{className:'panel playbook'},h('div',{className:'eyebrow'},'ROLE & EXECUTION'),h('h2',null,c.tagline),h('p',null,c.guide.focus),h('div',{className:'playbook-weapon'},h('strong',null,'Weapon & loadout choice'),h('p',null,c.guide.weapon)),h('button',{className:'button subtle',onClick:()=>{this.setState({rotationId:c.id,step:0,practicePhase:'loop'});this.nav('rotation');}},h(Icon,{name:'play',size:16}),'Practice this role')),super.buildTab(c,p),this.benchmarkPanel(c,p));}
 statPanel(c,p){const r=this.state.store.profiles[c.id],s=r.stats,x=statSummary(c,this.state.store);return h('section',{className:'panel stat-checker'},h('h2',null,'Stat sanity check'),h('p',{className:'hint'},'Record displayed values for the selected loadout. Extra fields are percentage points from active bonuses not already included.'),
  !x.fresh&&h(Callout,{tone:'warn',title:'This loadout changed'},`These stats were recorded for ${c.presets.find(p=>p.id===r.statsPreset)?.label||'another preset'}. Update the values before using them for this role.`),
  h('div',{className:'form-grid'},[['er','Displayed ER (%)'],['extraER','Extra active ER points'],['crit','Displayed Crit Rate (%)'],['extraCrit','Extra active Crit points'],['critDmg','Displayed Crit DMG (%)'],['hp','HP'],['atk','ATK'],['def','DEF']].map(([key,label])=>h(Field,{key,label},h('input',{type:'number',inputMode:'decimal',min:0,max:STAT_MAX[key],step:'any',placeholder:'Not recorded',value:s[key],onInput:e=>this.setStat(c.id,key,e.target.value),'aria-label':label})))),
  h('div',{className:`calc-result ${x.fresh&&x.er!==null&&x.er<p.er[0]?'needs':''}`},h('span',null,'Effective ER'),h('b',null,x.er===null?'Not recorded':`${x.er.toFixed(1)}%`),h('small',null,x.er===null?`Starting target ${targetER(p)}. Enter displayed ER first.`:!x.fresh?'Update the loadout values.':x.er<p.er[0]?`${(p.er[0]-x.er).toFixed(1)} points below the ${targetER(p)} starting target.`:['shorekeeper','mornye','suisui'].includes(c.id)?'Buff checkpoint reached in the bonuses you entered; confirm uptime in play.':'Starting estimate reached; confirm two consecutive full loops.')),
  h('div',{className:`calc-result ${x.crit!==null&&x.crit>100?'needs':''}`},h('span',null,'Active Crit Rate'),h('b',null,x.crit===null?'Not recorded':`${x.crit.toFixed(1)}%`),h('small',null,x.crit!==null&&x.crit>100?`${(x.crit-100).toFixed(1)} points above the 100% cap.`:'Only the bonuses you entered are included.')),
  c.id!=='shorekeeper'&&x.averageCrit!==null&&h('div',{className:'calc-result'},h('span',null,'Average Crit multiplier'),h('b',null,`${x.averageCrit.toFixed(3)}×`),h('small',null,'1 + capped Crit Rate × (displayed Crit DMG − 100%). For ordinary Crit-capable hits; this is not full damage.')),
  c.id==='shorekeeper'&&h('p',{className:'hint'},'Example: 230 displayed ER + 20 confirmed Fallacy / passive points = 250 effective. Do not add them again if the panel already includes them.'),
  this.benchmarkPanel(c,p,true));}
 progressTab(c,p){const base=super.progressTab(c,p),row=base.props.children[1];row.props.children[1]=this.statPanel(c,p);return h('div',{className:'stack'},this.undoBar(),h(Callout,{title:'Next useful action'},upgradeAction(c,this.state.store)),base);}
 characterSources(c){return h('section',{className:'panel'},h('div',{className:'eyebrow'},'SOURCE & ASSUMPTIONS'),h('h2',null,`${c.name} references`),h('p',null,`Build, stat and gameplay sections checked on ${c.guide.checked}. Reference targets use source-guide assumptions; this app does not recalculate team DPS.`),h('div',{className:'source-buttons'},c.sources.map(s=>h(SourceLink,{key:s.url,url:s.url},s.label)),h('button',{className:'button subtle',onClick:()=>this.report(c.page)},`Original report · p. ${c.page}`)),h(Callout,{title:'How to read the recommendations'},c.guide.note),h('p',{className:'hint'},`Original report: ${DATA.reportSnapshot}. App review: ${DATA.snapshot}. Source pages can change after this snapshot.`));}
 conflicts(){return squadConflicts(this.state.store);}
 applyTeamModes(t){this.snapshotUndo('Apply team roles');this.mutate(s=>{const profiles={...s.profiles};for(const [id,preset]of Object.entries(t.modes))if(DB[id]){const r=profiles[id],statsByPreset={...r.statsByPreset,[r.preset]:{...r.stats}},stats={...(statsByPreset[preset]||Object.fromEntries(Object.keys(r.stats).map(k=>[k,''])))};profiles[id]={...r,preset,statsPreset:preset,stats,statsByPreset};}return {...s,profiles};});this.notify('Recommended roles applied. Check the new loadouts before using recorded stats.');}
 teamPlanner(){const {store}=this.state,conflicts=this.conflicts(),bad=new Set(conflicts.map(([id])=>id));const library=DATA.teams.filter(t=>(!this.state.teamFilter||t.members.includes(this.state.teamFilter))&&(!this.state.teamQuery||JSON.stringify(t).toLowerCase().includes(this.state.teamQuery.toLowerCase())));return h('div',{className:'page-enter'},h('div',{className:'page-heading'},h('div',{className:'eyebrow'},'ASSEMBLE & CHECK'),h('h1',null,'Team planner'),h('p',null,'Start with a template or edit each member. Check shared characters, selected roles, modes and recorded ownership.')),
  this.undoBar(),h('div',{className:`allocation-status ${conflicts.length?'warn':'good'}`},h(Icon,{name:conflicts.length?'alert':'check',size:22}),h('div',null,h('strong',null,conflicts.length?`${conflicts.length} repeated character${conflicts.length>1?'s':''}`:'No shared characters'),h('p',null,conflicts.length?conflicts.map(([id,xs])=>`${nameOf(id)}: teams ${[...new Set(xs)].join(', ')}`).join(' · '):'Each slot is independent. The checks below explain its remaining requirements.')),h('button',{className:'text-button',onClick:()=>{this.snapshotUndo('Restore starting teams');this.mutate(s=>({...s,squads:[...DATA.defaultSquads],customSquads:[null,null,null,null]}));}},'Restore starting teams')),
  h('div',{className:'squad-grid'},Array.from({length:4},(_,i)=>{const t=squadAt(store,i),issues=teamIssues(t,store);return h('section',{className:`panel squad ${t?.members.some(id=>bad.has(id))?'has-conflict':''}`,key:i},
   h('div',{className:'section-heading tight'},h('h2',null,`Team ${i+1}`),h('button',{className:'icon-button','aria-label':`Clear team ${i+1}`,onClick:()=>this.assignTeam(i,'')},h(Icon,{name:'close',size:18}))),
   h(Field,{label:'Start from a template'},h('select',{'aria-label':`Team ${i+1} template`,value:t?.custom?'custom':store.squads[i]||'',onChange:e=>this.assignTeam(i,e.target.value)},h('option',{value:''},'Empty team'),t?.custom&&h('option',{value:'custom'},'Custom members'),DATA.teams.map(q=>h('option',{key:q.id,value:q.id},q.name)))),
   h('div',{className:'member-editors'},Array.from({length:3},(_,j)=>h(Field,{key:j,label:`Member ${j+1}`},h('select',{'aria-label':`Team ${i+1} member ${j+1}`,value:t?.slots[j]||'',onChange:e=>this.editMember(i,j,e.target.value)},h('option',{value:''},'Choose resonator'),h('optgroup',{label:'Reviewed profiles'},DATA.characters.map(c=>h('option',{key:c.id,value:c.id},c.name))),h('optgroup',{label:'Outside this guide'},Object.entries(DATA.outside).map(([id,name])=>h('option',{key:id,value:id},name))))))),
   t&&h('div',null,h('div',{className:'squad-members'},t.members.map((id,j)=>h('button',{key:id+j,className:bad.has(id)?'conflict-member':'',onClick:()=>DB[id]?this.nav('character',id):this.notify('Outside this guide; see the team source before investing.')},h(Avatar,{id,size:'sm'}),h('strong',null,nameOf(id)),DB[id]&&h('small',null,currentPreset(DB[id],store).label)))),h('p',null,t.note),
    h('div',{className:'team-checks'},issues.filter(x=>x.kind==='warning').map((x,j)=>h('div',{className:'team-issue warning',key:j},h(Icon,{name:'alert',size:16}),h('span',null,x.text))),!issues.some(x=>x.kind==='warning')&&h('div',{className:'team-issue good'},h(Icon,{name:'check',size:16}),'Selected roles pass the listed checks.'),issues.filter(x=>x.kind==='info').map((x,j)=>h('p',{className:'hint',key:`info${j}`},x.text))),
    Object.entries(t.modes).some(([id,p])=>DB[id]&&!modeMatches(id,currentPreset(DB[id],store).id,p))&&h('button',{className:'button subtle',onClick:()=>this.applyTeamModes(t)},'Apply template roles'),
    t.members.includes('jingran')&&t.members.includes('iuno')&&t.members.includes('shorekeeper')&&h('button',{className:'text-button',onClick:()=>{this.setState({rotationId:'jingran-core',step:0});this.nav('rotation');}},h(Icon,{name:'play',size:16}),'Practice team handoffs'))); })),
  h('div',{className:'section-heading'},h('h2',null,'Team library'),h('span',{className:'small muted'},`${library.length} templates`)),h('div',{className:'filter-bar'},h('div',{className:'search-field'},h(Icon,{name:'search',size:18}),h('input',{type:'search','aria-label':'Search team templates',placeholder:'Search a character or mode…',value:this.state.teamQuery,onInput:e=>this.setState({teamQuery:e.target.value})})),h('select',{'aria-label':'Filter teams by character',value:this.state.teamFilter,onChange:e=>this.setState({teamFilter:e.target.value})},h('option',{value:''},'Any resonator'),DATA.characters.map(c=>h('option',{key:c.id,value:c.id},c.name)))),h('div',{className:'team-library'},library.map(t=>this.teamCard(t))),!library.length&&h(Empty,{title:'No matching teams'},'Clear the search or choose another character.'),h('p',{className:'hint'},'Custom combinations receive basic role and mode checks. Weapon sharing, damage and survival still need testing in game.'));
 }
 rotationFor(c,p){const r=c.routes[p.id]||c.routes['*']||c.routes.hybrid||Object.values(c.routes)[0];return h('div',{className:'stack'},h('section',{className:'panel'},this.presetSelect(c),h('h2',null,'Practice the complete window'),h('ol',{className:'compact-route'},r.loop.map((a,i)=>h('li',{key:i},a))),r.opener&&h(Callout,{title:'Opener is different'},r.opener.join(' → ')),h('button',{className:'button primary',onClick:()=>{this.setState({rotationId:c.id,step:0,practicePhase:'loop'});this.nav('rotation');}},h(Icon,{name:'play',size:16}),'Open step-by-step practice')),h(Callout,{tone:'warn',title:'Keep this condition'},c.must),this.sourcesInline(c));}
 rotationSteps(){if(this.state.rotationId==='jingran-core')return DATA.rotation;const c=DB[this.state.rotationId];return c?routeFor(c,currentPreset(c,this.state.store),this.state.practicePhase):DATA.rotation;}
 rotationLab(){const steps=this.rotationSteps(),i=Math.min(this.state.step,steps.length-1),s=steps[i],c=DB[s.character],owner=DB[this.state.rotationId],p=owner?currentPreset(owner,this.state.store):null,r=owner?(owner.routes[p.id]||owner.routes['*']||owner.routes.hybrid||Object.values(owner.routes)[0]):null;return h('div',{className:'page-enter'},h('div',{className:'page-heading'},h('div',{className:'eyebrow'},'BUILD MUSCLE MEMORY'),h('h1',null,'Rotation lab'),h('p',null,'One action group at a time. Practice the opener, then repeat the full team cycle.')),
  h('div',{className:'rotation-controls'},h(Field,{label:'Practice route'},h('select',{'aria-label':'Choose practice rotation',value:this.state.rotationId,onChange:e=>this.setState({rotationId:e.target.value,step:0,practicePhase:'loop'})},h('option',{value:'jingran-core'},'Team: Shorekeeper → Iuno → Jingran'),DATA.characters.map(c=>h('option',{key:c.id,value:c.id},c.name)))),owner&&this.presetSelect(owner),r?.opener&&h(Field,{label:'Fight phase'},h('select',{'aria-label':'Practice phase',value:this.state.practicePhase,onChange:e=>this.setState({practicePhase:e.target.value,step:0})},h('option',{value:'opener'},'First rotation / opener'),h('option',{value:'loop'},'Repeat loop'))),h('button',{className:'button subtle',onClick:()=>this.setState({step:0})},h(Icon,{name:'reset',size:16}),'Restart')),
  h('div',{className:'rotation-layout'},h('aside',{className:'step-list','aria-label':'Rotation steps'},steps.map((x,j)=>h('button',{key:j,className:j===i?'active':j<i?'past':'','aria-current':j===i?'step':undefined,onClick:()=>this.setState({step:j})},h('span',null,String(j+1).padStart(2,'0')),h('div',null,h('small',null,nameOf(x.character)),h('strong',null,x.title))))),
   h('section',{className:`practice-card ${c.element.toLowerCase()}`},h('div',{className:'practice-top'},h(Avatar,{id:c.id,size:'lg'}),h('div',null,h('div',{className:'eyebrow'},c.name),h('span',{className:'muted'},`Step ${i+1} of ${steps.length}`)),h(Pill,null,owner?p.label:'S0 team teaching route')),h('h2',null,s.title),h('div',{className:'action-box','aria-live':'polite'},s.action),h('div',{className:'practice-why'},h('div',{className:'eyebrow'},'WHAT TO WATCH'),h('p',null,s.why)),h(Callout,{tone:'warn',title:'Keep this condition'},s.warning),h('div',{className:'practice-footer'},h('button',{className:'button subtle',disabled:i===0,onClick:()=>this.nextStep(-1)},h(Icon,{name:'back',size:16}),'Previous'),h('span',{className:'small muted'},`${i+1} / ${steps.length}`),h('button',{className:'button primary',onClick:()=>i===steps.length-1?this.setState({step:0,practicePhase:'loop'}):this.nextStep(1)},i===steps.length-1?'Repeat loop':'Next step',h(Icon,{name:i===steps.length-1?'reset':'arrow',size:16}))))),
  h('div',{className:'two-col'},h('section',{className:'panel'},h('h3',null,'If the second loop stalls'),h('p',null,owner?owner.guide.note:'Check Shorekeeper’s effective ER, Iuno’s completed Full Moon and the direct handoff to Jingran.'),h('p',{className:'hint'},'Repeat without an artificial energy refill. Confirm Concerto, Forte and the intended Outro before lowering ER.')),h('section',{className:'panel'},h('h3',null,'Your tested setup'),h('p',null,owner?`${p.label}. Recorded sequence: ${this.state.store.profiles[owner.id].sequence===''?'unknown':`S${this.state.store.profiles[owner.id].sequence}`}. Higher sequences and weapon ranks may shorten the route.`:'Jingran S0 with Iuno’s short hybrid route. The opener and higher-investment cancels can differ.'),this.sourcesInline(owner||c))),h('p',{className:'hint'},'Arrow keys move between steps. These teaching groups do not assign animation timers or simulate damage.'));
 }
 compare(){const base=super.compare(),grid=base.props.children.find(x=>x?.props?.className==='compare-grid');if(grid)for(const card of grid.props.children){const id=card.key||card.props?.key,c=DB[id];if(c){const s=statSummary(c,this.state.store);card.props.children.splice(card.props.children.length-2,0,h('div',{className:'compare-row'},h('span',null,'Recorded build'),h('strong',null,s.fresh?(s.er===null?'ER unrecorded':`${s.er.toFixed(1)}% effective ER`):'Stats belong to a previous role'),h('p',null,upgradeAction(c,this.state.store)),s.averageCrit!==null&&h('small',null,`${s.averageCrit.toFixed(3)}× average Crit multiplier`)));}}return base;}
 reference(){const base=super.reference();if(this.state.referenceTab==='data')base.props.children.push(h('section',{className:'panel'},h('h2',null,'Backup status'),h('p',null,this.state.store.lastBackup?`Last export: ${new Date(this.state.store.lastBackup).toLocaleString()}`:'No export recorded on this browser.'),h('p',{className:'hint'},'Backups include custom teams, recorded stats, notes, role checklists and your upgrade queue. Older version-2 backups remain supported.')));return base;}
 render(){const out=super.render();return out;}
}
// Export only in a CommonJS test context; the browser keeps application state private.
if(typeof module!=='undefined'&&module.exports)module.exports={DATA,DB,TEAM,makeDefault,cleanImport,statSummary,upgradeAction,squadAt,squadConflicts,teamIssues,routeFor,Workspace,KEY};
if(document.getElementById('root'))Preact.render(h(Workspace),document.getElementById('root'));


})();
