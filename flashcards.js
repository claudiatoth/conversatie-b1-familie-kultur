// ============================================
// FLASHCARDS - Familie und Kultur (Conversație B1-B2)
// Claudia Toth · 32 carduri (vocabular + idiomuri + fraze) cu TTS
// ============================================

const flashcardsData = [
    // Vocabular
    { de: "die Kernfamilie", ro: "familia nucleu (parinti + copii)" },
    { de: "die Großfamilie", ro: "familia extinsa (mai multe generatii)" },
    { de: "die Patchworkfamilie", ro: "familia recompusa" },
    { de: "die Erziehung", ro: "educatia / cresterea" },
    { de: "der Wert · die Werte", ro: "valoarea · valorile" },
    { de: "die Tradition · die Traditionen", ro: "traditia · traditiile" },
    { de: "der Zusammenhalt", ro: "coeziunea / solidaritatea" },
    { de: "die Rollenverteilung", ro: "distributia rolurilor" },
    { de: "der Wandel", ro: "schimbarea / transformarea" },
    { de: "das Selbstbestimmungsrecht", ro: "dreptul la autodeterminare" },
    { de: "die Gleichberechtigung", ro: "egalitatea de gen" },
    { de: "die Erwartungen (Pl.)", ro: "asteptarile" },
    { de: "die Geborgenheit", ro: "sentimentul de siguranta / caldura" },
    { de: "der Generationskonflikt", ro: "conflictul dintre generatii" },
    // Idiomuri
    { de: "Das ist Schnee von gestern.", ro: "Nu mai e actual / relevant (apa trecuta)." },
    { de: "Da beißt die Maus keinen Faden ab.", ro: "Nu se poate schimba nimic." },
    { de: "Da geht mir ein Licht auf.", ro: "Inteleg ceva brusc (mi-a picat fisa)." },
    { de: "Nicht alles, was glänzt, ist Gold.", ro: "Nu tot ce straluceste e aur." },
    { de: "Man soll den Tag nicht vor dem Abend loben.", ro: "Nu te bucura prea devreme!" },
    { de: "gang und gäbe", ro: "obisnuit, raspandit, general acceptat" },
    // Fraze utile
    { de: "Weißt du, in meiner Kultur...", ro: "Stii, in cultura mea..." },
    { de: "Wie ist das eigentlich bei euch?", ro: "Cum sta treaba la voi?" },
    { de: "Wenn ich an meine Kindheit denke...", ro: "Cand ma gandesc la copilaria mea..." },
    { de: "Meine Großeltern haben immer erzählt, dass...", ro: "Bunicii mei povesteau mereu ca..." },
    { de: "Früher war es gang und gäbe, dass...", ro: "Altadata era obisnuit ca..." },
    { de: "Heutzutage tendieren viele junge Menschen dazu,...", ro: "Astazi multi tineri tind sa..." },
    { de: "In meiner Familie legen wir großen Wert auf...", ro: "In familia mea acordam mare importanta..." },
    { de: "Ehrlich gesagt wünsche ich mir manchmal...", ro: "Sincer vorbind, uneori mi-as dori..." },
    { de: "Das berührt mich wirklich, weil...", ro: "Asta ma emotioneaza cu adevarat, fiindca..." },
    { de: "Es macht mich stolz zu wissen, dass...", ro: "Ma mandresc sa stiu ca..." },
    { de: "Genau das habe ich auch erlebt.", ro: "Exact asta am trait si eu." },
    { de: "Ich verstehe, was du meinst, aber...", ro: "Inteleg ce vrei sa spui, dar..." }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: vocabular + expresii idiomatice + fraze utile pentru conversație.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
