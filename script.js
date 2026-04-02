// ✅ 1 CLIC = Dialogflow natif DIRECT
document.getElementById('dialogflow-trigger').onclick = () => document.querySelector('df-messenger').click();

// Stats
const stats = document.querySelectorAll('.stat-number'),
    o = new IntersectionObserver(e => {
        if (e[0].isIntersecting) stats.forEach(s => {
            const t = +s.dataset.target;
            let c = 0;
            const i = setInterval(() => {
                c += t / 50;
                if (c >= t) {
                    s.textContent = t + '%';
                    clearInterval(i)
                } else s.textContent = Math.ceil(c) + '%'
            }, 30)
        })
    });
stats.forEach(s => o.observe(s.parentElement));

// Chart (index.html seulement)
document.addEventListener('DOMContentLoaded', () => { const c = document.getElementById('advantagesChart'); if (c) new Chart(c, { type: 'bar', data: { labels: ['Résultats', 'Engagement', 'Temps gagné', 'Rétention'], datasets: [{ label: 'Traditionnel', data: [60, 45, 25, 50], backgroundColor: 'rgba(239,68,68,0.7)', borderColor: '#ef4444', borderWidth: 2 }, { label: 'IA', data: [85, 60, 40, 75], backgroundColor: 'rgba(16,185,129,0.8)', borderColor: '#10b981', borderWidth: 2 }] }, options: { responsive: true, scales: { y: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } }, x: { grid: { display: false } } }, plugins: { legend: { position: 'top' } }, animation: { duration: 2000 } } }) });