/**
 * noAdsV7 GOD MODE (CORRETTO)
 * Combinazione di:
 * 1. Motore Interno
 * 2. Visual Shield
 */

// ============================================================================
// PARTE 1: IL MOTORE INTERNO (Internal Engine)
// ============================================================================
(async function noAdsInternal() {
    "use strict";
    console.log("🚀 noAdsV7: Avvio Motore Interno...");

    const loadWebpack = () => {
        try {
            const n = window.webpackChunkclient_web.push([[Symbol()], {}, o => o]),
                s = Object.keys(n.m).map(o => n(o)),
                r = s.filter(o => typeof o == "object").flatMap(o => {
                    try { return Object.values(o) } catch { }
                }).filter(o => typeof o == "function");
            return { cache: s, functionModules: r }
        } catch (n) {
            return console.error("noAdsV7 Internal: Failed to load webpack", n), { cache: [], functionModules: [] }
        }
    };
    
    const getSettingsClient = (n, s = [], a = {}) => {
        try {
            const r = n.find(o => o?.settingsClient)?.settingsClient;
            if (!r) {
                const o = s.find(d => d?.SERVICE_ID === "spotify.ads.esperanto.settings.proto.Settings" || d?.SERVICE_ID === "spotify.ads.esperanto.proto.Settings");
                return new o(a)
            }
            return r
        } catch (r) {
            return console.error("noAdsV7 Internal: Failed to get ads settings client", r), null
        }
    };

    const getSlotsClient = (n, s) => {
        try {
            const a = n.find(r => r.SERVICE_ID === "spotify.ads.esperanto.slots.proto.Slots" || r.SERVICE_ID === "spotify.ads.esperanto.proto.Slots");
            return new a(s)
        } catch (a) {
            return console.error("noAdsV7 Internal: Failed to get slots client", a), null
        }
    };

    const getTestingClient = (n, s) => {
        try {
            const a = n.find(r => r.SERVICE_ID === "spotify.ads.esperanto.testing.proto.Testing" || r.SERVICE_ID === "spotify.ads.esperanto.proto.Testing");
            return new a(s)
        } catch (a) {
            return console.error("noAdsV7 Internal: Failed to get testing client", a), null
        }
    };

    const map = new Map;
    const retryCounter = (n, s) => {
        if (map.has(n) || map.set(n, { count: 0 }), s === "increment") map.get(n).count++;
        else if (s === "clear") map.delete(n);
        else if (s === "get") return map.get(n)?.count
    };

    async function n() {
        await new Promise(e => Spicetify.Events.platformLoaded.on(e));
        await new Promise(e => Spicetify.Events.webpackLoaded.on(e));
        
        const s = loadWebpack(),
            { Platform: a, Locale: r } = Spicetify,
            { AdManagers: o } = a;
            
        if (!o?.audio || Object.keys(o).length === 0) {
            setTimeout(n, 100);
            return
        }
        
        const { audio: d } = o, { UserAPI: y } = a, u = y._product_state || y._product_state_service || a?.ProductStateAPI?.productStateApi, f = Spicetify.Platform.version.split(".").map(e => Number.parseInt(e));
        
        if (!Spicetify?.CosmosAsync) {
            setTimeout(n, 100);
            return
        }
        
        const { CosmosAsync: b } = Spicetify;
        let p = [];
        const g = getSlotsClient(s.functionModules, u.transport);
        
        if (g) p = (await g.getSlots()).adSlots;
        else try {
            p = await b.get("sp://ads/v1/slots")
        } catch {
            setTimeout(n, 100);
            return
        }
        
        const C = () => {
            const e = document.createElement("style"),
                t = r.get("upgrade.tooltip.title");
            e.className = "noAdsV7-css", e.innerHTML = `.Mvhjv8IKLGjQx94MVOgP, .sl_aPp6GDg05ItSfmsS7, .sl_aPp6GDg05ItSfmsS7, .nHCJskDZVlmDhNNS9Ixv, .utUDWsORU96S7boXm2Aq, .cpBP3znf6dhHLA2dywjy, .G7JYBeU1c2QawLyFs5VK, .vYl1kgf1_R18FCmHgdw2, .vZkc6VwrFz0EjVBuHGmx, .iVAZDcTm1XGjxwKlQisz, ._I_1HMbDnNlNAaViEnbp, .xXj7eFQ8SoDKYXy6L3E1, .F68SsPm8lZFktQ1lWsQz, .MnW5SczTcbdFHxLZ_Z8j, .WiPggcPDzbwGxoxwLWFf, .ReyA3uE3K7oEz7PTTnAn, .x8e0kqJPS0bM4dVK7ESH, .gZ2Nla3mdRREDCwybK6X, .SChMe0Tert7lmc5jqH01, .AwF4EfqLOIJ2xO7CjHoX, .UlkNeRDFoia4UDWtrOr4, .k_RKSQxa2u5_6KmcOoSw, ._mWmycP_WIvMNQdKoAFb, .O3UuqEx6ibrxyOJIdpdg, .akCwgJVf4B4ep6KYwrk5, .bIA4qeTh_LSwQJuVxDzl, .ajr9pah2nj_5cXrAofU_, .gvn0k6QI7Yl_A0u46hKn, .obTnuSx7ZKIIY1_fwJhe, .IiLMLyxs074DwmEH4x5b, .RJjM91y1EBycwhT_wH59, .mxn5B5ceO2ksvMlI1bYz, .l8wtkGVi89_AsA3nXDSR, .Th1XPPdXMnxNCDrYsnwb, .SJMBltbXfqUiByDAkUN_, .Nayn_JfAUsSO0EFapLuY, .YqlFpeC9yMVhGmd84Gdo, .HksuyUyj1n3aTnB4nHLd, .DT8FJnRKoRVWo77CPQbQ, ._Cq69xKZBtHaaeMZXIdk, .main-leaderboardComponent-container, .sponsor-container, a.link-subtle.main-navBar-navBarLink.GKnnhbExo0U9l7Jz2rdc, button[title="${t}"], button[aria-label="${t}"], .main-topBar-UpgradeButton, .main-contextMenu-menuItem a[href^="https://www.spotify.com/premium/"], div[data-testid*="hpto"] {display: none !important;}`, document.head.appendChild(e)
        };
        
        const k = async () => {
            try {
                await u.putOverridesValues({ pairs: { ads: "0", catalogue: "premium", product: "premium", type: "premium" } })
            } catch (e) {
                console.error("noAdsV7 Internal: Failed inside `disableAds` function\n", e)
            }
        };
        
        const S = async () => {
            try {
                const { billboard: e, leaderboard: t, sponsoredPlaylist: i } = o, l = getTestingClient(s.functionModules, u.transport);
                if (l ? l.addPlaytime({ seconds: -1e11 }) : await b.post("sp://ads/v1/testing/playtime", { value: -1e11 }), await d.disable(), d.isNewAdsNpvEnabled = !1, await e.disable(), await t?.disableLeaderboard(), await i.disable(), o?.inStreamApi) {
                    const { inStreamApi: c } = o;
                    await c.disable()
                }
                if (o?.vto) {
                    const { vto: c } = o;
                    await c.manager.disable(), c.isNewAdsNpvEnabled = !1
                }
                setTimeout(k, 100)
            } catch (e) {
                console.error("noAdsV7 Internal: Failed inside `configureAdManagers` function\n", e)
            }
        };
        
        const I = async () => {
            for (const e of p) M(e.slotId || e.slot_id), setTimeout(() => m({ adSlotEvent: { slotId: e.slotId || e.slot_id } }), 50)
        };
        
        const m = e => {
            const t = e?.adSlotEvent?.slotId;
            try {
                const i = d?.inStreamApi?.adsCoreConnector;
                typeof i?.clearSlot == "function" && i.clearSlot(t);
                const l = getSlotsClient(s.functionModules, u.transport);
                l && l.clearAllAds({ slotId: t }), w(t)
            } catch (i) {
                if (console.error("noAdsV7 Internal: Failed inside `handleAdSlot` function. Retrying in 1 second...\n", i), retryCounter(t, "increment"), retryCounter(t, "get") > 5) {
                    console.error(`noAdsV7 Internal: Failed inside \`handleAdSlot\` function for 5th time. Giving up... Slot id: ${t}.`), retryCounter(t, "clear");
                    return
                }
                setTimeout(m, 1 * 1e3, e)
            }
            S()
        };
        
        const w = async e => {
            try {
                const t = getSettingsClient(s.cache, s.functionModules, u.transport);
                if (!t) return;
                const i = f[0] === 1 && f[1] >= 2 && f[2] >= 82 ? 0n : "0";
                await t.updateAdServerEndpoint({ slotIds: [e], url: "http://localhost/no/thanks" }), await t.updateStreamTimeInterval({ slotId: e, timeInterval: i }), await t.updateSlotEnabled({ slotId: e, enabled: !1 }), await t.updateDisplayTimeInterval({ slotId: e, timeInterval: i })
            } catch (t) {
                console.error("noAdsV7 Internal: Failed inside `updateSlotSettings` function\n", t)
            }
        };
        
        const E = async () => {
            for (const e of p) w(e.slotId || e.slot_id)
        };
        
        const M = e => {
            try {
                d.inStreamApi.adsCoreConnector.subscribeToSlot(e, m)
            } catch (t) {
                console.error("noAdsV7 Internal: Failed inside `subToSlot` function\n", t)
            }
        };
        
        const _ = () => {
            const e = Array.from(document.querySelectorAll(".ReactModalPortal")),
                t = new MutationObserver(i => {
                    for (const l of i)
                        if (l.addedNodes.length) {
                            const c = l.addedNodes[0];
                            if (!c.classList.contains("GenericModal__overlay")) continue;
                            const A = c.querySelector("iframe");
                            if (!A) continue;
                            const h = A?.contentWindow?.document.body;
                            if (!h || !h.querySelector("[data-click-to-action-url*='/premium-promotional-offer-terms']")) continue;
                            c.remove()
                        }
                });
            for (const i of e) t.observe(i, { childList: !0 })
        };
        
        const v = async () => {
            try {
                const e = JSON.parse(localStorage.getItem("spicetify-exp-features") || "{}");
                typeof e?.enableEsperantoMigration?.value < "u" && (e.enableEsperantoMigration.value = !0), typeof e?.enableInAppMessaging?.value < "u" && (e.enableInAppMessaging.value = !1), typeof e?.hideUpgradeCTA?.value < "u" && (e.hideUpgradeCTA.value = !0), typeof e?.enablePremiumUserForMiniPlayer?.value < "u" && (e.enablePremiumUserForMiniPlayer.value = !0), localStorage.setItem("spicetify-exp-features", JSON.stringify(e));
                const t = { enableEsperantoMigration: !0, enableInAppMessaging: !1, hideUpgradeCTA: !0, enablePremiumUserForMiniPlayer: !0 };
                if (Spicetify?.RemoteConfigResolver) {
                    const i = Spicetify.createInternalMap(t);
                    Spicetify.RemoteConfigResolver.value.setOverrides(i)
                } else if (Spicetify.Platform?.RemoteConfigDebugAPI) {
                    const i = Spicetify.Platform.RemoteConfigDebugAPI;
                    for (const [l, c] of Object.entries(t)) await i.setOverride({ source: "web", type: "boolean", name: l }, c)
                }
            } catch (e) {
                console.error("noAdsV7 Internal: Failed inside `enableExperimentalFeatures` function\n", e)
            }
        };
        
        I();
        C();
        u.subValues({ keys: ["ads", "catalogue", "product", "type"] }, () => S());
        v();
        setTimeout(v, 3 * 1e3);
        setTimeout(E, 5 * 1e3);
    }
    
    n();
})();


