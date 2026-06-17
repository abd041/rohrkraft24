/* =====================================================
   ROHRKRAFT24 – Interactive Germany Map
   Flow: Deutschland → Hessen → Stadt → Keywords
   ===================================================== */

(function () {
    'use strict';

    // ─── Externe Karte laden, dann initialisieren ───────────────────────────
    // Das ~78KB-SVG liegt cachebar unter /germany-map.svg statt inline auf jeder Seite.
    const container = document.getElementById('mapSvgContainer');
    if (container && container.getAttribute('data-map-src') && !document.getElementById('mapSvg')) {
        fetch(container.getAttribute('data-map-src'))
            .then(function (r) { return r.ok ? r.text() : Promise.reject(r.status); })
            .then(function (svgText) {
                container.innerHTML = svgText;
                // Aktiven Stadt-Dot markieren (vorher serverseitig pro Seite gerendert)
                var slug = container.getAttribute('data-current-slug');
                if (slug) {
                    var dot = container.querySelector('.city-dot[data-slug="' + slug + '"]');
                    if (dot) {
                        var core = dot.querySelector('.dot-core');
                        if (core) {
                            var extra = core.cloneNode(true);
                            extra.setAttribute('class', 'dot-pulse dot-pulse-2');
                            extra.setAttribute('r', '10');
                            extra.setAttribute('opacity', '0.2');
                            dot.insertBefore(extra, core);
                        }
                    }
                }
                init();
            })
            .catch(function () { init(); }); /* Karte optional – Stadt-Links müssen trotzdem binden */
    } else {
        init();
    }

    function init() {

    const svg          = document.getElementById('mapSvg');
    const stateHessen  = document.getElementById('stateHessen');
    const cityDots     = document.getElementById('cityDots');
    const backBtn      = document.getElementById('mapBackBtn');
    const stateBadge   = document.getElementById('mapStateBadge');
    const stateName    = document.getElementById('mapStateName');
    const stateCount   = document.getElementById('mapStateCount');
    const panelOverview = document.getElementById('mapPanelOverview');
    const panelHessen   = document.getElementById('mapPanelHessen');
    const panelCity     = document.getElementById('mapPanelCity');
    const mapCityLabel  = document.getElementById('mapCityLabel');
    const mapCityTitle  = document.getElementById('mapCityTitle');
    const mapCityKws    = document.getElementById('mapCityKeywords');
    const backToCities  = document.getElementById('mapBackToCities');

    // Karte vorhanden? Wenn nicht (Fetch fehlgeschlagen / file://), laufen nur die
    // Stadt-Listen-Links – die SVG-Interaktion wird übersprungen, nicht abgebrochen.
    var hasMap = !!(svg && stateHessen);

    // ─── Read keyword context from map wrapper ───────────────────────────────
    const mapWrapper    = document.querySelector('.map-wrapper');
    const pageKeyword   = mapWrapper ? mapWrapper.getAttribute('data-keyword') : null;

    // ─── All 8 service keywords ─────────────────────────────────────────────
    const KEYWORDS = [
        { label: 'Rohrreinigung',           slug: 'rohrreinigung' },
        { label: 'TV-Kamera-Inspektion',    slug: 'kamera-inspektion' },
        { label: 'Rohrreparatur',           slug: 'rohrreparatur' },
        { label: 'Leckageortung',           slug: 'leckageortung' },
        { label: 'Abwasserreinigung',        slug: 'abwasserreinigung' },
        { label: 'Hebeanlagen-Service',      slug: 'hebeanlage-wartung' },
        { label: 'Sanitärarbeiten',          slug: 'sanitaerarbeiten' },
        { label: 'Wasserschaden',           slug: 'wasserschaden' },
        { label: '24h Notdienst',           slug: 'notdienst' },
    ];

    const chevronSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>';

    let isZoomed = false;
    const DEFAULT_VIEWBOX = { x: 0, y: 0, w: 585.5141, h: 792.66785 };

    // ─── SVG ViewBox Animation ──────────────────────────────────────────────
    function animateViewBox(from, to, duration) {
        const startTime = performance.now();
        function lerp(a, b, t) { return a + (b - a) * t; }
        function easeInOut(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
        function step(now) {
            const t = easeInOut(Math.min((now - startTime) / duration, 1));
            svg.setAttribute('viewBox',
                lerp(from.x,to.x,t) + ' ' + lerp(from.y,to.y,t) + ' ' + lerp(from.w,to.w,t) + ' ' + lerp(from.h,to.h,t));
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // ─── Level 1 → 2: Zoom to Hessen ───────────────────────────────────────
    function zoomToHessen() {
        if (isZoomed) return;
        isZoomed = true;

        var bbox = stateHessen.getBBox();
        var pad  = 20;
        animateViewBox(DEFAULT_VIEWBOX, {
            x: bbox.x - pad, y: bbox.y - pad,
            w: bbox.width + pad * 2, h: bbox.height + pad * 2
        }, 700);

        stateHessen.classList.add('active');
        setTimeout(function() {
            cityDots.classList.remove('city-dots-hidden');
            cityDots.classList.add('city-dots-visible');
        }, 450);
        setTimeout(function() {
            backBtn.classList.add('visible');
            stateName.textContent  = 'Berlin & Umgebung';
            stateCount.textContent = '· ' + cityDots.querySelectorAll('.city-dot').length + ' Standorte';
            stateBadge.classList.add('visible');
        }, 200);

        panelOverview.style.display = 'none';
        if (panelCity) panelCity.style.display = 'none';
        panelHessen.style.display   = 'flex';
    }

    // ─── Back to Deutschland ────────────────────────────────────────────────
    function zoomToGermany() {
        if (!isZoomed) return;
        isZoomed = false;

        var parts = svg.getAttribute('viewBox').split(' ').map(parseFloat);
        animateViewBox({ x: parts[0], y: parts[1], w: parts[2], h: parts[3] }, DEFAULT_VIEWBOX, 600);

        stateHessen.classList.remove('active');
        cityDots.classList.remove('city-dots-visible');
        cityDots.classList.add('city-dots-hidden');
        backBtn.classList.remove('visible');
        stateBadge.classList.remove('visible');

        panelHessen.style.display   = 'none';
        if (panelCity) panelCity.style.display = 'none';
        panelOverview.style.display = 'flex';
    }

    // ─── Level 2 → 3: Show city keyword panel (or navigate directly) ────────
    function showCityPanel(citySlug, cityName) {
        // On keyword pages: navigate directly, no panel
        if (pageKeyword) {
            window.location.href = '/' + pageKeyword + '-' + citySlug + '/';
            return;
        }

        if (!panelCity || !mapCityLabel || !mapCityTitle || !mapCityKws) return;

        mapCityLabel.textContent = cityName;
        mapCityTitle.textContent = 'Leistungen in ' + cityName;

        mapCityKws.innerHTML = KEYWORDS.map(function(kw) {
            return '<li><a href="/' + kw.slug + '-' + citySlug + '/" class="map-kw-link">' +
                chevronSvg + '<span>' + kw.label + ' ' + cityName + '</span></a></li>';
        }).join('');

        panelHessen.style.display = 'none';
        panelCity.style.display   = 'flex';

        // Highlight active dot (nur wenn Karte geladen)
        if (cityDots) {
            cityDots.querySelectorAll('.city-dot--active').forEach(function(d) { d.classList.remove('city-dot--active'); });
            var dot = cityDots.querySelector('.city-dot[data-slug="' + citySlug + '"]');
            if (dot) dot.classList.add('city-dot--active');
        }
    }

    // ─── Level 3 → 2: Back to city list ────────────────────────────────────
    if (backToCities) {
        backToCities.addEventListener('click', function() {
            if (panelCity) panelCity.style.display = 'none';
            if (panelHessen) panelHessen.style.display = 'flex';
            if (cityDots) cityDots.querySelectorAll('.city-dot--active').forEach(function(d) { d.classList.remove('city-dot--active'); });
        });
    }

    // ─── City dot clicks → open keyword panel ───────────────────────────────
    if (cityDots) {
        cityDots.querySelectorAll('.city-dot').forEach(function(dot) {
            dot.addEventListener('click', function() {
                var slug = dot.getAttribute('data-slug');
                var name = dot.getAttribute('data-city');
                if (slug && name) showCityPanel(slug, name);
            });

            dot.addEventListener('mouseenter', function(e) {
                showTooltip(dot.getAttribute('data-city'), e);
                var btn = document.querySelector('.map-city-link[data-slug="' + dot.getAttribute('data-slug') + '"]');
                if (btn) btn.classList.add('map-city-link--active');
            });

            dot.addEventListener('mouseleave', function() {
                hideTooltip();
                document.querySelectorAll('.map-city-link--active').forEach(function(l) { l.classList.remove('map-city-link--active'); });
            });
        });
    }

    // ─── City list buttons → open keyword panel ─────────────────────────────
    document.querySelectorAll('.map-city-link[data-slug]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            showCityPanel(btn.getAttribute('data-slug'), btn.getAttribute('data-city'));
        });

        btn.addEventListener('mouseenter', function() {
            var dot = cityDots && cityDots.querySelector('.city-dot[data-slug="' + btn.getAttribute('data-slug') + '"]');
            if (dot) dot.classList.add('city-dot--active');
        });

        btn.addEventListener('mouseleave', function() {
            if (cityDots) cityDots.querySelectorAll('.city-dot--active').forEach(function(d) { d.classList.remove('city-dot--active'); });
        });
    });

    // ─── Panel navigation buttons ───────────────────────────────────────────
    var hessenStateBtn = document.getElementById('hessenStateBtn');
    if (hessenStateBtn) hessenStateBtn.addEventListener('click', zoomToHessen);

    var backToStates = document.getElementById('mapBackToStates');
    if (backToStates) backToStates.addEventListener('click', zoomToGermany);

    if (hasMap) {
        stateHessen.addEventListener('click', function() { isZoomed ? zoomToGermany() : zoomToHessen(); });
        if (backBtn) backBtn.addEventListener('click', zoomToGermany);

        stateHessen.addEventListener('touchend', function(e) { e.preventDefault(); isZoomed ? zoomToGermany() : zoomToHessen(); });
        if (backBtn) backBtn.addEventListener('touchend', function(e) { e.preventDefault(); zoomToGermany(); });

        document.querySelectorAll('.state-path:not(.state-hessen)').forEach(function(path) {
            path.addEventListener('click', function() {
                if (!isZoomed) {
                    stateHessen.style.filter = 'drop-shadow(0 0 12px rgba(249,115,22,0.6))';
                    setTimeout(function() { stateHessen.style.filter = ''; }, 600);
                }
            });
        });
    }

    // ─── Tooltip ────────────────────────────────────────────────────────────
    var tooltip = null;

    function showTooltip(text, event) {
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'city-dot-label';
            document.body.appendChild(tooltip);
        }
        tooltip.textContent = text;
        tooltip.style.opacity = '1';
        positionTooltip(event);
    }

    function hideTooltip() {
        if (tooltip) tooltip.style.opacity = '0';
    }

    function positionTooltip(event) {
        if (!tooltip) return;
        tooltip.style.left     = (event.clientX + 12) + 'px';
        tooltip.style.top      = (event.clientY - 36) + 'px';
        tooltip.style.position = 'fixed';
    }

    document.addEventListener('mousemove', function(e) {
        if (tooltip && tooltip.style.opacity === '1') positionTooltip(e);
    });

    // ─── Auto-zoom disabled – Berlin city list shown by default ─────────────
    // if (hasMap) setTimeout(zoomToHessen, 300);

    } // end init()

})();
