// ============================================
// EXERCIȚII - Familie und Kultur (Conversație B1-B2)
// Claudia Toth · 4 exerciții gradate + producere liberă (sursă: fișa proprie © 2026)
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
// ===== click-match =====
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}
// ===== multiple-choice =====
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}

// ============================================
// EX1: Lückentext (8 goluri)
// ============================================
const ex1Items = [
    { id: 'a', before: 'In traditionellen Gesellschaften war die', after: 'üblich – Großeltern, Eltern und Kinder lebten zusammen.', answer: 'Großfamilie' },
    { id: 'b', before: 'Der gesellschaftliche', after: 'hat das Familienbild stark beeinflusst.', answer: 'Wandel' },
    { id: 'c', before: 'Die', after: 'zwischen Mann und Frau hat sich sehr verändert.', answer: 'Rollenverteilung' },
    { id: 'd', before: 'Jede Familie vermittelt ihren Kindern bestimmte', after: ', die das Leben prägen.', answer: 'Werte' },
    { id: 'e', before: 'Der familiäre', after: 'ist besonders in Krisenzeiten sehr wichtig.', answer: 'Zusammenhalt' },
    { id: 'f', before: 'Die', after: 'der Kinder unterscheidet sich je nach Kultur.', answer: 'Erziehung' },
    { id: 'g', before: 'Heute ist', after: 'in vielen Ländern gesetzlich verankert.', answer: 'Gleichberechtigung' },
    { id: 'h', before: 'Wenn Eltern und Kinder andere Werte haben, entsteht oft ein', after: '.', answer: 'Generationskonflikt' }
];
function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>✍️ Completează cu cuvântul potrivit.</strong><br>Cuvinte: <em>Zusammenhalt · Rollenverteilung · Werte · Erziehung · Wandel · Großfamilie · Gleichberechtigung · Generationskonflikt</em></div>`;
    ex1Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.before} <input type="text" id="ex1-${item.id}" placeholder="..." style="width:200px;display:inline-block;"> ${item.after}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx1() { return checkTextItems(ex1Items, 'ex1'); }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Redewendungen zuordnen (match)
// ============================================
const ex2Pairs = [
    { de: 'Das ist Schnee von gestern.', ro: 'Asta e veche / nu mai e relevantă.' },
    { de: 'Da beißt die Maus keinen Faden ab.', ro: 'Nu se poate schimba nimic.' },
    { de: 'Da geht mir ein Licht auf.', ro: 'Înțeleg ceva brusc.' },
    { de: 'Nicht alles, was glänzt, ist Gold.', ro: 'Nu tot ce arată bine e valoros.' },
    { de: 'Man soll den Tag nicht vor dem Abend loben.', ro: 'Nu te bucura prea devreme!' }
];
function buildEx2() { buildClickMatch('ex2', ex2Pairs, '<strong>💬 Potrivește expresia idiomatică cu înțelesul.</strong><br>Click pe expresie, apoi pe înțelesul corect.', '🇩🇪 Redewendung', '🇷🇴 Înțeles'); }
function checkEx2() { const s = dmState['ex2']; return { correct: Object.keys(s.matched).length, total: ex2Pairs.length }; }
function resetEx2() { buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Vocabular match (DE ↔ RO)
// ============================================
const ex3Pairs = [
    { de: 'die Kernfamilie', ro: 'familia nucleu' },
    { de: 'die Großfamilie', ro: 'familia extinsă' },
    { de: 'die Erziehung', ro: 'educația / creșterea' },
    { de: 'der Zusammenhalt', ro: 'coeziunea' },
    { de: 'die Gleichberechtigung', ro: 'egalitatea de gen' },
    { de: 'der Wandel', ro: 'schimbarea' },
    { de: 'die Geborgenheit', ro: 'sentimentul de siguranță' },
    { de: 'der Generationskonflikt', ro: 'conflictul dintre generații' },
    { de: 'die Rollenverteilung', ro: 'distribuția rolurilor' },
    { de: 'die Werte', ro: 'valorile' }
];
function buildEx3() { buildClickMatch('ex3', ex3Pairs, '<strong>📖 Potrivește cuvântul german cu traducerea.</strong><br>Click pe termen, apoi pe traducerea corectă.', '🇩🇪 Wort', '🇷🇴 Traducere'); }
function checkEx3() { const s = dmState['ex3']; return { correct: Object.keys(s.matched).length, total: ex3Pairs.length }; }
function resetEx3() { buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Textverstehen (din dialog) — multiple choice
// ============================================
const ex4Items = [
    { id: 'a', q: 'Wie beschreibt Andreea die Familie in Rumänien?', options: ['Die Kernfamilie ist am wichtigsten.', 'Die Großfamilie ist immer noch sehr wichtig.', 'Familie spielt keine Rolle mehr.', 'Alle leben allein.'], correct: 1, explanation: 'Andreea: „die Großfamilie ist immer noch sehr wichtig" — casa bunicii plină de oameni.' },
    { id: 'b', q: 'Was hat sich laut Kenji in Japan verändert?', options: ['Nichts hat sich verändert.', 'Die Sprache.', 'Die Rollenverteilung / das Zusammenleben der Generationen.', 'Das Essen.'], correct: 2, explanation: 'Kenji: das Zusammenleben war „gang und gäbe", aber „die Rollenverteilung hat sich sehr verändert".' },
    { id: 'c', q: 'Welche Redewendung benutzt Andreea für etwas, das nicht mehr aktuell ist?', options: ['Da geht mir ein Licht auf.', 'Schnee von gestern.', 'Nicht alles, was glänzt, ist Gold.', 'Den Tag nicht vor dem Abend loben.'], correct: 1, explanation: '„Das ist heute Schnee von gestern" = nu mai e actual.' },
    { id: 'd', q: 'Was bedeutet „Da geht mir ein Licht auf"?', options: ['Ich bin müde.', 'Ich verstehe etwas plötzlich.', 'Ich bin wütend.', 'Ich habe keine Zeit.'], correct: 1, explanation: 'Kenji înțelege brusc perspectiva Andreei → „mi-a picat fisa".' },
    { id: 'e', q: 'Was ist die gemeinsame Schlussfolgerung der beiden?', options: ['Tradition ist immer besser.', 'Modernität ist immer besser.', 'Eine Balance zwischen Modernität und Tradition ist wichtig.', 'Familie ist unwichtig.'], correct: 2, explanation: 'Ambii ajung la ideea de echilibru: modernizarea aduce libertate, dar și singurătate.' }
];
function buildEx4() { buildMC('ex4', ex4Items, '<strong>🎯 Înțelegerea dialogului.</strong><br>Alege răspunsul corect, pe baza dialogului dintre Andreea și Kenji.'); }
function checkEx4() { return checkMC('ex4', ex4Items); }
function resetEx4() { ex4Items.forEach(i => delete mcPicked['ex4-' + i.id]); buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); });
