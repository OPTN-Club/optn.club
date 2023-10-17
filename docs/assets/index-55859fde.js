(function () { const n = document.createElement('link').relList; if (n && n.supports && n.supports('modulepreload')) return; for (const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a); new MutationObserver((a) => { for (const i of a) if (i.type === 'childList') for (const o of i.addedNodes)o.tagName === 'LINK' && o.rel === 'modulepreload' && t(o); }).observe(document, { childList: !0, subtree: !0 }); function r(a) { const i = {}; return a.integrity && (i.integrity = a.integrity), a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy), a.crossOrigin === 'use-credentials' ? i.credentials = 'include' : a.crossOrigin === 'anonymous' ? i.credentials = 'omit' : i.credentials = 'same-origin', i; } function t(a) { if (a.ep) return; a.ep = !0; const i = r(a); fetch(a.href, i); } }()); function ga(e, n) { const r = Object.create(null); const t = e.split(','); for (let a = 0; a < t.length; a++)r[t[a]] = !0; return n ? (a) => !!r[a.toLowerCase()] : (a) => !!r[a]; } function ka(e) { if (Z(e)) { const n = {}; for (let r = 0; r < e.length; r++) { const t = e[r]; const a = Ae(t) ? Ol(t) : ka(t); if (a) for (const i in a)n[i] = a[i]; } return n; } if (Ae(e)) return e; if (fe(e)) return e; } const Al = /;(?![^(]*\))/g; const Pl = /:([^]+)/; const Dl = /\/\*.*?\*\//gs; function Ol(e) { const n = {}; return e.replace(Dl, '').split(Al).forEach((r) => { if (r) { const t = r.split(Pl); t.length > 1 && (n[t[0].trim()] = t[1].trim()); } }), n; } function we(e) { let n = ''; if (Ae(e))n = e; else if (Z(e)) for (let r = 0; r < e.length; r++) { const t = we(e[r]); t && (n += `${t} `); } else if (fe(e)) for (const r in e)e[r] && (n += `${r} `); return n.trim(); } const bl = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly'; const Hl = ga(bl); function Zi(e) { return !!e || e === ''; } function Bl(e, n) { if (e.length !== n.length) return !1; let r = !0; for (let t = 0; r && t < e.length; t++)r = ht(e[t], n[t]); return r; } function ht(e, n) { if (e === n) return !0; let r = za(e); let t = za(n); if (r || t) return r && t ? e.getTime() === n.getTime() : !1; if (r = Pr(e), t = Pr(n), r || t) return e === n; if (r = Z(e), t = Z(n), r || t) return r && t ? Bl(e, n) : !1; if (r = fe(e), t = fe(n), r || t) { if (!r || !t) return !1; const a = Object.keys(e).length; const i = Object.keys(n).length; if (a !== i) return !1; for (const o in e) { const l = e.hasOwnProperty(o); const s = n.hasOwnProperty(o); if (l && !s || !l && s || !ht(e[o], n[o])) return !1; } } return String(e) === String(n); } function Cl(e, n) { return e.findIndex((r) => ht(r, n)); } const X = (e) => (Ae(e) ? e : e == null ? '' : Z(e) || fe(e) && (e.toString === Qi || !Q(e.toString)) ? JSON.stringify(e, Yi, 2) : String(e)); const Yi = (e, n) => (n && n.__v_isRef ? Yi(e, n.value) : rr(n) ? { [`Map(${n.size})`]: [...n.entries()].reduce((r, [t, a]) => (r[`${t} =>`] = a, r), {}) } : kt(n) ? { [`Set(${n.size})`]: [...n.values()] } : fe(n) && !Z(n) && !eo(n) ? String(n) : n); const he = {}; const nr = []; const tn = () => {}; const Vl = () => !1; const wl = /^on[^a-z]/; const gt = (e) => wl.test(e); const ya = (e) => e.startsWith('onUpdate:'); const Ne = Object.assign; const Ra = (e, n) => { const r = e.indexOf(n); r > -1 && e.splice(r, 1); }; const Ul = Object.prototype.hasOwnProperty; const ae = (e, n) => Ul.call(e, n); const Z = Array.isArray; const rr = (e) => Ur(e) === '[object Map]'; const kt = (e) => Ur(e) === '[object Set]'; const za = (e) => Ur(e) === '[object Date]'; const Q = (e) => typeof e === 'function'; const Ae = (e) => typeof e === 'string'; const Pr = (e) => typeof e === 'symbol'; const fe = (e) => e !== null && typeof e === 'object'; const qi = (e) => fe(e) && Q(e.then) && Q(e.catch); const Qi = Object.prototype.toString; const Ur = (e) => Qi.call(e); const _l = (e) => Ur(e).slice(8, -1); const eo = (e) => Ur(e) === '[object Object]'; const Ta = (e) => Ae(e) && e !== 'NaN' && e[0] !== '-' && `${parseInt(e, 10)}` === e; const Zr = ga(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'); const yt = (e) => { const n = Object.create(null); return (r) => n[r] || (n[r] = e(r)); }; const Nl = /-(\w)/g; const fn = yt((e) => e.replace(Nl, (n, r) => (r ? r.toUpperCase() : ''))); const El = /\B([A-Z])/g; const Kn = yt((e) => e.replace(El, '-$1').toLowerCase()); const Rt = yt((e) => e.charAt(0).toUpperCase() + e.slice(1)); const Vt = yt((e) => (e ? `on${Rt(e)}` : '')); const Dr = (e, n) => !Object.is(e, n); const Yr = (e, n) => { for (let r = 0; r < e.length; r++)e[r](n); }; const et = (e, n, r) => { Object.defineProperty(e, n, { configurable: !0, enumerable: !1, value: r }); }; const nt = (e) => { const n = parseFloat(e); return isNaN(n) ? e : n; }; let $a; const Il = () => $a || ($a = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : typeof global < 'u' ? global : {}); let Qe; class xl {
  constructor(n = !1) { this.detached = n, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Qe, !n && Qe && (this.index = (Qe.scopes || (Qe.scopes = [])).push(this) - 1); }

  get active() { return this._active; }

  run(n) { if (this._active) { const r = Qe; try { return Qe = this, n(); } finally { Qe = r; } } }

  on() { Qe = this; }

  off() { Qe = this.parent; }

  stop(n) { if (this._active) { let r; let t; for (r = 0, t = this.effects.length; r < t; r++) this.effects[r].stop(); for (r = 0, t = this.cleanups.length; r < t; r++) this.cleanups[r](); if (this.scopes) for (r = 0, t = this.scopes.length; r < t; r++) this.scopes[r].stop(!0); if (!this.detached && this.parent && !n) { const a = this.parent.scopes.pop(); a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index); } this.parent = void 0, this._active = !1; } }
} function Ll(e, n = Qe) { n && n.active && n.effects.push(e); } function Gl() { return Qe; } const Ma = (e) => { const n = new Set(e); return n.w = 0, n.n = 0, n; }; const no = (e) => (e.w & bn) > 0; const ro = (e) => (e.n & bn) > 0; const zl = ({ deps: e }) => { if (e.length) for (let n = 0; n < e.length; n++)e[n].w |= bn; }; const $l = (e) => { const { deps: n } = e; if (n.length) { let r = 0; for (let t = 0; t < n.length; t++) { const a = n[t]; no(a) && !ro(a) ? a.delete(e) : n[r++] = a, a.w &= ~bn, a.n &= ~bn; }n.length = r; } }; const Yt = new WeakMap(); let Rr = 0; let bn = 1; const qt = 30; let nn; const zn = Symbol(''); const Qt = Symbol(''); class va {
  constructor(n, r = null, t) { this.fn = n, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, Ll(this, t); }

  run() { if (!this.active) return this.fn(); let n = nn; const r = Dn; for (;n;) { if (n === this) return; n = n.parent; } try { return this.parent = nn, nn = this, Dn = !0, bn = 1 << ++Rr, Rr <= qt ? zl(this) : Xa(this), this.fn(); } finally { Rr <= qt && $l(this), bn = 1 << --Rr, nn = this.parent, Dn = r, this.parent = void 0, this.deferStop && this.stop(); } }

  stop() { nn === this ? this.deferStop = !0 : this.active && (Xa(this), this.onStop && this.onStop(), this.active = !1); }
} function Xa(e) { const { deps: n } = e; if (n.length) { for (let r = 0; r < n.length; r++)n[r].delete(e); n.length = 0; } } let Dn = !0; const to = []; function ur() { to.push(Dn), Dn = !1; } function mr() { const e = to.pop(); Dn = e === void 0 ? !0 : e; } function ze(e, n, r) { if (Dn && nn) { let t = Yt.get(e); t || Yt.set(e, t = new Map()); let a = t.get(r); a || t.set(r, a = Ma()), ao(a); } } function ao(e, n) { let r = !1; Rr <= qt ? ro(e) || (e.n |= bn, r = !no(e)) : r = !e.has(nn), r && (e.add(nn), nn.deps.push(e)); } function Mn(e, n, r, t, a, i) { const o = Yt.get(e); if (!o) return; let l = []; if (n === 'clear')l = [...o.values()]; else if (r === 'length' && Z(e)) { const s = Number(t); o.forEach((c, u) => { (u === 'length' || u >= s) && l.push(c); }); } else switch (r !== void 0 && l.push(o.get(r)), n) { case 'add': Z(e) ? Ta(r) && l.push(o.get('length')) : (l.push(o.get(zn)), rr(e) && l.push(o.get(Qt))); break; case 'delete': Z(e) || (l.push(o.get(zn)), rr(e) && l.push(o.get(Qt))); break; case 'set': rr(e) && l.push(o.get(zn)); break; } if (l.length === 1)l[0] && ea(l[0]); else { const s = []; for (const c of l)c && s.push(...c); ea(Ma(s)); } } function ea(e, n) { const r = Z(e) ? e : [...e]; for (const t of r)t.computed && ja(t); for (const t of r)t.computed || ja(t); } function ja(e, n) { (e !== nn || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run()); } const Xl = ga('__proto__,__v_isRef,__isVue'); const io = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== 'arguments' && e !== 'caller').map((e) => Symbol[e]).filter(Pr)); const jl = Sa(); const Kl = Sa(!1, !0); const Jl = Sa(!0); const Ka = Zl(); function Zl() { const e = {}; return ['includes', 'indexOf', 'lastIndexOf'].forEach((n) => { e[n] = function (...r) { const t = oe(this); for (let i = 0, o = this.length; i < o; i++)ze(t, 'get', `${i}`); const a = t[n](...r); return a === -1 || a === !1 ? t[n](...r.map(oe)) : a; }; }), ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((n) => { e[n] = function (...r) { ur(); const t = oe(this)[n].apply(this, r); return mr(), t; }; }), e; } function Yl(e) { const n = oe(this); return ze(n, 'has', e), n.hasOwnProperty(e); } function Sa(e = !1, n = !1) { return function (t, a, i) { if (a === '__v_isReactive') return !e; if (a === '__v_isReadonly') return e; if (a === '__v_isShallow') return n; if (a === '__v_raw' && i === (e ? n ? ms : co : n ? po : so).get(t)) return t; const o = Z(t); if (!e) { if (o && ae(Ka, a)) return Reflect.get(Ka, a, i); if (a === 'hasOwnProperty') return Yl; } const l = Reflect.get(t, a, i); return (Pr(a) ? io.has(a) : Xl(a)) || (e || ze(t, 'get', a), n) ? l : be(l) ? o && Ta(a) ? l : l.value : fe(l) ? e ? uo(l) : Pe(l) : l; }; } const ql = oo(); const Ql = oo(!0); function oo(e = !1) { return function (r, t, a, i) { let o = r[t]; if (or(o) && be(o) && !be(a)) return !1; if (!e && (!rt(a) && !or(a) && (o = oe(o), a = oe(a)), !Z(r) && be(o) && !be(a))) return o.value = a, !0; const l = Z(r) && Ta(t) ? Number(t) < r.length : ae(r, t); const s = Reflect.set(r, t, a, i); return r === oe(i) && (l ? Dr(a, o) && Mn(r, 'set', t, a) : Mn(r, 'add', t, a)), s; }; } function es(e, n) { const r = ae(e, n); e[n]; const t = Reflect.deleteProperty(e, n); return t && r && Mn(e, 'delete', n, void 0), t; } function ns(e, n) { const r = Reflect.has(e, n); return (!Pr(n) || !io.has(n)) && ze(e, 'has', n), r; } function rs(e) { return ze(e, 'iterate', Z(e) ? 'length' : zn), Reflect.ownKeys(e); } const lo = {
  get: jl, set: ql, deleteProperty: es, has: ns, ownKeys: rs,
}; const ts = { get: Jl, set(e, n) { return !0; }, deleteProperty(e, n) { return !0; } }; const as = { ...lo, get: Kl, set: Ql }; const Fa = (e) => e; const Tt = (e) => Reflect.getPrototypeOf(e); function xr(e, n, r = !1, t = !1) { e = e.__v_raw; const a = oe(e); const i = oe(n); r || (n !== i && ze(a, 'get', n), ze(a, 'get', i)); const { has: o } = Tt(a); const l = t ? Fa : r ? Pa : Or; if (o.call(a, n)) return l(e.get(n)); if (o.call(a, i)) return l(e.get(i)); e !== a && e.get(n); } function Lr(e, n = !1) { const r = this.__v_raw; const t = oe(r); const a = oe(e); return n || (e !== a && ze(t, 'has', e), ze(t, 'has', a)), e === a ? r.has(e) : r.has(e) || r.has(a); } function Gr(e, n = !1) { return e = e.__v_raw, !n && ze(oe(e), 'iterate', zn), Reflect.get(e, 'size', e); } function Ja(e) { e = oe(e); const n = oe(this); return Tt(n).has.call(n, e) || (n.add(e), Mn(n, 'add', e, e)), this; } function Za(e, n) { n = oe(n); const r = oe(this); const { has: t, get: a } = Tt(r); let i = t.call(r, e); i || (e = oe(e), i = t.call(r, e)); const o = a.call(r, e); return r.set(e, n), i ? Dr(n, o) && Mn(r, 'set', e, n) : Mn(r, 'add', e, n), this; } function Ya(e) { const n = oe(this); const { has: r, get: t } = Tt(n); let a = r.call(n, e); a || (e = oe(e), a = r.call(n, e)), t && t.call(n, e); const i = n.delete(e); return a && Mn(n, 'delete', e, void 0), i; } function qa() { const e = oe(this); const n = e.size !== 0; const r = e.clear(); return n && Mn(e, 'clear', void 0, void 0), r; } function zr(e, n) { return function (t, a) { const i = this; const o = i.__v_raw; const l = oe(o); const s = n ? Fa : e ? Pa : Or; return !e && ze(l, 'iterate', zn), o.forEach((c, u) => t.call(a, s(c), s(u), i)); }; } function $r(e, n, r) { return function (...t) { const a = this.__v_raw; const i = oe(a); const o = rr(i); const l = e === 'entries' || e === Symbol.iterator && o; const s = e === 'keys' && o; const c = a[e](...t); const u = r ? Fa : n ? Pa : Or; return !n && ze(i, 'iterate', s ? Qt : zn), { next() { const { value: f, done: h } = c.next(); return h ? { value: f, done: h } : { value: l ? [u(f[0]), u(f[1])] : u(f), done: h }; }, [Symbol.iterator]() { return this; } }; }; } function Fn(e) { return function (...n) { return e === 'delete' ? !1 : this; }; } function is() {
  const e = {
    get(i) { return xr(this, i); }, get size() { return Gr(this); }, has: Lr, add: Ja, set: Za, delete: Ya, clear: qa, forEach: zr(!1, !1),
  }; const n = {
    get(i) { return xr(this, i, !1, !0); }, get size() { return Gr(this); }, has: Lr, add: Ja, set: Za, delete: Ya, clear: qa, forEach: zr(!1, !0),
  }; const r = {
    get(i) { return xr(this, i, !0); }, get size() { return Gr(this, !0); }, has(i) { return Lr.call(this, i, !0); }, add: Fn('add'), set: Fn('set'), delete: Fn('delete'), clear: Fn('clear'), forEach: zr(!0, !1),
  }; const t = {
    get(i) { return xr(this, i, !0, !0); }, get size() { return Gr(this, !0); }, has(i) { return Lr.call(this, i, !0); }, add: Fn('add'), set: Fn('set'), delete: Fn('delete'), clear: Fn('clear'), forEach: zr(!0, !0),
  }; return ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => { e[i] = $r(i, !1, !1), r[i] = $r(i, !0, !1), n[i] = $r(i, !1, !0), t[i] = $r(i, !0, !0); }), [e, r, n, t];
} const [os, ls, ss, ds] = is(); function Wa(e, n) { const r = n ? e ? ds : ss : e ? ls : os; return (t, a, i) => (a === '__v_isReactive' ? !e : a === '__v_isReadonly' ? e : a === '__v_raw' ? t : Reflect.get(ae(r, a) && a in t ? r : t, a, i)); } const ps = { get: Wa(!1, !1) }; const cs = { get: Wa(!1, !0) }; const us = { get: Wa(!0, !1) }; const so = new WeakMap(); const po = new WeakMap(); const co = new WeakMap(); const ms = new WeakMap(); function fs(e) { switch (e) { case 'Object': case 'Array': return 1; case 'Map': case 'Set': case 'WeakMap': case 'WeakSet': return 2; default: return 0; } } function hs(e) { return e.__v_skip || !Object.isExtensible(e) ? 0 : fs(_l(e)); } function Pe(e) { return or(e) ? e : Aa(e, !1, lo, ps, so); } function gs(e) { return Aa(e, !1, as, cs, po); } function uo(e) { return Aa(e, !0, ts, us, co); } function Aa(e, n, r, t, a) { if (!fe(e) || e.__v_raw && !(n && e.__v_isReactive)) return e; const i = a.get(e); if (i) return i; const o = hs(e); if (o === 0) return e; const l = new Proxy(e, o === 2 ? t : r); return a.set(e, l), l; } function tr(e) { return or(e) ? tr(e.__v_raw) : !!(e && e.__v_isReactive); } function or(e) { return !!(e && e.__v_isReadonly); } function rt(e) { return !!(e && e.__v_isShallow); } function mo(e) { return tr(e) || or(e); } function oe(e) { const n = e && e.__v_raw; return n ? oe(n) : e; } function fo(e) { return et(e, '__v_skip', !0), e; } const Or = (e) => (fe(e) ? Pe(e) : e); const Pa = (e) => (fe(e) ? uo(e) : e); function ho(e) { Dn && nn && (e = oe(e), ao(e.dep || (e.dep = Ma()))); } function go(e, n) { e = oe(e); const r = e.dep; r && ea(r); } function be(e) { return !!(e && e.__v_isRef === !0); } function Rn(e) { return ko(e, !1); } function ks(e) { return ko(e, !0); } function ko(e, n) { return be(e) ? e : new ys(e, n); } class ys {
  constructor(n, r) { this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? n : oe(n), this._value = r ? n : Or(n); }

  get value() { return ho(this), this._value; }

  set value(n) { const r = this.__v_isShallow || rt(n) || or(n); n = r ? n : oe(n), Dr(n, this._rawValue) && (this._rawValue = n, this._value = r ? n : Or(n), go(this)); }
} function p(e) { return be(e) ? e.value : e; } const Rs = { get: (e, n, r) => p(Reflect.get(e, n, r)), set: (e, n, r, t) => { const a = e[n]; return be(a) && !be(r) ? (a.value = r, !0) : Reflect.set(e, n, r, t); } }; function yo(e) { return tr(e) ? e : new Proxy(e, Rs); } let Ro; class Ts {
  constructor(n, r, t, a) { this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[Ro] = !1, this._dirty = !0, this.effect = new va(n, () => { this._dirty || (this._dirty = !0, go(this)); }), this.effect.computed = this, this.effect.active = this._cacheable = !a, this.__v_isReadonly = t; }

  get value() { const n = oe(this); return ho(n), (n._dirty || !n._cacheable) && (n._dirty = !1, n._value = n.effect.run()), n._value; }

  set value(n) { this._setter(n); }
}Ro = '__v_isReadonly'; function Ms(e, n, r = !1) { let t; let a; const i = Q(e); return i ? (t = e, a = tn) : (t = e.get, a = e.set), new Ts(t, a, i || !a, r); } function On(e, n, r, t) { let a; try { a = t ? e(...t) : e(); } catch (i) { Mt(i, n, r); } return a; } function an(e, n, r, t) { if (Q(e)) { const i = On(e, n, r, t); return i && qi(i) && i.catch((o) => { Mt(o, n, r); }), i; } const a = []; for (let i = 0; i < e.length; i++)a.push(an(e[i], n, r, t)); return a; } function Mt(e, n, r, t = !0) { const a = n ? n.vnode : null; if (n) { let i = n.parent; const o = n.proxy; const l = r; for (;i;) { const c = i.ec; if (c) { for (let u = 0; u < c.length; u++) if (c[u](e, o, l) === !1) return; }i = i.parent; } const s = n.appContext.config.errorHandler; if (s) { On(s, null, 10, [e, o, l]); return; } }vs(e, r, a, t); } function vs(e, n, r, t = !0) { console.error(e); } let br = !1; let na = !1; const Ce = []; let mn = 0; const ar = []; let Tn = null; let In = 0; const To = Promise.resolve(); let Da = null; function Mo(e) { const n = Da || To; return e ? n.then(this ? e.bind(this) : e) : n; } function Ss(e) { let n = mn + 1; let r = Ce.length; for (;n < r;) { const t = n + r >>> 1; Hr(Ce[t]) < e ? n = t + 1 : r = t; } return n; } function Oa(e) { (!Ce.length || !Ce.includes(e, br && e.allowRecurse ? mn + 1 : mn)) && (e.id == null ? Ce.push(e) : Ce.splice(Ss(e.id), 0, e), vo()); } function vo() { !br && !na && (na = !0, Da = To.then(Fo)); } function Fs(e) { const n = Ce.indexOf(e); n > mn && Ce.splice(n, 1); } function Ws(e) { Z(e) ? ar.push(...e) : (!Tn || !Tn.includes(e, e.allowRecurse ? In + 1 : In)) && ar.push(e), vo(); } function Qa(e, n = br ? mn + 1 : 0) { for (;n < Ce.length; n++) { const r = Ce[n]; r && r.pre && (Ce.splice(n, 1), n--, r()); } } function So(e) { if (ar.length) { const n = [...new Set(ar)]; if (ar.length = 0, Tn) { Tn.push(...n); return; } for (Tn = n, Tn.sort((r, t) => Hr(r) - Hr(t)), In = 0; In < Tn.length; In++)Tn[In](); Tn = null, In = 0; } } const Hr = (e) => (e.id == null ? 1 / 0 : e.id); const As = (e, n) => { const r = Hr(e) - Hr(n); if (r === 0) { if (e.pre && !n.pre) return -1; if (n.pre && !e.pre) return 1; } return r; }; function Fo(e) { na = !1, br = !0, Ce.sort(As); const n = tn; try { for (mn = 0; mn < Ce.length; mn++) { const r = Ce[mn]; r && r.active !== !1 && On(r, null, 14); } } finally { mn = 0, Ce.length = 0, So(), br = !1, Da = null, (Ce.length || ar.length) && Fo(); } } function Ps(e, n, ...r) { if (e.isUnmounted) return; const t = e.vnode.props || he; let a = r; const i = n.startsWith('update:'); const o = i && n.slice(7); if (o && o in t) { const u = `${o === 'modelValue' ? 'model' : o}Modifiers`; const { number: f, trim: h } = t[u] || he; h && (a = r.map((y) => (Ae(y) ? y.trim() : y))), f && (a = r.map(nt)); } let l; let s = t[l = Vt(n)] || t[l = Vt(fn(n))]; !s && i && (s = t[l = Vt(Kn(n))]), s && an(s, e, 6, a); const c = t[`${l}Once`]; if (c) { if (!e.emitted)e.emitted = {}; else if (e.emitted[l]) return; e.emitted[l] = !0, an(c, e, 6, a); } } function Wo(e, n, r = !1) { const t = n.emitsCache; const a = t.get(e); if (a !== void 0) return a; const i = e.emits; const o = {}; let l = !1; if (!Q(e)) { const s = (c) => { const u = Wo(c, n, !0); u && (l = !0, Ne(o, u)); }; !r && n.mixins.length && n.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s); } return !i && !l ? (fe(e) && t.set(e, null), null) : (Z(i) ? i.forEach((s) => o[s] = null) : Ne(o, i), fe(e) && t.set(e, o), o); } function vt(e, n) { return !e || !gt(n) ? !1 : (n = n.slice(2).replace(/Once$/, ''), ae(e, n[0].toLowerCase() + n.slice(1)) || ae(e, Kn(n)) || ae(e, n)); } let Ve = null; let St = null; function tt(e) { const n = Ve; return Ve = e, St = e && e.type.__scopeId || null, n; } function Ao(e) { St = e; } function Po() { St = null; } function ie(e, n = Ve, r) { if (!n || e._n) return e; const t = (...a) => { t._d && si(-1); const i = tt(n); let o; try { o = e(...a); } finally { tt(i), t._d && si(1); } return o; }; return t._n = !0, t._c = !0, t._d = !0, t; } function wt(e) {
  const {
    type: n, vnode: r, proxy: t, withProxy: a, props: i, propsOptions: [o], slots: l, attrs: s, emit: c, render: u, renderCache: f, data: h, setupState: y, ctx: F, inheritAttrs: O,
  } = e; let L; let A; const V = tt(e); try { if (r.shapeFlag & 4) { const _ = a || t; L = un(u.call(_, _, f, i, y, h, F)), A = s; } else { const _ = n; L = un(_.length > 1 ? _(i, { attrs: s, slots: l, emit: c }) : _(i, null)), A = n.props ? s : Ds(s); } } catch (_) { Sr.length = 0, Mt(_, e, 1), L = k(Bn); } let b = L; if (A && O !== !1) { const _ = Object.keys(A); const { shapeFlag: N } = b; _.length && N & 7 && (o && _.some(ya) && (A = Os(A, o)), b = lr(b, A)); } return r.dirs && (b = lr(b), b.dirs = b.dirs ? b.dirs.concat(r.dirs) : r.dirs), r.transition && (b.transition = r.transition), L = b, tt(V), L;
} const Ds = (e) => { let n; for (const r in e)(r === 'class' || r === 'style' || gt(r)) && ((n || (n = {}))[r] = e[r]); return n; }; const Os = (e, n) => { const r = {}; for (const t in e)(!ya(t) || !(t.slice(9) in n)) && (r[t] = e[t]); return r; }; function bs(e, n, r) { const { props: t, children: a, component: i } = e; const { props: o, children: l, patchFlag: s } = n; const c = i.emitsOptions; if (n.dirs || n.transition) return !0; if (r && s >= 0) { if (s & 1024) return !0; if (s & 16) return t ? ei(t, o, c) : !!o; if (s & 8) { const u = n.dynamicProps; for (let f = 0; f < u.length; f++) { const h = u[f]; if (o[h] !== t[h] && !vt(c, h)) return !0; } } } else return (a || l) && (!l || !l.$stable) ? !0 : t === o ? !1 : t ? o ? ei(t, o, c) : !0 : !!o; return !1; } function ei(e, n, r) { const t = Object.keys(n); if (t.length !== Object.keys(e).length) return !0; for (let a = 0; a < t.length; a++) { const i = t[a]; if (n[i] !== e[i] && !vt(r, i)) return !0; } return !1; } function Hs({ vnode: e, parent: n }, r) { for (;n && n.subTree === e;)(e = n.vnode).el = r, n = n.parent; } const Bs = (e) => e.__isSuspense; function Cs(e, n) { n && n.pendingBranch ? Z(e) ? n.effects.push(...e) : n.effects.push(e) : Ws(e); } function Tr(e, n) { if (ve) { let r = ve.provides; const t = ve.parent && ve.parent.provides; t === r && (r = ve.provides = Object.create(t)), r[e] = n; } } function on(e, n, r = !1) { const t = ve || Ve; if (t) { const a = t.parent == null ? t.vnode.appContext && t.vnode.appContext.provides : t.parent.provides; if (a && e in a) return a[e]; if (arguments.length > 1) return r && Q(n) ? n.call(t.proxy) : n; } } const Xr = {}; function pe(e, n, r) { return Do(e, n, r); } function Do(e, n, {
  immediate: r, deep: t, flush: a, onTrack: i, onTrigger: o,
} = he) { const l = Gl() === (ve == null ? void 0 : ve.scope) ? ve : null; let s; let c = !1; let u = !1; if (be(e) ? (s = () => e.value, c = rt(e)) : tr(e) ? (s = () => e, t = !0) : Z(e) ? (u = !0, c = e.some((b) => tr(b) || rt(b)), s = () => e.map((b) => { if (be(b)) return b.value; if (tr(b)) return Gn(b); if (Q(b)) return On(b, l, 2); })) : Q(e) ? n ? s = () => On(e, l, 2) : s = () => { if (!(l && l.isUnmounted)) return f && f(), an(e, l, 3, [h]); } : s = tn, n && t) { const b = s; s = () => Gn(b()); } let f; let h = (b) => { f = A.onStop = () => { On(b, l, 4); }; }; let y; if (Cr) if (h = tn, n ? r && an(n, l, 3, [s(), u ? [] : void 0, h]) : s(), a === 'sync') { const b = Fd(); y = b.__watcherHandles || (b.__watcherHandles = []); } else return tn; let F = u ? new Array(e.length).fill(Xr) : Xr; const O = () => { if (A.active) if (n) { const b = A.run(); (t || c || (u ? b.some((_, N) => Dr(_, F[N])) : Dr(b, F))) && (f && f(), an(n, l, 3, [b, F === Xr ? void 0 : u && F[0] === Xr ? [] : F, h]), F = b); } else A.run(); }; O.allowRecurse = !!n; let L; a === 'sync' ? L = O : a === 'post' ? L = () => Ie(O, l && l.suspense) : (O.pre = !0, l && (O.id = l.uid), L = () => Oa(O)); const A = new va(s, L); n ? r ? O() : F = A.run() : a === 'post' ? Ie(A.run.bind(A), l && l.suspense) : A.run(); const V = () => { A.stop(), l && l.scope && Ra(l.scope.effects, A); }; return y && y.push(V), V; } function Vs(e, n, r) { const t = this.proxy; const a = Ae(e) ? e.includes('.') ? Oo(t, e) : () => t[e] : e.bind(t, t); let i; Q(n) ? i = n : (i = n.handler, r = n); const o = ve; sr(this); const l = Do(a, i.bind(t), r); return o ? sr(o) : $n(), l; } function Oo(e, n) { const r = n.split('.'); return () => { let t = e; for (let a = 0; a < r.length && t; a++)t = t[r[a]]; return t; }; } function Gn(e, n) { if (!fe(e) || e.__v_skip || (n = n || new Set(), n.has(e))) return e; if (n.add(e), be(e))Gn(e.value, n); else if (Z(e)) for (let r = 0; r < e.length; r++)Gn(e[r], n); else if (kt(e) || rr(e))e.forEach((r) => { Gn(r, n); }); else if (eo(e)) for (const r in e)Gn(e[r], n); return e; } function ne(e) { return Q(e) ? { setup: e, name: e.name } : e; } const Mr = (e) => !!e.type.__asyncLoader; const bo = (e) => e.type.__isKeepAlive; function ws(e, n) { Ho(e, 'a', n); } function Us(e, n) { Ho(e, 'da', n); } function Ho(e, n, r = ve) { const t = e.__wdc || (e.__wdc = () => { let a = r; for (;a;) { if (a.isDeactivated) return; a = a.parent; } return e(); }); if (Ft(n, t, r), r) { let a = r.parent; for (;a && a.parent;)bo(a.parent.vnode) && _s(t, n, r, a), a = a.parent; } } function _s(e, n, r, t) { const a = Ft(n, e, t, !0); Bo(() => { Ra(t[n], a); }, r); } function Ft(e, n, r = ve, t = !1) { if (r) { const a = r[e] || (r[e] = []); const i = n.__weh || (n.__weh = (...o) => { if (r.isUnmounted) return; ur(), sr(r); const l = an(n, r, e, o); return $n(), mr(), l; }); return t ? a.unshift(i) : a.push(i), i; } } const vn = (e) => (n, r = ve) => (!Cr || e === 'sp') && Ft(e, (...t) => n(...t), r); const Ns = vn('bm'); const Es = vn('m'); const Is = vn('bu'); const xs = vn('u'); const ba = vn('bum'); const Bo = vn('um'); const Ls = vn('sp'); const Gs = vn('rtg'); const zs = vn('rtc'); function $s(e, n = ve) { Ft('ec', e, n); } function jn(e, n) {
  const r = Ve; if (r === null) return e; const t = Ot(r) || r.proxy; const a = e.dirs || (e.dirs = []); for (let i = 0; i < n.length; i++) {
    let [o, l, s, c = he] = n[i]; o && (Q(o) && (o = { mounted: o, updated: o }), o.deep && Gn(l), a.push({
      dir: o, instance: t, value: l, oldValue: void 0, arg: s, modifiers: c,
    }));
  } return e;
} function Un(e, n, r, t) { const a = e.dirs; const i = n && n.dirs; for (let o = 0; o < a.length; o++) { const l = a[o]; i && (l.oldValue = i[o].value); const s = l.dir[t]; s && (ur(), an(s, r, 8, [e.el, l, e, n]), mr()); } } const Co = 'components'; function Ha(e, n) { return js(Co, e, !0, n) || e; } const Xs = Symbol(); function js(e, n, r = !0, t = !1) { const a = Ve || ve; if (a) { const i = a.type; if (e === Co) { const l = Md(i, !1); if (l && (l === n || l === fn(n) || l === Rt(fn(n)))) return i; } const o = ni(a[e] || i[e], n) || ni(a.appContext[e], n); return !o && t ? i : o; } } function ni(e, n) { return e && (e[n] || e[fn(n)] || e[Rt(fn(n))]); } function Hn(e, n, r, t) { let a; const i = r && r[t]; if (Z(e) || Ae(e)) { a = new Array(e.length); for (let o = 0, l = e.length; o < l; o++)a[o] = n(e[o], o, void 0, i && i[o]); } else if (typeof e === 'number') { a = new Array(e); for (let o = 0; o < e; o++)a[o] = n(o + 1, o, void 0, i && i[o]); } else if (fe(e)) if (e[Symbol.iterator])a = Array.from(e, (o, l) => n(o, l, void 0, i && i[l])); else { const o = Object.keys(e); a = new Array(o.length); for (let l = 0, s = o.length; l < s; l++) { const c = o[l]; a[l] = n(e[c], c, l, i && i[l]); } } else a = []; return r && (r[t] = a), a; } function He(e, n, r = {}, t, a) { if (Ve.isCE || Ve.parent && Mr(Ve.parent) && Ve.parent.isCE) return n !== 'default' && (r.name = n), k('slot', r, t && t()); const i = e[n]; i && i._c && (i._d = !1), U(); const o = i && Vo(i(r)); const l = _e(ke, { key: r.key || o && o.key || `_${n}` }, o || (t ? t() : []), o && e._ === 1 ? 64 : -2); return !a && l.scopeId && (l.slotScopeIds = [`${l.scopeId}-s`]), i && i._c && (i._d = !0), l; } function Vo(e) { return e.some((n) => (it(n) ? !(n.type === Bn || n.type === ke && !Vo(n.children)) : !0)) ? e : null; } const ra = (e) => (e ? $o(e) ? Ot(e) || e.proxy : ra(e.parent) : null); const vr = Ne(Object.create(null), {
  $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => ra(e.parent), $root: (e) => ra(e.root), $emit: (e) => e.emit, $options: (e) => Ba(e), $forceUpdate: (e) => e.f || (e.f = () => Oa(e.update)), $nextTick: (e) => e.n || (e.n = Mo.bind(e.proxy)), $watch: (e) => Vs.bind(e),
}); const Ut = (e, n) => e !== he && !e.__isScriptSetup && ae(e, n); const Ks = {
  get({ _: e }, n) {
    const {
      ctx: r, setupState: t, data: a, props: i, accessCache: o, type: l, appContext: s,
    } = e; let c; if (n[0] !== '$') { const y = o[n]; if (y !== void 0) switch (y) { case 1: return t[n]; case 2: return a[n]; case 4: return r[n]; case 3: return i[n]; } else { if (Ut(t, n)) return o[n] = 1, t[n]; if (a !== he && ae(a, n)) return o[n] = 2, a[n]; if ((c = e.propsOptions[0]) && ae(c, n)) return o[n] = 3, i[n]; if (r !== he && ae(r, n)) return o[n] = 4, r[n]; ta && (o[n] = 0); } } const u = vr[n]; let f; let h; if (u) return n === '$attrs' && ze(e, 'get', n), u(e); if ((f = l.__cssModules) && (f = f[n])) return f; if (r !== he && ae(r, n)) return o[n] = 4, r[n]; if (h = s.config.globalProperties, ae(h, n)) return h[n];
  },
  set({ _: e }, n, r) { const { data: t, setupState: a, ctx: i } = e; return Ut(a, n) ? (a[n] = r, !0) : t !== he && ae(t, n) ? (t[n] = r, !0) : ae(e.props, n) || n[0] === '$' && n.slice(1) in e ? !1 : (i[n] = r, !0); },
  has({
    _: {
      data: e, setupState: n, accessCache: r, ctx: t, appContext: a, propsOptions: i,
    },
  }, o) { let l; return !!r[o] || e !== he && ae(e, o) || Ut(n, o) || (l = i[0]) && ae(l, o) || ae(t, o) || ae(vr, o) || ae(a.config.globalProperties, o); },
  defineProperty(e, n, r) { return r.get != null ? e._.accessCache[n] = 0 : ae(r, 'value') && this.set(e, n, r.value, null), Reflect.defineProperty(e, n, r); },
}; let ta = !0; function Js(e) {
  const n = Ba(e); const r = e.proxy; const t = e.ctx; ta = !1, n.beforeCreate && ri(n.beforeCreate, e, 'bc'); const {
    data: a, computed: i, methods: o, watch: l, provide: s, inject: c, created: u, beforeMount: f, mounted: h, beforeUpdate: y, updated: F, activated: O, deactivated: L, beforeDestroy: A, beforeUnmount: V, destroyed: b, unmounted: _, render: N, renderTracked: M, renderTriggered: E, errorCaptured: x, serverPrefetch: Jn, expose: sn, inheritAttrs: Sn, components: dn, directives: Zn, filters: Vn,
  } = n; if (c && Zs(c, t, null, e.appContext.config.unwrapInjectedRef), o) for (const ce in o) { const se = o[ce]; Q(se) && (t[ce] = se.bind(r)); } if (a) { const ce = a.call(r, r); fe(ce) && (e.data = Pe(ce)); } if (ta = !0, i) {
    for (const ce in i) {
      const se = i[ce]; const Ze = Q(se) ? se.bind(r, r) : Q(se.get) ? se.get.bind(r, r) : tn; const wn = !Q(se) && Q(se.set) ? se.set.bind(r) : tn; const Ye = J({ get: Ze, set: wn }); Object.defineProperty(t, ce, {
        enumerable: !0, configurable: !0, get: () => Ye.value, set: (Ee) => Ye.value = Ee,
      });
    }
  } if (l) for (const ce in l)wo(l[ce], t, r, ce); if (s) { const ce = Q(s) ? s.call(r) : s; Reflect.ownKeys(ce).forEach((se) => { Tr(se, ce[se]); }); }u && ri(u, e, 'c'); function Te(ce, se) { Z(se) ? se.forEach((Ze) => ce(Ze.bind(r))) : se && ce(se.bind(r)); } if (Te(Ns, f), Te(Es, h), Te(Is, y), Te(xs, F), Te(ws, O), Te(Us, L), Te($s, x), Te(zs, M), Te(Gs, E), Te(ba, V), Te(Bo, _), Te(Ls, Jn), Z(sn)) if (sn.length) { const ce = e.exposed || (e.exposed = {}); sn.forEach((se) => { Object.defineProperty(ce, se, { get: () => r[se], set: (Ze) => r[se] = Ze }); }); } else e.exposed || (e.exposed = {}); N && e.render === tn && (e.render = N), Sn != null && (e.inheritAttrs = Sn), dn && (e.components = dn), Zn && (e.directives = Zn);
} function Zs(e, n, r = tn, t = !1) {
  Z(e) && (e = aa(e)); for (const a in e) {
    const i = e[a]; let o; fe(i) ? 'default' in i ? o = on(i.from || a, i.default, !0) : o = on(i.from || a) : o = on(i), be(o) && t ? Object.defineProperty(n, a, {
      enumerable: !0, configurable: !0, get: () => o.value, set: (l) => o.value = l,
    }) : n[a] = o;
  }
} function ri(e, n, r) { an(Z(e) ? e.map((t) => t.bind(n.proxy)) : e.bind(n.proxy), n, r); } function wo(e, n, r, t) { const a = t.includes('.') ? Oo(r, t) : () => r[t]; if (Ae(e)) { const i = n[e]; Q(i) && pe(a, i); } else if (Q(e))pe(a, e.bind(r)); else if (fe(e)) if (Z(e))e.forEach((i) => wo(i, n, r, t)); else { const i = Q(e.handler) ? e.handler.bind(r) : n[e.handler]; Q(i) && pe(a, i, e); } } function Ba(e) { const n = e.type; const { mixins: r, extends: t } = n; const { mixins: a, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext; const l = i.get(n); let s; return l ? s = l : !a.length && !r && !t ? s = n : (s = {}, a.length && a.forEach((c) => at(s, c, o, !0)), at(s, n, o)), fe(n) && i.set(n, s), s; } function at(e, n, r, t = !1) { const { mixins: a, extends: i } = n; i && at(e, i, r, !0), a && a.forEach((o) => at(e, o, r, !0)); for (const o in n) if (!(t && o === 'expose')) { const l = Ys[o] || r && r[o]; e[o] = l ? l(e[o], n[o]) : n[o]; } return e; } const Ys = {
  data: ti, props: En, emits: En, methods: En, computed: En, beforeCreate: Ue, created: Ue, beforeMount: Ue, mounted: Ue, beforeUpdate: Ue, updated: Ue, beforeDestroy: Ue, beforeUnmount: Ue, destroyed: Ue, unmounted: Ue, activated: Ue, deactivated: Ue, errorCaptured: Ue, serverPrefetch: Ue, components: En, directives: En, watch: Qs, provide: ti, inject: qs,
}; function ti(e, n) { return n ? e ? function () { return Ne(Q(e) ? e.call(this, this) : e, Q(n) ? n.call(this, this) : n); } : n : e; } function qs(e, n) { return En(aa(e), aa(n)); } function aa(e) { if (Z(e)) { const n = {}; for (let r = 0; r < e.length; r++)n[e[r]] = e[r]; return n; } return e; } function Ue(e, n) { return e ? [...new Set([].concat(e, n))] : n; } function En(e, n) { return e ? Ne(Ne(Object.create(null), e), n) : n; } function Qs(e, n) { if (!e) return n; if (!n) return e; const r = Ne(Object.create(null), e); for (const t in n)r[t] = Ue(e[t], n[t]); return r; } function ed(e, n, r, t = !1) { const a = {}; const i = {}; et(i, At, 1), e.propsDefaults = Object.create(null), Uo(e, n, a, i); for (const o in e.propsOptions[0])o in a || (a[o] = void 0); r ? e.props = t ? a : gs(a) : e.type.props ? e.props = a : e.props = i, e.attrs = i; } function nd(e, n, r, t) { const { props: a, attrs: i, vnode: { patchFlag: o } } = e; const l = oe(a); const [s] = e.propsOptions; let c = !1; if ((t || o > 0) && !(o & 16)) { if (o & 8) { const u = e.vnode.dynamicProps; for (let f = 0; f < u.length; f++) { const h = u[f]; if (vt(e.emitsOptions, h)) continue; const y = n[h]; if (s) if (ae(i, h))y !== i[h] && (i[h] = y, c = !0); else { const F = fn(h); a[F] = ia(s, l, F, y, e, !1); } else y !== i[h] && (i[h] = y, c = !0); } } } else { Uo(e, n, a, i) && (c = !0); let u; for (const f in l)(!n || !ae(n, f) && ((u = Kn(f)) === f || !ae(n, u))) && (s ? r && (r[f] !== void 0 || r[u] !== void 0) && (a[f] = ia(s, l, f, void 0, e, !0)) : delete a[f]); if (i !== l) for (const f in i)(!n || !ae(n, f)) && (delete i[f], c = !0); }c && Mn(e, 'set', '$attrs'); } function Uo(e, n, r, t) { const [a, i] = e.propsOptions; let o = !1; let l; if (n) for (const s in n) { if (Zr(s)) continue; const c = n[s]; let u; a && ae(a, u = fn(s)) ? !i || !i.includes(u) ? r[u] = c : (l || (l = {}))[u] = c : vt(e.emitsOptions, s) || (!(s in t) || c !== t[s]) && (t[s] = c, o = !0); } if (i) { const s = oe(r); const c = l || he; for (let u = 0; u < i.length; u++) { const f = i[u]; r[f] = ia(a, s, f, c[f], e, !ae(c, f)); } } return o; } function ia(e, n, r, t, a, i) { const o = e[r]; if (o != null) { const l = ae(o, 'default'); if (l && t === void 0) { const s = o.default; if (o.type !== Function && Q(s)) { const { propsDefaults: c } = a; r in c ? t = c[r] : (sr(a), t = c[r] = s.call(null, n), $n()); } else t = s; }o[0] && (i && !l ? t = !1 : o[1] && (t === '' || t === Kn(r)) && (t = !0)); } return t; } function _o(e, n, r = !1) { const t = n.propsCache; const a = t.get(e); if (a) return a; const i = e.props; const o = {}; const l = []; let s = !1; if (!Q(e)) { const u = (f) => { s = !0; const [h, y] = _o(f, n, !0); Ne(o, h), y && l.push(...y); }; !r && n.mixins.length && n.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u); } if (!i && !s) return fe(e) && t.set(e, nr), nr; if (Z(i)) for (let u = 0; u < i.length; u++) { const f = fn(i[u]); ai(f) && (o[f] = he); } else if (i) for (const u in i) { const f = fn(u); if (ai(f)) { const h = i[u]; const y = o[f] = Z(h) || Q(h) ? { type: h } : ({ ...h }); if (y) { const F = li(Boolean, y.type); const O = li(String, y.type); y[0] = F > -1, y[1] = O < 0 || F < O, (F > -1 || ae(y, 'default')) && l.push(f); } } } const c = [o, l]; return fe(e) && t.set(e, c), c; } function ai(e) { return e[0] !== '$'; } function ii(e) { const n = e && e.toString().match(/^\s*(function|class) (\w+)/); return n ? n[2] : e === null ? 'null' : ''; } function oi(e, n) { return ii(e) === ii(n); } function li(e, n) { return Z(n) ? n.findIndex((r) => oi(r, e)) : Q(n) && oi(n, e) ? 0 : -1; } const No = (e) => e[0] === '_' || e === '$stable'; const Ca = (e) => (Z(e) ? e.map(un) : [un(e)]); const rd = (e, n, r) => { if (n._n) return n; const t = ie((...a) => Ca(n(...a)), r); return t._c = !1, t; }; const Eo = (e, n, r) => { const t = e._ctx; for (const a in e) { if (No(a)) continue; const i = e[a]; if (Q(i))n[a] = rd(a, i, t); else if (i != null) { const o = Ca(i); n[a] = () => o; } } }; const Io = (e, n) => { const r = Ca(n); e.slots.default = () => r; }; const td = (e, n) => { if (e.vnode.shapeFlag & 32) { const r = n._; r ? (e.slots = oe(n), et(n, '_', r)) : Eo(n, e.slots = {}); } else e.slots = {}, n && Io(e, n); et(e.slots, At, 1); }; const ad = (e, n, r) => { const { vnode: t, slots: a } = e; let i = !0; let o = he; if (t.shapeFlag & 32) { const l = n._; l ? r && l === 1 ? i = !1 : (Ne(a, n), !r && l === 1 && delete a._) : (i = !n.$stable, Eo(n, a)), o = n; } else n && (Io(e, n), o = { default: 1 }); if (i) for (const l in a)!No(l) && !(l in o) && delete a[l]; }; function xo() {
  return {
    app: null,
    config: {
      isNativeTag: Vl, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
} let id = 0; function od(e, n) {
  return function (t, a = null) {
    Q(t) || (t = { ...t }), a != null && !fe(a) && (a = null); const i = xo(); const o = new Set(); let l = !1; const s = i.app = {
      _uid: id++, _component: t, _props: a, _container: null, _context: i, _instance: null, version: Wd, get config() { return i.config; }, set config(c) {}, use(c, ...u) { return o.has(c) || (c && Q(c.install) ? (o.add(c), c.install(s, ...u)) : Q(c) && (o.add(c), c(s, ...u))), s; }, mixin(c) { return i.mixins.includes(c) || i.mixins.push(c), s; }, component(c, u) { return u ? (i.components[c] = u, s) : i.components[c]; }, directive(c, u) { return u ? (i.directives[c] = u, s) : i.directives[c]; }, mount(c, u, f) { if (!l) { const h = k(t, a); return h.appContext = i, u && n ? n(h, c) : e(h, c, f), l = !0, s._container = c, c.__vue_app__ = s, Ot(h.component) || h.component.proxy; } }, unmount() { l && (e(null, s._container), delete s._container.__vue_app__); }, provide(c, u) { return i.provides[c] = u, s; },
    }; return s;
  };
} function oa(e, n, r, t, a = !1) { if (Z(e)) { e.forEach((h, y) => oa(h, n && (Z(n) ? n[y] : n), r, t, a)); return; } if (Mr(t) && !a) return; const i = t.shapeFlag & 4 ? Ot(t.component) || t.component.proxy : t.el; const o = a ? null : i; const { i: l, r: s } = e; const c = n && n.r; const u = l.refs === he ? l.refs = {} : l.refs; const f = l.setupState; if (c != null && c !== s && (Ae(c) ? (u[c] = null, ae(f, c) && (f[c] = null)) : be(c) && (c.value = null)), Q(s))On(s, l, 12, [o, u]); else { const h = Ae(s); const y = be(s); if (h || y) { const F = () => { if (e.f) { const O = h ? ae(f, s) ? f[s] : u[s] : s.value; a ? Z(O) && Ra(O, i) : Z(O) ? O.includes(i) || O.push(i) : h ? (u[s] = [i], ae(f, s) && (f[s] = u[s])) : (s.value = [i], e.k && (u[e.k] = s.value)); } else h ? (u[s] = o, ae(f, s) && (f[s] = o)) : y && (s.value = o, e.k && (u[e.k] = o)); }; o ? (F.id = -1, Ie(F, r)) : F(); } } } const Ie = Cs; function ld(e) { return sd(e); } function sd(e, n) {
  const r = Il(); r.__VUE__ = !0; const {
    insert: t, remove: a, patchProp: i, createElement: o, createText: l, createComment: s, setText: c, setElementText: u, parentNode: f, nextSibling: h, setScopeId: y = tn, insertStaticContent: F,
  } = e; const O = (m, g, R, T = null, S = null, D = null, C = !1, P = null, H = !!g.dynamicChildren) => { if (m === g) return; m && !kr(m, g) && (T = B(m), Ee(m, S, D, !0), m = null), g.patchFlag === -2 && (H = !1, g.dynamicChildren = null); const { type: W, ref: z, shapeFlag: I } = g; switch (W) { case Wt: L(m, g, R, T); break; case Bn: A(m, g, R, T); break; case qr: m == null && V(g, R, T, C); break; case ke: dn(m, g, R, T, S, D, C, P, H); break; default: I & 1 ? N(m, g, R, T, S, D, C, P, H) : I & 6 ? Zn(m, g, R, T, S, D, C, P, H) : (I & 64 || I & 128) && W.process(m, g, R, T, S, D, C, P, H, te); }z != null && S && oa(z, m && m.ref, D, g || m, !g); }; const L = (m, g, R, T) => { if (m == null)t(g.el = l(g.children), R, T); else { const S = g.el = m.el; g.children !== m.children && c(S, g.children); } }; const A = (m, g, R, T) => { m == null ? t(g.el = s(g.children || ''), R, T) : g.el = m.el; }; const V = (m, g, R, T) => { [m.el, m.anchor] = F(m.children, g, R, T, m.el, m.anchor); }; const b = ({ el: m, anchor: g }, R, T) => { let S; for (;m && m !== g;)S = h(m), t(m, R, T), m = S; t(g, R, T); }; const _ = ({ el: m, anchor: g }) => { let R; for (;m && m !== g;)R = h(m), a(m), m = R; a(g); }; const N = (m, g, R, T, S, D, C, P, H) => { C = C || g.type === 'svg', m == null ? M(g, R, T, S, D, C, P, H) : Jn(m, g, S, D, C, P, H); }; const M = (m, g, R, T, S, D, C, P) => {
    let H; let W; const {
      type: z, props: I, shapeFlag: $, transition: Y, dirs: re,
    } = m; if (H = m.el = o(m.type, D, I && I.is, I), $ & 8 ? u(H, m.children) : $ & 16 && x(m.children, H, null, T, S, D && z !== 'foreignObject', C, P), re && Un(m, null, T, 'created'), E(H, m, m.scopeId, C, T), I) { for (const de in I)de !== 'value' && !Zr(de) && i(H, de, null, I[de], D, m.children, T, S, w); 'value' in I && i(H, 'value', null, I.value), (W = I.onVnodeBeforeMount) && cn(W, T, m); }re && Un(m, null, T, 'beforeMount'); const ue = (!S || S && !S.pendingBranch) && Y && !Y.persisted; ue && Y.beforeEnter(H), t(H, g, R), ((W = I && I.onVnodeMounted) || ue || re) && Ie(() => { W && cn(W, T, m), ue && Y.enter(H), re && Un(m, null, T, 'mounted'); }, S);
  }; const E = (m, g, R, T, S) => { if (R && y(m, R), T) for (let D = 0; D < T.length; D++)y(m, T[D]); if (S) { const D = S.subTree; if (g === D) { const C = S.vnode; E(m, C, C.scopeId, C.slotScopeIds, S.parent); } } }; const x = (m, g, R, T, S, D, C, P, H = 0) => { for (let W = H; W < m.length; W++) { const z = m[W] = P ? An(m[W]) : un(m[W]); O(null, z, g, R, T, S, D, C, P); } }; const Jn = (m, g, R, T, S, D, C) => { const P = g.el = m.el; let { patchFlag: H, dynamicChildren: W, dirs: z } = g; H |= m.patchFlag & 16; const I = m.props || he; const $ = g.props || he; let Y; R && _n(R, !1), (Y = $.onVnodeBeforeUpdate) && cn(Y, R, g, m), z && Un(g, m, R, 'beforeUpdate'), R && _n(R, !0); const re = S && g.type !== 'foreignObject'; if (W ? sn(m.dynamicChildren, W, P, R, T, re, D) : C || se(m, g, P, null, R, T, re, D, !1), H > 0) { if (H & 16)Sn(P, g, I, $, R, T, S); else if (H & 2 && I.class !== $.class && i(P, 'class', null, $.class, S), H & 4 && i(P, 'style', I.style, $.style, S), H & 8) { const ue = g.dynamicProps; for (let de = 0; de < ue.length; de++) { const Me = ue[de]; const qe = I[Me]; const qn = $[Me]; (qn !== qe || Me === 'value') && i(P, Me, qe, qn, S, m.children, R, T, w); } }H & 1 && m.children !== g.children && u(P, g.children); } else !C && W == null && Sn(P, g, I, $, R, T, S); ((Y = $.onVnodeUpdated) || z) && Ie(() => { Y && cn(Y, R, g, m), z && Un(g, m, R, 'updated'); }, T); }; const sn = (m, g, R, T, S, D, C) => { for (let P = 0; P < g.length; P++) { const H = m[P]; const W = g[P]; const z = H.el && (H.type === ke || !kr(H, W) || H.shapeFlag & 70) ? f(H.el) : R; O(H, W, z, null, T, S, D, C, !0); } }; const Sn = (m, g, R, T, S, D, C) => { if (R !== T) { if (R !== he) for (const P in R)!Zr(P) && !(P in T) && i(m, P, R[P], null, C, g.children, S, D, w); for (const P in T) { if (Zr(P)) continue; const H = T[P]; const W = R[P]; H !== W && P !== 'value' && i(m, P, W, H, C, g.children, S, D, w); }'value' in T && i(m, 'value', R.value, T.value); } }; const dn = (m, g, R, T, S, D, C, P, H) => { const W = g.el = m ? m.el : l(''); const z = g.anchor = m ? m.anchor : l(''); const { patchFlag: I, dynamicChildren: $, slotScopeIds: Y } = g; Y && (P = P ? P.concat(Y) : Y), m == null ? (t(W, R, T), t(z, R, T), x(g.children, R, z, S, D, C, P, H)) : I > 0 && I & 64 && $ && m.dynamicChildren ? (sn(m.dynamicChildren, $, R, S, D, C, P), (g.key != null || S && g === S.subTree) && Lo(m, g, !0)) : se(m, g, R, z, S, D, C, P, H); }; const Zn = (m, g, R, T, S, D, C, P, H) => { g.slotScopeIds = P, m == null ? g.shapeFlag & 512 ? S.ctx.activate(g, R, T, C, H) : Vn(g, R, T, S, D, C, H) : hr(m, g, H); }; const Vn = (m, g, R, T, S, D, C) => { const P = m.component = gd(m, T, S); if (bo(m) && (P.ctx.renderer = te), kd(P), P.asyncDep) { if (S && S.registerDep(P, Te), !m.el) { const H = P.subTree = k(Bn); A(null, H, g, R); } return; }Te(P, m, g, R, S, D, C); }; const hr = (m, g, R) => { const T = g.component = m.component; if (bs(m, g, R)) if (T.asyncDep && !T.asyncResolved) { ce(T, g, R); } else T.next = g, Fs(T.update), T.update(); else g.el = m.el, T.vnode = g; }; const Te = (m, g, R, T, S, D, C) => {
    const P = () => {
      if (m.isMounted) {
        let {
          next: z, bu: I, u: $, parent: Y, vnode: re,
        } = m; const ue = z; let de; _n(m, !1), z ? (z.el = re.el, ce(m, z, C)) : z = re, I && Yr(I), (de = z.props && z.props.onVnodeBeforeUpdate) && cn(de, Y, z, re), _n(m, !0); const Me = wt(m); const qe = m.subTree; m.subTree = Me, O(qe, Me, f(qe.el), B(qe), m, S, D), z.el = Me.el, ue === null && Hs(m, Me.el), $ && Ie($, S), (de = z.props && z.props.onVnodeUpdated) && Ie(() => cn(de, Y, z, re), S);
      } else { let z; const { el: I, props: $ } = g; const { bm: Y, m: re, parent: ue } = m; const de = Mr(g); if (_n(m, !1), Y && Yr(Y), !de && (z = $ && $.onVnodeBeforeMount) && cn(z, ue, g), _n(m, !0), I && ee) { const Me = () => { m.subTree = wt(m), ee(I, m.subTree, m, S, null); }; de ? g.type.__asyncLoader().then(() => !m.isUnmounted && Me()) : Me(); } else { const Me = m.subTree = wt(m); O(null, Me, R, T, m, S, D), g.el = Me.el; } if (re && Ie(re, S), !de && (z = $ && $.onVnodeMounted)) { const Me = g; Ie(() => cn(z, ue, Me), S); }(g.shapeFlag & 256 || ue && Mr(ue.vnode) && ue.vnode.shapeFlag & 256) && m.a && Ie(m.a, S), m.isMounted = !0, g = R = T = null; }
    }; const H = m.effect = new va(P, () => Oa(W), m.scope); const W = m.update = () => H.run(); W.id = m.uid, _n(m, !0), W();
  }; const ce = (m, g, R) => { g.component = m; const T = m.vnode.props; m.vnode = g, m.next = null, nd(m, g.props, T, R), ad(m, g.children, R), ur(), Qa(), mr(); }; const se = (m, g, R, T, S, D, C, P, H = !1) => { const W = m && m.children; const z = m ? m.shapeFlag : 0; const I = g.children; const { patchFlag: $, shapeFlag: Y } = g; if ($ > 0) { if ($ & 128) { wn(W, I, R, T, S, D, C, P, H); return; } if ($ & 256) { Ze(W, I, R, T, S, D, C, P, H); return; } }Y & 8 ? (z & 16 && w(W, S, D), I !== W && u(R, I)) : z & 16 ? Y & 16 ? wn(W, I, R, T, S, D, C, P, H) : w(W, S, D, !0) : (z & 8 && u(R, ''), Y & 16 && x(I, R, T, S, D, C, P, H)); }; const Ze = (m, g, R, T, S, D, C, P, H) => { m = m || nr, g = g || nr; const W = m.length; const z = g.length; const I = Math.min(W, z); let $; for ($ = 0; $ < I; $++) { const Y = g[$] = H ? An(g[$]) : un(g[$]); O(m[$], Y, R, null, S, D, C, P, H); }W > z ? w(m, S, D, !0, !1, I) : x(g, R, T, S, D, C, P, H, I); }; const wn = (m, g, R, T, S, D, C, P, H) => { let W = 0; const z = g.length; let I = m.length - 1; let $ = z - 1; for (;W <= I && W <= $;) { const Y = m[W]; const re = g[W] = H ? An(g[W]) : un(g[W]); if (kr(Y, re))O(Y, re, R, null, S, D, C, P, H); else break; W++; } for (;W <= I && W <= $;) { const Y = m[I]; const re = g[$] = H ? An(g[$]) : un(g[$]); if (kr(Y, re))O(Y, re, R, null, S, D, C, P, H); else break; I--, $--; } if (W > I) { if (W <= $) { const Y = $ + 1; const re = Y < z ? g[Y].el : T; for (;W <= $;)O(null, g[W] = H ? An(g[W]) : un(g[W]), R, re, S, D, C, P, H), W++; } } else if (W > $) for (;W <= I;)Ee(m[W], S, D, !0), W++; else { const Y = W; const re = W; const ue = new Map(); for (W = re; W <= $; W++) { const $e = g[W] = H ? An(g[W]) : un(g[W]); $e.key != null && ue.set($e.key, W); } let de; let Me = 0; const qe = $ - re + 1; let qn = !1; let xa = 0; const gr = new Array(qe); for (W = 0; W < qe; W++)gr[W] = 0; for (W = Y; W <= I; W++) { const $e = m[W]; if (Me >= qe) { Ee($e, S, D, !0); continue; } let pn; if ($e.key != null)pn = ue.get($e.key); else for (de = re; de <= $; de++) if (gr[de - re] === 0 && kr($e, g[de])) { pn = de; break; }pn === void 0 ? Ee($e, S, D, !0) : (gr[pn - re] = W + 1, pn >= xa ? xa = pn : qn = !0, O($e, g[pn], R, null, S, D, C, P, H), Me++); } const La = qn ? dd(gr) : nr; for (de = La.length - 1, W = qe - 1; W >= 0; W--) { const $e = re + W; const pn = g[$e]; const Ga = $e + 1 < z ? g[$e + 1].el : T; gr[W] === 0 ? O(null, pn, R, Ga, S, D, C, P, H) : qn && (de < 0 || W !== La[de] ? Ye(pn, R, Ga, 2) : de--); } } }; const Ye = (m, g, R, T, S = null) => {
    const {
      el: D, type: C, transition: P, children: H, shapeFlag: W,
    } = m; if (W & 6) { Ye(m.component.subTree, g, R, T); return; } if (W & 128) { m.suspense.move(g, R, T); return; } if (W & 64) { C.move(m, g, R, te); return; } if (C === ke) { t(D, g, R); for (let I = 0; I < H.length; I++)Ye(H[I], g, R, T); t(m.anchor, g, R); return; } if (C === qr) { b(m, g, R); return; } if (T !== 2 && W & 1 && P) if (T === 0)P.beforeEnter(D), t(D, g, R), Ie(() => P.enter(D), S); else { const { leave: I, delayLeave: $, afterLeave: Y } = P; const re = () => t(D, g, R); const ue = () => { I(D, () => { re(), Y && Y(); }); }; $ ? $(D, re, ue) : ue(); } else t(D, g, R);
  }; const Ee = (m, g, R, T = !1, S = !1) => {
    const {
      type: D, props: C, ref: P, children: H, dynamicChildren: W, shapeFlag: z, patchFlag: I, dirs: $,
    } = m; if (P != null && oa(P, null, R, m, !0), z & 256) { g.ctx.deactivate(m); return; } const Y = z & 1 && $; const re = !Mr(m); let ue; if (re && (ue = C && C.onVnodeBeforeUnmount) && cn(ue, g, m), z & 6)v(m.component, R, T); else { if (z & 128) { m.suspense.unmount(R, T); return; }Y && Un(m, null, g, 'beforeUnmount'), z & 64 ? m.type.remove(m, g, R, S, te, T) : W && (D !== ke || I > 0 && I & 64) ? w(W, g, R, !1, !0) : (D === ke && I & 384 || !S && z & 16) && w(H, g, R), T && Yn(m); }(re && (ue = C && C.onVnodeUnmounted) || Y) && Ie(() => { ue && cn(ue, g, m), Y && Un(m, null, g, 'unmounted'); }, R);
  }; const Yn = (m) => {
    const {
      type: g, el: R, anchor: T, transition: S,
    } = m; if (g === ke) { Ir(R, T); return; } if (g === qr) { _(m); return; } const D = () => { a(R), S && !S.persisted && S.afterLeave && S.afterLeave(); }; if (m.shapeFlag & 1 && S && !S.persisted) { const { leave: C, delayLeave: P } = S; const H = () => C(R, D); P ? P(m.el, D, H) : H(); } else D();
  }; const Ir = (m, g) => { let R; for (;m !== g;)R = h(m), a(m), m = R; a(g); }; const v = (m, g, R) => {
    const {
      bum: T, scope: S, update: D, subTree: C, um: P,
    } = m; T && Yr(T), S.stop(), D && (D.active = !1, Ee(C, m, g, R)), P && Ie(P, g), Ie(() => { m.isUnmounted = !0; }, g), g && g.pendingBranch && !g.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve());
  }; const w = (m, g, R, T = !1, S = !1, D = 0) => { for (let C = D; C < m.length; C++)Ee(m[C], g, R, T, S); }; const B = (m) => (m.shapeFlag & 6 ? B(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : h(m.anchor || m.el)); const G = (m, g, R) => { m == null ? g._vnode && Ee(g._vnode, null, null, !0) : O(g._vnode || null, m, g, null, null, null, R), Qa(), So(), g._vnode = m; }; const te = {
    p: O, um: Ee, m: Ye, r: Yn, mt: Vn, mc: x, pc: se, pbc: sn, n: B, o: e,
  }; let ge; let ee; return n && ([ge, ee] = n(te)), { render: G, hydrate: ge, createApp: od(G, ge) };
} function _n({ effect: e, update: n }, r) { e.allowRecurse = n.allowRecurse = r; } function Lo(e, n, r = !1) { const t = e.children; const a = n.children; if (Z(t) && Z(a)) for (let i = 0; i < t.length; i++) { const o = t[i]; let l = a[i]; l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = a[i] = An(a[i]), l.el = o.el), r || Lo(o, l)), l.type === Wt && (l.el = o.el); } } function dd(e) { const n = e.slice(); const r = [0]; let t; let a; let i; let o; let l; const s = e.length; for (t = 0; t < s; t++) { const c = e[t]; if (c !== 0) { if (a = r[r.length - 1], e[a] < c) { n[t] = a, r.push(t); continue; } for (i = 0, o = r.length - 1; i < o;)l = i + o >> 1, e[r[l]] < c ? i = l + 1 : o = l; c < e[r[i]] && (i > 0 && (n[t] = r[i - 1]), r[i] = t); } } for (i = r.length, o = r[i - 1]; i-- > 0;)r[i] = o, o = n[o]; return r; } const pd = (e) => e.__isTeleport; const ke = Symbol(void 0); const Wt = Symbol(void 0); const Bn = Symbol(void 0); const qr = Symbol(void 0); const Sr = []; let rn = null; function U(e = !1) { Sr.push(rn = e ? null : []); } function cd() { Sr.pop(), rn = Sr[Sr.length - 1] || null; } let Br = 1; function si(e) { Br += e; } function Go(e) { return e.dynamicChildren = Br > 0 ? rn || nr : null, cd(), Br > 0 && rn && rn.push(e), e; } function j(e, n, r, t, a, i) { return Go(d(e, n, r, t, a, i, !0)); } function _e(e, n, r, t, a) { return Go(k(e, n, r, t, a, !0)); } function it(e) { return e ? e.__v_isVNode === !0 : !1; } function kr(e, n) { return e.type === n.type && e.key === n.key; } const At = '__vInternal'; const zo = ({ key: e }) => e ?? null; const Qr = ({ ref: e, ref_key: n, ref_for: r }) => (e != null ? Ae(e) || be(e) || Q(e) ? {
  i: Ve, r: e, k: n, f: !!r,
} : e : null); function d(e, n = null, r = null, t = 0, a = null, i = e === ke ? 0 : 1, o = !1, l = !1) {
  const s = {
    __v_isVNode: !0, __v_skip: !0, type: e, props: n, key: n && zo(n), ref: n && Qr(n), scopeId: St, slotScopeIds: null, children: r, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: t, dynamicProps: a, dynamicChildren: null, appContext: null, ctx: Ve,
  }; return l ? (Va(s, r), i & 128 && e.normalize(s)) : r && (s.shapeFlag |= Ae(r) ? 8 : 16), Br > 0 && !o && rn && (s.patchFlag > 0 || i & 6) && s.patchFlag !== 32 && rn.push(s), s;
} const k = ud; function ud(e, n = null, r = null, t = 0, a = null, i = !1) { if ((!e || e === Xs) && (e = Bn), it(e)) { const l = lr(e, n, !0); return r && Va(l, r), Br > 0 && !i && rn && (l.shapeFlag & 6 ? rn[rn.indexOf(e)] = l : rn.push(l)), l.patchFlag |= -2, l; } if (vd(e) && (e = e.__vccOpts), n) { n = md(n); let { class: l, style: s } = n; l && !Ae(l) && (n.class = we(l)), fe(s) && (mo(s) && !Z(s) && (s = { ...s }), n.style = ka(s)); } const o = Ae(e) ? 1 : Bs(e) ? 128 : pd(e) ? 64 : fe(e) ? 4 : Q(e) ? 2 : 0; return d(e, n, r, t, a, o, i, !0); } function md(e) { return e ? mo(e) || At in e ? ({ ...e }) : e : null; } function lr(e, n, r = !1) {
  const {
    props: t, ref: a, patchFlag: i, children: o,
  } = e; const l = n ? Dt(t || {}, n) : t; return {
    __v_isVNode: !0, __v_skip: !0, type: e.type, props: l, key: l && zo(l), ref: n && n.ref ? r && a ? Z(a) ? a.concat(Qr(n)) : [a, Qr(n)] : Qr(n) : a, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: o, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: n && e.type !== ke ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && lr(e.ssContent), ssFallback: e.ssFallback && lr(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce,
  };
} function q(e = ' ', n = 0) { return k(Wt, null, e, n); } function Pt(e, n) { const r = k(qr, null, e); return r.staticCount = n, r; } function Ke(e = '', n = !1) { return n ? (U(), _e(Bn, null, e)) : k(Bn, null, e); } function un(e) { return e == null || typeof e === 'boolean' ? k(Bn) : Z(e) ? k(ke, null, e.slice()) : typeof e === 'object' ? An(e) : k(Wt, null, String(e)); } function An(e) { return e.el === null && e.patchFlag !== -1 || e.memo ? e : lr(e); } function Va(e, n) { let r = 0; const { shapeFlag: t } = e; if (n == null)n = null; else if (Z(n))r = 16; else if (typeof n === 'object') if (t & 65) { const a = n.default; a && (a._c && (a._d = !1), Va(e, a()), a._c && (a._d = !0)); return; } else { r = 32; const a = n._; !a && !(At in n) ? n._ctx = Ve : a === 3 && Ve && (Ve.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024)); } else Q(n) ? (n = { default: n, _ctx: Ve }, r = 32) : (n = String(n), t & 64 ? (r = 16, n = [q(n)]) : r = 8); e.children = n, e.shapeFlag |= r; } function Dt(...e) { const n = {}; for (let r = 0; r < e.length; r++) { const t = e[r]; for (const a in t) if (a === 'class')n.class !== t.class && (n.class = we([n.class, t.class])); else if (a === 'style')n.style = ka([n.style, t.style]); else if (gt(a)) { const i = n[a]; const o = t[a]; o && i !== o && !(Z(i) && i.includes(o)) && (n[a] = i ? [].concat(i, o) : o); } else a !== '' && (n[a] = t[a]); } return n; } function cn(e, n, r, t = null) { an(e, n, 7, [r, t]); } const fd = xo(); let hd = 0; function gd(e, n, r) {
  const t = e.type; const a = (n ? n.appContext : e.appContext) || fd; const i = {
    uid: hd++, vnode: e, type: t, parent: n, appContext: a, root: null, next: null, subTree: null, effect: null, update: null, scope: new xl(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: n ? n.provides : Object.create(a.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: _o(t, a), emitsOptions: Wo(t, a), emit: null, emitted: null, propsDefaults: he, inheritAttrs: t.inheritAttrs, ctx: he, data: he, props: he, attrs: he, slots: he, refs: he, setupState: he, setupContext: null, suspense: r, suspenseId: r ? r.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null,
  }; return i.ctx = { _: i }, i.root = n ? n.root : i, i.emit = Ps.bind(null, i), e.ce && e.ce(i), i;
} let ve = null; const sr = (e) => { ve = e, e.scope.on(); }; const $n = () => { ve && ve.scope.off(), ve = null; }; function $o(e) { return e.vnode.shapeFlag & 4; } let Cr = !1; function kd(e, n = !1) { Cr = n; const { props: r, children: t } = e.vnode; const a = $o(e); ed(e, r, a, n), td(e, t); const i = a ? yd(e, n) : void 0; return Cr = !1, i; } function yd(e, n) { const r = e.type; e.accessCache = Object.create(null), e.proxy = fo(new Proxy(e.ctx, Ks)); const { setup: t } = r; if (t) { const a = e.setupContext = t.length > 1 ? Td(e) : null; sr(e), ur(); const i = On(t, e, 0, [e.props, a]); if (mr(), $n(), qi(i)) { if (i.then($n, $n), n) return i.then((o) => { di(e, o, n); }).catch((o) => { Mt(o, e, 0); }); e.asyncDep = i; } else di(e, i, n); } else Xo(e, n); } function di(e, n, r) { Q(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : fe(n) && (e.setupState = yo(n)), Xo(e, r); } let pi; function Xo(e, n, r) {
  const t = e.type; if (!e.render) {
    if (!n && pi && !t.render) {
      const a = t.template || Ba(e).template; if (a) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config; const { delimiters: l, compilerOptions: s } = t; const c = {
          isCustomElement: i, delimiters: l, ...o, ...s,
        }; t.render = pi(a, c);
      }
    }e.render = t.render || tn;
  }sr(e), ur(), Js(e), mr(), $n();
} function Rd(e) { return new Proxy(e.attrs, { get(n, r) { return ze(e, 'get', '$attrs'), n[r]; } }); } function Td(e) {
  const n = (t) => { e.exposed = t || {}; }; let r; return {
    get attrs() { return r || (r = Rd(e)); }, slots: e.slots, emit: e.emit, expose: n,
  };
} function Ot(e) { if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(yo(fo(e.exposed)), { get(n, r) { if (r in n) return n[r]; if (r in vr) return vr[r](e); }, has(n, r) { return r in n || r in vr; } })); } function Md(e, n = !0) { return Q(e) ? e.displayName || e.name : e.name || n && e.__name; } function vd(e) { return Q(e) && '__vccOpts' in e; } const J = (e, n) => Ms(e, n, Cr); function jo(e, n, r) { const t = arguments.length; return t === 2 ? fe(n) && !Z(n) ? it(n) ? k(e, null, [n]) : k(e, n) : k(e, null, n) : (t > 3 ? r = Array.prototype.slice.call(arguments, 2) : t === 3 && it(r) && (r = [r]), k(e, n, r)); } const Sd = Symbol(''); const Fd = () => on(Sd); const Wd = '3.2.47'; const Ad = 'http://www.w3.org/2000/svg'; const xn = typeof document < 'u' ? document : null; const ci = xn && xn.createElement('template'); const Pd = {
  insert: (e, n, r) => { n.insertBefore(e, r || null); }, remove: (e) => { const n = e.parentNode; n && n.removeChild(e); }, createElement: (e, n, r, t) => { const a = n ? xn.createElementNS(Ad, e) : xn.createElement(e, r ? { is: r } : void 0); return e === 'select' && t && t.multiple != null && a.setAttribute('multiple', t.multiple), a; }, createText: (e) => xn.createTextNode(e), createComment: (e) => xn.createComment(e), setText: (e, n) => { e.nodeValue = n; }, setElementText: (e, n) => { e.textContent = n; }, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => xn.querySelector(e), setScopeId(e, n) { e.setAttribute(n, ''); }, insertStaticContent(e, n, r, t, a, i) { const o = r ? r.previousSibling : n.lastChild; if (a && (a === i || a.nextSibling)) for (;n.insertBefore(a.cloneNode(!0), r), !(a === i || !(a = a.nextSibling)););else { ci.innerHTML = t ? `<svg>${e}</svg>` : e; const l = ci.content; if (t) { const s = l.firstChild; for (;s.firstChild;)l.appendChild(s.firstChild); l.removeChild(s); }n.insertBefore(l, r); } return [o ? o.nextSibling : n.firstChild, r ? r.previousSibling : n.lastChild]; },
}; function Dd(e, n, r) { const t = e._vtc; t && (n = (n ? [n, ...t] : [...t]).join(' ')), n == null ? e.removeAttribute('class') : r ? e.setAttribute('class', n) : e.className = n; } function Od(e, n, r) { const t = e.style; const a = Ae(r); if (r && !a) { if (n && !Ae(n)) for (const i in n)r[i] == null && la(t, i, ''); for (const i in r)la(t, i, r[i]); } else { const i = t.display; a ? n !== r && (t.cssText = r) : n && e.removeAttribute('style'), '_vod' in e && (t.display = i); } } const ui = /\s*!important$/; function la(e, n, r) { if (Z(r))r.forEach((t) => la(e, n, t)); else if (r == null && (r = ''), n.startsWith('--'))e.setProperty(n, r); else { const t = bd(e, n); ui.test(r) ? e.setProperty(Kn(t), r.replace(ui, ''), 'important') : e[t] = r; } } const mi = ['Webkit', 'Moz', 'ms']; const _t = {}; function bd(e, n) { const r = _t[n]; if (r) return r; let t = fn(n); if (t !== 'filter' && t in e) return _t[n] = t; t = Rt(t); for (let a = 0; a < mi.length; a++) { const i = mi[a] + t; if (i in e) return _t[n] = i; } return n; } const fi = 'http://www.w3.org/1999/xlink'; function Hd(e, n, r, t, a) { if (t && n.startsWith('xlink:'))r == null ? e.removeAttributeNS(fi, n.slice(6, n.length)) : e.setAttributeNS(fi, n, r); else { const i = Hl(n); r == null || i && !Zi(r) ? e.removeAttribute(n) : e.setAttribute(n, i ? '' : r); } } function Bd(e, n, r, t, a, i, o) { if (n === 'innerHTML' || n === 'textContent') { t && o(t, a, i), e[n] = r ?? ''; return; } if (n === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) { e._value = r; const s = r ?? ''; (e.value !== s || e.tagName === 'OPTION') && (e.value = s), r == null && e.removeAttribute(n); return; } let l = !1; if (r === '' || r == null) { const s = typeof e[n]; s === 'boolean' ? r = Zi(r) : r == null && s === 'string' ? (r = '', l = !0) : s === 'number' && (r = 0, l = !0); } try { e[n] = r; } catch {}l && e.removeAttribute(n); } function Ln(e, n, r, t) { e.addEventListener(n, r, t); } function Cd(e, n, r, t) { e.removeEventListener(n, r, t); } function Vd(e, n, r, t, a = null) { const i = e._vei || (e._vei = {}); const o = i[n]; if (t && o)o.value = t; else { const [l, s] = wd(n); if (t) { const c = i[n] = Nd(t, a); Ln(e, l, c, s); } else o && (Cd(e, l, o, s), i[n] = void 0); } } const hi = /(?:Once|Passive|Capture)$/; function wd(e) { let n; if (hi.test(e)) { n = {}; let t; for (;t = e.match(hi);)e = e.slice(0, e.length - t[0].length), n[t[0].toLowerCase()] = !0; } return [e[2] === ':' ? e.slice(3) : Kn(e.slice(2)), n]; } let Nt = 0; const Ud = Promise.resolve(); const _d = () => Nt || (Ud.then(() => Nt = 0), Nt = Date.now()); function Nd(e, n) { const r = (t) => { if (!t._vts)t._vts = Date.now(); else if (t._vts <= r.attached) return; an(Ed(t, r.value), n, 5, [t]); }; return r.value = e, r.attached = _d(), r; } function Ed(e, n) { if (Z(n)) { const r = e.stopImmediatePropagation; return e.stopImmediatePropagation = () => { r.call(e), e._stopped = !0; }, n.map((t) => (a) => !a._stopped && t && t(a)); } return n; } const gi = /^on[a-z]/; const Id = (e, n, r, t, a = !1, i, o, l, s) => { n === 'class' ? Dd(e, t, a) : n === 'style' ? Od(e, r, t) : gt(n) ? ya(n) || Vd(e, n, r, t, o) : (n[0] === '.' ? (n = n.slice(1), !0) : n[0] === '^' ? (n = n.slice(1), !1) : xd(e, n, t, a)) ? Bd(e, n, t, i, o, l, s) : (n === 'true-value' ? e._trueValue = t : n === 'false-value' && (e._falseValue = t), Hd(e, n, t, a)); }; function xd(e, n, r, t) { return t ? !!(n === 'innerHTML' || n === 'textContent' || n in e && gi.test(n) && Q(r)) : n === 'spellcheck' || n === 'draggable' || n === 'translate' || n === 'form' || n === 'list' && e.tagName === 'INPUT' || n === 'type' && e.tagName === 'TEXTAREA' || gi.test(n) && Ae(r) ? !1 : n in e; } const ot = (e) => { const n = e.props['onUpdate:modelValue'] || !1; return Z(n) ? (r) => Yr(n, r) : n; }; function Ld(e) { e.target.composing = !0; } function ki(e) { const n = e.target; n.composing && (n.composing = !1, n.dispatchEvent(new Event('input'))); } const Vr = { created(e, { modifiers: { lazy: n, trim: r, number: t } }, a) { e._assign = ot(a); const i = t || a.props && a.props.type === 'number'; Ln(e, n ? 'change' : 'input', (o) => { if (o.target.composing) return; let l = e.value; r && (l = l.trim()), i && (l = nt(l)), e._assign(l); }), r && Ln(e, 'change', () => { e.value = e.value.trim(); }), n || (Ln(e, 'compositionstart', Ld), Ln(e, 'compositionend', ki), Ln(e, 'change', ki)); }, mounted(e, { value: n }) { e.value = n ?? ''; }, beforeUpdate(e, { value: n, modifiers: { lazy: r, trim: t, number: a } }, i) { if (e._assign = ot(i), e.composing || document.activeElement === e && e.type !== 'range' && (r || t && e.value.trim() === n || (a || e.type === 'number') && nt(e.value) === n)) return; const o = n ?? ''; e.value !== o && (e.value = o); } }; const yi = {
  deep: !0, created(e, { value: n, modifiers: { number: r } }, t) { const a = kt(n); Ln(e, 'change', () => { const i = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => (r ? nt(lt(o)) : lt(o))); e._assign(e.multiple ? a ? new Set(i) : i : i[0]); }), e._assign = ot(t); }, mounted(e, { value: n }) { Ri(e, n); }, beforeUpdate(e, n, r) { e._assign = ot(r); }, updated(e, { value: n }) { Ri(e, n); },
}; function Ri(e, n) { const r = e.multiple; if (!(r && !Z(n) && !kt(n))) { for (let t = 0, a = e.options.length; t < a; t++) { const i = e.options[t]; const o = lt(i); if (r)Z(n) ? i.selected = Cl(n, o) > -1 : i.selected = n.has(o); else if (ht(lt(i), n)) { e.selectedIndex !== t && (e.selectedIndex = t); return; } }!r && e.selectedIndex !== -1 && (e.selectedIndex = -1); } } function lt(e) { return '_value' in e ? e._value : e.value; } const Gd = {
  esc: 'escape', space: ' ', up: 'arrow-up', left: 'arrow-left', right: 'arrow-right', down: 'arrow-down', delete: 'backspace',
}; const Ti = (e, n) => (r) => { if (!('key' in r)) return; const t = Kn(r.key); if (n.some((a) => a === t || Gd[a] === t)) return e(r); }; const zd = { patchProp: Id, ...Pd }; let Mi; function $d() { return Mi || (Mi = ld(zd)); } const Xd = (...e) => { const n = $d().createApp(...e); const { mount: r } = n; return n.mount = (t) => { const a = jd(t); if (!a) return; const i = n._component; !Q(i) && !i.render && !i.template && (i.template = a.innerHTML), a.innerHTML = ''; const o = r(a, !1, a instanceof SVGElement); return a instanceof Element && (a.removeAttribute('v-cloak'), a.setAttribute('data-v-app', '')), o; }, n; }; function jd(e) { return Ae(e) ? document.querySelector(e) : e; } const Kd = '/images/OPTN_header_car.png'; const Jd = '/assets/OPTN_logo-103211b1.png'; const Zd = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmZSURBVHgB7V1bbBTXGf5mdn0jwWtC2tDWJkul9MVIGAUj2VKbTatKRKpUUKSkpqpiP9BXXMFzgT43inktley2Ig5IKfBGFLVxFMlINshGsvPAQ1gwSiCJE9tJbC/2zsn/n93FezlzOWdnd712PmnwMpezs9/8//lv55yxUGvcGI6joakLAnFY1gHaQ39pE1YbINoKT7YWACeZ+YskhLgNpKcRXZ/GwYEF1AgWqo2p4TY4jUch7Jfo2xOSvFAgpunn0Cau4dDxq6giqkfi5H8SsKJn6Cu7SiUsbLCkiqsQ6/9C95/GUGFUlkQpdc0nSTUHK0+cK5JwnHM4/McRVAiVIXFzkFeMipEZPomTbw/Css9sIvKKETqZ4ZE4NRpHGsP0KYH6wAjWcA49fUmUCRthgKUvbU2hfghk9KMBH2DiYj/KRHmSmOn73iI3pR/1DAtn8WLfORjCnERWX4eeZGh+Xq1BfuaadcxEvc1I3HIEPkGS+smXdYnUJ3Hichds54NNbH3LhTaReiRuXQkshhaRwUncPgTmkERk9WCQxEYwF0da4W1FIIP83uYrQU4MRmK6aWibEZhDArfeecvvJH8Sb41y5uUNbFcIMYibbx/1OsW7T8yEcnex7SEWEEntc+sfo57Xcj8YEB0NLZiI/0Z+nltbxmJ6DXPrK7ixMo9x2mZTS6gFWu0ojjy9B73Nz6KzaSdikQa61x3y2N/n7+DNr+4EaIWy7OkmzgscUx51ve4WxZTCHkZADD13AK+3drgeZ2L5pi9/8wDVQE/Lbpx+5hfo3bHb9ZxFZw2H7/4PS846AkGQ29PdN1a8W02ipjuTL4V+qDSZfC9DP+7yJC8fJx9O69xLEof69hXvVKuzY1FCVcQREL0twW6Ywap0fk/mR/71i1m5j6VmL+3vbIxJEnjLnVuMJZKe+4+XpfTMra1g9vEiZqirmE0tkibsxendL5AKNyAoelue1SExLjNW3ceH8neWSqKBMfnbjzpxom0fdMGE6PzgSoA143Dy/xpXlBqZUhfHgbY7Y0pErQk0AxmZtcYCl0flJ/bjB3jDtgsErZBEaZH1IxNWy3pFYMtciAQmRxO5/xSSKGyjyIQ7+HrFoqkAWM4Tld4gkQ2KYY2ELWO9YmbV9N43QuENEh0nAUPUKhoJAzdWvoIZyMBkVTqPRPsoDMEqMbe+jHpEWfedVekNEi3rJRjiFIVXHdEdqEdwuMrxtRkynGWc7YmLVDexp2AAjjb+296DekbwRIQCkdVdGUm0rTgMcX7PAdQ7Tu9mTWqBEdabu3LqnIABXm9tr1s1LsYpItIMIkuisOIwgPkXbz5wztGob7REPEOiZT0PTXBfuFWkkBGjON4rH+oKivCy6uzsgiZYlbcaWBq1QQKYJVFfEoMmPesJnU2t0IfVZuQgycSpoSpzwL/oPM60E3J3kO84m7TNKt1O1z3QdMCNSGzXvEFOUFxYuItLS3MlGR/OKXJWu51cDJYEzmbzQ+If1BqJKtvijQthH1NWezb1TbYotlzSLmfcT+zap5V530/3UBUS9zYE96kuLHxCZYCPXY8zqTOpRbld/+4hwgK3y+3xdqLt59IXDGJ9TSy00UjZoJLIUYAXgdUCP8iBTycDnauq6/ghnOHGCnCtmcOpYrC6vPuzHnz2wu/wfscv8drO8q08q3+uzYn4r5Vtut1PGMiSKO4hZAw+vF2yT/5YirNzln1/c0xW/o489RxMUdxmrpqoKpz9k/plw0y2O4S4lyXR/lrnOr8b4aeuSjFxtkdVnBqiH22aSXHLIJ1S9IGcsvvH158gXIiFbNinJ4lLWRfFDde/LTUQLDFuEQFb4iNP6Tu6fm2qjvGwFi9wCVULFpLZsE8kNS6TxXIvqDLdfm4GF9F1wcV+3ePjPiRqq7uwnpA4rXPdA5/C1H3FcT+Lvr9ZP1rwizB6dzyj3O+VzdavXFrT2XyiPaZxlVE5wMR1qAVmdItu0dUsiQd5gLelNel6fFmvwOPX15iULv1Uj4f2qRCzG5X7uRvSU2chJ6vn+YnONY2rqYP+0vXYfoWa+XXoJqVLv1KtWz3czROY0a5aig/53w0SBbT6xevfPnJ9ah2KsNDvKb/33SPogo2EV5uXKVYvRo+HgVOd7wlhyxn+GyRGW0agAVa/Sy5fqsrLeflo49nRtCZwa5OlUNXmKy45Q7fzPZDMDfjcIPHgMe4Tx6ABzsyowO6MyqXhiKHY/eGbV0U3QcHxefGP5zZffXBDef6Rp9XRkUFIOJb7ECnY/edXqZOx/oCAYHeAx0C/2FyaGGdrfHmpcPBkSjj49+I9SjVRKovU8D3KsJx8dBtfpFMoB/w9+W1y0sMtYlJJonyQn2v1Ztz9/QUX3k3yx8JBnlNX2pBO3dWZt8eRwfvP/0pZciyrnhsyOD4f/mm38thv73+k69oUDDsuzOKwSov0eWiA+zpWHZU7wTk8fvq1xms7O2RSQoVB0gRt39BBwdxoxXBjfWlksPoO/+SQMopgH9GN6EqCXRkeCq2Kodmq85jxS7oWWTH4XT17YPLi2cxiGPrwkr7x5Xl505xtDj0llQd2Y7ga+YqsJZdmjdgQsTEzGszkYACH+0byd7lMwTCTxhxYKk9l55C4Dc9gQlmN2CDknFzdwaIxqsFwbYaNW2djKzn5MRmDu40FZ/LenL9j7E7BZQqG+2QguTSL5Ts50A+c4pIzmjwIrSSYMDmra3m+HPIyUEghw3tu381RnpaWQEiQlTxZ1YtJCcplbnIRDse0OsnZ/PJrfhWQpXs2lZnfEuJ48hGSwgHVAe87jhDzcqmWcJYqYAPDW9kSUX0k5Ro6LvAuVHF2RzjGS51sGTjeixAFW77g5jtXSBqNhyPXNQQR2N131uuUYCXTSNMA1xKw3SAo1eVDICMYiRzJ2Hh5mxGZxLrVH+RE/SVdQjQ0mxhaS7rojYBgQ+PYW10iK7y4UA4/LHNVALOxOCyRW62PZCPCiwlVbcG1HGSMvTJU/0u+iPM4dHwQhghnJc+Q4uzqQ67bPVDuktLhkMiot36S1ZddmBCWQw1/Yd5bo/3075lNTCaFspQTUCzNYorwSWSwVK6jn4zPG5uHTFJdQX1fdHUo7CX2K0NiDhkVT6C2kpnMkJcaqdT7CSpLYj540TJBfZCF36PiIKlznGtk7EbCVFvXb0O1wWsxppsS9OmonGMd3gsc7mXeN2Bf5ZFa1XwrRvVJLIaMx0UXqRzVNO3Myx34VSKwY6UxenZEr5DGIUnnTUuHP5Iaq+WrRL4HuZwzjEdsVD0AAAAASUVORK5CYII='; const Ko = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqwSURBVHgB5Z17TFvXHcd/NhgMCQFnIQNNSwyd+keTNixrIvXBarYkWkqqQpVFq1a1MGlbSDaNblMfkxZg2hq6blpQmz72x0LQkmxNJRK1JFO2FmdZNy2ZFPex/ZG1cEMfISUE00Cwwfbt+R77gjHX9r2+x/Y1+UiWgfuyv/d3zu9xzrlYKMvILnKSjVwUohr2aylZ+XtZ1Gtu36UOr2ViTCKZvCFHhWQdG36L/dlDAfJY3OSlLGGhDMNEK6N8amI/3sOu7qIYoVIltGy5h6wFnoCj4njh7z3HKINkRMQo4e6PCJfe6y0p81omvce8Dzxx0NHS6aY0k1YReVPNo1bWRB8hQRanl2DlTVLeh+93WN6gbkoTaREx0s+1sx8fIfMgUZDSIqaVBIJmK2+iNibgeTKXgACt4kCo0TF4pa+niQQizBKZeC52tgOED5sDzNy0vnt07+sdlQ6HRAYxLCJ3GgXM+mTW9+Ue0mhrT8eK+oe7yQCGRIz0fb3sxxrKYQLlq9pth4c6KEVS7hPlzUy4cN+X0wKC/JGh9sm9D5+/NDbmpBRIyRLlrzOnYU1fyJAt/Os3S7LzK3VFLZ2SnuN0i7hYBVRgqaXk3/J9XULqas6LXUDAcnOn7V8v9+tp2ppFZAI2LHYBFfIuDTgdnTv6B8fGNGVZmppzxAvDiWQldcsWvjsb3UUdvXXJ9ktqiREB++kGExDY/9nr8rU98Ltk+yVvzuEc2ElZJli+ii4f/IBGn3mTxne/QFOub1PAeWvCYyZ2PMmPGX7lGj8Ox+jF9tbrrWOvPNuQaJ+EzVn+Gitf5fFULuv4Nm4j72NHFvydlbzIJr1DBf89w1+2wXfIcn2cxh47TP6N9y3Yf9mBx6m473nSw0z1l70fdb5RVeVwqBZ+44oY1YydZAI+be6k6/W7qfS5nZQ3MkTTa+5mr1qaqbqN5OLSefvmfXKRgitXq57HOjlO5S1ruNB6mPrqg8eKf36kUW1bfBE3c09smkrMld+8yZrvbVS+ay0XKRoIqYiKZo/9EoEbUeQ+RHoILSllN/GHdSXf/aU7dlu+2gE8pTORgPgCEAYWGCsgsA2+zV9LXgs30/EfvJiw/7PqtEJ+DLNg2//PomurWrBN9QiZknqkTKI4EAilhcKzryXcns/60FQoPH/KOfHb7y2oVi0QMVIXdJGJQHMFcBxasDMR4+279OW9qtaslYIL59pig3A1S2wjkzF9Sy1/12NBZb9+kHthxYFAuGUHnmAiPkVGsA2cL/vc0WfmhTzzHEvEIw+Sybjc8yH3wBXbS8gM+NfUuu37zsxmMvMtMRxYm4oZ1h9CQK1NORPYpLddI2dOupTfY5vzPWQylHhPq1PJBPDUJUf2zDbpWRF5lcaEg0yI/0DB//5BZsIaDMyGgHOWaKUGMiFK4JxqWJIu8i4PlClNOro5m64pA2Qh8YLsbIImbf/Pq9zweMbCvDIyFCeZhODKVTx9m4lYIQRUmrVSYDADtpGL3PDCaZ81eyN28LzX61hZC/nvLXerFg5gjVc7Ts7+rlRu4GwKzyGwzk5/aR0ZqkHgzeNElivvY28/ogyhCOdn5S0IZBSIiiwFRYVMC3plz8m6sCXKtE7EhJJoqwIF74ZrfOjTlO2T23bRZP0uTH8jUeBcU3UP8Reuh6wkWkx0Bf4N2yi0tIysE16h1pv/wbs1iiWOkcHy/xQT79OmTlVxUAiV2ZUmvvmkUPESUdT/R26ZEzt+pmrt2I400Gj/OnVHQ5eFz6WxcRFTBnc6us/KFYr6D1Hp/p1khKnabx23kt34ANT47hcpF0HrMdonW33XVlspYCy0QW4brxSfC/g31JMhAjNlhid5yktKKZcRYQCGRbRMmiPwzRb5w++pj7HoAeELPFzsiFsiECiXMI9ti+TDvo313IsiS9EDxlSKTzw/O7qHcRWMNesB4Y5R8tqrWZ9o4csjUsIy42eqFGruoCHc8rZ7Kf+jC+xYH3/hb/ZzfTz41to98Cr10ad4DgvwjhgRN3S6ZrOmc8AAMPJnhGDFl7xwLIZXImHcQuuAOD40MoxYYE3Fffu1nIJ/+Xj7wjq1FHBxDtxMo4RKHIQQR8hyLgTUycYvYC35Uvziqv2stqZl//erCbcnugaAgCt+epeYytD01EUr+cStiTMa/YeKxXh6axJnh/5brTWkQmj5F7zWyMJCIWdM5lwwCJ+o70w2c0FBGUKNR7L+GZ9DFnTDgiXLJSXEkShDXEN+rfIF4Jm1elaIFG9fFDhEVIa0Evh81ayIp0kAWpozrAjzapQiKwRFiHO144SuwBchEabYKbMjUMjFpKdrTU9rOl5UYde3dadHiRM9JABUnbUAsUQULJTyl15EDb8i5fVRwBO2xDxykwDgFc1Suk+EqOHXUPkqD+YschEtf+F9omHnAq+IOp3ZKT7xAolgpnw17wajc+eDJIAlffo+oNFYDZavx/pRqBU1cui7/T6+wn9ORJmELPkPZx7ashd8IUzaLOl+PKVuAH3bypa1mjMPXAPZlQiCldVSee1WN36eK0AEmHOx8SZtuEiLzAXeN1ncF1h9Kw9tkKrZz/bxY1BESBSi4CYhzy6Mmj7n39BCWkBWJcoK/WtdbqIB/vP8WWECR/3CHvhE0soMvhSsI3b6b+xcbFhR/idD8zINnBthjdoE91hwDaPT6hQQrF/9yZ/qFEucL2J4gmc/CUKrkEDpBmzMwycaiUM8iPFphDZag2qRAgL/+i2S/elTs9OOFwyUMmuEiC4SBIREdqF3DQlEVYZa+XnYjeDpmo7RQlgvSmaiI4bRH/c0r9g6t9B8oYiCrVEBg0KpFF5TBf1l6f4W4XN4Yq0QLBgesPyNB95uEgyGJ+FF9S590AvEw3XwSsckqAnXQwtW6KvOe0iXNSqgicMTYyaE1spNItBs+TSS/kNpnVGrZoX8+vEOkLdQL4sd0z5nUREUy860LOQBEI2vXWHDCgh18C6qPhgPRApXdz47ry+c/TxxDwrPjMAk+IyvLlXCm+i6nzIghtQyG3MVZ6prugte8jSrbUu8QHITtbI9TLUwKCtYSBr+81RdpaNIUtuccNyZOZl97AQZfQKc2UBLGH20pyOegCD54P00NeNO0A3KTNW6DrV+MBptjy/4BhubDt54jy+YuqPxdPEvel3J9tM0jYTXG2VqpBsIhDPjjx5u0rKvrvmxLCVsYm+mWImfTvBsnMt/+LguUT8Yja4JTZa/8oXkzbSIUR4upFVAkNpjrhapRaIJy8716X/MlQJfnW/hWY2TFgG+tbWnh/f8vaHKYdGd+hh79B+8dojl2DksJOLA6S/e3GV/7lwrpYihSZ7w2pZT/JkIXZSDyEvLvFN3bm80IiAQsHolDO8nLfyJnk7KAdB86ea7mvT2f2oIExFEHo3ayoQ03SMQFDBKl/fxQHOkbioEoSIqRDKcdjLRY2EC1TVe3+33dl3Z/qt9qTiPRKRFRIUoMe+nrD2svFryrdvUNfKdl7pFi6eQVhEVIrVJFHibKDPrqr2h0srjVu+lbpHNNh4ZETGaiHVi+KGB9Z0QVIiFBiuqL7K+7hhKd9JR2ZMuq1Mj4yLGwoP2EF/BUMPXXctcVCfh34osFJiXtOXSFZLMBgWYpXmmq2ukggsedzb/lchngDBI9Ohp9NIAAAAASUVORK5CYII='; const sa = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAj3SURBVHgB7Z1PbBRVHMd/b9piLFRbaQ8eZJeTFBOtAW9Kh5NgRItwNLEcNJy0ePBgYqAxMdGDgCfjRfx3EwvaUDg5Ld6sul4K8cKUgyQWpDGwUWDn+fu+2aHdf7PvvZnd7rb9JJstuzt/3nd+v/d+7/d+MwhaYdyRa1m61zVEQmTJoaco4HdBWf6qt/haziK/fJL87kifAvqdZJCjW7dynrd1kVYIQU3Gda/0Uk/PCDlimKRw+aMspUOOpMTrrDfZf4aaSNNEdF9ccEl0HOUjDlGlhaXNIot5hq30C29ywKMG01ARldVteugttroxarxwtWD3D8a9H/pPUYNoiIgtIl45DRMzdRHdfQtjym1bR7xyUhczNRHdPTzKdj3wOe/RpXZAylN09864d/5RnxLiUAoo69vwwG9tIyAQYpTP+Ud33/VRSkgiSwzDlYeOqxNqZwJ5zJvcPE6WWIuo3JevJKUX5600Obrz334b97YScRUKGOGzkLtNhTQW0X3hryHq7ISArTr6JsVYSKOBRVlgZ+cErV4BgfIy1VZNtC1xFbtwLXz6RzzteX11ExtalqhG4bUlIMhSj5zQ+aGeO2/qOUFrS8AQjnvdfTeO1/tZXRHdl24cJcd5jdYqQoy5L14fif1J3JfFfvAKrbPI/ePWWv1jvCWG/eA6iEZ65Oe1vqxpiWpOKZyaGyZhcBvn/zP8Pujwu6DpmYBOTwRkw+HXOyjD+1i4LunSpYD8eaJLlyU1hKCwu1qSt6qIaYcz3d1EO3cIfjn0xKDgf5ce9nae6M0jdymfJyMG+ok+Od5V8fnCgqS5S5Jmfw1o9pdUBfW97x/ZWv5hdRExIgmVUE0ELO6FPQ5tryJcOVPnC3TuglQWCtE3dlPFNvm8VIIvLJASfO/zDg3viu+RIkFPTxTYWik5Uh7xfth8YvlHFS1LYzCBhRx+o4PFSyXTlhpz7O6ffpZYzIpBprKVGzYkDmfee7ez5QQEOCdc3ITwIFMoCXmqtDRZbvDAKx00MND0lVhtICS6gWSUxs0leytmebNkCdz44P7Ws8BycKHR71qDmQyWgIuUtjjhzOTA/sSu0hQwaKVgjfdd+v6e1IAi7ddIYIX1RspW4iC6nX6yxxH3DW6p1V1dLiXg8Bud1G4k9JzeyKWXm84IWZLZIlQs2G7AcxJZY9Gll0QUzjBZkrx/WTl2PZfg3FGURUUR1bqJZcq/3frCcvbuSTRSD7nuzd6w9Y6TJUv2Pt8eI3ItMFIPJ7HGTfeGiiKqOkErkFhodxK1QThFEaXMkgWDPJi08uxEF8xiBvot28E5k1BE4WTIguFn27cvLMfaGh2RDYM7Kfs49UWmJAlrkJ7y58Nc3zM77UMNJGN/ng33gwSv7TlBxKkLZEMmFFEIY0tEo21cGWmoTz+7p0SM+OqbgppBHDCcd3/J202dL82I45yQRTK9KHDp7u6CcWKY6bX2x8FBOwHf/6BUwIhvvyvQl1/rLxFUE1Adg5OwOIaFGJTdYmfF1iJu32a+6WkWCo2sxdSFQlWBy0FytZqAETjGuQvmazY7dtjJYS0i+h9Tfv6lfsNmNX4zc7G+0DMz5iIODJAV1iJmDEWEdei4GAaKevhX6/8G+zF16aa6c2ZL42LD2xoNz9+mhoBByWYKGAXb8yYbdW8kY3RPUMcaMhqxBEZnG0E2dhsaiKT5YrAtbppsZxvT6Qi0U6Nz18m8DFrGixnTYE/QYtESAyNLtJ0iYaUtzjp2PacXLD/DQm/fJmLOD2s9dokRY+sNpB9Zom+wmbnJF4kLhLHQ/9qr+g3HBam2H3z29lin9ZzeuG2C/GjalzOZ9tn0iREIjSAk4sG5y4FKRcGFTdepIRJKSFDHM381UANSZotD7q761RZxGFuidHKhiB0dHpslNQsIMIxXCsnccB8rmAi5RTl1dO9Mn0/hDdnrmJFDOcmySyjP0jpmBHIab0siSsppbtqwYLcVMJvlOOoO/yURO5xTpMntfPP6z2Zj0Dbfm+zz8Md9EblfXOTh2tPZ2ibNhNQVUlTTF+0qYnXBuZ3jDA+OZVN9e31B84dCeNGfpWULheAkr/y5VIcZFgIJCJNVssxjgmZnw/pANA7BMmYeaSz6QzhkyZEBmr4oVTEo4s7BbUa7Uem1Od1S5QJ9Ef1Z0gJ35GYvd5Yo8NRag4aIBwxrWhDXwRqjumrEdKp+W9VxCzUbissQQTC43Px8WAE7f1WqOu180Q2xn4OvmMWd1bLtdSgpO66slH3pxjH++ChpgpgPaX3TtVtYZJxrQ9yNZYEvAup8TJ+FC2pS2ocLMsXJW7h/3qSfl8Gh5Y8/qBTR0BojTMTElUehe9pAdMxidGYduIDoVuIy7TWoKH6vmKz6lz/8N/v4Ow+yvi4ZgKuKSv3ZXyV1dcVnvuE6f16j1Ll7Fy9BTz1Z+9gQ7+OTBdWv2wyQbIVH/D8+KgkHq989YGmNy4ksM1wYX/ocjYArN5KwZnypadZuW4n+LRjA3XdjjIfxujcH6gAXx7puJuOo0MPChYyIskVzcwHN/BSYDBjxlPWFEfH39r38949JqmdXFUKc8s72Har2lVNnQ2y0npjADeSCxmt9GSuiyu5IOU5rHTzRKcx0VUVrusBuPcFubV2O3NYEctyb3Hws7id6kWno1j6tPabrCQi0RFTJCUfsprUlpM9tHtX5odHsn+PHLJv3b7S6H+kCIODuuH5wOUYTXrVT595qt0gjAYHdY65Ci0ztpvIWwlhAYLVMFlrkqusjp7lNT5sKCJI9+k/NsYMTvJvE90ivKIE8yaOw9ZMGUinvSnOe3WQW2QgOJX2kdGo1cm3YT8J9R23ct5zUCw2Lj4JBZjxLrQn680MsnkcpkbqIILTKYLTYV2apNeBEisRC3Ak1eUiRhogYocQsFNwVtkwkUU5iXT1t8SIaKuJyWNAR7jNH+c+XqfEsqrIYRwnnUYNpmogRKiziN3Z3zgqp+4WzlAa8ekpCnmHhMNLmGmV11Wi6iOUolycaYlGH+HTC+64l4b8TeZjK5+gQCggE+dJX9UMdDv9NXjNFK+d/nO5ew4ZX4zkAAAAASUVORK5CYII='; const Yd = { class: 'md:mr-8 z-10' }; const qd = ['src']; const Qd = { class: 'flex grow w-full items-center justify-between z-10' }; const ep = { class: 'nav-bar' }; const np = { class: 'link-bar' }; const rp = { href: 'https://discord.gg/K2Kk5Kj6PP', target: '_blank' }; const tp = ['src']; const ap = { href: 'https://reddit.com/r/ForzaOpenTunes', target: '_blank' }; const ip = ['src']; const op = { href: 'https://github.com/OPTN-Club', target: '_blank' }; const lp = ['src']; const sp = d('div', { class: 'header-image z-0' }, [d('img', { class: 'invisible', src: Kd, alt: 'OPTN Car' })], -1); const dp = ne({ __name: 'AppHeader', setup(e) { return (n, r) => { const t = Ha('router-link'); return U(), j(ke, null, [d('header', null, [d('div', Yd, [k(t, { to: { name: 'home' } }, { default: ie(() => [d('img', { src: p(Jd), alt: 'OPTN Logo', class: 'w-auto h-10 mx-auto md:mx-0 min-w-[216px]' }, null, 8, qd)]), _: 1 })]), d('div', Qd, [d('div', ep, [k(t, { class: 'nav-link', to: { name: 'formatter' } }, { default: ie(() => [q('Formatter')]), _: 1 }), k(t, { class: 'nav-link', to: { name: 'tuningchart' } }, { default: ie(() => [q('Tuning Chart')]), _: 1 })]), d('ul', np, [d('li', null, [d('a', rp, [d('img', { src: p(sa), alt: 'Discord' }, null, 8, tp)])]), d('li', null, [d('a', ap, [d('img', { src: p(Ko), alt: 'Reddit' }, null, 8, ip)])]), d('li', null, [d('a', op, [d('img', { src: p(Zd), alt: 'Github' }, null, 8, lp)])])])])]), sp], 64); }; } }); const bt = (e, n) => { const r = e.__vccOpts || e; for (const [t, a] of n)r[t] = a; return r; }; const pp = {}; const cp = { class: 'text-center text-sm' }; function up(e, n) { return U(), j('footer', cp, ' Created by [Root, SharpSeeEr, Doubiez] '); } const mp = bt(pp, [['render', up]]); const fp = { class: 'wrapper' }; const hp = { class: 'z-10' }; const gp = { class: 'grow mx-4 md:mx-9 lg:mx-14' }; const kp = ne({ __name: 'App', setup(e) { return (n, r) => { const t = Ha('router-view'); return U(), j('div', fp, [d('div', hp, [k(dp), d('div', gp, [k(t)]), k(mp)])]); }; } });/* !
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const er = typeof window < 'u'; function yp(e) { return e.__esModule || e[Symbol.toStringTag] === 'Module'; } const le = Object.assign; function Et(e, n) { const r = {}; for (const t in n) { const a = n[t]; r[t] = ln(a) ? a.map(e) : e(a); } return r; } const Fr = () => {}; const ln = Array.isArray; const Rp = /\/$/; const Tp = (e) => e.replace(Rp, ''); function It(e, n, r = '/') {
  let t; let a = {}; let i = ''; let o = ''; const l = n.indexOf('#'); let s = n.indexOf('?'); return l < s && l >= 0 && (s = -1), s > -1 && (t = n.slice(0, s), i = n.slice(s + 1, l > -1 ? l : n.length), a = e(i)), l > -1 && (t = t || n.slice(0, l), o = n.slice(l, n.length)), t = Fp(t ?? n, r), {
    fullPath: t + (i && '?') + i + o, path: t, query: a, hash: o,
  };
} function Mp(e, n) { const r = n.query ? e(n.query) : ''; return n.path + (r && '?') + r + (n.hash || ''); } function vi(e, n) { return !n || !e.toLowerCase().startsWith(n.toLowerCase()) ? e : e.slice(n.length) || '/'; } function vp(e, n, r) { const t = n.matched.length - 1; const a = r.matched.length - 1; return t > -1 && t === a && dr(n.matched[t], r.matched[a]) && Jo(n.params, r.params) && e(n.query) === e(r.query) && n.hash === r.hash; } function dr(e, n) { return (e.aliasOf || e) === (n.aliasOf || n); } function Jo(e, n) { if (Object.keys(e).length !== Object.keys(n).length) return !1; for (const r in e) if (!Sp(e[r], n[r])) return !1; return !0; } function Sp(e, n) { return ln(e) ? Si(e, n) : ln(n) ? Si(n, e) : e === n; } function Si(e, n) { return ln(n) ? e.length === n.length && e.every((r, t) => r === n[t]) : e.length === 1 && e[0] === n; } function Fp(e, n) { if (e.startsWith('/')) return e; if (!e) return n; const r = n.split('/'); const t = e.split('/'); let a = r.length - 1; let i; let o; for (i = 0; i < t.length; i++) if (o = t[i], o !== '.') if (o === '..')a > 1 && a--; else break; return `${r.slice(0, a).join('/')}/${t.slice(i - (i === t.length ? 1 : 0)).join('/')}`; } let wr; (function (e) { e.pop = 'pop', e.push = 'push'; }(wr || (wr = {}))); let Wr; (function (e) { e.back = 'back', e.forward = 'forward', e.unknown = ''; }(Wr || (Wr = {}))); function Wp(e) { if (!e) if (er) { const n = document.querySelector('base'); e = n && n.getAttribute('href') || '/', e = e.replace(/^\w+:\/\/[^\/]+/, ''); } else e = '/'; return e[0] !== '/' && e[0] !== '#' && (e = `/${e}`), Tp(e); } const Ap = /^[^#]+#/; function Pp(e, n) { return e.replace(Ap, '#') + n; } function Dp(e, n) { const r = document.documentElement.getBoundingClientRect(); const t = e.getBoundingClientRect(); return { behavior: n.behavior, left: t.left - r.left - (n.left || 0), top: t.top - r.top - (n.top || 0) }; } const Ht = () => ({ left: window.pageXOffset, top: window.pageYOffset }); function Op(e) { let n; if ('el' in e) { const r = e.el; const t = typeof r === 'string' && r.startsWith('#'); const a = typeof r === 'string' ? t ? document.getElementById(r.slice(1)) : document.querySelector(r) : r; if (!a) return; n = Dp(a, e); } else n = e; 'scrollBehavior' in document.documentElement.style ? window.scrollTo(n) : window.scrollTo(n.left != null ? n.left : window.pageXOffset, n.top != null ? n.top : window.pageYOffset); } function Fi(e, n) { return (history.state ? history.state.position - n : -1) + e; } const da = new Map(); function bp(e, n) { da.set(e, n); } function Hp(e) { const n = da.get(e); return da.delete(e), n; } const Bp = () => `${location.protocol}//${location.host}`; function Zo(e, n) { const { pathname: r, search: t, hash: a } = n; const i = e.indexOf('#'); if (i > -1) { const l = a.includes(e.slice(i)) ? e.slice(i).length : 1; let s = a.slice(l); return s[0] !== '/' && (s = `/${s}`), vi(s, ''); } return vi(r, e) + t + a; } function Cp(e, n, r, t) { const a = []; let i = []; let o = null; const l = ({ state: h }) => { const y = Zo(e, location); const F = r.value; const O = n.value; let L = 0; if (h) { if (r.value = y, n.value = h, o && o === F) { o = null; return; }L = O ? h.position - O.position : 0; } else t(y); a.forEach((A) => { A(r.value, F, { delta: L, type: wr.pop, direction: L ? L > 0 ? Wr.forward : Wr.back : Wr.unknown }); }); }; function s() { o = r.value; } function c(h) { a.push(h); const y = () => { const F = a.indexOf(h); F > -1 && a.splice(F, 1); }; return i.push(y), y; } function u() { const { history: h } = window; h.state && h.replaceState({ ...h.state, scroll: Ht() }, ''); } function f() { for (const h of i)h(); i = [], window.removeEventListener('popstate', l), window.removeEventListener('beforeunload', u); } return window.addEventListener('popstate', l), window.addEventListener('beforeunload', u), { pauseListeners: s, listen: c, destroy: f }; } function Wi(e, n, r, t = !1, a = !1) {
  return {
    back: e, current: n, forward: r, replaced: t, position: window.history.length, scroll: a ? Ht() : null,
  };
} function Vp(e) {
  const { history: n, location: r } = window; const t = { value: Zo(e, r) }; const a = { value: n.state }; a.value || i(t.value, {
    back: null, current: t.value, forward: null, position: n.length - 1, replaced: !0, scroll: null,
  }, !0); function i(s, c, u) { const f = e.indexOf('#'); const h = f > -1 ? (r.host && document.querySelector('base') ? e : e.slice(f)) + s : Bp() + e + s; try { n[u ? 'replaceState' : 'pushState'](c, '', h), a.value = c; } catch (y) { console.error(y), r[u ? 'replace' : 'assign'](h); } } function o(s, c) {
    const u = {
      ...n.state, ...Wi(a.value.back, s, a.value.forward, !0), ...c, position: a.value.position,
    }; i(s, u, !0), t.value = s;
  } function l(s, c) {
    const u = {
      ...a.value, ...n.state, forward: s, scroll: Ht(),
    }; i(u.current, u, !0); const f = { ...Wi(t.value, s, null), position: u.position + 1, ...c }; i(s, f, !1), t.value = s;
  } return {
    location: t, state: a, push: l, replace: o,
  };
} function wp(e) {
  e = Wp(e); const n = Vp(e); const r = Cp(e, n.state, n.location, n.replace); function t(i, o = !0) { o || r.pauseListeners(), history.go(i); } const a = {
    location: '', base: e, go: t, createHref: Pp.bind(null, e), ...n, ...r,
  }; return Object.defineProperty(a, 'location', { enumerable: !0, get: () => n.location.value }), Object.defineProperty(a, 'state', { enumerable: !0, get: () => n.state.value }), a;
} function Up(e) { return typeof e === 'string' || e && typeof e === 'object'; } function Yo(e) { return typeof e === 'string' || typeof e === 'symbol'; } const Wn = {
  path: '/', name: void 0, params: {}, query: {}, hash: '', fullPath: '/', matched: [], meta: {}, redirectedFrom: void 0,
}; const qo = Symbol(''); let Ai; (function (e) { e[e.aborted = 4] = 'aborted', e[e.cancelled = 8] = 'cancelled', e[e.duplicated = 16] = 'duplicated'; }(Ai || (Ai = {}))); function pr(e, n) { return le(new Error(), { type: e, [qo]: !0 }, n); } function yn(e, n) { return e instanceof Error && qo in e && (n == null || !!(e.type & n)); } const Pi = '[^/]+?'; const _p = {
  sensitive: !1, strict: !1, start: !0, end: !0,
}; const Np = /[.+*?^${}()[\]/\\]/g; function Ep(e, n) {
  const r = { ..._p, ...n }; const t = []; let a = r.start ? '^' : ''; const i = []; for (const c of e) {
    const u = c.length ? [] : [90]; r.strict && !c.length && (a += '/'); for (let f = 0; f < c.length; f++) {
      const h = c[f]; let y = 40 + (r.sensitive ? 0.25 : 0); if (h.type === 0)f || (a += '/'), a += h.value.replace(Np, '\\$&'), y += 40; else if (h.type === 1) {
        const {
          value: F, repeatable: O, optional: L, regexp: A,
        } = h; i.push({ name: F, repeatable: O, optional: L }); const V = A || Pi; if (V !== Pi) { y += 10; try { new RegExp(`(${V})`); } catch (_) { throw new Error(`Invalid custom RegExp for param "${F}" (${V}): ${_.message}`); } } let b = O ? `((?:${V})(?:/(?:${V}))*)` : `(${V})`; f || (b = L && c.length < 2 ? `(?:/${b})` : `/${b}`), L && (b += '?'), a += b, y += 20, L && (y += -8), O && (y += -20), V === '.*' && (y += -50);
      }u.push(y);
    }t.push(u);
  } if (r.strict && r.end) { const c = t.length - 1; t[c][t[c].length - 1] += 0.7000000000000001; }r.strict || (a += '/?'), r.end ? a += '$' : r.strict && (a += '(?:/|$)'); const o = new RegExp(a, r.sensitive ? '' : 'i'); function l(c) { const u = c.match(o); const f = {}; if (!u) return null; for (let h = 1; h < u.length; h++) { const y = u[h] || ''; const F = i[h - 1]; f[F.name] = y && F.repeatable ? y.split('/') : y; } return f; } function s(c) { let u = ''; let f = !1; for (const h of e) { (!f || !u.endsWith('/')) && (u += '/'), f = !1; for (const y of h) if (y.type === 0)u += y.value; else if (y.type === 1) { const { value: F, repeatable: O, optional: L } = y; const A = F in c ? c[F] : ''; if (ln(A) && !O) throw new Error(`Provided param "${F}" is an array but it is not repeatable (* or + modifiers)`); const V = ln(A) ? A.join('/') : A; if (!V) if (L)h.length < 2 && (u.endsWith('/') ? u = u.slice(0, -1) : f = !0); else throw new Error(`Missing required param "${F}"`); u += V; } } return u || '/'; } return {
    re: o, score: t, keys: i, parse: l, stringify: s,
  };
} function Ip(e, n) { let r = 0; for (;r < e.length && r < n.length;) { const t = n[r] - e[r]; if (t) return t; r++; } return e.length < n.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > n.length ? n.length === 1 && n[0] === 40 + 40 ? 1 : -1 : 0; } function xp(e, n) { let r = 0; const t = e.score; const a = n.score; for (;r < t.length && r < a.length;) { const i = Ip(t[r], a[r]); if (i) return i; r++; } if (Math.abs(a.length - t.length) === 1) { if (Di(t)) return 1; if (Di(a)) return -1; } return a.length - t.length; } function Di(e) { const n = e[e.length - 1]; return e.length > 0 && n[n.length - 1] < 0; } const Lp = { type: 0, value: '' }; const Gp = /[a-zA-Z0-9_]/; function zp(e) {
  if (!e) return [[]]; if (e === '/') return [[Lp]]; if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`); function n(y) { throw new Error(`ERR (${r})/"${c}": ${y}`); } let r = 0; let t = r; const a = []; let i; function o() { i && a.push(i), i = []; } let l = 0; let s; let c = ''; let u = ''; function f() {
    c && (r === 0 ? i.push({ type: 0, value: c }) : r === 1 || r === 2 || r === 3 ? (i.length > 1 && (s === '*' || s === '+') && n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: 1, value: c, regexp: u, repeatable: s === '*' || s === '+', optional: s === '*' || s === '?',
    })) : n('Invalid state to consume buffer'), c = '');
  } function h() { c += s; } for (;l < e.length;) { if (s = e[l++], s === '\\' && r !== 2) { t = r, r = 4; continue; } switch (r) { case 0: s === '/' ? (c && f(), o()) : s === ':' ? (f(), r = 1) : h(); break; case 4: h(), r = t; break; case 1: s === '(' ? r = 2 : Gp.test(s) ? h() : (f(), r = 0, s !== '*' && s !== '?' && s !== '+' && l--); break; case 2: s === ')' ? u[u.length - 1] == '\\' ? u = u.slice(0, -1) + s : r = 3 : u += s; break; case 3: f(), r = 0, s !== '*' && s !== '?' && s !== '+' && l--, u = ''; break; default: n('Unknown state'); break; } } return r === 2 && n(`Unfinished custom RegExp for param "${c}"`), f(), o(), a;
} function $p(e, n, r) {
  const t = Ep(zp(e.path), r); const a = le(t, {
    record: e, parent: n, children: [], alias: [],
  }); return n && !a.record.aliasOf == !n.record.aliasOf && n.children.push(a), a;
} function Xp(e, n) {
  const r = []; const t = new Map(); n = Hi({ strict: !1, end: !0, sensitive: !1 }, n); function a(u) { return t.get(u); } function i(u, f, h) {
    const y = !h; const F = jp(u); F.aliasOf = h && h.record; const O = Hi(n, u); const L = [F]; if ('alias' in u) {
      const b = typeof u.alias === 'string' ? [u.alias] : u.alias; for (const _ of b) {
        L.push({
          ...F, components: h ? h.record.components : F.components, path: _, aliasOf: h ? h.record : F,
        });
      }
    } let A; let V; for (const b of L) { const { path: _ } = b; if (f && _[0] !== '/') { const N = f.record.path; const M = N[N.length - 1] === '/' ? '' : '/'; b.path = f.record.path + (_ && M + _); } if (A = $p(b, f, O), h ? h.alias.push(A) : (V = V || A, V !== A && V.alias.push(A), y && u.name && !bi(A) && o(u.name)), F.children) { const N = F.children; for (let M = 0; M < N.length; M++)i(N[M], A, h && h.children[M]); }h = h || A, (A.record.components && Object.keys(A.record.components).length || A.record.name || A.record.redirect) && s(A); } return V ? () => { o(V); } : Fr;
  } function o(u) { if (Yo(u)) { const f = t.get(u); f && (t.delete(u), r.splice(r.indexOf(f), 1), f.children.forEach(o), f.alias.forEach(o)); } else { const f = r.indexOf(u); f > -1 && (r.splice(f, 1), u.record.name && t.delete(u.record.name), u.children.forEach(o), u.alias.forEach(o)); } } function l() { return r; } function s(u) { let f = 0; for (;f < r.length && xp(u, r[f]) >= 0 && (u.record.path !== r[f].record.path || !Qo(u, r[f]));)f++; r.splice(f, 0, u), u.record.name && !bi(u) && t.set(u.record.name, u); } function c(u, f) {
    let h; let y = {}; let F; let O; if ('name' in u && u.name) { if (h = t.get(u.name), !h) throw pr(1, { location: u }); O = h.record.name, y = le(Oi(f.params, h.keys.filter((V) => !V.optional).map((V) => V.name)), u.params && Oi(u.params, h.keys.map((V) => V.name))), F = h.stringify(y); } else if ('path' in u)F = u.path, h = r.find((V) => V.re.test(F)), h && (y = h.parse(F), O = h.record.name); else { if (h = f.name ? t.get(f.name) : r.find((V) => V.re.test(f.path)), !h) throw pr(1, { location: u, currentLocation: f }); O = h.record.name, y = { ...f.params, ...u.params }, F = h.stringify(y); } const L = []; let A = h; for (;A;)L.unshift(A.record), A = A.parent; return {
      name: O, path: F, params: y, matched: L, meta: Jp(L),
    };
  } return e.forEach((u) => i(u)), {
    addRoute: i, resolve: c, removeRoute: o, getRoutes: l, getRecordMatcher: a,
  };
} function Oi(e, n) { const r = {}; for (const t of n)t in e && (r[t] = e[t]); return r; } function jp(e) {
  return {
    path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: void 0, beforeEnter: e.beforeEnter, props: Kp(e), children: e.children || [], instances: {}, leaveGuards: new Set(), updateGuards: new Set(), enterCallbacks: {}, components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
} function Kp(e) { const n = {}; const r = e.props || !1; if ('component' in e)n.default = r; else for (const t in e.components)n[t] = typeof r === 'boolean' ? r : r[t]; return n; } function bi(e) { for (;e;) { if (e.record.aliasOf) return !0; e = e.parent; } return !1; } function Jp(e) { return e.reduce((n, r) => le(n, r.meta), {}); } function Hi(e, n) { const r = {}; for (const t in e)r[t] = t in n ? n[t] : e[t]; return r; } function Qo(e, n) { return n.children.some((r) => r === e || Qo(e, r)); } const el = /#/g; const Zp = /&/g; const Yp = /\//g; const qp = /=/g; const Qp = /\?/g; const nl = /\+/g; const ec = /%5B/g; const nc = /%5D/g; const rl = /%5E/g; const rc = /%60/g; const tl = /%7B/g; const tc = /%7C/g; const al = /%7D/g; const ac = /%20/g; function wa(e) { return encodeURI(`${e}`).replace(tc, '|').replace(ec, '[').replace(nc, ']'); } function ic(e) { return wa(e).replace(tl, '{').replace(al, '}').replace(rl, '^'); } function pa(e) {
  return wa(e).replace(nl, '%2B').replace(ac, '+').replace(el, '%23')
    .replace(Zp, '%26')
    .replace(rc, '`')
    .replace(tl, '{')
    .replace(al, '}')
    .replace(rl, '^');
} function oc(e) { return pa(e).replace(qp, '%3D'); } function lc(e) { return wa(e).replace(el, '%23').replace(Qp, '%3F'); } function sc(e) { return e == null ? '' : lc(e).replace(Yp, '%2F'); } function st(e) { try { return decodeURIComponent(`${e}`); } catch {} return `${e}`; } function dc(e) { const n = {}; if (e === '' || e === '?') return n; const t = (e[0] === '?' ? e.slice(1) : e).split('&'); for (let a = 0; a < t.length; ++a) { const i = t[a].replace(nl, ' '); const o = i.indexOf('='); const l = st(o < 0 ? i : i.slice(0, o)); const s = o < 0 ? null : st(i.slice(o + 1)); if (l in n) { let c = n[l]; ln(c) || (c = n[l] = [c]), c.push(s); } else n[l] = s; } return n; } function Bi(e) { let n = ''; for (let r in e) { const t = e[r]; if (r = oc(r), t == null) { t !== void 0 && (n += (n.length ? '&' : '') + r); continue; }(ln(t) ? t.map((i) => i && pa(i)) : [t && pa(t)]).forEach((i) => { i !== void 0 && (n += (n.length ? '&' : '') + r, i != null && (n += `=${i}`)); }); } return n; } function pc(e) { const n = {}; for (const r in e) { const t = e[r]; t !== void 0 && (n[r] = ln(t) ? t.map((a) => (a == null ? null : `${a}`)) : t == null ? t : `${t}`); } return n; } const cc = Symbol(''); const Ci = Symbol(''); const Bt = Symbol(''); const il = Symbol(''); const ca = Symbol(''); function yr() { let e = []; function n(t) { return e.push(t), () => { const a = e.indexOf(t); a > -1 && e.splice(a, 1); }; } function r() { e = []; } return { add: n, list: () => e, reset: r }; } function Pn(e, n, r, t, a) { const i = t && (t.enterCallbacks[a] = t.enterCallbacks[a] || []); return () => new Promise((o, l) => { const s = (f) => { f === !1 ? l(pr(4, { from: r, to: n })) : f instanceof Error ? l(f) : Up(f) ? l(pr(2, { from: n, to: f })) : (i && t.enterCallbacks[a] === i && typeof f === 'function' && i.push(f), o()); }; const c = e.call(t && t.instances[a], n, r, s); let u = Promise.resolve(c); e.length < 3 && (u = u.then(s)), u.catch((f) => l(f)); }); } function xt(e, n, r, t) { const a = []; for (const i of e) for (const o in i.components) { const l = i.components[o]; if (!(n !== 'beforeRouteEnter' && !i.instances[o])) if (uc(l)) { const c = (l.__vccOpts || l)[n]; c && a.push(Pn(c, r, t, i, o)); } else { const s = l(); a.push(() => s.then((c) => { if (!c) return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`)); const u = yp(c) ? c.default : c; i.components[o] = u; const h = (u.__vccOpts || u)[n]; return h && Pn(h, r, t, i, o)(); })); } } return a; } function uc(e) { return typeof e === 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e; } function Vi(e) {
  const n = on(Bt); const r = on(il); const t = J(() => n.resolve(p(e.to))); const a = J(() => { const { matched: s } = t.value; const { length: c } = s; const u = s[c - 1]; const f = r.matched; if (!u || !f.length) return -1; const h = f.findIndex(dr.bind(null, u)); if (h > -1) return h; const y = wi(s[c - 2]); return c > 1 && wi(u) === y && f[f.length - 1].path !== y ? f.findIndex(dr.bind(null, s[c - 2])) : h; }); const i = J(() => a.value > -1 && gc(r.params, t.value.params)); const o = J(() => a.value > -1 && a.value === r.matched.length - 1 && Jo(r.params, t.value.params)); function l(s = {}) { return hc(s) ? n[p(e.replace) ? 'replace' : 'push'](p(e.to)).catch(Fr) : Promise.resolve(); } return {
    route: t, href: J(() => t.value.href), isActive: i, isExactActive: o, navigate: l,
  };
} const mc = ne({
  name: 'RouterLink',
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: 'page' },
  },
  useLink: Vi,
  setup(e, { slots: n }) {
    const r = Pe(Vi(e)); const { options: t } = on(Bt); const a = J(() => ({ [Ui(e.activeClass, t.linkActiveClass, 'router-link-active')]: r.isActive, [Ui(e.exactActiveClass, t.linkExactActiveClass, 'router-link-exact-active')]: r.isExactActive })); return () => {
      const i = n.default && n.default(r); return e.custom ? i : jo('a', {
        'aria-current': r.isExactActive ? e.ariaCurrentValue : null, href: r.href, onClick: r.navigate, class: a.value,
      }, i);
    };
  },
}); const fc = mc; function hc(e) { if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) { if (e.currentTarget && e.currentTarget.getAttribute) { const n = e.currentTarget.getAttribute('target'); if (/\b_blank\b/i.test(n)) return; } return e.preventDefault && e.preventDefault(), !0; } } function gc(e, n) { for (const r in n) { const t = n[r]; const a = e[r]; if (typeof t === 'string') { if (t !== a) return !1; } else if (!ln(a) || a.length !== t.length || t.some((i, o) => i !== a[o])) return !1; } return !0; } function wi(e) { return e ? e.aliasOf ? e.aliasOf.path : e.path : ''; } const Ui = (e, n, r) => e ?? n ?? r; const kc = ne({
  name: 'RouterView',
  inheritAttrs: !1,
  props: { name: { type: String, default: 'default' }, route: Object },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: n, slots: r }) {
    const t = on(ca); const a = J(() => e.route || t.value); const i = on(Ci, 0); const o = J(() => { let c = p(i); const { matched: u } = a.value; let f; for (;(f = u[c]) && !f.components;)c++; return c; }); const l = J(() => a.value.matched[o.value]); Tr(Ci, J(() => o.value + 1)), Tr(cc, l), Tr(ca, a); const s = Rn(); return pe(() => [s.value, l.value, e.name], ([c, u, f], [h, y, F]) => { u && (u.instances[f] = c, y && y !== u && c && c === h && (u.leaveGuards.size || (u.leaveGuards = y.leaveGuards), u.updateGuards.size || (u.updateGuards = y.updateGuards))), c && u && (!y || !dr(u, y) || !h) && (u.enterCallbacks[f] || []).forEach((O) => O(c)); }, { flush: 'post' }), () => {
      const c = a.value; const u = e.name; const f = l.value; const h = f && f.components[u]; if (!h) return _i(r.default, { Component: h, route: c }); const y = f.props[u]; const F = y ? y === !0 ? c.params : typeof y === 'function' ? y(c) : y : null; const L = jo(h, {
        ...F, ...n, onVnodeUnmounted: (A) => { A.component.isUnmounted && (f.instances[u] = null); }, ref: s,
      }); return _i(r.default, { Component: L, route: c }) || L;
    };
  },
}); function _i(e, n) { if (!e) return null; const r = e(n); return r.length === 1 ? r[0] : r; } const yc = kc; function Rc(e) {
  const n = Xp(e.routes, e); const r = e.parseQuery || dc; const t = e.stringifyQuery || Bi; const a = e.history; const i = yr(); const o = yr(); const l = yr(); const s = ks(Wn); let c = Wn; er && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual'); const u = Et.bind(null, (v) => `${v}`); const f = Et.bind(null, sc); const h = Et.bind(null, st); function y(v, w) { let B; let G; return Yo(v) ? (B = n.getRecordMatcher(v), G = w) : G = v, n.addRoute(G, B); } function F(v) { const w = n.getRecordMatcher(v); w && n.removeRoute(w); } function O() { return n.getRoutes().map((v) => v.record); } function L(v) { return !!n.getRecordMatcher(v); } function A(v, w) {
    if (w = { ...w || s.value }, typeof v === 'string') {
      const m = It(r, v, w.path); const g = n.resolve({ path: m.path }, w); const R = a.createHref(m.fullPath); return le(m, g, {
        params: h(g.params), hash: st(m.hash), redirectedFrom: void 0, href: R,
      });
    } let B; if ('path' in v)B = { ...v, path: It(r, v.path, w.path).path }; else { const m = { ...v.params }; for (const g in m)m[g] == null && delete m[g]; B = { ...v, params: f(v.params) }, w.params = f(w.params); } const G = n.resolve(B, w); const te = v.hash || ''; G.params = u(h(G.params)); const ge = Mp(t, { ...v, hash: ic(te), path: G.path }); const ee = a.createHref(ge); return {
      fullPath: ge, hash: te, query: t === Bi ? pc(v.query) : v.query || {}, ...G, redirectedFrom: void 0, href: ee,
    };
  } function V(v) { return typeof v === 'string' ? It(r, v, s.value.path) : ({ ...v }); } function b(v, w) { if (c !== v) return pr(8, { from: w, to: v }); } function _(v) { return E(v); } function N(v) { return _(le(V(v), { replace: !0 })); } function M(v) {
    const w = v.matched[v.matched.length - 1]; if (w && w.redirect) {
      const { redirect: B } = w; let G = typeof B === 'function' ? B(v) : B; return typeof G === 'string' && (G = G.includes('?') || G.includes('#') ? G = V(G) : { path: G }, G.params = {}), ({
        query: v.query, hash: v.hash, params: 'path' in G ? {} : v.params, ...G,
      });
    }
  } function E(v, w) {
    const B = c = A(v); const G = s.value; const te = v.state; const ge = v.force; const ee = v.replace === !0; const m = M(B); if (m) return E(le(V(m), { state: typeof m === 'object' ? ({ ...te, ...m.state }) : te, force: ge, replace: ee }), w || B); const g = B; g.redirectedFrom = w; let R; return !ge && vp(t, G, B) && (R = pr(16, { to: g, from: G }), wn(G, G, !0, !1)), (R ? Promise.resolve(R) : Jn(g, G)).catch((T) => (yn(T) ? yn(T, 2) ? T : Ze(T) : ce(T, g, G))).then((T) => {
      if (T) {
        if (yn(T, 2)) {
          return E({
            replace: ee, ...V(T.to), state: typeof T.to === 'object' ? ({ ...te, ...T.to.state }) : te, force: ge,
          }, w || g);
        }
      } else T = Sn(g, G, !0, ee, te); return sn(g, G, T), T;
    });
  } function x(v, w) { const B = b(v, w); return B ? Promise.reject(B) : Promise.resolve(); } function Jn(v, w) {
    let B; const [G, te, ge] = Tc(v, w); B = xt(G.reverse(), 'beforeRouteLeave', v, w); for (const m of G)m.leaveGuards.forEach((g) => { B.push(Pn(g, v, w)); }); const ee = x.bind(null, v, w); return B.push(ee), Qn(B).then(() => { B = []; for (const m of i.list())B.push(Pn(m, v, w)); return B.push(ee), Qn(B); }).then(() => { B = xt(te, 'beforeRouteUpdate', v, w); for (const m of te)m.updateGuards.forEach((g) => { B.push(Pn(g, v, w)); }); return B.push(ee), Qn(B); }).then(() => { B = []; for (const m of v.matched) if (m.beforeEnter && !w.matched.includes(m)) if (ln(m.beforeEnter)) for (const g of m.beforeEnter)B.push(Pn(g, v, w)); else B.push(Pn(m.beforeEnter, v, w)); return B.push(ee), Qn(B); })
      .then(() => (v.matched.forEach((m) => m.enterCallbacks = {}), B = xt(ge, 'beforeRouteEnter', v, w), B.push(ee), Qn(B)))
      .then(() => { B = []; for (const m of o.list())B.push(Pn(m, v, w)); return B.push(ee), Qn(B); })
      .catch((m) => (yn(m, 8) ? m : Promise.reject(m)));
  } function sn(v, w, B) { for (const G of l.list())G(v, w, B); } function Sn(v, w, B, G, te) { const ge = b(v, w); if (ge) return ge; const ee = w === Wn; const m = er ? history.state : {}; B && (G || ee ? a.replace(v.fullPath, { scroll: ee && m && m.scroll, ...te }) : a.push(v.fullPath, te)), s.value = v, wn(v, w, B, ee), Ze(); } let dn; function Zn() { dn || (dn = a.listen((v, w, B) => { if (!Ir.listening) return; const G = A(v); const te = M(G); if (te) { E(le(te, { replace: !0 }), G).catch(Fr); return; }c = G; const ge = s.value; er && bp(Fi(ge.fullPath, B.delta), Ht()), Jn(G, ge).catch((ee) => (yn(ee, 12) ? ee : yn(ee, 2) ? (E(ee.to, G).then((m) => { yn(m, 20) && !B.delta && B.type === wr.pop && a.go(-1, !1); }).catch(Fr), Promise.reject()) : (B.delta && a.go(-B.delta, !1), ce(ee, G, ge)))).then((ee) => { ee = ee || Sn(G, ge, !1), ee && (B.delta && !yn(ee, 8) ? a.go(-B.delta, !1) : B.type === wr.pop && yn(ee, 20) && a.go(-1, !1)), sn(G, ge, ee); }).catch(Fr); })); } const Vn = yr(); const hr = yr(); let Te; function ce(v, w, B) { Ze(v); const G = hr.list(); return G.length ? G.forEach((te) => te(v, w, B)) : console.error(v), Promise.reject(v); } function se() { return Te && s.value !== Wn ? Promise.resolve() : new Promise((v, w) => { Vn.add([v, w]); }); } function Ze(v) { return Te || (Te = !v, Zn(), Vn.list().forEach(([w, B]) => (v ? B(v) : w())), Vn.reset()), v; } function wn(v, w, B, G) { const { scrollBehavior: te } = e; if (!er || !te) return Promise.resolve(); const ge = !B && Hp(Fi(v.fullPath, 0)) || (G || !B) && history.state && history.state.scroll || null; return Mo().then(() => te(v, w, ge)).then((ee) => ee && Op(ee)).catch((ee) => ce(ee, v, w)); } const Ye = (v) => a.go(v); let Ee; const Yn = new Set(); const
    Ir = {
      currentRoute: s, listening: !0, addRoute: y, removeRoute: F, hasRoute: L, getRoutes: O, resolve: A, options: e, push: _, replace: N, go: Ye, back: () => Ye(-1), forward: () => Ye(1), beforeEach: i.add, beforeResolve: o.add, afterEach: l.add, onError: hr.add, isReady: se, install(v) { const w = this; v.component('RouterLink', fc), v.component('RouterView', yc), v.config.globalProperties.$router = w, Object.defineProperty(v.config.globalProperties, '$route', { enumerable: !0, get: () => p(s) }), er && !Ee && s.value === Wn && (Ee = !0, _(a.location).catch((te) => {})); const B = {}; for (const te in Wn)B[te] = J(() => s.value[te]); v.provide(Bt, w), v.provide(il, Pe(B)), v.provide(ca, s); const G = v.unmount; Yn.add(v), v.unmount = function () { Yn.delete(v), Yn.size < 1 && (c = Wn, dn && dn(), dn = null, s.value = Wn, Ee = !1, Te = !1), G(); }; },
    }; return Ir;
} function Qn(e) { return e.reduce((n, r) => n.then(() => r()), Promise.resolve()); } function Tc(e, n) { const r = []; const t = []; const a = []; const i = Math.max(n.matched.length, e.matched.length); for (let o = 0; o < i; o++) { const l = n.matched[o]; l && (e.matched.find((c) => dr(c, l)) ? t.push(l) : r.push(l)); const s = e.matched[o]; s && (n.matched.find((c) => dr(c, s)) || a.push(s)); } return [r, t, a]; } function Mc() { return on(Bt); } const kn = (e) => (Ao('data-v-5026e059'), e = e(), Po(), e); const vc = kn(() => d('h1', null, 'Welcome to OPTN!', -1)); const Sc = kn(() => d('p', null, ' An online Forza community dedicated to helping others. Our mission is to simplify tuning, put it in the simplest terms possible and help new tuners get their feet wet and discover the potential of a car. ', -1)); const Fc = { href: 'https://discord.gg/K2Kk5Kj6PP', target: '_blank', class: 'inline-flex items-center align-middle' }; const Wc = ['src']; const Ac = kn(() => d('span', null, 'Discord', -1)); const Pc = kn(() => d('h2', null, 'Weekly Challenges', -1)); const Dc = kn(() => d('p', null, ' We have weekly challenges through Forza Rivals mode. Follow this week’s restrictions (specific car, category or even other fun restrictions) and try to be the fastest! Our community will do its best to help you improve both your driving and how you build and tune your cars. ', -1)); const Oc = { href: 'https://reddit.com/r/ForzaOpenTunes', target: '_blank', class: 'inline-flex items-center align-middle' }; const bc = ['src']; const Hc = kn(() => d('span', null, 'r/ForzaOpenTunes', -1)); const Bc = { href: 'https://discord.gg/UQQd9XdZnN', class: 'inline-flex items-center align-middle' }; const Cc = ['src']; const Vc = kn(() => d('span', null, 'Discord', -1)); const wc = kn(() => d('h2', null, 'Tuning Guide', -1)); const Uc = kn(() => d('a', { href: 'https://docs.google.com/document/d/1r5auWYA46yrxjB6hsg8bYs02qmJt6R2LyAK8TOG1I0M/edit?usp=sharing', target: '_blank' }, ' Tuning Guide ', -1)); const _c = kn(() => d('h2', null, 'Tune Formatter', -1)); const Nc = ne({ __name: 'AppHome', setup(e) { const n = 'https://account.xbox.com/en-ca/clubs/profile?clubid=3379875686571131&csrf=8pknUkepH9Fer0B8L4kkDml3eJUBA0QC3XhOOHgAMwO7ie104Lkr4HI_cYBdFPkKDxqj13LJD7-VzHGV-6mANkBsOGM1&wa=wsignin1.0'; return (r, t) => { const a = Ha('RouterLink'); return U(), j('div', null, [vc, Sc, d('p', null, [q(' This website hosts many tools to help toward this, but the most effective way to interact is through our '), d('a', Fc, [d('img', { src: p(sa), alt: 'Discord', class: 'h-8 mr-1' }, null, 8, Wc), Ac]), q(' server. ')]), Pc, Dc, d('p', null, [q(' Challenges are posted every Monday on '), d('a', Oc, [d('img', { src: p(Ko), alt: 'Reddit', class: 'h-8 mr-1' }, null, 8, bc), Hc]), q(' which is also where tunes must be posted to be eligible to win. Join the discussion on '), d('a', Bc, [d('img', { src: p(sa), alt: 'Discord', class: 'h-8 mr-1' }, null, 8, Cc), Vc])]), d('p', null, [q(' The challenges are designed to be different, and more often than not push tuners outside their comfort zone to grow both their tuning and driving skills. Join the '), d('a', { href: n, target: '_blank' }, ' OPTN Club on Xbox '), q(' to see how you score against other open tuners! ')]), wc, d('p', null, [q(' We have a '), Uc, q(" (Google Docs) available with nearly everything you need to know about tuning. Tuning is quite a deep subject, don't try to understand everything at once! Start with the basics, use the "), k(a, { to: { name: 'tuningchart' } }, { default: ie(() => [q('Tuning Chart')]), _: 1 }), q(" for troubleshooting, and don't hesitate to ask help from the pros on our Discord server. ")]), _c, d('p', null, [q(' One of the most important tools is our '), k(a, { to: { name: 'formatter' } }, { default: ie(() => [q('Tune Formatter')]), _: 1 }), q(". OPTN in fact means “Open Tuning”, as this community is built on sharing open source tunes. Forza games lock the tunes so when you download it from someone else, you can't see exactly what the original tuner did to the car or edit it. The Tune Formatter was created as a workaround to this problem. ")])]); }; } }); const Ec = bt(Nc, [['__scopeId', 'data-v-5026e059']]); function Ic(e) { return e.toLowerCase(); } const xc = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g]; const Lc = /[^A-Z0-9]+/gi; function Gc(e, n) { n === void 0 && (n = {}); for (var r = n.splitRegexp, t = r === void 0 ? xc : r, a = n.stripRegexp, i = a === void 0 ? Lc : a, o = n.transform, l = o === void 0 ? Ic : o, s = n.delimiter, c = s === void 0 ? ' ' : s, u = Ni(Ni(e, t, '$1\0$2'), i, '\0'), f = 0, h = u.length; u.charAt(f) === '\0';)f++; for (;u.charAt(h - 1) === '\0';)h--; return u.slice(f, h).split('\0').map(l).join(c); } function Ni(e, n, r) { return n instanceof RegExp ? e.replace(n, r) : n.reduce((t, a) => t.replace(a, r), e); }/* ! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */let ua = function () { return ua = Object.assign || function (n) { for (var r, t = 1, a = arguments.length; t < a; t++) { r = arguments[t]; for (const i in r)Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]); } return n; }, ua.apply(this, arguments); }; function zc(e) { return e.charAt(0).toUpperCase() + e.substr(1); } function $c(e) { return zc(e.toLowerCase()); } function Xc(e, n) { return n === void 0 && (n = {}), Gc(e, { delimiter: ' ', transform: $c, ...n }); } const Ua = ['Acura', "Alejandra's", 'Alpine', 'Alumi Craft', 'AMC', 'AMG Transport Dynamics', 'Apollo', 'Ariel', 'Aston Martin', 'Audi', 'Austin-Healey', 'Auto Union', 'BAC', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Can-Am', 'Caterham', 'Chevrolet', 'Datsun', 'DeBerti', 'DeLorean', 'Dodge', 'Donkervoort', 'Exomotive', 'Ferrari', 'Ford', 'Formula Drift', 'Forsberg Racing', 'Funco Motorsports', 'GMC', 'Hennessey', 'Holden', 'Honda', 'Hoonigan', 'Hot Wheels', 'HSV', 'Hummer', 'Hyundai', 'Infiniti', 'International', 'Italdesign', 'Jaguar', 'Jeep', 'Koenigsegg', 'KTM', 'Lamborghini', 'Land Rover', 'Lexus', 'Local Motors', 'Lola', 'Lotus', 'Maserati', 'Mazda', 'McLaren', 'Mercedes-AMG', 'Mercedes-Benz', 'Mercury', 'Meyers', 'MG', 'MINI', 'Mitsubishi', 'Morgan', 'Morris', 'Mosler', 'Napier', 'Nissan', 'Noble', 'Opel', 'Pagani', 'Peel', 'Penhall', 'Peugeot', 'Plymouth', 'Polaris', 'Pontiac', 'Porsche', 'Radical', 'RAESR', 'Ram', 'Reliant', 'Renault', 'Rimac', 'RJ Anderson', 'Saleen', 'Shelby', 'Sierra Cars', 'Subaru', 'Toyota', 'TVR', 'Ultima', 'Vauxhall', 'Volkswagen', 'Volvo', 'VUHL', 'Willys', 'Zenvo']; const ol = [{
  fullname: '2017 Acura NSX', nickname: "Acura NSX '17", year: 2017, make: 'Acura', model: 'NSX', displ: 3493, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'AWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2002 Acura RSX Type-S', nickname: 'Acura RSX', year: 2002, make: 'Acura', model: 'RSX Type-S', displ: 1998, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Sport', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2001 Acura Integra Type-R', nickname: 'Acura Integra', year: 2001, make: 'Acura', model: 'Integra Type-R', displ: 1797, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 195, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: "2020 Alejandra's Flatbed Truck", nickname: '', year: 2020, make: "Alejandra's", model: 'Flatbed Truck', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '2017 Alpine A110', nickname: "Alpine A110 '17", year: 2017, make: 'Alpine', model: 'A110', displ: 1798, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1973 Alpine A110 1600s', nickname: 'Renault A110', year: 1973, make: 'Alpine', model: 'A110 1600s', displ: 1605, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 165, trackWidth: 'no', aeroorkitOptions: 'Sport', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Alumi Craft Class 10 Race Car', nickname: 'Alumi Craft C.10', year: 2015, make: 'Alumi Craft', model: 'Class 10 Race Car', displ: 2384, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1973 AMC Gremlin X', nickname: 'AMC Gremlin', year: 1973, make: 'AMC', model: 'Gremlin X', displ: 4971, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2554 AMG Transport Dynamics M12S Warthog CST', nickname: 'M12S Warthog CST', year: 2554, make: 'AMG Transport Dynamics', model: 'M12S Warthog CST', displ: 8003, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 420, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 Apollo Intensa Emozione', nickname: "Apollo IE '18", year: 2018, make: 'Apollo', model: 'Intensa Emozione', displ: 6300, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: "2018 Apollo Intensa Emozione 'Welcome Pack'", nickname: 'Apollo IE WP', year: 2018, make: 'Apollo', model: "Intensa Emozione 'Welcome Pack'", displ: 6300, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: null, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'DLC',
}, {
  fullname: '2016 Ariel Nomad', nickname: 'Ariel Nomad', year: 2016, make: 'Ariel', model: 'Nomad', displ: 2354, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Rally lights', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Ariel Atom 500 V8', nickname: 'Ariel Atom', year: 2013, make: 'Ariel', model: 'Atom 500 V8', displ: 2970, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Aston Martin DBS Superleggera', nickname: "AM DBS SL '19", year: 2019, make: 'Aston Martin', model: 'DBS Superleggera', displ: 5204, aspiration: 'TT', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2019 Aston Martin Valhalla Concept Car', nickname: 'Valhalla Concept', year: 2019, make: 'Aston Martin', model: 'Valhalla Concept Car', displ: 2990, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'AWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2019 Aston Martin Vantage', nickname: "AM Vantage '19", year: 2019, make: 'Aston Martin', model: 'Vantage', displ: 3982, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2017 Aston Martin DB11', nickname: 'AM DB11', year: 2017, make: 'Aston Martin', model: 'DB11', displ: 5204, aspiration: 'TT', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2017 Aston Martin Vulcan AMR Pro', nickname: 'AM Vulcan AMR', year: 2017, make: 'Aston Martin', model: 'Vulcan AMR Pro', displ: 6949, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 345, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2016 Aston Martin Vantage GT12', nickname: "AM Vantage '16", year: 2016, make: 'Aston Martin', model: 'Vantage GT12', displ: 5935, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Aston Martin V12 Vantage S', nickname: "Vantage S '13", year: 2013, make: 'Aston Martin', model: 'V12 Vantage S', displ: 5935, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1964 Aston Martin DB5', nickname: 'AM DB5', year: 1964, make: 'Aston Martin', model: 'DB5', displ: 3996, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 Audi TT RS', nickname: '', year: 2018, make: 'Audi', model: 'TT RS', displ: 2480, aspiration: 'NA', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'AWD', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'DLC',
}, {
  fullname: '2016 Audi R8 V10 plus', nickname: 'Audi R8 V10 plus', year: 2016, make: 'Audi', model: 'R8 V10 plus', displ: 5204, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'AWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Audi RS 6 Avant', nickname: "Audi RS 6 '15", year: 2015, make: 'Audi', model: 'RS 6 Avant', displ: 4e3, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 285, trackWidth: 'Both', aeroorkitOptions: 'Preset WB Safety Lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 Audi S1', nickname: 'Audi S1', year: 2015, make: 'Audi', model: 'S1', displ: 1984, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2015 Audi TTS Coupe', nickname: 'Audi TTS', year: 2015, make: 'Audi', model: 'TTS Coupe', displ: 1984, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2013 Audi R8 Coupe V10 plus 5.2 FSI quattro', nickname: "Audi R8 '13", year: 2013, make: 'Audi', model: 'R8 Coupe V10 plus 5.2 FSI quattro', displ: 5204, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'AWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Preset / Roof', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Audi RS 4 Avant', nickname: "Audi RS 4 '13", year: 2013, make: 'Audi', model: 'RS 4 Avant', displ: 4163, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Audi RS 7 Sportback', nickname: 'Audi RS 7', year: 2013, make: 'Audi', model: 'RS 7 Sportback', displ: 3993, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2011 Audi RS 3 Sportback', nickname: 'Audi RS 3', year: 2011, make: 'Audi', model: 'RS 3 Sportback', displ: 2480, aspiration: 'T', engineType: 'Inline', cylinders: 5, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Street', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2011 Audi RS 5 Coupe', nickname: 'Audi RS 5', year: 2011, make: 'Audi', model: 'RS 5 Coupe', displ: 4163, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Street', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2010 Audi TT RS Coupe', nickname: 'Audi TT RS', year: 2010, make: 'Audi', model: 'TT RS Coupe', displ: 2480, aspiration: 'T', engineType: 'Inline', cylinders: 5, enginePlacement: 'F', drive: 'AWD', rTireWidth: 255, trackWidth: 'no', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2009 Audi RS 6', nickname: "Audi RS 6 '09", year: 2009, make: 'Audi', model: 'RS 6', displ: 5e3, aspiration: 'TT', engineType: 'V', cylinders: 10, enginePlacement: 'F', drive: 'AWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2006 Audi RS 4', nickname: "Audi RS 4 '06", year: 2006, make: 'Audi', model: 'RS 4', displ: 4163, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2003 Audi RS 6', nickname: "Audi RS 6 '03", year: 2003, make: 'Audi', model: 'RS 6', displ: 4172, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2001 Audi RS 4 Avant', nickname: "Audi RS 4 '01", year: 2001, make: 'Audi', model: 'RS 4 Avant', displ: 2671, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1995 Audi Avant RS 2', nickname: 'Audi RS 2', year: 1995, make: 'Audi', model: 'Avant RS 2', displ: 2226, aspiration: 'T', engineType: 'Inline', cylinders: 5, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1983 Audi Sport quattro', nickname: 'Audi Quattro', year: 1983, make: 'Audi', model: 'Sport quattro', displ: 2134, aspiration: 'T', engineType: 'Inline', cylinders: 5, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Preset / rally', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1958 Austin-Healey Sprite MkI', nickname: 'Sprite MKI', year: 1958, make: 'Austin-Healey', model: 'Sprite MkI', displ: 948, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 145, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1939 Auto Union Type D', nickname: 'AutoUnion Type D', year: 1939, make: 'Auto Union', model: 'Type D', displ: 2990, aspiration: 'PDS', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 200, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2014 BAC Mono', nickname: 'BAC Mono', year: 2014, make: 'BAC', model: 'Mono', displ: 2300, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2017 Bentley Continental Supersports', nickname: "Bentley Cont '17", year: 2017, make: 'Bentley', model: 'Continental Supersports', displ: 5998, aspiration: 'TT', engineType: 'W', cylinders: 12, enginePlacement: 'F', drive: 'AWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2016 Bentley Bentayga', nickname: 'Bentley Bentayga', year: 2016, make: 'Bentley', model: 'Bentayga', displ: 5950, aspiration: 'TT', engineType: 'W', cylinders: 12, enginePlacement: 'F', drive: 'AWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Preset / Offroad', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1930 Bentley 8 Litre', nickname: 'Bentley 8 Liter', year: 1930, make: 'Bentley', model: '8 Litre', displ: 7983, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 175, trackWidth: 'Rear', aeroorkitOptions: 'Forza', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1930 Bentley Blower 4-1/2 Litre Supercharged', nickname: "4-1/2 Liter '31", year: 1930, make: 'Bentley', model: 'Blower 4-1/2 Litre Supercharged', displ: 4398, aspiration: 'PDS', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: '?', trackWidth: 'no', aeroorkitOptions: 'hood straps', aspirationOptions: 'TT', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2019 BMW Z4 Roadster', nickname: "BMW Z4 '19", year: 2019, make: 'BMW', model: 'Z4 Roadster', displ: 2998, aspiration: 'T', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 BMW M5', nickname: "BMW M5 '18", year: 2018, make: 'BMW', model: 'M5', displ: 4395, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 285, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2016 BMW M2 Coupe', nickname: 'BMW M2', year: 2016, make: 'BMW', model: 'M2 Coupe', displ: 2979, aspiration: 'T', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Street', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2016 BMW M4 GTS', nickname: "BMW M4 '16", year: 2016, make: 'BMW', model: 'M4 GTS', displ: 2979, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'Both', aeroorkitOptions: 'Safety Lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 BMW i8', nickname: 'BMW I8', year: 2015, make: 'BMW', model: 'i8', displ: 1499, aspiration: 'T', engineType: 'Inline', cylinders: 3, enginePlacement: 'M', drive: 'AWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 BMW X6 M', nickname: 'BMW X6 M', year: 2015, make: 'BMW', model: 'X6 M', displ: 4395, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 325, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2014 BMW M4 Coupe', nickname: "BMW M4 '14", year: 2014, make: 'BMW', model: 'M4 Coupe', displ: 2979, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2013 BMW M6 Coupe', nickname: "BMW M6 '13", year: 2013, make: 'BMW', model: 'M6 Coupe', displ: 4395, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2012 BMW M5', nickname: "BMW M5 '12", year: 2012, make: 'BMW', model: 'M5', displ: 4395, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2011 BMW 1 Series M Coupe', nickname: 'BMW 1M', year: 2011, make: 'BMW', model: '1 Series M Coupe', displ: 2979, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Street', aspirationOptions: 'T', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2011 BMW X5 M', nickname: 'BMW X5 M', year: 2011, make: 'BMW', model: 'X5 M', displ: 4395, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Preset / Offroad', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2011 BMW X5 M Forza Edition', nickname: 'BMW X5M FE', year: 2011, make: 'BMW', model: 'X5 M Forza Edition', displ: 4395, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'DLC',
}, {
  fullname: '2011 BMW X5 M Traffic', nickname: '', year: 2011, make: 'BMW', model: 'X5 M Traffic', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '2009 BMW M5', nickname: "BMW M5 '09", year: 2009, make: 'BMW', model: 'M5', displ: 4999, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2008 BMW M3', nickname: "BMW M3 '08", year: 2008, make: 'BMW', model: 'M3', displ: 3999, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2008 BMW Z4 M Coupe', nickname: "BMW Z4 '08", year: 2008, make: 'BMW', model: 'Z4 M Coupe', displ: 3246, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2005 BMW M3', nickname: "BMW M3 '05", year: 2005, make: 'BMW', model: 'M3', displ: 3246, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2003 BMW M5', nickname: "BMW M5 '03", year: 2003, make: 'BMW', model: 'M5', displ: 4941, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2002 BMW M3-GTR', nickname: 'BMW M3-GTR', year: 2002, make: 'BMW', model: 'M3-GTR', displ: 3997, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2002 BMW Z3 M Coupe', nickname: 'BMW Z3', year: 2002, make: 'BMW', model: 'Z3 M Coupe', displ: 3246, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1997 BMW M3', nickname: "BMW M3 '97", year: 1997, make: 'BMW', model: 'M3', displ: 3201, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1995 BMW M5', nickname: "BMW M5 '95", year: 1995, make: 'BMW', model: 'M5', displ: 3795, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1991 BMW M3', nickname: "BMW M3 '91", year: 1991, make: 'BMW', model: 'M3', displ: 2302, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Street', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1988 BMW M5', nickname: "BMW M5 '88", year: 1988, make: 'BMW', model: 'M5', displ: 3453, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1981 BMW M1', nickname: 'BMW M1', year: 1981, make: 'BMW', model: 'M1', displ: 3453, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1973 BMW 2002 Turbo', nickname: 'BMW 2002 Turbo', year: 1973, make: 'BMW', model: '2002 Turbo', displ: 1990, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1957 BMW Isetta 300 Export', nickname: 'BMW Isetta', year: 1957, make: 'BMW', model: 'Isetta 300 Export', displ: 298, aspiration: 'NA', engineType: 'Inline', cylinders: 1, enginePlacement: 'M', drive: 'RWD', rTireWidth: 115, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Bugatti Divo', nickname: 'Bugatti Divo', year: 2019, make: 'Bugatti', model: 'Divo', displ: 7993, aspiration: 'TT', engineType: 'W', cylinders: 16, enginePlacement: 'M', drive: 'AWD', rTireWidth: 355, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 Bugatti Chiron', nickname: 'Bugatti Chiron', year: 2018, make: 'Bugatti', model: 'Chiron', displ: 7993, aspiration: 'TT', engineType: 'W', cylinders: 16, enginePlacement: 'M', drive: 'AWD', rTireWidth: 355, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2011 Bugatti Veyron Super Sport', nickname: 'Bugatti Veyron', year: 2011, make: 'Bugatti', model: 'Veyron Super Sport', displ: 7993, aspiration: 'TT', engineType: 'W', cylinders: 16, enginePlacement: 'M', drive: 'AWD', rTireWidth: 365, trackWidth: 'Both', aeroorkitOptions: 'Safety Lights', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1992 Bugatti EB110 Super Sport', nickname: 'Bugatti EB110', year: 1992, make: 'Bugatti', model: 'EB110 Super Sport', displ: 3498, aspiration: 'TT', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'AWD', rTireWidth: 325, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1926 Bugatti Type 35 C', nickname: 'Bugatti T35 C', year: 1926, make: 'Bugatti', model: 'Type 35 C', displ: 1991, aspiration: 'PDS', engineType: 'Inline', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 135, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1987 Buick Regal GNX', nickname: 'Buick Regal GNX', year: 1987, make: 'Buick', model: 'Regal GNX', displ: 3791, aspiration: 'T', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Preset / Hood', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1970 Buick GSX', nickname: 'Buick GSX', year: 1970, make: 'Buick', model: 'GSX', displ: 7468, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2016 Cadillac ATS-V', nickname: 'Caddy ATS-V', year: 2016, make: 'Cadillac', model: 'ATS-V', displ: 3564, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2016 Cadillac CTS-V Sedan', nickname: "Caddy CTS-V '16", year: 2016, make: 'Cadillac', model: 'CTS-V Sedan', displ: 6162, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 Can-Am Maverick X RS Turbo R', nickname: 'Can-Am Maverick', year: 2018, make: 'Can-Am', model: 'Maverick X RS Turbo R', displ: 900, aspiration: 'T', engineType: 'Inline', cylinders: 3, enginePlacement: 'M', drive: 'AWD', rTireWidth: 255, trackWidth: 'no', aeroorkitOptions: 'Spare tire', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2013 Caterham Superlight R500', nickname: 'Caterham R500', year: 2013, make: 'Caterham', model: 'Superlight R500', displ: 1999, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Rear', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2020 Chevrolet Corvette Stingray Coupe', nickname: "Corvette C8 '20", year: 2020, make: 'Chevrolet', model: 'Corvette Stingray Coupe', displ: 6157, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Chevrolet Corvette ZR1', nickname: "Corvette '19", year: 2019, make: 'Chevrolet', model: 'Corvette ZR1', displ: 6162, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 Chevrolet Camaro ZL1 1LE', nickname: "Chevy Camaro '18", year: 2018, make: 'Chevrolet', model: 'Camaro ZL1 1LE', displ: 6161, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 325, trackWidth: 'Front', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2017 Chevrolet Camaro ZL1', nickname: "Chevy Camaro '17", year: 2017, make: 'Chevrolet', model: 'Camaro ZL1', displ: 6161, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Safety Lights / Hood', aspirationOptions: 'TT', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2017 Chevrolet Colorado ZR2', nickname: 'Chevrolet ZR2', year: 2017, make: 'Chevrolet', model: 'Colorado ZR2', displ: 3564, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Rally lights / bed', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2017 Chevrolet Colorado ZR2 Traffic', nickname: '', year: 2017, make: 'Chevrolet', model: 'Colorado ZR2 Traffic', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '2015 Chevrolet Camaro Z/28', nickname: "Chevy Camaro '15", year: 2015, make: 'Chevrolet', model: 'Camaro Z/28', displ: 7008, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Chevrolet Corvette Z06', nickname: "Corvette '15", year: 2015, make: 'Chevrolet', model: 'Corvette Z06', displ: 6162, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2009 Chevrolet Corvette ZR1', nickname: "Corvette '09", year: 2009, make: 'Chevrolet', model: 'Corvette ZR1', displ: 6162, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2002 Chevrolet Corvette Z06', nickname: "Corvette' 02", year: 2002, make: 'Chevrolet', model: 'Corvette Z06', displ: 5666, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1996 Chevrolet Impala Super Sport', nickname: "Chevy Impala '96", year: 1996, make: 'Chevrolet', model: 'Impala Super Sport', displ: 5733, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Police lights', aspirationOptions: 'TT, PDS, T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1995 Chevrolet Corvette ZR-1', nickname: "Corvette '95", year: 1995, make: 'Chevrolet', model: 'Corvette ZR-1', displ: 5727, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1988 Chevrolet Monte Carlo Super Sport', nickname: 'Chevy MonteCarlo', year: 1988, make: 'Chevrolet', model: 'Monte Carlo Super Sport', displ: 5001, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1979 Chevrolet Camaro  Z28', nickname: "Chevy Camaro '79", year: 1979, make: 'Chevrolet', model: 'Camaro  Z28', displ: 5733, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 Chevrolet Camaro Z28', nickname: "Chevy Camaro '70", year: 1970, make: 'Chevrolet', model: 'Camaro Z28', displ: 5735, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 Chevrolet Chevelle Super Sport 454', nickname: "Chevelle '70", year: 1970, make: 'Chevrolet', model: 'Chevelle Super Sport 454', displ: 7439, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 Chevrolet Corvette ZR-1', nickname: "Corvette '70", year: 1970, make: 'Chevrolet', model: 'Corvette ZR-1', displ: 5740, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 Chevrolet El Camino Super Sport 454', nickname: 'Chevy El Camino', year: 1970, make: 'Chevrolet', model: 'El Camino Super Sport 454', displ: 7439, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Yes', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Chevrolet Camaro Super Sport Coupe', nickname: "Chevy Camaro '69", year: 1969, make: 'Chevrolet', model: 'Camaro Super Sport Coupe', displ: 6478, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Chevrolet Nova Super Sport 396', nickname: "Chevy Nova '69", year: 1969, make: 'Chevrolet', model: 'Nova Super Sport 396', displ: 6489, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'Front', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1967 Chevrolet Corvette Stingray 427', nickname: "Corvette '67", year: 1967, make: 'Chevrolet', model: 'Corvette Stingray 427', displ: 6997, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'no', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1964 Chevrolet Impala Super Sport 409', nickname: 'Chevy Impala', year: 1964, make: 'Chevrolet', model: 'Impala Super Sport 409', displ: 6670, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1960 Chevrolet Corvette', nickname: "Corvette '60", year: 1960, make: 'Chevrolet', model: 'Corvette', displ: 4638, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 165, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1957 Chevrolet Bel Air', nickname: 'Chevy Bel Air', year: 1957, make: 'Chevrolet', model: 'Bel Air', displ: 4638, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1955 Chevrolet 150 Utility Sedan', nickname: 'Chevy 150 Sedan', year: 1955, make: 'Chevrolet', model: '150 Utility Sedan', displ: 4343, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 175, trackWidth: 'no', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1953 Chevrolet Corvette', nickname: "Corvette '53", year: 1953, make: 'Chevrolet', model: 'Corvette', displ: 3861, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'Both', aeroorkitOptions: 'Roof / hood', aspirationOptions: 'CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1953 Chevrolet Corvette Forza Edition', nickname: "Corvette '53 FE", year: 1953, make: 'Chevrolet', model: 'Corvette Forza Edition', displ: 7440, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Hood', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 Datsun 510', nickname: 'Datsun 510', year: 1970, make: 'Datsun', model: '510', displ: 1595, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 165, trackWidth: 'no', aeroorkitOptions: 'Preset / drift', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 DeBerti Toyota Tacoma TRD "The Performance Truck', nickname: 'DD Tacoma TRD', year: 2019, make: 'DeBerti', model: 'Toyota Tacoma TRD "The Performance Truck', displ: 6880, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 DeBerti Chevrolet Silverado 1500 Drift Truck', nickname: 'Silverado DD', year: 2018, make: 'DeBerti', model: 'Chevrolet Silverado 1500 Drift Truck', displ: 6964, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 DeBerti F-150 Prerunner Truck', nickname: 'DeBerti F-150', year: 2018, make: 'DeBerti', model: 'F-150 Prerunner Truck', displ: 4951, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Front bar, mudflaps', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2013 DeBerti Wrangler Unlimited', nickname: 'DeBerti Wrangler', year: 2013, make: 'DeBerti', model: 'Wrangler Unlimited', displ: 6166, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 365, trackWidth: 'no', aeroorkitOptions: 'not adjustable', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1982 DeLorean DMC-12', nickname: 'DeLorean DMC-12', year: 1982, make: 'DeLorean', model: 'DMC-12', displ: 2850, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'stock', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 Dodge Challenger SRT Demon', nickname: 'Dodge SRT Demon', year: 2018, make: 'Dodge', model: 'Challenger SRT Demon', displ: 6166, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 Dodge Durango SRT', nickname: 'Dodge Durango', year: 2018, make: 'Dodge', model: 'Durango SRT', displ: 6424, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Preset / Offroad', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2016 Dodge Viper ACR', nickname: "Dodge Viper '16", year: 2016, make: 'Dodge', model: 'Viper ACR', displ: 8382, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'F', drive: 'RWD', rTireWidth: 355, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Dodge Challenger SRT Hellcat', nickname: "Challenger '15", year: 2015, make: 'Dodge', model: 'Challenger SRT Hellcat', displ: 6166, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2015 Dodge Charger SRT Hellcat', nickname: "Dodge Charger '15", year: 2015, make: 'Dodge', model: 'Charger SRT Hellcat', displ: 6166, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2013 Dodge SRT Viper GTS', nickname: "Dodge Viper '13", year: 2013, make: 'Dodge', model: 'SRT Viper GTS', displ: 8383, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'F', drive: 'RWD', rTireWidth: 355, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2008 Dodge Viper SRT10 ACR', nickname: "Dodge Viper '08", year: 2008, make: 'Dodge', model: 'Viper SRT10 ACR', displ: 8383, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'F', drive: 'RWD', rTireWidth: 345, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1999 Dodge Viper GTS ACR', nickname: "Dodge Viper '99", year: 1999, make: 'Dodge', model: 'Viper GTS ACR', displ: 7990, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'F', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 Dodge Challenger R/T', nickname: "Challenger '70", year: 1970, make: 'Dodge', model: 'Challenger R/T', displ: 6982, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Dodge Charger Daytona HEMI', nickname: 'Charger Daytona', year: 1969, make: 'Dodge', model: 'Charger Daytona HEMI', displ: 6974, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Dodge Charger R/T', nickname: "Dodge Charger '69", year: 1969, make: 'Dodge', model: 'Charger R/T', displ: 6981, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Front', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Dodge Charger R/T Forza Edition', nickname: "Charger '69 FE", year: 1969, make: 'Dodge', model: 'Charger R/T Forza Edition', displ: 5870, aspiration: '', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Front', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'DLC',
}, {
  fullname: '1968 Dodge Dart HEMI Super Stock', nickname: "Dodge Dart '68", year: 1968, make: 'Dodge', model: 'Dart HEMI Super Stock', displ: 6980, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Donkervoort D8 GTO', nickname: 'Donkervoort GTO', year: 2013, make: 'Donkervoort', model: 'D8 GTO', displ: 2480, aspiration: 'T', engineType: 'Inline', cylinders: 5, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'cu',
}, {
  fullname: '2018 Exomotive Exocet Off-Road', nickname: 'Exocet Off-Road', year: 2018, make: 'Exomotive', model: 'Exocet Off-Road', displ: 1839, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 240, trackWidth: 'no', aeroorkitOptions: 'light bar, fenders', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2018 Exomotive Exocet Off-Road Forza Edition', nickname: 'Exocet OR FE', year: 2018, make: 'Exomotive', model: 'Exocet Off-Road Forza Edition', displ: 1600, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Ferrari 488 Pista', nickname: "Ferrari 488 Pista '19", year: 2019, make: 'Ferrari', model: '488 Pista', displ: 3902, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2019 Ferrari Monza SP2', nickname: 'Ferrari Monza', year: 2019, make: 'Ferrari', model: 'Monza SP2', displ: 6496, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'DLC',
}, {
  fullname: '2018 Ferrari FXX-K EVO', nickname: '', year: 2018, make: 'Ferrari', model: 'FXX-K EVO', displ: 6260, aspiration: '', engineType: '', cylinders: null, enginePlacement: 'M', drive: 'RWD', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'DLC',
}, {
  fullname: '2018 Ferrari Portofino', nickname: "Portofino '18", year: 2018, make: 'Ferrari', model: 'Portofino', displ: 3855, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 288, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2017 Ferrari 812 Superfast', nickname: 'Ferrari 812', year: 2017, make: 'Ferrari', model: '812 Superfast', displ: 6496, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2017 Ferrari GTC4Lusso', nickname: 'Ferrari GTC4L', year: 2017, make: 'Ferrari', model: 'GTC4Lusso', displ: 6262, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2017 Ferrari J50', nickname: "Ferrari J50 '17", year: 2017, make: 'Ferrari', model: 'J50', displ: 3900, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'DLC',
}, {
  fullname: '2015 Ferrari 488 GTB', nickname: 'Ferrari 488 GTB', year: 2015, make: 'Ferrari', model: '488 GTB', displ: 3902, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 295, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2015 Ferrari F12tdf', nickname: 'Ferrari F12TDF', year: 2015, make: 'Ferrari', model: 'F12tdf', displ: 6262, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2014 Ferrari FXX K', nickname: 'Ferrari FXX K', year: 2014, make: 'Ferrari', model: 'FXX K', displ: 6262, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Ferrari 458 Speciale', nickname: 'Ferrari 458 S', year: 2013, make: 'Ferrari', model: '458 Speciale', displ: 4497, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 305, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Ferrari LaFerrari', nickname: 'LaFerrari', year: 2013, make: 'Ferrari', model: 'LaFerrari', displ: 6262, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2012 Ferrari 599XX Evoluzione', nickname: 'Ferrari 599XX E', year: 2012, make: 'Ferrari', model: '599XX Evoluzione', displ: 5999, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 310, trackWidth: 'Yes', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2010 Ferrari 599 GTO', nickname: 'Ferrari 599 GTO', year: 2010, make: 'Ferrari', model: '599 GTO', displ: 5999, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'cu',
}, {
  fullname: '2009 Ferrari 458 Italia', nickname: 'Ferrari 458', year: 2009, make: 'Ferrari', model: '458 Italia', displ: 4498, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 295, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2007 Ferrari 430 Scuderia', nickname: 'Ferrari 430 S', year: 2007, make: 'Ferrari', model: '430 Scuderia', displ: 4308, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 285, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2005 Ferrari FXX', nickname: 'Ferrari FXX', year: 2005, make: 'Ferrari', model: 'FXX', displ: 6262, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'Yes', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2003 Ferrari 360 Challenge Stradale', nickname: 'Ferrari 360 CS', year: 2003, make: 'Ferrari', model: '360 Challenge Stradale', displ: 3586, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2002 Ferrari 575M Maranello', nickname: 'Ferrari 575M', year: 2002, make: 'Ferrari', model: '575M Maranello', displ: 4943, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'cu',
}, {
  fullname: '2002 Ferrari Enzo Ferrari', nickname: 'Ferrari Enzo', year: 2002, make: 'Ferrari', model: 'Enzo Ferrari', displ: 5998, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1996 Ferrari F50 GT', nickname: 'Ferrari F50 GT', year: 1996, make: 'Ferrari', model: 'F50 GT', displ: 4700, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 325, trackWidth: 'Yes', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1995 Ferrari F50', nickname: 'Ferrari F50', year: 1995, make: 'Ferrari', model: 'F50', displ: 4700, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1994 Ferrari F355 Berlinetta', nickname: 'Ferrari F355', year: 1994, make: 'Ferrari', model: 'F355 Berlinetta', displ: 3496, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1989 Ferrari F40 Competizione', nickname: 'Ferrari F40 C', year: 1989, make: 'Ferrari', model: 'F40 Competizione', displ: 2936, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 365, trackWidth: 'Yes', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1987 Ferrari F40', nickname: 'Ferrari F40', year: 1987, make: 'Ferrari', model: 'F40', displ: 2936, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1984 Ferrari 288 GTO', nickname: 'Ferrari 288 GTO', year: 1984, make: 'Ferrari', model: '288 GTO', displ: 2855, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 265, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1969 Ferrari Dino 246 GT', nickname: 'Ferrari Dino', year: 1969, make: 'Ferrari', model: 'Dino 246 GT', displ: 2418, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1968 Ferrari 365 GTB/4', nickname: 'Ferrari 365 GTB4', year: 1968, make: 'Ferrari', model: '365 GTB/4', displ: 4390, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'T. PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1967 Ferrari #24 Ferrari Spa 330 P4', nickname: '#24 Ferrari P4', year: 1967, make: 'Ferrari', model: '#24 Ferrari Spa 330 P4', displ: 3967, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1962 Ferrari 250 GTO', nickname: 'Ferrari 250 GTO', year: 1962, make: 'Ferrari', model: '250 GTO', displ: 2953, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1957 Ferrari 250 California', nickname: 'Ferrari 250 Cali', year: 1957, make: 'Ferrari', model: '250 California', displ: 2953, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 185, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1957 Ferrari 250 Testa Rossa', nickname: 'Ferrari 250 TR', year: 1957, make: 'Ferrari', model: '250 Testa Rossa', displ: 2953, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2021 Ford Bronco', nickname: "Ford Bronco '21", year: 2021, make: 'Ford', model: 'Bronco', displ: 2700, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2020 Ford #2069 Ford Performance Bronco R', nickname: 'Bronco R', year: 2020, make: 'Ford', model: '#2069 Ford Performance Bronco R', displ: 2700, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'light bar', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: "2020 Ford #2069 Ford Performance Bronco R 'Welcome Pack'", nickname: 'Bronco R WP', year: 2020, make: 'Ford', model: "#2069 Ford Performance Bronco R 'Welcome Pack'", displ: 2700, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 355, trackWidth: 'no', aeroorkitOptions: 'light bar', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'DLC',
}, {
  fullname: '2020 Ford Mustang Shelby GT500', nickname: "Ford GT500 '20", year: 2020, make: 'Ford', model: 'Mustang Shelby GT500', displ: 5163, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2020 Ford Super Duty F-450 DRW Platinum', nickname: 'Ford SD F-450', year: 2020, make: 'Ford', model: 'Super Duty F-450 DRW Platinum', displ: 6650, aspiration: 'T', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 450, trackWidth: 'no', aeroorkitOptions: 'light bar, bed', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Ford Ranger Raptor', nickname: 'Ranger Raptor', year: 2019, make: 'Ford', model: 'Ranger Raptor', displ: 1996, aspiration: 'TT', engineType: 'V', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 285, trackWidth: 'Both', aeroorkitOptions: 'Bars/Bed', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2019 Ford Ranger Raptor Traffic', nickname: '', year: 2019, make: 'Ford', model: 'Ranger Raptor Traffic', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '2018 Ford #25 Mustang RTR', nickname: '#25 RTR Mustang', year: 2018, make: 'Ford', model: '#25 Mustang RTR', displ: 7146, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2018 Ford #88 Mustang RTR', nickname: '#88 RTR Mustang', year: 2018, make: 'Ford', model: '#88 Mustang RTR', displ: 7146, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2018 Ford Mustang GT', nickname: "Ford Mustang '18", year: 2018, make: 'Ford', model: 'Mustang GT', displ: 5031, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 Ford Mustang RTR Spec 5', nickname: 'Ford Mustang S5', year: 2018, make: 'Ford', model: 'Mustang RTR Spec 5', displ: 5031, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 305, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2017 Ford #14 Rahal Letterman Lanigan Racing GRC Fiesta', nickname: '#14 Ford Fiesta', year: 2017, make: 'Ford', model: '#14 Rahal Letterman Lanigan Racing GRC Fiesta', displ: 2044, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: "2017 Ford #25 'Brocky' Ultra4 Bronco RTR", nickname: '#25 Ford Bronco', year: 2017, make: 'Ford', model: "#25 'Brocky' Ultra4 Bronco RTR", displ: 7e3, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 335, trackWidth: '', aeroorkitOptions: 'none', aspirationOptions: 'TT, PDS', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2017 Ford F-150 Raptor', nickname: "Ford Raptor '17", year: 2017, make: 'Ford', model: 'F-150 Raptor', displ: 3496, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Truck Bed', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2017 Ford Focus RS', nickname: "Ford Focus '17", year: 2017, make: 'Ford', model: 'Focus RS', displ: 2261, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2017 Ford GT', nickname: "Ford GT '17", year: 2017, make: 'Ford', model: 'GT', displ: 3500, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 325, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2017 Ford M-Sport Fiesta RS', nickname: 'Ford Fiesta RS', year: 2017, make: 'Ford', model: 'M-Sport Fiesta RS', displ: 1600, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 215, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2016 Ford Shelby GT350R', nickname: "Ford Mustang '16", year: 2016, make: 'Ford', model: 'Shelby GT350R', displ: 5163, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Sport', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Ford Falcon GT F 351', nickname: "Ford Falcon '15", year: 2015, make: 'Ford', model: 'Falcon GT F 351', displ: 4951, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2014 Ford #11 Rockstar F-150 Trophy Truck', nickname: '#11 Ford F-150', year: 2014, make: 'Ford', model: '#11 Rockstar F-150 Trophy Truck', displ: 7500, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Offroad lights', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2014 Ford Fiesta ST', nickname: "Ford Fiesta '14", year: 2014, make: 'Ford', model: 'Fiesta ST', displ: 1596, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2014 Ford FPV Limited Edition Pursuit Ute', nickname: "Ford Ute '14", year: 2014, make: 'Ford', model: 'FPV Limited Edition Pursuit Ute', displ: 4951, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Roo bars / lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2014 Ford Ranger T6 Rally Raid', nickname: 'Ford Ranger T6', year: 2014, make: 'Ford', model: 'Ranger T6 Rally Raid', displ: 4949, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Ford Shelby GT500', nickname: "Ford Mustang '13", year: 2013, make: 'Ford', model: 'Shelby GT500', displ: 5812, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2011 Ford F-150 SVT Raptor', nickname: "Ford Raptor '11", year: 2011, make: 'Ford', model: 'F-150 SVT Raptor', displ: 6210, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Offroad lights Bed', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2011 Ford Transit SuperSportVan', nickname: 'Ford Transit SSV', year: 2011, make: 'Ford', model: 'Transit SuperSportVan', displ: 3198, aspiration: 'T', engineType: 'Inline', cylinders: 5, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Street', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2011 Ford Transit SuperSportVan Traffic', nickname: '', year: 2011, make: 'Ford', model: 'Transit SuperSportVan Traffic', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '2010 Ford Crown Victoria Police Interceptor', nickname: 'Crown Victoria', year: 2010, make: 'Ford', model: 'Crown Victoria Police Interceptor', displ: 4606, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 235, trackWidth: 'Rear', aeroorkitOptions: 'Police Lights', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2009 Ford Fiesta Traffic', nickname: '', year: 2009, make: 'Ford', model: 'Fiesta Traffic', displ: null, aspiration: '', engineType: '', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '2009 Ford Focus RS', nickname: "Ford Focus '09", year: 2009, make: 'Ford', model: 'Focus RS', displ: 2522, aspiration: 'T', engineType: 'Inline', cylinders: 5, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2005 Ford GT', nickname: "Ford GT '05", year: 2005, make: 'Ford', model: 'GT', displ: 3500, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2003 Ford Focus RS', nickname: "Ford Focus '03", year: 2003, make: 'Ford', model: 'Focus RS', displ: 1988, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 225, trackWidth: 'Yes', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2000 Ford SVT Cobra R', nickname: "Ford Mustang '00", year: 2e3, make: 'Ford', model: 'SVT Cobra R', displ: 5409, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1999 Ford Racing Puma', nickname: 'Ford Racing Puma', year: 1999, make: 'Ford', model: 'Racing Puma', displ: 1679, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Street rally lights', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1999 Ford Racing Puma Forza Edition', nickname: 'Ford Puma FE', year: 1999, make: 'Ford', model: 'Racing Puma Forza Edition', displ: 2100, aspiration: '', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: null, trackWidth: '', aeroorkitOptions: 'Street rally lights', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'DLC',
}, {
  fullname: '1994 Ford Supervan 3', nickname: 'Ford Supervan 3', year: 1994, make: 'Ford', model: 'Supervan 3', displ: 2935, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1993 Ford SVT Cobra R', nickname: "Ford Mustang '93", year: 1993, make: 'Ford', model: 'SVT Cobra R', displ: 4942, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket?', aspirationOptions: 'T, TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1992 Ford Escort RS Cosworth', nickname: "Ford Escort '92", year: 1992, make: 'Ford', model: 'Escort RS Cosworth', displ: 1993, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Preset / Rally', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1987 Ford Sierra Cosworth RS500', nickname: 'Ford RS500', year: 1987, make: 'Ford', model: 'Sierra Cosworth RS500', displ: 1993, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1986 Ford Escort RS Turbo', nickname: 'Ford Escort RS', year: 1986, make: 'Ford', model: 'Escort RS Turbo', displ: 1597, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 195, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '1985 Ford RS200 Evolution', nickname: 'Ford RS200', year: 1985, make: 'Ford', model: 'RS200 Evolution', displ: 2137, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'AWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '1981 Ford Fiesta XR2', nickname: "Ford Fiesta '81", year: 1981, make: 'Ford', model: 'Fiesta XR2', displ: 1598, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 185, trackWidth: 'Both', aeroorkitOptions: 'Rally', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1977 Ford #5 Escort RS1800 MkII', nickname: "#5 Escort '77", year: 1977, make: 'Ford', model: '#5 Escort RS1800 MkII', displ: 1975, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'Both', aeroorkitOptions: 'Remove lights/flaps', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1977 Ford Escort RS1800', nickname: "Ford Escort '77", year: 1977, make: 'Ford', model: 'Escort RS1800', displ: 1835, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 175, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1975 Ford Bronco', nickname: 'Ford Bronco', year: 1975, make: 'Ford', model: 'Bronco', displ: 4949, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'Offroad, Bed', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1975 Ford Bronco Traffic', nickname: 'Ford Bronco', year: 1975, make: 'Ford', model: 'Bronco Traffic', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '1973 Ford Capri RS3100', nickname: 'Ford Capri MKI', year: 1973, make: 'Ford', model: 'Capri RS3100', displ: 3091, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 185, trackWidth: 'Rear', aeroorkitOptions: 'Rally lights', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1973 Ford Escort RS1600', nickname: "Ford Escort '73", year: 1973, make: 'Ford', model: 'Escort RS1600', displ: 1601, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 175, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1972 Ford Falcon XA GT-HO', nickname: "Ford Falcon '72", year: 1972, make: 'Ford', model: 'Falcon XA GT-HO', displ: 5763, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1971 Ford Mustang Mach 1', nickname: "Ford Mustang '71", year: 1971, make: 'Ford', model: 'Mustang Mach 1', displ: 7040, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'Hood', aspirationOptions: 'PDS, CS', naturallyAspirated: 'stock', fh5: 'cu',
}, {
  fullname: '1970 Ford GT70', nickname: "Ford GT70 '70", year: 1970, make: 'Ford', model: 'GT70', displ: 1998, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Forza ( rally lights permanent)', aspirationOptions: 'T, PDS', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '1969 Ford Mustang Boss 302', nickname: "Ford Mustang '69", year: 1969, make: 'Ford', model: 'Mustang Boss 302', displ: 4942, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Rear', aeroorkitOptions: 'Preset Drift', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1968 Ford Mustang GT 2+2 Fastback', nickname: "Ford Mustang '68", year: 1968, make: 'Ford', model: 'Mustang GT 2+2 Fastback', displ: 6383, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 180, trackWidth: 'Yes', aeroorkitOptions: 'Street / Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1967 Ford Racing Escort Mk1', nickname: "Ford Escort '67", year: 1967, make: 'Ford', model: 'Racing Escort Mk1', displ: 1830, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 185, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1966 Ford #2 GT40 MkII', nickname: '#2 Ford GT40', year: 1966, make: 'Ford', model: '#2 GT40 MkII', displ: 6997, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 290, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1966 Ford Lotus Cortina', nickname: 'Ford Cortina', year: 1966, make: 'Ford', model: 'Lotus Cortina', displ: 1558, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 185, trackWidth: 'Rear', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1965 Ford Mustang GT Coupe', nickname: "Ford Mustang '65", year: 1965, make: 'Ford', model: 'Mustang GT Coupe', displ: 4736, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'Rear', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1965 Ford Transit', nickname: 'Ford Transit MK1', year: 1965, make: 'Ford', model: 'Transit', displ: 1663, aspiration: 'NA', engineType: 'V', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 175, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1964 Ford GT40 Mk I', nickname: "Ford GT40 '64", year: 1964, make: 'Ford', model: 'GT40 Mk I', displ: 4736, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1959 Ford Anglia 105E', nickname: "Ford Anglia '59", year: 1959, make: 'Ford', model: 'Anglia 105E', displ: 997, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 155, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1956 Ford F-100', nickname: 'Ford F-100', year: 1956, make: 'Ford', model: 'F-100', displ: 3622, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 155, trackWidth: 'no', aeroorkitOptions: 'Spare tire', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1940 Ford De Luxe Coupe', nickname: "Ford Coupe '40", year: 1940, make: 'Ford', model: 'De Luxe Coupe', displ: 4457, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 165, trackWidth: 'Rear', aeroorkitOptions: 'Preset / Street', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1932 Ford De Luxe Five-Window Coupe', nickname: "Ford Coupe '32", year: 1932, make: 'Ford', model: 'De Luxe Five-Window Coupe', displ: 3621, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 155, trackWidth: 'no', aeroorkitOptions: 'Preset / Street', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1932 Ford De Luxe Five-Window Coupe Forza Edition', nickname: 'Ford Coupe FE', year: 1932, make: 'Ford', model: 'De Luxe Five-Window Coupe Forza Edition', displ: 4940, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'DLC',
}, {
  fullname: '2020 Formula Drift #151 Toyota GR Supra', nickname: '#151 FD Supra', year: 2020, make: 'Formula Drift', model: '#151 Toyota GR Supra', displ: 2998, aspiration: 'T', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'DLC',
}, {
  fullname: '2020 Formula Drift #91 BMW M2', nickname: '#91 BMW M2', year: 2020, make: 'Formula Drift', model: '#91 BMW M2', displ: 6210, aspiration: 'NA', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Front', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'DLC',
}, {
  fullname: '2019 Formula Drift #411 Toyota Corolla Hatchback', nickname: '#411 FD Corolla', year: 2019, make: 'Formula Drift', model: '#411 Toyota Corolla Hatchback', displ: 2670, aspiration: 'T', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'DLC',
}, {
  fullname: '2018 Formula Drift #64 Nissan 370Z', nickname: '#64 Nissan 370Z', year: 2018, make: 'Formula Drift', model: '#64 Nissan 370Z', displ: 3996, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2017 Formula Drift #357 Chevrolet Corvette Z06', nickname: '#357 Corvette', year: 2017, make: 'Formula Drift', model: '#357 Chevrolet Corvette Z06', displ: 6162, aspiration: 'PDS', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'DLC',
}, {
  fullname: '2016 Formula Drift #530 HSV Maloo Gen-F', nickname: '#530 HSV Maloo', year: 2016, make: 'Formula Drift', model: '#530 HSV Maloo Gen-F', displ: 6162, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Formula Drift #13 Ford Mustang', nickname: '#13 Ford Mustang', year: 2015, make: 'Formula Drift', model: '#13 Ford Mustang', displ: 4951, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Formula Drift #777 Chevrolet Corvette', nickname: '#777 Corvette', year: 2013, make: 'Formula Drift', model: '#777 Chevrolet Corvette', displ: 6997, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'Rear', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2009 Formula Drift #99 Mazda RX-8', nickname: '#99 Mazda RX-8', year: 2009, make: 'Formula Drift', model: '#99 Mazda RX-8', displ: 1960, aspiration: 'T', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'DLC',
}, {
  fullname: '2007 Formula Drift #117 599 GTB Fiorano', nickname: 'Formula D 599', year: 2007, make: 'Formula Drift', model: '#117 599 GTB Fiorano', displ: 5999, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2006 Formula Drift #43 Dodge Viper SRT10', nickname: '#43 Dodge Viper', year: 2006, make: 'Formula Drift', model: '#43 Dodge Viper SRT10', displ: 8277, aspiration: 'TT', engineType: 'V', cylinders: 10, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'T', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1997 Formula Drift #777 Nissan 240SX', nickname: '#777 Nissan 240', year: 1997, make: 'Formula Drift', model: '#777 Nissan 240SX', displ: 7008, aspiration: 'CS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1995 Formula Drift #34 Toyota Supra MKIV', nickname: '#34 Toyota Supra', year: 1995, make: 'Formula Drift', model: '#34 Toyota Supra MKIV', displ: 3350, aspiration: 'T', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Rear', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'DLC',
}, {
  fullname: '1989 Formula Drift #98 BMW 325i', nickname: '#98 BMW 325I', year: 1989, make: 'Formula Drift', model: '#98 BMW 325i', displ: 6162, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2010 Forsberg Racing Toyota Gumout 2JZ Camry Stock Car', nickname: 'FR Stock Car', year: 2010, make: 'Forsberg Racing', model: 'Toyota Gumout 2JZ Camry Stock Car', displ: 3421, aspiration: 'T', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'DLC',
}, {
  fullname: '1975 Forsberg Racing Nissan "Gold Leader" Datsun 280Z', nickname: 'Datsun 280Z', year: 1975, make: 'Forsberg Racing', model: 'Nissan "Gold Leader" Datsun 280Z', displ: 2501, aspiration: 'T', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'DLC',
}, {
  fullname: '2018 Funco Motorsports F9', nickname: 'Funco F9', year: 2018, make: 'Funco Motorsports', model: 'F9', displ: 7440, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'R', drive: 'RWD', rTireWidth: 365, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1983 GMC Vandura G-1500', nickname: 'GMC Vandura', year: 1983, make: 'GMC', model: 'Vandura G-1500', displ: 5733, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 GMC Jimmy', nickname: 'GMC K5 Jimmy', year: 1970, make: 'GMC', model: 'Jimmy', displ: 5733, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Hennessey VelociRaptor 6x6', nickname: "VelociRaptor '19", year: 2019, make: 'Hennessey', model: 'VelociRaptor 6x6', displ: 3496, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Bed', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2012 Hennessey Venom GT', nickname: 'Hennessey Venom', year: 2012, make: 'Hennessey', model: 'Venom GT', displ: 6162, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1977 Holden Torana A9X', nickname: 'Holden Torana', year: 1977, make: 'Holden', model: 'Torana A9X', displ: 5047, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'Yes', aeroorkitOptions: 'Preset / Hood', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1974 Holden Sandman HQ panel van', nickname: 'Holden Sandman', year: 1974, make: 'Holden', model: 'Sandman HQ panel van', displ: 5047, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Preset Hood Roof Bed', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1973 Holden HQ Monaro GTS 350', nickname: 'Holden Monaro', year: 1973, make: 'Holden', model: 'HQ Monaro GTS 350', displ: 5740, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 Honda Civic Type R', nickname: "Honda Civic '18", year: 2018, make: 'Honda', model: 'Civic Type R', displ: 1996, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 245, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2016 Honda Civic Coupe', nickname: 'Honda Civic Coupe', year: 2016, make: 'Honda', model: 'Civic Coupe', displ: 1996, aspiration: 'TT', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2016 Honda Civic Type R', nickname: "Honda Civic '16", year: 2016, make: 'Honda', model: 'Civic Type R', displ: 1996, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2009 Honda S2000 CR', nickname: 'Honda S2000', year: 2009, make: 'Honda', model: 'S2000 CR', displ: 2157, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2007 Honda Civic Type-R', nickname: "Honda Civic '07", year: 2007, make: 'Honda', model: 'Civic Type-R', displ: 1998, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2005 Honda NSX-R', nickname: "Honda NSX-R '05", year: 2005, make: 'Honda', model: 'NSX-R', displ: 3179, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 255, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'T, TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2005 Honda NSX-R GT', nickname: 'Honda NSX-R GT', year: 2005, make: 'Honda', model: 'NSX-R GT', displ: 3179, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 255, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'T, TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2004 Honda Civic Type-R', nickname: "Honda Civic '04", year: 2004, make: 'Honda', model: 'Civic Type-R', displ: 1998, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2003 Honda S2000', nickname: 'Honda S2000', year: 2003, make: 'Honda', model: 'S2000', displ: 1997, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Yes', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'T, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1997 Honda Civic Type R', nickname: "Honda Civic '97", year: 1997, make: 'Honda', model: 'Civic Type R', displ: 1595, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 195, trackWidth: 'no', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1994 Honda Prelude Si', nickname: 'Honda Prelude 94', year: 1994, make: 'Honda', model: 'Prelude Si', displ: 2259, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1992 Honda NSX-R', nickname: "Honda NSX-R '92", year: 1992, make: 'Honda', model: 'NSX-R', displ: 2977, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1991 Honda CR-X SiR', nickname: 'Honda CR-X', year: 1991, make: 'Honda', model: 'CR-X SiR', displ: 1595, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 195, trackWidth: 'no', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1984 Honda Civic CRX Mugen', nickname: "Honda Civic '84", year: 1984, make: 'Honda', model: 'Civic CRX Mugen', displ: 1488, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1974 Honda Civic RS', nickname: "Honda Civic '74", year: 1974, make: 'Honda', model: 'Civic RS', displ: 1169, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 155, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2016 Hoonigan Gymkhana 10 Ford Focus RS RX', nickname: 'Gymkhana 10 Focus', year: 2016, make: 'Hoonigan', model: 'Gymkhana 10 Ford Focus RS RX', displ: 1988, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: "1994 Hoonigan Ford Escort RS Cosworth WRC 'Cossie V2'", nickname: 'Hoonigan Cossie', year: 1994, make: 'Hoonigan', model: "Ford Escort RS Cosworth WRC 'Cossie V2'", displ: 1990, aspiration: '', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'AWD', rTireWidth: null, trackWidth: '', aeroorkitOptions: 'none', aspirationOptions: 'T, TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1992 Hoonigan Mazda RX-7 Twerkstallion', nickname: 'Twerkstallion', year: 1992, make: 'Hoonigan', model: 'Mazda RX-7 Twerkstallion', displ: 5328, aspiration: 'T', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1991 Hoonigan Gymkhana 10 Ford Escort Cosworth Group A', nickname: 'Hoonigan Group A', year: 1991, make: 'Hoonigan', model: 'Gymkhana 10 Ford Escort Cosworth Group A', displ: 1994, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '1991 Hoonigan Rauh-Welt Begriff Porsche 911 Turbo', nickname: 'Hoonigan Porsche', year: 1991, make: 'Hoonigan', model: 'Rauh-Welt Begriff Porsche 911 Turbo', displ: 3299, aspiration: 'T', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1986 Hoonigan Ford RS200 Evolution', nickname: 'Hoonigan RS200', year: 1986, make: 'Hoonigan', model: 'Ford RS200 Evolution', displ: 2137, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'AWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1978 Hoonigan Ford Escort RS1800', nickname: 'Hoonigan Escort', year: 1978, make: 'Hoonigan', model: 'Ford Escort RS1800', displ: 2548, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Rally lights', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: "1977 Hoonigan Gymkhana 10 Ford F-150 'Hoonitruck'", nickname: 'Hoonigan F-150', year: 1977, make: 'Hoonigan', model: "Gymkhana 10 Ford F-150 'Hoonitruck'", displ: 3500, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1972 Hoonigan Chevrolet Napalm Nova', nickname: 'Hoonigan Nova', year: 1972, make: 'Hoonigan', model: 'Chevrolet Napalm Nova', displ: 7439, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1965 Hoonigan Ford "Hoonicorn" Mustang', nickname: 'Hoonicorn', year: 1965, make: 'Hoonigan', model: 'Ford "Hoonicorn" Mustang', displ: 6718, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1965 Hoonigan Gymkhana 10 Ford Hoonicorn Mustang', nickname: 'Hoonicorn V2', year: 1965, make: 'Hoonigan', model: 'Gymkhana 10 Ford Hoonicorn Mustang', displ: 6718, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1955 Hoonigan Chevrolet Bel Air', nickname: 'Hoonigan Bel Air', year: 1955, make: 'Hoonigan', model: 'Chevrolet Bel Air', displ: 5822, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Front', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2011 Hot Wheels Bone Shaker', nickname: 'Bone Shaker', year: 2011, make: 'Hot Wheels', model: 'Bone Shaker', displ: 5740, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 375, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Hot Wheels Twin Mill', nickname: 'Twin Mill', year: 1969, make: 'Hot Wheels', model: 'Twin Mill', displ: 16453, aspiration: 'PDS', engineType: 'V', cylinders: 16, enginePlacement: 'F', drive: 'RWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2014 HSV GEN-F GTS', nickname: 'HSV GEN-F GTS', year: 2014, make: 'HSV', model: 'GEN-F GTS', displ: 6162, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2014 HSV Limited Edition Gen-F GTS Maloo', nickname: "HSV Maloo '14", year: 2014, make: 'HSV', model: 'Limited Edition Gen-F GTS Maloo', displ: 6162, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Roo bars', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2006 Hummer H1 Alpha', nickname: 'Hummer H1', year: 2006, make: 'Hummer', model: 'H1 Alpha', displ: 6599, aspiration: 'T', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'bars', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2019 Hyundai Veloster N', nickname: 'Veloster N', year: 2019, make: 'Hyundai', model: 'Veloster N', displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 Infiniti Q60 Concept', nickname: 'Infiniti Q60', year: 2015, make: 'Infiniti', model: 'Q60 Concept', displ: 3e3, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1970 International Scout 800A', nickname: 'IH Scout 800A', year: 1970, make: 'International', model: 'Scout 800A', displ: 4982, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 195, trackWidth: 'no', aeroorkitOptions: 'Bed', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 Italdesign Zerouno', nickname: "ID Zerouno '18", year: 2018, make: 'Italdesign', model: 'Zerouno', displ: 5204, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'AWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Sport', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 Jaguar I-PACE', nickname: 'Jaguar I-PACE', year: 2018, make: 'Jaguar', model: 'I-PACE', displ: 0, aspiration: 'E', engineType: 'E', cylinders: 'E', enginePlacement: 'F', drive: 'AWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2017 Jaguar F-PACE S', nickname: 'Jaguar F-PACE S', year: 2017, make: 'Jaguar', model: 'F-PACE S', displ: 2995, aspiration: 'PDS', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Preset / Offroad', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2016 Jaguar F-TYPE Project 7', nickname: 'Jaguar Project 7', year: 2016, make: 'Jaguar', model: 'F-TYPE Project 7', displ: 5e3, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 Jaguar F-TYPE R Coupe', nickname: 'Jaguar F-Type', year: 2015, make: 'Jaguar', model: 'F-TYPE R Coupe', displ: 5e3, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 Jaguar XE-S', nickname: 'Jaguar XE-S', year: 2015, make: 'Jaguar', model: 'XE-S', displ: 2995, aspiration: 'PDS', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 Jaguar XFR-S', nickname: 'Jaguar XFR-S', year: 2015, make: 'Jaguar', model: 'XFR-S', displ: 5e3, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 Jaguar XKR-S GT', nickname: "Jaguar XKR-S '15", year: 2015, make: 'Jaguar', model: 'XKR-S GT', displ: 5e3, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'cu',
}, {
  fullname: '2012 Jaguar XKR-S', nickname: "Jaguar XKR-S '12", year: 2012, make: 'Jaguar', model: 'XKR-S', displ: 5e3, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2010 Jaguar C-X75', nickname: 'Jaguar C-X75', year: 2010, make: 'Jaguar', model: 'C-X75', displ: 1603, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'AWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1993 Jaguar XJ220', nickname: 'Jaguar XJ220', year: 1993, make: 'Jaguar', model: 'XJ220', displ: 2855, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1993 Jaguar XJ220S TWR', nickname: 'Jaguar XJ220S', year: 1993, make: 'Jaguar', model: 'XJ220S TWR', displ: 3498, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'DLC',
}, {
  fullname: '1991 Jaguar Sport XJR-15', nickname: 'Jaguar XJR-15', year: 1991, make: 'Jaguar', model: 'Sport XJR-15', displ: 5990, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1966 Jaguar XJ13', nickname: 'Jaguar XJ13', year: 1966, make: 'Jaguar', model: 'XJ13', displ: 4994, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 285, trackWidth: 'Front', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'DLC',
}, {
  fullname: '1964 Jaguar Lightweight E-Type', nickname: 'Jaguar LW E-Type', year: 1964, make: 'Jaguar', model: 'Lightweight E-Type', displ: 3781, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T, TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1961 Jaguar E-type', nickname: 'Jaguar E-Type', year: 1961, make: 'Jaguar', model: 'E-type', displ: 3781, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1959 Jaguar Mk II 3.8', nickname: 'Jaguar MK II 3.8', year: 1959, make: 'Jaguar', model: 'Mk II 3.8', displ: 3781, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 185, trackWidth: 'no', aeroorkitOptions: 'Police Lights', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1956 Jaguar D-Type', nickname: 'Jaguar D-Type', year: 1956, make: 'Jaguar', model: 'D-Type', displ: 3442, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2020 Jeep Gladiator Rubicon', nickname: 'Jeep Gladiator', year: 2020, make: 'Jeep', model: 'Gladiator Rubicon', displ: 3604, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Bed / open top', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 Jeep Grand Cherokee Trackhawk', nickname: 'Jeep Trackhawk', year: 2018, make: 'Jeep', model: 'Grand Cherokee Trackhawk', displ: 6116, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Preset / lights', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2016 Jeep Trailcat', nickname: 'Jeep Trailcat', year: 2016, make: 'Jeep', model: 'Trailcat', displ: 6166, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Bars / Bed', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2014 Jeep Grand Cherokee SRT', nickname: "Cherokee '14", year: 2014, make: 'Jeep', model: 'Grand Cherokee SRT', displ: 6417, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Preset / Offroad', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2012 Jeep Wrangler Rubicon', nickname: 'Jeep Wrangler', year: 2012, make: 'Jeep', model: 'Wrangler Rubicon', displ: 3604, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 255, trackWidth: 'no', aeroorkitOptions: 'Bumpers / bars', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2012 Jeep Wrangler Rubicon Traffic', nickname: '', year: 2012, make: 'Jeep', model: 'Wrangler Rubicon Traffic', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '1976 Jeep CJ5 Renegade', nickname: 'Jeep CJ5', year: 1976, make: 'Jeep', model: 'CJ5 Renegade', displ: 4981, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 205, trackWidth: 'no', aeroorkitOptions: 'Bumpers / bars', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2020 Koenigsegg Jesko', nickname: 'Koenigsegg Jesko', year: 2020, make: 'Koenigsegg', model: 'Jesko', displ: 5065, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 325, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2017 Koenigsegg Agera RS', nickname: 'Agera RS', year: 2017, make: 'Koenigsegg', model: 'Agera RS', displ: 5065, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2016 Koenigsegg Regera', nickname: 'Regera', year: 2016, make: 'Koenigsegg', model: 'Regera', displ: 5e3, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2015 Koenigsegg One: 1', nickname: 'Koenigsegg One', year: 2015, make: 'Koenigsegg', model: 'One: 1', displ: 5065, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2008 Koenigsegg CCGT', nickname: 'Koenigsegg CCGT', year: 2008, make: 'Koenigsegg', model: 'CCGT', displ: 4700, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 310, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2002 Koenigsegg CC8S', nickname: 'Koenigsegg CC8S', year: 2002, make: 'Koenigsegg', model: 'CC8S', displ: 4700, aspiration: 'CS', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2013 KTM X-Bow R', nickname: 'KTM X-Bow', year: 2013, make: 'KTM', model: 'X-Bow R', displ: 1984, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 255, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2020 Lamborghini Huracán EVO', nickname: 'Huracán EVO', year: 2020, make: 'Lamborghini', model: 'Huracán EVO', displ: 5204, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'AWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Lamborghini Urus', nickname: "Urus '19", year: 2019, make: 'Lamborghini', model: 'Urus', displ: 3996, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 325, trackWidth: 'Both', aeroorkitOptions: 'Light bar', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 Lamborghini Aventador SVJ', nickname: 'Aventador SVJ', year: 2018, make: 'Lamborghini', model: 'Aventador SVJ', displ: 6498, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'AWD', rTireWidth: 355, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'cu',
}, {
  fullname: '2018 Lamborghini Huracán Performante', nickname: 'Lambo Huracan P', year: 2018, make: 'Lamborghini', model: 'Huracán Performante', displ: 5204, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'AWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2016 Lamborghini Aventador Superveloce', nickname: "Aventador '16", year: 2016, make: 'Lamborghini', model: 'Aventador Superveloce', displ: 6498, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'AWD', rTireWidth: 355, trackWidth: 'no', aeroorkitOptions: 'Safety Lights', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2016 Lamborghini Centenario LP 770-4', nickname: 'Lambo Centenario', year: 2016, make: 'Lamborghini', model: 'Centenario LP 770-4', displ: 6498, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'AWD', rTireWidth: 355, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2014 Lamborghini Huracán LP 610-4', nickname: 'Lambo Huracan', year: 2014, make: 'Lamborghini', model: 'Huracán LP 610-4', displ: 5204, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'AWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Lamborghini Veneno', nickname: 'Lambo Veneno', year: 2013, make: 'Lamborghini', model: 'Veneno', displ: 6498, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'AWD', rTireWidth: 355, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2012 Lamborghini Aventador J', nickname: 'Aventador J', year: 2012, make: 'Lamborghini', model: 'Aventador J', displ: 6498, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'AWD', rTireWidth: 355, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'cu',
}, {
  fullname: '2012 Lamborghini Aventador LP700-4', nickname: "Aventador '12", year: 2012, make: 'Lamborghini', model: 'Aventador LP700-4', displ: 6498, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'AWD', rTireWidth: 335, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2012 Lamborghini Gallardo LP 570-4 Spyder Performante', nickname: 'Gallardo Spyder', year: 2012, make: 'Lamborghini', model: 'Gallardo LP 570-4 Spyder Performante', displ: 5204, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'AWD', rTireWidth: 345, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'eng', fh5: 'cu',
}, {
  fullname: '2011 Lamborghini Gallardo LP 570-4 Superleggera', nickname: 'Lambo Gallardo', year: 2011, make: 'Lamborghini', model: 'Gallardo LP 570-4 Superleggera', displ: 5204, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'AWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT. CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2011 Lamborghini Sesto Elemento', nickname: 'Lambo Sesto', year: 2011, make: 'Lamborghini', model: 'Sesto Elemento', displ: 5204, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'AWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2011 Lamborghini Sesto Elemento Forza Edition', nickname: 'Lambo Sesto FE', year: 2011, make: 'Lamborghini', model: 'Sesto Elemento Forza Edition', displ: 5204, aspiration: '', engineType: '', cylinders: null, enginePlacement: 'M', drive: 'AWD', rTireWidth: null, trackWidth: '', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2010 Lamborghini Murcielago LP 670-4 SV', nickname: 'Lambo Murcielago', year: 2010, make: 'Lamborghini', model: 'Murcielago LP 670-4 SV', displ: 6496, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'AWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2008 Lamborghini Reventon', nickname: 'Lambo Reventon', year: 2008, make: 'Lamborghini', model: 'Reventon', displ: 6496, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'AWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1999 Lamborghini Diablo GTR', nickname: 'Diablo GTR', year: 1999, make: 'Lamborghini', model: 'Diablo GTR', displ: 5992, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 325, trackWidth: 'Both', aeroorkitOptions: '', aspirationOptions: 'T, TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1997 Lamborghini Diablo SV', nickname: 'Lambo Diablo SV', year: 1997, make: 'Lamborghini', model: 'Diablo SV', displ: 5707, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1988 Lamborghini Countach LP5000 QV', nickname: 'Lambo Countach', year: 1988, make: 'Lamborghini', model: 'Countach LP5000 QV', displ: 5167, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1986 Lamborghini LM 002', nickname: 'Lambo LM 002', year: 1986, make: 'Lamborghini', model: 'LM 002', displ: 5167, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'AWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Bed/bars', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1973 Lamborghini Espada 400 GT', nickname: "Espada 400GT '73", year: 1973, make: 'Lamborghini', model: 'Espada 400 GT', displ: 3930, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Forza street wing', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'DLC',
}, {
  fullname: '1967 Lamborghini Miura P400', nickname: 'Lambo Miura', year: 1967, make: 'Lamborghini', model: 'Miura P400', displ: 3939, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2020 Land Rover Defender 110 X', nickname: "LR Defender '20", year: 2020, make: 'Land Rover', model: 'Defender 110 X', displ: 2996, aspiration: 'T', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Bars', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2018 Land Rover Range Rover Velar First Edition', nickname: 'Land Rover Velar', year: 2018, make: 'Land Rover', model: 'Range Rover Velar First Edition', displ: 2995, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 Land Rover Range Rover Sport SVR', nickname: "Range Rover '15", year: 2015, make: 'Land Rover', model: 'Range Rover Sport SVR', displ: 5e3, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Preset / Offroad', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1997 Land Rover Defender 90', nickname: 'LR Defender', year: 1997, make: 'Land Rover', model: 'Defender 90', displ: 3950, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Preset / Offroad', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1973 Land Rover Range Rover', nickname: "Range Rover '73", year: 1973, make: 'Land Rover', model: 'Range Rover', displ: 3528, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 205, trackWidth: 'no', aeroorkitOptions: 'Preset / Offroad', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1972 Land Rover Series III', nickname: 'LR Series III', year: 1972, make: 'Land Rover', model: 'Series III', displ: 2286, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 165, trackWidth: 'no', aeroorkitOptions: 'Offroad', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Lexus RC F', nickname: 'Lexus RC F', year: 2015, make: 'Lexus', model: 'RC F', displ: 4969, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Widebody kit', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2010 Lexus LFA', nickname: 'Lexus LFA', year: 2010, make: 'Lexus', model: 'LFA', displ: 4805, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'F', drive: 'RWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1997 Lexus SC300', nickname: 'Lexus SC300', year: 1997, make: 'Lexus', model: 'SC300', displ: 2997, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2014 Local Motors Rally Fighter', nickname: 'Rally Fighter', year: 2014, make: 'Local Motors', model: 'Rally Fighter', displ: 6162, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Rally lights / roof', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Lola #6 Penske Sunoco T70 MkIIIB', nickname: '#6 Lola T70', year: 1969, make: 'Lola', model: '#6 Penske Sunoco T70 MkIIIB', displ: 4995, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 380, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2020 Lotus Evija', nickname: "Lotus Evija '20", year: 2020, make: 'Lotus', model: 'Evija', displ: 0, aspiration: '', engineType: '', cylinders: null, enginePlacement: 'M', drive: 'AWD', rTireWidth: 325, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2016 Lotus 3-Eleven', nickname: 'Lotus 3-Eleven', year: 2016, make: 'Lotus', model: '3-Eleven', displ: 3456, aspiration: 'PDS', engineType: 'Inline', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2012 Lotus Exige S', nickname: 'Lotus Exige S', year: 2012, make: 'Lotus', model: 'Exige S', displ: 3456, aspiration: 'PDS', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'T', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1999 Lotus Elise Series 1 Sport 190', nickname: "Lotus Elise '99", year: 1999, make: 'Lotus', model: 'Elise Series 1 Sport 190', displ: 1796, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1997 Lotus Elise GT1', nickname: 'Lotus Elise GT1', year: 1997, make: 'Lotus', model: 'Elise GT1', displ: 3506, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1971 Lotus Elan Sprint', nickname: 'Lotus Elan', year: 1971, make: 'Lotus', model: 'Elan Sprint', displ: 1558, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 155, trackWidth: 'Front', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2017 Maserati Levante S', nickname: 'Maserati Levante', year: 2017, make: 'Maserati', model: 'Levante S', displ: 2979, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2010 Maserati Gran Turismo S', nickname: 'Maserati GT-S', year: 2010, make: 'Maserati', model: 'Gran Turismo S', displ: 4691, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2010 Maserati Gran Turismo S Forza Edition', nickname: 'Maserati GTS FE', year: 2010, make: 'Maserati', model: 'Gran Turismo S Forza Edition', displ: 5200, aspiration: '', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2008 Maserati MC12 Versione Corsa', nickname: "MC12 Corsa '08", year: 2008, make: 'Maserati', model: 'MC12 Versione Corsa', displ: 5998, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 330, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1939 Maserati 8CTF', nickname: 'Maserati 8CTF', year: 1939, make: 'Maserati', model: '8CTF', displ: 2991, aspiration: 'PDS', engineType: 'Inline', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 190, trackWidth: 'none', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'cu',
}, {
  fullname: '2016 Mazda MX-5', nickname: "Mazda MX-5 '16", year: 2016, make: 'Mazda', model: 'MX-5', displ: 1997, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2013 Mazda MX-5', nickname: "Mazda MX-5 '13", year: 2013, make: 'Mazda', model: 'MX-5', displ: 1999, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2011 Mazda RX-8 R3', nickname: 'Mazda RX-8', year: 2011, make: 'Mazda', model: 'RX-8 R3', displ: 1308, aspiration: 'NA', engineType: 'Rotary', cylinders: '2R', enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2010 Mazda 3 Traffic', nickname: '', year: 2010, make: 'Mazda', model: '3 Traffic', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '2005 Mazda Mazdaspeed MX-5', nickname: "Mazda MX-5 '05", year: 2005, make: 'Mazda', model: 'Mazdaspeed MX-5', displ: 1839, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2002 Mazda RX-7 Spirit R Type-A', nickname: 'RX-7 Spirit R', year: 2002, make: 'Mazda', model: 'RX-7 Spirit R Type-A', displ: 1308, aspiration: 'TT', engineType: 'Rotary', cylinders: '2R', enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Yes', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '1997 Mazda RX-7', nickname: "Mazda RX-7 '97", year: 1997, make: 'Mazda', model: 'RX-7', displ: 1308, aspiration: 'TT', engineType: 'Rotary', cylinders: '2R', enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Yes', aeroorkitOptions: 'Preset / Aftermarket', aspirationOptions: 'T', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1994 Mazda MX-5 Miata', nickname: "Mazda MX-5 '94", year: 1994, make: 'Mazda', model: 'MX-5 Miata', displ: 1839, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 185, trackWidth: 'Yes', aeroorkitOptions: 'Preset / Aftermarket', aspirationOptions: 'T, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1990 Mazda Savanna RX-7', nickname: "Mazda RX-7 '90", year: 1990, make: 'Mazda', model: 'Savanna RX-7', displ: 1308, aspiration: 'T', engineType: 'Rotary', cylinders: '2R', enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Preset / Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2020 McLaren GT', nickname: 'McLaren GT', year: 2020, make: 'McLaren', model: 'GT', displ: 3990, aspiration: 'TT', engineType: '', cylinders: null, enginePlacement: 'M', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2019 McLaren 720S Spider', nickname: '720S Spider', year: 2019, make: 'McLaren', model: '720S Spider', displ: 3994, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2019 McLaren Speedtail', nickname: "Speedtail '19", year: 2019, make: 'McLaren', model: 'Speedtail', displ: 3994, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 McLaren 600LT Coupe', nickname: 'McLaren 600LT', year: 2018, make: 'McLaren', model: '600LT Coupe', displ: 3799, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 285, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 McLaren 720S Coupe', nickname: 'McLaren 720S', year: 2018, make: 'McLaren', model: '720S Coupe', displ: 3994, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 305, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 McLaren Senna', nickname: 'McLaren Senna', year: 2018, make: 'McLaren', model: 'Senna', displ: 3994, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2015 McLaren 570S Coupe', nickname: 'McLaren 570S', year: 2015, make: 'McLaren', model: '570S Coupe', displ: 3799, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 285, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 McLaren 650S Coupe', nickname: 'McLaren 650S', year: 2015, make: 'McLaren', model: '650S Coupe', displ: 3799, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2013 McLaren P1', nickname: 'McLaren P1', year: 2013, make: 'McLaren', model: 'P1', displ: 3799, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 315, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1997 McLaren F1 GT', nickname: 'McLaren F1 GT', year: 1997, make: 'McLaren', model: 'F1 GT', displ: 6064, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'Rear', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1993 McLaren F1', nickname: 'McLaren F1', year: 1993, make: 'McLaren', model: 'F1', displ: 6064, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2021 Mercedes-AMG Mercedes-AMG ONE', nickname: 'Mercedes-AMG ONE', year: 2021, make: 'Mercedes-AMG', model: 'Mercedes-AMG ONE', displ: 1600, aspiration: 'T', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'AWD', rTireWidth: 335, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 Mercedes-AMG E 63 S', nickname: 'Mercedes-AMG E63', year: 2018, make: 'Mercedes-AMG', model: 'E 63 S', displ: 3982, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Brabus Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 Mercedes-AMG GT 4-Door Coupe', nickname: "M-B GT 4 '18", year: 2018, make: 'Mercedes-AMG', model: 'GT 4-Door Coupe', displ: 3982, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2017 Mercedes-AMG GT R', nickname: 'M-B AMG GTR', year: 2017, make: 'Mercedes-AMG', model: 'GT R', displ: 3982, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Adjustable rear', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2016 Mercedes-AMG C 63 S Coupe', nickname: "M-B AMG C 63 '16", year: 2016, make: 'Mercedes-AMG', model: 'C 63 S Coupe', displ: 3982, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 Mercedes-Benz X-Class', nickname: 'M-B X-Class', year: 2018, make: 'Mercedes-Benz', model: 'X-Class', displ: 2298, aspiration: 'TT', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'remove runners', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 Mercedes-Benz #24 Tankpool24 Racing Truck', nickname: '#24 M-B Truck', year: 2015, make: 'Mercedes-Benz', model: '#24 Tankpool24 Racing Truck', displ: 12800, aspiration: 'T', engineType: 'Inline', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 575, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2015 Mercedes-Benz #24 Tankpool24 Racing Truck Forza Edition', nickname: '#24 M-B Truck FE', year: 2015, make: 'Mercedes-Benz', model: '#24 Tankpool24 Racing Truck Forza Edition', displ: 12e3, aspiration: '', engineType: '', cylinders: null, enginePlacement: 'M', drive: 'AWD', rTireWidth: null, trackWidth: '', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2014 Mercedes-Benz G 63 AMG 6x6', nickname: 'M-B G 63 6x6', year: 2014, make: 'Mercedes-Benz', model: 'G 63 AMG 6x6', displ: 5461, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Bars / bed', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2014 Mercedes-Benz Unimog U5023', nickname: 'M-B Unimog', year: 2014, make: 'Mercedes-Benz', model: 'Unimog U5023', displ: 5132, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'AWD', rTireWidth: 395, trackWidth: 'no', aeroorkitOptions: 'Bars / bed', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2013 Mercedes-Benz A 45 AMG', nickname: 'M-B A45', year: 2013, make: 'Mercedes-Benz', model: 'A 45 AMG', displ: 1991, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Street', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2013 Mercedes-Benz E 63 AMG', nickname: 'M-B E63', year: 2013, make: 'Mercedes-Benz', model: 'E 63 AMG', displ: 5461, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2013 Mercedes-Benz G 65 AMG', nickname: 'M-B G 65', year: 2013, make: 'Mercedes-Benz', model: 'G 65 AMG', displ: 5980, aspiration: 'TT', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'AWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Preset / Offroad', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2012 Mercedes-Benz C 63 AMG Coupe Black Series', nickname: 'M-B C63', year: 2012, make: 'Mercedes-Benz', model: 'C 63 AMG Coupe Black Series', displ: 6208, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'Yes', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2012 Mercedes-Benz SLK 55 AMG', nickname: 'M-B SLK', year: 2012, make: 'Mercedes-Benz', model: 'SLK 55 AMG', displ: 5461, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2011 Mercedes-Benz SLS AMG', nickname: 'M-B SLS AMG', year: 2011, make: 'Mercedes-Benz', model: 'SLS AMG', displ: 6208, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Safety Lights', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1998 Mercedes-Benz AMG CLK GTR', nickname: 'M-B CLK-GTR', year: 1998, make: 'Mercedes-Benz', model: 'AMG CLK GTR', displ: 6898, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1998 Mercedes-Benz AMG CLK GTR Forza Edition', nickname: 'M-B CLK-GTR FE', year: 1998, make: 'Mercedes-Benz', model: 'AMG CLK GTR Forza Edition', displ: 6898, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1990 Mercedes-Benz 190E 2.5-16 Evolution II', nickname: 'M-B 190E', year: 1990, make: 'Mercedes-Benz', model: '190E 2.5-16 Evolution II', displ: 2463, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1987 Mercedes-Benz AMG Hammer Coupe', nickname: 'AMG Hammer Coupe', year: 1987, make: 'Mercedes-Benz', model: 'AMG Hammer Coupe', displ: 5953, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Widebody', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1954 Mercedes-Benz 300 SL Coupe', nickname: 'M-B 300 SL', year: 1954, make: 'Mercedes-Benz', model: '300 SL Coupe', displ: 2996, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 175, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1939 Mercedes-Benz W154', nickname: 'M-B W154', year: 1939, make: 'Mercedes-Benz', model: 'W154', displ: 2963, aspiration: 'PDS', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 200, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1929 Mercedes-Benz SSK', nickname: 'M-B SSK', year: 1929, make: 'Mercedes-Benz', model: 'SSK', displ: 7065, aspiration: 'PDS', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 175, trackWidth: 'no', aeroorkitOptions: 'Side skirts/fenders', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1970 Mercury Cyclone Spoiler', nickname: 'Mercury Cyclone', year: 1970, make: 'Mercury', model: 'Cyclone Spoiler', displ: 7030, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'DLC',
}, {
  fullname: '1971 Meyers Manx', nickname: 'Meyers Manx', year: 1971, make: 'Meyers', model: 'Manx', displ: 1585, aspiration: 'NA', engineType: 'Flat', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 185, trackWidth: 'no', aeroorkitOptions: 'Bars', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1971 Meyers Manx Forza Edition', nickname: 'Meyers Manx FE', year: 1971, make: 'Meyers', model: 'Manx Forza Edition', displ: 2664, aspiration: 'NA', engineType: '', cylinders: null, enginePlacement: 'R', drive: 'RWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Bars', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1986 MG Metro 6R4', nickname: 'MG Metro 6R4', year: 1986, make: 'MG', model: 'Metro 6R4', displ: 2991, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'AWD', rTireWidth: 320, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 MINI John Cooper Works Countryman ALL4', nickname: 'Mini Countryman', year: 2018, make: 'MINI', model: 'John Cooper Works Countryman ALL4', displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 MINI X-Raid John Cooper Works Buggy', nickname: 'Mini JCW Buggy', year: 2018, make: 'MINI', model: 'X-Raid John Cooper Works Buggy', displ: 2993, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2013 MINI X-Raid ALL4 Racing Countryman', nickname: 'Mini X-Raid', year: 2013, make: 'MINI', model: 'X-Raid ALL4 Racing Countryman', displ: 2993, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2012 MINI John Cooper Works GP', nickname: "Mini JCW '12", year: 2012, make: 'MINI', model: 'John Cooper Works GP', displ: 1598, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 215, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2009 MINI John Cooper Works', nickname: "Mini JCW '09", year: 2009, make: 'MINI', model: 'John Cooper Works', displ: 1598, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'no', aeroorkitOptions: 'Preset WB Aftermkt', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1965 MINI Cooper S', nickname: "Mini '65", year: 1965, make: 'MINI', model: 'Cooper S', displ: 1275, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 145, trackWidth: 'no', aeroorkitOptions: 'Preset / Rally lights', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2008 Mitsubishi Lancer Evolution X GSR', nickname: "Lancer GSR '08", year: 2008, make: 'Mitsubishi', model: 'Lancer Evolution X GSR', displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'Yes', aeroorkitOptions: 'Safety Lights / aftermkt', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: "2008 Mitsubishi Lancer Evolution X GSR 'Welcome Pack'", nickname: 'Lancer GSR WP', year: 2008, make: 'Mitsubishi', model: "Lancer Evolution X GSR 'Welcome Pack'", displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 275, trackWidth: 'no', aeroorkitOptions: 'Safety Lights / aftermkt', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'DLC',
}, {
  fullname: '2006 Mitsubishi Lancer Evolution IX MR', nickname: "Lancer MR '06", year: 2006, make: 'Mitsubishi', model: 'Lancer Evolution IX MR', displ: 1997, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'Yes', aeroorkitOptions: 'Preset / Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2004 Mitsubishi Lancer Evolution VIII MR', nickname: "Lancer MR '04", year: 2004, make: 'Mitsubishi', model: 'Lancer Evolution VIII MR', displ: 1997, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1999 Mitsubishi Lancer Evolution VI GSR', nickname: "Lancer GSR '99", year: 1999, make: 'Mitsubishi', model: 'Lancer Evolution VI GSR', displ: 1997, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Preset / Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1997 Mitsubishi GTO', nickname: 'Mitsubishi GTO', year: 1997, make: 'Mitsubishi', model: 'GTO', displ: 2972, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1995 Mitsubishi Eclipse GSX', nickname: 'Eclipse GSX', year: 1995, make: 'Mitsubishi', model: 'Eclipse GSX', displ: 1997, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 215, trackWidth: 'Yes', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1992 Mitsubishi Galant VR-4 Traffic', nickname: '', year: 1992, make: 'Mitsubishi', model: 'Galant VR-4 Traffic', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '1988 Mitsubishi Starion ESI-R', nickname: 'Starion ESI-R', year: 1988, make: 'Mitsubishi', model: 'Starion ESI-R', displ: 2555, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2014 Morgan 3 Wheeler', nickname: 'Morgan 3 Wheeler', year: 2014, make: 'Morgan', model: '3 Wheeler', displ: 1983, aspiration: 'NA', engineType: 'V', cylinders: 2, enginePlacement: 'F', drive: 'RWD', rTireWidth: 155, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1958 Morris Minor 1000', nickname: 'Morris Minor', year: 1958, make: 'Morris', model: 'Minor 1000', displ: 948, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 155, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1953 Morris Minor 1000 Forza Edition', nickname: 'Morris Minor FE', year: 1953, make: 'Morris', model: 'Minor 1000 Forza Edition', displ: 3530, aspiration: 'NA', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2010 Mosler MT900S', nickname: 'Mosler MT900S', year: 2010, make: 'Mosler', model: 'MT900S', displ: 7011, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Yes', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1933 Napier Napier-Railton', nickname: 'Napier-Railton', year: 1933, make: 'Napier', model: 'Napier-Railton', displ: 23970, aspiration: 'NA', engineType: 'W', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 180, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2017 Nissan GT-R (R35)', nickname: "Nissan GT-R '17", year: 2017, make: 'Nissan', model: 'GT-R (R35)', displ: 3799, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 285, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2016 Nissan Titan Warrior Concept', nickname: 'Nissan Titan', year: 2016, make: 'Nissan', model: 'Titan Warrior Concept', displ: 4998, aspiration: 'T', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Truck bed', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2012 Nissan GT-R Black Edition (R35)', nickname: "Nissan GT-R '12", year: 2012, make: 'Nissan', model: 'GT-R Black Edition (R35)', displ: 3799, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 285, trackWidth: 'Yes', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2010 Nissan 370Z', nickname: 'Nissan 370Z', year: 2010, make: 'Nissan', model: '370Z', displ: 3696, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2004 Nissan Pickup #23 Rally Raid', nickname: '#23 Nissan RR', year: 2004, make: 'Nissan', model: 'Pickup #23 Rally Raid', displ: 3500, aspiration: 'NA', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'AWD', rTireWidth: 280, trackWidth: 'no', aeroorkitOptions: 'Bars', aspirationOptions: 'T, TT, PDS, CS', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2003 Nissan Fairlady Z', nickname: "Fairlady Z '03", year: 2003, make: 'Nissan', model: 'Fairlady Z', displ: 3498, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Yes', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'T, TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2003 Nissan Fairlady Z Forza Edition', nickname: 'Fairlady Z FE', year: 2003, make: 'Nissan', model: 'Fairlady Z Forza Edition', displ: 3800, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2002 Nissan Skyline GT-R V-Spec II', nickname: "Nissan GT-R '02", year: 2002, make: 'Nissan', model: 'Skyline GT-R V-Spec II', displ: 2568, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2000 Nissan Silvia Spec-R', nickname: "Silvia '00", year: 2e3, make: 'Nissan', model: 'Silvia Spec-R', displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1998 Nissan R390 (GT1)', nickname: 'Nissan R390', year: 1998, make: 'Nissan', model: 'R390 (GT1)', displ: 3496, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 295, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: "1998 Nissan Silvia K's Aero", nickname: "Silvia '98", year: 1998, make: 'Nissan', model: "Silvia K's Aero", displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1997 Nissan Skyline GT-R V-Spec', nickname: "Nissan GT-R '97", year: 1997, make: 'Nissan', model: 'Skyline GT-R V-Spec', displ: 2568, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1995 Nissan NISMO GT-R LM', nickname: "Nissan GT-R '95", year: 1995, make: 'Nissan', model: 'NISMO GT-R LM', displ: 2568, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1994 Nissan Fairlady Z Version S Twin Turbo', nickname: "Fairlady Z '94", year: 1994, make: 'Nissan', model: 'Fairlady Z Version S Twin Turbo', displ: 2960, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Yes', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: "1994 Nissan Silvia K's", nickname: "Silvia '94", year: 1994, make: 'Nissan', model: "Silvia K's", displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1993 Nissan 240SX SE', nickname: 'Nissan 240SX', year: 1993, make: 'Nissan', model: '240SX SE', displ: 2389, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1993 Nissan Skyline GT-R V-Spec', nickname: "Nissan GT-R '93", year: 1993, make: 'Nissan', model: 'Skyline GT-R V-Spec', displ: 2568, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: "1992 Nissan Silvia CLUB K's", nickname: "Silvia '92", year: 1992, make: 'Nissan', model: "Silvia CLUB K's", displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1990 Nissan Pulsar GTi-R', nickname: 'Nissan Pulsar', year: 1990, make: 'Nissan', model: 'Pulsar GTi-R', displ: 1988, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 195, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1987 Nissan Skyline GTS-R (HR31)', nickname: "Nissan GTS-R '87", year: 1987, make: 'Nissan', model: 'Skyline GTS-R (HR31)', displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 205, trackWidth: 'Yes', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1973 Nissan Skyline H/T 2000GT-R', nickname: "Nissan GT-R '73", year: 1973, make: 'Nissan', model: 'Skyline H/T 2000GT-R', displ: 1989, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 175, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1971 Nissan Skyline 2000GT-R', nickname: "Nissan GT-R '71", year: 1971, make: 'Nissan', model: 'Skyline 2000GT-R', displ: 1989, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 165, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Nissan Fairlady Z 432', nickname: "Fairlady Z '69", year: 1969, make: 'Nissan', model: 'Fairlady Z 432', displ: 1989, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 175, trackWidth: 'Both', aeroorkitOptions: 'Preset WB / lights', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1984 Opel Manta 400', nickname: 'Opel Manta 400', year: 1984, make: 'Opel', model: 'Manta 400', displ: 2410, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2016 Pagani Huayra BC', nickname: 'Pagani Huayra BC', year: 2016, make: 'Pagani', model: 'Huayra BC', displ: 5980, aspiration: 'TT', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 355, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2016 Pagani Huayra BC Forza Edition', nickname: 'Pagani Huayra FE', year: 2016, make: 'Pagani', model: 'Huayra BC Forza Edition', displ: 5980, aspiration: 'TT', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: null, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2010 Pagani Zonda R', nickname: 'Pagani Zonda R', year: 2010, make: 'Pagani', model: 'Zonda R', displ: 5987, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2009 Pagani Zonda Cinque Roadster', nickname: 'Pagani Zonda C', year: 2009, make: 'Pagani', model: 'Zonda Cinque Roadster', displ: 7291, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1965 Peel Trident', nickname: 'Peel Trident', year: 1965, make: 'Peel', model: 'Trident', displ: 48, aspiration: 'NA', engineType: 'Single', cylinders: 1, enginePlacement: 'M', drive: 'RWD', rTireWidth: 90, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'cu',
}, {
  fullname: '1962 Peel P50', nickname: 'Peel P50', year: 1962, make: 'Peel', model: 'P50', displ: 48, aspiration: 'NA', engineType: 'Single', cylinders: 1, enginePlacement: 'M', drive: 'RWD', rTireWidth: 90, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'cu',
}, {
  fullname: '2011 Penhall The Cholla', nickname: 'Penhall Cholla', year: 2011, make: 'Penhall', model: 'The Cholla', displ: 2384, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2007 Peugeot 207 Super 2000', nickname: 'Peugeot 207 S', year: 2007, make: 'Peugeot', model: '207 Super 2000', displ: 1998, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1991 Peugeot 205 Rallye', nickname: 'Peugeot 205 R', year: 1991, make: 'Peugeot', model: '205 Rallye', displ: 1294, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 165, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1984 Peugeot 205 Turbo 16', nickname: 'Peugeot 205 T16', year: 1984, make: 'Peugeot', model: '205 Turbo 16', displ: 1775, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'AWD', rTireWidth: 215, trackWidth: 'no', aeroorkitOptions: 'Preset Rally Climb', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1971 Plymouth Cuda 426 Hemi', nickname: 'Plymouth Cuda', year: 1971, make: 'Plymouth', model: 'Cuda 426 Hemi', displ: 6974, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Yes', aeroorkitOptions: 'Preset / hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Polaris RZR XP 1000 EPS', nickname: 'RZR 1000', year: 2015, make: 'Polaris', model: 'RZR XP 1000 EPS', displ: 999, aspiration: 'NA', engineType: 'Inline', cylinders: 2, enginePlacement: 'R', drive: 'AWD', rTireWidth: 280, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1987 Pontiac Firebird Trans Am GTA', nickname: "Pontiac T/A '87", year: 1987, make: 'Pontiac', model: 'Firebird Trans Am GTA', displ: 5733, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1987 Pontiac Firebird Trans Am GTA Forza Edition', nickname: 'Pontiac T/A FE', year: 1987, make: 'Pontiac', model: 'Firebird Trans Am GTA Forza Edition', displ: 5870, aspiration: '', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'RWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'TT, PDS', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '1977 Pontiac Firebird Trans Am', nickname: "Pontiac T/A '77", year: 1977, make: 'Pontiac', model: 'Firebird Trans Am', displ: 6600, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Yes', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1965 Pontiac GTO', nickname: "Pontiac GTO '65", year: 1965, make: 'Pontiac', model: 'GTO', displ: 6372, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'Rear', aeroorkitOptions: 'Hood', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2020 Porsche Taycan Turbo S', nickname: 'Porsche Taycan S', year: 2020, make: 'Porsche', model: 'Taycan Turbo S', displ: 0, aspiration: 'E', engineType: '', cylinders: null, enginePlacement: 'R', drive: 'AWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: "2020 Porsche Taycan Turbo S 'Welcome Pack'", nickname: 'Taycan S WP', year: 2020, make: 'Porsche', model: "Taycan Turbo S 'Welcome Pack'", displ: 0, aspiration: 'E', engineType: '', cylinders: null, enginePlacement: 'R', drive: 'AWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'DLC',
}, {
  fullname: '2019 Porsche 911 Carrera S', nickname: "Porsche 911 '19", year: 2019, make: 'Porsche', model: '911 Carrera S', displ: 2981, aspiration: 'TT', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 305, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2019 Porsche 911 GT3 RS', nickname: "911 GT3 RS '19", year: 2019, make: 'Porsche', model: '911 GT3 RS', displ: 3996, aspiration: 'NA', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 325, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Porsche 911 GT3 RS Forza Edition', nickname: '911 GT3 RS FE', year: 2019, make: 'Porsche', model: '911 GT3 RS Forza Edition', displ: 3996, aspiration: 'TT', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'AWD', rTireWidth: 335, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Porsche Macan Turbo', nickname: "Macan Turbo '19", year: 2019, make: 'Porsche', model: 'Macan Turbo', displ: 2894, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 Porsche 718 Cayman GTS', nickname: 'Porsche 718 GTS', year: 2018, make: 'Porsche', model: '718 Cayman GTS', displ: 2497, aspiration: 'T', engineType: 'Flat', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 Porsche 911 GT2 RS', nickname: "911 GT2 RS '18", year: 2018, make: 'Porsche', model: '911 GT2 RS', displ: 3800, aspiration: 'TT', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2018 Porsche Cayenne Turbo', nickname: 'Porsche Cayenne', year: 2018, make: 'Porsche', model: 'Cayenne Turbo', displ: 3996, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2018 Porsche Macan LPR Rally Raid', nickname: 'Porsche Macan RR', year: 2018, make: 'Porsche', model: 'Macan LPR Rally Raid', displ: 4950, aspiration: 'NA', engineType: '', cylinders: null, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'Bars, Rally lights', aspirationOptions: 'PDS', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '2017 Porsche Panamera Turbo', nickname: 'Porsche Panamera', year: 2017, make: 'Porsche', model: 'Panamera Turbo', displ: 3996, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2016 Porsche 911 GT3 RS', nickname: "911 GT3 RS '16", year: 2016, make: 'Porsche', model: '911 GT3 RS', displ: 3996, aspiration: 'NA', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2016 Porsche Cayman GT4', nickname: 'Porsche Cayman', year: 2016, make: 'Porsche', model: 'Cayman GT4', displ: 3800, aspiration: 'NA', engineType: 'Flat', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Porsche Cayman GTS', nickname: 'Porsche Cayman', year: 2015, make: 'Porsche', model: 'Cayman GTS', displ: 3436, aspiration: 'NA', engineType: 'Flat', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2014 Porsche 911 Turbo S', nickname: "911 Turbo '14", year: 2014, make: 'Porsche', model: '911 Turbo S', displ: 3800, aspiration: 'TT', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'AWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2014 Porsche 918 Spyder', nickname: 'Porsche 918', year: 2014, make: 'Porsche', model: '918 Spyder', displ: 4593, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'AWD', rTireWidth: 325, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2012 Porsche 911 GT2 RS', nickname: "911 GT2 RS '12", year: 2012, make: 'Porsche', model: '911 GT2 RS', displ: 3600, aspiration: 'TT', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 325, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2004 Porsche 911 GT3', nickname: "911 GT3 '04", year: 2004, make: 'Porsche', model: '911 GT3', displ: 3600, aspiration: 'NA', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 295, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2003 Porsche Carrera GT', nickname: 'Porsche Carrera', year: 2003, make: 'Porsche', model: 'Carrera GT', displ: 5733, aspiration: 'NA', engineType: 'V', cylinders: 10, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1998 Porsche 911 GT1 Strassenversion', nickname: 'Porsche 911 GT1', year: 1998, make: 'Porsche', model: '911 GT1 Strassenversion', displ: 3163, aspiration: 'TT', engineType: 'Flat', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1995 Porsche 911 GT2', nickname: "911 GT2 '95", year: 1995, make: 'Porsche', model: '911 GT2', displ: 3600, aspiration: 'TT', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 285, trackWidth: 'Rear', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1993 Porsche 968 Turbo S', nickname: 'Porsche 968', year: 1993, make: 'Porsche', model: '968 Turbo S', displ: 2990, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: "1989 Porsche #65 Rothsport Racing 911 'Desert Flyer'", nickname: '#65 911 Desert', year: 1989, make: 'Porsche', model: "#65 Rothsport Racing 911 'Desert Flyer'", displ: 3600, aspiration: 'NA', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: '', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'FH5',
}, {
  fullname: '1989 Porsche 944 Turbo', nickname: 'Porsche 944', year: 1989, make: 'Porsche', model: '944 Turbo', displ: 2479, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1987 Porsche 959', nickname: 'Porsche 959', year: 1987, make: 'Porsche', model: '959', displ: 2849, aspiration: 'TT', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'AWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1985 Porsche #185 959 Prodrive Rally Raid', nickname: '#185 Porsche 959', year: 1985, make: 'Porsche', model: '#185 959 Prodrive Rally Raid', displ: 2849, aspiration: 'TT', engineType: 'Flat', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1982 Porsche 911 Turbo 3.3', nickname: "911 Turbo '82", year: 1982, make: 'Porsche', model: '911 Turbo 3.3', displ: 3299, aspiration: 'T', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'TT', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1973 Porsche 911 Carrera RS', nickname: "911 Carrera '73", year: 1973, make: 'Porsche', model: '911 Carrera RS', displ: 2687, aspiration: 'NA', engineType: 'Flat', cylinders: 6, enginePlacement: 'R', drive: 'RWD', rTireWidth: 215, trackWidth: 'no', aeroorkitOptions: 'Preset Rally WB', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 Porsche #3 917 LH', nickname: 'Porsche 917 LH', year: 1970, make: 'Porsche', model: '#3 917 LH', displ: 4955, aspiration: 'NA', engineType: 'Flat', cylinders: 12, enginePlacement: 'M', drive: 'RWD', rTireWidth: 380, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 Porsche 914/6', nickname: 'Porsche 914/6', year: 1970, make: 'Porsche', model: '914/6', displ: 1991, aspiration: 'NA', engineType: 'Flat', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 185, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1959 Porsche 356 A 1600 Super', nickname: "Porsche 356 '59", year: 1959, make: 'Porsche', model: '356 A 1600 Super', displ: 1582, aspiration: 'NA', engineType: 'Flat', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 165, trackWidth: 'Both', aeroorkitOptions: 'Luggage', aspirationOptions: 'T, PDS', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2015 Radical RXC Turbo', nickname: 'Radical RXC', year: 2015, make: 'Radical', model: 'RXC Turbo', displ: 3498, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 295, trackWidth: 'no', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2019 RAESR Tachyon Speed', nickname: "RAESR TS '19", year: 2019, make: 'RAESR', model: 'Tachyon Speed', displ: 0, aspiration: 'E', engineType: 'E', cylinders: 'E', enginePlacement: 'M', drive: 'AWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Adjustable', aspirationOptions: 'none', naturallyAspirated: 'E', fh5: 'FH5',
}, {
  fullname: '2017 Ram 2500 Power Wagon', nickname: 'Ram Power Wagon', year: 2017, make: 'Ram', model: '2500 Power Wagon', displ: 6424, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'AWD', rTireWidth: 285, trackWidth: 'no', aeroorkitOptions: 'Preset Offroad bed', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1972 Reliant Supervan III', nickname: 'Reliant Supervan', year: 1972, make: 'Reliant', model: 'Supervan III', displ: 700, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 140, trackWidth: 'no', aeroorkitOptions: 'Roof, WB', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 Renault Megane R.S.', nickname: "Megane R.S. '18", year: 2018, make: 'Renault', model: 'Megane R.S.', displ: 1798, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2013 Renault Clio R.S. 200 EDC', nickname: "Renault Clio '13", year: 2013, make: 'Renault', model: 'Clio R.S. 200 EDC', displ: 1618, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2008 Renault Megane R26.R', nickname: 'Megane R26.R', year: 2008, make: 'Renault', model: 'Megane R26.R', displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1993 Renault Clio Williams', nickname: "Renault Clio '93", year: 1993, make: 'Renault', model: 'Clio Williams', displ: 1998, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 185, trackWidth: 'no', aeroorkitOptions: 'Rally lights roof', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1980 Renault 5 Turbo', nickname: 'Renault 5 Turbo', year: 1980, make: 'Renault', model: '5 Turbo', displ: 1397, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 220, trackWidth: 'Yes', aeroorkitOptions: 'Preset / Rally', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1968 Renault 4L Export', nickname: "Renault 4L '68", year: 1968, make: 'Renault', model: '4L Export', displ: 750, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 135, trackWidth: 'Both', aeroorkitOptions: 'Rally lights, WB', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1967 Renault 8 Gordini', nickname: 'Renault 8', year: 1967, make: 'Renault', model: '8 Gordini', displ: 1260, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 135, trackWidth: 'no', aeroorkitOptions: 'Rally lights', aspirationOptions: 'T, PDS', naturallyAspirated: '', fh5: 'DLC',
}, {
  fullname: '2019 Rimac Concept Two', nickname: 'Rimac Concept 2', year: 2019, make: 'Rimac', model: 'Concept Two', displ: 0, aspiration: 'E', engineType: 'E', cylinders: 'E', enginePlacement: 'M', drive: 'AWD', rTireWidth: 315, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'E', fh5: 'FH5',
}, {
  fullname: '2016 RJ Anderson #37 Polaris RZR-Rockstar Energy Pro 2 Truck', nickname: '#37 Pro 2 Truck', year: 2016, make: 'RJ Anderson', model: '#37 Polaris RZR-Rockstar Energy Pro 2 Truck', displ: 7210, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 305, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 Saleen S1', nickname: "Saleen S1 '18", year: 2018, make: 'Saleen', model: 'S1', displ: 2502, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2004 Saleen S7', nickname: 'Saleen S7', year: 2004, make: 'Saleen', model: 'S7', displ: 6997, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 345, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1965 Shelby Cobra 427 S/C', nickname: 'Shelby Cobra 427', year: 1965, make: 'Shelby', model: 'Cobra 427 S/C', displ: 6984, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1965 Shelby Cobra Daytona Coupe', nickname: 'Shelby Daytona', year: 1965, make: 'Shelby', model: 'Cobra Daytona Coupe', displ: 4727, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'Yes', aeroorkitOptions: 'Forza', aspirationOptions: 'PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2021 Sierra Cars RX3', nickname: 'SIERRA RX3', year: 2021, make: 'Sierra Cars', model: 'RX3', displ: 1340, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 205, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Subaru STI S209', nickname: 'Subaru STI S209', year: 2019, make: 'Subaru', model: 'STI S209', displ: 2460, aspiration: 'T', engineType: 'Flat', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Rally lights, WB', aspirationOptions: 'none', naturallyAspirated: '', fh5: 'DLC',
}, {
  fullname: '2015 Subaru WRX STI', nickname: "Subaru WRX '15", year: 2015, make: 'Subaru', model: 'WRX STI', displ: 2457, aspiration: 'T', engineType: 'Flat', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2013 Subaru BRZ', nickname: 'Subaru BRZ', year: 2013, make: 'Subaru', model: 'BRZ', displ: 1998, aspiration: 'NA', engineType: 'Flat', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Preset WB Drift', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2011 Subaru WRX STI', nickname: "Subaru WRX '11", year: 2011, make: 'Subaru', model: 'WRX STI', displ: 2457, aspiration: 'T', engineType: 'Flat', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2008 Subaru Impreza WRX STI', nickname: "Subaru WRX '08", year: 2008, make: 'Subaru', model: 'Impreza WRX STI', displ: 2457, aspiration: 'T', engineType: 'Flat', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2005 Subaru Impreza WRX STi', nickname: "Subaru WRX '05", year: 2005, make: 'Subaru', model: 'Impreza WRX STi', displ: 1994, aspiration: 'T', engineType: 'Flat', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Preset / Rally', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2005 Subaru Legacy Traffic', nickname: '', year: 2005, make: 'Subaru', model: 'Legacy Traffic', displ: null, aspiration: '', engineType: '', cylinders: null, enginePlacement: '', drive: '', rTireWidth: null, trackWidth: '', aeroorkitOptions: '', aspirationOptions: '', naturallyAspirated: '', fh5: 'HP',
}, {
  fullname: '2004 Subaru Impreza WRX STi', nickname: "Subaru WRX '04", year: 2004, make: 'Subaru', model: 'Impreza WRX STi', displ: 1994, aspiration: 'T', engineType: 'Flat', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket, Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1998 Subaru Impreza 22B-STi Version', nickname: 'Subaru 22B', year: 1998, make: 'Subaru', model: 'Impreza 22B-STi Version', displ: 2212, aspiration: 'T', engineType: 'Flat', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'Both', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2020 Toyota GR Supra', nickname: "Toyota Supra '20", year: 2020, make: 'Toyota', model: 'GR Supra', displ: 2998, aspiration: 'T', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Widebody, Sport', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2016 Toyota Land Cruiser Arctic Trucks AT37', nickname: 'Toyota AT37', year: 2016, make: 'Toyota', model: 'Land Cruiser Arctic Trucks AT37', displ: 2982, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'Rally lights / bars', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'cu',
}, {
  fullname: '2013 Toyota 86', nickname: 'Toyota GT86', year: 2013, make: 'Toyota', model: '86', displ: 1998, aspiration: 'NA', engineType: 'Flat', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket, WB', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2007 Toyota Hilux Arctic Trucks AT38', nickname: 'Toyota AT38', year: 2007, make: 'Toyota', model: 'Hilux Arctic Trucks AT38', displ: 2982, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 405, trackWidth: 'no', aeroorkitOptions: 'Bed', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'cu',
}, {
  fullname: '2003 Toyota Celica SS-I', nickname: "Toyota Celica '03", year: 2003, make: 'Toyota', model: 'Celica SS-I', displ: 1800, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, PDS, CS', naturallyAspirated: 'stock', fh5: 'cu',
}, {
  fullname: '1998 Toyota Supra RZ', nickname: "Toyota Supra '98", year: 1998, make: 'Toyota', model: 'Supra RZ', displ: 2997, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: "1998 Toyota Supra RZ 'Welcome Pack'", nickname: "Supra '98 WP", year: 1998, make: 'Toyota', model: "Supra RZ 'Welcome Pack'", displ: 2997, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T', naturallyAspirated: 'eng', fh5: 'DLC',
}, {
  fullname: '1994 Toyota Celica GT-Four ST205', nickname: "Toyota Celica '94", year: 1994, make: 'Toyota', model: 'Celica GT-Four ST205', displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1993 Toyota #1 T100 Baja Truck', nickname: '#1 Toyota Baja', year: 1993, make: 'Toyota', model: '#1 T100 Baja Truck', displ: 3409, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 315, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'TT', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1992 Toyota Celica GT-Four RC ST185', nickname: "Toyota Celica '92", year: 1992, make: 'Toyota', model: 'Celica GT-Four RC ST185', displ: 1998, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Street, rally lights, Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1992 Toyota Supra 2.0 GT', nickname: "Toyota Supra '92", year: 1992, make: 'Toyota', model: 'Supra 2.0 GT', displ: 1988, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 225, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket, WB', aspirationOptions: 'T', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1989 Toyota MR2 SC', nickname: "Toyota MR2 '89", year: 1989, make: 'Toyota', model: 'MR2 SC', displ: 1587, aspiration: 'PDS', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 185, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1985 Toyota Sprinter Trueno GT Apex', nickname: 'Toyota Trueno', year: 1985, make: 'Toyota', model: 'Sprinter Trueno GT Apex', displ: 1587, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 185, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1979 Toyota FJ40', nickname: 'Toyota FJ40', year: 1979, make: 'Toyota', model: 'FJ40', displ: 4230, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 215, trackWidth: 'no', aeroorkitOptions: 'Rally parts', aspirationOptions: '', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1974 Toyota Celica GT', nickname: "Toyota Celica '74", year: 1974, make: 'Toyota', model: 'Celica GT', displ: 1964, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 185, trackWidth: 'Both', aeroorkitOptions: 'Widebody, Street', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Toyota 2000GT', nickname: 'Toyota 2000GT', year: 1969, make: 'Toyota', model: '2000GT', displ: 1988, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 165, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2018 TVR Griffith', nickname: 'TVR Griffith', year: 2018, make: 'TVR', model: 'Griffith', displ: 4951, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 275, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2005 TVR Sagaris', nickname: 'TVR Sagaris', year: 2005, make: 'TVR', model: 'Sagaris', displ: 3996, aspiration: 'NA', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 255, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1998 TVR Cerbera Speed 12', nickname: 'TVR Speed 12', year: 1998, make: 'TVR', model: 'Cerbera Speed 12', displ: 7730, aspiration: 'NA', engineType: 'V', cylinders: 12, enginePlacement: 'F', drive: 'RWD', rTireWidth: 345, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Ultima Evolution Coupe 1020', nickname: 'Ultima 1020', year: 2015, make: 'Ultima', model: 'Evolution Coupe 1020', displ: 6800, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2016 Vauxhall Corsa VXR', nickname: "VauxCorsa '16", year: 2016, make: 'Vauxhall', model: 'Corsa VXR', displ: 1598, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 215, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2005 Vauxhall Monaro VXR', nickname: 'Vauxhall Monaro', year: 2005, make: 'Vauxhall', model: 'Monaro VXR', displ: 5967, aspiration: 'NA', engineType: 'V', cylinders: 8, enginePlacement: 'F', drive: 'RWD', rTireWidth: 245, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1990 Vauxhall Lotus Carlton', nickname: 'Vaux Carlton', year: 1990, make: 'Vauxhall', model: 'Lotus Carlton', displ: 3615, aspiration: 'TT', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'cu',
}, {
  fullname: '2017 Volkswagen #34 Volkswagen Andretti Rallycross Beetle', nickname: '#34 Beetle', year: 2017, make: 'Volkswagen', model: '#34 Volkswagen Andretti Rallycross Beetle', displ: 2e3, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Rally lights', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2014 Volkswagen Golf R', nickname: "VW Golf '14", year: 2014, make: 'Volkswagen', model: 'Golf R', displ: 1984, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Safety Lights / Preset / WB', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2011 Volkswagen Scirocco R', nickname: "VW Scirocco '11", year: 2011, make: 'Volkswagen', model: 'Scirocco R', displ: 1984, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2010 Volkswagen Golf R', nickname: "VW Golf '10", year: 2010, make: 'Volkswagen', model: 'Golf R', displ: 1984, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 235, trackWidth: 'no', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2003 Volkswagen Golf R32', nickname: "VW Golf '03", year: 2003, make: 'Volkswagen', model: 'Golf R32', displ: 3189, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 225, trackWidth: 'no', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'TT, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1998 Volkswagen Gti VR6 Mk3', nickname: "VW Golf '98", year: 1998, make: 'Volkswagen', model: 'Gti VR6 Mk3', displ: 2792, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1995 Volkswagen Corrado VR6', nickname: 'VW Corrado', year: 1995, make: 'Volkswagen', model: 'Corrado VR6', displ: 2792, aspiration: 'NA', engineType: 'V', cylinders: 6, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'Both', aeroorkitOptions: 'Aftermarket', aspirationOptions: 'T, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1992 Volkswagen Golf Gti 16v Mk2', nickname: "VW Golf '92", year: 1992, make: 'Volkswagen', model: 'Golf Gti 16v Mk2', displ: 1781, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 195, trackWidth: 'Both', aeroorkitOptions: 'Preset / WB', aspirationOptions: 'T, PDS, CS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1983 Volkswagen Golf GTI', nickname: "VW Golf GTI '83", year: 1983, make: 'Volkswagen', model: 'Golf GTI', displ: 1781, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 185, trackWidth: 'no', aeroorkitOptions: 'Street', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1981 Volkswagen Scirocco S', nickname: "VW Scirocco '81", year: 1981, make: 'Volkswagen', model: 'Scirocco S', displ: 1700, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'FWD', rTireWidth: 175, trackWidth: 'no', aeroorkitOptions: 'Street', aspirationOptions: 'T, PDS', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1970 Volkswagen #1107 Desert Dingo Racing Stock Bug', nickname: '#1107 VW Bug', year: 1970, make: 'Volkswagen', model: '#1107 Desert Dingo Racing Stock Bug', displ: 1600, aspiration: 'NA', engineType: 'Flat', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 195, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1969 Volkswagen Class 5/1600 Baja Bug', nickname: 'VW Class 5 Bug', year: 1969, make: 'Volkswagen', model: 'Class 5/1600 Baja Bug', displ: 1584, aspiration: 'NA', engineType: 'Flat', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 265, trackWidth: 'no', aeroorkitOptions: 'none', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1963 Volkswagen Beetle', nickname: 'VW Beetle', year: 1963, make: 'Volkswagen', model: 'Beetle', displ: 1200, aspiration: 'NA', engineType: 'Flat', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 165, trackWidth: 'no', aeroorkitOptions: 'roof', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1963 Volkswagen Beetle Forza Edition', nickname: "Beetle '63 FE", year: 1963, make: 'Volkswagen', model: 'Beetle Forza Edition', displ: 2660, aspiration: '', engineType: '', cylinders: null, enginePlacement: 'R', drive: 'RWD', rTireWidth: null, trackWidth: '', aeroorkitOptions: 'roof', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '1963 Volkswagen Type 2 De Luxe', nickname: 'VW Type 2', year: 1963, make: 'Volkswagen', model: 'Type 2 De Luxe', displ: 1493, aspiration: 'NA', engineType: 'Flat', cylinders: 4, enginePlacement: 'R', drive: 'RWD', rTireWidth: 175, trackWidth: 'no', aeroorkitOptions: 'roof', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2015 Volvo V60 Polestar', nickname: 'Volvo V60', year: 2015, make: 'Volvo', model: 'V60 Polestar', displ: 2953, aspiration: 'T', engineType: 'Inline', cylinders: 6, enginePlacement: 'F', drive: 'AWD', rTireWidth: 245, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1997 Volvo 850 R', nickname: 'Volvo 850', year: 1997, make: 'Volvo', model: '850 R', displ: 2319, aspiration: 'T', engineType: 'Inline', cylinders: 5, enginePlacement: 'F', drive: 'FWD', rTireWidth: 205, trackWidth: 'no', aeroorkitOptions: 'Street', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '1983 Volvo 242 Turbo Evolution', nickname: 'Volvo 242 Turbo', year: 1983, make: 'Volvo', model: '242 Turbo Evolution', displ: 2141, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'RWD', rTireWidth: 195, trackWidth: 'Both', aeroorkitOptions: 'Preset / rally', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '2017 VUHL 05RR', nickname: 'VUHL 05RR', year: 2017, make: 'VUHL', model: '05RR', displ: 2261, aspiration: 'T', engineType: 'Inline', cylinders: 4, enginePlacement: 'M', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Sport wing', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'FH5',
}, {
  fullname: '1945 Willys MB Jeep', nickname: 'Willys Jeep', year: 1945, make: 'Willys', model: 'MB Jeep', displ: 2199, aspiration: 'NA', engineType: 'Inline', cylinders: 4, enginePlacement: 'F', drive: 'AWD', rTireWidth: 170, trackWidth: 'no', aeroorkitOptions: 'Preset / bars', aspirationOptions: 'T', naturallyAspirated: 'stock', fh5: 'FH5',
}, {
  fullname: '2019 Zenvo TSR-S', nickname: 'Zenvo TSR-S', year: 2019, make: 'Zenvo', model: 'TSR-S', displ: 5800, aspiration: 'PDS', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 325, trackWidth: 'Both', aeroorkitOptions: 'Adjustable/Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'FH5',
}, {
  fullname: '2016 Zenvo TS1', nickname: 'Zenvo ST1', year: 2016, make: 'Zenvo', model: 'TS1', displ: 6800, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: null, trackWidth: 'no', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'cu',
}, {
  fullname: '2010 Noble M600', nickname: 'Noble M600', year: 2010, make: 'Noble', model: 'M600', displ: 4439, aspiration: 'TT', engineType: 'V', cylinders: 8, enginePlacement: 'M', drive: 'RWD', rTireWidth: 335, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'no', fh5: 'cu',
}, {
  fullname: '2006 Noble M400', nickname: 'Noble M400', year: 2006, make: 'Noble', model: 'M400', displ: 2970, aspiration: 'TT', engineType: 'V', cylinders: 6, enginePlacement: 'M', drive: 'RWD', rTireWidth: 265, trackWidth: 'Both', aeroorkitOptions: 'Forza', aspirationOptions: 'none', naturallyAspirated: 'eng', fh5: 'DLC',
}]; function jc(e, n) { const r = e.toUpperCase(); const t = n.toUpperCase(); return r < t ? -1 : r > t ? 1 : 0; } function Kc(e, n) { return e - n; } function ll(e, n, r = 'asc') { const t = [...e]; return t.sort((a, i) => { const o = r === 'asc' ? a[n] : i[n]; const l = r === 'asc' ? i[n] : a[n]; return typeof o === 'string' && typeof l === 'string' ? jc(o, l) : typeof o === 'number' && typeof l === 'number' ? Kc(o, l) : 0; }), t; } const Jc = ['th', 'st', 'nd', 'rd']; function sl(e) { const n = (e || 0) % 100; return n > 3 && n < 21 ? 'th' : Jc[n % 10] || 'th'; } function Zc(e) { return Object.keys(e).filter((n) => Number.isNaN(+n)); } function dl(e) { return Zc(e).map((n) => ({ value: e[n] })); } function De(e, n, r = '', t = !0) { const a = typeof e === 'string' ? parseFloat(e) : e; return Number.isNaN(a) ? '' : `${a.toFixed(n)}${t ? r : ''}`; } function Cn(e) { return typeof e === 'string' ? parseFloat(e) : e; } const Yc = ol; const _r = new Map(); const Xn = new Map(); console.log('makes:', Ua.length); Ua.forEach((e) => { Xn.set(e, []); }); Yc.forEach((e) => {
  if (_r.set(e.fullname, e), e.fh5) {
    Xn.has(e.make) || console.log(`${e.make} not found in byMake`); const n = Xn.get(e.make); n && n.push({
      year: e.year, make: e.make, model: e.model, fullname: e.fullname, shortname: `${e.year} ${e.model}`, sortname: `${e.model} ${e.year}`,
    });
  }
}); Object.keys(Xn).forEach((e) => { const n = Xn.get(e) || []; Xn.set(e, ll(n, 'sortname')); }); var Xe = ((e) => (e.bar = 'bar', e.psi = 'psi', e))(Xe || {}); var hn = ((e) => (e.kgf = 'kgf', e.lbf = 'lb', e))(hn || {}); var cr = ((e) => (e.kg = 'kg', e.lbs = 'lbs', e.n = 'n', e))(cr || {}); var We = ((e) => (e.kgf = 'kgf/mm', e.lbs = 'lbs/in', e.nmm = 'n/mm', e))(We || {}); var gn = ((e) => (e.cm = 'cm', e.in = 'in', e))(gn || {}); var ye = ((e) => (e.na = 'N/A', e.stock = 'Stock', e.street = 'Street', e.sport = 'Sport', e.race = 'Race', e))(ye || {}); var Ar = ((e) => (e.na = 'N/A', e.stock = 'Stock', e.sport = 'Sport', e.race = 'Race', e))(Ar || {}); var dt = ((e) => (e.na = 'N/A', e.stock = 'Stock', e.sport = 'Sport', e.race = 'Race', e.antilag = 'Race Anti-lag', e))(dt || {}); var _a = ((e) => (e.na = 'N/A', e.stock = 'Stock Restrictor Plate', e.none = 'No Restrictor Plate', e.removed = 'Remove Restrictor', e))(_a || {}); var pt = ((e) => (e.na = 'N/A', e.stock = 'Stock', e.street = 'Street', e.sport = 'Sport', e.race = 'Race', e.rally = 'Rally', e.drift = 'Drift', e.offroad = 'Offroad', e))(pt || {}); var Be = ((e) => (e.stock = 'Stock', e.sport = 'Sport', e.street = 'Street', e.race = 'Race', e.raceSix = 'Race Six Speed', e.raceSeven = 'Race Seven Speed', e.raceEight = 'Race Eight Speed', e.raceNine = 'Race Nine Speed', e.raceTen = 'Race Ten Speed', e.drift = 'Drift Four Speed', e))(Be || {}); var Na = ((e) => (e.stock = 'Stock', e.street = 'Street', e.sport = 'Sport', e.semiSlick = 'Semi-Slick', e.slick = 'Slick', e.drift = 'Drift', e.rally = 'Rally', e.offroad = 'Offroad', e.snow = 'Snow', e.drag = 'Drag', e.whitewall = 'Vintage Whitewall', e.vintage = 'Vintage Race', e))(Na || {}); var ct = ((e) => (e.stock = 'Stock', e.sport = 'Sport', e.multiPiece = 'Multi Piece', e.specialized = 'Specialized', e))(ct || {}); var ut = ((e) => (e.stock = 'Stock', e.first = 'First', e.second = 'Second', e.third = 'Third', e))(ut || {}); var Se = ((e) => (e.fwd = 'FWD', e.rwd = 'RWD', e.awd = 'AWD', e))(Se || {}); var me = ((e) => (e.D = 'D', e.C = 'C', e.B = 'B', e.A = 'A', e.S1 = 'S1', e.S2 = 'S2', e.X = 'X', e))(me || {}); const Ge = {
  springs: { newtonsKgf: 0.1019716212978, newtonsLbs: 0.57101471743224 }, force: 0.45359236844386, pressure: 0.0689475728, length: 0.39370078740214, weightNewtonsToMass: 9.80665,
}; function Ei(e, n) { const r = Cn(e); return (n === cr.kg ? r / Ge.springs.newtonsKgf : r / Ge.springs.newtonsLbs) / Ge.weightNewtonsToMass; } function qc(e, n) { const r = Cn(e); return n === Xe.bar ? r / Ge.pressure : r * Ge.pressure; } function Qc(e, n) { const r = Cn(e); const t = qc(r, n); return n === Xe.bar ? { bar: r, psi: t } : { bar: t, psi: r }; } function eu(e, n) { const r = Cn(e); return n === gn.cm ? r * Ge.length : r / Ge.length; } function nu(e, n) { const r = Cn(e); const t = eu(r, n); return n === gn.in ? { in: r, cm: t } : { in: t, cm: r }; } function ru(e, n) { const r = Cn(e); return n === hn.kgf ? r / Ge.force : r * Ge.force; } function tu(e, n) { const r = Cn(e); const t = ru(r, n); return n === hn.kgf ? { kgf: r, lbf: t } : { kgf: t, lbf: r }; } function pl(e, n) { const r = Cn(e); return n === We.kgf ? r / Ge.springs.newtonsKgf : n === We.lbs ? r / Ge.springs.newtonsLbs : r; } function ma(e, n) { return n === We.kgf ? e * Ge.springs.newtonsKgf : n === We.lbs ? e * Ge.springs.newtonsLbs : e; } function Ii(e, n, r) { const t = pl(e, n); return ma(t, r); } function au(e, n) { const r = pl(e, n); const t = ma(r, We.kgf); const a = ma(r, We.lbs); return { newtons: r, kgf: t, lbs: a }; } function iu(e, n, r = 1, t = !1) { const a = Qc(e, n); return [De(a.bar, 2, ' bar', t), De(a.psi, r, ' psi', t)]; } function ou(e, n, r = 1, t = !1) { const a = tu(e, n); return [De(a.kgf, r, ' kgf', t), De(a.lbf, r, ' lbf', t)]; } function lu(e, n, r = 1, t = !1) { const a = au(e, n); return [De(a.kgf, r, ' kgf/mm', t), De(a.lbs, r, ' lbs/in', t), De(a.newtons, r, ' n/mm', t)]; } function su(e, n, r = 1, t = !1) { const a = nu(e, n); return [De(a.cm, r, ' cm', t), De(a.in, r, ' in', t)]; } function cl(e) { return Object.values(Xe).includes(e); } function ul(e) { return Object.values(hn).includes(e); } function ml(e) { return Object.values(We).includes(e); } function fl(e) { return Object.values(gn).includes(e); } function ir(e, n, r = 1, t = !1) { if (cl(n)) return iu(e, n, r, t); if (ml(n)) return lu(e, n, r, t); if (fl(n)) return su(e, n, r, t); if (ul(n)) return ou(e, n, r, t); throw new Error(`Invalid Unit of Measure: ${n}`); } const jr = {
  springRate: ['kgf/mm', 'lbs/in', 'n/mm'], force: ['kgf', 'lb'], pressure: ['bar', 'psi'], length: ['cm', 'in'],
}; function hl(e) { if (cl(e)) return jr.pressure; if (ml(e)) return jr.springRate; if (fl(e)) return jr.length; if (ul(e)) return jr.force; throw new Error(`Invalid Unit of Measure: ${e}`); } const du = `
######
`;function gl(e) { return e && `**${e.replace(/\*\*/g, '')}**`; } function Lt(e, n = !1) { const r = [...e]; return n && (r[0] = gl(r[0])), `|${r.join('|')}|`; } function Re(e, n, r = !1, t = '--:') { const a = [':--', t]; for (let i = 2; i < e.length; i++)a.push(t); return [Lt(e.map(gl)), Lt(a), ...n.map((i) => Lt(i, r)), du]; } function Ea(e, n, r = 1, t = '') { if (n.every((i) => i.na)) { const i = Array.from({ length: n.length }, () => ''); return Re(e, [['Not Applicable', ...i]]); } const a = [['Front', ...n.map((i) => De(i.front, r, t))], ['Rear', ...n.map((i) => De(i.rear, r, t))]]; return Re(e, a); } function fa(e, n, r = 1) { const t = [e, ...hl(n.units)]; if (n.na) return Re(t, [['Not Applicable', ...ir('', n.units, r)]]); const a = [['Front', ...ir(n.front, n.units, r)], ['Rear', ...ir(n.rear, n.units, r)]]; return Re(t, a); } function pu(e) { return fa('Tires', e.tires, 1); } function cu(e) { const r = ['Gears', 'Ratio']; if (e.gears.na) return Re(r, [['Not Applicable', '']]); const t = [['Final Drive', parseFloat(e.gears.ratios[0]).toFixed(2)]]; for (let a = 1; a < e.gears.ratios.length; a++) { const i = parseFloat(e.gears.ratios[a]); if (!i) break; t.push([`${a}${sl(a)}`, i.toFixed(2)]); } return t.length === 1 && e.gears.ratios[0] === '' ? [] : Re(r, t); } function uu(e) { return Ea(['Alignment', 'Camber', 'Toe', 'Caster'], [e.camber, e.toe, { front: e.caster, rear: '' }], 1, '°'); } function mu(e) { const n = ['ARBs', '']; return e.arb.na ? Re(n, [['Not Applicable', '']]) : Ea(n, [e.arb]); } function fu(e) { const n = ['ARBs', '']; return e.arb.na ? Re(n, [['Not Applicable', '']]) : [...fa('Springs', e.springs, 1), ...fa('Ride Height', e.rideHeight, 1)]; } function hu(e) { return Ea(['Damping', 'Rebound', 'Bump'], [e.damping, e.bump]); } function gu(e) { const n = ['Aero', ...hl(e.aero.units)]; if (e.aero.na) return Re(n, [['Not Applicable', ...ir('', e.aero.units)]]); const r = ['Front']; const t = ['Rear']; return e.aero.front === '' ? r.push('N/A', '', '') : r.push(...ir(e.aero.front, e.aero.units, 1)), e.aero.rear === '' ? t.push('N/A', '', '') : t.push(...ir(e.aero.rear, e.aero.units, 1)), Re(n, [r, t]); } function ku(e) { const n = ['Brakes', '%']; return !e.brake.bias && !e.brake.pressure ? Re(n, [['Not Applicable', '']]) : Re(n, [['Balance', De(e.brake.bias, 0, '%')], ['Pressure', De(e.brake.pressure, 0, '%')]]); } function yu(e) { return Object.values(Se).includes(e); } function kl(e, n) { return e.conversions.drivetrain ? e.conversions.drivetrain : yu(n) ? n : Se.awd; } function Ru(e, n) { const r = kl(e.build, (n == null ? void 0 : n.drive) || ''); const t = ['Differential', 'Accel', 'Decel']; if (e.tune.diff.na) return Re(t, [['Not Applicable', '', '']]); const a = ['Front', 'N/A', 'N/A']; const i = ['Rear', 'N/A', 'N/A']; const o = ['Center', '', '']; const l = []; return [Se.fwd, Se.awd].includes(r) && (l.push(a), a[1] = De(e.tune.diff.front.accel, 0, '%'), a[2] = De(e.tune.diff.front.decel, 0, '%')), [Se.rwd, Se.awd].includes(r) && (l.push(i), i[1] = De(e.tune.diff.rear.accel, 0, '%'), i[2] = De(e.tune.diff.rear.decel, 0, '%')), r === Se.awd && (l.push(o), o[1] = De(e.tune.diff.center, 0, '%')), Re(t, l); } function Tu(e, n) { const r = _r.get(n); return [...pu(e.tune), ...cu(e.tune), ...uu(e.tune), ...mu(e.tune), ...fu(e.tune), ...hu(e.tune), ...gu(e.tune), ...ku(e.tune), ...Ru(e, r)]; } function Mu(e, n) { const r = ['Conversions', '']; const t = _r.get(n); const a = e.conversions.drivetrain === (t == null ? void 0 : t.drive) ? 'Stock' : e.conversions.drivetrain; const i = [['Engine', e.conversions.engine || 'Stock'], ['Drivetrain', a || 'Stock']]; return e.conversions.aspiration && i.push(['Aspiration', e.conversions.aspiration || 'Stock']), e.conversions.aspiration && i.push(['Body Kit', e.conversions.bodyKit || 'Stock']), Re(r, i); } function vu(e) { return Re(['Tires And Rims', ''], [['Compound', e.tiresAndRims.compound], ['Tire Width', `Front ${e.tiresAndRims.width.front} mm, Rear ${e.tiresAndRims.width.rear} mm`], ['Rim Style', `${e.tiresAndRims.rimStyle.type} ${e.tiresAndRims.rimStyle.name}`], ['Rim Size', `Front ${e.tiresAndRims.rimSize.front} in, Rear ${e.tiresAndRims.rimSize.rear} in`], ['Track Width', `Front ${e.tiresAndRims.trackWidth.front}, Rear ${e.tiresAndRims.trackWidth.rear}`]], !1, ':--'); } function Su(e) { const n = []; return e.aeroAndAppearance.frontBumper && n.push(['Front Bumper', e.aeroAndAppearance.frontBumper]), e.aeroAndAppearance.rearBumper && n.push(['Rear Bumper', e.aeroAndAppearance.rearBumper]), e.aeroAndAppearance.rearWing && n.push(['Rear Wing', e.aeroAndAppearance.rearWing]), e.aeroAndAppearance.sideSkirts && n.push(['Side Skirts', e.aeroAndAppearance.sideSkirts]), e.aeroAndAppearance.hood && n.push(['Hood', e.aeroAndAppearance.hood]), n.length === 0 ? [] : Re(['Aero and Appearance', ''], n, !1, ':--'); } function Gt(e) { return Object.keys(e).filter((r) => { const t = e[r]; return t && t.toString() !== 'N/A'; }).map((r) => [Xc(r), e[r]]); } const Fu = { Metric: { weight: 'kg', torque: 'nm', speed: 'kph' }, Imperial: { weight: 'lbs', torque: 'lb-ft', speed: 'mph' } }; function Wu(e, n) {
  const r = []; `${e.stats.classification} ${e.stats.pi}`.trim(), e.model && r.push(`${e.model}`), r.push(`${e.stats.classification} ${e.stats.pi}`); const t = `#${r.join(' - ')}
`; const a = Fu[n]; const i = []; return e.stats.weight && i.push(['Weight', `${e.stats.weight} ${a.weight}`]), e.stats.balance && i.push(['Balance', `${e.stats.balance}%`]), e.stats.hp && i.push(['HP', `${e.stats.hp}`]), e.stats.torque && i.push(['Torque', `${e.stats.torque} ${a.torque}`]), e.stats.topSpeed && i.push(['Top Speed', `${e.stats.topSpeed} ${a.speed}`]), e.stats.zeroToSixty && i.push(['0-60', `${e.stats.zeroToSixty}s`]), e.stats.zeroToHundred && i.push(['0-100', `${e.stats.zeroToHundred}s`]), e.stats.shareCode && i.push(['Share Code', `${e.stats.shareCode}`]), [t, ...Re(['Stats', ''], i, !0, ':--')];
} function Au(e, n) { return [...Mu(e, n), ...Re(['Engine', ''], Gt(e.engine), !1, ':--'), ...Re(['Platform And Handling', ''], Gt(e.platformAndHandling), !1, ':--'), ...Re(['Drivetrain', ''], Gt(e.drivetrain), !1, ':--'), ...vu(e), ...Su(e)]; } function Pu(e, n, r) {
  return [...Wu(e, r), `[View this tune on optn.club](${n})
`, `---
`, `## Build
`, ...Au(e.build, e.model), `---
`, `## Tune
`, ...Tu(e, e.model), `---
`, `Formatted text generated by the [OPTN.club Tune Formatter](https://optn.club/formatter)  
`, 'Submit bugs, feature requests, and questions on [Github](https://github.com/OPTN-Club/optn.club/issues)'].join(`
`);
} function Nr() {
  return {
    make: '',
    model: '',
    tune: {
      tires: { front: '2', rear: '2', units: Xe.bar },
      gears: { ratios: ['', '', '', '', '', '', '', '', '', '', ''], na: !1 },
      camber: { front: '-1', rear: '-1' },
      toe: { front: '0', rear: '0' },
      caster: '5',
      arb: { front: '', rear: '', na: !1 },
      springs: {
        front: '', rear: '', units: We.kgf, na: !1,
      },
      rideHeight: {
        front: '', rear: '', units: gn.cm, na: !1,
      },
      damping: { front: '', rear: '', na: !1 },
      bump: { front: '', rear: '', na: !1 },
      aero: {
        front: '', rear: '', units: hn.kgf, na: !1,
      },
      brake: { na: !1, bias: '50', pressure: '100' },
      diff: {
        front: { accel: '', decel: '' }, rear: { accel: '', decel: '' }, center: '50', na: !1,
      },
    },
    build: {
      conversions: {
        engine: 'Stock', drivetrain: Se.awd, aspiration: 'Stock', bodyKit: '',
      },
      engine: {
        intake: ye.stock, intakeManifold: ye.na, carburator: ye.na, fuelSystem: ye.stock, ignition: ye.stock, exhaust: ye.stock, camshaft: ye.stock, valves: ye.stock, displacement: ye.stock, pistons: ye.stock, turbo: dt.na, twinTurbo: dt.na, supercharger: Ar.na, centrifugalSupercharger: Ar.na, intercooler: Ar.stock, oilCooling: ye.stock, flywheel: ye.stock, restrictorPlate: _a.na,
      },
      platformAndHandling: {
        brakes: ye.stock, springs: pt.race, frontArb: ye.race, rearArb: ye.race, chassisReinforcement: ye.stock, weightReduction: ye.stock,
      },
      drivetrain: {
        clutch: ye.stock, transmission: Be.stock, driveline: ye.stock, differential: pt.race,
      },
      tiresAndRims: {
        compound: Na.stock, width: { front: 'Stock', rear: 'Stock' }, rimStyle: { type: ct.stock, name: '' }, rimSize: { front: 'Stock', rear: 'Stock' }, trackWidth: { front: ut.stock, rear: ut.stock },
      },
      aeroAndAppearance: {
        frontBumper: 'Stock', rearBumper: 'N/A', rearWing: 'Stock', sideSkirts: 'N/A', hood: 'N/A',
      },
    },
    stats: {
      pi: 800, classification: me.A, hp: 0, torque: 0, weight: 0, balance: 0, topSpeed: 0, zeroToSixty: 0, zeroToHundred: 0, shareCode: '',
    },
  };
} let mt = {}; const Du = { get exports() { return mt; }, set exports(e) { mt = e; } }; (function (e) {
  const n = (function () {
    const r = String.fromCharCode; const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$'; const i = {}; function o(s, c) { if (!i[s]) { i[s] = {}; for (let u = 0; u < s.length; u++)i[s][s.charAt(u)] = u; } return i[s][c]; } var l = {
      compressToBase64(s) { if (s == null) return ''; const c = l._compress(s, 6, (u) => t.charAt(u)); switch (c.length % 4) { default: case 0: return c; case 1: return `${c}===`; case 2: return `${c}==`; case 3: return `${c}=`; } }, decompressFromBase64(s) { return s == null ? '' : s == '' ? null : l._decompress(s.length, 32, (c) => o(t, s.charAt(c))); }, compressToUTF16(s) { return s == null ? '' : `${l._compress(s, 15, (c) => r(c + 32))} `; }, decompressFromUTF16(s) { return s == null ? '' : s == '' ? null : l._decompress(s.length, 16384, (c) => s.charCodeAt(c) - 32); }, compressToUint8Array(s) { for (var c = l.compress(s), u = new Uint8Array(c.length * 2), f = 0, h = c.length; f < h; f++) { const y = c.charCodeAt(f); u[f * 2] = y >>> 8, u[f * 2 + 1] = y % 256; } return u; }, decompressFromUint8Array(s) { if (s == null) return l.decompress(s); for (var c = new Array(s.length / 2), u = 0, f = c.length; u < f; u++)c[u] = s[u * 2] * 256 + s[u * 2 + 1]; const h = []; return c.forEach((y) => { h.push(r(y)); }), l.decompress(h.join('')); }, compressToEncodedURIComponent(s) { return s == null ? '' : l._compress(s, 6, (c) => a.charAt(c)); }, decompressFromEncodedURIComponent(s) { return s == null ? '' : s == '' ? null : (s = s.replace(/ /g, '+'), l._decompress(s.length, 32, (c) => o(a, s.charAt(c)))); }, compress(s) { return l._compress(s, 16, (c) => r(c)); }, _compress(s, c, u) { if (s == null) return ''; let f; let h; const y = {}; const F = {}; let O = ''; let L = ''; let A = ''; let V = 2; let b = 3; let _ = 2; const N = []; let M = 0; let E = 0; let x; for (x = 0; x < s.length; x += 1) if (O = s.charAt(x), Object.prototype.hasOwnProperty.call(y, O) || (y[O] = b++, F[O] = !0), L = A + O, Object.prototype.hasOwnProperty.call(y, L))A = L; else { if (Object.prototype.hasOwnProperty.call(F, A)) { if (A.charCodeAt(0) < 256) { for (f = 0; f < _; f++)M <<= 1, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++; for (h = A.charCodeAt(0), f = 0; f < 8; f++)M = M << 1 | h & 1, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++, h >>= 1; } else { for (h = 1, f = 0; f < _; f++)M = M << 1 | h, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++, h = 0; for (h = A.charCodeAt(0), f = 0; f < 16; f++)M = M << 1 | h & 1, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++, h >>= 1; }V--, V == 0 && (V = 2 ** _, _++), delete F[A]; } else for (h = y[A], f = 0; f < _; f++)M = M << 1 | h & 1, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++, h >>= 1; V--, V == 0 && (V = 2 ** _, _++), y[L] = b++, A = String(O); } if (A !== '') { if (Object.prototype.hasOwnProperty.call(F, A)) { if (A.charCodeAt(0) < 256) { for (f = 0; f < _; f++)M <<= 1, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++; for (h = A.charCodeAt(0), f = 0; f < 8; f++)M = M << 1 | h & 1, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++, h >>= 1; } else { for (h = 1, f = 0; f < _; f++)M = M << 1 | h, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++, h = 0; for (h = A.charCodeAt(0), f = 0; f < 16; f++)M = M << 1 | h & 1, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++, h >>= 1; }V--, V == 0 && (V = 2 ** _, _++), delete F[A]; } else for (h = y[A], f = 0; f < _; f++)M = M << 1 | h & 1, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++, h >>= 1; V--, V == 0 && (V = 2 ** _, _++); } for (h = 2, f = 0; f < _; f++)M = M << 1 | h & 1, E == c - 1 ? (E = 0, N.push(u(M)), M = 0) : E++, h >>= 1; for (;;) if (M <<= 1, E == c - 1) { N.push(u(M)); break; } else E++; return N.join(''); }, decompress(s) { return s == null ? '' : s == '' ? null : l._decompress(s.length, 32768, (c) => s.charCodeAt(c)); }, _decompress(s, c, u) { const f = []; let h = 4; let y = 4; let F = 3; let O = ''; const L = []; let A; let V; let b; let _; let N; let M; let E; const x = { val: u(0), position: c, index: 1 }; for (A = 0; A < 3; A += 1)f[A] = A; for (b = 0, N = 2 ** 2, M = 1; M != N;)_ = x.val & x.position, x.position >>= 1, x.position == 0 && (x.position = c, x.val = u(x.index++)), b |= (_ > 0 ? 1 : 0) * M, M <<= 1; switch (b) { case 0: for (b = 0, N = 2 ** 8, M = 1; M != N;)_ = x.val & x.position, x.position >>= 1, x.position == 0 && (x.position = c, x.val = u(x.index++)), b |= (_ > 0 ? 1 : 0) * M, M <<= 1; E = r(b); break; case 1: for (b = 0, N = 2 ** 16, M = 1; M != N;)_ = x.val & x.position, x.position >>= 1, x.position == 0 && (x.position = c, x.val = u(x.index++)), b |= (_ > 0 ? 1 : 0) * M, M <<= 1; E = r(b); break; case 2: return ''; } for (f[3] = E, V = E, L.push(E); ;) { if (x.index > s) return ''; for (b = 0, N = 2 ** F, M = 1; M != N;)_ = x.val & x.position, x.position >>= 1, x.position == 0 && (x.position = c, x.val = u(x.index++)), b |= (_ > 0 ? 1 : 0) * M, M <<= 1; switch (E = b) { case 0: for (b = 0, N = 2 ** 8, M = 1; M != N;)_ = x.val & x.position, x.position >>= 1, x.position == 0 && (x.position = c, x.val = u(x.index++)), b |= (_ > 0 ? 1 : 0) * M, M <<= 1; f[y++] = r(b), E = y - 1, h--; break; case 1: for (b = 0, N = 2 ** 16, M = 1; M != N;)_ = x.val & x.position, x.position >>= 1, x.position == 0 && (x.position = c, x.val = u(x.index++)), b |= (_ > 0 ? 1 : 0) * M, M <<= 1; f[y++] = r(b), E = y - 1, h--; break; case 2: return L.join(''); } if (h == 0 && (h = 2 ** F, F++), f[E])O = f[E]; else if (E === y)O = V + V.charAt(0); else return null; L.push(O), f[y++] = V + O.charAt(0), h--, V = O, h == 0 && (h = 2 ** F, F++); } },
    }; return l;
  }()); e != null ? e.exports = n : typeof angular < 'u' && angular != null && angular.module('LZString', []).factory('LZString', () => n);
}(Du)); const ft = {
  Stock: 's', Street: 'st', Sport: 'sp', 'Semi-Slick': 'ss', Race: 'r', Slick: 'sl', Drift: 'dr', Rally: 'ra', Offroad: 'o', Snow: 'sn', Drag: 'd', 'Vintage Whitewall': 'vw', 'Vintage Race': 'vr', 'Multi Piece': 'mp', Specialized: 'spec', First: '1st', Second: '2nd', Third: '3rd', 'Remove Restrictor': 'rr', 'No Restrictor Plate': 'nrp', 'Stock Restrictor Plate': 'srp', 'N/A': 'na',
}; const xi = Object.keys(ft).reduce((e, n) => ({ ...e, [ft[n]]: n }), {}); function Ou(e) { return typeof e === 'boolean' ? e ? 't' : 'f' : typeof e === 'string' && e in ft ? ft[e] : e; } function bu(e) { return e === 't' ? !0 : e === 'f' ? !1 : typeof e === 'string' && e in xi ? xi[e] : e; } function Ct(e, n = []) { const r = Object.keys(e); const t = {}; return r.forEach((a) => { const i = e[a]; const o = [...n, a]; const l = o.join('.'); if (i && typeof i === 'object' && !Array.isArray(i)) { const s = Ct(i, o); Object.keys(s).forEach((c) => { t[c] = s[c]; }); } else t[l] = i; }), t; } const yl = Object.keys(Ct(Nr())); yl.sort(); function Rl(e, n, r = []) { return Object.keys(n).forEach((a) => { const i = [...r, a]; const o = n[a]; const l = typeof o === 'object' && !Array.isArray(o); if (o && l)n[a] = Rl(e, o, i); else { const s = i.join('.'); const c = e[s]; n[a] = c; } }), n; } const Hu = Tl(Ct(Nr())); function Bu(e) { const n = Ct(e); const r = Tl(n); return r === Hu ? '' : mt.compressToBase64(r); } function Cu(e) { const n = mt.decompressFromBase64(e); if (!n) throw new Error('Decompressed string is empty'); const r = Vu(n); const t = Rl(r, Nr()); if (!t || !Object.keys(t).length) throw new Error('Undefined or empty object.'); return t; } function Tl(e) { const n = Object.keys(e); n.sort(); const r = []; return n.forEach((t) => { r.push(Ou(e[t])); }), JSON.stringify(r); } function Vu(e) { const n = JSON.parse(e); const r = {}; return yl.forEach((t, a) => { r[t] = bu(n[a]); }), r; } const wu = [Be.sport, Be.race, Be.raceSix, Be.raceSeven, Be.raceEight, Be.raceNine, Be.raceTen]; const Uu = {
  [Be.race]: 6, [Be.raceSix]: 6, [Be.raceSeven]: 7, [Be.raceEight]: 8, [Be.raceNine]: 9, [Be.raceTen]: 10,
}; function _u(e, n) { return Uu[e.build.drivetrain.transmission] || 10; } function Nu(e, n, r) { return J(() => ({ gears: { final: wu.includes(e.build.drivetrain.transmission), count: _u(e) }, diff: { front: [Se.awd, Se.fwd].includes(r.value), rear: [Se.awd, Se.rwd].includes(r.value), center: Se.awd === r.value } })); } function Eu() {
  const e = localStorage.getItem(vl); return e ? JSON.parse(e) : {
    global: 'Metric', tires: Xe.bar, springs: We.kgf, rideHeight: gn.cm, aero: hn.kgf,
  };
} function Iu(e) { return e ? Cu(e) : Nr(); } const Ml = 'formatting-form'; const vl = 'UNITS'; function xu() {
  const e = Mc(); const n = e.currentRoute.value.params.encodedForm; const r = Pe(Iu(n)); const t = J(() => _r.get(r.model) || null); const a = J(() => (t.value ? kl(r.build, t.value.drive) : Se.awd)); const i = Eu(); const o = Rn(i.global); n || (r.tune.tires.units = i.tires, r.tune.springs.units = i.springs, r.tune.rideHeight.units = i.rideHeight, r.tune.aero.units = i.aero); const l = Nu(r, t, a); const s = J(() => Bu(r)); const c = J(() => `https://optn.club${e.currentRoute.value.fullPath}`); const u = J(() => Pu(r, c.value, o.value)); function f() { o.value === 'Imperial' ? (r.tune.tires.units = Xe.psi, r.tune.springs.units = We.lbs, r.tune.rideHeight.units = gn.in, r.tune.aero.units = hn.lbf) : (r.tune.tires.units = Xe.bar, r.tune.springs.units = We.kgf, r.tune.rideHeight.units = gn.cm, r.tune.aero.units = hn.kgf); } function h() { const F = Nr(); r.build = F.build, r.make = F.make, r.model = F.model, r.stats = F.stats, r.tune = F.tune, f(); }pe(o, () => { f(); }), pe([() => r.tune.tires.units, () => r.tune.springs.units, () => r.tune.rideHeight.units, () => r.tune.aero.units], ([F, O, L, A]) => {
    const V = {
      global: o.value, tires: F, springs: O, rideHeight: L, aero: A,
    }; localStorage.setItem(vl, JSON.stringify(V));
  }), pe(t, (F) => { F && (console.log(F), r.build.conversions.drivetrain = F.drive); }), pe(s, (F, O) => { F !== O && e.replace({ params: { encodedForm: F } }); }); const y = {
    form: r, car: t, driveType: a, globalUnit: o, show: l, markdown: u, encoded: s, reset: h,
  }; return Tr(Ml, y), y;
} function Er() { const e = on(Ml); if (!e) throw new Error('Injected state not available'); return e; } let Kr; const Lu = new Uint8Array(16); function Sl() { if (!Kr && (Kr = typeof crypto < 'u' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Kr)) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'); return Kr(Lu); } const Oe = []; for (let e = 0; e < 256; ++e)Oe.push((e + 256).toString(16).slice(1)); function Fl(e, n = 0) { return (`${Oe[e[n + 0]] + Oe[e[n + 1]] + Oe[e[n + 2]] + Oe[e[n + 3]]}-${Oe[e[n + 4]]}${Oe[e[n + 5]]}-${Oe[e[n + 6]]}${Oe[e[n + 7]]}-${Oe[e[n + 8]]}${Oe[e[n + 9]]}-${Oe[e[n + 10]]}${Oe[e[n + 11]]}${Oe[e[n + 12]]}${Oe[e[n + 13]]}${Oe[e[n + 14]]}${Oe[e[n + 15]]}`).toLowerCase(); } let Li; let zt; let $t = 0; let Xt = 0; function fr(e, n, r) { let t = n && r || 0; const a = n || new Array(16); e = e || {}; let i = e.node || Li; let o = e.clockseq !== void 0 ? e.clockseq : zt; if (i == null || o == null) { const h = e.random || (e.rng || Sl)(); i == null && (i = Li = [h[0] | 1, h[1], h[2], h[3], h[4], h[5]]), o == null && (o = zt = (h[6] << 8 | h[7]) & 16383); } let l = e.msecs !== void 0 ? e.msecs : Date.now(); let s = e.nsecs !== void 0 ? e.nsecs : Xt + 1; const c = l - $t + (s - Xt) / 1e4; if (c < 0 && e.clockseq === void 0 && (o = o + 1 & 16383), (c < 0 || l > $t) && e.nsecs === void 0 && (s = 0), s >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec"); $t = l, Xt = s, zt = o, l += 122192928e5; const u = ((l & 268435455) * 1e4 + s) % 4294967296; a[t++] = u >>> 24 & 255, a[t++] = u >>> 16 & 255, a[t++] = u >>> 8 & 255, a[t++] = u & 255; const f = l / 4294967296 * 1e4 & 268435455; a[t++] = f >>> 8 & 255, a[t++] = f & 255, a[t++] = f >>> 24 & 15 | 16, a[t++] = f >>> 16 & 255, a[t++] = o >>> 8 | 128, a[t++] = o & 255; for (let h = 0; h < 6; ++h)a[t + h] = i[h]; return n || Fl(a); } const Gu = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto); const Gi = { randomUUID: Gu }; function zu(e, n, r) { if (Gi.randomUUID && !n && !e) return Gi.randomUUID(); e = e || {}; const t = e.random || (e.rng || Sl)(); if (t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, n) { r = r || 0; for (let a = 0; a < 16; ++a)n[r + a] = t[a]; return n; } return Fl(t); } const $u = ['id', 'value', 'disabled']; const Xu = {
  key: 0, valuex: '', disabled: '', selected: '', hidden: '',
}; const ju = ['value']; const Wl = ne({
  __name: 'SelectInput',
  props: {
    modelValue: null, id: null, options: null, placeholder: null, disabled: { type: Boolean },
  },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    function r(t) { const a = t.target.value; n('update:modelValue', a); } return (t, a) => (U(), j('select', {
      id: e.id, value: e.modelValue, disabled: e.disabled, onInput: r,
    }, [e.placeholder ? (U(), j('option', Xu, X(e.placeholder), 1)) : Ke('', !0), He(t.$slots, 'default', {}, () => [(U(!0), j(ke, null, Hn(e.options, (i) => (U(), j('option', { key: i.value, value: i.value }, X(i.label || i.value), 9, ju))), 128))])], 40, $u));
  },
}); const Ku = ['for']; const Ju = { class: 'label-note' }; const Zu = { inheritAttrs: !1 }; const ha = ne({
  ...Zu,
  __name: 'SelectControl',
  props: {
    modelValue: null, label: null, note: null, options: null, placeholder: null, rootClass: null, disabled: { type: Boolean },
  },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    const r = fr(); function t(a) { n('update:modelValue', a); } return (a, i) => (U(), j('div', { class: we(['control', [e.rootClass, { disabled: e.disabled }]]) }, [e.label ? (U(), j('label', { key: 0, for: p(r) }, [d('span', null, X(e.label), 1), d('span', Ju, X(e.note), 1)], 8, Ku)) : Ke('', !0), k(Wl, Dt(a.$attrs, {
      id: p(r), modelValue: e.modelValue, disabled: e.disabled, options: e.options, 'onUpdate:modelValue': t,
    }), { default: ie(() => [He(a.$slots, 'default')]), _: 3 }, 16, ['id', 'modelValue', 'disabled', 'options'])], 2));
  },
}); const je = ne({
  __name: 'EnumSelect',
  props: {
    modelValue: null, label: null, type: null, rootClass: null,
  },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    const r = e; const t = J(() => dl(r.type)); function a(i) { n('update:modelValue', i); } return (i, o) => (U(), _e(ha, {
      modelValue: e.modelValue, label: e.label, options: p(t), rootClass: e.rootClass, 'onUpdate:modelValue': a,
    }, null, 8, ['modelValue', 'label', 'options', 'rootClass']));
  },
}); const zi = ne({
  __name: 'FullUpgradeSelect',
  props: { modelValue: null, label: null },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    function r(t) { n('update:modelValue', t); } return (t, a) => (U(), _e(je, {
      modelValue: e.modelValue, label: e.label, type: p(pt), rootClass: 'upgrade-select', 'onUpdate:modelValue': r,
    }, null, 8, ['modelValue', 'label', 'type']));
  },
}); const Yu = ['for']; const qu = { class: 'label-note' }; const Qu = { class: 'flex items-center relative' }; const em = { key: 0, class: 'absolute suffix' }; const nm = ['id', 'value', 'type', 'required', 'step', 'min', 'max', 'disabled']; const rm = { key: 1, class: 'absolute suffix' }; const tm = { key: 0, class: 'validation-message' }; const am = { inheritAttrs: !1 }; const xe = ne({
  ...am,
  __name: 'InputControl',
  props: {
    modelValue: null, label: { default: void 0 }, note: { default: void 0 }, errorMsg: { default: '' }, error: { type: Boolean, default: !1 }, required: { type: Boolean, default: !1 }, disabled: { type: Boolean }, type: { default: 'text' }, step: { default: 1 }, min: { default: 0 }, max: { default: 9999 }, rootClass: { default: void 0 },
  },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    const r = fr(); function t(a) { const i = a.target.value; n('update:modelValue', i); } return (a, i) => (U(), j('div', { class: we(['control', [e.rootClass, { disabled: e.disabled }]]) }, [d('label', { for: `#${p(r)}`, class: we({ required: e.required }) }, [He(a.$slots, 'label', {}, () => [q(X(e.label), 1)]), d('span', qu, X(e.note), 1)], 10, Yu), d('div', Qu, [a.$slots.prefix ? (U(), j('div', em, [He(a.$slots, 'prefix')])) : Ke('', !0), d('input', Dt({
      id: p(r), value: e.modelValue, type: e.type, required: e.required, step: e.step, min: e.min, max: e.max, disabled: e.disabled,
    }, a.$attrs, { onInput: t }), null, 16, nm), a.$slots.suffix ? (U(), j('div', rm, [He(a.$slots, 'suffix')])) : Ke('', !0), He(a.$slots, 'default')]), e.errorMsg ? (U(), j('span', tm, X(e.errorMsg), 1)) : Ke('', !0)], 2));
  },
}); const Fe = ne({
  __name: 'UpgradeSelect',
  props: { modelValue: null, label: null },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    function r(t) { n('update:modelValue', t); } return (t, a) => (U(), _e(je, {
      modelValue: e.modelValue, label: e.label, type: p(ye), rootClass: 'upgrade-select', 'onUpdate:modelValue': r,
    }, null, 8, ['modelValue', 'label', 'type']));
  },
}); const jt = ne({
  __name: 'LimitedUpgradeSelect',
  props: { modelValue: null, label: null },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    function r(t) { n('update:modelValue', t); } return (t, a) => (U(), _e(je, {
      modelValue: e.modelValue, label: e.label, type: p(Ar), rootClass: 'upgrade-select', 'onUpdate:modelValue': r,
    }, null, 8, ['modelValue', 'label', 'type']));
  },
}); const im = ne({
  __name: 'RestrictorUpgradeSelect',
  props: { modelValue: null, label: null },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    function r(t) { n('update:modelValue', t); } return (t, a) => (U(), _e(je, {
      modelValue: e.modelValue, label: e.label, type: p(_a), 'onUpdate:modelValue': r,
    }, null, 8, ['modelValue', 'label', 'type']));
  },
}); const om = { class: 'label' }; const lm = { class: 'flex w-full' }; const sm = { class: 'relative flex-1 sm:flex-auto' }; const dm = ['for']; const pm = ['id', 'placeholder', 'step', 'min', 'max', 'disabled']; const cm = { class: 'relative flex-1 sm:flex-auto' }; const um = ['for']; const mm = ['id', 'placeholder', 'step', 'min', 'max', 'disabled']; const en = ne({
  __name: 'FrontRearInputs',
  props: {
    modelValue: null, label: { default: '' }, placeholder: { default: 'Stock' }, required: { type: Boolean, default: !1 }, step: { default: 1 }, min: { default: 0 }, max: { default: 9999 }, attachRight: { type: Boolean }, attachLeft: { type: Boolean }, disabled: { type: Boolean },
  },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    const r = e; const t = Pe({ form: { ...r.modelValue } }); const a = fr(); return pe(t, () => { n('update:modelValue', t.form); }), pe(() => r.modelValue, (i) => { i !== t.form && (t.form = { ...i }); }), (i, o) => (U(), j('div', { class: we(['control !min-w-[250px]', { disabled: e.disabled }]) }, [d('div', om, X(e.label), 1), d('div', lm, [He(i.$slots, 'attach-left'), d('div', sm, [d('label', { for: `${p(a)}front`, class: 'prefix' }, 'F', 8, dm), jn(d('input', {
      id: `${p(a)}front`, 'onUpdate:modelValue': o[0] || (o[0] = (l) => t.form.front = l), placeholder: e.placeholder, class: we(['rounded-r-none', { 'rounded-l-none': e.attachLeft }]), type: 'number', step: e.step, min: e.min, max: e.max, disabled: e.disabled,
    }, null, 10, pm), [[Vr, t.form.front]])]), d('div', cm, [d('label', { for: `${p(a)}rear`, class: 'prefix' }, 'R', 8, um), jn(d('input', {
      id: `${p(a)}rear`, 'onUpdate:modelValue': o[1] || (o[1] = (l) => t.form.rear = l), placeholder: e.placeholder, class: we(['rounded-l-none', { 'rounded-r-none': e.attachRight }]), type: 'number', step: e.step, min: e.min, max: e.max, disabled: e.disabled,
    }, null, 10, mm), [[Vr, t.form.rear]])]), He(i.$slots, 'attach-right')])], 2));
  },
}); const fm = { class: 'label' }; const hm = { class: 'flex' }; const gm = { class: 'relative grow sm:grow-0' }; const km = ['for']; const ym = ['id']; const Rm = ['value']; const Tm = { class: 'relative grow sm:grow-0' }; const Mm = ['for']; const vm = ['id']; const Sm = ['value']; const Fm = ne({
  __name: 'FrontRearSelects',
  props: {
    modelValue: null, label: { default: '' }, options: { default: () => [] }, disabled: { type: Boolean },
  },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) { const r = e; const t = Pe({ form: { ...r.modelValue } }); const a = fr(); return pe(t, () => { n('update:modelValue', t.form); }), pe(() => r.modelValue, (i) => { i !== t.form && (t.form = { ...i }); }), (i, o) => (U(), j('div', { class: we(['control !min-w-[250px]', { disabled: e.disabled }]) }, [d('div', fm, X(e.label), 1), d('div', hm, [d('div', gm, [d('label', { for: `${p(a)}front`, class: 'prefix' }, 'F', 8, km), jn(d('select', { id: `${p(a)}front`, 'onUpdate:modelValue': o[0] || (o[0] = (l) => t.form.front = l), class: 'rounded-r-none border-r-0 w-32' }, [He(i.$slots, 'default', {}, () => [(U(!0), j(ke, null, Hn(e.options, (l) => (U(), j('option', { key: l.value, value: l.value }, X(l.label || l.value), 9, Rm))), 128))])], 8, ym), [[yi, t.form.front]])]), d('div', Tm, [d('label', { for: `${p(a)}rear`, class: 'prefix' }, 'R', 8, Mm), jn(d('select', { id: `${p(a)}front`, 'onUpdate:modelValue': o[1] || (o[1] = (l) => t.form.rear = l), class: 'rounded-l-none' }, [He(i.$slots, 'default', {}, () => [(U(!0), j(ke, null, Hn(e.options, (l) => (U(), j('option', { key: l.value, value: l.value }, X(l.label || l.value), 9, Sm))), 128))])], 8, vm), [[yi, t.form.rear]])])])], 2)); },
}); const $i = ne({
  __name: 'UpgradeTurboSelect',
  props: { modelValue: null, label: null },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    function r(t) { n('update:modelValue', t); } return (t, a) => (U(), _e(je, {
      modelValue: e.modelValue, label: e.label, type: p(dt), rootClass: 'upgrade-select', 'onUpdate:modelValue': r,
    }, null, 8, ['modelValue', 'label', 'type']));
  },
}); const Wm = Pt('<div class="heading"><h2>Upgrades</h2><p class="text-yellow font-bold mb-3"> When to use N/A<br>(not available) </p><ul class="list-disc pl-4"><li> If you do not use a certain category (eg. No natural aspiration) mark it as N/A. </li></ul><p class="text-yellow font-bold my-3">Set stock values</p><ul class="list-disc pl-4"><li> If you leave something stock (eg. tire width), or leave the default settings for a category, you should still fill out the stock value </li></ul></div>', 1); const Am = { class: 'grow' }; const Pm = { class: 'content' }; const Dm = d('h3', null, 'Engine', -1); const Om = { class: 'set-upgrades' }; const bm = { class: 'content' }; const Hm = d('h3', null, 'Platform and Handling', -1); const Bm = { class: 'set-upgrades' }; const Cm = { class: 'content' }; const Vm = d('h3', null, 'Drivetrain', -1); const wm = { class: 'set-upgrades' }; const Um = { class: 'content' }; const _m = d('h3', null, 'Tires and Rims', -1); const Nm = { class: 'set-upgrades' }; const Em = { class: 'set-upgrades' }; const Im = { class: 'set-upgrades' }; const xm = { class: 'set-upgrades' }; const Lm = { class: 'content' }; const Gm = d('h3', null, 'Aero and Appearance', -1); const zm = { class: 'set-upgrades' }; const $m = { class: 'set-upgrades' }; const Xm = { class: 'set-upgrades' }; const jm = { class: 'content' }; const Km = d('h3', null, 'Conversions', -1); const Jm = { class: 'set-upgrades' }; const Zm = { class: 'set-upgrades' }; const Ym = ne({
  __name: 'BuildSettingsForm',
  setup(e) {
    const { form: n } = Er(); const r = dl(ut); return (t, a) => (U(), j('section', null, [Wm, d('div', Am, [d('div', Pm, [Dm, d('div', Om, [k(Fe, { modelValue: p(n).build.engine.intake, 'onUpdate:modelValue': a[0] || (a[0] = (i) => p(n).build.engine.intake = i), label: 'Intake' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.intakeManifold, 'onUpdate:modelValue': a[1] || (a[1] = (i) => p(n).build.engine.intakeManifold = i), label: 'Intake Manifold' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.carburator, 'onUpdate:modelValue': a[2] || (a[2] = (i) => p(n).build.engine.carburator = i), label: 'Carburator' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.fuelSystem, 'onUpdate:modelValue': a[3] || (a[3] = (i) => p(n).build.engine.fuelSystem = i), label: 'Fuel System' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.ignition, 'onUpdate:modelValue': a[4] || (a[4] = (i) => p(n).build.engine.ignition = i), label: 'Ignition' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.exhaust, 'onUpdate:modelValue': a[5] || (a[5] = (i) => p(n).build.engine.exhaust = i), label: 'Exhaust' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.camshaft, 'onUpdate:modelValue': a[6] || (a[6] = (i) => p(n).build.engine.camshaft = i), label: 'Camshaft' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.valves, 'onUpdate:modelValue': a[7] || (a[7] = (i) => p(n).build.engine.valves = i), label: 'Valves' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.displacement, 'onUpdate:modelValue': a[8] || (a[8] = (i) => p(n).build.engine.displacement = i), label: 'Displacement' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.pistons, 'onUpdate:modelValue': a[9] || (a[9] = (i) => p(n).build.engine.pistons = i), label: 'Pistons' }, null, 8, ['modelValue']), k($i, { modelValue: p(n).build.engine.turbo, 'onUpdate:modelValue': a[10] || (a[10] = (i) => p(n).build.engine.turbo = i), label: 'Turbo' }, null, 8, ['modelValue']), k($i, { modelValue: p(n).build.engine.twinTurbo, 'onUpdate:modelValue': a[11] || (a[11] = (i) => p(n).build.engine.twinTurbo = i), label: 'Twin Turbo' }, null, 8, ['modelValue']), k(jt, { modelValue: p(n).build.engine.supercharger, 'onUpdate:modelValue': a[12] || (a[12] = (i) => p(n).build.engine.supercharger = i), label: 'Supercharger' }, null, 8, ['modelValue']), k(jt, { modelValue: p(n).build.engine.centrifugalSupercharger, 'onUpdate:modelValue': a[13] || (a[13] = (i) => p(n).build.engine.centrifugalSupercharger = i), label: 'Centrifugal Supercharger' }, null, 8, ['modelValue']), k(jt, { modelValue: p(n).build.engine.intercooler, 'onUpdate:modelValue': a[14] || (a[14] = (i) => p(n).build.engine.intercooler = i), label: 'Intercooler' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.oilCooling, 'onUpdate:modelValue': a[15] || (a[15] = (i) => p(n).build.engine.oilCooling = i), label: 'Oil Cooling' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.engine.flywheel, 'onUpdate:modelValue': a[16] || (a[16] = (i) => p(n).build.engine.flywheel = i), label: 'Flywheel' }, null, 8, ['modelValue']), k(im, { modelValue: p(n).build.engine.restrictorPlate, 'onUpdate:modelValue': a[17] || (a[17] = (i) => p(n).build.engine.restrictorPlate = i), label: 'Restrictor Plate' }, null, 8, ['modelValue'])])]), d('div', bm, [Hm, d('div', Bm, [k(Fe, { modelValue: p(n).build.platformAndHandling.brakes, 'onUpdate:modelValue': a[18] || (a[18] = (i) => p(n).build.platformAndHandling.brakes = i), label: 'Brakes' }, null, 8, ['modelValue']), k(zi, { modelValue: p(n).build.platformAndHandling.springs, 'onUpdate:modelValue': a[19] || (a[19] = (i) => p(n).build.platformAndHandling.springs = i), label: 'Springs' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.platformAndHandling.frontArb, 'onUpdate:modelValue': a[20] || (a[20] = (i) => p(n).build.platformAndHandling.frontArb = i), label: 'Front ARB' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.platformAndHandling.rearArb, 'onUpdate:modelValue': a[21] || (a[21] = (i) => p(n).build.platformAndHandling.rearArb = i), label: 'Rear ARB' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.platformAndHandling.chassisReinforcement, 'onUpdate:modelValue': a[22] || (a[22] = (i) => p(n).build.platformAndHandling.chassisReinforcement = i), label: 'Chassis Reinforcement' }, null, 8, ['modelValue']), k(Fe, { modelValue: p(n).build.platformAndHandling.weightReduction, 'onUpdate:modelValue': a[23] || (a[23] = (i) => p(n).build.platformAndHandling.weightReduction = i), label: 'Weight Reduction' }, null, 8, ['modelValue'])])]), d('div', Cm, [Vm, d('div', wm, [k(Fe, { modelValue: p(n).build.drivetrain.clutch, 'onUpdate:modelValue': a[24] || (a[24] = (i) => p(n).build.drivetrain.clutch = i), label: 'Clutch' }, null, 8, ['modelValue']), k(je, {
      modelValue: p(n).build.drivetrain.transmission, 'onUpdate:modelValue': a[25] || (a[25] = (i) => p(n).build.drivetrain.transmission = i), label: 'Transmission', type: p(Be), rootClass: '!min-w-[205px]',
    }, null, 8, ['modelValue', 'type']), k(Fe, { modelValue: p(n).build.drivetrain.driveline, 'onUpdate:modelValue': a[26] || (a[26] = (i) => p(n).build.drivetrain.driveline = i), label: 'Driveline' }, null, 8, ['modelValue']), k(zi, { modelValue: p(n).build.drivetrain.differential, 'onUpdate:modelValue': a[27] || (a[27] = (i) => p(n).build.drivetrain.differential = i), label: 'Differential' }, null, 8, ['modelValue'])])]), d('div', Um, [_m, d('div', Nm, [k(je, {
      modelValue: p(n).build.tiresAndRims.compound, 'onUpdate:modelValue': a[28] || (a[28] = (i) => p(n).build.tiresAndRims.compound = i), label: 'Compound', type: p(Na),
    }, null, 8, ['modelValue', 'type'])]), d('div', Em, [k(en, { modelValue: p(n).build.tiresAndRims.width, 'onUpdate:modelValue': a[29] || (a[29] = (i) => p(n).build.tiresAndRims.width = i), label: 'Tire Width' }, null, 8, ['modelValue']), k(Fm, {
      modelValue: p(n).build.tiresAndRims.trackWidth, 'onUpdate:modelValue': a[30] || (a[30] = (i) => p(n).build.tiresAndRims.trackWidth = i), label: 'Track Width', options: p(r),
    }, null, 8, ['modelValue', 'options'])]), d('div', Im, [k(je, {
      modelValue: p(n).build.tiresAndRims.rimStyle.type, 'onUpdate:modelValue': a[31] || (a[31] = (i) => p(n).build.tiresAndRims.rimStyle.type = i), label: 'Rims Style', type: p(ct),
    }, null, 8, ['modelValue', 'type']), k(xe, {
      modelValue: p(n).build.tiresAndRims.rimStyle.name, 'onUpdate:modelValue': a[32] || (a[32] = (i) => p(n).build.tiresAndRims.rimStyle.name = i), label: 'Name', disabled: p(n).build.tiresAndRims.rimStyle.type === p(ct).stock,
    }, null, 8, ['modelValue', 'disabled'])]), d('div', xm, [k(en, { modelValue: p(n).build.tiresAndRims.rimSize, 'onUpdate:modelValue': a[33] || (a[33] = (i) => p(n).build.tiresAndRims.rimSize = i), label: 'Size' }, null, 8, ['modelValue'])])]), d('div', Lm, [Gm, d('div', zm, [k(xe, {
      modelValue: p(n).build.aeroAndAppearance.frontBumper, 'onUpdate:modelValue': a[34] || (a[34] = (i) => p(n).build.aeroAndAppearance.frontBumper = i), label: 'Front Bumper', class: '',
    }, null, 8, ['modelValue']), k(xe, {
      modelValue: p(n).build.aeroAndAppearance.rearBumper, 'onUpdate:modelValue': a[35] || (a[35] = (i) => p(n).build.aeroAndAppearance.rearBumper = i), label: 'Rear Bumper', class: '',
    }, null, 8, ['modelValue'])]), d('div', $m, [k(xe, {
      modelValue: p(n).build.aeroAndAppearance.rearWing, 'onUpdate:modelValue': a[36] || (a[36] = (i) => p(n).build.aeroAndAppearance.rearWing = i), label: 'Rear Wing', class: '',
    }, null, 8, ['modelValue']), k(xe, {
      modelValue: p(n).build.aeroAndAppearance.sideSkirts, 'onUpdate:modelValue': a[37] || (a[37] = (i) => p(n).build.aeroAndAppearance.sideSkirts = i), label: 'Side Skirts', class: '',
    }, null, 8, ['modelValue'])]), d('div', Xm, [k(xe, {
      modelValue: p(n).build.aeroAndAppearance.hood, 'onUpdate:modelValue': a[38] || (a[38] = (i) => p(n).build.aeroAndAppearance.hood = i), label: 'Hood', class: '',
    }, null, 8, ['modelValue'])])]), d('div', jm, [Km, d('div', Jm, [k(xe, {
      modelValue: p(n).build.conversions.engine, 'onUpdate:modelValue': a[39] || (a[39] = (i) => p(n).build.conversions.engine = i), label: 'Engine', class: 'grow',
    }, null, 8, ['modelValue']), k(je, {
      modelValue: p(n).build.conversions.drivetrain, 'onUpdate:modelValue': a[40] || (a[40] = (i) => p(n).build.conversions.drivetrain = i), rootClass: 'grow', label: 'Drivetrain', note: '(If stock, change it to the corresponding drivetype)', type: p(Se), class: 'grow',
    }, null, 8, ['modelValue', 'type'])]), d('div', Zm, [k(xe, {
      modelValue: p(n).build.conversions.aspiration, 'onUpdate:modelValue': a[41] || (a[41] = (i) => p(n).build.conversions.aspiration = i), label: 'Aspiration', class: 'grow',
    }, null, 8, ['modelValue']), k(xe, {
      modelValue: p(n).build.conversions.bodyKit, 'onUpdate:modelValue': a[42] || (a[42] = (i) => p(n).build.conversions.bodyKit = i), label: 'Body Kit', class: 'grow',
    }, null, 8, ['modelValue'])])])])]));
  },
}); const Le = ne({
  __name: 'NumberInput',
  props: {
    modelValue: null, label: { default: void 0 }, errorMsg: { default: '' }, error: { type: Boolean }, required: { type: Boolean }, step: { default: 1 }, min: { default: 0 }, max: { default: 9999 }, disabled: { type: Boolean }, rootClass: { default: void 0 },
  },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    function r(t) { n('update:modelValue', t); } return (t, a) => (U(), _e(xe, {
      modelValue: e.modelValue, label: e.label, step: e.step, min: e.min, max: e.max, disabled: e.disabled, type: 'number', rootClass: e.rootClass, 'onUpdate:modelValue': r,
    }, {
      label: ie(() => [He(t.$slots, 'label')]), prefix: ie(() => [He(t.$slots, 'prefix')]), suffix: ie(() => [He(t.$slots, 'suffix')]), default: ie(() => [He(t.$slots, 'default')]), _: 3,
    }, 8, ['modelValue', 'label', 'step', 'min', 'max', 'disabled', 'rootClass']));
  },
}); const Jr = ne({
  __name: 'UnitSelect',
  props: { modelValue: null, type: null },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    const r = e; function t(o) { n('update:modelValue', o); } const a = {
      pressure: [{ label: Xe.bar, value: Xe.bar }, { label: Xe.psi, value: Xe.psi }], springrate: [{ label: 'kgf/mm', value: We.kgf }, { label: 'lbs/in', value: We.lbs }, { label: 'n/mm', value: We.nmm }], height: [{ label: 'cm', value: gn.cm }, { label: 'in', value: gn.in }], force: [{ label: 'kgf', value: hn.kgf }, { label: 'lbs', value: hn.lbf }], weight: [{ label: 'kg', value: cr.kg }, { label: 'lbs', value: cr.lbs }],
    }; const i = J(() => a[r.type]); return (o, l) => (U(), _e(Wl, {
      modelValue: e.modelValue, options: p(i), class: 'text-yellow', 'onUpdate:modelValue': t,
    }, null, 8, ['modelValue', 'options']));
  },
}); const qm = ['for']; const Qm = ['id', 'checked']; const Nn = ne({
  __name: 'CheckboxControl',
  props: { modelValue: { type: [Boolean, null] }, label: null },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    const r = fr(); function t(a) { const i = a.target.checked; n('update:modelValue', i); } return (a, i) => (U(), j('label', { for: p(r), class: 'inline checkbox' }, [d('input', {
      id: p(r), checked: e.modelValue, type: 'checkbox', name: 'globalUnit', onInput: t,
    }, null, 40, Qm), He(a.$slots, 'default', {}, () => [q(X(e.label), 1)])], 8, qm));
  },
}); const ef = { class: 'label' }; const nf = { class: 'flex' }; const rf = { class: 'relative grow sm:grow-0' }; const tf = ['for']; const af = ['id', 'placeholder', 'disabled']; const of = { class: 'relative grow sm:grow-0' }; const lf = ['for']; const sf = ['id', 'placeholder', 'disabled']; const Xi = ne({
  __name: 'AccelDecelInputs',
  props: {
    modelValue: null, label: { default: '' }, placeholder: { default: '' }, required: { type: Boolean, default: !1 }, step: { default: 1 }, min: { default: 0 }, max: { default: 9999 }, attachRight: { type: Boolean }, attachLeft: { type: Boolean }, disabled: { type: Boolean },
  },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    const r = e; const t = Pe({ form: { ...r.modelValue } }); const a = fr(); return pe(t, () => { n('update:modelValue', t.form); }), pe(() => r.modelValue, (i) => { i !== t.form && (t.form = { ...i }); }), (i, o) => (U(), j('div', { class: we(['control !min-w-[250px] shrink-0', { disabled: e.disabled }]) }, [d('div', ef, X(e.label), 1), d('div', nf, [d('div', rf, [d('label', { for: `${p(a)}front`, class: 'prefix' }, 'Accel', 8, tf), jn(d('input', {
      id: `${p(a)}front`, 'onUpdate:modelValue': o[0] || (o[0] = (l) => t.form.accel = l), placeholder: e.placeholder, class: we(['pl-16 sm:!w-32 rounded-r-none border-r-0 !indent-0', { 'rounded-l-none': e.attachLeft }]), type: 'number', step: '1', min: '0', disabled: e.disabled,
    }, null, 10, af), [[Vr, t.form.accel]])]), d('div', of, [d('label', { for: `${p(a)}rear`, class: 'prefix' }, 'Decel', 8, lf), jn(d('input', {
      id: `${p(a)}rear`, 'onUpdate:modelValue': o[1] || (o[1] = (l) => t.form.decel = l), placeholder: e.placeholder, class: we(['pl-16 sm:!w-32 rounded-l-none !indent-0', { 'rounded-r-none border-r-0': e.attachRight }]), type: 'number', step: '1', min: '0', disabled: e.disabled,
    }, null, 10, sf), [[Vr, t.form.decel]])])])], 2));
  },
}); const df = d('div', { class: 'heading' }, [d('h2', null, 'Tuning'), d('p', null, [q(' This section is for tuning. '), d('br'), q('If you leave something stock (Ex. brakes), or leave the default settings for a category, you should still put in the stock value. ')])], -1); const pf = { class: 'grow w-full' }; const cf = { class: 'content' }; const uf = d('h3', null, 'Tires', -1); const mf = { class: 'set-upgrades' }; const ff = { class: 'content' }; const hf = { class: 'content-header flex items-end' }; const gf = d('h3', null, 'Gearing', -1); const kf = { class: 'set-upgrades vertical' }; const yf = { class: 'gears-grid w-full' }; const Rf = { class: 'content' }; const Tf = d('h3', null, 'Alignment', -1); const Mf = { class: 'set-upgrades' }; const vf = { class: 'content' }; const Sf = { class: 'content-header flex items-end' }; const Ff = d('h3', null, 'Antiroll Bars', -1); const Wf = { class: 'set-upgrades' }; const Af = { class: 'content' }; const Pf = { class: 'content-header flex items-end' }; const Df = d('h3', null, 'Springs', -1); const Of = { class: 'set-upgrades' }; const bf = { class: 'content' }; const Hf = { class: 'content-header flex items-end' }; const Bf = d('h3', null, 'Damping', -1); const Cf = { class: 'set-upgrades' }; const Vf = { class: 'content' }; const wf = { class: 'content-header flex items-end' }; const Uf = d('h3', null, 'Aero Downforce', -1); const _f = { class: 'set-upgrades' }; const Nf = { class: 'content' }; const Ef = { class: 'content-header flex items-end' }; const If = d('h3', null, 'Brakes', -1); const xf = { class: 'set-upgrades' }; const Lf = { class: 'content' }; const Gf = { class: 'content-header flex items-end' }; const zf = d('h3', null, 'Differential', -1); const $f = { class: 'set-upgrades' }; const Xf = { class: 'set-upgrades' }; const jf = ne({
  __name: 'TuneSettingsForm',
  setup(e) {
    const { form: n, show: r } = Er(); const t = J(() => n.tune.gears.ratios.slice(1, r.value.gears.count + 1)); const a = J(() => (n.tune.tires.units === Xe.bar ? '0.01' : '0.1')); return (i, o) => (U(), j('section', null, [df, d('div', pf, [d('div', cf, [uf, d('div', mf, [k(en, {
      modelValue: p(n).tune.tires, 'onUpdate:modelValue': o[1] || (o[1] = (l) => p(n).tune.tires = l), label: 'Pressure', attachRight: '', step: p(a),
    }, {
      'attach-right': ie(() => [k(Jr, {
        modelValue: p(n).tune.tires.units, 'onUpdate:modelValue': o[0] || (o[0] = (l) => p(n).tune.tires.units = l), type: 'pressure', class: 'rounded-l-none flex-1',
      }, null, 8, ['modelValue'])]),
      _: 1,
    }, 8, ['modelValue', 'step'])])]), d('div', ff, [d('div', hf, [gf, k(Nn, {
      modelValue: p(n).tune.gears.na, 'onUpdate:modelValue': o[2] || (o[2] = (l) => p(n).tune.gears.na = l), label: 'Not Applicable', class: 'mb-0 ml-3',
    }, null, 8, ['modelValue'])]), d('div', kf, [k(Le, {
      modelValue: p(n).tune.gears.ratios[0], 'onUpdate:modelValue': o[3] || (o[3] = (l) => p(n).tune.gears.ratios[0] = l), disabled: p(n).tune.gears.na, label: 'Final Drive', min: '0.0', step: '0.01',
    }, null, 8, ['modelValue', 'disabled']), d('div', yf, [(U(!0), j(ke, null, Hn(p(t), (l, s) => (U(), _e(Le, {
      key: s, modelValue: p(n).tune.gears.ratios[s + 1], 'onUpdate:modelValue': (c) => p(n).tune.gears.ratios[s + 1] = c, disabled: p(n).tune.gears.na, label: `${s + 1}${p(sl)(s + 1)}`, min: '0', step: '0.01',
    }, null, 8, ['modelValue', 'onUpdate:modelValue', 'disabled', 'label']))), 128))])])]), d('div', Rf, [Tf, d('div', Mf, [k(en, {
      modelValue: p(n).tune.camber, 'onUpdate:modelValue': o[4] || (o[4] = (l) => p(n).tune.camber = l), label: 'Camber', step: '0.1', min: '-10', max: '10',
    }, null, 8, ['modelValue']), k(en, {
      modelValue: p(n).tune.toe, 'onUpdate:modelValue': o[5] || (o[5] = (l) => p(n).tune.toe = l), label: 'Toe', step: '0.1', min: '-10', max: '10',
    }, null, 8, ['modelValue']), k(Le, {
      modelValue: p(n).tune.caster, 'onUpdate:modelValue': o[6] || (o[6] = (l) => p(n).tune.caster = l), label: 'Caster', required: '', max: '7.5', step: '0.1',
    }, null, 8, ['modelValue'])])]), d('div', vf, [d('div', Sf, [Ff, k(Nn, {
      modelValue: p(n).tune.arb.na, 'onUpdate:modelValue': o[7] || (o[7] = (l) => p(n).tune.arb.na = l), label: 'Not Applicable', class: 'mb-0 ml-3',
    }, null, 8, ['modelValue'])]), d('div', Wf, [k(en, {
      modelValue: p(n).tune.arb, 'onUpdate:modelValue': o[8] || (o[8] = (l) => p(n).tune.arb = l), placeholder: '', min: '0.0', step: '0.1', disabled: p(n).tune.arb.na,
    }, null, 8, ['modelValue', 'disabled'])])]), d('div', Af, [d('div', Pf, [Df, k(Nn, {
      modelValue: p(n).tune.springs.na, 'onUpdate:modelValue': o[9] || (o[9] = (l) => p(n).tune.springs.na = l), label: 'Not Applicable', class: 'mb-0 ml-3',
    }, null, 8, ['modelValue'])]), d('div', Of, [k(en, {
      modelValue: p(n).tune.springs, 'onUpdate:modelValue': o[11] || (o[11] = (l) => p(n).tune.springs = l), label: 'Tension', min: '0', step: '1', attachRight: '', disabled: p(n).tune.springs.na,
    }, {
      'attach-right': ie(() => [k(Jr, {
        modelValue: p(n).tune.springs.units, 'onUpdate:modelValue': o[10] || (o[10] = (l) => p(n).tune.springs.units = l), label: '', type: 'springrate', class: 'rounded-l-none flex-1', disabled: p(n).tune.springs.na,
      }, null, 8, ['modelValue', 'disabled'])]),
      _: 1,
    }, 8, ['modelValue', 'disabled']), k(en, {
      modelValue: p(n).tune.rideHeight, 'onUpdate:modelValue': o[13] || (o[13] = (l) => p(n).tune.rideHeight = l), label: 'Ride Height', min: '0', step: '0.1', attachRight: '', disabled: p(n).tune.springs.na,
    }, {
      'attach-right': ie(() => [k(Jr, {
        modelValue: p(n).tune.rideHeight.units, 'onUpdate:modelValue': o[12] || (o[12] = (l) => p(n).tune.rideHeight.units = l), label: '', type: 'height', class: 'rounded-l-none flex-1', disabled: p(n).tune.springs.na,
      }, null, 8, ['modelValue', 'disabled'])]),
      _: 1,
    }, 8, ['modelValue', 'disabled'])])]), d('div', bf, [d('div', Hf, [Bf, k(Nn, {
      modelValue: p(n).tune.damping.na, 'onUpdate:modelValue': o[14] || (o[14] = (l) => p(n).tune.damping.na = l), label: 'Not Applicable', class: 'mb-0 ml-3',
    }, null, 8, ['modelValue'])]), d('div', Cf, [k(en, {
      modelValue: p(n).tune.damping, 'onUpdate:modelValue': o[15] || (o[15] = (l) => p(n).tune.damping = l), label: 'Rebound Stiffness', min: '0.0', step: '0.1', disabled: p(n).tune.damping.na,
    }, null, 8, ['modelValue', 'disabled']), k(en, {
      modelValue: p(n).tune.bump, 'onUpdate:modelValue': o[16] || (o[16] = (l) => p(n).tune.bump = l), label: 'Bump Stiffness', min: '0.0', step: '0.1', disabled: p(n).tune.damping.na,
    }, null, 8, ['modelValue', 'disabled'])])]), d('div', Vf, [d('div', wf, [Uf, k(Nn, {
      modelValue: p(n).tune.aero.na, 'onUpdate:modelValue': o[17] || (o[17] = (l) => p(n).tune.aero.na = l), label: 'Not Applicable', class: 'mb-0 ml-3',
    }, null, 8, ['modelValue'])]), d('div', _f, [k(en, {
      modelValue: p(n).tune.aero, 'onUpdate:modelValue': o[19] || (o[19] = (l) => p(n).tune.aero = l), min: '0', step: '1', attachRight: '', disabled: p(n).tune.aero.na,
    }, {
      'attach-right': ie(() => [k(Jr, {
        modelValue: p(n).tune.aero.units, 'onUpdate:modelValue': o[18] || (o[18] = (l) => p(n).tune.aero.units = l), type: 'force', class: 'rounded-l-none flex-1', disabled: p(n).tune.aero.na,
      }, null, 8, ['modelValue', 'disabled'])]),
      _: 1,
    }, 8, ['modelValue', 'disabled'])])]), d('div', Nf, [d('div', Ef, [If, k(Nn, {
      modelValue: p(n).tune.brake.na, 'onUpdate:modelValue': o[20] || (o[20] = (l) => p(n).tune.brake.na = l), label: 'Not Applicable', class: 'mb-0 ml-3',
    }, null, 8, ['modelValue'])]), d('div', xf, [k(Le, {
      modelValue: p(n).tune.brake.bias, 'onUpdate:modelValue': o[21] || (o[21] = (l) => p(n).tune.brake.bias = l), label: 'Balance', min: '0', max: '100', step: '1', disabled: p(n).tune.brake.na,
    }, { suffix: ie(() => [q('%')]), _: 1 }, 8, ['modelValue', 'disabled']), k(Le, {
      modelValue: p(n).tune.brake.pressure, 'onUpdate:modelValue': o[22] || (o[22] = (l) => p(n).tune.brake.pressure = l), label: 'Pressure', min: '0', max: '200', step: '1', disabled: p(n).tune.brake.na,
    }, { suffix: ie(() => [q('%')]), _: 1 }, 8, ['modelValue', 'disabled'])])]), d('div', Lf, [d('div', Gf, [zf, k(Nn, {
      modelValue: p(n).tune.diff.na, 'onUpdate:modelValue': o[23] || (o[23] = (l) => p(n).tune.diff.na = l), label: 'Not Applicable', class: 'mb-0 ml-3',
    }, null, 8, ['modelValue'])]), d('div', $f, [p(r).diff.front ? (U(), _e(Xi, {
      key: 0, modelValue: p(n).tune.diff.front, 'onUpdate:modelValue': o[24] || (o[24] = (l) => p(n).tune.diff.front = l), label: 'Front', min: '0', max: '100', step: '1', disabled: p(n).tune.diff.na,
    }, null, 8, ['modelValue', 'disabled'])) : Ke('', !0), p(r).diff.rear ? (U(), _e(Xi, {
      key: 1, modelValue: p(n).tune.diff.rear, 'onUpdate:modelValue': o[25] || (o[25] = (l) => p(n).tune.diff.rear = l), label: 'Rear', min: '0', max: '100', step: '1', disabled: p(n).tune.diff.na,
    }, null, 8, ['modelValue', 'disabled'])) : Ke('', !0)]), d('div', Xf, [p(r).diff.center ? (U(), _e(Le, {
      key: 0, modelValue: p(n).tune.diff.center, 'onUpdate:modelValue': o[26] || (o[26] = (l) => p(n).tune.diff.center = l), label: 'Center Balance', min: '0', max: '100', step: '1', disabled: p(n).tune.diff.na,
    }, null, 8, ['modelValue', 'disabled'])) : Ke('', !0)])])])]));
  },
}); const Kf = d('div', { class: 'heading' }, [d('h2', null, 'Measurement'), d('p', null, 'Choose the superior format')], -1); const Jf = { class: 'content' }; const Zf = { class: 'flex items-center h-full' }; const Yf = { class: 'inline radio' }; const qf = ['checked']; const Qf = { class: 'inline radio' }; const eh = ['checked']; const nh = ne({
  __name: 'GlobalUnitSelect',
  props: { modelValue: null },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    function r(t) { const a = t.target.value; n('update:modelValue', a); } return (t, a) => (U(), j('section', null, [Kf, d('div', Jf, [d('div', Zf, [d('label', Yf, [d('input', {
      checked: e.modelValue === 'Metric', type: 'radio', name: 'globalUnit', value: 'Metric', onInput: r,
    }, null, 40, qf), q(' Metric ')]), d('label', Qf, [d('input', {
      checked: e.modelValue === 'Imperial', type: 'radio', name: 'globalUnit', value: 'Imperial', onInput: r,
    }, null, 40, eh), q(' Imperial ')])])])]));
  },
}); const rh = { class: 'actions' }; const th = ['value']; const ah = d('p', { class: 'text-sm text-light-mist px-1 text-center mb-10' }, [d('strong', { class: 'text-yellow' }, 'NOTE:'), q(' Be sure the editor is in "Markdown" mode'), d('br'), q(' when creating your post on Reddit! ')], -1); const ih = ne({
  __name: 'FormattedTuneTextarea',
  setup(e) {
    const n = Er(); const r = Rn('Copy text'); const t = Rn('Copy URL'); const a = Rn(''); const i = Rn(0); const o = Rn(0); const l = Rn(0); const s = Rn(null); ba(() => { clearTimeout(i.value), clearTimeout(o.value), clearTimeout(l.value); }); function c(y) { a.value = y, l.value = window.setTimeout(() => { a.value = ''; }, 6e3); } function u() { n.reset(); } function f() { let y; let F; try { navigator.clipboard.writeText(n.markdown.value), r.value = 'Copied!', i.value = window.setTimeout(() => { r.value = 'Copy To Clipboard'; }, 2e3); } catch { c('Clipboard Error - Copy Manually'), (y = s.value) == null || y.select(), (F = s.value) == null || F.focus(); } } async function h() { const y = window.location.href; try { navigator.share && window.location.protocol.includes('https') ? await navigator.share({ url: y }) : (navigator.clipboard.writeText(y), t.value = 'Copied!', o.value = window.setTimeout(() => { t.value = 'Share URL'; }, 2e3)); } catch { c('Error - Copy URL from address Bar!'); } } return (y, F) => (U(), j('div', rh, [d('button', { type: 'button', class: 'w-full mb-4', onClick: h }, X(t.value), 1), d('button', { type: 'button', class: 'w-full secondary', onClick: f }, X(r.value), 1), d('textarea', {
      ref_key: 'textareaRef', ref: s, value: p(n).markdown.value, readonly: '', class: 'markdown-text', rows: '10', cols: '25',
    }, null, 8, th), ah, d('button', { type: 'button', class: 'w-full outlined', onClick: u }, ' Reset Form ')]));
  },
}); const oh = { class: 'content' }; const lh = { class: 'set-upgrades' }; const sh = { class: 'set-upgrades' }; const dh = ne({
  __name: 'MakeModelSelect',
  props: { make: null, model: null },
  emits: ['update:make', 'update:model'],
  setup(e, { emit: n }) {
    const r = e; const t = Pe({
      make: r.make, model: r.model, otherMake: '', otherModel: '',
    }); _r.get(r.model) || (t.make = 'notlisted', t.model = 'notlisted', t.otherModel = r.model.toString()); const a = J(() => { const l = Ua.map((s) => ({ value: s, label: s })); return l.unshift({ value: 'notlisted', label: 'Not Listed' }), l; }); const i = J(() => { if (!t.make) return []; const l = Xn.get(r.make) || []; const s = ll(l.map((c) => ({ value: c.fullname, label: c.shortname })), 'label', 'desc'); return s.unshift({ value: 'notlisted', label: 'Not Listed' }), s; }); function o() { return [t.otherMake, t.otherModel].join(' ').trim(); } return pe(i, (l) => { l.length === 2 && n('update:model', l[1].value); }), pe(() => t.make, (l) => { l === 'notlisted' ? t.model = 'notlisted' : (n('update:make', l), n('update:model', '')); }), pe(() => t.model, (l) => { l !== 'notlisted' && n('update:model', l); }), pe([() => t.otherMake, () => t.otherModel], () => { n('update:make', t.otherMake), n('update:model', o()); }), (l, s) => (U(), j('div', oh, [d('div', lh, [k(ha, {
      modelValue: t.make, 'onUpdate:modelValue': s[0] || (s[0] = (c) => t.make = c), label: 'Manufacturer', class: 'w-full sm:w-auto sm:min-w-[275px]', options: p(a),
    }, null, 8, ['modelValue', 'options']), k(xe, {
      modelValue: t.otherMake, 'onUpdate:modelValue': s[1] || (s[1] = (c) => t.otherMake = c), label: 'Other', class: 'w-56', placeholder: 'If not listed', disabled: t.make !== 'notlisted',
    }, null, 8, ['modelValue', 'disabled'])]), d('div', sh, [k(ha, {
      modelValue: t.model, 'onUpdate:modelValue': s[2] || (s[2] = (c) => t.model = c), label: 'Model', disabled: !e.make || p(i).length === 1, options: p(i), class: 'w-full sm:w-auto sm:min-w-[275px]',
    }, null, 8, ['modelValue', 'disabled', 'options']), k(xe, {
      modelValue: t.otherModel, 'onUpdate:modelValue': s[3] || (s[3] = (c) => t.otherModel = c), label: 'Other', class: 'w-56', placeholder: 'If not listed', disabled: t.model !== 'notlisted',
    }, null, 8, ['modelValue', 'disabled'])])]));
  },
}); const ph = d('div', { class: 'heading' }, [d('h2', null, 'Car'), d('p', null, 'Which beast have you tamed?')], -1); const ch = { class: 'grow' }; const uh = { class: 'content' }; const mh = d('h3', null, 'Statistics', -1); const fh = d('p', { class: 'text-sm mb-6' }, 'Optional, though helpful for others.', -1); const hh = { class: 'set-upgrades' }; const gh = { class: 'set-upgrades' }; const kh = { class: 'set-upgrades' }; const yh = ne({
  __name: 'CarStatsForm',
  setup(e) {
    const { form: n, globalUnit: r } = Er(); const t = {
      [me.D]: 500, [me.C]: 600, [me.B]: 700, [me.A]: 800, [me.S1]: 900, [me.S2]: 998, [me.X]: 999,
    }; const a = J(() => (r.value === 'Imperial' ? { torque: 'ft-lbs', weight: 'lbs', speed: 'mph' } : { torque: 'Nm', weight: 'kg', speed: 'kph' })); return pe(() => n.stats.classification, (i) => { n.stats.pi = t[i]; }), (i, o) => (U(), j('section', null, [ph, d('div', ch, [k(dh, {
      make: p(n).make, 'onUpdate:make': o[0] || (o[0] = (l) => p(n).make = l), model: p(n).model, 'onUpdate:model': o[1] || (o[1] = (l) => p(n).model = l),
    }, null, 8, ['make', 'model']), d('div', uh, [mh, fh, d('div', hh, [k(je, {
      modelValue: p(n).stats.classification, 'onUpdate:modelValue': o[2] || (o[2] = (l) => p(n).stats.classification = l), label: 'Class', type: p(me), rootClass: 'upgrade-select',
    }, null, 8, ['modelValue', 'type']), k(Le, {
      modelValue: p(n).stats.pi, 'onUpdate:modelValue': o[3] || (o[3] = (l) => p(n).stats.pi = l), label: 'PI', rootClass: 'upgrade-select',
    }, null, 8, ['modelValue']), k(Le, {
      modelValue: p(n).stats.hp, 'onUpdate:modelValue': o[4] || (o[4] = (l) => p(n).stats.hp = l), label: 'HP', rootClass: 'upgrade-select',
    }, null, 8, ['modelValue']), k(Le, {
      modelValue: p(n).stats.torque, 'onUpdate:modelValue': o[5] || (o[5] = (l) => p(n).stats.torque = l), label: 'Torque', rootClass: 'upgrade-select',
    }, { suffix: ie(() => [q(X(p(a).torque), 1)]), _: 1 }, 8, ['modelValue'])]), d('div', gh, [k(Le, { modelValue: p(n).stats.weight, 'onUpdate:modelValue': o[6] || (o[6] = (l) => p(n).stats.weight = l), label: 'Weight' }, { suffix: ie(() => [q(X(p(a).weight), 1)]), _: 1 }, 8, ['modelValue']), k(Le, { modelValue: p(n).stats.balance, 'onUpdate:modelValue': o[7] || (o[7] = (l) => p(n).stats.balance = l), label: 'Balance' }, { suffix: ie(() => [q('%')]), _: 1 }, 8, ['modelValue'])]), d('div', kh, [k(Le, { modelValue: p(n).stats.zeroToSixty, 'onUpdate:modelValue': o[8] || (o[8] = (l) => p(n).stats.zeroToSixty = l), label: '0-60' }, { suffix: ie(() => [q('sec')]), _: 1 }, 8, ['modelValue']), k(Le, { modelValue: p(n).stats.zeroToHundred, 'onUpdate:modelValue': o[9] || (o[9] = (l) => p(n).stats.zeroToHundred = l), label: '0-100' }, { suffix: ie(() => [q('sec')]), _: 1 }, 8, ['modelValue']), k(Le, { modelValue: p(n).stats.topSpeed, 'onUpdate:modelValue': o[10] || (o[10] = (l) => p(n).stats.topSpeed = l), label: 'Top Speed' }, { suffix: ie(() => [q(X(p(a).speed), 1)]), _: 1 }, 8, ['modelValue'])])])])]));
  },
}); const Rh = d('div', { class: 'heading' }, [d('h2', null, 'Sharing is caring'), d('p', null, 'Get credit for your hard work')], -1); const Th = { class: 'grow' }; const Mh = { class: 'content' }; const vh = { class: 'set-upgrades' }; const Sh = ne({
  __name: 'ShareCodesForm',
  setup(e) {
    const { form: n } = Er(); const r = Pe({ tune: '', vinyl: '' }); return pe(() => n.stats.shareCode, (t) => { const a = t.split(','); r.tune = a[0] || '', r.vinyl = a[1] || ''; }, { immediate: !0 }), pe(r, (t) => { const a = `${t.tune},${t.vinyl}`; n.stats.shareCode = a; }), (t, a) => (U(), j('section', null, [Rh, d('div', Th, [d('div', Mh, [d('div', vh, [k(xe, {
      modelValue: r.tune, 'onUpdate:modelValue': a[0] || (a[0] = (i) => r.tune = i), label: 'Tune Share Code', note: '(optional)',
    }, null, 8, ['modelValue']), k(xe, {
      modelValue: r.vinyl, 'onUpdate:modelValue': a[1] || (a[1] = (i) => r.vinyl = i), label: 'Livery Share Code', note: '(optional)',
    }, null, 8, ['modelValue'])])])])]));
  },
}); const Fh = d('h1', null, 'TUNE FORMATTER', -1); const Wh = d('p', { class: 'sub-title' }, ' Create and share your tune. This tool will automatically create an easy-to-read format you can share on our subreddit. ', -1); const Ah = { class: 'flex flex-col md:flex-row items-start' }; const Ph = { class: 'grow' }; const Dh = ne({ __name: 'TuneFormatter', setup(e) { const { form: n, globalUnit: r } = xu(); return (t, a) => (U(), j(ke, null, [Fh, Wh, d('div', Ah, [d('form', Ph, [k(nh, { modelValue: p(r), 'onUpdate:modelValue': a[0] || (a[0] = (i) => (be(r) ? r.value = i : null)) }, null, 8, ['modelValue']), k(yh), k(Sh), k(Ym), k(jf)]), k(ih)])], 64)); } }); const ji = [{
  make: 'Acura', model: 'NSX', vehicle: 'Acura NSX', weight: 1813, rearPctBase: 0.58, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.635, frontMRDamper: 0.507, frontMRHeave: 0.635, rearMRSpring: 0.815, rearMRDamperRoll: 0.736, rearMRSpringHeave: 0.815,
}, {
  make: 'Acura', model: 'NSX GT3', vehicle: 'Acura NSX GT3', weight: 1370, rearPctBase: 0.55, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.635, frontMRDamper: 0.507, frontMRHeave: 0.635, rearMRSpring: 0.815, rearMRDamperRoll: 0.736, rearMRSpringHeave: 0.815,
}, {
  make: 'Agajanian', model: 'Watson Roadster Circuit', vehicle: 'Agajanian Watson Roadster Circuit', weight: 853, rearPctBase: 0.51, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 0.52, rearMRDamperRoll: 0.52, rearMRSpringHeave: 1,
}, {
  make: 'Agajanian', model: 'Watson Roadster Oval', vehicle: 'Agajanian Watson Roadster Oval', weight: 853, rearPctBase: 0.51, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 0.52, rearMRDamperRoll: 0.52, rearMRSpringHeave: 1,
}, {
  make: 'Aston Martin', model: 'DB11', vehicle: 'Aston Martin DB11', weight: 1855, rearPctBase: 0.49, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.52, frontMRDamper: 0.375, frontMRHeave: 0.52, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  make: 'Aston Martin', model: 'DBR1', vehicle: 'Aston Martin DBR1', weight: 936, rearPctBase: 0.5, frontUnsprung: 40, rearUnsprung: 52, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 0.62, rearMRDamperRoll: 0.62, rearMRSpringHeave: 1,
}, {
  make: 'Aston Martin', model: 'Vantage GT12', vehicle: 'Aston Martin Vantage GT12', weight: 1645, rearPctBase: 0.485, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.52, frontMRDamper: 0.375, frontMRHeave: 0.52, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  make: 'Aston Martin', model: 'Vantage GT3', vehicle: 'Aston Martin Vantage GT3', weight: 1360, rearPctBase: 0.45, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.52, frontMRDamper: 0.375, frontMRHeave: 0.52, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  make: 'Aston Martin', model: 'Vantage GT4', vehicle: 'Aston Martin Vantage GT4', weight: 1465, rearPctBase: 0.5, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.52, frontMRDamper: 0.375, frontMRHeave: 0.52, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  make: 'Aston Martin', model: 'Vantage GTE', vehicle: 'Aston Martin Vantage GTE', weight: 1310, rearPctBase: 0.49, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.52, frontMRDamper: 0.375, frontMRHeave: 0.52, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  make: 'Aston Martin', model: 'Vulcan', vehicle: 'Aston Martin Vulcan', weight: 1445, rearPctBase: 0.49, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.52, frontMRDamper: 0.375, frontMRHeave: 0.52, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  make: 'Audi', model: '90 IMSA GTO', vehicle: 'Audi 90 IMSA GTO', weight: 1265, rearPctBase: 0.485, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.5, frontMRDamper: 0.354, frontMRHeave: 0.5, rearMRSpring: 0.56, rearMRDamperRoll: 0.419, rearMRSpringHeave: 0.56,
}, {
  make: 'Audi', model: 'A1 quattro', vehicle: 'Audi A1 quattro', weight: 1488, rearPctBase: 0.42, frontUnsprung: 66, rearUnsprung: 57, frontMRSpring: 0.94, frontMRDamper: 0.912, frontMRHeave: 0.94, rearMRSpring: 0.4, rearMRDamperRoll: 0.252, rearMRSpringHeave: 0.4,
}, {
  vehicle: 'Audi R18 e-tron quattro 2014', weight: 955, rearPctBase: 0.48, frontUnsprung: 40, rearUnsprung: 45, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Audi R18 e-tron quattro 2016', weight: 955, rearPctBase: 0.5, frontUnsprung: 40, rearUnsprung: 45, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Audi', model: 'R8 LMP900', vehicle: 'Audi R8 LMP900', weight: 994, rearPctBase: 0.55, frontUnsprung: 44, rearUnsprung: 52, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Audi', model: 'R8 LMS', vehicle: 'Audi R8 LMS', weight: 1345, rearPctBase: 0.575, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.7, frontMRDamper: 0.586, frontMRHeave: 0.7, rearMRSpring: 0.655, rearMRDamperRoll: 0.53, rearMRSpringHeave: 0.655,
}, {
  make: 'Audi', model: 'R8 V10 plus', vehicle: 'Audi R8 V10 plus', weight: 1662, rearPctBase: 0.582, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.64, frontMRDamper: 0.524, frontMRHeave: 0.64, rearMRSpring: 0.93, rearMRDamperRoll: 0.897, rearMRSpringHeave: 0.93,
}, {
  make: 'Audi', model: 'S1 EKS', vehicle: 'Audi S1 EKS', weight: 1300, rearPctBase: 0.48, frontUnsprung: 35, rearUnsprung: 35, frontMRSpring: 0.86, frontMRDamper: 0.797, frontMRHeave: 0.86, rearMRSpring: 0.73, rearMRDamperRoll: 0.626, rearMRSpringHeave: 0.73,
}, {
  make: 'Audi', model: 'Sport Quattro S1', vehicle: 'Audi Sport Quattro S1', weight: 1175, rearPctBase: 0.49, frontUnsprung: 50, rearUnsprung: 50, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.9, rearMRDamperRoll: 0.854, rearMRSpringHeave: 0.9,
}, {
  make: 'Audi', model: 'V8 DTM', vehicle: 'Audi V8 DTM', weight: 1335, rearPctBase: 0.44, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.9, rearMRDamperRoll: 0.854, rearMRSpringHeave: 0.9,
}, {
  make: 'BAC', model: 'Mono', vehicle: 'BAC Mono', weight: 665, rearPctBase: 0.512, frontUnsprung: 25, rearUnsprung: 33, frontMRSpring: 0.54, frontMRDamper: 0.397, frontMRHeave: 0.54, rearMRSpring: 0.486, rearMRDamperRoll: 0.339, rearMRSpringHeave: 0.486,
}, {
  make: 'Bentley', model: 'Continental GT3', vehicle: 'Bentley Continental GT3', weight: 1395, rearPctBase: 0.48, frontUnsprung: 50, rearUnsprung: 55, frontMRSpring: 0.39, frontMRDamper: 0.244, frontMRHeave: 0.39, rearMRSpring: 0.7, rearMRDamperRoll: 0.586, rearMRSpringHeave: 0.7,
}, {
  make: 'Bentley', model: 'Speed 8', vehicle: 'Bentley Speed 8', weight: 1001, rearPctBase: 0.54, frontUnsprung: 42, rearUnsprung: 52, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'BMW', model: '1 Series M Coupe', vehicle: 'BMW 1 Series M Coupe', weight: 1555, rearPctBase: 0.483, frontUnsprung: 58, rearUnsprung: 66, frontMRSpring: 0.92, frontMRDamper: 0.882, frontMRHeave: 0.92, rearMRSpring: 0.45, rearMRDamperRoll: 0.581, rearMRSpringHeave: 0.45,
}, {
  make: 'BMW', model: '1 Series M Coupe StanceWorks', vehicle: 'BMW 1 Series M Coupe StanceWorks', weight: 1555, rearPctBase: 0.483, frontUnsprung: 58, rearUnsprung: 66, frontMRSpring: 0.92, frontMRDamper: 0.882, frontMRHeave: 0.92, rearMRSpring: 0.45, rearMRDamperRoll: 0.581, rearMRSpringHeave: 0.45,
}, {
  make: 'BMW', model: '2002 StanceWorks', vehicle: 'BMW 2002 StanceWorks', weight: 1035, rearPctBase: 0.51, frontUnsprung: 38, rearUnsprung: 41, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'BMW', model: '2002 Turbo', vehicle: 'BMW 2002 Turbo', weight: 1066, rearPctBase: 0.495, frontUnsprung: 38, rearUnsprung: 41, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'BMW', model: '320 TC', vehicle: 'BMW 320 TC', weight: 1150, rearPctBase: 0.495, frontUnsprung: 45, rearUnsprung: 51, frontMRSpring: 0.88, frontMRDamper: 0.826, frontMRHeave: 0.88, rearMRSpring: 0.67, rearMRDamperRoll: 0.584, rearMRSpringHeave: 0.67,
}, {
  vehicle: 'BMW 320i Turbo Gr. 5', weight: 960, rearPctBase: 0.5, frontUnsprung: 45, rearUnsprung: 57, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'BMW', model: 'M1 Procar', vehicle: 'BMW M1 Procar', weight: 1105, rearPctBase: 0.57, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 0.5, frontMRDamper: 0.354, frontMRHeave: 0.5, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  vehicle: 'BMW M3 E30 Gr. A', weight: 1045, rearPctBase: 0.48, frontUnsprung: 38, rearUnsprung: 41, frontMRSpring: 0.88, frontMRDamper: 0.826, frontMRHeave: 0.88, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'BMW', model: 'M3 GT4', vehicle: 'BMW M3 GT4', weight: 1460, rearPctBase: 0.486, frontUnsprung: 57, rearUnsprung: 66, frontMRSpring: 0.92, frontMRDamper: 0.92, frontMRHeave: 0.92, rearMRSpring: 0.696, rearMRDamperRoll: 0.696, rearMRSpringHeave: 0.696,
}, {
  make: 'BMW', model: 'M6 GT3', vehicle: 'BMW M6 GT3', weight: 1410, rearPctBase: 0.48, frontUnsprung: 50, rearUnsprung: 55, frontMRSpring: 0.48, frontMRDamper: 0.333, frontMRHeave: 0.48, rearMRSpring: 0.92, rearMRDamperRoll: 0.882, rearMRSpringHeave: 0.92,
}, {
  make: 'BMW', model: 'M6 GTLM', vehicle: 'BMW M6 GTLM', weight: 1315, rearPctBase: 0.48, frontUnsprung: 50, rearUnsprung: 55, frontMRSpring: 0.48, frontMRDamper: 0.333, frontMRHeave: 0.48, rearMRSpring: 0.92, rearMRDamperRoll: 0.88, rearMRSpringHeave: 0.92,
}, {
  make: 'BMW', model: 'V12 LMR', vehicle: 'BMW V12 LMR', weight: 995, rearPctBase: 0.52, frontUnsprung: 44, rearUnsprung: 52, frontMRSpring: 0.67, frontMRDamper: 0.548, frontMRHeave: 0.67, rearMRSpring: 0.58, rearMRDamperRoll: 0.442, rearMRSpringHeave: 0.58,
}, {
  make: 'BMW', model: 'Z4 GT3', vehicle: 'BMW Z4 GT3', weight: 1315, rearPctBase: 0.485, frontUnsprung: 50, rearUnsprung: 55, frontMRSpring: 0.81, frontMRDamper: 0.729, frontMRHeave: 0.81, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Cadillac ATS-V.R GT3', weight: 1380, rearPctBase: 0.51, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.5, frontMRDamper: 0.354, frontMRHeave: 0.5, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  make: 'Caterham', model: '620R', vehicle: 'Caterham 620R', weight: 687, rearPctBase: 0.544, frontUnsprung: 25, rearUnsprung: 35, frontMRSpring: 0.37, frontMRDamper: 0.225, frontMRHeave: 0.37, rearMRSpring: 0.5, rearMRDamperRoll: 0.5, rearMRSpringHeave: 1,
}, {
  vehicle: 'Caterham SP/300.R', weight: 625, rearPctBase: 0.575, frontUnsprung: 25, rearUnsprung: 33, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 0.59, rearMRDamperRoll: 0.59, rearMRSpringHeave: 0.59,
}, {
  vehicle: "Chevrolet Camaro Z/28 Trans-Am '69", weight: 1355, rearPctBase: 0.45, frontUnsprung: 50, rearUnsprung: 46, frontMRSpring: 0.37, frontMRDamper: 0.225, frontMRHeave: 0.37, rearMRSpring: 0.55, rearMRDamperRoll: 0.55, rearMRSpringHeave: 1,
}, {
  vehicle: 'Chevrolet Camaro ZL-1', weight: 1795, rearPctBase: 0.48, frontUnsprung: 73, rearUnsprung: 77, frontMRSpring: 0.92, frontMRDamper: 0.88, frontMRHeave: 0.92, rearMRSpring: 0.44, rearMRDamperRoll: 0.3, rearMRSpringHeave: 0.44,
}, {
  vehicle: 'Chevrolet Corvette C7 Z06/Z07', weight: 1683, rearPctBase: 0.5, frontUnsprung: 50, rearUnsprung: 60, frontMRSpring: 0.572, frontMRDamper: 0.433, frontMRHeave: 0.572, rearMRSpring: 0.326, rearMRDamperRoll: 0.318, rearMRSpringHeave: 0.326,
}, {
  vehicle: 'Chevrolet Corvette C7.R', weight: 1325, rearPctBase: 0.49, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 0.625, frontMRDamper: 0.494, frontMRHeave: 0.625, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  vehicle: 'Citroën DS3 RX', weight: 1300, rearPctBase: 0.48, frontUnsprung: 35, rearUnsprung: 35, frontMRSpring: 0.86, frontMRDamper: 0.797, frontMRHeave: 0.86, rearMRSpring: 0.73, rearMRDamperRoll: 0.626, rearMRSpringHeave: 0.73,
}, {
  make: 'Dallara', model: 'DW12 Oval', vehicle: 'Dallara DW12 Oval', weight: 785, rearPctBase: 0.577, frontUnsprung: 30, rearUnsprung: 37, frontMRSpring: 1.07, frontMRDamper: 1.11, frontMRHeave: 1.07, rearMRSpring: 0.928, rearMRDamperRoll: 0.89, rearMRSpringHeave: 0.928,
}, {
  make: 'Dallara', model: 'DW12 Road', vehicle: 'Dallara DW12 Road', weight: 809, rearPctBase: 0.577, frontUnsprung: 30, rearUnsprung: 37, frontMRSpring: 1.07, frontMRDamper: 1.11, frontMRHeave: 1.07, rearMRSpring: 0.557, rearMRDamperRoll: 0.416, rearMRSpringHeave: 0.557,
}, {
  vehicle: 'Dallara DW12 Speedway Non-Oval', weight: 785, rearPctBase: 0.577, frontUnsprung: 30, rearUnsprung: 37, frontMRSpring: 1.07, frontMRDamper: 1.11, frontMRHeave: 1.07, rearMRSpring: 0.557, rearMRDamperRoll: 0.416, rearMRSpringHeave: 0.557,
}, {
  make: 'Ferrari', model: '288 GTO', vehicle: 'Ferrari 288 GTO', weight: 1318, rearPctBase: 0.54, frontUnsprung: 50, rearUnsprung: 60, frontMRSpring: 0.5, frontMRDamper: 0.5, frontMRHeave: 0.5, rearMRSpring: 0.79, rearMRDamperRoll: 0.79, rearMRSpringHeave: 0.79,
}, {
  make: 'Ferrari', model: '330 P4', vehicle: 'Ferrari 330 P4', weight: 877, rearPctBase: 0.59, frontUnsprung: 36, rearUnsprung: 45, frontMRSpring: 0.64, frontMRDamper: 0.512, frontMRHeave: 0.64, rearMRSpring: 0.58, rearMRDamperRoll: 0.442, rearMRSpringHeave: 0.58,
}, {
  make: 'Ferrari', model: '333 SP', vehicle: 'Ferrari 333 SP', weight: 989, rearPctBase: 0.52, frontUnsprung: 44, rearUnsprung: 52, frontMRSpring: 0.67, frontMRDamper: 0.548, frontMRHeave: 0.67, rearMRSpring: 0.58, rearMRDamperRoll: 0.442, rearMRSpringHeave: 0.58,
}, {
  vehicle: 'Ferrari 365 GTB/4 Competizione', weight: 1325, rearPctBase: 0.5, frontUnsprung: 50, rearUnsprung: 60, frontMRSpring: 0.5, frontMRDamper: 0.354, frontMRHeave: 0.5, rearMRSpring: 0.79, rearMRDamperRoll: 0.702, rearMRSpringHeave: 0.79,
}, {
  make: 'Ferrari', model: '488 Challenge', vehicle: 'Ferrari 488 Challenge', weight: 1475, rearPctBase: 0.51, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.63, frontMRDamper: 0.5, frontMRHeave: 0.63, rearMRSpring: 0.541, rearMRDamperRoll: 0.398, rearMRSpringHeave: 0.541,
}, {
  make: 'Ferrari', model: '488 GT3', vehicle: 'Ferrari 488 GT3', weight: 1365, rearPctBase: 0.525, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.63, frontMRDamper: 0.5, frontMRHeave: 0.63, rearMRSpring: 0.706, rearMRDamperRoll: 0.593, rearMRSpringHeave: 0.706,
}, {
  make: 'Ferrari', model: '488 GTE', vehicle: 'Ferrari 488 GTE', weight: 1335, rearPctBase: 0.52, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.63, frontMRDamper: 0.5, frontMRHeave: 0.63, rearMRSpring: 0.706, rearMRDamperRoll: 0.593, rearMRSpringHeave: 0.706,
}, {
  make: 'Ferrari', model: '512 M', vehicle: 'Ferrari 512 M', weight: 965, rearPctBase: 0.609, frontUnsprung: 36, rearUnsprung: 49, frontMRSpring: 0.42, frontMRDamper: 0.272, frontMRHeave: 0.42, rearMRSpring: 0.694, rearMRDamperRoll: 0.578, rearMRSpringHeave: 0.694,
}, {
  make: 'Ferrari', model: '512 S Coda Lunga', vehicle: 'Ferrari 512 S Coda Lunga', weight: 1025, rearPctBase: 0.619, frontUnsprung: 36, rearUnsprung: 49, frontMRSpring: 0.42, frontMRDamper: 0.272, frontMRHeave: 0.42, rearMRSpring: 0.694, rearMRDamperRoll: 0.578, rearMRSpringHeave: 0.694,
}, {
  make: 'Ferrari', model: 'Enzo', vehicle: 'Ferrari Enzo', weight: 1450, rearPctBase: 0.55, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Ferrari', model: 'F40 LM', vehicle: 'Ferrari F40 LM', weight: 1160, rearPctBase: 0.58, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 0.51, frontMRDamper: 0.51, frontMRHeave: 0.51, rearMRSpring: 0.893, rearMRDamperRoll: 0.844, rearMRSpringHeave: 0.893,
}, {
  make: 'Ferrari', model: 'F50 GT', vehicle: 'Ferrari F50 GT', weight: 994, rearPctBase: 0.545, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1.2, frontMRDamper: 1.315, frontMRHeave: 1.2, rearMRSpring: 1.3, rearMRDamperRoll: 1.48, rearMRSpringHeave: 1.3,
}, {
  make: 'Ferrari', model: 'LaFerrari', vehicle: 'Ferrari LaFerrari', weight: 1610, rearPctBase: 0.6, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.436, frontMRDamper: 0.287, frontMRHeave: 0.436, rearMRSpring: 0.543, rearMRDamperRoll: 0.4, rearMRSpringHeave: 0.543,
}, {
  vehicle: 'Ford Bronco RTR #Brocky', weight: 2130, rearPctBase: 0.5, frontUnsprung: 88, rearUnsprung: 118, frontMRSpring: 0.341, frontMRDamper: 0.199, frontMRHeave: 0.341, rearMRSpring: 0.4, rearMRDamperRoll: 0.4, rearMRSpringHeave: 0.7,
}, {
  vehicle: 'Ford Capri Gr. 5', weight: 925, rearPctBase: 0.48, frontUnsprung: 45, rearUnsprung: 57, frontMRSpring: 0.83, frontMRDamper: 0.756, frontMRHeave: 0.83, rearMRSpring: 0.34, rearMRDamperRoll: 0.312, rearMRSpringHeave: 0.6,
}, {
  make: 'Ford', model: 'Escort RS1600', vehicle: 'Ford Escort RS1600', weight: 850, rearPctBase: 0.44, frontUnsprung: 35, rearUnsprung: 50, frontMRSpring: 0.83, frontMRDamper: 0.756, frontMRHeave: 0.83, rearMRSpring: 0.5, rearMRDamperRoll: 0.266, rearMRSpringHeave: 1,
}, {
  make: 'Ford', model: 'Escort RX', vehicle: 'Ford Escort RX', weight: 850, rearPctBase: 0.44, frontUnsprung: 35, rearUnsprung: 50, frontMRSpring: 0.83, frontMRDamper: 0.756, frontMRHeave: 0.83, rearMRSpring: 0.5, rearMRDamperRoll: 0.266, rearMRSpringHeave: 1,
}, {
  make: 'Ford', model: 'Escort Touring', vehicle: 'Ford Escort Touring', weight: 850, rearPctBase: 0.44, frontUnsprung: 35, rearUnsprung: 50, frontMRSpring: 0.83, frontMRDamper: 0.756, frontMRHeave: 0.83, rearMRSpring: 0.5, rearMRDamperRoll: 0.266, rearMRSpringHeave: 1,
}, {
  make: 'Ford', model: 'F150 Funhaver', vehicle: 'Ford F150 Funhaver', weight: 2185, rearPctBase: 0.43, frontUnsprung: 85, rearUnsprung: 110, frontMRSpring: 0.362, frontMRDamper: 0.218, frontMRHeave: 0.362, rearMRSpring: 0.11, rearMRDamperRoll: 0.284, rearMRSpringHeave: 0.29,
}, {
  make: 'Ford', model: 'Falcon V8 Supercar', vehicle: 'Ford Falcon V8 Supercar', weight: 1410, rearPctBase: 0.435, frontUnsprung: 50, rearUnsprung: 55, frontMRSpring: 0.63, frontMRDamper: 0.5, frontMRHeave: 0.63, rearMRSpring: 0.52, rearMRDamperRoll: 0.5, rearMRSpringHeave: 0.52,
}, {
  make: 'Ford', model: 'Focus GRC', vehicle: 'Ford Focus GRC', weight: 1300, rearPctBase: 0.47, frontUnsprung: 35, rearUnsprung: 35, frontMRSpring: 0.7, frontMRDamper: 0.586, frontMRHeave: 0.7, rearMRSpring: 0.9, rearMRDamperRoll: 0.854, rearMRSpringHeave: 0.9,
}, {
  make: 'Ford', model: 'Fusion', vehicle: 'Ford Fusion', weight: 1578.5, rearPctBase: 0.46, frontUnsprung: 61, rearUnsprung: 100, frontMRSpring: 0.424, frontMRDamper: 0.573, frontMRHeave: 0.424, rearMRSpring: 0.334, rearMRDamperRoll: 0.334, rearMRSpringHeave: 0.71,
}, {
  make: 'Ford', model: 'Fusion Daytona', vehicle: 'Ford Fusion Daytona', weight: 1578.5, rearPctBase: 0.46, frontUnsprung: 61, rearUnsprung: 100, frontMRSpring: 0.424, frontMRDamper: 0.573, frontMRHeave: 0.424, rearMRSpring: 0.334, rearMRDamperRoll: 0.334, rearMRSpringHeave: 0.71,
}, {
  make: 'Ford', model: 'Fusion Oval', vehicle: 'Ford Fusion Oval', weight: 1578.5, rearPctBase: 0.46, frontUnsprung: 61, rearUnsprung: 100, frontMRSpring: 0.424, frontMRDamper: 0.573, frontMRHeave: 0.424, rearMRSpring: 0.334, rearMRDamperRoll: 0.334, rearMRSpringHeave: 0.71,
}, {
  make: 'Ford', model: 'GT', vehicle: 'Ford GT', weight: 1525, rearPctBase: 0.58, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Ford', model: 'GT LM GTE', vehicle: 'Ford GT LM GTE', weight: 1350, rearPctBase: 0.54, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Ford Mk. IV', weight: 1085, rearPctBase: 0.615, frontUnsprung: 36, rearUnsprung: 45, frontMRSpring: 0.446, frontMRDamper: 0.298, frontMRHeave: 0.446, rearMRSpring: 0.675, rearMRDamperRoll: 0.555, rearMRSpringHeave: 0.675,
}, {
  vehicle: "Ford Mustang '66 RTR", weight: 1380, rearPctBase: 0.45, frontUnsprung: 40, rearUnsprung: 50, frontMRSpring: 0.5, frontMRDamper: 0.354, frontMRHeave: 0.5, rearMRSpring: 0.5, rearMRDamperRoll: 0.5, rearMRSpringHeave: 1,
}, {
  make: 'Ford', model: 'Mustang Boss 302R1', vehicle: 'Ford Mustang Boss 302R1', weight: 1620, rearPctBase: 0.44, frontUnsprung: 62, rearUnsprung: 71, frontMRSpring: 0.92, frontMRDamper: 0.92, frontMRHeave: 0.92, rearMRSpring: 0.51, rearMRDamperRoll: 0.54, rearMRSpringHeave: 0.852,
}, {
  vehicle: 'Ford Mustang Cobra Trans-Am', weight: 1270, rearPctBase: 0.465, frontUnsprung: 56, rearUnsprung: 90, frontMRSpring: 0.63, frontMRDamper: 0.5, frontMRHeave: 0.63, rearMRSpring: 0.456, rearMRDamperRoll: 0.456, rearMRSpringHeave: 0.735,
}, {
  make: 'Ford', model: 'Mustang Fastback', vehicle: 'Ford Mustang Fastback', weight: 1397, rearPctBase: 0.45, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 0.83, frontMRDamper: 0.756, frontMRHeave: 0.83, rearMRSpring: 0.5, rearMRDamperRoll: 0.315, rearMRSpringHeave: 1,
}, {
  make: 'Ford', model: 'Mustang GT 2015', vehicle: 'Ford Mustang GT 2015', weight: 1768, rearPctBase: 0.46, frontUnsprung: 73, rearUnsprung: 77, frontMRSpring: 0.92, frontMRDamper: 0.882, frontMRHeave: 0.92, rearMRSpring: 0.28, rearMRDamperRoll: 0.512, rearMRSpringHeave: 0.28,
}, {
  make: 'Ford', model: 'Mustang RTR FD', vehicle: 'Ford Mustang RTR FD', weight: 1355, rearPctBase: 0.48, frontUnsprung: 60, rearUnsprung: 62, frontMRSpring: 0.92, frontMRDamper: 0.882, frontMRHeave: 0.92, rearMRSpring: 0.64, rearMRDamperRoll: 0.512, rearMRSpringHeave: 0.64,
}, {
  make: 'Ford', model: 'Mustang RTR GT4', vehicle: 'Ford Mustang RTR GT4', weight: 1605, rearPctBase: 0.46, frontUnsprung: 60, rearUnsprung: 62, frontMRSpring: 0.92, frontMRDamper: 0.882, frontMRHeave: 0.92, rearMRSpring: 0.64, rearMRDamperRoll: 0.512, rearMRSpringHeave: 0.64,
}, {
  make: 'Ford', model: 'RS200', vehicle: 'Ford RS200', weight: 1135, rearPctBase: 0.525, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.82, frontMRDamper: 0.743, frontMRHeave: 0.82, rearMRSpring: 0.76, rearMRDamperRoll: 0.663, rearMRSpringHeave: 0.76,
}, {
  make: 'Ford', model: 'Sierra Cosworth RS500', vehicle: 'Ford Sierra Cosworth RS500', weight: 1125, rearPctBase: 0.45, frontUnsprung: 38, rearUnsprung: 41, frontMRSpring: 0.88, frontMRDamper: 0.825, frontMRHeave: 0.88, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Formula', model: 'A', vehicle: 'Formula A', weight: 650, rearPctBase: 0.5, frontUnsprung: 20, rearUnsprung: 25, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Formula', model: 'C', vehicle: 'Formula C', weight: 585, rearPctBase: 0.54, frontUnsprung: 20, rearUnsprung: 26, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Formula Renault 3.5', weight: 703, rearPctBase: 0.546, frontUnsprung: 28, rearUnsprung: 34, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Formula', model: 'Rookie', vehicle: 'Formula Rookie', weight: 505, rearPctBase: 0.52, frontUnsprung: 25, rearUnsprung: 30, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Formula', model: 'X', vehicle: 'Formula X', weight: 720, rearPctBase: 0.535, frontUnsprung: 30, rearUnsprung: 37, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Ginetta', model: 'G40', vehicle: 'Ginetta G40', weight: 890, rearPctBase: 0.48, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 0.445, frontMRDamper: 0.297, frontMRHeave: 0.445, rearMRSpring: 0.672, rearMRDamperRoll: 0.551, rearMRSpringHeave: 0.672,
}, {
  make: 'Ginetta', model: 'G40 GT5', vehicle: 'Ginetta G40 GT5', weight: 910, rearPctBase: 0.48, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 0.445, frontMRDamper: 0.297, frontMRHeave: 0.445, rearMRSpring: 0.672, rearMRDamperRoll: 0.551, rearMRSpringHeave: 0.672,
}, {
  make: 'Ginetta', model: 'G55 GT3', vehicle: 'Ginetta G55 GT3', weight: 1315, rearPctBase: 0.482, frontUnsprung: 54, rearUnsprung: 51, frontMRSpring: 0.556, frontMRDamper: 0.415, frontMRHeave: 0.556, rearMRSpring: 0.644, rearMRDamperRoll: 0.516, rearMRSpringHeave: 0.644,
}, {
  make: 'Ginetta', model: 'G55 GT4', vehicle: 'Ginetta G55 GT4', weight: 1235, rearPctBase: 0.48, frontUnsprung: 54, rearUnsprung: 51, frontMRSpring: 0.583, frontMRDamper: 0.445, frontMRHeave: 0.583, rearMRSpring: 0.703, rearMRDamperRoll: 0.589, rearMRSpringHeave: 0.703,
}, {
  make: 'Ginetta', model: 'G57', vehicle: 'Ginetta G57', weight: 1011, rearPctBase: 0.549, frontUnsprung: 45, rearUnsprung: 47, frontMRSpring: 0.82, frontMRDamper: 0.743, frontMRHeave: 0.82, rearMRSpring: 0.557, rearMRDamperRoll: 0.416, rearMRSpringHeave: 0.557,
}, {
  make: 'Ginetta', model: 'LMP3', vehicle: 'Ginetta LMP3', weight: 985, rearPctBase: 0.55, frontUnsprung: 45, rearUnsprung: 47, frontMRSpring: 0.87, frontMRDamper: 0.816, frontMRHeave: 0.87, rearMRSpring: 0.557, rearMRDamperRoll: 0.416, rearMRSpringHeave: 0.557,
}, {
  vehicle: 'Honda 2&4 Concept', weight: 490, rearPctBase: 0.532, frontUnsprung: 30, rearUnsprung: 30, frontMRSpring: 0.297, frontMRDamper: 0.162, frontMRHeave: 0.297, rearMRSpring: 0.283, rearMRDamperRoll: 0.151, rearMRSpringHeave: 0.283,
}, {
  make: 'Honda', model: 'Civic GRC', vehicle: 'Honda Civic GRC', weight: 1300, rearPctBase: 0.48, frontUnsprung: 35, rearUnsprung: 35, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Honda Civic Type-R', weight: 1354, rearPctBase: 0.42, frontUnsprung: 65, rearUnsprung: 50, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.5, rearMRDamperRoll: 0.35, rearMRSpringHeave: 0.5,
}, {
  vehicle: 'Jaguar E-Type V12 Gr.44', weight: 1296, rearPctBase: 0.49, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1, frontMRDamper: 0.585, frontMRHeave: 1, rearMRSpring: 0.36, rearMRDamperRoll: 0.22, rearMRSpringHeave: 0.36,
}, {
  vehicle: 'Jaguar F-Type SVR', weight: 1852, rearPctBase: 0.459, frontUnsprung: 55, rearUnsprung: 60, frontMRSpring: 0.376, frontMRDamper: 0.376, frontMRHeave: 0.376, rearMRSpring: 0.415, rearMRDamperRoll: 0.415, rearMRSpringHeave: 0.415,
}, {
  make: 'Jaguar', model: 'XJ220 S TWR', vehicle: 'Jaguar XJ220 S TWR', weight: 1135, rearPctBase: 0.6, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Jaguar XJR-9', weight: 940, rearPctBase: 0.58, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Jaguar XJR-9 LM', weight: 966, rearPctBase: 0.57, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'KTM X-Bow GT4', weight: 1230, rearPctBase: 0.5, frontUnsprung: 35, rearUnsprung: 40, frontMRSpring: 0.788, frontMRDamper: 0.7, frontMRHeave: 0.788, rearMRSpring: 0.724, rearMRDamperRoll: 0.616, rearMRSpringHeave: 0.724,
}, {
  vehicle: 'KTM X-Bow R', weight: 890, rearPctBase: 0.6, frontUnsprung: 35, rearUnsprung: 40, frontMRSpring: 0.75, frontMRDamper: 0.65, frontMRHeave: 0.75, rearMRSpring: 0.47, rearMRDamperRoll: 0.322, rearMRSpringHeave: 0.47,
}, {
  vehicle: 'Lamborghini Aventador LP700-4', weight: 1814, rearPctBase: 0.571, frontUnsprung: 50, rearUnsprung: 60, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Lamborghini Diablo GT-R', weight: 1480, rearPctBase: 0.6, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.4, frontMRDamper: 0.4, frontMRHeave: 0.4, rearMRSpring: 0.5, rearMRDamperRoll: 0.5, rearMRSpringHeave: 0.5,
}, {
  make: 'Lamborghini', model: 'Huracan GT3', vehicle: 'Lamborghini Huracan GT3', weight: 1365, rearPctBase: 0.57, frontUnsprung: 50, rearUnsprung: 55, frontMRSpring: 0.76, frontMRDamper: 0.661, frontMRHeave: 0.76, rearMRSpring: 0.62, rearMRDamperRoll: 0.49, rearMRSpringHeave: 0.62,
}, {
  vehicle: 'Lamborghini Huracan LP610-4', weight: 1593, rearPctBase: 0.582, frontUnsprung: 50, rearUnsprung: 50, frontMRSpring: 0.64, frontMRDamper: 0.524, frontMRHeave: 0.64, rearMRSpring: 0.93, rearMRDamperRoll: 0.897, rearMRSpringHeave: 0.93,
}, {
  vehicle: 'Lamborghini Huracan LP620-2 Super Trofeo', weight: 1355, rearPctBase: 0.57, frontUnsprung: 50, rearUnsprung: 55, frontMRSpring: 0.76, frontMRDamper: 0.661, frontMRHeave: 0.76, rearMRSpring: 0.62, rearMRDamperRoll: 0.49, rearMRSpringHeave: 0.62,
}, {
  make: 'Lamborghini', model: 'Sesto Elemento', vehicle: 'Lamborghini Sesto Elemento', weight: 1084, rearPctBase: 0.582, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.64, frontMRDamper: 0.524, frontMRHeave: 0.64, rearMRSpring: 0.93, rearMRDamperRoll: 0.897, rearMRSpringHeave: 0.93,
}, {
  vehicle: 'Lamborghini Veneno LP750-4', weight: 1535, rearPctBase: 0.57, frontUnsprung: 50, rearUnsprung: 60, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Ligier', model: 'JS P2 Honda', vehicle: 'Ligier JS P2 Honda', weight: 1035, rearPctBase: 0.525, frontUnsprung: 35, rearUnsprung: 40, frontMRSpring: 1, frontMRDamper: 1.266, frontMRHeave: 1, rearMRSpring: 0.89, rearMRDamperRoll: 0.84, rearMRSpringHeave: 0.89,
}, {
  make: 'Ligier', model: 'JS P2 Judd', vehicle: 'Ligier JS P2 Judd', weight: 985, rearPctBase: 0.525, frontUnsprung: 35, rearUnsprung: 40, frontMRSpring: 1, frontMRDamper: 1.266, frontMRHeave: 1, rearMRSpring: 0.89, rearMRDamperRoll: 0.84, rearMRSpringHeave: 0.89,
}, {
  make: 'Ligier', model: 'JS P2 Nissan', vehicle: 'Ligier JS P2 Nissan', weight: 985, rearPctBase: 0.525, frontUnsprung: 35, rearUnsprung: 40, frontMRSpring: 1, frontMRDamper: 1.266, frontMRHeave: 1, rearMRSpring: 0.89, rearMRDamperRoll: 0.84, rearMRSpringHeave: 0.89,
}, {
  make: 'Ligier', model: 'JS P3', vehicle: 'Ligier JS P3', weight: 985, rearPctBase: 0.55, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 1.255, frontMRDamper: 1.406, frontMRHeave: 1.255, rearMRSpring: 0.87, rearMRDamperRoll: 0.811, rearMRSpringHeave: 0.87,
}, {
  make: 'Lotus', model: '25', vehicle: 'Lotus 25', weight: 532, rearPctBase: 0.57, frontUnsprung: 32, rearUnsprung: 40, frontMRSpring: 0.4, frontMRDamper: 0.24, frontMRHeave: 0.4, rearMRSpring: 0.65, rearMRDamperRoll: 0.524, rearMRSpringHeave: 0.65,
}, {
  make: 'Lotus', model: '38 Left', vehicle: 'Lotus 38 Left', weight: 727.62, rearPctBase: 0.58, frontUnsprung: 35, rearUnsprung: 45, frontMRSpring: 0.4, frontMRDamper: 0.253, frontMRHeave: 0.4, rearMRSpring: 0.8, rearMRDamperRoll: 0.716, rearMRSpringHeave: 0.8,
}, {
  make: 'Lotus', model: '38 Right', vehicle: 'Lotus 38 Right', weight: 666.33, rearPctBase: 0.58, frontUnsprung: 35, rearUnsprung: 45, frontMRSpring: 0.5, frontMRDamper: 0.354, frontMRHeave: 0.5, rearMRSpring: 0.64, rearMRDamperRoll: 0.512, rearMRSpringHeave: 0.64,
}, {
  make: 'Lotus', model: '40', vehicle: 'Lotus 40', weight: 845, rearPctBase: 0.577, frontUnsprung: 35, rearUnsprung: 45, frontMRSpring: 0.365, frontMRDamper: 0.221, frontMRHeave: 0.365, rearMRSpring: 0.607, rearMRDamperRoll: 0.473, rearMRSpringHeave: 0.607,
}, {
  make: 'Lotus', model: '49', vehicle: 'Lotus 49', weight: 650, rearPctBase: 0.59, frontUnsprung: 30, rearUnsprung: 40, frontMRSpring: 0.68, frontMRDamper: 0.68, frontMRHeave: 0.68, rearMRSpring: 0.6, rearMRDamperRoll: 0.6, rearMRSpringHeave: 0.6,
}, {
  make: 'Lotus', model: '49C', vehicle: 'Lotus 49C', weight: 645, rearPctBase: 0.59, frontUnsprung: 30, rearUnsprung: 40, frontMRSpring: 0.68, frontMRDamper: 0.68, frontMRHeave: 0.68, rearMRSpring: 0.6, rearMRDamperRoll: 0.6, rearMRSpringHeave: 0.6,
}, {
  make: 'Lotus', model: '51', vehicle: 'Lotus 51', weight: 483, rearPctBase: 0.56, frontUnsprung: 32, rearUnsprung: 40, frontMRSpring: 0.45, frontMRDamper: 0.45, frontMRHeave: 0.45, rearMRSpring: 0.58, rearMRDamperRoll: 0.58, rearMRSpringHeave: 0.58,
}, {
  make: 'Lotus', model: '56 Circuit', vehicle: 'Lotus 56 Circuit', weight: 697, rearPctBase: 0.54, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 0.43, frontMRDamper: 0.282, frontMRHeave: 0.43, rearMRSpring: 0.4, rearMRDamperRoll: 0.253, rearMRSpringHeave: 0.4,
}, {
  make: 'Lotus', model: '72D', vehicle: 'Lotus 72D', weight: 660, rearPctBase: 0.62, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 0.5, frontMRDamper: 0.5, frontMRHeave: 0.5, rearMRSpring: 0.6, rearMRDamperRoll: 0.6, rearMRSpringHeave: 0.6,
}, {
  make: 'Lotus', model: '78', vehicle: 'Lotus 78', weight: 648, rearPctBase: 0.6, frontUnsprung: 29, rearUnsprung: 35, frontMRSpring: 0.2916, frontMRDamper: 0.2916, frontMRHeave: 0.2916, rearMRSpring: 0.7, rearMRDamperRoll: 0.7, rearMRSpringHeave: 0.7,
}, {
  make: 'Lotus', model: '98T', vehicle: 'Lotus 98T', weight: 620, rearPctBase: 0.55, frontUnsprung: 26, rearUnsprung: 33, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Marek', model: 'RP219d LMP2', vehicle: 'Marek RP219d LMP2', weight: 985, rearPctBase: 0.52, frontUnsprung: 35, rearUnsprung: 40, frontMRSpring: 1, frontMRDamper: 1.266, frontMRHeave: 1, rearMRSpring: 0.89, rearMRDamperRoll: 0.84, rearMRSpringHeave: 0.89,
}, {
  make: 'Marek', model: 'RP339h LMP1', vehicle: 'Marek RP339h LMP1', weight: 955, rearPctBase: 0.5, frontUnsprung: 35, rearUnsprung: 40, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Mazda', model: 'Radbul', vehicle: 'Mazda Radbul', weight: 1310, rearPctBase: 0.477, frontUnsprung: 39, rearUnsprung: 41, frontMRSpring: 0.43, frontMRDamper: 0.282, frontMRHeave: 0.43, rearMRSpring: 0.58, rearMRDamperRoll: 0.442, rearMRSpringHeave: 0.58,
}, {
  make: 'McLaren', model: '570S', vehicle: 'McLaren 570S', weight: 1485, rearPctBase: 0.575, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.59, frontMRDamper: 0.453, frontMRHeave: 0.59, rearMRSpring: 0.43, rearMRDamperRoll: 0.262, rearMRSpringHeave: 0.43,
}, {
  make: 'McLaren', model: '650S GT3', vehicle: 'McLaren 650S GT3', weight: 1365, rearPctBase: 0.543, frontUnsprung: 48, rearUnsprung: 59, frontMRSpring: 0.718, frontMRDamper: 0.608, frontMRHeave: 0.718, rearMRSpring: 0.433, rearMRDamperRoll: 0.285, rearMRSpringHeave: 0.433,
}, {
  make: 'McLaren', model: '720S', vehicle: 'McLaren 720S', weight: 1460, rearPctBase: 0.577, frontUnsprung: 47, rearUnsprung: 53.8, frontMRSpring: 0.572, frontMRDamper: 0.433, frontMRHeave: 0.572, rearMRSpring: 0.5, rearMRDamperRoll: 0.354, rearMRSpringHeave: 0.5,
}, {
  make: 'McLaren', model: 'F1', vehicle: 'McLaren F1', weight: 1225, rearPctBase: 0.569, frontUnsprung: 42, rearUnsprung: 55, frontMRSpring: 0.783, frontMRDamper: 0.693, frontMRHeave: 0.783, rearMRSpring: 0.744, rearMRDamperRoll: 0.642, rearMRSpringHeave: 0.744,
}, {
  make: 'McLaren', model: 'F1 GTR', vehicle: 'McLaren F1 GTR', weight: 1043, rearPctBase: 0.58, frontUnsprung: 35, rearUnsprung: 46, frontMRSpring: 0.85, frontMRDamper: 1, frontMRHeave: 0.85, rearMRSpring: 0.85, rearMRDamperRoll: 1, rearMRSpringHeave: 0.85,
}, {
  make: 'McLaren', model: 'P1', vehicle: 'McLaren P1', weight: 1575, rearPctBase: 0.57, frontUnsprung: 48.5, rearUnsprung: 59, frontMRSpring: 0.606, frontMRDamper: 0.472, frontMRHeave: 0.606, rearMRSpring: 0.517, rearMRDamperRoll: 0.372, rearMRSpringHeave: 0.517,
}, {
  make: 'McLaren', model: 'P1 GTR', vehicle: 'McLaren P1 GTR', weight: 1430, rearPctBase: 0.564, frontUnsprung: 48.5, rearUnsprung: 59, frontMRSpring: 0.606, frontMRDamper: 0.472, frontMRHeave: 0.606, rearMRSpring: 0.517, rearMRDamperRoll: 0.372, rearMRSpringHeave: 0.517,
}, {
  vehicle: 'Mercedes-AMG A45 4MATIC', weight: 1620, rearPctBase: 0.388, frontUnsprung: 66, rearUnsprung: 57, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.65, rearMRDamperRoll: 0.524, rearMRSpringHeave: 0.65,
}, {
  vehicle: 'Mercedes-AMG A45 RX', weight: 1300, rearPctBase: 0.5, frontUnsprung: 35, rearUnsprung: 35, frontMRSpring: 0.9, frontMRDamper: 0.855, frontMRHeave: 0.9, rearMRSpring: 0.9, rearMRDamperRoll: 0.855, rearMRSpringHeave: 0.9,
}, {
  vehicle: 'Mercedes-AMG A45 TCR', weight: 1260, rearPctBase: 0.395, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 0.87, frontMRDamper: 0.815, frontMRHeave: 0.87, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Mercedes-AMG C63 Coupe S', weight: 1885, rearPctBase: 0.472, frontUnsprung: 60, rearUnsprung: 68, frontMRSpring: 0.52, frontMRDamper: 0.375, frontMRHeave: 0.52, rearMRSpring: 0.25, rearMRDamperRoll: 0.354, rearMRSpringHeave: 0.25,
}, {
  vehicle: 'Mercedes-AMG GT R', weight: 1598, rearPctBase: 0.537, frontUnsprung: 50, rearUnsprung: 60, frontMRSpring: 0.525, frontMRDamper: 0.38, frontMRHeave: 0.525, rearMRSpring: 0.794, rearMRDamperRoll: 0.708, rearMRSpringHeave: 0.794,
}, {
  vehicle: 'Mercedes-AMG GT3', weight: 1390, rearPctBase: 0.52, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 0.525, frontMRDamper: 0.38, frontMRHeave: 0.525, rearMRSpring: 0.794, rearMRDamperRoll: 0.708, rearMRSpringHeave: 0.794,
}, {
  vehicle: 'Mercedes-Benz 190E Evo2 DTM', weight: 1065, rearPctBase: 0.48, frontUnsprung: 38, rearUnsprung: 41, frontMRSpring: 0.88, frontMRDamper: 0.826, frontMRHeave: 0.88, rearMRSpring: 0.61, rearMRDamperRoll: 0.476, rearMRSpringHeave: 0.61,
}, {
  vehicle: 'Mercedes-Benz 300SEL 6.8 AMG', weight: 1635, rearPctBase: 0.42, frontUnsprung: 51, rearUnsprung: 58, frontMRSpring: 0.81, frontMRDamper: 0.729, frontMRHeave: 0.81, rearMRSpring: 0.87, rearMRDamperRoll: 0.811, rearMRSpringHeave: 0.87,
}, {
  vehicle: 'Mercedes-Benz 300SL W194', weight: 1065, rearPctBase: 0.46, frontUnsprung: 38, rearUnsprung: 41, frontMRSpring: 0.35, frontMRDamper: 0.207, frontMRHeave: 0.35, rearMRSpring: 0.52, rearMRDamperRoll: 0.3, rearMRSpringHeave: 0.52,
}, {
  vehicle: 'Mercedes-Benz CLK LM', weight: 1059, rearPctBase: 0.55, frontUnsprung: 42, rearUnsprung: 50, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 0.45, rearMRDamperRoll: 0.302, rearMRSpringHeave: 0.45,
}, {
  vehicle: 'Mercedes-Benz SLS AMG GT3', weight: 1420, rearPctBase: 0.51, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 0.505, frontMRDamper: 0.359, frontMRHeave: 0.505, rearMRSpring: 0.48, rearMRDamperRoll: 0.333, rearMRSpringHeave: 0.48,
}, {
  vehicle: 'Mercedes-Sauber C9', weight: 985, rearPctBase: 0.569, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 0.578, frontMRDamper: 0.44, frontMRHeave: 0.578, rearMRSpring: 1.25, rearMRDamperRoll: 1.398, rearMRSpringHeave: 1.25,
}, {
  make: 'MINI', model: 'Countryman RX', vehicle: 'MINI Countryman RX', weight: 1300, rearPctBase: 0.48, frontUnsprung: 35, rearUnsprung: 35, frontMRSpring: 0.9, frontMRDamper: 0.855, frontMRHeave: 0.9, rearMRSpring: 0.9, rearMRDamperRoll: 0.855, rearMRSpringHeave: 0.9,
}, {
  vehicle: 'Mitsubishi Lancer Evolution IX FQ-360', weight: 1480, rearPctBase: 0.397, frontUnsprung: 66, rearUnsprung: 57, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.65, rearMRDamperRoll: 0.524, rearMRSpringHeave: 0.65,
}, {
  make: 'Mitsubishi', model: 'Lancer Evolution VI SVA', vehicle: 'Mitsubishi Lancer Evolution VI SVA', weight: 1445, rearPctBase: 0.45, frontUnsprung: 66, rearUnsprung: 57, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.65, rearMRDamperRoll: 0.524, rearMRSpringHeave: 0.65,
}, {
  make: 'Mitsubishi', model: 'Lancer Evolution VI TME', vehicle: 'Mitsubishi Lancer Evolution VI TME', weight: 1450, rearPctBase: 0.397, frontUnsprung: 66, rearUnsprung: 57, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.65, rearMRDamperRoll: 0.524, rearMRSpringHeave: 0.65,
}, {
  vehicle: 'Mitsubishi Lancer Evolution X FQ-400', weight: 1640, rearPctBase: 0.438, frontUnsprung: 66, rearUnsprung: 57, frontMRSpring: 0.92, frontMRDamper: 0.92, frontMRHeave: 0.92, rearMRSpring: 0.71, rearMRDamperRoll: 0.71, rearMRSpringHeave: 0.71,
}, {
  make: 'Nissan', model: '280ZX IMSA GTX', vehicle: 'Nissan 280ZX IMSA GTX', weight: 1360, rearPctBase: 0.49, frontUnsprung: 45, rearUnsprung: 57, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.655, rearMRDamperRoll: 0.53, rearMRSpringHeave: 0.655,
}, {
  make: 'Nissan', model: '300ZX Turbo IMSA GTO', vehicle: 'Nissan 300ZX Turbo IMSA GTO', weight: 1285, rearPctBase: 0.49, frontUnsprung: 50, rearUnsprung: 60, frontMRSpring: 0.4, frontMRDamper: 0.4, frontMRHeave: 0.4, rearMRSpring: 0.7, rearMRDamperRoll: 0.7, rearMRSpringHeave: 0.7,
}, {
  vehicle: 'Nissan Fairlady 240Z GTS-II', weight: 1145, rearPctBase: 0.515, frontUnsprung: 40, rearUnsprung: 45, frontMRSpring: 0.865, frontMRDamper: 0.865, frontMRHeave: 0.865, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Nissan GTP ZX-Turbo', weight: 1032.5, rearPctBase: 0.558, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Nissan GT-R GT3', weight: 1395, rearPctBase: 0.48, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.71, frontMRDamper: 0.598, frontMRHeave: 0.71, rearMRSpring: 0.94, rearMRDamperRoll: 0.911, rearMRSpringHeave: 0.94,
}, {
  vehicle: 'Nissan GT-R Nismo 2017', weight: 1808, rearPctBase: 0.453, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.71, frontMRDamper: 0.598, frontMRHeave: 0.71, rearMRSpring: 0.94, rearMRDamperRoll: 0.911, rearMRSpringHeave: 0.94,
}, {
  make: 'Nissan', model: 'R390 GT1', vehicle: 'Nissan R390 GT1', weight: 1101, rearPctBase: 0.562, frontUnsprung: 35, rearUnsprung: 45, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Nissan', model: 'R89C', vehicle: 'Nissan R89C', weight: 995, rearPctBase: 0.55, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Nissan', model: 'R89C LM', vehicle: 'Nissan R89C LM', weight: 995, rearPctBase: 0.55, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Nissan Skyline GT-R BNR32 Gr. A', weight: 1345, rearPctBase: 0.44, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.84, rearMRDamperRoll: 0.77, rearMRSpringHeave: 0.84,
}, {
  vehicle: 'Nissan Skyline GT-R R34 SMS-R', weight: 1515, rearPctBase: 0.433, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.84, rearMRDamperRoll: 0.77, rearMRSpringHeave: 0.84,
}, {
  make: 'Nissan', model: 'Skyline KDR30 Super Silhouette', vehicle: 'Nissan Skyline KDR30 Super Silhouette', weight: 1090, rearPctBase: 0.516, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.8, frontMRDamper: 0.716, frontMRHeave: 0.8, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Olsbergs', model: 'MSE Supercar Lites', vehicle: 'Olsbergs MSE Supercar Lites', weight: 1210, rearPctBase: 0.59, frontUnsprung: 35, rearUnsprung: 35, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Opel', model: 'Astra TCR', vehicle: 'Opel Astra TCR', weight: 1285, rearPctBase: 0.39, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 0.87, frontMRDamper: 0.815, frontMRHeave: 0.87, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Oreca', model: '03', vehicle: 'Oreca 03', weight: 985, rearPctBase: 0.51, frontUnsprung: 35, rearUnsprung: 45, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 0.6, rearMRDamperRoll: 0.465, rearMRSpringHeave: 0.6,
}, {
  make: 'Pagani', model: 'Huayra BC', vehicle: 'Pagani Huayra BC', weight: 1373, rearPctBase: 0.572, frontUnsprung: 40, rearUnsprung: 50, frontMRSpring: 0.58, frontMRDamper: 0.442, frontMRHeave: 0.58, rearMRSpring: 0.9, rearMRDamperRoll: 0.854, rearMRSpringHeave: 0.9,
}, {
  make: 'Pagani', model: 'Zonda Cinque Roadster', vehicle: 'Pagani Zonda Cinque Roadster', weight: 1350, rearPctBase: 0.53, frontUnsprung: 58, rearUnsprung: 68, frontMRSpring: 0.45, frontMRDamper: 0.45, frontMRHeave: 0.45, rearMRSpring: 0.7, rearMRDamperRoll: 0.586, rearMRSpringHeave: 0.7,
}, {
  make: 'Pagani', model: 'Zonda Revolucion', vehicle: 'Pagani Zonda Revolucion', weight: 1185, rearPctBase: 0.53, frontUnsprung: 38, rearUnsprung: 52, frontMRSpring: 0.45, frontMRDamper: 0.3, frontMRHeave: 0.45, rearMRSpring: 0.7, rearMRDamperRoll: 0.567, rearMRSpringHeave: 0.7,
}, {
  vehicle: 'Panoz Esperante GTR-1', weight: 1045, rearPctBase: 0.54, frontUnsprung: 35, rearUnsprung: 46, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Porsche 908/03', weight: 650, rearPctBase: 0.55, frontUnsprung: 35, rearUnsprung: 46, frontMRSpring: 0.42, frontMRDamper: 0.272, frontMRHeave: 0.42, rearMRSpring: 0.694, rearMRDamperRoll: 0.578, rearMRSpringHeave: 0.694,
}, {
  vehicle: "Porsche 911 Carrera RSR 2.8 '73", weight: 985, rearPctBase: 0.61, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 1, frontMRDamper: 0.613, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 0.65, rearMRSpringHeave: 1,
}, {
  make: 'Porsche', model: '911 GT1 1998', vehicle: 'Porsche 911 GT1 1998', weight: 1052, rearPctBase: 0.55, frontUnsprung: 39, rearUnsprung: 50, frontMRSpring: 0.5, frontMRDamper: 0.354, frontMRHeave: 0.5, rearMRSpring: 0.5, rearMRDamperRoll: 0.354, rearMRSpringHeave: 0.5,
}, {
  make: 'Porsche', model: '911 GT3 R', vehicle: 'Porsche 911 GT3 R', weight: 1330, rearPctBase: 0.595, frontUnsprung: 48, rearUnsprung: 59, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.62, rearMRDamperRoll: 0.488, rearMRSpringHeave: 0.62,
}, {
  make: 'Porsche', model: '911 GT3 RS', vehicle: 'Porsche 911 GT3 RS', weight: 1465, rearPctBase: 0.59, frontUnsprung: 50, rearUnsprung: 60, frontMRSpring: 0.83, frontMRDamper: 0.756, frontMRHeave: 0.83, rearMRSpring: 0.83, rearMRDamperRoll: 0.83, rearMRSpringHeave: 0.83,
}, {
  make: 'Porsche', model: '911 RSR', vehicle: 'Porsche 911 RSR', weight: 1335, rearPctBase: 0.557, frontUnsprung: 45, rearUnsprung: 51, frontMRSpring: 0.5, frontMRDamper: 0.354, frontMRHeave: 0.5, rearMRSpring: 0.62, rearMRDamperRoll: 0.489, rearMRSpringHeave: 0.62,
}, {
  vehicle: 'Porsche 917/10', weight: 915, rearPctBase: 0.621, frontUnsprung: 36, rearUnsprung: 49, frontMRSpring: 0.42, frontMRDamper: 0.272, frontMRHeave: 0.42, rearMRSpring: 0.694, rearMRDamperRoll: 0.578, rearMRSpringHeave: 0.694,
}, {
  make: 'Porsche', model: '917K', vehicle: 'Porsche 917K', weight: 885, rearPctBase: 0.613, frontUnsprung: 36, rearUnsprung: 49, frontMRSpring: 0.42, frontMRDamper: 0.272, frontMRHeave: 0.42, rearMRSpring: 0.694, rearMRDamperRoll: 0.578, rearMRSpringHeave: 0.694,
}, {
  make: 'Porsche', model: '917LH', vehicle: 'Porsche 917LH', weight: 908, rearPctBase: 0.631, frontUnsprung: 36, rearUnsprung: 49, frontMRSpring: 0.48, frontMRDamper: 0.33, frontMRHeave: 0.48, rearMRSpring: 0.79, rearMRDamperRoll: 0.66, rearMRSpringHeave: 0.79,
}, {
  make: 'Porsche', model: '918 Weissach Package', vehicle: 'Porsche 918 Weissach Package', weight: 1678, rearPctBase: 0.574, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.83, frontMRDamper: 0.756, frontMRHeave: 0.83, rearMRSpring: 0.83, rearMRDamperRoll: 0.756, rearMRSpringHeave: 0.83,
}, {
  make: 'Porsche', model: '919 Hybrid', vehicle: 'Porsche 919 Hybrid', weight: 960, rearPctBase: 0.48, frontUnsprung: 40, rearUnsprung: 45, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Porsche', model: '924 Carrera GTP', vehicle: 'Porsche 924 Carrera GTP', weight: 1030, rearPctBase: 0.524, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 1, rearMRDamperRoll: 0.65, rearMRSpringHeave: 1,
}, {
  make: 'Porsche', model: '935', vehicle: 'Porsche 935', weight: 1155, rearPctBase: 0.6, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.722, frontMRDamper: 0.613, frontMRHeave: 0.722, rearMRSpring: 0.78, rearMRDamperRoll: 0.7, rearMRSpringHeave: 0.78,
}, {
  vehicle: 'Porsche 935/78 "Moby Dick', weight: 1110, rearPctBase: 0.57, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.722, frontMRDamper: 0.613, frontMRHeave: 0.722, rearMRSpring: 0.78, rearMRDamperRoll: 0.7, rearMRSpringHeave: 0.78,
}, {
  vehicle: 'Porsche 936/77', weight: 822, rearPctBase: 0.58, frontUnsprung: 36, rearUnsprung: 49, frontMRSpring: 0.5, frontMRDamper: 0.35, frontMRHeave: 0.5, rearMRSpring: 0.75, rearMRDamperRoll: 0.65, rearMRSpringHeave: 0.75,
}, {
  make: 'Porsche', model: '959S', vehicle: 'Porsche 959S', weight: 1588, rearPctBase: 0.58, frontUnsprung: 45, rearUnsprung: 55, frontMRSpring: 0.722, frontMRDamper: 0.613, frontMRHeave: 0.722, rearMRSpring: 0.75, rearMRDamperRoll: 0.65, rearMRSpringHeave: 0.75,
}, {
  make: 'Porsche', model: '961 Group B', vehicle: 'Porsche 961 Group B', weight: 1254, rearPctBase: 0.6, frontUnsprung: 40, rearUnsprung: 45, frontMRSpring: 0.722, frontMRDamper: 0.613, frontMRHeave: 0.722, rearMRSpring: 0.75, rearMRDamperRoll: 0.65, rearMRSpringHeave: 0.75,
}, {
  make: 'Porsche', model: '962C', vehicle: 'Porsche 962C', weight: 935, rearPctBase: 0.58, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 0.433, frontMRDamper: 0.3, frontMRHeave: 0.433, rearMRSpring: 0.29, rearMRDamperRoll: 0.3, rearMRSpringHeave: 0.29,
}, {
  make: 'Porsche', model: '962C LH', vehicle: 'Porsche 962C LH', weight: 935, rearPctBase: 0.58, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 0.433, frontMRDamper: 0.3, frontMRHeave: 0.433, rearMRSpring: 0.29, rearMRDamperRoll: 0.3, rearMRSpringHeave: 0.29,
}, {
  make: 'Porsche', model: 'Carrera GT', vehicle: 'Porsche Carrera GT', weight: 1494, rearPctBase: 0.597, frontUnsprung: 50, rearUnsprung: 60, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Porsche', model: 'Cayman GT4 ClubSport', vehicle: 'Porsche Cayman GT4 ClubSport', weight: 1440, rearPctBase: 0.559, frontUnsprung: 45, rearUnsprung: 50, frontMRSpring: 0.83, frontMRDamper: 0.756, frontMRHeave: 0.83, rearMRSpring: 0.83, rearMRDamperRoll: 0.756, rearMRSpringHeave: 0.83,
}, {
  make: 'Radical', model: 'RXC Turbo', vehicle: 'Radical RXC Turbo', weight: 1020, rearPctBase: 0.558, frontUnsprung: 40, rearUnsprung: 50, frontMRSpring: 0.8, frontMRDamper: 0.716, frontMRHeave: 0.8, rearMRSpring: 0.78, rearMRDamperRoll: 0.689, rearMRSpringHeave: 0.78,
}, {
  make: 'Radical', model: 'SR3', vehicle: 'Radical SR3', weight: 650, rearPctBase: 0.58, frontUnsprung: 25, rearUnsprung: 28, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Radical', model: 'SR8', vehicle: 'Radical SR8', weight: 730, rearPctBase: 0.615, frontUnsprung: 25, rearUnsprung: 28, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Renault', model: '5 Maxi Turbo', vehicle: 'Renault 5 Maxi Turbo', weight: 985, rearPctBase: 0.574, frontUnsprung: 35, rearUnsprung: 40, frontMRSpring: 1, frontMRDamper: 0.715, frontMRHeave: 1, rearMRSpring: 0.8, rearMRDamperRoll: 0.715, rearMRSpringHeave: 0.8,
}, {
  make: 'Renault', model: 'Alpine A442B', vehicle: 'Renault Alpine A442B', weight: 800, rearPctBase: 0.62, frontUnsprung: 36, rearUnsprung: 49, frontMRSpring: 0.6, frontMRDamper: 0.464, frontMRHeave: 0.6, rearMRSpring: 0.75, rearMRDamperRoll: 0.65, rearMRSpringHeave: 0.75,
}, {
  make: 'Renault', model: 'Clio Cup', vehicle: 'Renault Clio Cup', weight: 1160, rearPctBase: 0.36, frontUnsprung: 53, rearUnsprung: 40.5, frontMRSpring: 0.94, frontMRDamper: 0.8, frontMRHeave: 0.94, rearMRSpring: 0.9, rearMRDamperRoll: 0.8, rearMRSpringHeave: 0.9,
}, {
  vehicle: 'Renault Megane R.S. 275 Trophy-R', weight: 1354, rearPctBase: 0.37, frontUnsprung: 52.5, rearUnsprung: 36, frontMRSpring: 0.87, frontMRDamper: 0.811, frontMRHeave: 0.87, rearMRSpring: 0.74, rearMRDamperRoll: 0.637, rearMRSpringHeave: 0.74,
}, {
  make: 'Renault', model: 'Megane RX', vehicle: 'Renault Megane RX', weight: 1300, rearPctBase: 0.51, frontUnsprung: 35, rearUnsprung: 35, frontMRSpring: 0.9, frontMRDamper: 0.855, frontMRHeave: 0.9, rearMRSpring: 0.9, rearMRDamperRoll: 0.855, rearMRSpringHeave: 0.9,
}, {
  make: 'Renault', model: 'Megane TCR', vehicle: 'Renault Megane TCR', weight: 1260, rearPctBase: 0.395, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 0.87, frontMRDamper: 0.815, frontMRHeave: 0.87, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Renault', model: 'Megane Trophy II', vehicle: 'Renault Megane Trophy II', weight: 1078, rearPctBase: 0.522, frontUnsprung: 45, rearUnsprung: 51, frontMRSpring: 0.75, frontMRDamper: 0.65, frontMRHeave: 0.75, rearMRSpring: 0.565, rearMRDamperRoll: 0.425, rearMRSpringHeave: 0.565,
}, {
  make: 'Renault', model: 'RS01', vehicle: 'Renault RS01', weight: 1229, rearPctBase: 0.558, frontUnsprung: 40, rearUnsprung: 47, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Renault', model: 'RS01 GT3', vehicle: 'Renault RS01 GT3', weight: 1345, rearPctBase: 0.558, frontUnsprung: 40, rearUnsprung: 47, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'RWD', model: 'P20 LMP2', vehicle: 'RWD P20 LMP2', weight: 985, rearPctBase: 0.52, frontUnsprung: 35, rearUnsprung: 40, frontMRSpring: 1, frontMRDamper: 1.266, frontMRHeave: 1, rearMRSpring: 0.89, rearMRDamperRoll: 0.84, rearMRSpringHeave: 0.89,
}, {
  make: 'RWD', model: 'P30 LMP1', vehicle: 'RWD P30 LMP1', weight: 955, rearPctBase: 0.48, frontUnsprung: 40, rearUnsprung: 46, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Toyota', model: 'GT86', vehicle: 'Toyota GT86', weight: 1293, rearPctBase: 0.441, frontUnsprung: 45, rearUnsprung: 52, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.53, rearMRDamperRoll: 0.386, rearMRSpringHeave: 0.53,
}, {
  make: 'Toyota', model: 'GT86 Rocket Bunny GT4', vehicle: 'Toyota GT86 Rocket Bunny GT4', weight: 1250, rearPctBase: 0.44, frontUnsprung: 45, rearUnsprung: 52, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.53, rearMRDamperRoll: 0.386, rearMRSpringHeave: 0.53,
}, {
  make: 'Toyota', model: 'GT86 Rocket Bunny Street', vehicle: 'Toyota GT86 Rocket Bunny Street', weight: 1373, rearPctBase: 0.435, frontUnsprung: 45, rearUnsprung: 52, frontMRSpring: 0.9, frontMRDamper: 0.854, frontMRHeave: 0.9, rearMRSpring: 0.53, rearMRDamperRoll: 0.386, rearMRSpringHeave: 0.53,
}, {
  vehicle: 'Toyota GT-One 1998', weight: 1006, rearPctBase: 0.55, frontUnsprung: 39, rearUnsprung: 50, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  vehicle: 'Toyota GT-One 1999', weight: 988, rearPctBase: 0.54, frontUnsprung: 39, rearUnsprung: 50, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Toyota', model: 'TS040', vehicle: 'Toyota TS040', weight: 955, rearPctBase: 0.49, frontUnsprung: 40, rearUnsprung: 45, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Toyota', model: 'TS050', vehicle: 'Toyota TS050', weight: 960, rearPctBase: 0.48, frontUnsprung: 40, rearUnsprung: 45, frontMRSpring: 1, frontMRDamper: 1, frontMRHeave: 1, rearMRSpring: 1, rearMRDamperRoll: 1, rearMRSpringHeave: 1,
}, {
  make: 'Volkswagen', model: 'Polo RX', vehicle: 'Volkswagen Polo RX', weight: 1300, rearPctBase: 0.48, frontUnsprung: 35, rearUnsprung: 35, frontMRSpring: 0.9, frontMRDamper: 0.855, frontMRHeave: 0.9, rearMRSpring: 0.9, rearMRDamperRoll: 0.855, rearMRSpringHeave: 0.9,
}]; const Oh = { class: 'flex' }; const bh = { class: 'ml-4' }; const Hh = ne({ __name: 'MakesAndModels', setup(e) { const n = ol.map((r) => ({ car: r, matches: ji.filter((t) => t.make === r.make && (r.model.includes(t.model) || t.model.includes(r.model))).map((t) => t.vehicle).join(', ') })); return (r, t) => (U(), j('div', Oh, [d('div', null, [(U(!0), j(ke, null, Hn(p(n), (a) => (U(), j('div', { key: a.car.fullname, class: 'flex justify-between' }, [d('div', null, X(a.car.fullname), 1), d('div', null, X(a.matches), 1)]))), 128))]), d('div', bh, [(U(!0), j(ke, null, Hn(p(ji), (a) => (U(), j('div', { key: a.vehicle }, X(a.vehicle), 1))), 128))])])); } }); const Bh = { class: 'ts-panel ts-speed' }; const Ch = { class: 'chart-list' }; const Vh = { key: 0, class: 'asterisk' }; const wh = ne({ __name: 'ChartItemsList', props: { title: null, items: null }, setup(e) { const n = e; const r = J(() => n.items.map((t) => { const a = t.replace(/\*+/, ''); const i = t.match(/(\*+)/); const o = i && i.length > 0 ? i[0] : ''; return { text: a, asterisks: o }; })); return (t, a) => (U(), j('div', Bh, [d('h4', null, X(e.title), 1), d('ul', Ch, [(U(!0), j(ke, null, Hn(p(r), (i) => (U(), j('li', { key: i.text }, [q(X(i.text), 1), i.asterisks ? (U(), j('span', Vh, X(i.asterisks), 1)) : Ke('', !0)]))), 128))])])); } }); const Uh = { class: 'ts-corner' }; const _h = { class: 'ts-corner-content' }; const Kt = ne({ __name: 'ChartCorner', props: { title: null, data: null }, setup(e) { const n = e; const r = { high: 'High Speed', medToLow: 'Mid to Low Speed', all: 'All Speeds' }; const t = J(() => Object.keys(n.data).map((a) => ({ title: r[a], items: n.data[a] || [] }))); return (a, i) => (U(), j('div', Uh, [d('h3', null, X(e.title), 1), d('div', _h, [(U(!0), j(ke, null, Hn(p(t), (o) => (U(), _e(wh, { key: o.title, title: o.title, items: o.items }, null, 8, ['title', 'items']))), 128))])])); } }); const Nh = { class: '' }; const Eh = { class: 'text-center mb-6' }; const Ih = { class: 'chart-row' }; const Ki = ne({ __name: 'ChartRow', props: { label: null, data: null }, setup(e) { return (n, r) => (U(), j('div', Nh, [d('h2', Eh, X(e.label), 1), d('div', Ih, [k(Kt, { title: 'Corner Entry', data: e.data.entry }, null, 8, ['data']), k(Kt, { title: 'Mid Corner', data: e.data.mid }, null, 8, ['data']), k(Kt, { title: 'Corner Exit', data: e.data.exit }, null, 8, ['data'])])])); } }); const xh = Pt('<h1>Tuning Chart</h1><p class="sub-title"></p><div class="mb-6"><p>This chart assumes that your base tune has no glaring issues:</p><ul class="list-disc list-outside ml-7 text-yellow"><li><span class="text-ghost-white">Be sure your car doesn&#39;t bottom out and doesn&#39;t roll excessively during cornering.<br></span></li><li><span class="text-ghost-white">Otherwise this chart will create more issues than it solves.</span></li></ul></div>', 3); const Lh = { class: 'tune-chart' }; const Gh = Pt('<section><div class="heading"><h3>General Tips</h3></div><div class="grow"><ul class="list-disc list-outside ml-7 text-yellow"><li><span class="text-ghost-white">Don&#39;t lower the car too much. A car touching the ground will never handle properly.</span></li><li><span class="text-ghost-white">Increasing damping is an easy way to make the car react quicker to inputs.</span></li><li><span class="text-ghost-white"> Generally speaking if you need more than 0.2° of toe there are issues elsewhere in the tune.</span></li><li><span class="text-ghost-white">If you lower the car you will need stiffer springs to avoid bottoming out</span></li><li><span class="text-ghost-white"> If you increase downforce you will need stiffer springs to compensate, as well as stiffer damping so the car doesn&#39;t feel too heavy in corners. </span></li></ul></div></section>', 1); const zh = ne({ __name: 'TuningChart', setup(e) { const n = { understeer: { entry: { high: ['Reduce front ride height', 'Increase front aero', 'Move brake bias back', 'Decrease rear differential deceleration'], medToLow: ['Increase caster', 'Increase toe-out (positive toe)', 'Reduce front ride height'] }, mid: { all: ['Soften front springs', 'Increase front rebound damping', 'Reduce front ride height', 'Soften front ARB', 'Reduce front bump damping', 'Increase front camber'] }, exit: { all: ['Increase front rebound damping'] } }, oversteer: { entry: { all: ['Increase rear differential deceleration', 'Move brake bias forward'] }, mid: { high: ['Increase rear damping', 'Increase rear downforce'], medToLow: ['Soften rear springs', 'Soften rear ARB', 'Reduce rear ride height', 'Increase rear bump damping', 'Decrease rear rebound damping'] }, exit: { all: ['Reduce rear ride height', 'Increase rear bump damping', 'Decrease rear rebound damping', 'Decrease rear differential acceleration', 'Increase toe-in (negative toe)'] } } }; return (r, t) => (U(), j(ke, null, [xh, d('section', Lh, [k(Ki, { label: 'To Fix Understeer', data: n.understeer }, null, 8, ['data']), k(Ki, { class: 'mt-8', label: 'To Fix Oversteer', data: n.oversteer }, null, 8, ['data'])]), Gh], 64)); } }); var Ia = ((e) => (e.race = 'Race', e.rally = 'Rally', e.drift = 'Drift', e.offroad = 'Offroad', e))(Ia || {}); const $h = {
  [me.D]: 50, [me.C]: 60, [me.B]: 70, [me.A]: 80, [me.S1]: 90, [me.S2]: 100, [me.X]: 100,
}; const Xh = {
  [me.D]: 2.8, [me.C]: 2.9, [me.B]: 3, [me.A]: 3, [me.S1]: 3.1, [me.S2]: 3.2, [me.X]: 3.3,
}; const jh = {
  Race: { general: 185, rebound: 100, bump: 60 }, Offroad: { general: 80, rebound: 80, bump: 50 }, Rally: { general: 80, rebound: 80, bump: 50 }, Drift: { general: 185, rebound: 100, bump: 60 },
}; const Kh = {
  Race: { max: { front: 0.203971, rear: 0.203971 }, min: { front: 0.040759, rear: 0.040759 } }, Offroad: { max: { front: 0.102, rear: 0.102 }, min: { front: 0.0204, rear: 0.03 } }, Rally: { max: { front: 0.102, rear: 0.102 }, min: { front: 0.0204, rear: 0.03 } }, Drift: { max: { front: 0.203971, rear: 0.203971 }, min: { front: 0.040759, rear: 0.040759 } },
}; const Jt = { rebound: { max: { front: 20, rear: 20 }, min: { front: 1, rear: 1 } }, bump: { max: { front: 20, rear: 20 }, min: { front: 1, rear: 1 } }, arb: { max: { front: 65, rear: 65 }, min: { front: 1, rear: 1 } } }; function Zt(e) { return { front: e.max.front - e.min.front, rear: e.max.rear - e.min.rear }; } const Jh = { rebound: Zt(Jt.rebound), bump: Zt(Jt.bump), arb: Zt(Jt.arb) }; function Zh(e, n) { const r = Kh[e]; return { front: n * r.max.front - n * r.min.front, rear: n * r.max.rear - n * r.min.rear }; } function Yh() {
  const e = Pe({
    drivetrain: Se.rwd, springs: Ia.race, piClass: me.S1, weight: 1500, weightBalance: 50, frontAero: 112, tireWidth: { front: 275, rear: 345 },
  }); const n = Pe({ ...jh }); const r = Pe({ ...$h }); const t = Pe({ ...Xh }); function a() { return { front: t[e.piClass], rear: t[e.piClass] }; } const i = Pe({
    brakeOffset: 1, driveOffset: 5, general: n[e.springs].general, rebound: n[e.springs].rebound, bump: n[e.springs].bump, arb: r[e.piClass], freq: a(), unsprungCornerWeight: 0, motionRatio: { front: 100, rear: 100 },
  }); pe(() => i.arb, (M) => { r[e.piClass] = M; }), pe(i, (M) => { r[e.piClass] = M.arb, n[e.springs].general = M.general, n[e.springs].rebound = M.rebound, n[e.springs].bump = M.bump; }), pe(() => e.springs, (M) => { i.general = n[M].general, i.rebound = n[M].rebound, i.bump = n[M].bump; }), pe(() => e.piClass, (M) => { i.arb = r[M], i.freq = a(); }); const o = J(() => ({
    brakeOffset: i.brakeOffset / 100, driveOffset: i.driveOffset / 100, general: i.general / 100, rebound: i.rebound / 100, bump: i.bump / 100, arb: i.arb / 100, freq: i.freq, unsprungCornerWeight: i.unsprungCornerWeight, motionRatio: { front: i.motionRatio.front / 100, rear: i.motionRatio.rear / 100 },
  })); const l = J(() => ({ springs: Zh(e.springs, e.weight), ...Jh })); const s = J(() => ({ front: e.weightBalance / 100, rear: 1 - e.weightBalance / 100 })); const c = J(() => { const M = e.tireWidth.front + e.tireWidth.rear; return { front: e.tireWidth.front / M, rear: e.tireWidth.rear / M }; }); const u = J(() => ({ front: e.weight * s.value.front, rear: e.weight * s.value.rear })); const f = J(() => ({ front: u.value.front / 2 - i.unsprungCornerWeight, rear: u.value.rear / 2 - i.unsprungCornerWeight })); const h = J(() => ({ front: Ei(f.value.front, cr.kg), rear: Ei(f.value.rear, cr.kg) })); const y = J(() => ({ front: (2 * i.freq.front * Math.PI) ** 2 * h.value.front * o.value.motionRatio.front ** 2, rear: (2 * i.freq.rear * Math.PI) ** 2 * h.value.rear * o.value.motionRatio.rear ** 2 })); const F = J(() => ({ front: Ii(y.value.front, We.nmm, We.kgf) / 100, rear: Ii(y.value.rear, We.nmm, We.kgf) / 100 })); const O = J(() => ({ front: (c.value.front + s.value.front) / 2, rear: (c.value.rear + s.value.rear) / 2 })); const L = J(() => e.weight * Ge.springs.newtonsKgf); const A = J(() => { const M = { front: L.value * s.value.front * o.value.general, rear: L.value * s.value.rear * o.value.general }; return e.drivetrain === Se.fwd ? M.front *= 1 - o.value.driveOffset : e.drivetrain === Se.rwd && (M.rear *= 1 - o.value.driveOffset), M; }); const V = J(() => ({ front: A.value.front / l.value.springs.front * l.value.rebound.front * o.value.rebound, rear: A.value.rear / l.value.springs.rear * l.value.rebound.rear * o.value.rebound })); const b = J(() => ({ front: V.value.front * o.value.bump, rear: V.value.rear * o.value.bump })); const _ = J(() => ({ front: A.value.front / l.value.springs.front * l.value.arb.front * o.value.arb, rear: A.value.rear / l.value.springs.rear * l.value.arb.rear * o.value.arb })); const N = J(() => ({
    weightBalance: O.value, springs: A.value, springRates: F.value, springRatesInNewtons: y.value, rebound: V.value, bump: b.value, arbs: _.value, brakeBalance: (O.value.rear + o.value.brakeOffset) * 100, centerDiff: O.value.rear * 100,
  })); return {
    inputs: e, modifiers: i, tune: N, deltas: l, springTypeModifiersMap: n,
  };
} const Ji = ne({
  __name: 'RepeatButton',
  props: { delay: { default: 300 } },
  emits: ['pressed', 'click', 'blur'],
  setup(e, { emit: n }) {
    const r = e; const t = Pe({
      pressed: !1, timeout: 0, started: 0, initialDelay: 650, increaseSpeedEvery: 3e3, minimumDelay: 10, delay: r.delay,
    }); function a() { if (t.pressed) { n('click'); const c = (Date.now() - t.started) % t.increaseSpeedEvery * 10; const u = Math.max(r.delay - c, t.minimumDelay); t.timeout = window.setTimeout(a, u); } } function i(s) { n('pressed', !0), t.delay = r.delay, t.pressed = !0, n('click'), t.timeout = window.setTimeout(a, t.initialDelay); } function o() { t.pressed = !1, clearTimeout(t.timeout), t.timeout = 0, n('pressed', !1); } function l(s) { o(), n('blur', s); } return (s, c) => (U(), j('button', {
      type: 'button', onMousedown: i, onMouseup: o, onMouseleave: o, onTouchmove: o, onBlur: l,
    }, [He(s.$slots, 'default')], 32));
  },
}); const qh = { class: 'control' }; const Qh = ['for']; const eg = { class: 'flex items-center' }; const ng = { class: 'relative' }; const rg = ['id', 'required', 'step', 'min', 'max', 'onKeyup', 'onKeydown']; const tg = { class: 'suffix' }; const ag = ne({
  __name: 'CounterInput',
  props: {
    modelValue: null, label: null, suffix: { default: void 0 }, errorMsg: { default: '' }, error: { type: Boolean }, required: { type: Boolean }, step: { default: 1 }, min: { default: 0 }, max: { default: Number.MAX_SAFE_INTEGER },
  },
  emits: ['update:modelValue'],
  setup(e, { emit: n }) {
    const r = e; const t = zu(); const a = Pe({
      value: r.modelValue, focused: !1, pressed: !1, modifiers: { alt: !1, control: !1, shift: !1 },
    }); pe(() => r.modelValue, (N) => { a.value = N; }), pe(() => a.value, (N) => { l(); }); const i = J(() => (a.modifiers.control ? 10 : a.modifiers.alt ? 100 : r.step)); const o = J(() => (a.focused ? 'border-yellow' : 'border-gray-400')); function l() { a.pressed || n('update:modelValue', a.value); } function s(N) { a.pressed = N, l(); } const c = J(() => ({ min: Number(r.min), max: Number(r.max) })); function u(N) { const M = (a.value * 100 + N * 100) / 100; a.value = Math.max(c.value.min, Math.min(c.value.max, M)); } function f() { u(i.value); } function h() { u(-i.value); } function y() { a.pressed = !0; } function F() { a.pressed = !1, l(); } function O() { a.focused = !0; } function L() { a.focused = !1; } function A(N) { N.target.select(); } function V(N, M) { const E = N.key.toLowerCase(); E in a.modifiers && (a.modifiers[E] = M); } function b(N) { V(N, !0); } function _(N) { V(N, !1); } return document.addEventListener('keydown', b), document.addEventListener('keyup', _), ba(() => { document.removeEventListener('keydown', b), document.removeEventListener('keyup', _); }), (N, M) => (U(), j('div', qh, [e.label ? (U(), j('label', { key: 0, for: `#${p(t)}`, class: we({ required: e.required }) }, X(e.label), 11, Qh)) : Ke('', !0), d('div', eg, [d('div', { class: we(['counter-container', p(o)]), onFocusin: O, onFocusout: L }, [k(Ji, {
      class: 'counter-input-button rounded-l', tabindex: '-1', onClick: h, onPressed: s,
    }, { default: ie(() => [q(' - ')]), _: 1 }), d('div', ng, [jn(d('input', Dt({
      id: p(t), 'onUpdate:modelValue': M[0] || (M[0] = (E) => a.value = E), type: 'number', required: e.required, step: e.step, min: e.min, max: e.max, class: '',
    }, N.$attrs, {
      onFocus: O, onBlur: L, onKeyup: Ti(F, ['down', 'up']), onKeydown: Ti(y, ['down', 'up']), onTouchend: A,
    }), null, 16, rg), [[Vr, a.value]]), d('div', tg, [He(N.$slots, 'default', {}, () => [q(X(e.suffix), 1)], !0)])]), k(Ji, {
      class: 'counter-input-button rounded-r', tabindex: '-1', onClick: f, onPressed: s,
    }, { default: ie(() => [q(' + ')]), _: 1 })], 34)]), e.errorMsg ? (U(), j('div', { key: 1, class: we(['validation-message', { invisible: e.error }]) }, X(e.errorMsg), 3)) : Ke('', !0)]));
  },
}); const Je = bt(ag, [['__scopeId', 'data-v-fe9e8f70']]); const K = (e) => (Ao('data-v-a697872a'), e = e(), Po(), e); const ig = { class: 'calculator-results' }; const og = { class: 'sticky top-0' }; const lg = K(() => d('h3', { class: 'text-center' }, 'Results', -1)); const sg = { class: 'hidden sm:table sm:text-lg text-white mx-auto' }; const dg = K(() => d('thead', null, [d('tr', null, [d('th', null, ' '), d('th', null, 'Front'), d('th', null, ' '), d('th', null, 'Rear'), d('th', null, ' ')])], -1)); const pg = K(() => d('th', null, "ARB's", -1)); const cg = K(() => d('td', null, ' ', -1)); const ug = K(() => d('td', null, ' ', -1)); const mg = K(() => d('th', null, 'Springs', -1)); const fg = K(() => d('td', { class: 'unit' }, 'kgf', -1)); const hg = K(() => d('td', { class: 'unit' }, 'kgf', -1)); const gg = K(() => d('th', null, 'Spring Rates', -1)); const kg = K(() => d('td', { class: 'unit' }, 'kgf', -1)); const yg = K(() => d('td', { class: 'unit' }, 'kgf', -1)); const Rg = K(() => d('th', null, 'Rebound', -1)); const Tg = K(() => d('td', null, ' ', -1)); const Mg = K(() => d('td', null, ' ', -1)); const vg = K(() => d('th', null, 'Bump', -1)); const Sg = K(() => d('td', null, ' ', -1)); const Fg = K(() => d('td', null, ' ', -1)); const Wg = K(() => d('th', null, 'Brake Balance', -1)); const Ag = K(() => d('td', { colspan: '3', class: 'unit' }, '%', -1)); const Pg = { key: 0 }; const Dg = K(() => d('th', null, 'Center Diff', -1)); const Og = K(() => d('td', { colspan: '3', class: 'unit' }, '%', -1)); const bg = { class: 'sm:hidden sm:text-lg text-white mx-auto' }; const Hg = K(() => d('tr', { class: 'header-row' }, [d('th', { colspan: '3' }, "ARB's")], -1)); const Bg = K(() => d('th', null, 'Front', -1)); const Cg = K(() => d('td', null, ' ', -1)); const Vg = K(() => d('th', null, 'Rear', -1)); const wg = K(() => d('td', null, ' ', -1)); const Ug = K(() => d('tr', { class: 'header-row' }, [d('th', { colspan: '3' }, 'Springs')], -1)); const _g = K(() => d('th', null, 'Front', -1)); const Ng = K(() => d('td', { class: 'unit' }, 'kgf', -1)); const Eg = K(() => d('th', null, 'Rear', -1)); const Ig = K(() => d('td', { class: 'unit' }, 'kgf', -1)); const xg = K(() => d('tr', { class: 'header-row' }, [d('th', { colspan: '3' }, 'Spring Rates')], -1)); const Lg = K(() => d('th', null, 'Front', -1)); const Gg = K(() => d('td', { class: 'unit' }, 'kgf', -1)); const zg = K(() => d('th', null, 'Rear', -1)); const $g = K(() => d('td', { class: 'unit' }, 'kgf', -1)); const Xg = K(() => d('tr', { class: 'header-row' }, [d('th', { colspan: '3' }, 'Rebound')], -1)); const jg = K(() => d('th', null, 'Front', -1)); const Kg = K(() => d('td', null, ' ', -1)); const Jg = K(() => d('th', null, 'Rear', -1)); const Zg = K(() => d('td', null, ' ', -1)); const Yg = K(() => d('tr', { class: 'header-row' }, [d('th', { colspan: '3' }, 'Bump')], -1)); const qg = K(() => d('th', null, 'Front', -1)); const Qg = K(() => d('td', null, ' ', -1)); const e0 = K(() => d('th', null, 'Rear', -1)); const n0 = K(() => d('td', null, ' ', -1)); const r0 = K(() => d('tr', { class: 'header-row' }, [d('th', { colspan: '3' }, 'Brake Balance')], -1)); const t0 = K(() => d('td', null, ' ', -1)); const a0 = K(() => d('td', { class: 'unit' }, '%', -1)); const i0 = K(() => d('tr', { class: 'header-row' }, [d('th', { colspan: '3' }, 'Center Diff')], -1)); const o0 = K(() => d('td', null, ' ', -1)); const l0 = K(() => d('td', { class: 'unit' }, '%', -1)); const s0 = ne({
  __name: 'CalculatorResults',
  props: { tune: null, inputs: null },
  setup(e) {
    const n = e; function r(a, i = 1) { return { front: a.front.toFixed(i), rear: a.rear.toFixed(i) }; } const t = J(() => ({
      arbs: r(n.tune.arbs), springs: r(n.tune.springs), springRates: r(n.tune.springRates), springRatesInNewtons: r(n.tune.springRatesInNewtons), rebound: r(n.tune.rebound), bump: r(n.tune.bump), brakeBalance: n.tune.brakeBalance.toFixed(0), centerDiff: n.tune.centerDiff.toFixed(0),
    })); return (a, i) => (U(), j('div', ig, [d('div', og, [lg, d('table', sg, [dg, d('tbody', null, [d('tr', null, [pg, d('td', null, X(p(t).arbs.front), 1), cg, d('td', null, X(p(t).arbs.rear), 1), ug]), d('tr', null, [mg, d('td', null, X(p(t).springs.front), 1), fg, d('td', null, X(p(t).springs.rear), 1), hg]), d('tr', null, [gg, d('td', null, X(p(t).springRates.front), 1), kg, d('td', null, X(p(t).springRates.rear), 1), yg]), d('tr', null, [Rg, d('td', null, X(p(t).rebound.front), 1), Tg, d('td', null, X(p(t).rebound.rear), 1), Mg]), d('tr', null, [vg, d('td', null, X(p(t).bump.front), 1), Sg, d('td', null, X(p(t).bump.rear), 1), Fg]), d('tr', null, [Wg, d('td', null, X(p(t).brakeBalance), 1), Ag]), e.inputs.drivetrain === 'AWD' ? (U(), j('tr', Pg, [Dg, d('td', null, X(p(t).centerDiff), 1), Og])) : Ke('', !0)])]), d('table', bg, [d('tbody', null, [Hg, d('tr', null, [Bg, d('td', null, X(p(t).arbs.front), 1), Cg]), d('tr', null, [Vg, d('td', null, X(p(t).arbs.rear), 1), wg]), Ug, d('tr', null, [_g, d('td', null, X(p(t).springs.front), 1), Ng]), d('tr', null, [Eg, d('td', null, X(p(t).springs.rear), 1), Ig]), xg, d('tr', null, [Lg, d('td', null, X(p(t).springRates.front), 1), Gg]), d('tr', null, [zg, d('td', null, X(p(t).springRates.rear), 1), $g]), Xg, d('tr', null, [jg, d('td', null, X(p(t).rebound.front), 1), Kg]), d('tr', null, [Jg, d('td', null, X(p(t).rebound.rear), 1), Zg]), Yg, d('tr', null, [qg, d('td', null, X(p(t).bump.front), 1), Qg]), d('tr', null, [e0, d('td', null, X(p(t).bump.rear), 1), n0]), r0, d('tr', null, [t0, d('td', null, X(p(t).brakeBalance), 1), a0]), e.inputs.drivetrain === 'AWD' ? (U(), j(ke, { key: 0 }, [i0, d('tr', null, [o0, d('td', null, X(p(t).centerDiff), 1), l0])], 64)) : Ke('', !0)])])])]));
  },
}); const d0 = bt(s0, [['__scopeId', 'data-v-a697872a']]); const p0 = { class: 'border-b' }; const c0 = Pt('<h1>Tune Calculator</h1><p class="sub-title"> Based on diquee&#39;s tune calculator spreadsheet. <br><span class="sub-title text-base"><span class="text-yellow font-bold">Note:</span> This calculator is still very much a work in progress. It is intended to give a decent starting point.<br> If you have any suggestions please let SharpSeeEr know on discord! </span></p><p class="text-center mb-6"> Hold &quot;Ctrl&quot; when clicking +/- buttons to change by 10 <br class="md:hidden"><span class="md:ml-4">Hold &quot;Alt&quot; when clicking +/- buttons to change by 100</span></p>', 3); const u0 = { class: 'flex' }; const m0 = d('div', { class: 'heading' }, [d('h2', null, 'Car Information')], -1); const f0 = { class: 'grow' }; const h0 = { class: 'content' }; const g0 = { class: 'set-upgrades' }; const k0 = { class: 'set-upgrades' }; const y0 = d('div', { class: 'font-bold mt-6' }, 'Tire Width', -1); const R0 = { class: 'set-upgrades' }; const T0 = d('div', { class: 'heading' }, [d('h2', null, 'Modifiers')], -1); const M0 = { class: 'grow' }; const v0 = { class: 'content' }; const S0 = d('div', { class: 'font-bold' }, 'Target Frequency', -1); const F0 = { class: 'set-upgrades' }; const W0 = { class: 'set-upgrades' }; const A0 = { class: 'set-upgrades' }; const P0 = { class: 'set-upgrades' }; const D0 = { class: 'set-upgrades' }; const O0 = ne({
  __name: 'TuneCalculator',
  setup(e) {
    const n = Yh(); return (r, t) => (U(), j('div', p0, [c0, d('div', u0, [d('form', null, [d('section', null, [m0, d('div', f0, [d('div', h0, [d('div', g0, [k(je, {
      modelValue: p(n).inputs.springs, 'onUpdate:modelValue': t[0] || (t[0] = (a) => p(n).inputs.springs = a), label: 'Type of Springs', type: p(Ia),
    }, null, 8, ['modelValue', 'type']), k(je, {
      modelValue: p(n).inputs.drivetrain, 'onUpdate:modelValue': t[1] || (t[1] = (a) => p(n).inputs.drivetrain = a), label: 'Drive Type', type: p(Se),
    }, null, 8, ['modelValue', 'type']), k(je, {
      modelValue: p(n).inputs.piClass, 'onUpdate:modelValue': t[2] || (t[2] = (a) => p(n).inputs.piClass = a), label: 'Class', type: p(me),
    }, null, 8, ['modelValue', 'type'])]), d('div', k0, [k(Je, {
      modelValue: p(n).inputs.weight, 'onUpdate:modelValue': t[3] || (t[3] = (a) => p(n).inputs.weight = a), label: 'Weight', min: '0',
    }, { default: ie(() => [q(' kg ')]), _: 1 }, 8, ['modelValue']), k(Je, {
      modelValue: p(n).inputs.weightBalance, 'onUpdate:modelValue': t[4] || (t[4] = (a) => p(n).inputs.weightBalance = a), label: 'Front Weight', min: '1', max: '99',
    }, { default: ie(() => [q(' % ')]), _: 1 }, 8, ['modelValue'])]), y0, d('div', null, [d('div', R0, [k(Je, {
      modelValue: p(n).inputs.tireWidth.front, 'onUpdate:modelValue': t[5] || (t[5] = (a) => p(n).inputs.tireWidth.front = a), label: 'Front', required: '', min: '100', step: 10,
    }, null, 8, ['modelValue']), k(Je, {
      modelValue: p(n).inputs.tireWidth.rear, 'onUpdate:modelValue': t[6] || (t[6] = (a) => p(n).inputs.tireWidth.rear = a), label: 'Rear', required: '', min: '100', step: 10,
    }, null, 8, ['modelValue'])])])])])]), d('section', null, [T0, d('div', M0, [d('div', v0, [S0, d('div', F0, [k(Je, {
      modelValue: p(n).modifiers.freq.front, 'onUpdate:modelValue': t[7] || (t[7] = (a) => p(n).modifiers.freq.front = a), label: 'Front', min: '1', max: '10', step: 0.1,
    }, null, 8, ['modelValue', 'step']), k(Je, {
      modelValue: p(n).modifiers.freq.rear, 'onUpdate:modelValue': t[8] || (t[8] = (a) => p(n).modifiers.freq.rear = a), label: 'Rear', min: '1', max: '10', step: 0.1,
    }, null, 8, ['modelValue', 'step'])]), d('div', W0, [k(Je, {
      modelValue: p(n).modifiers.general, 'onUpdate:modelValue': t[9] || (t[9] = (a) => p(n).modifiers.general = a), label: 'Springs', min: '0', max: '200', step: 1,
    }, { default: ie(() => [q(' % ')]), _: 1 }, 8, ['modelValue'])]), d('div', A0, [k(Je, {
      modelValue: p(n).modifiers.rebound, 'onUpdate:modelValue': t[10] || (t[10] = (a) => p(n).modifiers.rebound = a), label: 'Rebound', min: '0', max: '200',
    }, { default: ie(() => [q(' % ')]), _: 1 }, 8, ['modelValue']), k(Je, {
      modelValue: p(n).modifiers.bump, 'onUpdate:modelValue': t[11] || (t[11] = (a) => p(n).modifiers.bump = a), label: 'Bump', min: '1', max: '200',
    }, { default: ie(() => [q(' % ')]), _: 1 }, 8, ['modelValue'])]), d('div', P0, [k(Je, {
      modelValue: p(n).modifiers.arb, 'onUpdate:modelValue': t[12] || (t[12] = (a) => p(n).modifiers.arb = a), label: 'ARB', suffix: '%', min: '1', max: '200',
    }, null, 8, ['modelValue'])]), d('div', D0, [k(Je, {
      modelValue: p(n).modifiers.brakeOffset, 'onUpdate:modelValue': t[13] || (t[13] = (a) => p(n).modifiers.brakeOffset = a), label: 'Brake Offset', min: '1', max: '50',
    }, { default: ie(() => [q(' % ')]), _: 1 }, 8, ['modelValue']), k(Je, {
      modelValue: p(n).modifiers.driveOffset, 'onUpdate:modelValue': t[14] || (t[14] = (a) => p(n).modifiers.driveOffset = a), label: 'Drive Offset', min: '1', max: '50',
    }, { default: ie(() => [q(' % ')]), _: 1 }, 8, ['modelValue'])])])])])]), k(d0, { tune: p(n).tune.value, inputs: p(n).inputs }, null, 8, ['tune', 'inputs'])])]));
  },
}); const b0 = Rc({ history: wp('/'), routes: [{ name: 'home', path: '/', component: Ec }, { name: 'formatter', path: '/formatter/:encodedForm?', component: Dh }, { name: 'calculator', path: '/calculator', component: O0 }, { name: 'tuningchart', path: '/chart', component: zh }, { name: 'cars', path: '/cars', component: Hh }, { name: 'redirection', path: '/:pathMatch(.*)*', redirect: '/formatter' }] }); Xd(kp).use(b0).mount('#app');
