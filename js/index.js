// ;(function () {
//     document.addEventListener('DOMContentLoaded', async function () {
//         try {
//             const response = await fetch('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap')
//             const text = response.ok && response.status === 200 ? await response.text() : new Error(response.statusText)
//             const css = text.replace(/}/g, 'font-display: swap; }')
//             const head = document.getElementsByTagName('head')[0];
//             const style = document.createElement('style');
//             style.appendChild(document.createTextNode(css));
//             head.appendChild(style);
//         } catch (e) {
//             console.log(e)
//         }
//     })
// }())
