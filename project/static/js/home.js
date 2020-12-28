const safety = document.getElementById('safety')
const security = document.getElementById('security')
const welfare = document.getElementById('welfare')
const miscellaneous = document.getElementById('miscellaneous')
const overall = document.getElementById('overall')
var category

safety.addEventListener('click', () => {
    category = 'safety'
    localStorage.setItem('category', category)
})
security.addEventListener('click', () => {
    category = 'security'
    localStorage.setItem('category', category)
})
welfare.addEventListener('click', () => {
    category = 'welfare'
    localStorage.setItem('category', category)
})
miscellaneous.addEventListener('click', () => {
    category = 'miscellaneous'
    localStorage.setItem('category', category)
})
overall.addEventListener('click', () => {
    category = 'overall'
    localStorage.setItem('category', category)
})