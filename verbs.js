// ============================================
// VERB-KONJUGATION - Familie und Kultur (Conversație B1-B2)
// Claudia Toth · verbe tematice · PONS-verified
// Präteritum = IMPERFECT. Perfekt = timp vorbit.
// ============================================

const verbsData = [
    {
        infinitiv: 'sich austauschen', ro: 'a face schimb (de idei)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'tausche mich aus', ro: 'fac schimb' },
            { p: 'du', f: 'tauschst dich aus', ro: 'faci schimb' },
            { p: 'er/sie/es', f: 'tauscht sich aus', ro: 'face schimb' },
            { p: 'wir', f: 'tauschen uns aus', ro: 'facem schimb' },
            { p: 'ihr', f: 'tauscht euch aus', ro: 'faceți schimb' },
            { p: 'sie/Sie', f: 'tauschen sich aus', ro: 'fac / faceți schimb' }
        ],
        praeteritum: [
            { p: 'ich', f: 'tauschte mich aus', ro: 'făceam schimb' },
            { p: 'du', f: 'tauschtest dich aus', ro: 'făceai schimb' },
            { p: 'er/sie/es', f: 'tauschte sich aus', ro: 'făcea schimb' },
            { p: 'wir', f: 'tauschten uns aus', ro: 'făceam schimb (noi)' },
            { p: 'ihr', f: 'tauschtet euch aus', ro: 'făceați schimb' },
            { p: 'sie/Sie', f: 'tauschten sich aus', ro: 'făceau schimb' }
        ],
        perfekt: 'er hat sich ausgetauscht', perfektRo: 'a făcut schimb (de idei)',
        notes: 'Verb regulat, reflexiv (sich) + separabil (aus-). „sich über etwas austauschen" = a discuta/schimba păreri despre ceva. Perfekt cu HABEN, -ge- între prefix și rădăcină: aus-ge-tauscht.'
    },
    {
        infinitiv: 'bewahren', ro: 'a păstra', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'bewahre', ro: 'păstrez' },
            { p: 'du', f: 'bewahrst', ro: 'păstrezi' },
            { p: 'er/sie/es', f: 'bewahrt', ro: 'păstrează' },
            { p: 'wir', f: 'bewahren', ro: 'păstrăm' },
            { p: 'ihr', f: 'bewahrt', ro: 'păstrați' },
            { p: 'sie/Sie', f: 'bewahren', ro: 'păstrează / păstrați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'bewahrte', ro: 'păstram' },
            { p: 'du', f: 'bewahrtest', ro: 'păstrai' },
            { p: 'er/sie/es', f: 'bewahrte', ro: 'păstra' },
            { p: 'wir', f: 'bewahrten', ro: 'păstram (noi)' },
            { p: 'ihr', f: 'bewahrtet', ro: 'păstrați' },
            { p: 'sie/Sie', f: 'bewahrten', ro: 'păstrau' }
        ],
        perfekt: 'er hat bewahrt', perfektRo: 'a păstrat',
        notes: 'Verb regulat cu prefix NEseparabil be- → Perfekt FĂRĂ „ge-": bewahrt (NU gebewahrt). „Werte/Traditionen bewahren" = a păstra valori/tradiții.'
    },
    {
        infinitiv: 'vermitteln', ro: 'a transmite / a media', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'vermittle', ro: 'transmit' },
            { p: 'du', f: 'vermittelst', ro: 'transmiți' },
            { p: 'er/sie/es', f: 'vermittelt', ro: 'transmite' },
            { p: 'wir', f: 'vermitteln', ro: 'transmitem' },
            { p: 'ihr', f: 'vermittelt', ro: 'transmiteți' },
            { p: 'sie/Sie', f: 'vermitteln', ro: 'transmit / transmiteți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'vermittelte', ro: 'transmiteam' },
            { p: 'du', f: 'vermitteltest', ro: 'transmiteai' },
            { p: 'er/sie/es', f: 'vermittelte', ro: 'transmitea' },
            { p: 'wir', f: 'vermittelten', ro: 'transmiteam (noi)' },
            { p: 'ihr', f: 'vermitteltet', ro: 'transmiteați' },
            { p: 'sie/Sie', f: 'vermittelten', ro: 'transmiteau' }
        ],
        perfekt: 'er hat vermittelt', perfektRo: 'a transmis',
        notes: 'Verb regulat cu prefix NEseparabil ver- → Perfekt FĂRĂ „ge-": vermittelt. „Werte vermitteln" = a transmite valori (copiilor).'
    },
    {
        infinitiv: 'sich verändern', ro: 'a se schimba', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'verändere mich', ro: 'mă schimb' },
            { p: 'du', f: 'veränderst dich', ro: 'te schimbi' },
            { p: 'er/sie/es', f: 'verändert sich', ro: 'se schimbă' },
            { p: 'wir', f: 'verändern uns', ro: 'ne schimbăm' },
            { p: 'ihr', f: 'verändert euch', ro: 'vă schimbați' },
            { p: 'sie/Sie', f: 'verändern sich', ro: 'se schimbă / vă schimbați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'veränderte mich', ro: 'mă schimbam' },
            { p: 'du', f: 'verändertest dich', ro: 'te schimbai' },
            { p: 'er/sie/es', f: 'veränderte sich', ro: 'se schimba' },
            { p: 'wir', f: 'veränderten uns', ro: 'ne schimbam' },
            { p: 'ihr', f: 'verändertet euch', ro: 'vă schimbați' },
            { p: 'sie/Sie', f: 'veränderten sich', ro: 'se schimbau' }
        ],
        perfekt: 'es hat sich verändert', perfektRo: 's-a schimbat',
        notes: 'Verb regulat, reflexiv, prefix NEseparabil ver- → Perfekt FĂRĂ „ge-": verändert. „Die Rollenverteilung hat sich verändert."'
    },
    {
        infinitiv: 'prägen', ro: 'a marca / a modela', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'präge', ro: 'marchez / modelez' },
            { p: 'du', f: 'prägst', ro: 'marchezi' },
            { p: 'er/sie/es', f: 'prägt', ro: 'marchează' },
            { p: 'wir', f: 'prägen', ro: 'marcăm' },
            { p: 'ihr', f: 'prägt', ro: 'marcați' },
            { p: 'sie/Sie', f: 'prägen', ro: 'marchează / marcați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'prägte', ro: 'marcam' },
            { p: 'du', f: 'prägtest', ro: 'marcai' },
            { p: 'er/sie/es', f: 'prägte', ro: 'marca' },
            { p: 'wir', f: 'prägten', ro: 'marcam (noi)' },
            { p: 'ihr', f: 'prägtet', ro: 'marcați' },
            { p: 'sie/Sie', f: 'prägten', ro: 'marcau' }
        ],
        perfekt: 'er hat geprägt', perfektRo: 'a marcat / a modelat',
        notes: 'Verb regulat, fără prefix → Perfekt CU „ge-": geprägt. „Werte prägen das Leben" = valorile modelează viața.'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#F5F0E8;border-left:4px solid #D4A574">
            <h4>📌 Verbe tematice pentru a vorbi despre familie</h4>
            <p>Toate cinci sunt <strong>REGULATE</strong>. Atenție la prefixele neseparabile <strong>be-/ver-</strong> → Perfekt FĂRĂ „ge-" (bewahrt, vermittelt, verändert).</p>
            <p style="margin-top:8px"><strong>Reamintire:</strong> Präteritum = IMPERFECT (transmitea, se schimba). Perfekt = perfect compus (a transmis).</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const auxColor = v.aux === 'sein' ? '#D4A574' : '#10b981';
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'TARE (neregulat)' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        let praeteritumRows = ''; v.praeteritum.forEach(r => { praeteritumRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                        <span style="background:${auxColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:4px">Perfekt + ${v.aux}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📗 Präteritum (imperfect / timp scris)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praeteritumRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📕 Perfekt (timp vorbit)</h4>
                    <div class="example-box"><div class="de">${v.perfekt}</div><div class="ro">${v.perfektRo}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#FBF7EF"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
