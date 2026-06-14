// ============================================
// PDF BUILDER — Familie und Kultur (Conversație B1-B2)
// Claudia Toth · model PDF MODEL TV1
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildTheory() + buildDialog() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#F5F0E8[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#ecfdf5[^"]*"[^>]*>/g, '<div class="theory-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        return `<h1 class="chapter">📘 1. Teorie — Familie und Kultur</h1>` + t;
    }

    function buildDialog() {
        if (typeof dialog1Data === 'undefined') return '';
        let html = `<h1 class="chapter new-section">🎬 2. Dialog — ${dialog1Data.title}</h1>`;
        html += `<div class="dlg-context"><strong>📍 Situația:</strong> ${dialog1Data.context}</div>`;
        dialog1Data.replici.forEach(r => {
            const sp = r.speaker === 'andreea' ? 'Andreea 🇷🇴' : 'Kenji 🇯🇵';
            html += `<div class="dlg-line ${r.speaker}"><span class="sp">${sp}:</span> <span class="de">${r.de}</span><br><span class="ro">${r.ro}</span></div>`;
        });
        return html;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 3. Exerciții — cu rezolvări complete</h1>`;

        html += `<div class="ex-block"><h3>Übung 1 — Lückentext</h3><div class="rezolvare-banner">✓ Rezolvare</div>`;
        if (typeof ex1Items !== 'undefined') ex1Items.forEach((it, i) => { html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${it.before} <strong>[ ${it.answer} ]</strong> ${it.after}</div><div class="ex-a">${it.answer}</div></div></div>`; });
        html += `</div>`;

        html += `<div class="ex-block"><h3>Übung 2 — Expresii idiomatice (potrivește)</h3><div class="rezolvare-banner">✓ Rezolvare</div><table><thead><tr><th style="width:50%">🇩🇪 Redewendung</th><th>🇷🇴 Înțeles</th></tr></thead><tbody>`;
        if (typeof ex2Pairs !== 'undefined') ex2Pairs.forEach(p => { html += `<tr><td class="verb">${p.de}</td><td class="ro-text">${p.ro}</td></tr>`; });
        html += `</tbody></table></div>`;

        html += `<div class="ex-block"><h3>Übung 3 — Vocabular (potrivește DE ↔ RO)</h3><div class="rezolvare-banner">✓ Rezolvare</div><table><thead><tr><th style="width:45%">🇩🇪 Wort</th><th>🇷🇴 Traducere</th></tr></thead><tbody>`;
        if (typeof ex3Pairs !== 'undefined') ex3Pairs.forEach(p => { html += `<tr><td class="verb">${p.de}</td><td class="ro-text">${p.ro}</td></tr>`; });
        html += `</tbody></table></div>`;

        html += `<div class="ex-block"><h3>Übung 4 — Textverstehen (înțelegerea dialogului)</h3><div class="rezolvare-banner">✓ Rezolvare</div>`;
        if (typeof ex4Items !== 'undefined') ex4Items.forEach((it, i) => { html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${it.q}</div><div class="ex-a">${it.options[it.correct]}</div><div class="ex-explanation">${it.explanation}</div></div></div>`; });
        html += `</div>`;

        html += `<div class="ex-block"><h3>Übung 5 — Producere & Reflecție (scriere liberă)</h3>
            <div class="instruction">Creează un dialog de minim 10 replici (5 fraze + 2 cuvinte + 1 expresie idiomatică) și scrie o reflecție de 5-8 propoziții. Trimite textul Claudiei pentru corectare personală.</div></div>`;

        return html;
    }

    function buildFlashcards() {
        let html = `<h1 class="chapter new-section">📇 4. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:14px">Cele <strong>${typeof flashcardsData !== 'undefined' ? flashcardsData.length : 0} de carduri</strong>: vocabular, expresii idiomatice și fraze utile.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') flashcardsData.forEach(c => { html += `<div class="fc-row"><span class="de">${c.de}</span><span class="ro">— ${c.ro}</span></div>`; });
        html += `</div>`;
        return html;
    }

    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 5. Verb-Konjugation — verbe tematice</h1>
            <div class="theory-box warn-box"><p><strong>📌 Reamintire:</strong> Präteritum = IMPERFECT (transmitea, se schimba). Perfekt = perfect compus. Prefixele be-/ver- → Perfekt FĂRĂ ge-.</p></div>`;
        if (typeof verbsData !== 'undefined') verbsData.forEach((v, idx) => {
            const typeBadge = v.type === 'strong' ? '<span class="badge strong">TARE (neregulat)</span>' : '<span class="badge weak">REGULAT</span>';
            const auxBadge = v.aux === 'sein' ? '<span class="badge sein">Perfekt + sein</span>' : '<span class="badge haben">Perfekt + haben</span>';
            html += `<div class="verb-card"><div class="vh"><span class="name">${idx + 1}. ${v.infinitiv}</span><span class="ro">— ${v.ro}</span>${typeBadge}${auxBadge}</div>
                <h5>Präsens</h5><table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>`;
            v.praesens.forEach(r => { html += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
            html += `</tbody></table><h5>Präteritum (imperfect / timp scris)</h5><table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>`;
            v.praeteritum.forEach(r => { html += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
            html += `</tbody></table><h5>Perfekt (timp vorbit)</h5><div class="perfekt-box"><div class="de">${v.perfekt}</div><div class="ro">${v.perfektRo}</div></div>
                <div class="note"><strong>📌 Notă:</strong> ${v.notes}</div></div>`;
        });
        return html;
    }
})();
