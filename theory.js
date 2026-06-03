// ============================================
// TEORIE - Familie und Kultur (Conversație B1-B2)
// Claudia Toth · rolul familiei în diferite culturi
// Sursă: materialul propriu Claudia Toth (© 2026)
// ============================================

const theoryHTML = `
    <!-- 0: Situație + sarcină -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Situația & sarcina ta</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Bine ai venit la prima lecție de <strong>conversație</strong>! Aici nu memorezi reguli — înveți să <strong>vorbești liber</strong> despre o temă de cultură generală: familia. Vei avea vocabular, expresii idiomatice și fraze gata de folosit, plus un dialog model pe care îl asculți și apoi îl imiți.</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📍 Situation</h4>
                <p>🇩🇪 Zwei internationale Studierende treffen sich in einem Café nahe ihrer Universität. Sie sind im selben Seminar zum Thema <em>Familienstrukturen in verschiedenen Kulturen</em> eingeschrieben und tauschen sich über die Familienbilder in ihren Heimatländern aus.</p>
                <p style="margin-top:6px;">🇷🇴 Doi studenți internaționali se întâlnesc într-o cafenea lângă universitate. Sunt la același seminar despre „structuri familiale în diferite culturi" și schimbă impresii despre modelele de familie din țările lor de origine.</p>
            </div>

            <div class="theory-box" style="background:#ecfdf5;border-color:#10b981;">
                <h4>🎯 Aufgabe / Sarcina</h4>
                <p>🇩🇪 Gestalten Sie einen Dialog über traditionelle und moderne Familienstrukturen. Bringen Sie persönliche Erfahrungen, Emotionen und Erzählungen ein.</p>
                <p style="margin-top:6px;">🇷🇴 Construiește un dialog despre structurile familiale tradiționale și moderne. Integrează experiențe personale, emoții și povești.</p>
            </div>

            <div class="theory-box" style="background:#fef3c7;border-color:#f59e0b;">
                <h4>✍️ Notă despre diacritice</h4>
                <p>Verificarea e blândă: poți scrie Umlaut-urile corect (<em>Großfamilie</em>) sau cu varianta de înlocuire (<em>Grossfamilie</em>). Ambele sunt acceptate.</p>
            </div>
        </div>
    </div>

    <!-- 1: Vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📖 2. Vocabular esențial (Wortschatz)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-vocabular.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">die Kernfamilie</td><td>familia nucleu</td><td><em>Die Kernfamilie besteht aus Eltern und Kindern.</em></td></tr>
                    <tr><td class="verb">die Großfamilie</td><td>familia extinsă</td><td><em>Früher lebte man oft in einer Großfamilie.</em></td></tr>
                    <tr><td class="verb">die Patchworkfamilie</td><td>familia recompusă</td><td><em>Patchworkfamilien werden immer häufiger.</em></td></tr>
                    <tr><td class="verb">die Erziehung</td><td>educația / creșterea</td><td><em>Die Erziehung unterscheidet sich je nach Kultur.</em></td></tr>
                    <tr><td class="verb">der Wert · die Werte</td><td>valoarea · valorile</td><td><em>Jede Familie vermittelt eigene Werte.</em></td></tr>
                    <tr><td class="verb">die Tradition</td><td>tradiția</td><td><em>Diese Tradition hat sich über Generationen erhalten.</em></td></tr>
                    <tr><td class="verb">der Zusammenhalt</td><td>coeziunea / solidaritatea</td><td><em>Der familiäre Zusammenhalt ist sehr wichtig.</em></td></tr>
                    <tr><td class="verb">die Rollenverteilung</td><td>distribuția rolurilor</td><td><em>Die Rollenverteilung hat sich stark verändert.</em></td></tr>
                    <tr><td class="verb">der Wandel</td><td>schimbarea / transformarea</td><td><em>Der gesellschaftliche Wandel beeinflusst die Familie.</em></td></tr>
                    <tr><td class="verb">das Selbstbestimmungsrecht</td><td>dreptul la autodeterminare</td><td><em>Junge Menschen pochen auf ihr Selbstbestimmungsrecht.</em></td></tr>
                    <tr><td class="verb">die Gleichberechtigung</td><td>egalitatea de gen</td><td><em>Gleichberechtigung ist heutzutage selbstverständlich.</em></td></tr>
                    <tr><td class="verb">die Erwartungen (Pl.)</td><td>așteptările</td><td><em>Die Erwartungen der Eltern sind manchmal schwer.</em></td></tr>
                    <tr><td class="verb">die Geborgenheit</td><td>sentimentul de siguranță / căldura</td><td><em>Familie bedeutet für mich Geborgenheit.</em></td></tr>
                    <tr><td class="verb">der Generationskonflikt</td><td>conflictul dintre generații</td><td><em>Generationskonflikte entstehen durch unterschiedliche Werte.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 2: Redewendungen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>💬 3. Expresii idiomatice (Redewendungen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-redewendungen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Redewendung</th><th>Înțeles</th><th>Echivalent RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Das ist Schnee von gestern.</td><td>Nu mai e relevant / actual.</td><td>Asta-i apă trecută.</td></tr>
                    <tr><td class="verb">Da beißt die Maus keinen Faden ab.</td><td>Nu se poate schimba nimic.</td><td>Ce-i scris în frunte nu poți schimba.</td></tr>
                    <tr><td class="verb">Da geht mir ein Licht auf.</td><td>Am înțeles ceva brusc.</td><td>Mi-a picat fisa! / M-a luminat!</td></tr>
                    <tr><td class="verb">Nicht alles, was glänzt, ist Gold.</td><td>Nu tot ce e frumos e valoros.</td><td>Nu tot ce strălucește e aur.</td></tr>
                    <tr><td class="verb">Man soll den Tag nicht vor dem Abend loben.</td><td>Nu te bucura prea devreme!</td><td>Nu vinde pielea ursului din pădure!</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">O singură expresie idiomatică bine plasată într-un dialog impresionează examinatorul la proba orală B1-B2. Alege-ți una preferată din tabel și folosește-o azi în propriul tău dialog!</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Fraze utile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🗣️ 4. Fraze utile pe situații (Nützliche Phrasen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-phrasen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">4.1 Cum începi discuția</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Weißt du, in meiner Kultur...</td><td>Știi, în cultura mea...</td></tr>
                    <tr><td class="verb">Wie ist das eigentlich bei euch in [Land]?</td><td>Cum stă treaba la voi în [țară]?</td></tr>
                    <tr><td class="verb">Wenn ich an meine Kindheit denke, dann...</td><td>Când mă gândesc la copilăria mea...</td></tr>
                    <tr><td class="verb">Meine Großeltern haben immer erzählt, dass...</td><td>Bunicii mei povesteau mereu că...</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">4.2 Despre structuri familiale</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">In [Land] ist es so, dass...</td><td>În [țară], situația este că...</td></tr>
                    <tr><td class="verb">Früher war es gang und gäbe, dass...</td><td>Altădată era obișnuit ca...</td></tr>
                    <tr><td class="verb">Heutzutage tendieren viele junge Menschen dazu,...</td><td>Astăzi, mulți tineri tind să...</td></tr>
                    <tr><td class="verb">In [Land] legen wir großen Wert auf...</td><td>În [țară], acordăm o mare importanță...</td></tr>
                </tbody>
            </table>
            <p style="margin-top:6px;color:#6b7280;font-style:italic;">* gang und gäbe = obișnuit, răspândit, general acceptat.</p>

            <h4 style="color:#065f46;margin:16px 0 8px;">4.3 Opinii & emoții</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Ehrlich gesagt wünsche ich mir manchmal...</td><td>Sincer vorbind, uneori mi-aș dori...</td></tr>
                    <tr><td class="verb">Das berührt mich wirklich, weil...</td><td>Asta mă emoționează cu adevărat, pentru că...</td></tr>
                    <tr><td class="verb">Es macht mich stolz zu wissen, dass...</td><td>Mă mândresc să știu că...</td></tr>
                    <tr><td class="verb">Das habe ich noch nie so betrachtet.</td><td>Nu m-am gândit niciodată la asta așa.</td></tr>
                    <tr><td class="verb">Ich verstehe, was du meinst, aber in meiner Kultur...</td><td>Înțeleg ce vrei să spui, dar în cultura mea...</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 4: Mini-ghid -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🧭 5. Cum construiești un dialog cultural autentic</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-ghid.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>🔑 Rețeta unui dialog bun (B1-B2)</h4>
                <ol style="margin-left:22px;">
                    <li><strong>Deschide</strong> cu o frază din 4.1 („Weißt du, in meiner Kultur...").</li>
                    <li><strong>Întreabă</strong> partenerul despre cultura lui („Wie ist das bei euch?").</li>
                    <li><strong>Compară</strong> trecut ↔ prezent („Früher... heutzutage...").</li>
                    <li><strong>Adaugă emoție</strong> personală („Das berührt mich, weil...").</li>
                    <li><strong>Plasează o expresie idiomatică</strong> („Das ist Schnee von gestern").</li>
                    <li><strong>Închide</strong> cu o concluzie comună (echilibru tradiție ↔ modernitate).</li>
                </ol>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Acum ascultă dialogul model dintre Andreea și Kenji — vei auzi exact rețeta de mai sus în acțiune. Apoi treci la exerciții și, la final, scrii propriul tău dialog. 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
