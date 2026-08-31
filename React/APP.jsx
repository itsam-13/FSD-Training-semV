const container = document.getElementById('container')
const root  = ReactDOM.createRoot(container);

const h1 = React.createElement('h1', {style: {color:'purple'}}, 'welcome to react js')
const h2 = React.createElement('h2', {style: {color:'purple'}}, 'working react')
const img = React.createElement('img', {src: 'https://images.unsplash.com/photo-1760577450944-ebbfc6258004?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'scenery' });
const div = React.createElement('div', {}, img,h1, h2);


root.render(div);