// ============================================================================
// PARTE 2: IL VISUAL SHIELD
// Gestisce Badge, Pulizia Grafica e Skip-Lock
// ============================================================================
(function noAdsVisualV7() {
    console.log("🚀 noAdsV7: Avvio Visual Shield...");

    // 1. ATTESA PIATTAFORMA
    if (!Spicetify.Platform || !Spicetify.Player) {
        setTimeout(noAdsVisualV7, 300);
        return;
    }

    // 2. VISUAL: BADGE FIXED (Aggiornato "GOD MODE")
    const createBadge = () => {
        if (document.getElementById("noAds-indicator")) return;
        const badge = document.createElement("div");
        badge.id = "noAds-indicator";
        badge.innerText = "🛡️ noAds GOD MODE"; 
        badge.style = `
            position: fixed;
            top: 15px;
            right: 180px; 
            background-color: rgba(0, 0, 0, 0.85); 
            backdrop-filter: blur(5px);
            border: 1px solid #00ff41; 
            border-radius: 20px;
            padding: 4px 15px;
            color: #00ff41; 
            font-family: 'Courier New', monospace; 
            font-weight: bold;
            font-size: 11px;
            z-index: 999999 !important; 
            pointer-events: none;
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
            text-transform: uppercase;
            letter-spacing: 1px;
        `;
        document.body.appendChild(badge);
    };

    // 3. LOGICA AUDIO (Skip-Lock)
    const checkAndSkip = () => {
        const data = Spicetify.Player.data;
        if (!data || !data.track) return;
        const meta = data.track.metadata;
        if (meta.is_advertisement === "true" || (data.restrictions && data.restrictions.disallow_skipping_next)) {
            console.log("🛡️ noAdsV7: AD RILEVATA! Skipping...");
            Spicetify.Player.setVolume(0);
            Spicetify.Player.seek(Spicetify.Player.getDuration());
            setTimeout(() => Spicetify.Player.setVolume(1), 1000);
        }
    };

    // 4. PULIZIA TOTALE (HPTO + SPONSORIZZATI + PREMIUM)
    const cleanInterface = () => {
        const targets = [
            '[data-testid="hpto-parent-container"]', // Banner Gigante
            '[data-testid="home-ad-container"]',
            '[aria-label="Advertisement"]',
            '.GenericModal__overlay',
            
            // Bottoni Premium
            'button[title="Effettua l\'upgrade a Premium"]',
            'button[aria-label="Effettua l\'upgrade a Premium"]',
            '[aria-label="Esplora Premium"]',
            '[title="Esplora Premium"]'
        ];

        targets.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => el.remove());
        });

        // Pulizia scritte "Sponsorizzato" e "Annunci recenti"
        const allElements = document.querySelectorAll('button, span, div, h2');
        allElements.forEach(el => {
            if (!el.innerText) return;
            
            if (el.innerText === "Sponsorizzato" || el.innerText.includes("Annunci recenti")) {
                let container = el.closest('[data-testid="hpto-parent-container"]') || el.closest('section');
                if (container) container.remove();
                else el.remove();
            }
            
            // Doppio controllo sui bottoni Premium
            if (el.tagName === 'BUTTON' && (el.innerText === "Esplora Premium" || el.innerText.includes("Effettua l'upgrade"))) {
                el.remove();
            }
        });
    };

    // 5. ATTIVAZIONE
    setInterval(createBadge, 1000);
    setInterval(cleanInterface, 500); 
    
    Spicetify.Player.addEventListener("onprogress", (e) => {
        if (e.data < 1000) checkAndSkip(); 
    });
    Spicetify.Player.addEventListener("songchange", checkAndSkip);

})();
